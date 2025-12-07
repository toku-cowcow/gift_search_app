# 手動商品データ入力フォーマット

## 📋 ファイル構造

### ファイルパス
```
scripts/data/sources/others/manual_products_YYYYMMDD.json
```

### JSONフォーマット
```json
[
  {
    "id": "商品の一意識別子",
    "title": "商品タイトル",
    "price": 価格（数値）,
    "image_url": "商品画像URL",
    "url": "商品ページURL",
    "affiliate_url": "アフィリエイトリンクURL",
    "merchant": "販売店名",
    "source": "manual",
    "occasion": "主要な用途",
    "occasions": ["用途1", "用途2"],
    "review_count": レビュー数,
    "review_average": 評価平均,
    "genre_name": "ジャンル名",
    "genre_group": "ジャンルグループ",
    "catch_copy": "キャッチコピー",
    "description": "詳細説明",
    "updated_at": UNIXタイムスタンプ
  }
]
```

---

## 📝 フィールド詳細説明

### 必須フィールド

| フィールド | 型 | 説明 | 例 |
|-----------|---|------|---|
| **id** | string | 一意の商品ID。`manual_`で始める | `"manual_001"` |
| **title** | string | 商品タイトル（検索対象） | `"高級タオルギフトセット"` |
| **price** | number | 商品価格（税込） | `3980` |
| **image_url** | string | 商品画像URL（HTTPS推奨） | `"https://example.com/img.jpg"` |
| **url** | string | 商品ページURL | `"https://example.com/product"` |
| **affiliate_url** | string | アフィリエイトリンク | `"https://af.example.com/link"` |
| **merchant** | string | 販売店名 | `"ABC Store"` |
| **source** | string | データソース（固定値） | `"manual"` |
| **occasion** | string | 主要な用途（下記6つから選択） | `"wedding_celebration"` |
| **occasions** | array | 対応する用途の配列（複数可） | `["wedding_celebration", "birth_celebration"]` |
| **genre_group** | string | ジャンルグループ（下記5つから選択） | `"drink"` |
| **genre_subgroup** | string | ジャンル中分類（genre_groupに応じて選択、後述） | `"alcohol"` |
| **description** | string | 商品説明文（**AIレコメンド機能で使用**） | `"フランス産ワイン2本セット"` |
| **updated_at** | number | 更新日時（UNIXタイムスタンプ） | `1732406400` |

### オプショナルフィールド

| フィールド | 型 | 説明 | 例 | 空欄時の扱い |
|-----------|---|------|---|------------|
| **review_count** | number | レビュー数（**ソート機能で使用**） | `100` | 省略可（フィールド削除推奨）※ |
| **review_average** | number | 評価平均1.0-5.0（**ソート機能で使用**） | `4.5` | 省略可（フィールド削除推奨）※ |
| **genre_name** | string | 詳細ジャンル名（表示のみ） | `"タオル・バスグッズ"` | 省略可（空文字`""`でも可） |
| **catch_copy** | string | キャッチコピー（表示のみ） | `"最高品質のタオルセット"` | 省略可（空文字`""`でも可） |

※ **description（必須）について**
- AIが商品の特徴・適したシーンを理解するために使用します
- 最低でも1-2文は記載してください（例: 「フランス産の厳選ワイン2本セット。結婚祝いに最適な高級感のあるギフトボックス入り。」）
- 空文字`""`やフィールド削除は避けてください

※ **review_count、review_averageについて**
- ユーザーが「レビュー評価順」「レビュー件数順」でソートする際に使用します
- フィールドを削除すると、商品カードに「☆☆☆☆☆ (0)」と表示されます
- 楽天商品との統合時も問題なし（楽天商品はレビュー情報あり、手動商品はなし）
- フロントエンドで自動的に処理されるため、安心して削除できます

### ⚠️ 重要な注意点

1. **occasion vs occasions**
   - `occasion`: 主要な用途を**1つだけ**指定（検索フィルタの基準）
   - `occasions`: 複数の用途がある場合は**配列で指定**
   - **推奨**: 両方設定する（`occasion`は`occasions`の1つ目と同じ値）

2. **genre_group は1つのみ**
   - 商品は**1つのジャンルグループにのみ**分類
   - 複数に該当する場合は**最も適切な1つを選択**
   - 例: タオル付きお菓子セット → `"food"`（食品メイン）または`"home"`（タオルメイン）

