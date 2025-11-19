"""
商品の複数カテゴリ対応と再インデックススクリプト

機能:
1. 基本occasionに複数カテゴリ（occasions配列）を追加
2. 商品タイトルからgenre_groupを推定
3. Meilisearchに再インデックス

楽天API取得時に基本occasionは設定済み:
- wedding_celebration: 結婚祝い
- birth_celebration: 出産祝い
- new_home_celebration: 新築祝い
- mothers_day: 母の日
- fathers_day: 父の日
- respect_for_aged_day: 敬老の日

追加処理:
- occasions配列: 商品タイトルから複数用途を判定
- genre_group: 商品タイトルからジャンル分類
"""

import os
import sys
import json
import time
from typing import List, Dict, Any, Set
from pathlib import Path

# パスを追加してbackendモジュールを使用可能にする
script_dir = os.path.dirname(os.path.abspath(__file__))
backend_dir = os.path.join(os.path.dirname(script_dir), 'backend')
sys.path.append(backend_dir)

from app.services.search_service_fixed import MeilisearchService


class MultiCategoryProcessor:
    """複数カテゴリ対応プロセッサー"""
    
    def __init__(self):
        # 複数カテゴリ推定キーワード
        self.occasion_keywords = {
            'wedding_celebration': [
                '結婚', 'ウェディング', 'ブライダル', '新郎', '新婦', '花嫁', '花婿',
                'マリッジ', '結婚式', '披露宴', '挙式', '結婚祝い', 'ウエディング'
            ],
            'birth_celebration': [
                '出産', '赤ちゃん', 'ベビー', '新生児', '誕生', 'バース',
                'マタニティ', '妊娠', '出産祝い', 'ベイビー', '子育て', '育児'
            ],
            'new_home_celebration': [
                '新築', '新居', '引越し', '引っ越し', 'マイホーム', '新築祝い',
                '家具', 'インテリア', '住宅', '新築完成', 'お引越し', '転居'
            ],
            'mothers_day': [
                '母の日', 'お母さん', 'ママ', '母親', 'マザー', 'mother',
                '感謝', '母への', 'お疲れさま', '母の', 'カーネーション'
            ],
            'fathers_day': [
                '父の日', 'お父さん', 'パパ', '父親', 'ファザー', 'father',
                '父への', 'お疲れ様', 'パパさん', '父の', 'ネクタイ'
            ],
            'respect_for_aged_day': [
                '敬老の日', 'おじいちゃん', 'おばあちゃん', '祖父', '祖母',
                '長寿', '高齢者', 'シルバー', '敬老', 'おじいさん', 'おばあさん'
            ]
        }
        
        # ジャンル推定キーワード
        self.genre_keywords = {
            'food': [
                '食品', 'スイーツ', 'お菓子', 'グルメ', '和菓子', '洋菓子',
                'ケーキ', 'チョコレート', '米', 'パン', '肉', '魚', '果物',
                '野菜', '調味料', '醤油', '味噌', '蜂蜜', 'ハム', 'ソーセージ',
                '佃煮', '漬物', '乾物', '海苔', '昆布', '鰹節', 'だし',
                'カステラ', 'バウムクーヘン', 'クッキー', 'せんべい', '饅頭'
            ],
            'drink': [
                '飲料', 'ドリンク', 'ジュース', 'コーヒー', '紅茶', '緑茶',
                'お茶', '日本酒', 'ワイン', 'ビール', '焼酎', '泡盛', '梅酒',
                'ウイスキー', 'ブランデー', '酒', 'アルコール', '清酒',
                '水', 'ミネラルウォーター', 'ソフトドリンク'
            ],
            'home': [
                'タオル', '生活雑貨', '日用品', '食器', '皿', 'カップ', 'マグ',
                'グラス', 'コップ', '箸', 'スプーン', 'フォーク', 'ナイフ',
                '鍋', 'フライパン', '調理器具', 'キッチン', '洗剤', '石鹸',
                'シャンプー', 'バス', '寝具', 'シーツ', '枕', 'クッション',
                '収納', 'ケース', 'ボックス', '容器', 'バッグ', '財布'
            ],
            'catalog': [
                'カタログ', 'ギフトカタログ', 'チョイス', 'セレクト',
                'カタログギフト', '選べる', 'チケット', 'ギフト券',
                '商品券', '体験', 'エステ', 'リラクゼーション'
            ],
            'craft': [
                '工芸', '伝統', '手作り', '職人', '陶器', '磁器', '漆器',
                '木工', '竹', '和紙', '染物', '織物', '刺繍', '金属',
                '銀', '金', '伝統工芸', '民芸', '工芸品', '作家'
            ],
            'flower': [
                '花', 'フラワー', '植物', 'プランツ', '観葉植物', '鉢植え',
                'ガーデニング', '園芸', 'ブーケ', 'アレンジメント',
                'プリザーブド', 'ドライフラワー', '胡蝶蘭', 'バラ'
            ]
        }
    
    def detect_additional_occasions(self, title: str, description: str = "", current_occasion: str = "") -> Set[str]:
        """商品タイトルと説明から追加の用途を推定"""
        text = (title + " " + description).lower()
        occasions = set()
        
        # 現在のoccasionは必ず含める
        if current_occasion:
            occasions.add(current_occasion)
        
        # 追加の用途を検索
        for occasion, keywords in self.occasion_keywords.items():
            for keyword in keywords:
                if keyword.lower() in text:
                    occasions.add(occasion)
                    break
        
        return occasions
    
    def classify_genre(self, title: str, description: str = "") -> str:
        """商品タイトルと説明からジャンルを推定"""
        text = (title + " " + description).lower()
        genre_scores = {}
        
        for genre, keywords in self.genre_keywords.items():
            score = 0
            for keyword in keywords:
                if keyword.lower() in text:
                    # より具体的なキーワードほど高得点
                    score += len(keyword)
            genre_scores[genre] = score
        
        # 最高得点のジャンルを返す
        if genre_scores and max(genre_scores.values()) > 0:
            return max(genre_scores.items(), key=lambda x: x[1])[0]
        
        return "home"  # デフォルトは生活雑貨・日用品
    
    def process_products(self, source_file: str) -> List[Dict[str, Any]]:
        """商品データを処理"""
        print(f"📄 データファイルを読み込み中: {source_file}")
        
        with open(source_file, 'r', encoding='utf-8') as f:
            products = json.load(f)
        
        print(f"📊 処理対象商品数: {len(products)}件")
        
        processed_products = []
        
        for i, product in enumerate(products):
            # 複数カテゴリを推定
            current_occasion = product.get('occasion', '')
            description = product.get('description', '')
            
            occasions = self.detect_additional_occasions(
                product['title'],
                description,
                current_occasion
            )
            
            # ジャンルを推定
            genre_group = self.classify_genre(product['title'], description)
            
            # 処理済み商品データを作成
            processed_product = product.copy()
            processed_product['occasions'] = list(occasions)
            processed_product['genre_group'] = genre_group
            
            # occasions配列にoccasionが含まれていない場合は追加
            if current_occasion and current_occasion not in processed_product['occasions']:
                processed_product['occasions'].append(current_occasion)
            
            processed_products.append(processed_product)
            
            # 進捗表示
            if (i + 1) % 500 == 0:
                print(f"  処理済み: {i + 1:,}/{len(products):,}件")
        
        print("✅ 商品データ処理完了")
        return processed_products
    
    def reindex_to_meilisearch(self, products: List[Dict[str, Any]], batch_size: int = 100):
        """Meilisearchに再インデックス"""
        print("📤 Meilisearchに再インデックス中...")
        
        service = MeilisearchService()
        
        # 既存インデックスをクリア
        print("🗑️ 既存データをクリア中...")
        service.index.delete_all_documents()
        time.sleep(2)  # クリア完了を待機
        
        # バッチでインデックス
        total_batches = (len(products) + batch_size - 1) // batch_size
        
        for i in range(0, len(products), batch_size):
            batch = products[i:i + batch_size]
            batch_num = (i // batch_size) + 1
            
            print(f"  バッチ {batch_num}/{total_batches}: {len(batch)}件をインデックス中...")
            
            # Meilisearchに送信
            task = service.index.add_documents(batch)
            
            # バッチ間で少し待機
            time.sleep(0.1)
        
        print("✅ 再インデックス完了")
        
        # 統計を表示
        self.print_reindex_stats(products)
    
    def print_reindex_stats(self, products: List[Dict[str, Any]]):
        """再インデックス統計を表示"""
        print("\n=== 📊 再インデックス統計 ===")
        
        # 用途別統計
        occasion_stats = {}
        for product in products:
            primary_occasion = product.get('occasion', 'unknown')
            occasion_stats[primary_occasion] = occasion_stats.get(primary_occasion, 0) + 1
        
        print("\n🎯 基本用途別商品数:")
        occasion_names = {
            'wedding_celebration': '結婚祝い',
            'birth_celebration': '出産祝い',
            'new_home_celebration': '新築祝い',
            'mothers_day': '母の日',
            'fathers_day': '父の日',
            'respect_for_aged_day': '敬老の日'
        }
        
        for occasion, count in occasion_stats.items():
            name = occasion_names.get(occasion, occasion)
            print(f"  {name}: {count}件")
        
        # ジャンル別統計
        genre_stats = {}
        for product in products:
            genre = product.get('genre_group', 'unknown')
            genre_stats[genre] = genre_stats.get(genre, 0) + 1
        
        print("\n📦 ジャンル別商品数:")
        genre_names = {
            'food': '食品・スイーツ',
            'drink': '飲料',
            'home': '生活雑貨・日用品',
            'catalog': 'カタログギフト等',
            'craft': '工芸・伝統雑貨',
            'flower': '花・植物'
        }
        
        for genre, count in genre_stats.items():
            name = genre_names.get(genre, genre)
            print(f"  {name}: {count}件")
        
        # 複数カテゴリ統計
        multi_category_count = 0
        for product in products:
            occasions = product.get('occasions', [])
            if len(occasions) > 1:
                multi_category_count += 1
        
        print(f"\n🔄 複数カテゴリ対応商品: {multi_category_count}件")
        
        print(f"\n📈 総商品数: {len(products)}件")


def main():
    """メイン実行"""
    print("🔄 HAREGift 複数カテゴリ対応 & 再インデックス")
    print("=" * 60)
    
    # 最新のデータファイルを探す
    script_dir = os.path.dirname(os.path.abspath(__file__))
    rakuten_dir = os.path.join(script_dir, 'data', 'sources', 'rakuten')
    
    if not os.path.exists(rakuten_dir):
        print(f"❌ 楽天データディレクトリが見つかりません: {rakuten_dir}")
        return
    
    # 最新のJSONファイルを取得（HAREGiftデータを優先）
    json_files = [f for f in os.listdir(rakuten_dir) if f.endswith('.json')]
    if not json_files:
        print("❌ 楽天データファイルが見つかりません")
        return
    
    # HAREGiftデータを優先して選択
    haregift_files = [f for f in json_files if 'haregift' in f]
    if haregift_files:
        latest_file = sorted(haregift_files)[-1]
    else:
        latest_file = sorted(json_files)[-1]
    source_path = os.path.join(rakuten_dir, latest_file)
    
    print(f"📂 データファイル: {latest_file}")
    
    # 処理開始確認
    print(f"\n以下の処理を実行します:")
    print(f"1. 📄 商品データ読み込み")
    print(f"2. 🔄 複数カテゴリ対応処理")
    print(f"3. 🏷️ ジャンル分類")
    print(f"4. 📤 Meilisearch再インデックス")
    
    response = input("\n続行しますか？ (y/n): ")
    if response.lower() != 'y':
        print("キャンセルしました")
        return
    
    # 処理実行
    processor = MultiCategoryProcessor()
    
    try:
        # 1. 商品データ処理
        processed_products = processor.process_products(source_path)
        
        # 2. Meilisearch再インデックス
        processor.reindex_to_meilisearch(processed_products)
        
        print("\n🎉 全ての処理が完了しました！")
        
    except Exception as e:
        print(f"\n💥 エラーが発生しました: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()