"""
API依存関係（Dependencies）管理

このファイルの役割:
- FastAPIのDepends()で使用する共通関数を定義
- 設定・サービス層のインスタンスを効率的に注入
- 将来のデータソース切り替え（Meili⇔Rakuten）を抽象化
"""

from typing import Generator
from fastapi import HTTPException
from ..core.config import Settings, settings
from ..core.meilisearch_config import get_meilisearch_info
from ..services.product_provider_base import ProductProviderBase
from ..services.search_service_fixed import MeilisearchService
from ..services.ai_recommendation_service import AIRecommendationService
from ..services.langchain_rag_service import LangChainRAGService
from ..services.optimized_rag_service import OptimizedLangChainRAGService


def get_settings() -> Settings:
    """
    アプリケーション設定を取得
    
    FastAPIのDepends()で使用。
    ルータ関数で設定が必要な場合に注入される。
    
    使用例:
        @router.get("/test")
        async def test_endpoint(settings: Settings = Depends(get_settings)):
            # MeiliSearch設定情報の取得例
            meili_info = get_meilisearch_info()
            return {"meili_config": meili_info}
    """
    return settings


def get_product_provider() -> ProductProviderBase:
    """
    商品データ提供者（Provider）を取得
    
    設定に基づいて適切なデータソースを選択：
    - search_source="meili" → MeilisearchService
    - search_source="rakuten" → RakutenService（将来実装）
    
    この抽象化により、フロントエンドを変更せずに
    検索データソースを切り替えできる。
    
    使用例:
        @router.get("/search")
        async def search(provider: ProductProviderBase = Depends(get_product_provider)):
            return await provider.search_items(query="タオル")
    """
    current_settings = get_settings()
    
    # 設定に基づくデータソース切り替え
    if current_settings.search_source == "meili":
        return MeilisearchService()
    elif current_settings.search_source == "rakuten":
        # TODO: 楽天API実装時にここを更新
        # from ..services.rakuten_provider import RakutenService
        # return RakutenService()
        raise NotImplementedError("楽天API機能は未実装です。search_source=meiliを使用してください。")
    else:
        raise ValueError(f"サポートされていないsearch_source: {current_settings.search_source}")


def get_langchain_rag_service() -> LangChainRAGService:
    """
    LangChain RAGサービスを取得（簡素化版）
    
    互換性維持のための簡素化バージョン。
    高性能版は get_optimized_rag_service() をご利用ください。
    """
    return LangChainRAGService()


def get_optimized_rag_service() -> OptimizedLangChainRAGService:
    """
    Phase 3最適化版LangChain RAGサービスを取得
    
    パフォーマンス最適化されたRAGシステムを提供。
    並列処理、キャッシュ、簡潔プロンプトにより3-5秒以内の高速応答を実現。
    
    特徴:
    - 並列処理とキャッシュによる高速化
    - 最適化された意図抽出
    - フォールバック機能による堅牢性
    
    使用例:
        @router.post("/ai/fast-recommend")
        async def fast_recommend(rag_service: OptimizedLangChainRAGService = Depends(get_optimized_rag_service)):
            return await rag_service.get_fast_recommendation(user_input)
    """
    return OptimizedLangChainRAGService()


def get_ai_recommendation_service() -> AIRecommendationService:
    """
    AIレコメンドサービスを取得
    
    商品データを読み込んでAIによる推薦機能を提供。
    現在はモック実装、将来的にはLLM連携。
    
    使用例:
        @router.post("/ai/recommend")
        async def recommend(ai_service: AIRecommendationService = Depends(get_ai_recommendation_service)):
            return await ai_service.get_recommendations(user_input)
    """
    return AIRecommendationService()


# === 将来の拡張予定 ===

def get_ai_service():
    """
    AI・LLMサービスを取得（将来実装予定）
    
    設定のopenai_api_keyが有効な場合にAIサービスを提供。
    自然言語での商品検索・レコメンド機能で使用予定。
    
    TODO: LLM連携時に実装
    """
    current_settings = get_settings()
    if not current_settings.is_ai_enabled():
        raise HTTPException(
            status_code=503,
            detail="AI機能は現在無効です。OPENAI_API_KEYを設定してください。"
        )
    # TODO: AIServiceクラスの実装
    pass