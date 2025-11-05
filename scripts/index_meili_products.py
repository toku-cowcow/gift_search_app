#!/usr/bin/env python3
"""
商品データをMeilisearchに投入する汎用スクリプト (meili付きバージョン)

このファイルの役割:
- 複数のデータソース（楽天、Amazon、Yahoo!ショッピング等）に対応
- JSONファイルから商品データをMeilisearchに投入
- データソースごとに適切な処理を自動選択
- 設定をJSONファイルから自動読み込み

サポートするデータソース:
- rakuten: 楽天商品データ
- amazon: Amazon商品データ（将来対応予定）
- yahoo: Yahoo!ショッピング商品データ（将来対応予定）

実行方法:
1. Meilisearchを起動: cd infra && docker compose up -d
2. このスクリプトを実行: python scripts/index_meili_products.py --source rakuten --file data/rakuten_uchiwai_products_20251030_233859.json
3. 「X items uploaded successfully」のメッセージを確認

使用例:
# 楽天商品データを投入
python scripts/index_meili_products.py --source rakuten --file data/rakuten_uchiwai_products_20251030_233859.json

# Amazon商品データを投入（将来）
python scripts/index_meili_products.py --source amazon --file data/amazon_products.json
"""

import os
import json
import logging
import argparse
from datetime import datetime
from pathlib import Path
from typing import List, Dict, Any, Optional
from dotenv import load_dotenv
import requests


