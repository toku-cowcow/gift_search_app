"""
Meilisearch検索サービス（完全修正版）

このファイルの役割:
- Meilisearchとの通信を担当します
- レビューソート機能を確実に動作させます
"""

import os
import logging
from typing import Dict, Any, List
import meilisearch
from ..schemas import SearchParams, SearchResponse, GiftItem
from ..core.config import settings

# ログ設定
logger = logging.getLogger(__name__)


class MeilisearchService:
    """
    Meilisearchを使った検索機能を提供するサービスクラス
    """
    
    def __init__(self):
        """
        Meilisearchクライアントを初期化します
        
        統一された設定から適切な接続情報を取得し、安全に接続を確立します。
        """
        try:
            # 統一設定から接続情報を取得
            self.meili_url = settings.meili_url
            self.meili_key = settings.meili_key
            self.index_name = settings.index_name
            
            # 接続情報をログ出力
            logger.info(f"MeiliSearch接続: {self.meili_url}")
            
            # クライアント初期化
            self.client = meilisearch.Client(self.meili_url, self.meili_key)
            self.index = self.client.index(self.index_name)
            
        except Exception as e:
            logger.error(f"MeiliSearch初期化エラー: {e}")
            raise RuntimeError(f"MeiliSearchサービスの初期化に失敗しました: {e}")
    
    def search_items(self, params: SearchParams) -> SearchResponse:
        """
        検索条件に基づいて商品を検索します
        """
        # 検索クエリの準備
        query = params.q or ""
        
        # 検索クエリがある場合は常に完全一致検索モード
        if query:
            query = f'"{query}"'
            logger.info(f"🔍 Exact search mode: {query}")
        
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
            # occasions配列フィルタ（楽天商品は1要素配列、手動商品は複数要素）
            filters.append(f"occasions = '{params.occasion}'")
        
        # ジャンルフィルタリング
        # 優先順位：中分類 > 大分類
        # 中分類が指定されている場合は中分類でフィルタ、大分類のみの場合は大分類でフィルタ
        if params.genre_subgroup:
            # 中分類が指定されている場合は中分類でフィルタ（大分類は無視）
            subgroups = [s.strip() for s in params.genre_subgroup.split(',') if s.strip()]
            if len(subgroups) == 1:
                filters.append(f"genre_subgroup = '{subgroups[0]}'")
            elif len(subgroups) > 1:
                subgroup_filters = " OR ".join([f"genre_subgroup = '{s}'" for s in subgroups])
                filters.append(f"({subgroup_filters})")
        elif params.genre_group:
            # 大分類のみが指定されている場合は大分類でフィルタ
            filters.append(f"genre_group = '{params.genre_group}'")
        
        if params.price_min is not None:
            filters.append(f"price >= {params.price_min}")
        if params.price_max is not None:
            filters.append(f"price <= {params.price_max}")
        
        if filters:
            search_options["filter"] = " AND ".join(filters)
        
        # ソート設定
        if params.sort:
            search_options["sort"] = [params.sort]
            logger.info(f"🔍 Sort parameter: {params.sort}")
        
        logger.info(f"🔍 Final search options: {search_options}")
        logger.info(f"🔍 Query: {query}")
        
        # 検索実行
        try:
            results = self.index.search(query, search_options)
            logger.info(f"🔍 Search successful, totalHits: {results.get('estimatedTotalHits', 0)}")
            
        except Exception as e:
            logger.error(f"🔍 Search failed, error: {str(e)}")
            logger.error(f"🔍 Query was: {query}")
            logger.error(f"🔍 Options were: {search_options}")
            
            # エラー時はデフォルトソートで再試行
            search_options["sort"] = ["updated_at:desc"]
            if "attributesToSearchOn" in search_options:
                del search_options["attributesToSearchOn"]
            
            try:
                results = self.index.search(query, search_options)
                logger.info(f"🔍 Fallback search successful")
            except Exception as fallback_error:
                logger.error(f"🔍 Fallback search also failed: {str(fallback_error)}")
                raise
        
        # レスポンス作成
        hits = [GiftItem(**hit) for hit in results["hits"]]
        
        # 上位3件の実値をログ出力
        logger.info(f"🔍 Top 3 results:")
        for i, hit in enumerate(hits[:3]):
            logger.info(f"  #{i+1}: id={hit.id}, price={hit.price}, review_count={hit.review_count}, review_average={hit.review_average}")
        
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
    
    def get_stats(self) -> Dict[str, Any]:
        """
        Meilisearchインデックスの統計情報を取得します（デバッグ用）
        """
        return self.index.get_stats()
    
    def health_check(self) -> Dict[str, Any]:
        """
        Meilisearchの接続状態を確認します
        """
        return self.client.health()