"""
AI推薦サービス

このファイルの役割:
- ユーザー入力に基づく商品レコメンド処理
- 最新の楽天商品データ（title, description）読み込み
- LLMとのRAG連携による自然言語処理
"""

import os
import json
import glob
from typing import List, Dict, Any, Optional
from datetime import datetime
import logging

try:
    import openai
    OPENAI_AVAILABLE = True
except ImportError:
    OPENAI_AVAILABLE = False

from ..schemas import GiftItem
from ..core.config import settings


# ログ設定
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class ProductDataLoader:
    """商品データローダー"""
    
    def __init__(self, data_dir: str = None):
        """
        初期化
        
        Args:
            data_dir: データディレクトリのパス
        """
        if data_dir is None:
            # デフォルトのデータディレクトリを設定
            current_dir = os.path.dirname(__file__)
            self.data_dir = os.path.join(current_dir, "../../../scripts/data")
        else:
            self.data_dir = data_dir
            
        self.products_cache = None
        self.last_load_time = None
    
    def get_latest_data_file(self) -> str:
        """
        最新の楽天商品データファイルを取得
        
        Returns:
            最新のデータファイルパス
            
        Raises:
            FileNotFoundError: データファイルが見つからない場合
        """
        pattern = os.path.join(self.data_dir, "rakuten_uchiwai_products_*.json")
        files = glob.glob(pattern)
        
        if not files:
            raise FileNotFoundError(f"商品データファイルが見つかりません: {pattern}")
        
        # ファイル名の日時部分でソート（最新を取得）
        files.sort(key=lambda x: os.path.getmtime(x), reverse=True)
        latest_file = files[0]
        
        logger.info(f"最新データファイル: {latest_file}")
        return latest_file
    
    def load_products_data(self, force_reload: bool = False) -> List[Dict[str, Any]]:
        """
        商品データを読み込み
        
        Args:
            force_reload: 強制再読み込みフラグ
            
        Returns:
            商品データリスト
        """
        # キャッシュが有効で強制再読み込みでなければキャッシュを使用
        if (self.products_cache is not None and 
            not force_reload and 
            self.last_load_time is not None):
            logger.info("キャッシュから商品データを返します")
            return self.products_cache
        
        try:
            latest_file = self.get_latest_data_file()
            
            with open(latest_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # 商品データを取得（形式に応じて調整）
            if isinstance(data, list):
                products = data
            elif isinstance(data, dict) and 'products' in data:
                products = data['products']
            else:
                products = [data]  # 単一商品の場合
            
            # title と description が存在する商品のみフィルタ
            valid_products = []
            for product in products:
                if ('title' in product and product['title'] and
                    'description' in product and product['description']):
                    valid_products.append(product)
            
            logger.info(f"商品データを読み込みました: {len(valid_products)} 件")
            
            # キャッシュに保存
            self.products_cache = valid_products
            self.last_load_time = datetime.now()
            
            return valid_products
            
        except Exception as e:
            logger.error(f"商品データ読み込みエラー: {str(e)}")
            raise
    
    def get_products_for_llm(self, max_products: Optional[int] = 100) -> List[Dict[str, str]]:
        """
        LLM用に最適化された商品データを取得
        
        Args:
            max_products: 最大商品数（LLMのトークン制限対応）
            
        Returns:
            LLM用商品データ（id, title, description のみ）
        """
        products = self.load_products_data()
        
        # LLM用に必要な情報のみ抽出
        llm_products = []
        for i, product in enumerate(products[:max_products] if max_products else products):
            llm_products.append({
                "id": product.get("id", f"product_{i}"),
                "title": product.get("title", ""),
                "description": product.get("description", ""),
                "price": product.get("price", 0),
                "merchant": product.get("merchant", "")
            })
        
        logger.info(f"LLM用商品データを準備しました: {len(llm_products)} 件")
        return llm_products
    
    def get_product_by_id(self, product_id: str) -> Optional[Dict[str, Any]]:
        """
        商品IDで特定の商品を取得
        
        Args:
            product_id: 商品ID
            
        Returns:
            商品データ（見つからない場合はNone）
        """
        products = self.load_products_data()
        
        for product in products:
            if product.get("id") == product_id:
                return product
        
        return None
    
    def get_data_file_info(self) -> Dict[str, Any]:
        """
        データファイル情報を取得
        
        Returns:
            ファイル情報
        """
        try:
            latest_file = self.get_latest_data_file()
            file_stat = os.stat(latest_file)
            
            return {
                "file_path": latest_file,
                "file_name": os.path.basename(latest_file),
                "file_size": file_stat.st_size,
                "modified_time": datetime.fromtimestamp(file_stat.st_mtime).isoformat(),
                "products_count": len(self.load_products_data()) if self.products_cache else None
            }
            
        except Exception as e:
            return {"error": str(e)}


class AIRecommendationService:
    """AI推薦サービス"""
    
    def __init__(self):
        """初期化"""
        self.data_loader = ProductDataLoader()
        
        # OpenAI API設定
        self.llm_available = OPENAI_AVAILABLE and settings.is_ai_enabled()
        if self.llm_available:
            self.openai_client = openai.OpenAI(api_key=settings.openai_api_key)
        else:
            self.openai_client = None
        
    async def get_recommendations(
        self, 
        user_input: str, 
        max_recommendations: int = 3
    ) -> Dict[str, Any]:
        """
        ユーザー入力に基づく商品レコメンド
        
        Args:
            user_input: ユーザーの自然言語入力
            max_recommendations: 推薦商品数
            
        Returns:
            レコメンド結果
        """
        try:
            # 商品データを取得
            products_data = self.data_loader.get_products_for_llm(max_products=50)
            
            if self.llm_available and self.openai_client:
                # 実際のOpenAI API使用
                ai_response, selected_product_ids = await self._get_openai_recommendations(
                    user_input, products_data, max_recommendations
                )
                selected_products = self._convert_to_gift_items(
                    products_data, selected_product_ids
                )
            else:
                # モック実装（APIキーが設定されていない場合）
                logger.warning("OpenAI APIが利用できません。モック実装を使用します。")
                ai_response = self._generate_mock_response(user_input)
                selected_products = self._select_mock_products(products_data, user_input, max_recommendations)
            
            return {
                "ai_response": ai_response,
                "recommendations": selected_products,
                "reasoning": f"{'OpenAI GPT' if self.llm_available else 'モック'}を使用してレコメンドしました。"
            }
            
        except Exception as e:
            logger.error(f"AI推薦処理エラー: {str(e)}")
            raise
    
    
    async def _get_openai_recommendations(
        self, 
        user_input: str, 
        products_data: List[Dict[str, str]], 
        max_recommendations: int
    ) -> tuple[str, List[str]]:
        """
        OpenAI APIを使用してレコメンド取得
        
        Args:
            user_input: ユーザー入力
            products_data: 商品データリスト
            max_recommendations: 推薦商品数
            
        Returns:
            (AIレスポンス文章, 選択された商品IDリスト)
        """
        # 商品データを文字列形式に変換（LLMに送信するため）
        products_text = self._format_products_for_llm(products_data)
        
        # プロンプト作成
        system_prompt = """あなたは内祝いギフトの専門アドバイザーです。
ユーザーの要望に基づいて、提供された商品リストから最適な商品を3つ選んでください。

選択の際は以下を考慮してください：
- 相手の年代、性別、関係性
- 予算感
- 内祝いとしての適切さ
- 商品の品質や評価

回答は以下のJSON形式で返してください：
{
    "response": "丁寧で親切な説明文",
    "product_ids": ["商品ID1", "商品ID2", "商品ID3"],
    "reasoning": "選択理由の簡潔な説明"
}"""

        user_prompt = f"""
ユーザーの要望: {user_input}

利用可能な商品:
{products_text}

上記の商品から最適な{max_recommendations}つを選んでレコメンドしてください。
"""

        try:
            response = self.openai_client.chat.completions.create(
                model=settings.openai_model,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                max_tokens=settings.openai_max_tokens,
                temperature=0.7
            )
            
            # レスポンスをパース
            content = response.choices[0].message.content
            
            try:
                result = json.loads(content)
                return result.get("response", ""), result.get("product_ids", [])
            except json.JSONDecodeError:
                logger.warning("OpenAI APIレスポンスのJSON解析に失敗しました。")
                return content, []
                
        except Exception as e:
            logger.error(f"OpenAI API呼び出しエラー: {str(e)}")
            raise
    
    def _format_products_for_llm(self, products_data: List[Dict[str, str]]) -> str:
        """
        商品データをLLM用テキスト形式に変換
        
        Args:
            products_data: 商品データリスト
            
        Returns:
            フォーマットされた商品リスト文字列
        """
        formatted_products = []
        for product in products_data:
            formatted_product = f"""
ID: {product.get('id', '')}
商品名: {product.get('title', '')}
価格: {product.get('price', 0)}円
販売者: {product.get('merchant', '')}
説明: {product.get('description', '')[:200]}...
"""
            formatted_products.append(formatted_product)
        
        return "\n".join(formatted_products)
    
    def _convert_to_gift_items(
        self, 
        products_data: List[Dict[str, str]], 
        product_ids: List[str]
    ) -> List[GiftItem]:
        """
        商品IDから実際の商品データを取得してGiftItemに変換
        
        Args:
            products_data: 商品データリスト
            product_ids: 選択された商品IDリスト
            
        Returns:
            GiftItemリスト
        """
        selected_products = []
        
        for product_id in product_ids:
            # 実際の商品データを取得
            product = self.data_loader.get_product_by_id(product_id)
            if product:
                gift_item = GiftItem(
                    id=product.get("id", ""),
                    title=product.get("title", ""),
                    price=product.get("price", 0),
                    description=product.get("description", ""),
                    image_url=product.get("image_url", ""),
                    merchant=product.get("merchant", ""),
                    url=product.get("url", ""),
                    affiliate_url=product.get("affiliate_url", ""),
                    source=product.get("source", "rakuten"),
                    occasion="wedding_return",  # デフォルト
                    keywords=[]
                )
                selected_products.append(gift_item)
        
        return selected_products
    
    def _generate_mock_response(self, user_input: str) -> str:
        """
        モック用AIレスポンス生成
        
        Args:
            user_input: ユーザー入力
            
        Returns:
            AIレスポンス文章
        """
        return (
            f"「{user_input}」というご要望にお答えして、"
            "以下の商品をおすすめいたします。どれも品質が高く、"
            "内祝いとして喜ばれる商品を厳選いたしました。"
        )
    
    def _select_mock_products(
        self, 
        products_data: List[Dict[str, str]], 
        user_input: str,
        max_recommendations: int
    ) -> List[GiftItem]:
        """
        モック用商品選択
        
        Args:
            products_data: 商品データリスト
            user_input: ユーザー入力
            max_recommendations: 推薦商品数
            
        Returns:
            選択された商品リスト
        """
        # シンプルなキーワードマッチング（実際のLLMでは高度な推論）
        keywords = user_input.lower()
        selected = []
        
        # キーワードに基づく簡易フィルタリング
        for product in products_data[:max_recommendations * 3]:  # 候補を多めに取る
            title_lower = product.get("title", "").lower()
            desc_lower = product.get("description", "").lower()
            
            # 基本的な商品選択（実際のLLMではより高度）
            if len(selected) < max_recommendations:
                # GiftItemスキーマに合わせて変換
                gift_item = GiftItem(
                    id=product.get("id", ""),
                    title=product.get("title", ""),
                    price=product.get("price", 0),
                    description=product.get("description", ""),
                    image_url=product.get("image_url", ""),
                    merchant=product.get("merchant", ""),
                    url=product.get("url", ""),
                    affiliate_url=product.get("affiliate_url", ""),
                    source=product.get("source", "rakuten"),
                    occasion="wedding_return",  # デフォルト
                    keywords=[]
                )
                selected.append(gift_item)
        
        return selected
    
    async def health_check(self) -> Dict[str, Any]:
        """
        AIサービスヘルスチェック
        
        Returns:
            サービス状態
        """
        try:
            products_count = len(self.data_loader.load_products_data())
            data_file_info = self.data_loader.get_data_file_info()
            
            # OpenAI API接続テスト
            openai_status = "not_configured"
            if OPENAI_AVAILABLE and settings.is_ai_enabled():
                try:
                    # 簡単なテストリクエスト
                    test_response = self.openai_client.chat.completions.create(
                        model="gpt-3.5-turbo",
                        messages=[{"role": "user", "content": "Hello"}],
                        max_tokens=10
                    )
                    openai_status = "healthy"
                except Exception as e:
                    logger.error(f"OpenAI API接続エラー: {str(e)}")
                    openai_status = "error"
            
            return {
                "status": "healthy",
                "product_data_loaded": True,
                "products_count": products_count,
                "llm_available": self.llm_available,
                "openai_status": openai_status,
                "openai_model": settings.openai_model if self.llm_available else None,
                "data_file_info": data_file_info
            }
            
        except Exception as e:
            return {
                "status": "error",
                "product_data_loaded": False,
                "llm_available": False,
                "openai_status": "error",
                "error": str(e)
            }