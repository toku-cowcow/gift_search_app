"""
Phase 3: パフォーマンス最適化版 LangChain RAGサービス

このファイルの役割:
- Phase 2の機能を保持しつつ、応答時間を大幅短縮
- 並列処理、キャッシュ、プロンプト最適化の実装
- 3-5秒以内の応答時間を目指す
"""

import asyncio
import json
import logging
import hashlib
import time
from typing import List, Dict, Any, Optional, Tuple
from datetime import datetime, timedelta
from concurrent.futures import ThreadPoolExecutor

# LangChain imports
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.documents import Document
from langchain_community.vectorstores import FAISS

from ..core.config import settings
from ..schemas import GiftItem, SearchParams
from .search_service_fixed import MeilisearchService
from .hybrid_search_engine import HybridSearchEngine

# ログ設定
logger = logging.getLogger(__name__)


class PerformanceOptimizer:
    """パフォーマンス最適化ユーティリティ"""
    
    def __init__(self):
        self.cache = {}
        self.cache_ttl = timedelta(minutes=30)  # 30分キャッシュ
        self.executor = ThreadPoolExecutor(max_workers=4)
    
    def get_cache_key(self, data: Any) -> str:
        """キャッシュキー生成"""
        return hashlib.md5(str(data).encode()).hexdigest()
    
    def get_cached(self, key: str) -> Optional[Any]:
        """キャッシュから取得"""
        if key in self.cache:
            value, timestamp = self.cache[key]
            if datetime.now() - timestamp < self.cache_ttl:
                return value
            else:
                del self.cache[key]
        return None
    
    def set_cached(self, key: str, value: Any):
        """キャッシュに保存"""
        self.cache[key] = (value, datetime.now())
    
    def clear_cache(self):
        """キャッシュクリア"""
        self.cache.clear()


