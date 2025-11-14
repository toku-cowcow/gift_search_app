# 楽天API設定ファイル
# 
# ⚠️ セキュリティ改善のお知らせ ⚠️
# 機密情報を直接コードに書くのはセキュリティリスクがあります。
# 環境変数(.env)ファイルを使用してください。
# 
# 使用方法:
# 1. .envファイルに以下の環境変数を設定
# 2. os.environ.get()で読み込み

import os
from dotenv import load_dotenv

# .envファイルを読み込み
load_dotenv()

# 環境変数から楽天API設定を取得
RAKUTEN_APP_ID = os.environ.get("RAKUTEN_APPLICATION_ID")
RAKUTEN_DEVELOPER_ID = os.environ.get("RAKUTEN_APPLICATION_ID")  # 通常はAPP_IDと同じ
RAKUTEN_APPLICATION_SECRET = os.environ.get("RAKUTEN_APPLICATION_SECRET")
RAKUTEN_AFFILIATE_ID = os.environ.get("RAKUTEN_AFFILIATE_ID")

# その他の設定
SEARCH_KEYWORD = "内祝い"
MAX_ITEMS = 5000

# 楽天APIエンドポイント
RAKUTEN_ITEM_API = os.environ.get("RAKUTEN_API_ENDPOINT")
RAKUTEN_GENRE_API = os.environ.get("RAKUTEN_GENRE_API_ENDPOINT")

# 設定検証
def validate_config():
    """必要な環境変数が設定されているかチェック"""
    missing_vars = []
    if not RAKUTEN_APP_ID:
        missing_vars.append("RAKUTEN_APPLICATION_ID")
    if not RAKUTEN_APPLICATION_SECRET:
        missing_vars.append("RAKUTEN_APPLICATION_SECRET") 
    if not RAKUTEN_AFFILIATE_ID:
        missing_vars.append("RAKUTEN_AFFILIATE_ID")
    if not RAKUTEN_ITEM_API:
        missing_vars.append("RAKUTEN_API_ENDPOINT")
    if not RAKUTEN_GENRE_API:
        missing_vars.append("RAKUTEN_GENRE_API_ENDPOINT")
    
    if missing_vars:
        print(f"❌ 以下の環境変数が設定されていません: {', '.join(missing_vars)}")
        print("💡 .envファイルで以下の環境変数を設定してください:")
        for var in missing_vars:
            print(f"   {var}=your-value-here")
        return False
    
    print("✅ 楽天API設定: 全ての必須環境変数が設定されています")
    return True

if __name__ == "__main__":
    validate_config()