#!/usr/bin/env python3
"""
Gift Search App - FastAPIアプリケーションのメインエントリーポイント

このファイルの役割:
- FastAPIアプリケーションの初期化と設定
- CORS、環境変数の読み込み
- 各ルータ（エンドポイント群）の登録
- アプリケーション全体の統合点として機能
"""

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# 新しい構造のルータをインポート
from .routers import health_router, items_router, stats_router


# 環境変数を読み込み（.env ファイルがあれば優先、なければデフォルト値使用）
load_dotenv()

# FastAPIアプリケーション本体を初期化
app = FastAPI(
    title="冠婚葬祭ギフト検索API",
    description="冠婚葬祭のシーン別にギフト商品を検索・取得するAPIサービス",
    version="1.0.0",
    docs_url="/docs",    # Swagger UI（API仕様書）のURL
    redoc_url="/redoc"   # ReDoc（もう一つのAPI仕様書）のURL
)

# CORS（Cross-Origin Resource Sharing）設定
# フロントエンド（localhost:3000）からのAPIアクセスを許可するために必要
allowed_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,     # 許可するオリジン（本番では厳密に指定）
    allow_credentials=True,            # Cookieを含むリクエストを許可
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # 許可するHTTPメソッド
    allow_headers=["*"],               # 許可するヘッダー（開発用は全許可）
)

# 各機能別のルータを登録
# これにより、/health, /search, /items, /stats等のエンドポイントが利用可能になる
app.include_router(health_router)
app.include_router(items_router) 
app.include_router(stats_router)


# 直接このファイルを実行した場合の処理（開発用）
# 通常は `uvicorn app.main:app --reload` で起動するが、
# Python main.py でも起動できるように設定
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",              # アプリケーションの場所指定
        host="0.0.0.0",          # 全てのIPアドレスからアクセス可能
        port=8000,               # ポート番号（フロントエンドからはlocalhost:8000でアクセス）
        reload=True              # ファイル変更時の自動再起動（開発用）
    )