3. **空欄・省略の扱い**
   - `review_count`, `review_average`, `catch_copy`: フィールドごと削除してOK
   - `updated_at`: **必須**（現在時刻のタイムスタンプを設定）
   - `occasions`: 空配列`[]`でもOK（1つの用途なら`occasion`のみでOK）

---

## 🏷️ occasion（用途）の指定値

| 値 | 日本語 | 説明 |
|---|--------|------|
| `wedding_celebration` | 結婚祝い | 結婚式・披露宴のお祝い |
| `birth_celebration` | 出産祝い | 出産・新生児のお祝い |
| `new_home_celebration` | 新築祝い | 新築・引越し祝い |
| `mothers_day` | 母の日 | 母の日ギフト |
| `fathers_day` | 父の日 | 父の日ギフト |
| `respect_for_aged_day` | 敬老の日 | 敬老の日ギフト |

---

## 🎨 genre_group（ジャンルグループ）の指定値

| 値 | 日本語 | 説明 |
|---|--------|------|
| `food` | 食品・グルメ | 食べ物全般 |
| `drink` | 飲み物 | 飲料全般 |
| `home` | ホーム・日用品 | 生活用品、インテリア |
| `catalog` | カタログギフト | カタログ、商品券 |
| `craft` | 手作り・工芸品 | 職人作品、ハンドメイド |

---

## 🏷️ genre_subgroup（ジャンル中分類）の指定値

### food（食品・グルメ）の中分類
| 値 | 日本語 | 例 |
|---|--------|-----|
| `sweets` | スイーツ・お菓子 | ケーキ、和菓子、チョコレート |
| `meat_seafood` | 肉・魚介類 | 牛肉、カニ、鮭 |
| `staple_food` | 主食・食材 | 米、麺、調味料 |
| `other_food` | その他食品 | 加工食品、総菜 |

### drink（飲み物）の中分類
| 値 | 日本語 | 例 |
|---|--------|-----|
| `alcohol` | お酒 | ワイン、日本酒、ビール |
| `soft_drink` | ソフトドリンク | ジュース、炭酸飲料 |
| `tea_coffee` | お茶・コーヒー | 緑茶、紅茶、コーヒー豆 |

### home（ホーム・日用品）の中分類
| 値 | 日本語 | 例 |
|---|--------|-----|
| `textile` | 寝具・タオル | タオル、布団、毛布 |
| `tableware_kitchen` | 食器・キッチン | 皿、カップ、鍋 |
| `fashion` | ファッション・アクセサリー | 帽子、バッグ、財布 |
| `interior` | インテリア・雑貨 | 時計、クッション、額縁 |
| `bath_beauty` | バス・美容 | 入浴剤、化粧品、石けん |
| `flower_plant` | 花・植物 | プリザーブドフラワー、観葉植物 |
| `baby` | ベビー用品 | おむつ、ベビー服、おもちゃ |

### catalog（カタログギフト）の中分類
| 値 | 日本語 | 例 |
|---|--------|-----|
| `catalog_gift` | カタログギフト | カタログ、商品券 |

### craft（手作り・工芸品）の中分類
| 値 | 日本語 | 例 |
|---|--------|-----|
| `handmade` | 手作り・工芸品 | 陶器、木工品、手芸品 |

---

## ⏰ updated_at（更新日時）の取得方法

**重要**: `updated_at`は**数値型のUNIXタイムスタンプ**である必要があります。

### ❌ 間違った例
```json
{
  "updated_at": "20251124"        // NG: 文字列
  "updated_at": "2025-11-24"      // NG: 日付文字列
  "updated_at": 20251124          // NG: 数値だが形式が違う
}
```

### ✅ 正しい例
```json
{
  "updated_at": 1732406400        // OK: UNIXタイムスタンプ（数値）
}
```

### 取得方法

#### オンラインツール（推奨）
https://www.unixtimestamp.com/
- 日本時間で現在時刻を入力
- 「Convert to Unix Timestamp」をクリック
- 表示された数値をコピー

#### Pythonで取得
```python
import time
timestamp = int(time.time())
print(timestamp)  # 例: 1732406400
```

#### JavaScriptで取得（ブラウザコンソール）
```javascript
Math.floor(Date.now() / 1000)  // 例: 1732406400
```

#### PowerShell（Windows）
```powershell
[int][double]::Parse((Get-Date -UFormat %s))
```

### なぜUNIXタイムスタンプか？
フロントエンドで以下のように日時変換しているため：
```typescript
const date = new Date(timestamp * 1000);
// → "2025/11/24 10:00" 形式で表示
```

---

