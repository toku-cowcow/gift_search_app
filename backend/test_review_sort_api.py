#!/usr/bin/env python3
"""
レビューソート問題の完全解決テスト
"""

import meilisearch
from fastapi import FastAPI, Query
from typing import Optional
import uvicorn

app = FastAPI()

# Meilisearchクライアント
client = meilisearch.Client("http://localhost:7700", "masterKey")
index = client.index("items")

@app.get("/test/review-sort")
async def test_review_sort(
    sort: Optional[str] = Query("review_count:desc"),
    limit: int = Query(5, ge=1, le=100)
):
    """
    レビューソート機能テスト用エンドポイント
    """
    try:
        # 直接Meilisearchを呼び出し
        results = index.search("", {
            "limit": limit,
            "sort": [sort]
        })
        
        # 結果を整理
        hits = []
        for hit in results.get("hits", []):
            hits.append({
                "id": hit.get("id"),
                "title": hit.get("title", "")[:50],
                "review_count": hit.get("review_count", 0),
                "review_average": hit.get("review_average", 0.0),
                "price": hit.get("price", 0)
            })
        
        return {
            "status": "success",
            "sort_param": sort,
            "total": results.get("estimatedTotalHits", 0),
            "hits": hits
        }
        
    except Exception as e:
        return {
            "status": "error", 
            "message": str(e)
        }

if __name__ == "__main__":
    print("テスト用APIサーバー起動: http://localhost:8001/test/review-sort")
    uvicorn.run(app, host="0.0.0.0", port=8001)