"""
Meilisearch商品検索プロバイダー

このファイルの役割:
- Meilisearchとの通信を担当
- ProductProviderBaseを実装し、統一インターフェースを提供
- 検索・取得ロジックをカプセル化
"""

import os
from typing import Dict, Any, List
import meilisearch
from .product_provider_base import ProductProviderBase
from ..schemas import SearchParams, SearchResponse, GiftItem
from ..core.config import settings


class MeilisearchService(ProductProviderBase):
    """
    Meilisearchを使った商品検索機能を提供するサービスクラス
    
    概要:
    ProductProviderBaseを実装し、Meilisearchから商品データを取得します。
    将来の楽天API実装と同じインターフェースを持つため、
    フロントエンドを変更せずにデータソースを切り替え可能です。
    
    責務:
    - Meilisearchクライアントの管理
    - 検索パラメータをMeilisearch Query DSL形式に変換
    - 検索結果をアプリケーション標準形式に変換
    - エラーハンドリングとログ出力
    """
    
    def __init__(self):
        """
        Meilisearchクライアントを初期化
        
        設定ファイル（core/config.py）から接続情報を読み取り、
        クライアントとインデックスを設定します。
        """
        # 設定から接続情報を取得
        self.url = settings.meili_url
        self.key = settings.meili_key
        self.index_name = settings.index_name
        
        # Meilisearchクライアント初期化
        try:
            self.client = meilisearch.Client(self.url, self.key)
            self.index = self.client.index(self.index_name)
        except Exception as e:
            raise ConnectionError(f"Meilisearch接続エラー: {str(e)}")
    
    def search_items(self, params: SearchParams) -> SearchResponse:
        """
        商品検索を実行する
        
        引数:
            params: 検索パラメータ（キーワード、用途、価格帯等）
            
        返り値:
            SearchResponse: 検索結果（商品一覧、総件数、メタ情報）
            
        処理フロー:
        1. 検索パラメータをMeilisearch形式に変換
        2. Meilisearchに検索実行
        3. 結果をアプリケーション形式に変換
        4. 必要に応じてフィルタリング・ソート適用
        """
        try:
            # 検索クエリを構築
            query = params.q or ""
            
            # 検索オプションを設定
            search_options = {
                "limit": params.limit,
                "offset": params.offset,
                "attributesToRetrieve": ["*"],  # 全フィールドを取得
                "attributesToHighlight": ["title", "description"],  # ハイライト対象
            }
            
            # フィルタ条件を構築
            filters = []
            
            # 用途フィルタ
            if params.occasion:
                filters.append(f"occasion = '{params.occasion}'")
            
            # 価格範囲フィルタ
            if params.price_min is not None:
                filters.append(f"price >= {params.price_min}")
            if params.price_max is not None:
                filters.append(f"price <= {params.price_max}")
            
            # フィルタを結合
            if filters:
                search_options["filter"] = " AND ".join(filters)
            
            # ソート設定
            if params.sort:
                search_options["sort"] = [params.sort]
            
            # Meilisearchで検索実行
            search_result = self.index.search(query, search_options)
            
            # 結果をGiftItemオブジェクトに変換
            hits = []
            for raw_item in search_result.get("hits", []):
                gift_item = GiftItem(
                    id=raw_item.get("id"),
                    title=raw_item.get("title"),
                    price=raw_item.get("price"),
                    image_url=raw_item.get("image_url"),
                    merchant=raw_item.get("merchant"),
                    source=raw_item.get("source", "meilisearch"),
                    url=raw_item.get("url"),
                    affiliate_url=raw_item.get("affiliate_url"),
                    occasion=raw_item.get("occasion"),
                    keywords=raw_item.get("keywords", []),
                    description=raw_item.get("description", "")
                )
                hits.append(gift_item)
            
            # レスポンス形式で返す
            return SearchResponse(
                hits=hits,
                total=search_result.get("totalHits", 0),
                limit=search_result.get("limit", params.limit),
                offset=search_result.get("offset", params.offset),
                processing_time_ms=search_result.get("processingTimeMs", 0),
                query=params.q or ""
            )
            
        except Exception as e:
            # 検索エラーをラップして再発生
            raise RuntimeError(f"Meilisearch検索エラー: {str(e)}")
    
    def get_item_by_id(self, item_id: str) -> GiftItem:
        """
        商品IDで特定の商品を取得する
        
        引数:
            item_id: 商品の一意識別子
            
        返り値:
            GiftItem: 商品詳細情報
            
        例外:
            ValueError: 商品が見つからない場合
            RuntimeError: 検索エラーの場合
        """
        try:
            # IDで完全一致検索
            search_result = self.index.search(
                query="",
                opt_params={
                    "filter": f"id = '{item_id}'",
                    "limit": 1
                }
            )
            
            hits = search_result.get("hits", [])
            if not hits:
                raise ValueError(f"商品ID '{item_id}' が見つかりません")
            
            # 最初の結果をGiftItemに変換
            raw_item = hits[0]
            return GiftItem(
                id=raw_item.get("id"),
                title=raw_item.get("title"),
                price=raw_item.get("price"),
                image_url=raw_item.get("image_url"),
                merchant=raw_item.get("merchant"),
                source=raw_item.get("source", "meilisearch"),
                url=raw_item.get("url"),
                affiliate_url=raw_item.get("affiliate_url"),
                occasion=raw_item.get("occasion"),
                keywords=raw_item.get("keywords", []),
                description=raw_item.get("description", "")
            )
            
        except ValueError:
            # 商品未発見エラーはそのまま再発生
            raise
        except Exception as e:
            # その他のエラーはRuntimeErrorでラップ
            raise RuntimeError(f"商品取得エラー: {str(e)}")
    
    def health_check(self) -> Dict[str, Any]:
        """
        Meilisearchの接続状況を確認する
        
        返り値:
            Dict: 健全性チェック結果
            - status: "ok" または "error"
            - version: Meilisearchのバージョン
            - index_name: 使用中のインデックス名
        """
        try:
            # Meilisearchサーバーの健全性確認
            health = self.client.health()
            
            # インデックスの存在確認
            index_stats = self.index.get_stats()
            
            return {
                "status": "ok",
                "server_health": health,
                "index_name": self.index_name,
                "document_count": index_stats.get("numberOfDocuments", 0)
            }
            
        except Exception as e:
            return {
                "status": "error",
                "error": str(e),
                "index_name": self.index_name
            }
    
    def get_stats(self) -> Dict[str, Any]:
        """
        Meilisearchの詳細統計情報を取得する（デバッグ用）
        
        返り値:
            Dict: 統計情報
            - numberOfDocuments: 文書数
            - fieldDistribution: フィールド分布
            - その他Meilisearch内部統計
        """
        try:
            # インデックス統計を取得
            stats = self.index.get_stats()
            
            # サーバー情報も追加
            version = self.client.get_version()
            
            return {
                "index_stats": stats,
                "server_info": {
                    "version": version,
                    "url": self.url,
                    "index_name": self.index_name
                }
            }
            
        except Exception as e:
            raise RuntimeError(f"統計情報取得エラー: {str(e)}")