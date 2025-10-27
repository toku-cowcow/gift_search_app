"""
商品・用途関連のPydanticスキーマ定義

このファイルの役割:
- APIリクエスト/レスポンスで使用するデータ構造を定義します
- フロントエンドとの型の整合性を保つために重要なファイルです
"""

from typing import Optional
from pydantic import BaseModel


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
    url: str                   # 元の商品ページURL
    affiliate_url: str         # アフィリエイトURL（収益化用）
    occasion: str              # 用途（funeral_return/wedding_return/baby_return）
    updated_at: int            # 更新日時（Unixタイムスタンプ）


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