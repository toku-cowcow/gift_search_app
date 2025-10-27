#!/usr/bin/env python3
"""
Meilisearchにサンプル商品データを投入するスクリプト

このファイルの役割:
- サンプル商品データ（JSON形式）をMeilisearchに投入します
- 初回実行時はインデックス作成と設定を自動で行います
- 処理ログを日付別フォルダに保存します
- 開発・テスト用のダミーデータでアプリの動作確認を可能にします

実行方法:
1. Meilisearchを起動: cd infra && docker compose up -d
2. このスクリプトを実行: python scripts/index_meili.py
3. 「12 items uploaded successfully」のメッセージを確認
"""

import os
import json
import logging
from datetime import datetime
from pathlib import Path
from typing import List, Dict, Any
from dotenv import load_dotenv
import requests


def setup_logging() -> logging.Logger:
    """
    ログ出力の設定を行います
    
    処理内容:
    - logs/日付/ フォルダを作成
    - ファイルとコンソールの両方にログ出力
    - 実行結果を後から確認できるように保存
    """
    # Create logs directory structure
    today = datetime.now().strftime('%Y%m%d')
    log_dir = Path('logs') / today
    log_dir.mkdir(parents=True, exist_ok=True)
    
    # Configure logging
    log_file = log_dir / 'index_meili.log'
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(log_file, encoding='utf-8'),
            logging.StreamHandler()
        ]
    )
    
    return logging.getLogger(__name__)


def load_environment() -> Dict[str, str]:
    """
    環境変数を読み込んで設定辞書を作成します
    
    読み込み順序:
    1. .envファイルの内容（あれば優先）
    2. システム環境変数
    3. デフォルト値（開発用）
    
    返り値: Meilisearch接続に必要な設定情報
    """
    load_dotenv()
    
    config = {
        'meili_url': os.getenv('MEILI_URL', 'http://127.0.0.1:7700'),
        'meili_key': os.getenv('MEILI_KEY', 'masterKey'),
        'index_name': os.getenv('INDEX_NAME', 'items'),
        'timezone': os.getenv('TIMEZONE', 'Asia/Tokyo')
    }
    
    return config


def load_sample_data() -> List[Dict[str, Any]]:
    """Load sample items from JSON file"""
    data_file = Path('data') / 'sample_items.json'
    
    if not data_file.exists():
        raise FileNotFoundError(f"Sample data file not found: {data_file}")
    
    with open(data_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    return data


class MeilisearchClient:
    """
    MeilisearchとのHTTP通信を行うクライアントクラス
    
    なぜrequestsライブラリを使用するか:
    - meilisearchライブラリをインストールしなくても動作
    - HTTP通信の内容が明確で初学者にもわかりやすい
    - エラーハンドリングを細かく制御可能
    """
    
    def __init__(self, url: str, api_key: str):
        self.url = url.rstrip('/')
        self.api_key = api_key
        self.headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
    
    def health_check(self) -> bool:
        """Check if Meilisearch is healthy"""
        try:
            response = requests.get(f'{self.url}/health', timeout=5)
            return response.status_code == 200 and response.json().get('status') == 'available'
        except Exception:
            return False
    
    def get_index(self, index_name: str) -> Dict[str, Any]:
        """Get index information"""
        try:
            response = requests.get(
                f'{self.url}/indexes/{index_name}',
                headers=self.headers,
                timeout=10
            )
            if response.status_code == 200:
                return response.json()
            return {}
        except Exception:
            return {}
    
    def create_index(self, index_name: str, primary_key: str = 'id') -> bool:
        """Create a new index"""
        try:
            payload = {
                'uid': index_name,
                'primaryKey': primary_key
            }
            response = requests.post(
                f'{self.url}/indexes',
                headers=self.headers,
                json=payload,
                timeout=10
            )
            return response.status_code in [201, 202]
        except Exception:
            return False
    
    def update_settings(self, index_name: str, settings: Dict[str, Any]) -> bool:
        """Update index settings"""
        try:
            response = requests.patch(
                f'{self.url}/indexes/{index_name}/settings',
                headers=self.headers,
                json=settings,
                timeout=10
            )
            return response.status_code in [200, 202]
        except Exception:
            return False
    
    def add_documents(self, index_name: str, documents: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Add or update documents in the index"""
        try:
            response = requests.post(
                f'{self.url}/indexes/{index_name}/documents',
                headers=self.headers,
                json=documents,
                timeout=30
            )
            if response.status_code in [200, 202]:
                return response.json()
            else:
                return {'error': f'HTTP {response.status_code}: {response.text}'}
        except Exception as e:
            return {'error': str(e)}
    
    def get_stats(self, index_name: str) -> Dict[str, Any]:
        """Get index statistics"""
        try:
            response = requests.get(
                f'{self.url}/indexes/{index_name}/stats',
                headers=self.headers,
                timeout=10
            )
            if response.status_code == 200:
                return response.json()
            return {}
        except Exception:
            return {}


def main():
    """Main execution function"""
    logger = setup_logging()
    logger.info("Starting Meilisearch indexing process")
    
    try:
        # Load configuration
        config = load_environment()
        logger.info(f"Loaded configuration: URL={config['meili_url']}, Index={config['index_name']}")
        
        # Initialize Meilisearch client
        client = MeilisearchClient(config['meili_url'], config['meili_key'])
        
        # Health check
        if not client.health_check():
            logger.error("Meilisearch health check failed. Is the service running?")
            return False
        logger.info("Meilisearch health check passed")
        
        # Check if index exists
        index_info = client.get_index(config['index_name'])
        index_exists = bool(index_info)
        
        if not index_exists:
            logger.info(f"Creating index: {config['index_name']}")
            if not client.create_index(config['index_name']):
                logger.error(f"Failed to create index: {config['index_name']}")
                return False
            logger.info(f"Index created successfully: {config['index_name']}")
            
            # Configure index settings for new index
            settings = {
                'filterableAttributes': ['occasion', 'price'],
                'sortableAttributes': ['updated_at', 'price']
            }
            
            logger.info("Configuring index settings...")
            if client.update_settings(config['index_name'], settings):
                logger.info("Index settings configured successfully")
            else:
                logger.warning("Failed to configure index settings")
        else:
            logger.info(f"Index already exists: {config['index_name']}")
        
        # Load sample data
        logger.info("Loading sample data...")
        sample_data = load_sample_data()
        logger.info(f"Loaded {len(sample_data)} items from sample_items.json")
        
        # Upload documents
        logger.info("Uploading documents to Meilisearch...")
        result = client.add_documents(config['index_name'], sample_data)
        
        if 'error' in result:
            logger.error(f"Failed to upload documents: {result['error']}")
            return False
        
        logger.info(f"Documents uploaded successfully. Task UID: {result.get('taskUid', 'N/A')}")
        logger.info(f"Upserted {len(sample_data)} items to index '{config['index_name']}'")
        
        # Get final stats
        stats = client.get_stats(config['index_name'])
        if stats:
            logger.info(f"Index statistics: {json.dumps(stats, indent=2)}")
        
        logger.info("Indexing process completed successfully")
        return True
        
    except FileNotFoundError as e:
        logger.error(f"File not found: {e}")
        return False
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        return False


if __name__ == '__main__':
    success = main()
    exit(0 if success else 1)