def setup_logging() -> logging.Logger:
    """
    ログ出力の設定を行います
    """
    today = datetime.now().strftime('%Y%m%d')
    log_dir = Path('logs') / today
    log_dir.mkdir(parents=True, exist_ok=True)
    
    log_file = log_dir / 'index_meili_products.log'
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
    """
    load_dotenv()
    
    config = {
        'meili_url': os.getenv('MEILI_URL', 'http://127.0.0.1:7700'),
        'meili_key': os.getenv('MEILI_KEY', 'masterKey'),
        'index_name': os.getenv('INDEX_NAME', 'items'),
        'timezone': os.getenv('TIMEZONE', 'Asia/Tokyo')
    }
    
    return config


def load_meilisearch_settings() -> Dict[str, Any]:
    """
    JSONファイルからMeilisearch設定を読み込みます
    """
    settings_file = Path('data') / 'meili_settings.json'  # scriptsディレクトリから実行するので相対パス修正
    
    # デフォルト設定
    default_settings = {
        'filterableAttributes': ['occasion', 'price', 'source'],
        'sortableAttributes': ['updated_at', 'price', 'review_average', 'review_count'],
        'searchableAttributes': ['title']  # titleのみ（完全一致検索のため）
    }
    
    try:
        if settings_file.exists():
            with open(settings_file, 'r', encoding='utf-8') as f:
                settings_data = json.load(f)
                # 新しい形式：JSONファイルが直接設定オブジェクト
                return settings_data
        else:
            return default_settings
    except Exception as e:
        logging.getLogger(__name__).warning(f"設定ファイルの読み込みに失敗しました（デフォルト設定を使用）: {e}")
        return default_settings


def load_product_data(file_path: Path, source: str) -> List[Dict[str, Any]]:
    """
    商品データファイルを読み込みます
    
    Args:
        file_path: データファイルのパス
        source: データソース（rakuten, amazon, yahoo）
    
    Returns:
        商品データのリスト
    """
    if not file_path.exists():
        # 楽天データは必須扱いにするが、Amazon/Yahooは将来対応のため存在しなくても処理を続ける
        if source in ('amazon', 'yahoo'):
            return []
        raise FileNotFoundError(f"Product data file not found: {file_path}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # データソースごとの処理
    if source == 'rakuten':
        return normalize_rakuten_data(data)
    elif source == 'amazon':
        return normalize_amazon_data(data)
    elif source == 'yahoo':
        return normalize_yahoo_data(data)
    else:
        raise ValueError(f"Unsupported data source: {source}")


def detect_occasions_from_text(title: str, description: str) -> List[str]:
    """
    商品タイトルと説明文から複数のカテゴリを推測します
    """
    text = (title + " " + description).lower()
    detected_occasions = []
    
    # 香典返し・法要関連
    funeral_keywords = [
        "香典返し", "法要", "法事", "四十九日", "忌明け", "志", "満中陰志", 
        "弔事", "御礼", "会葬", "偲び草", "粗供養", "初盆", "供物", "お供え"
    ]
    
    # 結婚内祝い関連
    wedding_keywords = [
        "結婚内祝", "結婚祝", "引き出物", "引出物", "結婚式", "ブライダル", 
        "ウェディング", "結婚記念", "披露宴", "二次会"
    ]
    
    # 出産内祝い関連
    baby_keywords = [
        "出産内祝", "出産祝", "命名内祝", "初節句", "ベビー", "赤ちゃん", 
        "新生児", "誕生", "お七夜"
    ]
    
    # 各カテゴリをチェック（複数ヒット可能）
    funeral_match = any(keyword in text for keyword in funeral_keywords)
    wedding_match = any(keyword in text for keyword in wedding_keywords)
    baby_match = any(keyword in text for keyword in baby_keywords)
    
    if funeral_match:
        detected_occasions.append("funeral_return")
    if wedding_match:
        detected_occasions.append("wedding_return")
    if baby_match:
        detected_occasions.append("baby_return")
    
    # マッチしなかった場合はunknown
    if not detected_occasions:
        detected_occasions.append("unknown")
    
    return detected_occasions


def normalize_rakuten_data(data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    楽天商品データを正規化します
    """
    normalized_items = []
    
    for item in data:
        # IDからMeilisearch無効文字を削除（コロンをアンダースコアに置換）
        item_id = item.get('id', f"rakuten_{len(normalized_items)}")
        clean_id = item_id.replace(':', '_').replace('"', '')
        
        # タイトルと説明文から複数のカテゴリを推測
        title = item.get('title', '')
        description = item.get('description', '')
        detected_occasions = detect_occasions_from_text(title, description)
        
        # 複数カテゴリがある場合は最初の1つを主カテゴリとして使用
        # （Meilisearchのフィルタリング用）
        primary_occasion = detected_occasions[0] if detected_occasions else "unknown"
        
        normalized_item = {
            'id': clean_id,
            'title': title,
            'description': description,
            'price': item.get('price', 0),
            'image_url': item.get('image_url', ''),
            'url': item.get('url', ''),
            'affiliate_url': item.get('affiliate_url', ''),
            'merchant': item.get('merchant', ''),
            'occasion': primary_occasion,  # 主カテゴリを使用
            'occasions': detected_occasions,  # 全カテゴリリスト（新フィールド）
            'review_count': item.get('review_count', 0),
            'review_average': item.get('review_average', 0.0),
            'updated_at': item.get('updated_at', int(datetime.now().timestamp())),
            'source': item.get('source', 'rakuten'),
            'shop_code': item.get('shop_code', ''),
            'item_code': item.get('item_code', ''),
            'catch_copy': item.get('catch_copy', ''),
            'tags': item.get('tags', [])
        }
        normalized_items.append(normalized_item)
    
    return normalized_items


