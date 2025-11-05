#!/usr/bin/env python3
"""
Meilisearchインデックスを削除して再作成するスクリプト
"""

import requests
import json
import time

def reset_meilisearch_index():
    url = "http://127.0.0.1:7700"
    headers = {"Authorization": "Bearer masterKey"}
    index_name = "items"
    
    print("=== Meilisearchインデックスのリセット ===")
    
    try:
        # 1. 既存インデックスを削除
        print("1. 既存インデックスを削除中...")
        response = requests.delete(f"{url}/indexes/{index_name}", headers=headers)
        if response.status_code in [200, 202, 204]:
            print("✅ インデックス削除成功")
            time.sleep(2)  # 削除完了を待つ
        elif response.status_code == 404:
            print("ℹ️ インデックスは存在しませんでした")
        else:
            print(f"⚠️ 削除エラー: HTTP {response.status_code}")
            print(response.text)
        
        # 2. 新しいインデックスを作成
        print("2. 新しいインデックスを作成中...")
        payload = {
            "uid": index_name,
            "primaryKey": "id"
        }
        response = requests.post(f"{url}/indexes", headers=headers, json=payload)
        if response.status_code in [201, 202]:
            print("✅ インデックス作成成功")
            time.sleep(2)  # 作成完了を待つ
        else:
            print(f"❌ 作成エラー: HTTP {response.status_code}")
            print(response.text)
            return False
        
        # 3. 設定を適用
        print("3. 設定を適用中...")
        with open('data/meili_settings.json', 'r', encoding='utf-8') as f:
            settings = json.load(f)
        
        response = requests.patch(f"{url}/indexes/{index_name}/settings", headers=headers, json=settings)
        if response.status_code in [200, 202]:
            task_uid = response.json().get('taskUid')
            print(f"✅ 設定適用成功 (Task UID: {task_uid})")
            
            # タスク完了を待つ
            print("設定適用完了を待っています...")
            for i in range(30):  # 最大30秒待つ
                time.sleep(1)
                task_response = requests.get(f"{url}/tasks/{task_uid}", headers=headers)
                if task_response.status_code == 200:
                    task_data = task_response.json()
                    if task_data.get('status') == 'succeeded':
                        print("✅ 設定適用完了")
                        break
                    elif task_data.get('status') == 'failed':
                        print(f"❌ 設定適用失敗: {task_data}")
                        return False
            else:
                print("⚠️ 設定適用のタイムアウト")
        else:
            print(f"❌ 設定適用エラー: HTTP {response.status_code}")
            print(response.text)
            return False
        
        print("\n✅ インデックスリセット完了")
        print("次に、商品データを再投入してください：")
        print("python index_meili_products.py --source rakuten --file ./data/rakuten_uchiwai_products_20251030_233859.json")
        return True
        
    except Exception as e:
        print(f"❌ エラー: {e}")
        return False

if __name__ == "__main__":
    reset_meilisearch_index()