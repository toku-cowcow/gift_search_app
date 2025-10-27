"""
統計情報・ヘルスチェック用のAPIエンドポイント（v1）

このファイルの役割:
- アプリケーションの動作状況確認
- 開発・運用時のデバッグ情報提供
- 監視システムやロードバランサーとの連携
"""

from fastapi import APIRouter, HTTPException, Depends
from ...services.product_provider_base import ProductProviderBase
from ...api.deps import get_product_provider
from ...core.config import Settings, settings


# ルータインスタンスを作成
router = APIRouter(
    tags=["システム監視"],  # OpenAPI（Swagger）でのグループ化用
    prefix=""               # プレフィックスなし（/health, /statsで直接アクセス）
)


@router.get("/health")
async def health_check(
    provider: ProductProviderBase = Depends(get_product_provider)
):
    """
    アプリケーション全体の健全性をチェックする
    
    概要:
    アプリケーション本体とデータソース（Meilisearch/楽天API）の
    接続状況を確認し、監視システムに状態を報告します。
    
    用途:
    - ロードバランサーのヘルスチェック
    - 監視システム（Zabbix、Datadog等）による生存確認
    - 開発時の接続確認・デバッグ
    - 本番環境でのサービス状態確認
    
    返り値例:
    {
      "status": "healthy",
      "app_version": "1.0.0",
      "data_source": "meili",
      "source_status": {...},
      "timestamp": "2024-01-01T00:00:00Z"
    }
    
    ステータス:
    - healthy: 全システム正常
    - degraded: 一部機能に問題あり
    - unhealthy: 重要な機能が停止
    
    注意事項:
    - 認証なしでアクセス可能（監視システム用）
    - データソース接続エラーでも500エラーは返さない
    - レスポンス時間は1秒以内を目標
    """
    try:
        # データソース（Meilisearch/楽天API）の接続テスト
        source_health = provider.health_check()
        
        # 全体的な健全性を判定
        overall_status = "healthy" if source_health.get("status") == "ok" else "degraded"
        
        return {
            "status": overall_status,
            "app_name": settings.app_name,
            "app_version": settings.app_version,
            "data_source": settings.search_source,
            "source_status": source_health,
            "timestamp": "2024-01-01T00:00:00Z",  # TODO: 実際のタイムスタンプ
            "message": "All systems operational" if overall_status == "healthy" 
                      else "Some systems degraded"
        }
        
    except Exception as e:
        # 接続エラーでもアプリケーション自体は動作しているので200で返す
        return {
            "status": "unhealthy",
            "app_name": settings.app_name,
            "app_version": settings.app_version,
            "data_source": settings.search_source,
            "error": str(e),
            "timestamp": "2024-01-01T00:00:00Z",  # TODO: 実際のタイムスタンプ
            "message": "Data source connection failed"
        }


@router.get("/stats")
async def get_system_stats(
    provider: ProductProviderBase = Depends(get_product_provider)
):
    """
    システム統計情報を取得する（開発・デバッグ用）
    
    概要:
    データソースの詳細統計情報を取得します。
    開発時のデバッグや、パフォーマンス調査に使用します。
    
    用途:
    - 開発時のデータ確認
    - インデックス/データベースの状態監視
    - パフォーマンス調査・ボトルネック特定
    - データ品質の確認
    
    返り値（Meilisearchの場合）:
    - numberOfDocuments: インデックス内の文書数
    - fieldDistribution: 各フィールドの分布情報
    - indexName: 使用中のインデックス名
    - その他Meilisearch内部統計
    
    返り値（楽天APIの場合）:
    - api_status: API接続状況
    - rate_limit: API呼び出し制限情報
    - cache_stats: キャッシュ使用状況
    
    セキュリティ注意事項:
    - 本番環境では無効化を検討（内部情報が含まれる）
    - 将来的にはIP制限や認証機能を追加予定
    - 機密情報（APIキー等）は含まれないよう注意
    """
    try:
        # データソース固有の統計情報を取得
        stats = provider.get_stats()
        
        return {
            "data_source": settings.search_source,
            "source_stats": stats,
            "config_info": {
                "debug_mode": settings.debug,
                "environment": "development" if settings.debug else "production"
            },
            "note": "This is debug information - consider disabling in production",
            "timestamp": "2024-01-01T00:00:00Z"  # TODO: 実際のタイムスタンプ
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"統計情報の取得でエラーが発生しました: {str(e)}"
        )