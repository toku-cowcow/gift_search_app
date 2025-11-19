"""
Meilisearch設定適用スクリプト

機能:
- meili_settings.jsonから設定を読み込み
- Meilisearchに設定を適用
- 設定の変更履歴を管理可能に
"""

import os
import sys
import json
import time

# パスを追加してbackendモジュールを使用可能にする
script_dir = os.path.dirname(os.path.abspath(__file__))
backend_dir = os.path.join(os.path.dirname(script_dir), 'backend')
sys.path.append(backend_dir)

from app.services.search_service_fixed import MeilisearchService


def load_settings_from_file(settings_path: str) -> dict:
    """設定ファイルを読み込み"""
    try:
        with open(settings_path, 'r', encoding='utf-8') as f:
            settings = json.load(f)
        print(f"✅ 設定ファイル読み込み成功: {settings_path}")
        return settings
    except FileNotFoundError:
        print(f"❌ 設定ファイルが見つかりません: {settings_path}")
        raise
    except json.JSONDecodeError as e:
        print(f"❌ JSONパース失敗: {e}")
        raise


def apply_settings_to_meilisearch(settings: dict):
    """Meilisearchに設定を適用"""
    service = MeilisearchService()
    
    print("📤 Meilisearchに設定を適用中...")
    
    try:
        # 設定を適用
        task = service.index.update_settings(settings)
        print(f"✅ 設定適用開始 - タスクID: {task.task_uid}")
        
        # 設定反映を待機
        print("⏳ 設定反映を待機中...")
        time.sleep(5)
        
        # 適用後の設定を確認
        updated_settings = service.index.get_settings()
        
        print("✅ 設定適用完了!")
        print("\n🔍 適用された設定:")
        print(f"  - 検索可能属性: {updated_settings['searchableAttributes']}")
        print(f"  - フィルタ可能属性: {updated_settings['filterableAttributes']}")  
        print(f"  - ソート可能属性: {updated_settings['sortableAttributes']}")
        print(f"  - 最大ヒット数: {updated_settings['pagination']['maxTotalHits']}")
        
        return True
        
    except Exception as e:
        print(f"❌ 設定適用失敗: {e}")
        raise


def backup_current_settings(backup_path: str):
    """現在の設定をバックアップ"""
    service = MeilisearchService()
    
    try:
        current_settings = service.index.get_settings()
        
        with open(backup_path, 'w', encoding='utf-8') as f:
            json.dump(current_settings, f, indent=2, ensure_ascii=False)
        
        print(f"💾 現在の設定をバックアップ: {backup_path}")
        return True
        
    except Exception as e:
        print(f"❌ バックアップ失敗: {e}")
        return False


def main():
    """メイン実行"""
    print("🔧 Meilisearch設定適用ツール")
    print("=" * 50)
    
    # 設定ファイルパス
    settings_file = os.path.join(os.path.dirname(__file__), 'data', 'cache', 'meili_settings.json')
    backup_file = os.path.join(os.path.dirname(__file__), 'data', 'cache', f'meili_settings_backup_{int(time.time())}.json')
    
    try:
        # 1. 現在の設定をバックアップ
        print("\n1️⃣ 現在の設定をバックアップ")
        backup_current_settings(backup_file)
        
        # 2. 新しい設定を読み込み
        print("\n2️⃣ 新しい設定を読み込み")
        new_settings = load_settings_from_file(settings_file)
        
        # 3. 設定を適用
        print("\n3️⃣ 新しい設定を適用")
        apply_settings_to_meilisearch(new_settings)
        
        print("\n🎉 設定適用が正常に完了しました!")
        
    except Exception as e:
        print(f"\n💥 エラーが発生しました: {e}")
        print("バックアップファイルから復元することができます。")
        sys.exit(1)


if __name__ == "__main__":
    main()