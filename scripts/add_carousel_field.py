import json

# JSONファイルを読み込む
with open('data/sources/others/manual_products.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 各商品にCarouselフィールドを追加
for i, item in enumerate(data):
    # 最初の6つの商品はCarousel=1、それ以外は0
    item['Carousel'] = 1 if i < 6 else 0

# JSONファイルに書き戻す
with open('data/sources/others/manual_products.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"✓ {len(data)}個の商品にCarouselフィールドを追加しました")
print(f"  - Carousel=1: 最初の6商品")
print(f"  - Carousel=0: 残りの{len(data)-6}商品")
