"""
商品・用途関連のPydanticスキーマ定義

このファイルの役割:
- APIリクエスト/レスポンスで使用するデータ構造を定義します
- フロントエンドとの型の整合性を保つために重要なファイルです
"""

from typing import Optional, Union
from pydantic import BaseModel, field_validator
from datetime import datetime


class GiftItem(BaseModel):
    """
    ギフト商品の基本情報を表現するスキーマ
    
    使用場面:
    - 検索結果のレスポンス
    - 商品詳細のレスポンス
    """
    id: str                    # 商品の一意識別子
    title: str                 # 商品名（表示用）
    price: int                 # 価格（円単位、整数）
    image_url: str             # 商品画像のURL
    merchant: str              # 販売業者名
    source: str                # データソース（rakuten等）
    url: Optional[str] = None  # 元の商品ページURL
    affiliate_url: str         # アフィリエイトURL（収益化用）
    occasion: str              # 用途（funeral_return/wedding_return/baby_return）
    updated_at: int            # 更新日時（Unixタイムスタンプ）
    review_count: Optional[int] = None     # レビュー数
    review_average: Optional[float] = None # 評価平均（星評価）
    
    @field_validator('updated_at', mode='before')
    @classmethod
    def parse_updated_at(cls, v) -> int:
        """updated_atフィールドの自動変換"""
        if isinstance(v, str):
            try:
                # ISO文字列をパース
                dt_str = v.split('.')[0] if '.' in v else v  # マイクロ秒を除去
                if not dt_str.endswith('Z') and '+' not in dt_str[-6:]:
                    dt_str += 'Z'
                dt_str = dt_str.replace('Z', '+00:00')
                dt = datetime.fromisoformat(dt_str)
                return int(dt.timestamp())
            except Exception:
                return int(datetime.now().timestamp())
        elif isinstance(v, (int, float)):
            return int(v)
        else:
            return int(datetime.now().timestamp())


class Occasion(BaseModel):
    """
    用途（シーン）の情報を表現するスキーマ
    
    使用場面:
    - 用途一覧のレスポンス
    - フィルタオプションの生成
    """
    key: str                   # システム内部で使用するキー（funeral_return等）
    label: str                 # ユーザー向けの表示名（香典返し等）


class ErrorResponse(BaseModel):
    """
    エラー発生時のレスポンス構造
    
    使用場面:
    - APIエラー時の統一された応答形式
    """
    error: str                           # エラーの概要
    detail: Optional[str] = None         # 詳細情報（任意）