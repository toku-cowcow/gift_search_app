#!/usr/bin/env python3
"""
Meilisearchのタスク状況を確認するスクリプト
"""

import requests
import json

def check_meilisearch_tasks():
    url = "http://127.0.0.1:7700"
    headers = {"Authorization": "Bearer masterKey"}
    
    try:
        # 最新のタスク5件を取得
        response = requests.get(f"{url}/tasks?limit=5", headers=headers)
        
        if response.status_code == 200:
            data = response.json()
            print("=== 最新のMeilisearchタスク ===")
            for task in data.get('results', []):
                print(f"Task UID: {task.get('uid')}")
                print(f"Type: {task.get('type')}")
                print(f"Status: {task.get('status')}")
                print(f"Index: {task.get('indexUid', 'N/A')}")
                if task.get('error'):
                    print(f"Error: {task.get('error')}")
                print("---")
        else:
            print(f"エラー: HTTP {response.status_code}")
            print(response.text)
            
        # インデックス統計も確認
        response = requests.get(f"{url}/indexes/items/stats", headers=headers)
        if response.status_code == 200:
            stats = response.json()
            print(f"\n=== インデックス統計 ===")
            print(f"ドキュメント数: {stats.get('numberOfDocuments', 0)}")
            print(f"インデックス中: {stats.get('isIndexing', False)}")
            
    except Exception as e:
        print(f"エラー: {e}")

if __name__ == "__main__":
    check_meilisearch_tasks()