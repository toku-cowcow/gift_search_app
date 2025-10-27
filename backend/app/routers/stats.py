"""
統計・デバッグ用のルータ

このファイルの役割:
- 開発・運用時のデバッグ情報を提供するエンドポイント
- 本番環境では無効化することも検討（セキュリティ上の理由）
"""

from fastapi import APIRouter, HTTPException
from ..services import MeilisearchService

# ルータインスタンスを作成
router = APIRouter(
    tags=["debug"],  # OpenAPI（Swagger）でのグループ化用（デバッグ用と明記）
    prefix=""        # プレフィックスなし（/statsで直接アクセス）
)

# サービス層のインスタンス
search_service = MeilisearchService()


@router.get("/stats")
async def get_index_stats():
    """
    Meilisearchインデックスの統計情報を取得します（デバッグ用）
    
    用途:
    - 開発時のデータ確認
    - インデックスの状態監視
    - パフォーマンス調査
    
    返り値:
    - numberOfDocuments: インデックス内の文書数
    - fieldDistribution: 各フィールドの分布情報
    - その他Meilisearchの内部統計
    
    注意事項:
    - 本番環境では無効化を検討（機密情報が含まれる可能性）
    - アクセス制限をかける場合は認証機能を追加予定
    """
    try:
        stats = search_service.get_index_stats()
        return {
            "index_name": search_service.index_name,
            "stats": stats,
            "note": "This is debug information - consider disabling in production"
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"統計情報の取得でエラーが発生しました: {str(e)}"
        )