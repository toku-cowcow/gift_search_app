#!/usr/bin/env python3
"""
AWS Elastic Beanstalk エントリーポイント

このファイルの役割:
- AWS Elastic BeanstalkでFastAPIアプリケーションをデプロイするためのエントリーポイント
- Elastic Beanstalkは 'application.py' ファイル内の 'application' 変数を探します
- 本番環境用の設定とログ設定を含みます

AWS Elastic Beanstalk デプロイ方法:
1. このディレクトリ（backend/）をZIPファイルにパッケージ
2. requirements.txt も含める
3. Elastic Beanstalk コンソールでアップロード
"""

import os
import sys
import logging
from pathlib import Path

# ログ設定（本番環境用）
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# プロジェクトルートを Python パスに追加
current_dir = Path(__file__).parent
sys.path.insert(0, str(current_dir))

try:
    # FastAPIアプリケーションをインポート
    from app.main import app as fastapi_app
    
    # Elastic BeanstalkはGunicornのUvicornWorkerを使用してASGIアプリを直接実行
    # WSGIアダプターは不要
    application = fastapi_app
    
    logger.info("✅ HAREGift FastAPI アプリケーションが正常に初期化されました")
    logger.info(f"📂 アプリケーションディレクトリ: {current_dir}")
    logger.info("🚀 UvicornWorkerを使用してASGIモードで実行します")
    
except (ImportError, ModuleNotFoundError) as e:
    logger.error(f"❌ FastAPIアプリケーションのインポートに失敗しました: {e}")
    logger.error("依存関係を確認してください。AI機能が不要な場合は、軽量版requirements.txtを使用してください。")
    logger.info("🔄 フォールバックモードで最小限のAPIを起動します...")
    
    # フォールバック: 最小限のFastAPIアプリを作成
    from fastapi import FastAPI
    from fastapi.middleware.cors import CORSMiddleware
    
    application = FastAPI(
        title="HAREGift API - Fallback Mode",
        description="軽量版 - AI機能なし",
        version="1.0.0-fallback"
    )
    
    # CORS設定
    application.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["GET", "POST"],
        allow_headers=["*"],
    )
    
    @application.get("/")
    async def root():
        return {
            "message": "HAREGift API - フォールバックモード",
            "status": "running", 
            "mode": "fallback",
            "note": "AI機能は無効です。基本的な機能のみ利用可能。"
        }
    
    @application.get("/health")
    async def health():
        return {"status": "healthy", "mode": "fallback"}
    
    @application.get("/api/v1/health")
    async def health_v1():
        return {"status": "healthy", "mode": "fallback"}
        
except Exception as e:
    logger.error(f"❌ アプリケーション初期化中にエラーが発生しました: {e}")
    raise

# AWS Elastic Beanstalk 環境変数の設定
# 本番環境に合わせて調整してください
if not os.getenv("ENVIRONMENT"):
    os.environ["ENVIRONMENT"] = "production"

if not os.getenv("LOG_LEVEL"):
    os.environ["LOG_LEVEL"] = "INFO"

# 注意: ヘルスチェックエンドポイントは app/main.py または フォールバック内で定義済み
# ここでは重複を避けるため追加定義しない

if __name__ == "__main__":
    # 開発・テスト用の直接実行
    import uvicorn
    logger.info("🧪 開発モードで直接実行中...")
    uvicorn.run(
        application,
        host="0.0.0.0",
        port=int(os.getenv("PORT", "8000")),
        log_level="info"
    )