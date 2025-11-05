#!/usr/bin/env python3
"""
Meilisearchに直接クエリを送信してテストするスクリプト
"""

import requests
import json

def test_meilisearch_direct():
    url = "http://127.0.0.1:7700"
    headers = {"Authorization": "Bearer masterKey"}
    
    # テストケース
    test_cases = [
        {
            "name": "完全一致検索（引用符あり）- titleのみ",
            "query": "\"お肉\"",
            "options": {
                "attributesToSearchOn": ["title"],
                "limit": 10
            }
        },
        {
            "name": "完全一致検索（引用符あり）- title+description",
            "query": "\"お肉\"", 
            "options": {
                "attributesToSearchOn": ["title", "description"],
                "limit": 10
            }
        },
        {
            "name": "通常検索（引用符なし）- titleのみ",
            "query": "お肉",
            "options": {
                "attributesToSearchOn": ["title"],
                "limit": 10
            }
        },
        {
            "name": "通常検索（引用符なし）- デフォルト",
            "query": "お肉",
            "options": {
                "limit": 10
            }
        }
    ]
    
    for test in test_cases:
        print(f"\n=== {test['name']} ===")
        print(f"Query: {test['query']}")
        print(f"Options: {test['options']}")
        
        try:
            response = requests.post(
                f"{url}/indexes/items/search",
                headers=headers,
                json={
                    "q": test["query"],
                    **test["options"]
                }
            )
            
            if response.status_code == 200:
                data = response.json()
                print(f"総件数: {data.get('estimatedTotalHits', 0)}")
                print(f"実際の件数: {len(data.get('hits', []))}")
                
                # 最初の5件をチェック
                for i, hit in enumerate(data.get('hits', [])[:5], 1):
                    title = hit.get('title', 'N/A')
                    desc = hit.get('description', 'N/A')[:50] + "..." if len(hit.get('description', '')) > 50 else hit.get('description', 'N/A')
                    
                    has_oniku_title = 'お肉' in title
                    has_oniku_desc = 'お肉' in hit.get('description', '')
                    
                    print(f"  {i}. Title has 'お肉': {has_oniku_title}")
                    print(f"     Desc has 'お肉': {has_oniku_desc}")
                    print(f"     Title: {title[:80]}...")
                    print()
                    
            else:
                print(f"エラー: HTTP {response.status_code}")
                print(response.text)
                
        except Exception as e:
            print(f"接続エラー: {e}")

if __name__ == "__main__":
    test_meilisearch_direct()