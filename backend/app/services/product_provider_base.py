"""
将来のデータソース切り替え用の抽象基底クラス

このファイルの役割:
- 将来、楽天APIや他のデータソースに切り替える際の共通インターフェースを定義
- 現在はMeilisearchService、将来はRakutenAPIService等を差し替え可能にする
"""

from abc import ABC, abstractmethod
from typing import Dict, Any
from ..schemas import SearchParams, SearchResponse, GiftItem


class ProductProviderBase(ABC):
    """
    商品データ提供者の抽象基底クラス
    
    このクラスを継承することで：
    - 異なるデータソース（Meilisearch、楽天API等）を統一的に扱える
    - フロントエンドやルータ層を変更せずにデータソースを変更できる
    """
    
    @abstractmethod
    def search_items(self, params: SearchParams) -> SearchResponse:
        """
        商品を検索する（各実装クラスで具体的な処理を定義）
        
        引数:
            params: 統一された検索パラメータ
            
        返り値:
            SearchResponse: 統一されたレスポンス形式
        """
        pass
    
    @abstractmethod
    def get_item_by_id(self, item_id: str) -> GiftItem:
        """
        IDで商品を取得する（各実装クラスで具体的な処理を定義）
        
        引数:
            item_id: 商品ID
            
        返り値:
            GiftItem: 商品情報
        """
        pass
    
    @abstractmethod
    def get_stats(self) -> Dict[str, Any]:
        """
        データソースの統計情報を取得する（各実装クラスで具体的な処理を定義）
        
        返り値:
            Dict[str, Any]: 統計情報
        """
        pass
    
    @abstractmethod
    def health_check(self) -> Dict[str, Any]:
        """
        データソースの健全性を確認する（各実装クラスで具体的な処理を定義）
        
        返り値:
            Dict[str, Any]: 健全性チェック結果
        """
        pass


# TODO(楽天API): 将来、以下のようなクラスを実装する
# class RakutenAPIService(ProductProviderBase):
#     def search_items(self, params: SearchParams) -> SearchResponse:
#         # 楽天APIを呼び出して商品検索
#         pass
#     
#     def get_item_by_id(self, item_id: str) -> GiftItem:
#         # 楽天APIで商品詳細を取得
#         pass