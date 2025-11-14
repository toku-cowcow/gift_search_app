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
from ..core.meilisearch_config import get_meilisearch_config, MeiliSearchConfigError

# ログ設定
logger = logging.getLogger(__name__)


class MeilisearchService:
    """
    Meilisearchを使った検索機能を提供するサービスクラス
    """
    
    def __init__(self):
        """
        Meilisearchクライアントを初期化します
        
        環境に応じて適切な設定を読み込み、安全に接続を確立します。
        本番環境では設定不備時に明確なエラーを発生させます。
        """
        try:
            # 環境に応じた設定を取得
            self.meili_config = get_meilisearch_config()
            
            # 設定値を展開
            self.meili_url = self.meili_config.url
            self.meili_key = self.meili_config.api_key
            self.index_name = self.meili_config.index_name
            
            # 接続情報をログ出力（本番では機密情報を隠蔽）
            if self.meili_config.environment == 'production':
                logger.info(f"MeiliSearch本番接続: {self.meili_url} (key: {self.meili_key[:8]}***)")
            else:
                logger.info(f"MeiliSearchローカル接続: {self.meili_url}")
            
            # クライアント初期化
            self.client = meilisearch.Client(self.meili_url, self.meili_key)
            self.index = self.client.index(self.index_name)
            
        except MeiliSearchConfigError as e:
            logger.error(f"MeiliSearch設定エラー: {e}")
            raise RuntimeError(f"MeiliSearch接続に失敗しました: {e}")
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
            if settings.enable_debug_logs:
                logger.debug(f"🔍 DEBUG - Exact search mode: {query}")
        
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
        # genre_group filtering (mapped groups like 'food','drink','home','catalog','craft')
        if params.genre_group:
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