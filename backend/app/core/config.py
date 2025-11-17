"""
アプリケーション設定管理

このファイルの役割:
- 環境変数を型安全に管理（Pydantic Settings使用）
- ハードコード値を完全排除し、全て環境変数から読み込み
- シンプルで一貫性のある設定管理
"""

import os
from typing import List, Optional, Dict
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """
    アプリケーション設定クラス
    
    全ての設定は環境変数から読み込み、デフォルト値はコメント内で説明のみ。
    本番環境では全ての必須環境変数が設定されている必要があります。
    """
    
    # === アプリケーション基本設定 ===
    app_name: str = "UchiGift API"
    app_version: str = "1.0.0"
    debug: bool = False
    log_level: str = "INFO"
    
    # === サーバー設定 ===
    host: str = "0.0.0.0"  # デフォルト値を設定
    port: int = 8000       # デフォルト値を設定
    
    # === URL設定 ===
    frontend_url: str  # 環境変数 FRONTEND_URL
    backend_url: str   # 環境変数 BACKEND_URL
    allowed_origins: str  # 環境変数 ALLOWED_ORIGINS (カンマ区切り)
    
    # === MeiliSearch設定 ===
    meili_url: str  # 環境変数 MEILI_URL
    meili_key: str  # 環境変数 MEILI_KEY
    index_name: str # 環境変数 INDEX_NAME
    search_source: str = "meili"  # 環境変数 SEARCH_SOURCE
    
    # === 楽天API設定 ===
    rakuten_application_id: Optional[str] = None  # 環境変数 RAKUTEN_APPLICATION_ID
    rakuten_affiliate_id: Optional[str] = None    # 環境変数 RAKUTEN_AFFILIATE_ID
    rakuten_application_secret: Optional[str] = None  # 環境変数 RAKUTEN_APPLICATION_SECRET
    rakuten_api_endpoint: str = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601"  # デフォルト値を設定
    rakuten_genre_api_endpoint: Optional[str] = None  # 環境変数 RAKUTEN_GENRE_API_ENDPOINT
    
    # === OpenAI設定 ===
    openai_api_key: Optional[str] = None  # 環境変数 OPENAI_API_KEY
    openai_model: str  # 環境変数 OPENAI_MODEL
    openai_max_tokens: int = 500  # 環境変数 OPENAI_MAX_TOKENS
    
    # === その他設定 ===
    timezone: str = "Asia/Tokyo"  # 環境変数 TIMEZONE
        
    class Config:
        """Pydantic設定"""
        env_file = "../.env"
        case_sensitive = False
    
    def get_cors_origins(self) -> List[str]:
        """
        CORS許可オリジンのリストを取得
        
        環境変数ALLOWED_ORIGINSをカンマ区切りで分割して返す
        """
        if isinstance(self.allowed_origins, str):
            return [origin.strip() for origin in self.allowed_origins.split(",")]
        return self.allowed_origins
    
    def is_rakuten_enabled(self) -> bool:
        """楽天API機能が有効かどうかを判定"""
        return (
            self.search_source == "rakuten" and 
            self.rakuten_application_id is not None
        )
    
    def is_ai_enabled(self) -> bool:
        """AI機能（OpenAI）が有効かどうかを判定"""
        return self.openai_api_key is not None and len(self.openai_api_key.strip()) > 0


# グローバル設定インスタンス
settings = Settings()