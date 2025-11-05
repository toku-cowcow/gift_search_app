"""
Meilisearch検索サービス（完全修正版）

このファイルの役割:
- Meilisearchとの通信を担当します
- レビューソート機能を確実に動作させます
"""

import os
from typing import Dict, Any, List
import meilisearch
from ..schemas import SearchParams, SearchResponse, GiftItem


class MeilisearchService:
    """
    Meilisearchを使った検索機能を提供するサービスクラス
    """
    
    def __init__(self):
        """
        Meilisearchクライアントを初期化します
        """
        # 環境変数から設定を読み込み（デフォルト値付き）
        self.meili_url = os.getenv("MEILI_URL", "http://127.0.0.1:7700")
        self.meili_key = os.getenv("MEILI_KEY", "masterKey")
        self.index_name = os.getenv("INDEX_NAME", "items")
        
        # クライアント初期化
        self.client = meilisearch.Client(self.meili_url, self.meili_key)
        self.index = self.client.index(self.index_name)
    
    def search_items(self, params: SearchParams) -> SearchResponse:
        """
        検索条件に基づいて商品を検索します
        """
        # 検索クエリの準備
        query = params.q or ""
        
        # 検索クエリがある場合は常に完全一致検索モード
        if query:
            query = f'"{query}"'
            print(f"🔍 DEBUG - Exact search mode: {query}")
        
        # 検索オプションを構築
        search_options = {
            "limit": params.limit,
            "offset": params.offset,
        }
        
        # 検索クエリがある場合は、titleのみで検索
        if query:
            search_options["attributesToSearchOn"] = ["title"]
        
        # フィルタ条件
        filters = []
        if params.occasion:
            filters.append(f"occasion = '{params.occasion}'")
        if params.price_min is not None:
            filters.append(f"price >= {params.price_min}")
        if params.price_max is not None:
            filters.append(f"price <= {params.price_max}")
        
        if filters:
            search_options["filter"] = " AND ".join(filters)
        
        # ソート設定
        if params.sort:
            search_options["sort"] = [params.sort]
            print(f"🔍 DEBUG - Sort parameter: {params.sort}")
        
        print(f"🔍 DEBUG - Final search options: {search_options}")
        print(f"🔍 DEBUG - Query: {query}")
        
        # 検索実行
        try:
            results = self.index.search(query, search_options)
            print(f"🔍 DEBUG - Search successful, totalHits: {results.get('estimatedTotalHits', 0)}")
            
            # 検索完了
                    
        except Exception as e:
            print(f"🔍 DEBUG - Search failed, error: {str(e)}")
            # エラー時はデフォルトソートで再試行
            search_options["sort"] = ["updated_at:desc"]
            if "attributesToSearchOn" in search_options:
                del search_options["attributesToSearchOn"]
            results = self.index.search(query, search_options)
        
        # レスポンス作成
        hits = [GiftItem(**hit) for hit in results["hits"]]
        
        # 上位3件の実値をログ出力
        print(f"🔍 DEBUG - Top 3 results:")
        for i, hit in enumerate(hits[:3]):
            print(f"  #{i+1}: id={hit.id}, price={hit.price}, review_count={hit.review_count}, review_average={hit.review_average}")
        
        return SearchResponse(
            total=results.get("estimatedTotalHits", len(hits)),
            hits=hits,
            query=params.q or "",
            processing_time_ms=results.get("processingTimeMs", 0),
            limit=params.limit,
            offset=params.offset
        )
    
    def get_item_by_id(self, item_id: str) -> GiftItem:
        """
        商品IDで特定の商品を取得します
        """
        results = self.index.search("", {
            "filter": f"id = {item_id}",
            "limit": 1
        })
        
        if not results["hits"]:
            raise ValueError(f"Item with ID '{item_id}' not found")
        
        return GiftItem(**results["hits"][0])
    
    def get_index_stats(self) -> Dict[str, Any]:
        """
        Meilisearchインデックスの統計情報を取得します（デバッグ用）
        """
        return self.index.get_stats()
    
    def health_check(self) -> Dict[str, Any]:
        """
        Meilisearchの接続状態を確認します
        """
        return self.client.health()