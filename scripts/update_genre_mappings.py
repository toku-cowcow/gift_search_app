"""
genre_id_list_mapped.csv → genre_mapping_rules.json 自動更新スクリプト

このスクリプト1つで以下を実行:
1. genre_id_list_mapped.csvを読み込み
2. genre_id_mappings.jsonを生成
3. genre_mapping_rules.jsonを更新
"""
import json
import csv
from pathlib import Path

print("=" * 60)
print("ジャンルマッピング自動更新ツール")
print("=" * 60)

# パス設定
script_dir = Path(__file__).parent
csv_file = script_dir / 'data' / 'cache' / 'genre_id_list_mapped.csv'
mappings_file = script_dir / 'data' / 'cache' / 'genre_id_mappings.json'
rules_file = script_dir / 'data' / 'cache' / 'genre_mapping_rules.json'

# 1. CSVを読み込み
print(f"\n[1/3] CSVファイル読み込み: {csv_file.name}")
try:
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
except Exception as e:
    print(f"❌ エラー: {e}")
    exit(1)

print(f"✅ {len(rows)}件のgenre_idを読み込みました")

# 2. genre_id_mappings.jsonを生成
print(f"\n[2/3] genre_id_mappings.json生成中...")
genre_id_mappings = {}
stats = {'total': len(rows), 'mapped': 0, 'unmapped': 0, 'groups': {}}

for row in rows:
    genre_id = row['genre_id'].strip()
    genre_group = row.get('genre_group', '').strip()
    genre_subgroup = row.get('genre_subgroup', '').strip()
    
    # 空欄の場合はスキップ（エラーにしない）
    if not genre_group:
        stats['unmapped'] += 1
        continue
    
    genre_id_mappings[genre_id] = {
        "group": genre_group,
        "sub": genre_subgroup if genre_subgroup else ""
    }
    
    stats['mapped'] += 1
    stats['groups'][genre_group] = stats['groups'].get(genre_group, 0) + 1

# JSONファイルに保存
with open(mappings_file, 'w', encoding='utf-8') as f:
    json.dump(genre_id_mappings, f, ensure_ascii=False, indent=2)

print(f"✅ genre_id_mappings.json保存完了")
print(f"   分類済み: {stats['mapped']}件 ({stats['mapped']/stats['total']*100:.1f}%)")

# 3. genre_mapping_rules.jsonを更新
print(f"\n[3/3] genre_mapping_rules.json更新中...")

# 既存ファイルを読み込み（存在しない場合は新規作成）
try:
    with open(rules_file, 'r', encoding='utf-8') as f:
        rules = json.load(f)
    print(f"✅ 既存ファイル読み込み")
except FileNotFoundError:
    print(f"⚠️  既存ファイルなし、新規作成します")
    rules = {}

# genre_id_mappingsを更新
rules['genre_id_mappings'] = genre_id_mappings

# 保存
with open(rules_file, 'w', encoding='utf-8') as f:
    json.dump(rules, f, ensure_ascii=False, indent=2)

print(f"✅ genre_mapping_rules.json更新完了")
print(f"   genre_id_mappings: {len(rules['genre_id_mappings'])}件")

# 統計表示
print(f"\n📊 大分類ごとの件数:")
for group, count in sorted(stats['groups'].items(), key=lambda x: x[1], reverse=True):
    print(f"   {group:10s}: {count:>4d}件")

print(f"\n✅ 完了！次のステップ:")
print(f"   データを再インデックスしてください")
print(f"   → cd scripts")
print(f"   → python index_meili_products.py --source rakuten --file data/sources/merged/merged_products_20251204_214314.json")
