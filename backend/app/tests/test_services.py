"""
サービス層のテスト

このファイルの役割:
- ProductProviderの実装テスト
- Meilisearchプロバイダーのテスト
- 将来のRakutenプロバイダーのテスト
"""
import os
import pytest
from unittest.mock import Mock, patch
from app.services.search_service_fixed import MeilisearchService
from app.core.config import Settings

# テスト用環境変数設定
os.environ.setdefault('MEILI_URL', 'http://localhost:7700')
os.environ.setdefault('MEILI_KEY', 'test_key')
os.environ.setdefault('INDEX_NAME', 'test_items')


class TestMeilisearchService:
    """Meilisearchサービスのテストクラス"""
    
    @pytest.fixture
    def settings(self):
        """テスト用設定"""
        return Settings(
            meilisearch_url=os.getenv('MEILI_URL', 'http://localhost:7700'),
            meilisearch_index=os.getenv('INDEX_NAME', 'test_items'),
            meilisearch_api_key=os.getenv('MEILI_KEY', 'test_key')
        )
    
    @pytest.fixture
    def provider(self, settings):
        """テスト用プロバイダー"""
        return MeilisearchService()
    
    @patch('meilisearch.Client')
    def test_search_items_basic(self, mock_client_class, provider):
        """基本的な商品検索のテスト"""
        # モッククライアントの設定
        mock_client = Mock()
        mock_index = Mock()
        mock_client.index.return_value = mock_index
        mock_client_class.return_value = mock_client
        
        # モック検索結果
        mock_search_result = {
            "hits": [
                {
                    "id": "test-1",
                    "name": "テストギフト1",
                    "price": 5000,
                    "occasion": "結婚"
                }
            ],
            "totalHits": 1,
            "limit": 20,
            "offset": 0
        }
        mock_index.search.return_value = mock_search_result
        
        # テスト実行
        result = provider.search_items("ギフト")
        
        # 結果の検証
        assert len(result["items"]) == 1
        assert result["total"] == 1
        assert result["items"][0]["id"] == "test-1"
        assert result["items"][0]["name"] == "テストギフト1"
    
    @patch('meilisearch.Client')
    def test_search_items_with_filters(self, mock_client_class, provider):
        """フィルター付き検索のテスト"""
        mock_client = Mock()
        mock_index = Mock()
        mock_client.index.return_value = mock_index
        mock_client_class.return_value = mock_client
        
        mock_search_result = {
            "hits": [],
            "totalHits": 0,
            "limit": 10,
            "offset": 0
        }
        mock_index.search.return_value = mock_search_result
        
        # フィルター付きで検索
        result = provider.search_items(
            query="ギフト",
            occasion="結婚",
            min_price=1000,
            max_price=10000,
            page=1,
            per_page=10
        )
        
        # search メソッドが適切なパラメータで呼ばれたかを確認
        mock_index.search.assert_called_once()
        call_args = mock_index.search.call_args
        
        # フィルターが含まれているかを確認
        assert "filter" in call_args[1]
        assert "limit" in call_args[1]
        assert "offset" in call_args[1]
    
    @patch('meilisearch.Client')
    def test_get_item_by_id(self, mock_client_class, provider):
        """ID指定での商品取得テスト"""
        mock_client = Mock()
        mock_index = Mock()
        mock_client.index.return_value = mock_index
        mock_client_class.return_value = mock_client
        
        # モック商品データ
        mock_item = {
            "id": "test-1",
            "name": "テストギフト1",
            "price": 5000,
            "occasion": "結婚",
            "description": "テスト用のギフト商品です"
        }
        mock_index.get_document.return_value = mock_item
        
        # テスト実行
        result = provider.get_item_by_id("test-1")
        
        # 結果の検証
        assert result is not None
        assert result["id"] == "test-1"
        assert result["name"] == "テストギフト1"
        mock_index.get_document.assert_called_once_with("test-1")
    
    @patch('meilisearch.Client')
    def test_get_item_by_id_not_found(self, mock_client_class, provider):
        """存在しない商品IDでのテスト"""
        mock_client = Mock()
        mock_index = Mock()
        mock_client.index.return_value = mock_index
        mock_client_class.return_value = mock_client
        
        # 商品が見つからない場合の例外をシミュレート
        from meilisearch.errors import MeilisearchApiError
        mock_index.get_document.side_effect = MeilisearchApiError("Document not found", None)
        
        # テスト実行
        result = provider.get_item_by_id("nonexistent-id")
        
        # 結果の検証
        assert result is None
    
    @patch('meilisearch.Client')
    def test_health_check_success(self, mock_client_class, provider):
        """ヘルスチェック成功のテスト"""
        mock_client = Mock()
        mock_client_class.return_value = mock_client
        
        # モック健康状態
        mock_client.health.return_value = {"status": "available"}
        
        # テスト実行
        result = provider.health_check()
        
        # 結果の検証
        assert result["status"] == "healthy"
        assert result["service"] == "meilisearch"
    
    @patch('meilisearch.Client')
    def test_health_check_failure(self, mock_client_class, provider):
        """ヘルスチェック失敗のテスト"""
        mock_client = Mock()
        mock_client_class.return_value = mock_client
        
        # 接続エラーをシミュレート
        mock_client.health.side_effect = Exception("Connection failed")
        
        # テスト実行
        result = provider.health_check()
        
        # 結果の検証
        assert result["status"] == "unhealthy"
        assert "error" in result
    
    def test_build_filters(self, provider):
        """フィルター構築のテスト"""
        # プライベートメソッドのテスト（実装によって調整が必要）
        filters = provider._build_filters(
            occasion="結婚",
            min_price=1000,
            max_price=10000
        )
        
        # フィルターの内容確認
        assert "occasion = '結婚'" in filters
        assert "price >= 1000" in filters
        assert "price <= 10000" in filters


# 統合テスト
class TestProviderIntegration:
    """プロバイダーの統合テスト"""
    
    def test_provider_interface_compliance(self):
        """プロバイダーが正しくインターフェースを実装しているかテスト"""
        from app.services.product_provider_base import ProductProviderBase
        from app.services.search_service_fixed import MeilisearchService
        from app.core.config import Settings
        
        settings = Settings()
        provider = MeilisearchService()
        
        # インターフェースの実装確認
        assert isinstance(provider, ProductProviderBase)
        assert hasattr(provider, 'search_items')
        assert hasattr(provider, 'get_item_by_id')
        assert hasattr(provider, 'health_check')
        assert hasattr(provider, 'get_occasions')