class OptimizedUserIntentExtractor:
    """最適化版意図抽出器"""
    
    def __init__(self, llm: ChatOpenAI, optimizer: PerformanceOptimizer):
        self.llm = llm
        self.optimizer = optimizer
        self._setup_optimized_prompt()
    
    def _setup_optimized_prompt(self):
        """最適化された簡潔プロンプト"""            
        self.intent_prompt = ChatPromptTemplate.from_messages([
            ("system", """
ユーザーの入力から意図を抽出し、JSON形式で返してください。

例：
入力: "用途: 結婚内祝い、相手: 上司・目上の方、予算: 3000円〜5000円"
出力: {"occasion":"wedding_return","target_relationship":"boss","budget_min":3000,"budget_max":5000,"keywords":["上品","内祝い"]}

予算の抽出規則:
- "3000円〜5000円" → budget_min:3000, budget_max:5000
- "5000円くらい" → budget_min:4000, budget_max:6000  
- "1万円以下" → budget_min:null, budget_max:10000
- "予算なし" → budget_min:null, budget_max:null

occasion: wedding_return(結婚内祝い), baby_return(出産内祝い), funeral_return(香典返し), celebration_return(お祝い返し), business(ビジネス関係), other(その他), unknown
target_relationship: boss(上司・目上の方), colleague(同僚), friend(友人), family(親族), client(取引先), other(その他), unknown  
budget_min/max: 数値またはnull
keywords: 関連キーワード配列

JSONのみを返してください。説明や前書きは不要です。
"""),
            ("user", "{user_input}")
        ])
    
    async def extract_intent(self, user_input: str) -> Dict[str, Any]:
        """
        キャッシュ付き高速意図抽出
        """
        # キャッシュ確認（一時的に無効化）
        # cache_key = self.optimizer.get_cache_key(f"intent_{user_input}")
        # cached_result = self.optimizer.get_cached(cache_key)
        
        # if cached_result:
        #     logger.info(f"意図抽出キャッシュヒット: {user_input[:50]}...")
        #     return cached_result
        
        try:
            start_time = time.time()
            
            logger.info(f"🔍 意図抽出開始: {user_input}")
            
            response = await self.llm.ainvoke(
                self.intent_prompt.format_messages(user_input=user_input)
            )
            
            # 改善されたJSON解析
            content = response.content.strip()
            logger.info(f"🤖 LLM生レスポンス: {content}")
            
            # JSONブロックマーカーを除去
            if content.startswith('```'):
                content = content.strip('`')
                if content.startswith('json\n'):
                    content = content[5:]  # "json\n"を削除
                elif content.startswith('json'):
                    content = content[4:]  # "json"を削除
                content = content.strip()
            
            # JSON以外のテキストを除去（最初の{から最後の}まで抽出）
            start_idx = content.find('{')
            end_idx = content.rfind('}') + 1
            if start_idx >= 0 and end_idx > start_idx:
                content = content[start_idx:end_idx]
            
            logger.info(f"🔧 処理後JSON: {content}")
            
            # Pythonっぽい記法をJSON形式に変換
            content = content.replace("'", '"')  # 単一引用符を二重引用符に
            content = content.replace('None', 'null')  # Noneをnullに
            content = content.replace('True', 'true')  # Trueをtrueに
            content = content.replace('False', 'false')  # Falseをfalseに
            
            intent = json.loads(content)
            logger.info(f"✅ パース済み意図: {intent}")
            
            # デフォルト値補完
            intent = self._normalize_intent(intent)
            
            # キャッシュに保存（一時的に無効化）
            # self.optimizer.set_cached(cache_key, intent)
            
            elapsed = time.time() - start_time
            logger.info(f"意図抽出完了: {elapsed:.2f}s, {intent}")
            
            return intent
            
        except Exception as e:
            logger.warning(f"意図抽出エラー: {str(e)}")
            return self._get_default_intent()
    
    def _normalize_intent(self, intent: Dict[str, Any]) -> Dict[str, Any]:
        """意図データ正規化（高速版）"""
        return {
            "occasion": intent.get("occasion", "unknown"),
            "target_relationship": intent.get("target_relationship", "unknown"),
            "budget_min": intent.get("budget_min"),
            "budget_max": intent.get("budget_max"),
            "keywords": intent.get("keywords", []) if isinstance(intent.get("keywords"), list) else [],
            "gender": intent.get("gender", "unknown"),
            "urgency": intent.get("urgency", "normal")
        }
    
    def _get_default_intent(self) -> Dict[str, Any]:
        """デフォルト意図（最小限）"""
        return {
            "occasion": "unknown",
            "target_relationship": "unknown",
            "budget_min": None,
            "budget_max": None,
            "keywords": [],
            "gender": "unknown",
            "urgency": "normal"
        }