## 📝 入力例

### 例1: タオルギフトセット（フル項目）
```json
{
  "id": "manual_towel_001",
  "title": "今治タオル 高級ギフトセット",
  "price": 5980,
  "image_url": "https://example.com/towel.jpg",
  "url": "https://example.com/towel-set",
  "affiliate_url": "https://af.example.com/towel",
  "merchant": "タオル専門店ABC",
  "source": "manual",
  "occasion": "wedding_celebration",
  "occasions": ["wedding_celebration", "new_home_celebration"],
  "review_count": 250,
  "review_average": 4.8,
  "description": "今治タオル認証マーク付きの高品質タオル3枚セット。吸水性抜群で、長く使える逸品です。",
  "genre_name": "タオル・バスグッズ",
  "genre_group": "home",
  "catch_copy": "最高級の今治タオルを使用した贅沢なギフトセット",
  "updated_at": 1732406400
}
```

### 例2: スイーツギフト（最小項目）
```json
{
  "id": "manual_sweets_001",
  "title": "フルーツタルト詰め合わせ 12個入り",
  "price": 4500,
  "image_url": "https://example.com/tart.jpg",
  "url": "https://example.com/tart-set",
  "affiliate_url": "https://af.example.com/tart",
  "merchant": "洋菓子店XYZ",
  "source": "manual",
  "occasion": "mothers_day",
  "occasions": ["mothers_day", "respect_for_aged_day"],
  "description": "フルーツの風味豊かなタルト12個入り。母の日や敬老の日のギフトに最適な上品な味わいです。",
  "genre_group": "food",
  "updated_at": 1732406400
}
```

### 例3: カタログギフト（複数用途）
```json
{
  "id": "manual_catalog_001",
  "title": "選べるカタログギフト 10,000円コース",
  "price": 10000,
  "image_url": "https://example.com/catalog.jpg",
  "url": "https://example.com/catalog-10000",
  "affiliate_url": "https://af.example.com/catalog",
  "merchant": "カタログギフト専門店",
  "source": "manual",
  "occasion": "wedding_celebration",
  "occasions": ["wedding_celebration", "birth_celebration", "new_home_celebration"],
  "review_count": 500,
  "description": "人気ブランドの商品を多数掲載。受け取った方が自由に選べるカタログギフトです。結婚祝い、出産祝い、新築祝いなど幅広い用途に対応。",
  "review_count": 500,
  "review_average": 4.7,
  "genre_name": "カタログギフト",
  "genre_group": "catalog",
  "updated_at": 1732406400
}
```

### 例4: 複数ジャンルに該当する商品の扱い方
```json
{
  "id": "manual_combo_001",
  "title": "タオル＆お菓子セット",
  "price": 3500,
  "image_url": "https://example.com/combo.jpg",
  "url": "https://example.com/combo-set",
  "affiliate_url": "https://af.example.com/combo",
  "merchant": "ギフト専門店",
  "source": "manual",
  "occasion": "birth_celebration",
  "occasions": ["birth_celebration", "wedding_celebration"],
  "genre_group": "home",
  "description": "タオルとお菓子の組み合わせ。複数ジャンルの場合は主要な方を選択。この場合タオルがメインなので「home」",
  "updated_at": 1732406400
}
```

---

## ✅ データ入力チェックリスト

入力前に以下を確認してください：

### 必須項目
- [ ] `id`が他の商品と重複していない
- [ ] `id`が`manual_`で始まっている
- [ ] `title`が入力されている
- [ ] `price`が数値（文字列ではない）
- [ ] `image_url`がHTTPSで始まっている
- [ ] `url`と`affiliate_url`が有効なリンク
- [ ] `merchant`（販売店名）が入力されている
- [ ] `source`が`"manual"`になっている
- [ ] `updated_at`が入力されている（現在のUNIXタイムスタンプ）

### オプション項目（推奨）
- [ ] `occasion`が指定値リストから選択されている
- [ ] `occasions`が配列形式で入力されている
- [ ] `genre_group`が指定値リスト（food/drink/home/catalog/craft）から**1つだけ**選択されている
- [ ] レビュー情報がある場合は`review_count`と`review_average`の両方を入力

### データ品質
- [ ] `review_average`が0-5の範囲（入力する場合）
- [ ] JSONフォーマットが正しい（カンマ、括弧の位置）
- [ ] 画像URLが実際にアクセス可能
- [ ] アフィリエイトリンクが正しく動作する

---

## ❓ よくある質問（FAQ）

