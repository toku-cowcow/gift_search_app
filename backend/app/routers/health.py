"""
ヘルスチェック用のルータ

このファイルの役割:
- アプリケーションとMeilisearchの動作状況を確認するエンドポイントを提供
- ロードバランサーや監視システムから呼び出される想定
"""

from fastapi import APIRouter, HTTPException
from ..services import MeilisearchService

# ルータインスタンスを作成（/healthのエンドポイント群を管理）
router = APIRouter(
    tags=["health"],  # OpenAPI（Swagger）でのグループ化用
    prefix=""         # プレフィックスなし（/healthで直接アクセス）
)

# サービスのインスタンス（DIコンテナ使わずシンプルに）
search_service = MeilisearchService()


@router.get("/health")
async def health_check():
    """
    アプリケーション全体の健全性をチェックします
    
    用途:
    - ロードバランサーのヘルスチェック
    - 監視システムによる生存確認
    - 開発時の接続確認
    
    返り値:
    - status: "healthy" または "unhealthy"
    - meilisearch: Meilisearchの状態情報
    - index: 使用中のインデックス名
    
    注意事項:
    - このエンドポイントはパブリックアクセス可能（認証なし）
    - Meilisearchに接続できない場合でも500エラーではなく200で返す
    """
    try:
        # Meilisearchの接続テスト
        health = search_service.health_check()
        
        return {
            "status": "healthy",
            "meilisearch": health,
            "index": search_service.index_name,
            "message": "All systems operational"
        }
    except Exception as e:
        # 接続エラーでもアプリケーション自体は動作しているので200で返す
        return {
            "status": "unhealthy", 
            "error": str(e),
            "message": "Meilisearch connection failed"
        }