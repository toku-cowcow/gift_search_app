"""
APIエンドポイントのテスト

このファイルの役割:
- FastAPIのテストクライアントを使用してAPIエンドポイントをテスト
- 検索、統計、その他のエンドポイントの動作確認
"""
import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.core.config import get_settings

# テストクライアントの作成
client = TestClient(app)

class TestItemsAPI:
    """商品検索APIのテストクラス"""
    
    def test_get_occasions(self):
        """利用シーン一覧取得のテスト"""
        response = client.get("/api/v1/occasions")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        # 基本的な利用シーンが含まれているか確認
        occasions = [occasion["name"] for occasion in data]
        assert "結婚" in occasions
        assert "出産" in occasions
    
    def test_search_items_basic(self):
        """基本的な商品検索のテスト"""
        response = client.get("/api/v1/search?query=ギフト")
        assert response.status_code == 200
        data = response.json()
        
        # レスポンス構造の確認
        assert "items" in data
        assert "total" in data
        assert "page" in data
        assert "per_page" in data
        assert isinstance(data["items"], list)
        assert isinstance(data["total"], int)
    
    def test_search_items_with_filters(self):
        """フィルター付き商品検索のテスト"""
        params = {
            "query": "ギフト",
            "occasion": "結婚",
            "min_price": 1000,
            "max_price": 10000,
            "page": 1,
            "per_page": 10
        }
        response = client.get("/api/v1/search", params=params)
        assert response.status_code == 200
        data = response.json()
        
        # フィルター結果の確認
        assert len(data["items"]) <= 10  # per_pageの制限
        assert data["page"] == 1
        assert data["per_page"] == 10
    
    def test_search_items_invalid_params(self):
        """無効なパラメータでの検索テスト"""
        # 負のページ番号
        response = client.get("/api/v1/search?page=-1")
        assert response.status_code == 422
        
        # 無効な価格範囲
        response = client.get("/api/v1/search?min_price=10000&max_price=1000")
        assert response.status_code == 422
    
    def test_get_item_by_id(self):
        """商品詳細取得のテスト（実際のIDが存在する場合のみ）"""
        # TODO: 実際のテストデータのIDに更新する必要があります
        # response = client.get("/api/v1/items/test-item-id")
        # assert response.status_code == 200
        pass
    
    def test_get_item_not_found(self):
        """存在しない商品IDでのテスト"""
        response = client.get("/api/v1/items/nonexistent-id")
        assert response.status_code == 404


class TestStatsAPI:
    """統計APIのテストクラス"""
    
    def test_get_search_stats(self):
        """検索統計取得のテスト"""
        response = client.get("/api/v1/stats/search")
        assert response.status_code == 200
        data = response.json()
        
        # 統計データの構造確認
        assert "total_searches" in data
        assert "popular_queries" in data
        assert "popular_occasions" in data
        assert isinstance(data["total_searches"], int)
        assert isinstance(data["popular_queries"], list)
        assert isinstance(data["popular_occasions"], list)


class TestHealthCheck:
    """ヘルスチェックのテストクラス"""
    
    def test_health_check(self):
        """基本的なヘルスチェック"""
        response = client.get("/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
    
    def test_detailed_health_check(self):
        """詳細なヘルスチェック"""
        response = client.get("/health?detailed=true")
        assert response.status_code == 200
        data = response.json()
        assert "status" in data
        assert "services" in data
        assert "meilisearch" in data["services"]


# 設定のテスト
def test_settings():
    """設定が正しく読み込まれることを確認"""
    settings = get_settings()
    assert settings.app_name == "HAREGift API"
    assert settings.version == "1.0.0"
    assert settings.meilisearch_url is not None
    assert settings.meilisearch_index is not None