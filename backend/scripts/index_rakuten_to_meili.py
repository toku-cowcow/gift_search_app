#!/usr/bin/env python3
"""
楽天商品JSONをMeilisearchに投入するスクリプト
"""
import json
import html
import re
from datetime import datetime
from typing import Dict, List, Any
import argparse
import requests
import os

class RakutenToMeilisearchIndexer:
    def __init__(self, meili_url: str = "http://localhost:7700", master_key: str = "masterKey"):
        self.meili_url = meili_url
        self.master_key = master_key
        self.headers = {
            "Authorization": f"Bearer {master_key}",
            "Content-Type": "application/json"
        }
    
    def setup_index_settings(self, index_name: str):
        """Meilisearchのインデックス設定を適用"""
        settings = {
            "filterableAttributes": ["occasion", "source", "price", "review_count", "review_average"],
            "sortableAttributes": ["price", "updated_at", "review_count", "review_average"],
            "searchableAttributes": ["title", "merchant", "description"]
        }
        
        response = requests.patch(
            f"{self.meili_url}/indexes/{index_name}/settings",
            headers=self.headers,
            json=settings
        )
        
        if response.status_code == 202:
            print(f"✅ インデックス設定を適用しました: {index_name}")
            return response.json()
        else:
            print(f"❌ 設定適用に失敗: {response.status_code} - {response.text}")
            return None
    
    def normalize_rakuten_item(self, item: Dict) -> Dict[str, Any]:
        """楽天商品データを内部スキーマに正規化"""
        # IDの生成（既存のIDがある場合はそれを使用、コロンをアンダースコアに変換）
        if 'id' in item and item['id']:
            item_id = item['id'].replace(':', '_')
        else:
            item_code = item.get('itemCode', 'unknown').replace(':', '_')
            item_id = f"rakuten_{item_code}"
        
        # タイトルと説明のHTMLエスケープ解除
        title = html.unescape(item.get('title', item.get('itemName', '')))
        description = html.unescape(item.get('description', item.get('itemCaption', '')))
        merchant = html.unescape(item.get('merchant', item.get('shopName', '')))
        
        # 画像URL取得
        image_url = item.get('image_url', '')
        if not image_url:
            image_urls = item.get('mediumImageUrls', [])
            image_url = image_urls[0].get('imageUrl', '') if image_urls else ''
        
        # アフィリエイトURL（既存か、なければitemUrl）
        affiliate_url = item.get('affiliate_url', item.get('affiliateUrl', item.get('itemUrl', '')))
        
        # 価格（数値変換）
        price = int(item.get('price', item.get('itemPrice', 0)))
        
        # occasion判定（簡易ヒューリスティック）
        occasion = self._determine_occasion(title, description)
        
        # 現在時刻
        updated_at = datetime.now().isoformat()
        
        # レビューデータの取得
        review_count = int(item.get('review_count', 0))
        review_average = float(item.get('review_average', 0.0))
        
        return {
            "id": item_id,
            "title": title,
            "price": price,
            "image_url": image_url,
            "merchant": merchant,
            "affiliate_url": affiliate_url,
            "updated_at": updated_at,
            "source": "Rakuten",
            "occasion": occasion,
            "description": description,
            "review_count": review_count,
            "review_average": review_average
        }
    
    def _determine_occasion(self, title: str, description: str) -> str:
        """簡易ヒューリスティックでoccasionを判定"""
        text = f"{title} {description}".lower()
        
        # 香典返し・法要関連
        if re.search(r'香典返し|法要|仏事|お供え|弔事|四十九日|一周忌|三回忌', text):
            return "funeral_return"
        
        # 結婚関連
        if re.search(r'結婚|ブライダル|ウェディング|結婚祝い|結婚内祝い', text):
            return "wedding_return"
        
        # 出産関連
        if re.search(r'出産|ベビー|命名|出産祝い|出産内祝い|赤ちゃん', text):
            return "baby_return"
        
        # 新築・引越関連
        if re.search(r'新築|引越|引っ越し|新居|新築祝い', text):
            return "new_home"
        
        # 快気・お見舞い関連
        if re.search(r'快気|お見舞い|回復|快気祝い|快気内祝い', text):
            return "recovery"
        
        # どれにも該当しない場合は空文字
        return ""
    
    def index_products(self, json_file_path: str, index_name: str, chunk_size: int = 1000):
        """楽天商品JSONをMeilisearchに投入"""
        print(f"📂 JSONファイルを読み込み中: {json_file_path}")
        
        with open(json_file_path, 'r', encoding='utf-8') as f:
            rakuten_products = json.load(f)
        
        print(f"📊 {len(rakuten_products)} 件の商品を処理します")
        
        # 正規化処理
        normalized_products = []
        for item in rakuten_products:
            try:
                normalized_item = self.normalize_rakuten_item(item)
                normalized_products.append(normalized_item)
            except Exception as e:
                print(f"⚠️ 商品処理エラー: {item.get('itemCode', 'unknown')} - {e}")
                continue
        
        print(f"✅ {len(normalized_products)} 件の商品を正規化しました")
        
        # チャンクに分割して投入
        total_indexed = 0
        for i in range(0, len(normalized_products), chunk_size):
            chunk = normalized_products[i:i + chunk_size]
            
            response = requests.post(
                f"{self.meili_url}/indexes/{index_name}/documents",
                headers=self.headers,
                json=chunk
            )
            
            if response.status_code == 202:
                total_indexed += len(chunk)
                print(f"📤 {len(chunk)} 件投入完了 (累計: {total_indexed}/{len(normalized_products)})")
            else:
                print(f"❌ 投入エラー: {response.status_code} - {response.text}")
                break
        
        print(f"🎉 インデックス完了: {total_indexed} 件")
        return total_indexed

def main():
    parser = argparse.ArgumentParser(description="楽天商品JSONをMeilisearchに投入")
    parser.add_argument("--json", required=True, help="楽天商品JSONファイルパス")
    parser.add_argument("--index", default="items", help="Meilisearchインデックス名")
    parser.add_argument("--chunk", type=int, default=1000, help="投入チャンクサイズ")
    parser.add_argument("--meili-url", default="http://localhost:7700", help="MeilisearchサーバーURL")
    parser.add_argument("--master-key", default="masterKey", help="Meilisearchマスターキー")
    
    args = parser.parse_args()
    
    # 環境変数からの取得も可能
    meili_url = os.getenv("MEILI_URL", args.meili_url)
    master_key = os.getenv("MEILI_MASTER_KEY", args.master_key)
    
    indexer = RakutenToMeilisearchIndexer(meili_url, master_key)
    
    # インデックス設定を適用
    print("🔧 インデックス設定を適用中...")
    indexer.setup_index_settings(args.index)
    
    # 商品データを投入
    print("📥 商品データを投入中...")
    indexer.index_products(args.json, args.index, args.chunk)

if __name__ == "__main__":
    main()

# 実行手順サンプル（ユーザーが自分の環境で実行する想定）
"""
# 基本実行
python backend/scripts/index_rakuten_to_meili.py \
  --json frontend/public/data/rakuten_uchiwai_products_20251030_233859.json \
  --index items \
  --chunk 1000

# 環境変数使用
export MEILI_URL=http://localhost:7700
export MEILI_MASTER_KEY=your_master_key
python backend/scripts/index_rakuten_to_meili.py \
  --json frontend/public/data/rakuten_uchiwai_products_20251030_233859.json \
  --index items
"""