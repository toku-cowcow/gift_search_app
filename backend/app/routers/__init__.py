"""
ルータパッケージの初期化

このファイルの役割:
- 各ルータを外部から簡単にインポートできるようにします
- main.py でのルータ登録を簡潔にします
"""

from .health import router as health_router
from .items import router as items_router  
from .stats import router as stats_router

__all__ = [
    "health_router",
    "items_router", 
    "stats_router"
]