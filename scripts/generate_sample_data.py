import json
import random
from datetime import datetime, timedelta

# 商品カテゴリと商品名のテンプレート
PRODUCT_TEMPLATES = {
    "towel": [
        "今治タオル プレミアムギフトセット",
        "今治タオル 木箱入りギフトセット",
        "オーガニックコットンタオルセット",
        "高級ホテルタオル ギフトボックス",
        "今治認定 純白タオルギフト",
        "バス・フェイスタオル 3点セット",
        "今治タオル 桜染めギフトセット",
        "ふわふわ高級タオル 化粧箱入り",
    ],
    "catalog": [
        "カタログギフト やすらぎ",
        "カタログギフト えらべるクラブ",
        "選べるカタログギフト 美味百選",
        "プレミアムカタログギフト 極",
        "和風カタログギフト 雅",
        "グルメカタログギフト 匠",
        "体験カタログギフト ソウ・エクスペリエンス",
        "温泉宿泊カタログギフト",
    ],
    "food": [
        "お米ギフトセット（2kg×3品種）",
        "和菓子詰合せ 和の心",
        "フルーツゼリー詰合せ",
        "有機調味料セット",
        "静岡産プレミアム緑茶ギフト",
        "プレミアムコーヒーギフト",
        "老舗醤油・味噌セット",
        "北海道産蜂蜜ギフトセット",
        "九州産焼酎飲み比べセット",
        "全国銘菓詰合せ",
        "高級海苔ギフトセット",
        "京都宇治抹茶スイーツセット",
        "讃岐うどんギフトセット",
        "信州そばギフトセット",
        "北海道ラーメン詰合せ",
        "全国ご当地カレーセット",
    ],
    "sweets": [
        "バウムクーヘンギフト（個包装）",
        "チョコレートアソートメント",
        "焼き菓子詰合せ 洋風",
        "マカロンギフトボックス",
        "フィナンシェ・マドレーヌセット",
        "高級チーズケーキギフト",
        "プリンアラモード詰合せ",
        "季節のフルーツタルトセット",
        "和洋折衷スイーツギフト",
        "老舗洋菓子店 特選ギフト",
    ],
    "soap": [
        "無添加石鹸プレミアムセット",
        "オーガニック石鹸ギフトボックス",
        "馬油石鹸・シャンプーセット",
        "アロマ石鹸ギフトセット",
        "炭石鹸・泥石鹸セット",
        "手作り石鹸工房セレクション",
        "薬用石鹸ギフトセット",
        "植物由来石鹸アソート",
    ],
    "drink": [
        "日本酒飲み比べセット（300ml×3本）",
        "ワインギフトセット（赤白2本）",
        "クラフトビール詰合せ（6本）",
        "ウイスキーミニボトルセット",
        "焼酎飲み比べギフト",
        "梅酒・果実酒セット",
        "ノンアルコールワインギフト",
        "高級ジュース詰合せ",
    ],
    "kitchen": [
        "キッチン用品ギフトセット",
        "調理器具プレミアムセット",
        "食器ギフトセット（和食器）",
        "カトラリーセット（ステンレス）",
        "保存容器・タッパーセット",
        "包丁・まな板セット（木曽檜）",
        "土鍋・すり鉢セット",
        "お弁当箱・水筒セット",
    ],
    "beauty": [
        "スキンケアギフトセット",
        "入浴剤・バスソルトセット",
        "アロマオイルギフトボックス",
        "ハンドクリーム・リップセット",
        "フェイスマスク詰合せ",
        "ボディケアギフトセット",
        "ネイルケアセット",
        "美容グッズアソートメント",
    ],
    "home": [
        "インテリア雑貨ギフトセット",
        "アロマキャンドル・ディフューザーセット",
        "観葉植物・鉢植えギフト",
        "クッション・ブランケットセット",
        "フォトフレーム・アルバムセット",
        "時計・置物ギフト",
        "収納ボックス・かごセット",
        "ルームフレグランスセット",
    ]
}

