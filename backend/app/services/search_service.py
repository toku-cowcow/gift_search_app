"""
Meilisearch検索サービス

このファイルの役割:
- Meilisearchとの通信を担当します
- 検索ロジックの純粋な部分を担当し、HTTPやバリデーションはルータ側で行います
"""

import os
from typing import Dict, Any, List
import meilisearch
from ..schemas import SearchParams, SearchResponse, GiftItem


class MeilisearchService:
    """
    Meilisearchを使った検索機能を提供するサービスクラス
    
    責務:
    - Meilisearchクライアントの管理
    - 検索パラメータをMeilisearch形式に変換
    - 検索結果をアプリケーション形式に変換
    """
    
    def __init__(self):
        """
        Meilisearchクライアントを初期化します
        
        環境変数から接続情報を読み取り、クライアントとインデックスを設定します
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
        
        引数:
            params: 検索パラメータ（キーワード、フィルタ、ソート等）
        
        返り値:
            SearchResponse: 検索結果（商品一覧、総件数、メタ情報）
        
        処理の流れ:
        1. SearchParamsをMeilisearch用のパラメータに変換
        2. Meilisearchで検索実行
        3. 結果をSearchResponse形式に変換して返却
        """
        # Meilisearch用の検索パラメータを構築
        search_params = self._build_search_params(params)
        
        # 検索実行（クエリありの場合となしの場合で分岐）
        if params.q:
            results = self.index.search(params.q, search_params)
        else:
            # 全件検索（フィルタ・ソートのみ）
            results = self.index.search("", search_params)
        
        # レスポンス形式に変換
        return self._format_search_response(results, params)
    
    def get_item_by_id(self, item_id: str) -> GiftItem:
        """
        商品IDで特定の商品を取得します
        
        引数:
            item_id: 商品ID
            
        返り値:
            GiftItem: 商品情報
            
        例外:
            ValueError: 商品が見つからない場合
        """
        # ID指定で検索（フィルタ使用）
        results = self.index.search("", {
            "filter": [f"id = {item_id}"],
            "limit": 1
        })
        
        if not results["hits"]:
            raise ValueError(f"Item with ID '{item_id}' not found")
        
        # 最初の結果をGiftItemに変換して返却
        return GiftItem(**results["hits"][0])
    
    def get_index_stats(self) -> Dict[str, Any]:
        """
        Meilisearchインデックスの統計情報を取得します（デバッグ用）
        
        返り値:
            Dict[str, Any]: インデックス統計（件数、フィールド情報等）
        """
        return self.index.get_stats()
    
    def health_check(self) -> Dict[str, Any]:
        """
        Meilisearchの接続状態を確認します
        
        返り値:
            Dict[str, Any]: ヘルスチェック結果
        """
        return self.client.health()
    
    def _build_search_params(self, params: SearchParams) -> Dict[str, Any]:
        """
        SearchParamsをMeilisearch用パラメータに変換します（内部用）
        
        引数:
            params: アプリケーション用の検索パラメータ
            
        返り値:
            Dict[str, Any]: Meilisearch用の検索パラメータ
        """
        search_params = {
            "limit": params.limit,
            "offset": params.offset,
        }
        
        # フィルタ条件を構築
        filters = []
        
        if params.occasion:
            filters.append(f"occasion = {params.occasion}")
        
        if params.price_min is not None:
            filters.append(f"price >= {params.price_min}")
            
        if params.price_max is not None:
            filters.append(f"price <= {params.price_max}")
        
        if filters:
            search_params["filter"] = filters
        
        # ソート設定（有効な値のみ適用）
        valid_sorts = ["updated_at:desc", "price:asc", "price:desc"]
        if params.sort in valid_sorts:
            search_params["sort"] = [params.sort]
        else:
            # 無効なソート値の場合はデフォルトを適用
            search_params["sort"] = ["updated_at:desc"]
        
        return search_params
    
    def _format_search_response(self, results: Dict[str, Any], params: SearchParams) -> SearchResponse:
        """
        Meilisearch結果をSearchResponseに変換します（内部用）
        
        引数:
            results: Meilisearchからの生の結果
            params: 元の検索パラメータ（メタ情報として使用）
            
        返り値:
            SearchResponse: 整理されたレスポンス形式
        """
        # 商品リストをGiftItemオブジェクトに変換
        hits = [GiftItem(**hit) for hit in results["hits"]]
        
        return SearchResponse(
            total=results.get("estimatedTotalHits", len(hits)),
            hits=hits,
            query=params.q or "",
            processing_time_ms=results.get("processingTimeMs", 0),
            limit=params.limit,
            offset=params.offset
        )