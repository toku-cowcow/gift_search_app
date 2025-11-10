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
import os
from typing import List, Dict, Any, Optional, Tuple
from datetime import datetime, timedelta
from concurrent.futures import ThreadPoolExecutor
from threading import Lock

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


# ログ設定
logger = logging.getLogger(__name__)


class VectorStoreManager:
    """ベクトルストアのシングルトン管理"""
    
    _instance = None
    _vector_store = None
    _lock = Lock()
    
    @classmethod
    def get_vector_store(cls) -> Optional[FAISS]:
        """ベクトルストアを取得（シングルトン）"""
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = cls()
                    cls._instance._load_vector_store()
        
        return cls._vector_store
    
    def _load_vector_store(self):
        """ベクトルストアを読み込み"""
        try:
            if not settings.is_ai_enabled():
                logger.warning("OpenAI APIキーが未設定のため、ベクトルストアは読み込まれません")
                VectorStoreManager._vector_store = None
                return
                
            vector_store_path = os.path.join(
                os.path.dirname(__file__), 
                "../../../data/vector_store"
            )
            
            if os.path.exists(vector_store_path):
                embeddings = OpenAIEmbeddings(api_key=settings.openai_api_key)
                VectorStoreManager._vector_store = FAISS.load_local(
                    vector_store_path, 
                    embeddings,
                    allow_dangerous_deserialization=True
                )
                logger.info("✅ ベクトルストア読み込み完了（シングルトン）")
            else:
                logger.warning(f"ベクトルストアが見つかりません: {vector_store_path}")
                VectorStoreManager._vector_store = None
                
        except Exception as e:
            logger.error(f"ベクトルストア読み込みエラー: {str(e)}")
            VectorStoreManager._vector_store = None
    
    @classmethod
    def cleanup(cls):
        """リソースクリーンアップ"""
        with cls._lock:
            cls._vector_store = None
            cls._instance = None


from functools import lru_cache
from threading import Lock

