"""
アプリケーション設定管理

このファイルの役割:
- 環境変数を型安全に管理（Pydantic Settings使用）
- 開発環境・本番環境での設定切り替え
- 将来の楽天API・LLM連携に必要な設定も含む
"""

import os
from typing import List, Optional, Dict
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """
    アプリケーション設定クラス
    
    .envファイルまたは環境変数から設定を自動読み込み。
    型チェックとデフォルト値も提供。
    """
    
    # === アプリケーション基本設定 ===
    app_name: str = "UchiGift API"
    app_version: str = "1.0.0"
    debug: bool = False
    log_level: str = "INFO"  # DEBUG, INFO, WARNING, ERROR
    enable_debug_logs: bool = False  # デバッグログ出力の制御
    
    # === サーバー設定 ===
    host: str = "0.0.0.0"
    port: int = 8000
    
    # === CORS設定 ===
    allowed_origins: str = "http://localhost:3000,http://127.0.0.1:3000"
    
    # === Meilisearch設定（現在のメイン検索エンジン） ===
    meili_url: str = "http://127.0.0.1:7700"
    meili_key: str = "masterKey"
    index_name: str = "items"
    
    # === データソース切り替え設定 ===
    # 現在: "meili", 将来: "rakuten" で切り替え可能
    search_source: str = "meili"
    
    # === 楽天API設定（将来実装予定） ===
    rakuten_application_id: Optional[str] = None
    rakuten_affiliate_id: Optional[str] = None
    rakuten_application_secret: Optional[str] = None
    rakuten_api_endpoint: str = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601"
    rakuten_api_rate_limit: int = 1000  # 1秒あたりのAPI呼び出し制限
    
    # === LLM・AI機能設定（将来実装予定） ===
    openai_api_key: Optional[str] = None
    openai_model: str = "gpt-4o-mini"
    openai_max_tokens: int = 500
    
    # === その他の設定 ===
    frontend_url: str = "http://localhost:3000"
    backend_url: str = "http://localhost:8000"
    timezone: str = "Asia/Tokyo"
    
    class Config:
        """Pydantic設定"""
        env_file = ".env"  # .envファイルから自動読み込み
        case_sensitive = False  # 大文字小文字を区別しない
        
    def get_cors_origins(self) -> List[str]:
        """
        CORS許可オリジンのリストを取得
        
        環境変数でカンマ区切りで指定されている場合は分割して返す。
        """
        if isinstance(self.allowed_origins, str):
            return [origin.strip() for origin in self.allowed_origins.split(",")]
        return self.allowed_origins
    
    @classmethod
    def parse_env_var(cls, field_name: str, raw_val: str):
        """環境変数のカスタムパース処理"""
        if field_name == 'allowed_origins':
            # ALLOWED_ORIGINS環境変数をカンマ区切りで分割
            return [origin.strip() for origin in raw_val.split(",")]
        return raw_val
    
    def is_rakuten_enabled(self) -> bool:
        """楽天API機能が有効かどうかを判定"""
        return (
            self.search_source == "rakuten" and 
            self.rakuten_application_id is not None
        )
    
    def is_ai_enabled(self) -> bool:
        """AI機能（LLM）が有効かどうかを判定"""
        return self.openai_api_key is not None and len(self.openai_api_key.strip()) > 0
    
    def validate_api_keys(self) -> Dict[str, bool]:
        """APIキーの有効性を検証"""
        validation_result = {
            'openai_available': self.is_ai_enabled(),
            'rakuten_available': self.is_rakuten_enabled(),
            'meilisearch_available': True  # ローカルサービスのため常にTrue
        }
        return validation_result


# グローバル設定インスタンス
# アプリケーション起動時に一度だけ作成され、全体で共有される
settings = Settings()