"""
楽天市場API商品検索スクリプト
内祝い商品を検索して、JSONファイルに保存する
ジャンル名取得機能付き、リトライ・再開機能強化版
"""

import requests
import json
import time
from datetime import datetime
import os
from typing import Dict, List, Any
import random

class RakutenProductFetcher:
    def __init__(self, app_id: str, affiliate_id: str = None):
        self.app_id = app_id
        self.affiliate_id = affiliate_id
        self.base_url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706"
        self.genre_api_url = "https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20120723"
        # ジャンル名キャッシュ（API呼び出し数削減のため）
        self._genre_cache = {}
        self._load_genre_cache()
        
        # 進捗保存ファイル
        self.progress_file = os.path.join(os.path.dirname(__file__), 'data', 'fetch_progress.json')
        
    def _load_genre_cache(self):
        """保存されたジャンルキャッシュを読み込み"""
        cache_file = os.path.join(os.path.dirname(__file__), 'data', 'genre_cache.json')
        if os.path.exists(cache_file):
            try:
                with open(cache_file, 'r', encoding='utf-8') as f:
                    self._genre_cache = json.load(f)
                print(f"ジャンルキャッシュを読み込み: {len(self._genre_cache)} 件")
            except Exception as e:
                print(f"ジャンルキャッシュ読み込みエラー: {e}")
                self._genre_cache = {}
    
    def _save_genre_cache(self):
        """ジャンルキャッシュをファイルに保存"""
        data_dir = os.path.join(os.path.dirname(__file__), 'data')
        os.makedirs(data_dir, exist_ok=True)
        cache_file = os.path.join(data_dir, 'genre_cache.json')
        
        try:
            with open(cache_file, 'w', encoding='utf-8') as f:
                json.dump(self._genre_cache, f, ensure_ascii=False, indent=2)
            print(f"ジャンルキャッシュを保存: {len(self._genre_cache)} 件")
        except Exception as e:
            print(f"ジャンルキャッシュ保存エラー: {e}")
    
    def _load_progress(self):
        """進捗データを読み込み"""
        if os.path.exists(self.progress_file):
            try:
                with open(self.progress_file, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except Exception as e:
                print(f"進捗ファイル読み込みエラー: {e}")
        return None
    
    def _save_progress(self, page: int, total_items: int, keyword: str):
        """進捗データを保存"""
        progress = {
            'page': page,
            'total_items': total_items,
            'keyword': keyword,
            'timestamp': datetime.now().isoformat()
        }
        try:
            data_dir = os.path.join(os.path.dirname(__file__), 'data')
            os.makedirs(data_dir, exist_ok=True)
            with open(self.progress_file, 'w', encoding='utf-8') as f:
                json.dump(progress, f, ensure_ascii=False, indent=2)
        except Exception as e:
            print(f"進捗保存エラー: {e}")
    
    def _retry_request(self, url: str, params: Dict, max_retries: int = 5) -> requests.Response:
        """指数バックオフでHTTPリクエストをリトライ"""
        for attempt in range(max_retries):
            try:
                response = requests.get(url, params=params, timeout=30)
                response.raise_for_status()
                return response
            except requests.exceptions.RequestException as e:
                if attempt == max_retries - 1:
                    raise e
                
                # 指数バックオフ（1秒、2秒、4秒、8秒、16秒）+ ランダムジッター
                wait_time = (2 ** attempt) + random.uniform(0, 1)
                print(f"リクエスト失敗 (試行 {attempt + 1}/{max_retries}): {e}")
                print(f"{wait_time:.1f}秒待機してリトライします...")
                time.sleep(wait_time)
        
    def get_genre_name(self, genre_id: str) -> str:
        """
        ジャンルIDからジャンル名を取得（キャッシュ付き）
        
        Args:
            genre_id: 楽天のジャンルID
            
        Returns:
            ジャンル名（取得できない場合は空文字）
        """
        if not genre_id:
            return ""
            
        # キャッシュに存在する場合は即座に返す
        if genre_id in self._genre_cache:
            return self._genre_cache[genre_id]
        
        try:
            params = {
                'applicationId': self.app_id,
                'genreId': genre_id,
                'format': 'json'
            }
            
            response = requests.get(self.genre_api_url, params=params)
            response.raise_for_status()
            
            data = response.json()
            
            # エラーチェック
            if 'error' in data:
                print(f"ジャンルAPI エラー (ID: {genre_id}): {data['error']}")
                self._genre_cache[genre_id] = ""
                return ""
            
            # ジャンル情報を取得
            if 'current' in data and 'genreName' in data['current']:
                genre_name = data['current']['genreName']
                self._genre_cache[genre_id] = genre_name
                print(f"ジャンル名取得: {genre_id} → {genre_name}")
                return genre_name
            else:
                self._genre_cache[genre_id] = ""
                return ""
                
        except Exception as e:
            print(f"ジャンル名取得エラー (ID: {genre_id}): {e}")
            self._genre_cache[genre_id] = ""
            return ""
        
    def search_products(self, keyword: str, max_items: int = 5000, resume: bool = True) -> List[Dict[str, Any]]:
        """
        楽天市場で商品を検索（リトライ・再開機能付き）
        
        Args:
            keyword: 検索キーワード
            max_items: 最大取得件数
            resume: 前回の続きから再開するか
        
        Returns:
            商品データのリスト
        """
        all_products = []
        page = 1
        items_per_page = 30  # 楽天APIの最大値
        
        # 前回の進捗を確認
        if resume:
            progress = self._load_progress()
            if progress and progress.get('keyword') == keyword:
                page = progress.get('page', 1)
                print(f"前回の続きから再開: ページ {page} から開始")
                # 既存データファイルがあれば読み込み
                existing_files = [f for f in os.listdir(os.path.join(os.path.dirname(__file__), 'data')) 
                                if f.startswith('rakuten_uchiwai_products_') and f.endswith('.json')]
                if existing_files:
                    latest_file = sorted(existing_files)[-1]
                    try:
                        with open(os.path.join(os.path.dirname(__file__), 'data', latest_file), 'r', encoding='utf-8') as f:
                            all_products = json.load(f)
                        print(f"既存データ {len(all_products)} 件を読み込み")
                    except Exception as e:
                        print(f"既存データ読み込みエラー: {e}")
                        all_products = []
        
        print(f"楽天市場で「{keyword}」の商品を検索開始... (目標: {max_items} 件)")
        
        while len(all_products) < max_items:
            # APIリクエストパラメータ
            params = {
                'applicationId': self.app_id,
                'keyword': keyword,
                'format': 'json',
                'hits': items_per_page,
                'page': page,
                'sort': 'standard',  # 標準順
                'availability': 1,   # 在庫あり
                'imageFlag': 1,      # 画像あり
            }
            
            if self.affiliate_id:
                params['affiliateId'] = self.affiliate_id
            
            try:
                print(f"ページ {page} を取得中...")
                response = self._retry_request(self.base_url, params)
                
                data = response.json()
                
                # エラーチェック
                if 'error' in data:
                    print(f"API エラー: {data['error']}")
                    break
                
                items = data.get('Items', [])
                if not items:
                    print("これ以上商品がありません。")
                    break
                
                # 商品データを変換
                for item_data in items:
                    if len(all_products) >= max_items:
                        break
                    
                    item = item_data['Item']
                    product = self._convert_item_format(item)
                    
                    # ジャンル名を取得して追加（API呼び出し数削減のため少し待機）
                    if 'genreId' in item:
                        product['genreName'] = self.get_genre_name(str(item['genreId']))
                        time.sleep(0.05)  # ジャンルAPI呼び出し間隔
                    else:
                        product['genreName'] = ""
                    
                    all_products.append(product)
                
                # 総件数の表示（初回のみ）
                if page == 1:
                    total_count = data.get('count', 0)
                    print(f"総件数: {total_count:,} 件")
                    if total_count > max_items:
                        print(f"上限 {max_items:,} 件まで取得します")
                
                print(f"現在 {len(all_products):,} 件取得済み")
                
                # 進捗を定期保存（10ページごと）
                if page % 10 == 0:
                    self._save_progress(page + 1, len(all_products), keyword)
                    print(f"進捗を保存しました (ページ {page}, {len(all_products)} 件)")
                
                page += 1
                
                # API制限を考慮して少し待機
                time.sleep(0.2)  # 少し長めに
                
            except requests.exceptions.RequestException as e:
                print(f"リクエストエラー: {e}")
                print("リトライ機能で既に処理済みです。")
                break
            except Exception as e:
                print(f"予期しないエラー: {e}")
                break
        
        print(f"取得完了: {len(all_products):,} 件")
        
        # 最終進捗を保存
        self._save_progress(page, len(all_products), keyword)
        
        # ジャンルキャッシュを保存
        self._save_genre_cache()
        
        return all_products
    
    def _convert_item_format(self, item: Dict) -> Dict[str, Any]:
        """
        楽天APIの商品データを内部形式に変換
        """
        import html
        
        # 商品IDの生成（楽天の商品コードを使用、コロンをアンダースコアに変換）
        item_code = item.get('itemCode', 'unknown').replace(':', '_')
        item_id = f"rakuten_{item_code}"
        
        # 価格の取得
        price = item.get('itemPrice', 0)
        
        # 画像URLの取得（複数ある場合は最初のもの）
        image_url = ""
        if 'mediumImageUrls' in item and item['mediumImageUrls']:
            image_url = item['mediumImageUrls'][0]['imageUrl']
        elif 'smallImageUrls' in item and item['smallImageUrls']:
            image_url = item['smallImageUrls'][0]['imageUrl']
        
        # レビュー情報
        review_count = item.get('reviewCount', 0)
        review_average = item.get('reviewAverage', 0)
        
        # 商品説明（HTMLタグを含む場合があるので注意）
        item_caption = html.unescape(item.get('itemCaption', ''))
        
        # 商品名のHTMLエンティティをデコード
        item_name = html.unescape(item.get('itemName', ''))
        shop_name = html.unescape(item.get('shopName', ''))
        catch_copy = html.unescape(item.get('catchcopy', ''))
        
        # アフィリエイトURL（設定されている場合）
        affiliate_url = item.get('affiliateUrl', item.get('itemUrl', ''))
        
        # ジャンルIDを保存（ジャンル名取得用）
        genre_id = item.get('genreId', '')
        
        return {
            'id': item_id,
            'title': item_name,
            'price': price,
            'image_url': image_url,
            'merchant': shop_name,
            'source': 'rakuten',
            'url': item.get('itemUrl', ''),
            'affiliate_url': affiliate_url,
            'occasion': 'unknown',  # 後で分類する
            'updated_at': int(datetime.now().timestamp()),
            # 追加情報
            'review_count': review_count,
            'review_average': review_average,
            'description': item_caption,
            'shop_code': item.get('shopCode', ''),
            'item_code': item.get('itemCode', ''),
            'catch_copy': catch_copy,
            'tags': item.get('tagIds', []),
            'genre_id': genre_id,
            # genreNameは後で追加される
        }
    
    def save_to_json(self, products: List[Dict], filename: str):
        """
        商品データをJSONファイルに保存
        """
        # データディレクトリを作成
        data_dir = os.path.join(os.path.dirname(__file__), 'data')
        os.makedirs(data_dir, exist_ok=True)
        
        filepath = os.path.join(data_dir, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(products, f, ensure_ascii=False, indent=2)
        
        print(f"データを保存しました: {filepath}")
        print(f"ファイルサイズ: {os.path.getsize(filepath) / 1024 / 1024:.2f} MB")

def main():
    # 設定ファイルから値を読み込み
    try:
        from config import RAKUTEN_APP_ID, RAKUTEN_AFFILIATE_ID, SEARCH_KEYWORD, MAX_ITEMS
        APP_ID = RAKUTEN_APP_ID
        AFFILIATE_ID = RAKUTEN_AFFILIATE_ID
        keyword = SEARCH_KEYWORD
        max_items = MAX_ITEMS
    except ImportError:
        print("エラー: config.pyファイルが見つかりません")
        return
    
    # APIキーの確認
    if APP_ID == "YOUR_APP_ID_HERE" or not APP_ID:
        print("エラー: 楽天アプリケーションIDを設定してください")
        print("config.pyの RAKUTEN_APP_ID を実際のIDに変更してください")
        return
    
    # 検索実行
    fetcher = RakutenProductFetcher(APP_ID, AFFILIATE_ID)
    products = fetcher.search_products(keyword, max_items=max_items, resume=True)
    
    if products:
        # ファイル名に日付を含める
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        filename = f'rakuten_uchiwai_products_{timestamp}.json'
        
        fetcher.save_to_json(products, filename)
        
        # 統計情報の表示
        print("\n=== 取得データ統計 ===")
        print(f"総商品数: {len(products):,} 件")
        
        if products:
            prices = [p['price'] for p in products if p['price'] > 0]
            if prices:
                print(f"価格帯: {min(prices):,}円 〜 {max(prices):,}円")
                print(f"平均価格: {sum(prices)/len(prices):,.0f}円")
            
            # レビュー統計
            reviewed_items = [p for p in products if p['review_count'] > 0]
            if reviewed_items:
                avg_rating = sum(p['review_average'] for p in reviewed_items) / len(reviewed_items)
                total_reviews = sum(p['review_count'] for p in reviewed_items)
                print(f"レビュー付き商品: {len(reviewed_items):,} 件")
                print(f"平均評価: {avg_rating:.2f}点")
                print(f"総レビュー数: {total_reviews:,} 件")
        
        # 次のステップの案内
        print("\n=== 次のステップ ===")
        print("1. データを確認してください")
        print("2. Meilisearchインデックスに登録する場合:")
        print("   python update_meilisearch_from_rakuten.py")
        
        # ジャンルキャッシュの統計
        if hasattr(fetcher, '_genre_cache'):
            print(f"\n=== ジャンル情報 ===")
            print(f"取得したジャンル数: {len(fetcher._genre_cache)} 種類")
            unique_genres = set(g for g in fetcher._genre_cache.values() if g)
            if unique_genres:
                print("取得ジャンル例:")
                for genre in sorted(list(unique_genres))[:10]:  # 最初の10個を表示
                    print(f"  - {genre}")
                if len(unique_genres) > 10:
                    print(f"  ... 他 {len(unique_genres) - 10} 種類")
    else:
        print("商品データを取得できませんでした。")

if __name__ == "__main__":
    main()