class OptimizedLangChainRAGService:
    """Phase 3: パフォーマンス最適化版RAGサービス"""
    
    def __init__(self):
        """初期化"""
        self.meilisearch_service = MeilisearchService()
        
        # パフォーマンス最適化コンポーネント
        self.optimizer = PerformanceOptimizer()
        
        # 最適化されたLLM設定
        self.llm = ChatOpenAI(
            model_name=settings.openai_model,
            temperature=0.1,  # 低温度で高速化
            max_tokens=800,   # トークン数制限
            api_key=settings.openai_api_key
        )
        
        self.embeddings = OpenAIEmbeddings(api_key=settings.openai_api_key)
        
        # 最適化された意図抽出器
        self.intent_extractor = OptimizedUserIntentExtractor(self.llm, self.optimizer)
        
        # ベクトルストア（軽量版）
        self.vector_store = None
        self.hybrid_engine = None
        
        # 初期化
        self._initialize_optimized_components()
    
    def _initialize_optimized_components(self):
        """最適化コンポーネントの初期化"""
        try:
            # 軽量ベクトルストア読み込み
            import os
            vector_store_path = os.path.join(
                os.path.dirname(__file__), 
                "../../../data/vector_store"
            )
            
            if os.path.exists(vector_store_path):
                self.vector_store = FAISS.load_local(
                    vector_store_path, 
                    self.embeddings,
                    allow_dangerous_deserialization=True
                )
                logger.info("✅ 最適化ベクトルストア読み込み完了")
            
            # 最適化ハイブリッドエンジン
            if self.vector_store:
                self.hybrid_engine = HybridSearchEngine(
                    meilisearch_service=self.meilisearch_service,
                    vector_store=self.vector_store
                )
                # 検索重みを高速化向けに調整
                self.hybrid_engine.search_weights = {
                    "semantic_weight": 0.7,  # セマンティック重視
                    "structured_weight": 0.3,
                    "intent_boost": 0.15
                }
                logger.info("✅ 最適化ハイブリッドエンジン初期化完了")
            
        except Exception as e:
            logger.error(f"最適化コンポーネント初期化エラー: {str(e)}")
    
    async def get_fast_recommendation(
        self,
        user_input: str,
        chat_history: List[Dict[str, str]] = None,
        limit: int = 3  # 推薦数を削減
    ) -> Dict[str, Any]:
        """
        Phase 3: 高速推薦メイン処理
        
        目標: 3-5秒以内での応答
        """
        start_time = datetime.now()
        processing_steps = []
        
        try:
            logger.info("Phase 3: 高速推薦開始")
            
            # Step 1: 意図抽出（キャッシュ付き並列実行準備）
            intent_task = asyncio.create_task(
                self.intent_extractor.extract_intent(user_input)
            )
            
            # Step 2: 並列でハイブリッド検索準備
            if self.hybrid_engine:
                # 意図抽出完了を待つ
                user_intent = await intent_task
                processing_steps.append(f"高速意図抽出完了")
                
                # Step 3: 最適化ハイブリッド検索
                search_start = time.time()
                hybrid_results, search_metadata = await self._fast_hybrid_search(
                    query=user_input,
                    user_intent=user_intent,
                    limit=limit
                )
                search_time = time.time() - search_start
                processing_steps.append(f"高速ハイブリッド検索: {search_time:.2f}s")
                
                # Step 4: 高速AI応答生成
                response_start = time.time()
                ai_response = await self._generate_fast_response(
                    user_input=user_input,
                    user_intent=user_intent,
                    recommended_products=hybrid_results
                )
                response_time = time.time() - response_start
                processing_steps.append(f"高速応答生成: {response_time:.2f}s")
                
                total_time = (datetime.now() - start_time).total_seconds()
                
                return {
                    "ai_response": ai_response,
                    "recommendations": hybrid_results,
                    "user_intent": user_intent,
                    "search_metadata": search_metadata,
                    "processing_steps": processing_steps,
                    "performance": {
                        "total_time_ms": total_time * 1000,
                        "search_time_ms": search_time * 1000,
                        "response_time_ms": response_time * 1000,
                        "optimization": "phase3_fast"
                    },
                    "reasoning": "Phase 3高速最適化（並列処理 + キャッシュ + 軽量プロンプト）"
                }
            
            else:
                # フォールバック
                user_intent = await intent_task
                return await self._fallback_fast_search(user_input, user_intent, limit)
                
        except Exception as e:
            logger.error(f"高速推薦エラー: {str(e)}")
            return await self._emergency_response(user_input)
    
    async def _fast_hybrid_search(
        self,
        query: str,
        user_intent: Dict[str, Any],
        limit: int
    ) -> Tuple[List[GiftItem], Dict[str, Any]]:
        """最適化ハイブリッド検索"""
        try:
            # 検索範囲を制限（高速化）
            limited_limit = min(limit * 2, 6)  # 最大6件まで
            
            results, metadata = await self.hybrid_engine.hybrid_search(
                query=query,
                user_intent=user_intent,
                limit=limited_limit,
                semantic_threshold=0.6  # 閾値を下げて高速化
            )
            
            return results[:limit], metadata
            
        except Exception as e:
            logger.error(f"高速ハイブリッド検索エラー: {str(e)}")
            return [], {"error": str(e), "fallback": True}
    
    async def _generate_fast_response(
        self,
        user_input: str,
        user_intent: Dict[str, Any],
        recommended_products: List[GiftItem]
    ) -> str:
        """高速AI応答生成（簡潔プロンプト版）"""
        # キャッシュ確認
        response_key = self.optimizer.get_cache_key(
            f"response_{user_input}_{len(recommended_products)}"
        )
        cached_response = self.optimizer.get_cached(response_key)
        
        if cached_response:
            logger.info("AI応答キャッシュヒット")
            return cached_response
        
        try:
            # 簡潔プロンプト
            if recommended_products:
                products_text = "\n".join([
                    f"{i+1}. {p.title} - {p.price:,}円"
                    for i, p in enumerate(recommended_products[:3])
                ])
            else:
                products_text = "該当する商品が見つかりませんでした。"
            
            fast_prompt = f"""
内祝いギフトアドバイザーとして、簡潔に推薦してください。

要望: {user_input}

推薦商品:
{products_text}

用途: {user_intent.get('occasion', '不明')}
相手: {user_intent.get('target_relationship', '不明')}

以下の形式で回答（200文字以内）:
1. 推薦理由
2. おすすめ商品（上位2つ）
3. 一言アドバイス
"""
            
            response = await self.llm.ainvoke(fast_prompt)
            result = response.content
            
            # キャッシュに保存
            self.optimizer.set_cached(response_key, result)
            
            return result
            
        except Exception as e:
            logger.error(f"高速応答生成エラー: {str(e)}")
            return self._get_emergency_text(user_input, recommended_products)
    
    async def _fallback_fast_search(
        self,
        user_input: str,
        user_intent: Dict[str, Any],
        limit: int
    ) -> Dict[str, Any]:
        """フォールバック高速検索"""
        try:
            # 構造化検索のみで高速化
            search_params = SearchParams(
                q=user_input,
                occasion=user_intent.get('occasion') if user_intent.get('occasion') != 'unknown' else None,
                price_min=user_intent.get('budget_min'),
                price_max=user_intent.get('budget_max'),
                limit=limit
            )
            
            search_result = self.meilisearch_service.search_items(search_params)
            
            # 簡単な応答生成
            simple_response = f"「{user_input}」に対して{len(search_result.hits)}件の商品をご提案いたします。"
            
            return {
                "ai_response": simple_response,
                "recommendations": search_result.hits,
                "user_intent": user_intent,
                "search_metadata": {"strategy": "fallback_structured_only"},
                "processing_steps": ["フォールバック構造化検索"],
                "reasoning": "高速フォールバック検索"
            }
            
        except Exception as e:
            logger.error(f"フォールバック検索エラー: {str(e)}")
            return await self._emergency_response(user_input)
    
    async def _emergency_response(self, user_input: str) -> Dict[str, Any]:
        """緊急時の最小応答"""
        return {
            "ai_response": f"申し訳ございません。「{user_input}」についてのご要望を承りました。少々お時間をいただいて、最適な商品をお探しいたします。",
            "recommendations": [],
            "user_intent": {"occasion": "unknown"},
            "search_metadata": {"strategy": "emergency"},
            "processing_steps": ["緊急応答"],
            "reasoning": "緊急時最小応答"
        }
    
    def _get_emergency_text(self, user_input: str, products: List[GiftItem]) -> str:
        """緊急時テキスト生成"""
        if products:
            return f"「{user_input}」のご要望にお応えして、{len(products)}件の商品をご提案させていただきます。ご検討ください。"
        else:
            return f"「{user_input}」に合う商品をお探ししております。別の条件でもお気軽にお声がけください。"
    
    async def health_check(self) -> Dict[str, Any]:
        """ヘルスチェック（最適化版）"""
        return {
            "status": "healthy",
            "optimization": "phase3",
            "cache_size": len(self.optimizer.cache),
            "hybrid_engine_ready": self.hybrid_engine is not None,
            "vector_store_ready": self.vector_store is not None
        }