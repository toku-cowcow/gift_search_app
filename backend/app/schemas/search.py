"""
検索関連のPydanticスキーマ定義

このファイルの役割:
- 検索APIのリクエスト・レスポンス構造を定義します
- 複雑な検索パラメータを整理して管理しやすくします
"""

from typing import List, Optional
from pydantic import BaseModel
from .item import GiftItem


class SearchResponse(BaseModel):
    """
    検索結果のレスポンス構造
    
    使用場面:
    - /search エンドポイントのレスポンス
    - 検索結果一覧の表示
    """
    total: int                          # 検索条件に該当する総件数
    hits: List[GiftItem]                # 実際に取得した商品一覧
    query: str                          # 検索に使用されたクエリ文字列
    processing_time_ms: int             # Meilisearchでの処理時間（ミリ秒）
    limit: int                          # 1ページあたりの件数
    offset: int                         # 開始位置（ページング用）


class SearchParams(BaseModel):
    """
    検索パラメータをまとめるためのスキーマ
    
    使用場面:
    - 検索ロジックの入力パラメータ統一
    - 将来のAPI切り替え時の互換性保持
    """
    q: Optional[str] = None             # 検索クエリ（商品名等で検索）
    occasion: Optional[str] = None      # 用途フィルタ（funeral_return等）
    price_min: Optional[int] = None     # 最低価格（円）
    price_max: Optional[int] = None     # 最高価格（円）
    sort: str = "updated_at:desc"       # ソート順（updated_at:desc等）
    limit: int = 20                     # 取得件数（デフォルト20）
    offset: int = 0                     # オフセット（ページング用）