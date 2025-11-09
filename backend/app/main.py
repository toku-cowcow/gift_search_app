#!/usr/bin/env python3
"""
UchiGift - 冠婚葬祭ギフト検索API メインエントリーポイント

このファイルの役割:
- FastAPIアプリケーションの初期化と設定
- CORS、環境変数の一元管理
- API v1ルータの登録
- アプリケーション全体の統合点として機能

新しいアーキテクチャ:
- core/config.py による設定一元管理
- api/v1/ による バージョン管理
- Depends() による依存関係注入
- 将来の楽天API・LLM機能に対応した拡張可能設計
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# 新しいアーキテクチャのインポート
from .core.config import settings
from .api.v1 import items, stats, ai


# FastAPIアプリケーション本体を初期化
app = FastAPI(
    title=settings.app_name,
    description="冠婚葬祭のシーン別にギフト商品を検索・取得するAPIサービス",
    version=settings.app_version,
    docs_url="/docs",    # Swagger UI（API仕様書）のURL
    redoc_url="/redoc",  # ReDoc（もう一つのAPI仕様書）のURL
    debug=settings.debug
)

# CORS（Cross-Origin Resource Sharing）設定
# フロントエンド（localhost:3000）からのAPIアクセスを許可するために必要
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.get_cors_origins(),  # 設定ファイルから取得
    allow_credentials=True,                     # Cookieを含むリクエストを許可
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # 許可するHTTPメソッド
    allow_headers=["*"],                        # 許可するヘッダー（開発用は全許可）
)

# API v1ルータを登録
# 各機能別のエンドポイントを統合
app.include_router(
    items.router,
    prefix="/api/v1",  # 将来のバージョン管理に対応
    tags=["商品検索 v1"]
)

app.include_router(
    stats.router,
    prefix="/api/v1",  # 将来のバージョン管理に対応
    tags=["システム監視 v1"]
)

app.include_router(
    ai.router,
    prefix="/api/v1",  # 将来のバージョン管理に対応
    tags=["AIチャットボット v1"]
)

# レガシー対応（既存フロントエンドとの互換性）
# TODO: フロントエンド更新後に削除予定
app.include_router(items.router, tags=["レガシー対応"])
app.include_router(stats.router, tags=["レガシー対応"])
app.include_router(ai.router, tags=["AIチャットボット レガシー対応"])


@app.get("/")
async def root():
    """
    APIルートエンドポイント
    
    概要:
    アプリケーションの基本情報と利用可能なエンドポイントを返します。
    API動作確認やヘルスチェックの簡易版として使用されます。
    
    返り値:
    - message: 歓迎メッセージ
    - app_name: アプリケーション名
    - version: APIバージョン
    - docs_url: API仕様書URL
    - endpoints: 主要エンドポイント一覧
    """
    return {
        "message": f"Welcome to {settings.app_name}!",
        "app_name": settings.app_name,
        "version": settings.app_version,
        "docs_url": f"{settings.backend_url}/docs",
        "endpoints": {
            "search": "/search または /api/v1/search",
            "item_detail": "/items/{id} または /api/v1/items/{id}",
            "occasions": "/occasions または /api/v1/occasions",
            "ai_recommend": "/ai/recommend または /api/v1/ai/recommend",
            "ai_health": "/ai/health または /api/v1/ai/health",
            "health": "/health または /api/v1/health",
            "stats": "/stats または /api/v1/stats"
        },
        "data_source": settings.search_source,
        "features": {
            "rakuten_api": settings.is_rakuten_enabled(),
            "ai_features": settings.is_ai_enabled()
        }
    }


# 直接このファイルを実行した場合の処理（開発用）
# 通常は `uvicorn app.main:app --reload` で起動するが、
# Python main.py でも起動できるように設定
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",              # アプリケーションの場所指定
        host=settings.host,      # 設定ファイルから取得
        port=settings.port,      # 設定ファイルから取得
        reload=settings.debug    # デバッグモード時のみ自動再起動
    )