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
RAKUTEN_APP_ID = os.environ.get("RAKUTEN_APPLICATION_ID", "")
RAKUTEN_DEVELOPER_ID = os.environ.get("RAKUTEN_APPLICATION_ID", "")  # 通常はAPP_IDと同じ
RAKUTEN_APPLICATION_SECRET = os.environ.get("RAKUTEN_APPLICATION_SECRET", "")
RAKUTEN_AFFILIATE_ID = os.environ.get("RAKUTEN_AFFILIATE_ID", "")

# 検索設定
SEARCH_KEYWORD = "内祝い"
MAX_ITEMS = 5000

# 設定確認（デバッグ用）
def validate_config():
    """楽天API設定が正しく読み込まれているか確認"""
    missing_vars = []
    
    if not RAKUTEN_APP_ID:
        missing_vars.append("RAKUTEN_APPLICATION_ID")
    if not RAKUTEN_APPLICATION_SECRET:
        missing_vars.append("RAKUTEN_APPLICATION_SECRET") 
    if not RAKUTEN_AFFILIATE_ID:
        missing_vars.append("RAKUTEN_AFFILIATE_ID")
    
    if missing_vars:
        print(f"⚠️  以下の環境変数が設定されていません: {', '.join(missing_vars)}")
        print("📝 .envファイルに以下の形式で追加してください:")
        for var in missing_vars:
            print(f"   {var}=your-value-here")
        return False
    else:
        print("✅ 楽天API設定が正常に読み込まれました")
        return True

if __name__ == "__main__":
    validate_config()