MERCHANTS = [
    "ギフトショップ 花結び",
    "今治タオル専門店",
    "カタログギフト フォレスト",
    "老舗米店 穂香",
    "ナチュラル石鹸工房",
    "老舗和菓子店 花月堂",
    "スペシャルティコーヒー豆専門店",
    "果樹園直売所",
    "オーガニックフード フォレスト",
    "静岡茶園直売所",
    "洋菓子工房 スイートドリーム",
    "ギフトカタログセンター",
    "北海道直送便",
    "京都老舗茶屋",
    "九州物産館",
    "信州そば処 山里",
    "讃岐うどん本舗",
    "全国銘菓セレクト",
    "高級食材専門店 匠",
    "和雑貨・贈り物館",
    "プレミアムギフト専門店",
    "老舗醸造元",
    "クラフト工房 手づくり",
    "美容・健康ギフト館",
    "インテリア雑貨 暮らしの店",
    "アロマ・癒しの専門店",
    "キッチン用品セレクトショップ",
    "日本酒・地酒専門店",
    "ワイン・洋酒セレクション",
    "チョコレート専門工房",
    "焼き菓子工房 麦の香り",
    "フルーツ農園直売所",
    "オーガニック専門店 自然派",
    "手作り石鹸工房 泡の森",
    "バス・アロマグッズ専門店"
]

OCCASIONS = ["funeral_return", "wedding_return", "baby_return"]
SOURCES = ["rakuten", "amazon", "yahoo"]

def generate_sample_data(count=500):
    """500件のサンプルデータを生成"""
    items = []
    base_timestamp = int(datetime(2024, 1, 1).timestamp())
    
    for i in range(1, count + 1):
        # カテゴリをランダム選択
        category = random.choice(list(PRODUCT_TEMPLATES.keys()))
        title = random.choice(PRODUCT_TEMPLATES[category])
        
        # 価格設定（カテゴリによって価格帯を調整）
        if category in ["catalog"]:
            price = random.randint(3000, 50000)
        elif category in ["drink"]:
            price = random.randint(2000, 15000)
        elif category in ["food"]:
            price = random.randint(1500, 12000)
        elif category in ["sweets"]:
            price = random.randint(800, 8000)
        elif category in ["towel", "soap", "beauty"]:
            price = random.randint(1000, 8000)
        elif category in ["kitchen", "home"]:
            price = random.randint(2000, 20000)
        else:
            price = random.randint(1000, 10000)
        
        # 価格を100円単位に調整
        price = (price // 100) * 100
        
        item = {
            "id": f"item_{i:03d}",
            "title": title,
            "price": price,
            "image_url": f"https://picsum.photos/400/400?random={i}",
            "merchant": random.choice(MERCHANTS),
            "source": random.choice(SOURCES),
            "url": f"https://example.com/products/{category}_item_{i}",
            "affiliate_url": f"https://af.rakuten.co.jp/dummy/{category}_item_{i}",
            "occasion": random.choice(OCCASIONS),
            "updated_at": base_timestamp + random.randint(0, 365 * 24 * 3600)  # 1年以内のランダムな日時
        }
        
        items.append(item)
    
    return items

def main():
    """メイン処理"""
    print("500件のサンプルデータを生成中...")
    
    # データ生成
    sample_data = generate_sample_data(500)
    
    # JSONファイルに保存
    output_file = "data/sample_items.json"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(sample_data, f, ensure_ascii=False, indent=2)
    
    print(f"✓ {len(sample_data)}件のサンプルデータを {output_file} に保存しました")
    
    # 統計情報を表示
    occasions_count = {}
    sources_count = {}
    price_ranges = {"0-2000": 0, "2000-5000": 0, "5000-10000": 0, "10000+": 0}
    
    for item in sample_data:
        # 用途別カウント
        occasion = item["occasion"]
        occasions_count[occasion] = occasions_count.get(occasion, 0) + 1
        
        # ソース別カウント
        source = item["source"]
        sources_count[source] = sources_count.get(source, 0) + 1
        
        # 価格帯別カウント
        price = item["price"]
        if price < 2000:
            price_ranges["0-2000"] += 1
        elif price < 5000:
            price_ranges["2000-5000"] += 1
        elif price < 10000:
            price_ranges["5000-10000"] += 1
        else:
            price_ranges["10000+"] += 1
    
    print("\n=== 生成データの統計 ===")
    print("用途別:")
    for occasion, count in occasions_count.items():
        print(f"  {occasion}: {count}件")
    
    print("\nソース別:")
    for source, count in sources_count.items():
        print(f"  {source}: {count}件")
    
    print("\n価格帯別:")
    for range_name, count in price_ranges.items():
        print(f"  {range_name}円: {count}件")
    
    print(f"\n平均価格: {sum(item['price'] for item in sample_data) / len(sample_data):.0f}円")

if __name__ == "__main__":
    main()