"""未知のgenre_idを検出してレポートするスクリプト

毎週の更新時に実行して、新しく出現したgenre_idを確認します。
未知のgenre_idはキーワードマッチで一時分類されますが、
後でAI分類してgenre_id_mappingsに追加することで精度向上できます。
"""
import json
import csv
from pathlib import Path
from collections import Counter

def detect_unknown_genres():
    """未知のgenre_idを検出"""
    print("=" * 60)
    print("未知genre_id検出ツール")
    print("=" * 60)
    
    # 統合商品データを読み込み
    products_file = Path('data') / 'cache' / 'products_unified.json'
    if not products_file.exists():
        print(f"❌ エラー: {products_file} が見つかりません")
        print("   先にauto_update_products.pyを実行してください")
        return
    
    with open(products_file, 'r', encoding='utf-8') as f:
        products = json.load(f)
    
    # 既知のgenre_idを読み込み
    mappings_file = Path('data') / 'cache' / 'genre_id_mappings.json'
    with open(mappings_file, 'r', encoding='utf-8') as f:
        known_mappings = json.load(f)
    
    # 楽天商品のみフィルタリング
    rakuten_products = [p for p in products if p.get('source') == 'rakuten']
    print(f"\n📊 データ概要:")
    print(f"   全商品数: {len(products):,}件")
    print(f"   楽天商品: {len(rakuten_products):,}件")
    print(f"   既知genre_id: {len(known_mappings):,}件")
    
    # genre_idを集計
    genre_stats = Counter()
    unknown_genres = {}
    
    for product in rakuten_products:
        genre_id = str(product.get('genreId', ''))
        genre_name = product.get('genreName', '')
        
        if not genre_id:
            continue
        
        genre_stats[genre_id] += 1
        
        # 未知のgenre_idを記録
        if genre_id not in known_mappings:
            if genre_id not in unknown_genres:
                unknown_genres[genre_id] = {
                    'genre_name': genre_name,
                    'count': 0
                }
            unknown_genres[genre_id]['count'] += 1
    
    print(f"\n🔍 検出結果:")
    print(f"   商品に使用されているgenre_id: {len(genre_stats):,}件")
    print(f"   未知のgenre_id: {len(unknown_genres):,}件")
    
    if not unknown_genres:
        print("\n✅ すべてのgenre_idが分類済みです！")
        return
    
    # 未知genre_idをCSV出力
    output_file = Path('data') / 'cache' / 'unknown_genre_ids.csv'
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['genre_id', 'genre_name', 'count', 'genre_group', 'genre_subgroup'])
        
        # 出現回数の多い順にソート
        sorted_unknowns = sorted(
            unknown_genres.items(),
            key=lambda x: x[1]['count'],
            reverse=True
        )
        
        for genre_id, info in sorted_unknowns:
            writer.writerow([
                genre_id,
                info['genre_name'],
                info['count'],
                '',  # genre_group（AI分類で埋める）
                ''   # genre_subgroup（AI分類で埋める）
            ])
    
    print(f"\n📄 未知genre_idリスト出力: {output_file}")
    print(f"\n次のステップ:")
    print(f"1. {output_file} をChatGPTに渡してAI分類")
    print(f"2. 分類結果を上書き保存")
    print(f"3. convert_csv_to_json.py でJSON化")
    print(f"4. integrate_mappings.py で統合")
    print(f"5. 再インデックス実行")
    
    # TOP10を表示
    print(f"\n📊 未知genre_id TOP10:")
    for i, (genre_id, info) in enumerate(sorted_unknowns[:10], 1):
        print(f"   {i:2d}. {genre_id:6s} - {info['genre_name']:30s} ({info['count']:3d}件)")

if __name__ == '__main__':
    detect_unknown_genres()
