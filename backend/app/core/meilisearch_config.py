"""
MeiliSearch設定管理モジュール

このモジュールの役割:
- 環境変数から MeiliSearch 接続設定を取得
- 型安全な設定管理
- 接続テスト機能を提供
"""

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class MeiliSearchConfig:
    """
    MeiliSearch接続設定を格納するイミュータブルなデータクラス
    
    Attributes:
        url: MeiliSearchサーバーのURL (環境変数 MEILI_URL)
        api_key: MeiliSearch API キー (環境変数 MEILI_KEY)
        index_name: 使用するインデックス名 (環境変数 INDEX_NAME)
    """
    url: str
    api_key: str
    index_name: str


class MeiliSearchConfigError(Exception):
    """MeiliSearch設定に関するエラー"""
    pass


def get_meilisearch_config() -> MeiliSearchConfig:
    """
    環境変数からMeiliSearch設定を取得
    
    必須環境変数:
    - MEILI_URL: MeiliSearchサーバーのURL
    - MEILI_KEY: MeiliSearch API キー
    - INDEX_NAME: インデックス名 (デフォルト: items)
    
    Returns:
        MeiliSearchConfig: MeiliSearch接続設定
        
    Raises:
        MeiliSearchConfigError: 必要な設定が不足している場合
    """
    meili_url = os.getenv('MEILI_URL')
    meili_key = os.getenv('MEILI_KEY')
    index_name = os.getenv('INDEX_NAME', 'items')
    
    if not meili_url:
        raise MeiliSearchConfigError(
            "MEILI_URL環境変数が設定されていません。"
        )
    
    if not meili_key:
        raise MeiliSearchConfigError(
            "MEILI_KEY環境変数が設定されていません。"
        )
    
    return MeiliSearchConfig(
        url=meili_url,
        api_key=meili_key,
        index_name=index_name
    )


def validate_meilisearch_connection(config: MeiliSearchConfig) -> bool:
    """
    MeiliSearch接続設定の妥当性を検証
    
    Args:
        config: 検証するMeiliSearch設定
        
    Returns:
        bool: 接続可能な場合True、そうでなければFalse
    """
    try:
        import requests
        
        # ヘルスチェックエンドポイントにアクセス
        response = requests.get(f"{config.url}/health", timeout=5)
        return response.status_code == 200
        
    except Exception:
        return False