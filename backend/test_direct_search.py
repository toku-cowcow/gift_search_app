#!/usr/bin/env python3
"""
直接Meilisearch検索テストスクリプト
バックエンドAPIを通さずにMeilisearchに直接クエリして問題を特定
"""

import meilisearch
import json

def main():
    # Meilisearchクライアント
    client = meilisearch.Client("http://localhost:7700", "masterKey")
    index = client.index("items")
    
    print("=== 直接Meilisearch検索テスト ===")
    
    # レビュー件数順テスト
    print("\n1. レビュー件数順:")
    results1 = index.search("", {
        "limit": 5,
        "sort": ["review_count:desc"]
    })
    
    for i, hit in enumerate(results1['hits'][:5], 1):
        title = hit.get('title', 'N/A')[:40]
        count = hit.get('review_count', 0)
        avg = hit.get('review_average', 0.0)
        print(f"{i}. {title} | {count}件({avg:.1f})")
    
    # レビュー評価順テスト
    print("\n2. レビュー評価順:")
    results2 = index.search("", {
        "limit": 5, 
        "sort": ["review_average:desc"]
    })
    
    for i, hit in enumerate(results2['hits'][:5], 1):
        title = hit.get('title', 'N/A')[:40]
        count = hit.get('review_count', 0)
        avg = hit.get('review_average', 0.0)
        print(f"{i}. {title} | {count}件({avg:.1f})")
    
    # 価格順テスト（比較用）
    print("\n3. 価格安い順:")
    results3 = index.search("", {
        "limit": 5,
        "sort": ["price:asc"]
    })
    
    for i, hit in enumerate(results3['hits'][:5], 1):
        title = hit.get('title', 'N/A')[:40]
        price = hit.get('price', 0)
        print(f"{i}. {title} | {price:,}円")
    
    print(f"\n=== 統計情報 ===")
    print(f"総件数: {results1.get('estimatedTotalHits')}")
    print(f"処理時間: {results1.get('processingTimeMs')}ms")

if __name__ == "__main__":
    main()