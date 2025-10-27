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
from ..services.product_provider_base import ProductProviderBase
from ..services.search_service import MeilisearchService


def get_settings() -> Settings:
    """
    アプリケーション設定を取得
    
    FastAPIのDepends()で使用。
    ルータ関数で設定が必要な場合に注入される。
    
    使用例:
        @router.get("/test")
        async def test_endpoint(settings: Settings = Depends(get_settings)):
            return {"meili_url": settings.meili_url}
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