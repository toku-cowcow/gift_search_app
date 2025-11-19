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
        
        # Occasion推定マッピング
        self.occasion_keywords = {
            "wedding_celebration": [
                "結婚", "結婚祝い", "ウェディング", "新婚", "結婚式", "婚礼", "夫婦", "新郎", "新婦",
                "ブライダル", "結婚記念", "新生活", "二人", "カップル"
            ],
            "birth_celebration": [
                "出産", "出産祝い", "赤ちゃん", "ベビー", "新生児", "誕生", "産まれた", "お子様",
                "ママ", "パパ", "子ども", "子供", "初産", "新米ママ", "新米パパ"
            ],
            "new_home_celebration": [
                "新築", "新築祝い", "新居", "引越し", "引っ越し", "新住所", "マイホーム", "一戸建て",
                "新築住宅", "家", "住居", "新生活", "引越祝い"
            ],
            "mothers_day": [
                "母の日", "お母さん", "ママ", "母親", "母", "お母様", "ぼしのひ"
            ],
            "fathers_day": [
                "父の日", "お父さん", "パパ", "父親", "父", "お父様", "ちちのひ"
            ],
            "respect_for_aged_day": [
                "敬老の日", "敬老", "おじいちゃん", "おばあちゃん", "祖父", "祖母",
                "お年寄り", "シニア", "高齢", "祖父母", "長寿", "けいろうのひ"
            ]
        }
    
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
    
    def estimate_occasion(self, user_input: str) -> str:
        """
        ユーザー入力からoccasionを推定
        
        Args:
            user_input: ユーザーの入力文字列
            
        Returns:
            推定されたoccasion（デフォルト: wedding_celebration）
        """
        user_input_lower = user_input.lower()
        
        # 各occasionに対してキーワードマッチング
        for occasion, keywords in self.occasion_keywords.items():
            for keyword in keywords:
                if keyword in user_input_lower:
                    logger.info(f"Occasion推定: '{user_input}' -> {occasion} (キーワード: {keyword})")
                    return occasion
        
        # デフォルトは結婚祝い
        logger.info(f"Occasion推定: '{user_input}' -> wedding_celebration (デフォルト)")
        return "wedding_celebration"
    
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
                    products_data, selected_product_ids, user_input
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
        system_prompt = """あなたはハレの日ギフトの専門アドバイザーです。
ユーザーの要望に基づいて、提供された商品リストから最適な商品を3つ選んでください。

選択の際は以下を考慮してください：
- 相手の年代、性別、関係性
- 予算感
- ハレの日ギフトとしての適切さ
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
        product_ids: List[str],
        user_input: str
    ) -> List[GiftItem]:
        """
        商品IDから実際の商品データを取得してGiftItemに変換（occasion推定付き）
        
        Args:
            products_data: 商品データリスト
            product_ids: 選択された商品IDリスト
            user_input: ユーザー入力（occasion推定用）
            
        Returns:
            GiftItemリスト
        """
        # ユーザー入力からoccasionを推定
        estimated_occasion = self.data_loader.estimate_occasion(user_input)
        
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
                    occasion=estimated_occasion,  # 推定したoccasion
                    keywords=[]
                )
                selected_products.append(gift_item)
        
        return selected_products
    
    def _generate_mock_response(self, user_input: str) -> str:
        """
        モック用AIレスポンス生成（occasion推定・相手情報対応）
        
        Args:
            user_input: ユーザー入力
            
        Returns:
            AIレスポンス文章
        """
        # ユーザー入力からoccasionを推定
        estimated_occasion = self.data_loader.estimate_occasion(user_input)
        
        # 相手情報の抽出
        recipient_info = self._extract_recipient_info(user_input)
        
        # occasionに基づくパーソナライズされた挨拶
        occasion_messages = {
            "wedding_celebration": f"ご結婚おめでとうございます！{recipient_info['context']}にぴったりの結婚祝いをご提案いたします。",
            "birth_celebration": f"ご出産おめでとうございます！{recipient_info['context']}に喜んでいただける出産祝いを厳選いたしました。",
            "new_home_celebration": f"新築おめでとうございます！{recipient_info['context']}の新しい生活を彩る素敵なギフトをご提案します。",
            "mothers_day": f"母の日のプレゼントですね。{recipient_info['context']}に感謝の気持ちが伝わるギフトを選びました。",
            "fathers_day": f"父の日のプレゼントですね。{recipient_info['context']}に喜んでもらえるギフトをご提案します。",
            "respect_for_aged_day": f"敬老の日のギフトですね。{recipient_info['context']}への感謝を込めて、特別な贈り物を選びました。"
        }
        
        greeting = occasion_messages.get(
            estimated_occasion, 
            f"{recipient_info['context']}への素敵なギフトをご提案いたします。"
        )
        
        # 相手の情報を活かしたアドバイス
        advice_parts = []
        
        if recipient_info['age_range']:
            if "20代" in recipient_info['age_range']:
                advice_parts.append("トレンド感のあるおしゃれなアイテムを中心に選定しました。")
            elif any(age in recipient_info['age_range'] for age in ["60代", "70代"]):
                advice_parts.append("上品で品質の高い、長く使っていただけるアイテムを厳選しました。")
        
        if recipient_info['gender']:
            if "男性" in recipient_info['gender']:
                advice_parts.append("男性に喜ばれる実用的で質の高いアイテムを選びました。")
            elif "女性" in recipient_info['gender']:
                advice_parts.append("女性に喜ばれる美しく心温まるアイテムを中心にセレクトしました。")
        
        if recipient_info['relationship']:
            if any(rel in recipient_info['relationship'] for rel in ["上司", "目上"]):
                advice_parts.append("目上の方への贈り物として、格式のあるギフトを選定いたします。")
            elif any(rel in recipient_info['relationship'] for rel in ["友人", "同僚"]):
                advice_parts.append("親しい関係だからこそ、気軽に受け取っていただける素敵なギフトです。")
        
        advice = " ".join(advice_parts) if advice_parts else "心を込めて厳選したギフトをご提案いたします。"
        
        return f"{greeting}\n\n{advice}"
    
    def _extract_recipient_info(self, user_input: str) -> Dict[str, str]:
        """
        ユーザー入力から相手情報を抽出
        
        Args:
            user_input: ユーザー入力
            
        Returns:
            抽出した相手情報
        """
        info = {
            'relationship': '',
            'gender': '',
            'age_range': '',
            'context': ''
        }
        
        user_input_lower = user_input.lower()
        
        # 関係性の抽出
        relationships = ["上司", "同僚", "友人", "親", "母", "父", "祖母", "祖父", "目上", "年下"]
        for rel in relationships:
            if rel in user_input_lower:
                info['relationship'] = rel
                break
        
        # 性別の抽出
        if "男性" in user_input_lower:
            info['gender'] = "男性"
        elif "女性" in user_input_lower:
            info['gender'] = "女性"
        
        # 年代の抽出
        age_ranges = ["10代", "20代", "30代", "40代", "50代", "60代", "70代", "80代"]
        for age in age_ranges:
            if age in user_input_lower:
                info['age_range'] = age
                break
        
        # コンテキスト構築
        context_parts = []
        if info['relationship']:
            context_parts.append(info['relationship'])
        if info['gender']:
            context_parts.append(info['gender'])
        if info['age_range']:
            context_parts.append(info['age_range'])
        
        info['context'] = "の".join(context_parts) + "の方" if context_parts else "大切な方"
        
        return info
    
    def _select_mock_products(
        self, 
        products_data: List[Dict[str, str]], 
        user_input: str,
        max_recommendations: int
    ) -> List[GiftItem]:
        """
        モック用商品選択（occasion推定・相手情報最適化付き）
        
        Args:
            products_data: 商品データリスト
            user_input: ユーザー入力
            max_recommendations: 推薦商品数
            
        Returns:
            選択された商品リスト
        """
        # ユーザー入力からoccasionを推定
        estimated_occasion = self.data_loader.estimate_occasion(user_input)
        
        # 相手情報に基づく商品最適化
        optimized_products = self._optimize_by_recipient_info(products_data, user_input)
        
        # キーワードマッチング（実際のLLMでは高度な推論）
        keywords = user_input.lower()
        selected = []
        
        # 最適化された商品から選択
        for product in optimized_products[:max_recommendations * 3]:  # 候補を多めに取る
            title_lower = product.get("title", "").lower()
            desc_lower = product.get("description", "").lower()
            
            # 基本的な商品選択（実際のLLMではより高度）
            if len(selected) < max_recommendations:
                # GiftItemスキーマに合わせて変換（推定したoccasionを使用）
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
                    occasion=estimated_occasion,  # 推定したoccasion
                    keywords=[]
                )
                selected.append(gift_item)
        
        return selected
    
    def _optimize_by_recipient_info(self, products_data: List[Dict[str, str]], user_input: str) -> List[Dict[str, str]]:
        """
        相手の関係・性別・年代に基づく商品最適化
        
        Args:
            products_data: 商品データリスト
            user_input: ユーザー入力
            
        Returns:
            最適化された商品リスト
        """
        user_input_lower = user_input.lower()
        optimized_products = products_data.copy()
        
        # 性別に基づく最適化
        if "男性" in user_input_lower:
            # 男性向け商品を優先
            male_keywords = ["男性", "メンズ", "紳士", "ビール", "ウイスキー", "ネクタイ", "革製品", "工具"]
            optimized_products.sort(key=lambda p: self._calculate_keyword_score(p, male_keywords), reverse=True)
            
        elif "女性" in user_input_lower:
            # 女性向け商品を優先
            female_keywords = ["女性", "レディース", "婦人", "花", "化粧品", "アクセサリー", "スイーツ", "紅茶"]
            optimized_products.sort(key=lambda p: self._calculate_keyword_score(p, female_keywords), reverse=True)
        
        # 年代に基づく最適化
        if "20代" in user_input_lower:
            young_keywords = ["トレンド", "おしゃれ", "SNS", "可愛い", "カジュアル"]
            optimized_products.sort(key=lambda p: self._calculate_keyword_score(p, young_keywords), reverse=True)
            
        elif "60代" in user_input_lower or "70代" in user_input_lower or "シニア" in user_input_lower:
            senior_keywords = ["健康", "高級", "伝統", "上品", "品格", "老舗", "和風"]
            optimized_products.sort(key=lambda p: self._calculate_keyword_score(p, senior_keywords), reverse=True)
        
        # 関係性に基づく最適化
        if "上司" in user_input_lower or "目上" in user_input_lower:
            formal_keywords = ["高級", "上品", "フォーマル", "品格", "老舗", "のし"]
            optimized_products.sort(key=lambda p: self._calculate_keyword_score(p, formal_keywords), reverse=True)
            
        elif "友人" in user_input_lower or "同僚" in user_input_lower:
            casual_keywords = ["カジュアル", "気軽", "おしゃれ", "トレンド", "可愛い"]
            optimized_products.sort(key=lambda p: self._calculate_keyword_score(p, casual_keywords), reverse=True)
        
        return optimized_products
    
    def _calculate_keyword_score(self, product: Dict[str, str], keywords: List[str]) -> int:
        """
        商品に対するキーワードスコア計算
        
        Args:
            product: 商品データ
            keywords: キーワードリスト
            
        Returns:
            スコア
        """
        score = 0
        product_text = (product.get("title", "") + " " + product.get("description", "")).lower()
        
        for keyword in keywords:
            if keyword.lower() in product_text:
                score += 1
                
        return score
    
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