### Q1: review_count、review_average、catch_copyがない場合は？
**A**: フィールドごと削除してOKです。フロントエンドで自動処理されます。

```json
// ✅ レビュー情報なし（推奨）- フィールド削除
{
  "id": "manual_001",
  "title": "商品名",
  "price": 3000,
  // review_count, review_average は記載不要
  "updated_at": 1732406400
}

// 表示結果: 「☆☆☆☆☆ (0)」と自動表示される
```

**楽天商品との統合時も安心**:
- 楽天商品: レビュー情報あり → 星評価表示
- 手動商品: レビュー情報なし → 星0個＋(0)表示
- 両方混在しても問題なく表示されます

### Q2: occasionが複数ある場合は？
**A**: `occasions`配列に全て入力し、`occasion`には主要な1つを設定してください。

```json
// ✅ 正しい例
{
  "occasion": "wedding_celebration",  // 主要な用途
  "occasions": ["wedding_celebration", "birth_celebration", "new_home_celebration"]  // 全用途
}

// ⚠️ occasionのみでも動作しますが、occasions推奨
{
  "occasion": "wedding_celebration"
}
```

### Q3: genre_groupが複数に該当する場合は？
**A**: **最も適切な1つを選択**してください。MeiliSearchのフィルタは1つのジャンルのみ対応しています。

```json
// 例: タオル＋お菓子セット
{
  "genre_group": "home"  // タオルがメインなら「home」
  // または
  "genre_group": "food"  // お菓子がメインなら「food」
}
```

**判断基準**:
- 商品の**メインの価値**は何か
- 購入者が**何を求めて**買うか
- **価格の大部分**を占めるのはどちらか

### Q4: updated_atは必須ですか？どんな形式で入力すればいいですか？
**A**: **必須です**。必ず**UNIXタイムスタンプ（数値）**で入力してください。

```json
// ❌ 間違った形式
{
  "updated_at": "20251124"        // NG: 文字列
  "updated_at": "2025-11-24"      // NG: 日付文字列  
  "updated_at": 20251124          // NG: 数値だが形式違い
}

// ✅ 正しい形式
{
  "updated_at": 1732406400        // OK: UNIXタイムスタンプ
}
```

**取得方法**: https://www.unixtimestamp.com/ で現在時刻を取得

**理由**: 
1. 楽天APIの規約で更新日時の表示が必要
2. 商品カードに「更新: 2025/11/24 10:00」と表示される
3. フロントエンドで数値→日時変換している

### Q5: 楽天データとの統合はどうなりますか？
**A**: 将来的に以下のように統合されます：

```python
# 統合イメージ
rakuten_data = load_rakuten_json()  # 楽天商品
manual_data = load_manual_json()    # 手動商品
all_data = rakuten_data + manual_data  # 配列結合
# → MeiliSearchに投入
```

両方のデータが同じフォーマットなので、シームレスに統合できます。

---

## 🔧 今後の統合方法（参考）

### 楽天データと手動データの統合
```python
# 将来的な統合スクリプト例
import json

# 楽天データ読み込み
with open('rakuten_products.json', 'r') as f:
    rakuten_data = json.load(f)

# 手動データ読み込み
with open('manual_products_20251124.json', 'r') as f:
    manual_data = json.load(f)

# 統合
all_products = rakuten_data + manual_data

# MeiliSearchに投入
# ... (index_meili_products.pyで処理)
```

---

## 💡 ヒント

### IDの命名規則
- **商品種別別**: `manual_towel_001`, `manual_sweets_001`
- **日付別**: `manual_20251124_001`, `manual_20251124_002`
- **店舗別**: `manual_abc_001`, `manual_xyz_001`

### 画像URLについて
- 可能な限りHTTPSを使用
- 画像サイズは300x300px以上推奨
- 商品の全体がわかる画像を選択

### 価格について
- 必ず税込価格を記載
- 定期的に価格を確認して更新
- `updated_at`も更新すること

---

## 🔍 フィルタ・ソート・AI機能での使用フィールド

### MeiliSearchの設定
```python
# scripts/index_meili_products.py より
'filterableAttributes': ['occasion', 'price', 'source']
'sortableAttributes': ['updated_at', 'price', 'review_average', 'review_count']
'searchableAttributes': ['title']
```

### 各フィールドの使用箇所

