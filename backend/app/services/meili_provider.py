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
from datetime import datetime
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
    
    def _normalize_document(self, doc: Dict[str, Any]) -> Dict[str, Any]:
        """
        Meilisearchドキュメントを GiftItem スキーマに適合するよう正規化
        """
        import re
        
        # url フィールドの補完
        if not doc.get("url"):
            doc["url"] = doc.get("item_url") or doc.get("affiliate_url") or ""
        
        # 画像URLの高解像度化
        if doc.get("image_url"):
            image_url = doc["image_url"]
            
            # 既存のサイズ指定を400x400に置換
            if re.search(r'_ex=\d+x\d+', image_url):
                image_url = re.sub(r'_ex=\d+x\d+', '_ex=400x400', image_url)
            else:
                # サイズ指定が無い場合は追加
                if '?' in image_url:
                    image_url += '&_ex=400x400'
                else:
                    image_url += '?_ex=400x400'
            
            doc["image_url"] = image_url
        
        # レビュー情報の正規化
        # review_average の取得と正規化（複数のフィールド名から取得を試行）
        review_avg = (doc.get("review_average") or 
                     doc.get("reviewAverage") or 
                     doc.get("review_avg") or 
                     doc.get("rating") or 
                     doc.get("reviewScore"))
        
        if review_avg is not None:
            try:
                review_avg = float(review_avg)
                # 0-5の範囲にクリップ
                review_avg = max(0.0, min(5.0, review_avg))
                doc["review_average"] = review_avg
            except (ValueError, TypeError):
                doc["review_average"] = 0.0
        else:
            # レビューデータがない場合は0.0評価に設定
            doc["review_average"] = 0.0
        
        # review_count の取得と正規化
        review_cnt = (doc.get("review_count") or 
                     doc.get("reviewCount") or 
                     doc.get("reviews") or 
                     doc.get("review_num"))
        
        if review_cnt is not None:
            try:
                review_cnt = int(review_cnt)
                # 負値は0に補正
                review_cnt = max(0, review_cnt)
                doc["review_count"] = review_cnt
            except (ValueError, TypeError):
                doc["review_count"] = 0
        else:
            # レビューデータがない場合は0件に設定
            doc["review_count"] = 0
        
        # updated_at はPydantic側で自動変換されるため、ここでは何もしない
        
        return doc
    
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
                print(f"DEBUG - Sort parameter: {params.sort}")
                print(f"DEBUG - Sort as array: {[params.sort]}")
            else:
                print("DEBUG - No sort parameter provided")
            
            print(f"DEBUG - Final search options sent to Meilisearch: {search_options}")
            
            # Meilisearchで検索実行
            search_result = self.index.search(query, search_options)
            
            print(f"DEBUG - Total hits from Meilisearch: {search_result.get('totalHits', 0)}")
            print(f"DEBUG - Processing time: {search_result.get('processingTimeMs', 0)}ms")
            
            # 結果をGiftItemオブジェクトに変換
            hits = []
            for i, raw_item in enumerate(search_result.get("hits", [])):
                if i < 3:  # 上位3件のみ詳細ログ
                    print(f"DEBUG - Hit #{i+1}: id={raw_item.get('id')}, price={raw_item.get('price')}, review_count={raw_item.get('review_count')}, review_average={raw_item.get('review_average')}")
                
                raw_item = self._normalize_document(raw_item)
                
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
                    updated_at=raw_item.get("updated_at", 0),
                    review_count=raw_item.get("review_count", 0),
                    review_average=raw_item.get("review_average", 0.0)
                )
                hits.append(gift_item)
            
            # 返却前に上位3件の実値をログ出力
            if hits:
                print("DEBUG - Top 3 results after conversion:")
                for i, hit in enumerate(hits[:3]):
                    print(f"  #{i+1}: id={hit.id}, price={hit.price}, review_count={hit.review_count}, review_average={hit.review_average}")
            
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
            raw_item = self._normalize_document(hits[0])
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
                updated_at=raw_item.get("updated_at", 0),
                review_count=raw_item.get("review_count", 0),
                review_average=raw_item.get("review_average", 0.0)
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