def normalize_amazon_data(data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Amazon商品データを正規化します（将来実装用）
    """
    logger = logging.getLogger(__name__)
    logger.warning("Amazon data source is not yet implemented.")
    logger.info("Amazon商品データの正規化機能は将来実装予定です。")
    logger.info("現在は楽天データのみ対応しています。")
    
    # 空のリストを返してエラーを回避
    return []


def normalize_yahoo_data(data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Yahoo!ショッピング商品データを正規化します（将来実装用）
    """
    logger = logging.getLogger(__name__)
    logger.warning("Yahoo shopping data source is not yet implemented.")
    logger.info("Yahoo!ショッピング商品データの正規化機能は将来実装予定です。")
    logger.info("現在は楽天データのみ対応しています。")
    
    # 空のリストを返してエラーを回避
    return []



class MeilisearchClient:
    """
    MeilisearchとのHTTP通信を行うクライアントクラス
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
    
    def update_settings(self, index_name: str, settings: Dict[str, Any]) -> Dict[str, Any]:
        """Update index settings"""
        try:
            response = requests.patch(
                f'{self.url}/indexes/{index_name}/settings',
                headers=self.headers,
                json=settings,
                timeout=10
            )
            if response.status_code in [200, 202]:
                return {'success': True, 'task_uid': response.json().get('taskUid')}
            else:
                return {'success': False, 'error': f'HTTP {response.status_code}: {response.text}'}
        except Exception as e:
            return {'success': False, 'error': str(e)}
    
    def add_documents(self, index_name: str, documents: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Add or update documents in the index"""
        try:
            response = requests.post(
                f'{self.url}/indexes/{index_name}/documents',
                headers=self.headers,
                json=documents,
                timeout=60  # 大量データ対応のためタイムアウトを延長
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


def parse_arguments():
    """コマンドライン引数の解析"""
    parser = argparse.ArgumentParser(
        description='商品データをMeilisearchに投入する汎用スクリプト',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
使用例:
  # 楽天商品データを投入
  python scripts/index_meili_products.py --source rakuten --file data/rakuten_uchiwai_products_20251030_233859.json
  
  # Amazon商品データを投入（将来）
  python scripts/index_meili_products.py --source amazon --file data/amazon_products.json
        """
    )
    
    parser.add_argument(
        '--source', 
        choices=['rakuten', 'amazon', 'yahoo'],
        required=True,
        help='データソース（rakuten, amazon, yahoo）'
    )
    
    parser.add_argument(
        '--file',
        type=str,
        required=True,
        help='商品データファイルのパス（例: data/rakuten_products.json）'
    )
    
    parser.add_argument(
        '--index',
        type=str,
        default='items',
        help='Meilisearchインデックス名（デフォルト: items）'
    )
    
    return parser.parse_args()


def main():
    """メイン実行関数"""
    args = parse_arguments()
    logger = setup_logging()
    
    logger.info(f"Starting product indexing process")
    logger.info(f"Data source: {args.source}")
    logger.info(f"Data file: {args.file}")
    logger.info(f"Target index: {args.index}")
    
    try:
        # 設定の読み込み
        config = load_environment()
        config['index_name'] = args.index  # コマンドライン引数で上書き
        logger.info(f"Configuration loaded: URL={config['meili_url']}, Index={config['index_name']}")
        
        # Meilisearchクライアント初期化
        client = MeilisearchClient(config['meili_url'], config['meili_key'])
        
        # ヘルスチェック
        if not client.health_check():
            logger.error("Meilisearch health check failed. Is the service running?")
            return False
        logger.info("Meilisearch health check passed")
        
        # インデックス存在確認
        index_info = client.get_index(config['index_name'])
        index_exists = bool(index_info)
        
        # Meilisearch設定の読み込み
        logger.info("Loading Meilisearch settings from JSON file...")
        settings = load_meilisearch_settings()
        logger.info(f"Loaded settings: {json.dumps(settings, ensure_ascii=False, indent=2)}")
        
        # インデックス作成（必要に応じて）
        if not index_exists:
            logger.info(f"Creating index: {config['index_name']}")
            if not client.create_index(config['index_name']):
                logger.error(f"Failed to create index: {config['index_name']}")
                return False
            logger.info(f"Index created successfully: {config['index_name']}")
        else:
            logger.info(f"Index already exists: {config['index_name']}")
        
        # 設定の適用
        logger.info("Applying Meilisearch settings...")
        settings_result = client.update_settings(config['index_name'], settings)
        if settings_result.get('success'):
            logger.info(f"Meilisearch settings applied successfully. Task UID: {settings_result.get('task_uid')}")
        else:
            logger.error(f"Failed to apply Meilisearch settings: {settings_result.get('error')}")
        
        # 商品データの読み込み
        logger.info(f"Loading product data from {args.file}...")
        data_file = Path(args.file)
        product_data = load_product_data(data_file, args.source)
        logger.info(f"Loaded and normalized {len(product_data)} items from {args.source} data")
        
        # ドキュメントのアップロード
        logger.info("Uploading documents to Meilisearch...")
        result = client.add_documents(config['index_name'], product_data)
        
        if 'error' in result:
            logger.error(f"Failed to upload documents: {result['error']}")
            return False
        
        logger.info(f"Documents uploaded successfully. Task UID: {result.get('taskUid', 'N/A')}")
        logger.info(f"Upserted {len(product_data)} items from {args.source} to index '{config['index_name']}'")
        
        # 最終統計情報
        stats = client.get_stats(config['index_name'])
        if stats:
            logger.info(f"Index statistics: {json.dumps(stats, indent=2)}")
        
        logger.info("Product indexing process completed successfully")
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