class PerformanceOptimizer:
    """パフォーマンス最適化ユーティリティ"""
    
    _instance = None
    _lock = Lock()
    
    def __new__(cls):
        """シングルトンパターンで1つのインスタンスのみ生成"""
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self):
        if hasattr(self, '_initialized'):
            return
            
        self.cache = {}
        self.cache_ttl = timedelta(minutes=30)  # 30分キャッシュ
        self.max_cache_size = 1000  # キャッシュサイズ制限
        self._executor = None
        self._lock = Lock()
        self._initialized = True
    
    def get_executor(self) -> ThreadPoolExecutor:
        """ThreadPoolExecutorを遅延初期化で取得"""
        if self._executor is None:
            with self._lock:
                if self._executor is None:
                    self._executor = ThreadPoolExecutor(max_workers=4)
        return self._executor
    
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
        """キャッシュに保存（サイズ制限付き）"""
        # キャッシュサイズ制限チェック
        if len(self.cache) >= self.max_cache_size:
            # 古いエントリを削除（LRU的に）
            oldest_key = min(self.cache.keys(), 
                           key=lambda k: self.cache[k][1])
            del self.cache[oldest_key]
            
        self.cache[key] = (value, datetime.now())
    
    def clear_cache(self):
        """キャッシュクリア"""
        self.cache.clear()
        
    def cleanup(self):
        """リソースの適切なクリーンアップ"""
        if self._executor is not None:
            self._executor.shutdown(wait=True)
            self._executor = None
        self.clear_cache()
    
    def __del__(self):
        """デストラクタでリソースクリーンアップ"""
        self.cleanup()


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
            
        except json.JSONDecodeError as e:
            logger.warning(f"JSON解析エラー: {str(e)}、フォールバック使用")
            fallback_intent = self._extract_intent_fallback(user_input)
            return fallback_intent
            
        except ConnectionError as e:
            logger.error(f"LLM接続エラー: {str(e)}、フォールバック使用")
            fallback_intent = self._extract_intent_fallback(user_input)
            return fallback_intent
            
        except ValueError as e:
            logger.warning(f"意図データ変換エラー: {str(e)}、フォールバック使用")
            fallback_intent = self._extract_intent_fallback(user_input)
            return fallback_intent
            
        except Exception as e:
            logger.error(f"予期しないエラー ({type(e).__name__}): {str(e)}")
            import traceback
            logger.error(f"スタックトレース: {traceback.format_exc()}")
            
            # 簡易的な意図抽出フォールバック
            fallback_intent = self._extract_intent_fallback(user_input)
            logger.info(f"フォールバック意図抽出結果: {fallback_intent}")
            return fallback_intent
    
    def _normalize_intent(self, intent: Dict[str, Any]) -> Dict[str, Any]:
        """意図データ正規化（高速版）"""
        
        # 日本語→英語マッピング（Meilisearchデータの実際の値に合わせて修正）
        occasion_mapping = {
            "結婚内祝い": "wedding_return",
            "結婚祝い": "wedding",
            "出産内祝い": "baby_return",  # birth_return -> baby_return に修正
            "出産祝い": "baby_return",    # 出産祝いも同じくbaby_returnにマップ
            "誕生日": "birthday",
            "母の日": "mothers_day",
            "父の日": "fathers_day",
            "敬老の日": "respect_for_aged_day",
            "クリスマス": "christmas",
            "お歳暮": "oseibo",
            "お中元": "ochugen",
            "新築祝い": "new_house",
            "引越し祝い": "moving",
            "卒業祝い": "graduation",
            "入学祝い": "entrance",
            "昇進祝い": "promotion",
            "退職祝い": "retirement"
        }
        
        relationship_mapping = {
            "上司・目上の方": "boss",
            "友人": "friend",
            "家族": "family",
            "恋人": "lover",
            "同僚": "colleague",
            "部下": "subordinate",
            "親戚": "relative",
            "知人": "acquaintance"
        }
        
        # occasionを正規化
        occasion_raw = intent.get("occasion", "unknown")
        occasion_normalized = occasion_mapping.get(occasion_raw, occasion_raw)
        
        # relationshipを正規化
        relationship_raw = intent.get("relationship", intent.get("target_relationship", "unknown"))
        relationship_normalized = relationship_mapping.get(relationship_raw, relationship_raw)
        
        # 予算を数値に変換
        budget_min = intent.get("budget_min")
        budget_max = intent.get("budget_max")
        
        try:
            if budget_min and isinstance(budget_min, str):
                budget_min = int(budget_min)
        except (ValueError, TypeError):
            budget_min = None
            
        try:
            if budget_max and isinstance(budget_max, str):
                budget_max = int(budget_max)
        except (ValueError, TypeError):
            budget_max = None
        
        return {
            "occasion": occasion_normalized,
            "target_relationship": relationship_normalized,
            "budget_min": budget_min,
            "budget_max": budget_max,
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
    
    def _extract_intent_fallback(self, user_input: str) -> Dict[str, Any]:
        """簡易的な意図抽出（正規表現ベース）"""
        import re
        
        intent = self._get_default_intent()
        
        # 用途の抽出
        if "結婚内祝い" in user_input:
            intent["occasion"] = "wedding_return"
        elif "出産内祝い" in user_input:
            intent["occasion"] = "baby_return"
        elif "香典返し" in user_input:
            intent["occasion"] = "funeral_return"
        elif "お祝い返し" in user_input:
            intent["occasion"] = "celebration_return"
        
        # 相手の抽出
        if "上司" in user_input or "目上" in user_input:
            intent["target_relationship"] = "boss"
        elif "同僚" in user_input:
            intent["target_relationship"] = "colleague"
        elif "友人" in user_input:
            intent["target_relationship"] = "friend"
        elif "親族" in user_input or "家族" in user_input:
            intent["target_relationship"] = "family"
        
        # 予算の抽出（正規表現）
        budget_patterns = [
            r"(\d+)円?〜(\d+)円?",  # 3000円〜5000円
            r"(\d+)〜(\d+)円?",     # 3000〜5000円
            r"予算:?\s*(\d+)円?〜(\d+)円?",  # 予算: 3000円〜5000円
            r"(\d+)円?\s*から\s*(\d+)円?",  # 3000円から5000円
            r"(\d+)\s*-\s*(\d+)円?",       # 3000-5000円
        ]
        
        logger.info(f"🔍 予算抽出対象テキスト: '{user_input}'")
        
        for i, pattern in enumerate(budget_patterns):
            match = re.search(pattern, user_input)
            logger.info(f"  パターン{i+1} '{pattern}': {'マッチ' if match else 'なし'}")
            if match:
                budget_min = int(match.group(1))
                budget_max = int(match.group(2))
                intent["budget_min"] = budget_min
                intent["budget_max"] = budget_max
                logger.info(f"✅ 予算抽出成功: {budget_min}円〜{budget_max}円")
                break
        
        if intent["budget_min"] is None:
            logger.warning("❌ 予算抽出失敗")
        
        logger.info(f"🔄 フォールバック意図抽出: {intent}")
        return intent
    
    async def get_fast_recommendation_with_intent(
        self,
        user_input: str,
        user_intent: Dict[str, Any],
        chat_history: List[Dict[str, str]] = None,
        limit: int = 3
    ) -> Dict[str, Any]:
        """
        Phase 3: 構造化された意図データを使った高速推薦
        
        フロントエンドから構造化された意図データを受け取り、
        意図抽出ステップをスキップして直接検索・推薦を実行
        """
        start_time = datetime.now()
        processing_steps = []
        
        try:
            logger.info(f"Phase 3: 構造化意図での高速推薦開始")
            logger.info(f"📝 受信した意図データ: {user_intent}")
            
            # Step 1: 意図データの正規化
            normalized_intent = self._normalize_intent(user_intent)
            processing_steps.append(f"構造化意図データ受信・正規化完了")
            
            # Step 2: 最適化ハイブリッド検索
            search_start = time.time()
            hybrid_results, search_metadata = await self._fast_hybrid_search(
                query=user_input,
                user_intent=normalized_intent,
                limit=limit * 2  # より多くの候補を取得
            )
            search_time = time.time() - search_start
            processing_steps.append(f"ハイブリッド検索: {search_time:.2f}s")
            
            # Step 3: 予算フィルタリングを強制適用
            if normalized_intent.get('budget_min') or normalized_intent.get('budget_max'):
                hybrid_results = self._apply_budget_filter(hybrid_results, normalized_intent)
                processing_steps.append(f"予算フィルタ適用: {len(hybrid_results)}件")
            
            # Step 4: 上位N件を選択
            final_recommendations = hybrid_results[:limit]
            
            # Step 5: AI応答生成
            response_start = time.time()
            ai_response = await self._generate_fast_response(
                user_input, normalized_intent, final_recommendations
            )
            response_time = time.time() - response_start
            processing_steps.append(f"AI応答生成: {response_time:.2f}s")
            
            # パフォーマンス計測
            total_time = datetime.now() - start_time
            total_time_ms = total_time.total_seconds() * 1000
            
            logger.info(f"✅ 構造化意図推薦完了: {total_time_ms:.0f}ms")
            
            return {
                "recommendations": final_recommendations,
                "ai_response": ai_response,
                "intent_analysis": normalized_intent,
                "search_metadata": search_metadata,
                "processing_steps": processing_steps,
                "performance": {
                    "total_time_ms": total_time_ms,
                    "search_time_ms": search_time * 1000,
                    "response_time_ms": response_time * 1000,
                    "total_endpoint_time_ms": total_time_ms,
                    "optimization": "structured_intent"
                }
            }
            
        except Exception as e:
            logger.error(f"構造化意図推薦エラー: {str(e)}")
            # フォールバック
            return await self.get_fast_recommendation(user_input, chat_history, limit)


class OptimizedLangChainRAGService:
    """Phase 3: パフォーマンス最適化版RAGサービス"""
    
    def __init__(self):
        """初期化"""
        logger.info("Phase 3 最適化RAGサービス初期化開始")
        
        # API設定の検証
        api_validation = settings.validate_api_keys()
        logger.info(f"API利用状況: {api_validation}")
        
        if not settings.is_ai_enabled():
            logger.warning("⚠️ OpenAI APIキーが設定されていません。AI機能は制限されます。")
        
        self.meilisearch_service = MeilisearchService()
        
        # パフォーマンス最適化コンポーネント
        self.optimizer = PerformanceOptimizer()
        
        # 最適化されたLLM設定（APIキーが有効な場合のみ）
        if settings.is_ai_enabled():
            self.llm = ChatOpenAI(
                model_name=settings.openai_model,
                temperature=0.1,  # 低温度で高速化
                max_tokens=800,   # トークン数制限
                api_key=settings.openai_api_key
            )
            
            self.embeddings = OpenAIEmbeddings(api_key=settings.openai_api_key)
        else:
            self.llm = None
            self.embeddings = None
            logger.warning("AI機能は無効化されました")
        
        # 最適化された意図抽出器
        self.intent_extractor = OptimizedUserIntentExtractor(self.llm, self.optimizer)
        
        # ベクトルストア（軽量版）
        self.vector_store = None
        self.hybrid_engine = None
        
        # 初期化
        self._initialize_optimized_components()
    
    def _initialize_optimized_components(self):
        """最適化コンポーネントの初期化（シングルトンベクトルストア使用）"""
        try:
            # シングルトンベクトルストア取得
            self.vector_store = VectorStoreManager.get_vector_store()
            
            if self.vector_store:
                logger.info("✅ 最適化ベクトルストア取得完了（シングルトン）")
                
                # 最適化ハイブリッドエンジン
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
            else:
                logger.warning("ベクトルストアが利用できません（AI機能制限モード）")
                self.hybrid_engine = None
            
        except Exception as e:
            logger.error(f"最適化コンポーネント初期化エラー: {str(e)}")
            self.vector_store = None
            self.hybrid_engine = None
    
    async def get_fast_recommendation(
        self,
        user_input: str,
        chat_history: List[Dict[str, str]] = None,
        limit: int = 3,  # 推薦数を削減
        structured_intent: Dict[str, Any] = None  # 構造化意図データ（新機能）
    ) -> Dict[str, Any]:
        """
        Phase 3: 高速推薦メイン処理
        
        目標: 3-5秒以内での応答
        """
        start_time = datetime.now()
        processing_steps = []
        
        try:
            logger.info("Phase 3: 高速推薦開始")
            
            # 構造化意図データがある場合はそれを使用
            if structured_intent:
                logger.info(f"📝 構造化意図データを使用: {structured_intent}")
                user_intent = self.intent_extractor._normalize_intent(structured_intent)
                processing_steps.append("構造化意図データ使用")
            else:
                # Step 1: 意図抽出（高速並列実行）
                intent_start = time.time()
                user_intent = await self.intent_extractor.extract_intent(user_input)
                intent_time = time.time() - intent_start
                processing_steps.append(f"高速意図抽出: {intent_time:.2f}s")

            # Step 2: ベクターストア初期化と検索を並列実行
            if self.hybrid_engine:
                search_start = time.time()
                
                # ベクターストア初期化と検索準備を並列実行
                init_task = asyncio.create_task(self._ensure_vector_store_ready())
                search_prep_task = asyncio.create_task(self._prepare_search_params(user_intent))
                
                # 初期化完了後、検索実行
                await asyncio.gather(init_task, search_prep_task)
                
                # 検索実行
                hybrid_results, search_metadata = await self._fast_hybrid_search(
                    query=user_input,
                    user_intent=user_intent,
                    limit=limit
                )
                search_time = time.time() - search_start
                processing_steps.append(f"並列ハイブリッド検索: {search_time:.2f}s")
            if self.hybrid_engine:
                search_start = time.time()
                
                
                # 予算フィルタリングを強制適用（事後処理）
                if user_intent.get('budget_min') or user_intent.get('budget_max'):
                    hybrid_results = self._apply_budget_filter(hybrid_results, user_intent)
                    processing_steps.append(f"予算フィルタ適用: {len(hybrid_results)}件")
                
                # Step 3: AI応答生成（並列化の準備）
                response_start = time.time()
                
                # AI応答とメタデータ構築を並列実行
                response_task = asyncio.create_task(self._generate_fast_response(
                    user_input=user_input,
                    user_intent=user_intent,
                    recommended_products=hybrid_results
                ))
                
                # メタデータ構築（並列で実行可能な部分）
                metadata_task = asyncio.create_task(self._build_response_metadata(
                    start_time, search_time, user_intent, search_metadata, processing_steps
                ))
                
                # 両方の完了を待つ
                ai_response, base_metadata = await asyncio.gather(response_task, metadata_task)
                
                response_time = time.time() - response_start
                processing_steps.append(f"高速応答生成: {response_time:.2f}s")
                
                # 最終レスポンス構築
                base_metadata["performance"]["response_time_ms"] = response_time * 1000
                
                return {
                    "ai_response": ai_response,
                    "recommendations": hybrid_results,
                    "user_intent": user_intent,
                    "intent_analysis": user_intent,  # フロントエンド互換性のため
                    **base_metadata
                }
            
            else:
                # ハイブリッドエンジンが利用できない場合のフォールバック
                return await self._emergency_response(user_input)
                
        except Exception as e:
            logger.error(f"高速推薦エラー: {str(e)}")
            return await self._emergency_response(user_input)
    
    async def _build_response_metadata(self, start_time: datetime, search_time: float, 
                                       user_intent: Dict, search_metadata: Dict, 
                                       processing_steps: List[str]) -> Dict:
        """
        レスポンスメタデータを並列処理用に構築
        """
        total_time = (datetime.now() - start_time).total_seconds()
        
        return {
            "search_metadata": search_metadata,
            "processing_steps": processing_steps,
            "performance": {
                "total_time_ms": total_time * 1000,
                "search_time_ms": search_time * 1000,
                "optimization": "phase3_fast"
            }
        }
    
    async def _ensure_vector_store_ready(self):
        """ベクターストアの準備を確実に実行"""
        try:
            if not hasattr(self, '_vector_store_ready'):
                # VectorStoreManagerを使用して効率的に初期化
                vector_store = VectorStoreManager.get_vector_store()
                self._vector_store_ready = True
                logger.info("ベクターストア初期化完了")
        except Exception as e:
            logger.warning(f"ベクターストア初期化警告: {e}")
    
    async def _prepare_search_params(self, user_intent: Dict) -> Dict:
        """検索パラメータの事前準備"""
        return {
            "semantic_threshold": 0.6,
            "budget_filter": user_intent.get('budget_min') or user_intent.get('budget_max'),
            "category_preference": user_intent.get('category'),
            "target_relationship": user_intent.get('target_relationship')
        }
    
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
            
            # RRF結果からGiftItemオブジェクトを抽出
            gift_items = []
            for result in results[:limit]:
                if isinstance(result, dict) and 'product' in result:
                    # RRF統合結果の場合
                    gift_items.append(result['product'])
                elif hasattr(result, 'id'):
                    # 既にGiftItemオブジェクトの場合
                    gift_items.append(result)
                else:
                    logger.warning(f"不明な結果形式: {type(result)}")
            
            logger.info(f"ハイブリッド検索結果: {len(results)}件 → {len(gift_items)}件のGiftItem変換")
            return gift_items, metadata
            
        except Exception as e:
            logger.error(f"高速ハイブリッド検索エラー: {str(e)}")
            import traceback
            logger.error(f"スタックトレース: {traceback.format_exc()}")
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
    
    def _apply_budget_filter(self, items: List[GiftItem], user_intent: Dict[str, Any]) -> List[GiftItem]:
        """
        予算範囲で商品をフィルタリング（事後処理）
        """
        budget_min = user_intent.get('budget_min')
        budget_max = user_intent.get('budget_max')
        
        if not budget_min and not budget_max:
            return items
        
        filtered_items = []
        for item in items:
            price = item.price
            
            # 予算範囲チェック
            if budget_min and price < budget_min:
                continue
            if budget_max and price > budget_max:
                continue
                
            filtered_items.append(item)
        
        logger.info(f"💰 予算フィルタ: {len(items)}件 → {len(filtered_items)}件 (範囲: {budget_min}〜{budget_max}円)")
        return filtered_items
    
    async def health_check(self) -> Dict[str, Any]:
        """ヘルスチェック（最適化版）"""
        return {
            "status": "healthy",
            "optimization": "phase3",
            "cache_size": len(self.optimizer.cache),
            "hybrid_engine_ready": self.hybrid_engine is not None,
            "vector_store_ready": self.vector_store is not None
        }