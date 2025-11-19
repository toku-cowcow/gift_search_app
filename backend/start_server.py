#!/usr/bin/env python3
"""
HAREGift 開発サーバー起動スクリプト

このファイルの役割:
- FastAPIアプリケーションの開発サーバーを起動
- 環境変数の読み込み
- uvicornサーバーの設定と起動

使用方法:
    python start_server.py
"""

import os
import sys
from pathlib import Path

# プロジェクトルートを Python パスに追加
current_dir = Path(__file__).parent
app_dir = current_dir / "app"
sys.path.insert(0, str(current_dir))

if __name__ == "__main__":
    import uvicorn
    
    # 環境変数の設定（開発環境用）
    os.environ.setdefault("ENVIRONMENT", "development")
    
    # 開発用の設定
    host = os.getenv('HOST', '127.0.0.1')
    port = int(os.getenv('PORT', '8000'))
    
    print("🚀 HAREGift APIサーバーを起動しています...")
    print(f"📂 アプリケーションディレクトリ: {app_dir}")
    print(f"📊 Swagger UI: http://{host}:{port}/docs")
    print(f"📋 ReDoc: http://{host}:{port}/redoc")
    print("🔧 管理コマンド: Ctrl+C で停止")
    print("-" * 50)
    
    # FastAPIアプリケーションを起動
    uvicorn.run(
        "app.main:app",         # アプリケーションの場所
        host=host,              # ホスト（環境変数 HOST で設定）
        port=port,              # ポート番号（環境変数 PORT で設定）
        reload=True,            # ファイル変更時の自動再読み込み（開発用）
        log_level="info"        # ログレベル
    )