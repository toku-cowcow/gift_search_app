"""
データ更新スケジューラー

日次でデータ更新を自動実行するためのスケジューラー
"""

import asyncio
import logging
import schedule
import time
from datetime import datetime
from typing import Optional

from .data_updater import DataUpdater
from .search_service_fixed import MeilisearchService
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings

# ログ設定
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class DataUpdateScheduler:
    """データ更新スケジューラー"""
    
    def __init__(
        self,
        meilisearch_service: Optional[MeilisearchService] = None,
        vector_store: Optional[FAISS] = None,
        embeddings: Optional[OpenAIEmbeddings] = None,
        update_time: str = "03:00"  # デフォルトは午前3時
    ):
        """
        初期化
        
        Args:
            meilisearch_service: Meilisearchサービス
            vector_store: FAISSベクトルストア
            embeddings: 埋め込みモデル
            update_time: 更新時刻（HH:MM形式）
        """
        self.data_updater = DataUpdater(
            meilisearch_service=meilisearch_service,
            vector_store=vector_store,
            embeddings=embeddings
        )
        self.update_time = update_time
        self.is_running = False
        
        logger.info(f"データ更新スケジューラー初期化: 毎日{update_time}に実行")
    
    async def run_scheduled_update(self):
        """スケジュールされた更新実行"""
        try:
            logger.info(f"🕒 スケジュールされたデータ更新開始: {datetime.now()}")
            
            result = await self.data_updater.run_daily_update()
            
            if result['success']:
                logger.info(f"✅ スケジュールされたデータ更新成功")
                logger.info(f"   処理時間: {result.get('processing_time', 'N/A')}")
                logger.info(f"   有効レコード: {result['valid_records']}件")
            else:
                logger.error(f"❌ スケジュールされたデータ更新失敗")
                logger.error(f"   エラー: {result['errors']}")
                
        except Exception as e:
            logger.error(f"スケジュールされたデータ更新で例外: {e}")
    
    def schedule_daily_updates(self):
        """日次更新をスケジュール"""
        schedule.every().day.at(self.update_time).do(
            lambda: asyncio.create_task(self.run_scheduled_update())
        )
        logger.info(f"日次更新スケジュール設定完了: 毎日{self.update_time}")
    
    def run_scheduler(self):
        """スケジューラー開始"""
        self.is_running = True
        self.schedule_daily_updates()
        
        logger.info("🚀 データ更新スケジューラー開始")
        
        try:
            while self.is_running:
                schedule.run_pending()
                time.sleep(60)  # 1分間隔でチェック
                
        except KeyboardInterrupt:
            logger.info("スケジューラーを手動停止")
            self.stop_scheduler()
    
    def stop_scheduler(self):
        """スケジューラー停止"""
        self.is_running = False
        schedule.clear()
        logger.info("データ更新スケジューラー停止")
    
    async def run_immediate_update(self) -> dict:
        """即座にデータ更新を実行（テスト用）"""
        logger.info("🔄 即座データ更新開始")
        return await self.data_updater.run_daily_update()


# スタンドアロン実行用
def main():
    """スケジューラーのスタンドアロン実行"""
    # 本番では適切なサービスを注入
    scheduler = DataUpdateScheduler(
        update_time="03:00"  # 午前3時
    )
    
    try:
        scheduler.run_scheduler()
    except KeyboardInterrupt:
        print("スケジューラーを停止します...")
        scheduler.stop_scheduler()


if __name__ == "__main__":
    main()