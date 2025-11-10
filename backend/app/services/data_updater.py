"""
データ自動更新システム

このファイルの役割:
- 最新のrakuten_uchiwai_products_*.jsonファイルを自動選択
- ベクトルストア、Meilisearchの差分更新
- 壊れたレコードの検出・ログ出力
- 日次実行のためのジョブ機能
"""

import os
import json
import logging
import re
from datetime import datetime, timedelta
from typing import List, Dict, Any, Optional, Tuple
from pathlib import Path

from ..schemas import GiftItem
from .search_service_fixed import MeilisearchService
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings

# ログ設定
logger = logging.getLogger(__name__)


class DataUpdater:
    """データ自動更新サービス"""
    
    def __init__(
        self,
        data_dir: str = "scripts/data",
        meilisearch_service: Optional[MeilisearchService] = None,
        vector_store: Optional[FAISS] = None,
        embeddings: Optional[OpenAIEmbeddings] = None
    ):
        """
        初期化
        
        Args:
            data_dir: データファイルディレクトリ
            meilisearch_service: Meilisearchサービス
            vector_store: FAISSベクトルストア
            embeddings: 埋め込みモデル
        """
        self.data_dir = Path(data_dir)
        self.meilisearch_service = meilisearch_service
        self.vector_store = vector_store
        self.embeddings = embeddings
        
        # データ検証ルール
        self.required_fields = ['id', 'title', 'price', 'url', 'merchant']
        self.price_range = (100, 1000000)  # 100円〜100万円
        
        logger.info("データ更新システム初期化完了")
    
    def find_latest_data_file(self) -> Optional[Path]:
        """
        最新のrakuten_uchiwai_products_*.jsonファイルを検索
        
        Returns:
            最新ファイルのパス、見つからない場合はNone
        """
        try:
            # パターンマッチング
            pattern = r'rakuten_uchiwai_products_(\d{8})\.json'
            latest_date = None
            latest_file = None
            
            for file_path in self.data_dir.glob('rakuten_uchiwai_products_*.json'):
                match = re.match(pattern, file_path.name)
                if match:
                    date_str = match.group(1)
                    try:
                        file_date = datetime.strptime(date_str, '%Y%m%d')
                        if latest_date is None or file_date > latest_date:
                            latest_date = file_date
                            latest_file = file_path
                    except ValueError:
                        logger.warning(f"無効な日付形式ファイル: {file_path.name}")
                        continue
            
            if latest_file:
                logger.info(f"最新データファイル発見: {latest_file.name} ({latest_date.strftime('%Y-%m-%d')})")
                return latest_file
            else:
                logger.warning(f"データファイルが見つかりません: {self.data_dir}")
                return None
                
        except Exception as e:
            logger.error(f"データファイル検索エラー: {e}")
            return None
    
    def validate_record(self, record: Dict[str, Any]) -> Tuple[bool, List[str]]:
        """
        レコードの妥当性検証
        
        Args:
            record: 検証するレコード
            
        Returns:
            (有効フラグ, エラーメッセージリスト)
        """
        errors = []
        
        # 必須フィールドチェック
        for field in self.required_fields:
            if field not in record or not record[field]:
                errors.append(f"必須フィールド欠落: {field}")
        
        # 価格範囲チェック
        price = record.get('price')
        if price is not None:
            try:
                price_num = float(price)
                if not (self.price_range[0] <= price_num <= self.price_range[1]):
                    errors.append(f"異常な価格: {price_num}")
            except (ValueError, TypeError):
                errors.append(f"無効な価格形式: {price}")
        
        # URL形式チェック
        url = record.get('url', '')
        if url and not (url.startswith('http://') or url.startswith('https://')):
            errors.append(f"無効なURL形式: {url}")
        
        # ID重複チェック（基本的な形式チェック）
        record_id = record.get('id', '')
        if not record_id or len(record_id) < 5:
            errors.append(f"無効なID: {record_id}")
        
        return len(errors) == 0, errors
    
    def load_and_validate_data(self, file_path: Path) -> Tuple[List[Dict], List[Dict]]:
        """
        データファイルの読み込みと検証
        
        Args:
            file_path: データファイルパス
            
        Returns:
            (有効レコードリスト, 無効レコードリスト)
        """
        valid_records = []
        invalid_records = []
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            logger.info(f"データファイル読み込み完了: {len(data)}件")
            
            for i, record in enumerate(data):
                is_valid, errors = self.validate_record(record)
                
                if is_valid:
                    valid_records.append(record)
                else:
                    invalid_record = {
                        'index': i,
                        'record': record,
                        'errors': errors
                    }
                    invalid_records.append(invalid_record)
            
            logger.info(f"データ検証完了: 有効 {len(valid_records)}件, 無効 {len(invalid_records)}件")
            
            # 無効レコードをログ出力
            if invalid_records:
                logger.warning(f"無効レコード検出: {len(invalid_records)}件")
                for invalid in invalid_records[:10]:  # 最初の10件のみ詳細ログ
                    logger.warning(f"  行{invalid['index']}: {invalid['errors']}")
                    
            return valid_records, invalid_records
            
        except Exception as e:
            logger.error(f"データファイル読み込みエラー: {e}")
            return [], []
    
    async def update_meilisearch(self, records: List[Dict]) -> bool:
        """
        Meilisearchインデックスの更新
        
        Args:
            records: 更新するレコード
            
        Returns:
            更新成功フラグ
        """
        if not self.meilisearch_service:
            logger.warning("Meilisearchサービスが設定されていません")
            return False
        
        try:
            # バッチ更新でパフォーマンス向上
            batch_size = 1000
            total_updated = 0
            
            for i in range(0, len(records), batch_size):
                batch = records[i:i + batch_size]
                
                # GiftItemオブジェクトに変換
                gift_items = []
                for record in batch:
                    try:
                        gift_item = GiftItem(
                            id=record['id'],
                            title=record['title'],
                            price=float(record['price']),
                            image_url=record.get('image_url', ''),
                            merchant=record['merchant'],
                            url=record['url'],
                            affiliate_url=record.get('affiliate_url', ''),
                            occasion=record.get('occasion', ''),
                            occasions=record.get('occasions', []),
                            review_count=record.get('review_count', 0),
                            review_average=record.get('review_average', 0.0),
                            updated_at=int(datetime.now().timestamp())
                        )
                        gift_items.append(gift_item)
                    except Exception as e:
                        logger.warning(f"レコード変換エラー ({record.get('id', 'unknown')}): {e}")
                        continue
                
                # Meilisearchに一括挿入
                success = await self.meilisearch_service.add_products(gift_items)
                if success:
                    total_updated += len(gift_items)
                    logger.info(f"Meilisearch更新: {total_updated}/{len(records)}件完了")
                else:
                    logger.error(f"Meilisearch更新失敗: batch {i//batch_size + 1}")
                    return False
            
            logger.info(f"Meilisearch更新完了: {total_updated}件")
            return True
            
        except Exception as e:
            logger.error(f"Meilisearch更新エラー: {e}")
            return False
    
    def update_vector_store(self, records: List[Dict]) -> bool:
        """
        ベクトルストアの更新（差分処理）
        
        Args:
            records: 更新するレコード
            
        Returns:
            更新成功フラグ
        """
        if not self.vector_store or not self.embeddings:
            logger.warning("ベクトルストアまたは埋め込みモデルが設定されていません")
            return False
        
        try:
            # 新規レコードのテキスト作成
            texts = []
            metadatas = []
            
            for record in records:
                # 商品情報をテキスト化
                text = f"{record['title']} {record.get('merchant', '')} {record.get('occasion', '')}"
                metadata = {
                    'id': record['id'],
                    'title': record['title'],
                    'price': record['price'],
                    'merchant': record['merchant'],
                    'occasion': record.get('occasion', ''),
                    'source': 'rakuten_uchiwai'
                }
                
                texts.append(text)
                metadatas.append(metadata)
            
            # バッチ処理でベクトル化・追加
            batch_size = 100  # 埋め込みAPIの制限考慮
            total_added = 0
            
            for i in range(0, len(texts), batch_size):
                batch_texts = texts[i:i + batch_size]
                batch_metadatas = metadatas[i:i + batch_size]
                
                # ベクトルストアに追加
                self.vector_store.add_texts(
                    texts=batch_texts,
                    metadatas=batch_metadatas
                )
                
                total_added += len(batch_texts)
                logger.info(f"ベクトルストア更新: {total_added}/{len(texts)}件完了")
            
            logger.info(f"ベクトルストア更新完了: {total_added}件")
            return True
            
        except Exception as e:
            logger.error(f"ベクトルストア更新エラー: {e}")
            return False
    
    async def run_daily_update(self) -> Dict[str, Any]:
        """
        日次データ更新ジョブ実行
        
        Returns:
            実行結果サマリー
        """
        start_time = datetime.now()
        summary = {
            'start_time': start_time.isoformat(),
            'success': False,
            'total_records': 0,
            'valid_records': 0,
            'invalid_records': 0,
            'meilisearch_updated': False,
            'vector_store_updated': False,
            'errors': []
        }
        
        try:
            logger.info("🔄 日次データ更新開始")
            
            # Step 1: 最新データファイル検索
            latest_file = self.find_latest_data_file()
            if not latest_file:
                summary['errors'].append("最新データファイルが見つかりません")
                return summary
            
            # Step 2: データ読み込み・検証
            valid_records, invalid_records = self.load_and_validate_data(latest_file)
            summary['total_records'] = len(valid_records) + len(invalid_records)
            summary['valid_records'] = len(valid_records)
            summary['invalid_records'] = len(invalid_records)
            
            if not valid_records:
                summary['errors'].append("有効なレコードがありません")
                return summary
            
            # Step 3: Meilisearch更新
            if self.meilisearch_service:
                meilisearch_success = await self.update_meilisearch(valid_records)
                summary['meilisearch_updated'] = meilisearch_success
                if not meilisearch_success:
                    summary['errors'].append("Meilisearch更新失敗")
            
            # Step 4: ベクトルストア更新
            if self.vector_store:
                vector_success = self.update_vector_store(valid_records)
                summary['vector_store_updated'] = vector_success
                if not vector_success:
                    summary['errors'].append("ベクトルストア更新失敗")
            
            # Step 5: 成功判定
            summary['success'] = (
                summary['meilisearch_updated'] or summary['vector_store_updated']
            ) and len(summary['errors']) == 0
            
            end_time = datetime.now()
            processing_time = (end_time - start_time).total_seconds()
            
            logger.info(f"✅ 日次データ更新完了: {processing_time:.1f}秒")
            logger.info(f"   有効レコード: {summary['valid_records']}件")
            logger.info(f"   無効レコード: {summary['invalid_records']}件")
            
            return summary
            
        except Exception as e:
            logger.error(f"日次データ更新エラー: {e}")
            summary['errors'].append(str(e))
            return summary


# スタンドアロン実行用
async def main():
    """日次更新ジョブのスタンドアロン実行"""
    updater = DataUpdater()
    result = await updater.run_daily_update()
    
    print(f"更新結果: {result}")
    
    if not result['success']:
        exit(1)  # エラー終了


if __name__ == "__main__":
    import asyncio
    asyncio.run(main())