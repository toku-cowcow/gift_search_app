"""
スキーマパッケージの初期化

このファイルの役割:
- 他のモジュールから簡単にインポートできるように、主要なスキーマをエクスポートします
"""

from .item import GiftItem, Occasion, ErrorResponse
from .search import SearchResponse, SearchParams

__all__ = [
    "GiftItem",
    "Occasion", 
    "ErrorResponse",
    "SearchResponse",
    "SearchParams"
]