| フィールド | フィルタ | ソート | 検索 | AI推論 | フロントエンド表示 | 備考 |
|-----------|---------|-------|------|--------|------------------|------|
| `title` | - | - | ✅ | ✅ | ✅ | キーワード検索、AI理解、商品名表示 |
| `price` | ✅ | ✅ | - | ✅ | ✅ | 価格フィルタ、ソート、AI予算判断、価格表示 |
| `occasion` | ✅ | - | - | - | - | 用途フィルタ（wedding, birth等） |
| `occasions` | - | - | - | - | ✅ | 複数用途のバッジ表示（フロントエンド） |
| `source` | ✅ | - | - | - | - | データソース判別（manual/rakuten） |
| `genre_group` | ✅ | - | - | - | - | ジャンルフィルタ（food, drink等） |
| `updated_at` | - | ✅ | - | - | ✅ | 更新日順ソート、「更新: 2025/11/24」表示 |
| `review_average` | - | ✅ | - | - | ✅ | レビュー評価順ソート、星評価表示 |
| `review_count` | - | ✅ | - | - | ✅ | レビュー件数順ソート、件数表示 |
| `description` | - | - | - | ✅ | - | **AI推論で使用（必須）** |
| `merchant` | - | - | - | ✅ | ✅ | AI推論、販売店名表示 |
| `image_url` | - | - | - | - | ✅ | 商品画像表示 |
| `url` / `affiliate_url` | - | - | - | - | ✅ | 商品リンク |
| `genre_name` | - | - | - | - | ✅ | ジャンル名表示（オプション） |
| `catch_copy` | - | - | - | - | ✅ | キャッチコピー表示（オプション） |

### 📊 ユーザー機能との対応

#### 1. 検索機能
```
キーワード「タオル」 → titleフィールドで検索
```

#### 2. フィルタ機能
```
用途: 結婚祝い → occasionフィールド = "wedding"
ジャンル: 食品 → genre_groupフィールド = "food"
価格: 3000-5000円 → priceフィールドで範囲指定
```

#### 3. ソート機能
```
更新日順（デフォルト） → updated_at降順
価格安い順 → price昇順
レビュー評価高い順 → review_average降順 ※
レビュー件数多い順 → review_count降順 ※
```

※ `review_average`と`review_count`がない商品は、ソート時に最下位（0として扱われる）

#### 4. AIレコメンド機能
```python
# backend/app/services/ai_recommendation_service.py より
llm_products.append({
    "id": product.get("id"),
    "title": product.get("title"),
    "description": product.get("description"),  # ← AI推論に使用
    "price": product.get("price"),              # ← 予算判断に使用
    "merchant": product.get("merchant")         # ← 販売元考慮
})
```

**AI利用例**:
- ユーザー: 「30代女性への結婚祝い、予算1万円」
- AI: `description`から「上品」「女性向け」などの特徴を理解
- AI: `price`から予算内商品を判断
- AI: 適切な商品を3-5個推薦

---

## ⚠️ データ入力時の注意事項

### 必須フィールドの重要度

#### 🔴 絶対に必須（空欄・削除不可）
- `id`, `title`, `price`, `image_url`, `url`, `affiliate_url`, `merchant`, `source`, `updated_at`
- **`description`** ← AIレコメンド機能で使用するため**必須**
- **`occasion`** ← 用途フィルタで使用するため**必須**（6つから選択）
- **`occasions`** ← 複数用途表示で使用するため**必須**（配列形式）
- **`genre_group`** ← ジャンルフィルタで使用するため**必須**（6つから選択）

#### 🟡 推奨（機能向上のため推奨）
- `review_average` / `review_count` ← ソート機能、星評価表示（なくてもOK）

#### 🟢 オプション（あれば便利）
- `genre_name` ← 詳細ジャンル表示
- `catch_copy` ← 商品キャッチコピー表示

---

## 🚫 手動入力不要なフィールド（楽天データのみ）

以下のフィールドは楽天APIから自動生成されるため、手動商品データでは**入力不要**です：

| フィールド | 説明 | 理由 |
|-----------|------|------|
| `shop_code` | 楽天店舗コード | IDに含まれているため不要 |
| `item_code` | 楽天商品コード | IDに含まれているため不要 |
| `tags` | タグ配列（数値） | 楽天内部用、使用していない |
| `genre_id` | 楽天ジャンルID | `genreName`に変換されるため不要 |
| `category_group` | カテゴリグループ | `occasion`と同じ（重複） |
| `search_keyword` | 検索キーワード | `occasion`から自動生成される |

**重要**: これらのフィールドを手動商品データに含めても**害はありません**が、システムで使用されないため推奨しません。

---
