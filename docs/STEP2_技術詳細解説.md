# 🛠️ Step2: 技術詳細解説
*所要時間: 約20分 | 対象: Step1を読んだ方・技術詳細を知りたい方*

## 🎯 このガイドの目標

Step1で全体像を理解した後、**各技術がどのように動作しているか**を詳しく学びます。

---

## 📱 フロントエンド技術詳細

### 🚀 **Next.js + React**

**何これ？**
- **Next.js**: Reactを使いやすくしたフレームワーク
- **React**: Facebookが作ったUI構築ライブラリ

**このアプリでの使い方:**
```typescript
// 商品カード コンポーネント例
function ProductCard({ item }: { item: GiftItem }) {
  return (
    <div className="border rounded-lg p-4">
      <img src={item.image_url} alt={item.title} />
      <h3>{item.title}</h3>
      <p>¥{item.price.toLocaleString()}</p>
      <StarRating rating={item.review_average || 0} />
    </div>
  );
}
```

**重要なファイル:**
```
frontend/src/
├── app/
│   ├── page.tsx              # トップページ
│   └── search/page.tsx       # 検索結果ページ
├── components/
│   ├── ProductCard.tsx       # 商品カード（再利用可能）
│   ├── Header.tsx           # ヘッダー部分
│   └── Hero.tsx             # メインビジュアル
└── lib/
    ├── api/search.ts        # API呼び出し処理
    └── types.ts             # 型定義
```

### 🎨 **Tailwind CSS**

**何これ？**  
ユーティリティファーストのCSSフレームワーク

**従来のCSS:**
```css
.product-card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Tailwindでは:**
```typescript
<div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
```

**メリット:**
- 🎯 **直感的**: クラス名で見た目が分かる
- ⚡ **高速**: CSS書く時間を大幅短縮
- 🔧 **カスタマイズ性**: 必要な分だけCSSを生成

---

## ⚙️ バックエンド技術詳細

### 🐍 **FastAPI**

**何これ？**  
Pythonで高速APIを構築するフレームワーク

**このアプリでの使い方:**
```python
# 検索APIエンドポイント
@router.get("/search", response_model=SearchResponse)
async def search_gifts(
    q: Optional[str] = Query(None, description="検索キーワード"),
    price_min: Optional[int] = Query(None, description="最低価格"),
    sort: Optional[str] = Query("updated_at:desc", description="ソート順")
):
    # 1. パラメータを検証
    search_params = SearchParams(q=q, price_min=price_min, sort=sort)
    
    # 2. 検索サービスに処理を委譲
    return provider.search_items(search_params)
```

**APIの設計思想:**
```
📥 HTTP Request  → 🔧 バリデーション → 🎯 ビジネスロジック → 📤 HTTP Response
   (フロントから)     (入力チェック)      (検索・データ処理)     (フロントへ)
```

### 🏗️ **レイヤード アーキテクチャ**

```
📱 API Layer     (items.py)         # HTTPリクエストを受け取る
    ↓
🎯 Service Layer (search_service.py)  # ビジネスロジックを処理
    ↓  
💾 Data Layer    (Meilisearch)       # データの保存・検索
```

**各レイヤーの責任:**

| レイヤー | 責任 | 例 |
|----------|------|-----|
| **API** | HTTP処理・バリデーション | 「qパラメータが文字列か？」 |
| **Service** | ビジネスロジック | 「価格帯で絞り込み処理」 |
| **Data** | データアクセス | 「Meilisearchに検索クエリを投げる」 |

---

## 🔍 検索エンジン技術詳細

### ⚡ **Meilisearch**

**何これ？**  
Rustで作られた超高速全文検索エンジン

**なぜ速い？**
1. **インメモリ処理**: データをメモリ上に保持
2. **事前インデックス**: 検索用データ構造を事前構築
3. **並列処理**: マルチコア活用

### 🎯 **検索設定の詳細**

**検索対象フィールドの設定:**
```json
{
  "searchableAttributes": ["title", "description"],
  "displayedAttributes": ["*"],
  "sortableAttributes": ["price", "review_count", "review_average", "updated_at"]
}
```

**ランキングルールの重要性:**
```json
{
  "rankingRules": [
    "sort",        // ソート指定を最優先（価格順など）
    "words",       // 検索語の一致度
    "typo",        // タイポ許容（現在は無効）
    "proximity",   // 検索語の近接度
    "attribute",   // フィールドの重要度
    "exactness"    // 完全一致度
  ]
}
```

**タイポ許容を無効にした理由:**
```javascript
// 無効前: 「コーヒー」→ 関係ない商品も2000件以上ヒット 
// 無効後: 「コーヒー」→ 関連商品のみ225件ヒット
"typoTolerance": { "enabled": false }
```

### 📊 **検索パフォーマンス詳細**

**データ量:**
- 商品数: **2,070件**
- インデックスサイズ: **約15MB**
- メモリ使用量: **約50MB**

**検索速度:**
- 単純検索: **0.1ms以下**
- 複雑検索（フィルタ+ソート）: **1-3ms**
- 同時検索: **100リクエスト/秒まで対応**

---

## 💾 データ処理詳細

### 📄 **楽天商品データ構造**

**元データ例:**
```json
{
  "id": "rakuten_bellevie-harima:10013197",
  "title": "お歳暮 ギフト カタログギフト...",
  "price": 8640,
  "image_url": "https://thumbnail.image.rakuten.co.jp/...",
  "merchant": "ソムリエ＠ギフト",
  "review_count": 15574,      // レビュー件数
  "review_average": 4.66,     // 平均評価
  "occasion": "unknown",      // 用途分類
  "updated_at": 1761835092    // 更新日時（Unixタイムスタンプ）
}
```

### 🔄 **データ処理フロー**

```
1. 楽天API → 2. JSONファイル → 3. Meilisearch → 4. 検索結果
   📡 取得      💾 保存         🔍 インデックス    📱 表示
```

**データ投入スクリプト:**
```python
# scripts/index_meili_products.py の処理流れ
def main():
    # 1. JSONファイルからデータを読み込み
    data = load_sample_data()
    
    # 2. Meilisearchに接続
    client = MeilisearchClient(url, api_key)
    
    # 3. インデックス設定
    settings = {"sortableAttributes": ["price", "review_count"]}
    client.update_settings("items", settings)
    
    # 4. ドキュメント投入
    client.add_documents("items", data)
```

---

## 🐳 インフラ詳細

### 🚢 **Docker Compose**

**何これ？**  
複数のアプリケーションを同時に管理するツール

**設定例:**
```yaml
# infra/docker-compose.yml
version: '3.8'
services:
  meilisearch:
    image: getmeili/meilisearch:v1.10.3
    ports:
      - "7700:7700"
    environment:
      - MEILI_MASTER_KEY=masterKey
    volumes:
      - meilisearch_data:/meili_data
```

**メリット:**
- 🎯 **環境統一**: 開発・本番で同じ環境
- ⚡ **簡単起動**: `docker compose up -d` で全て起動
- 🔒 **分離**: アプリケーション間の干渉なし

### 🌐 **本番環境構成例**

```
🌐 Internet
    ↓
🛡️  CDN (CloudFlare)          # 静的ファイル配信・高速化
    ↓
⚖️  Load Balancer (Nginx)     # 負荷分散・SSL終端
    ↓
📱 Frontend (Next.js)         # 複数台でスケーリング
    ↓
⚙️  Backend (FastAPI)         # 複数台でスケーリング
    ↓
🔍 Meilisearch Cluster       # 検索専用クラスタ
```

---

## 🔐 セキュリティ詳細

### 🛡️ **実装済みセキュリティ**

**CORS設定:**
```python
# バックエンドでのCORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # フロントエンドのみ許可
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)
```

**入力値検証:**
```python
# Pydanticによる自動バリデーション
class SearchParams(BaseModel):
    q: Optional[str] = Field(None, max_length=100)      # 検索キーワード長制限
    price_min: Optional[int] = Field(None, ge=0)        # 価格は0以上
    price_max: Optional[int] = Field(None, ge=0)        # 価格は0以上
    limit: int = Field(20, ge=1, le=100)                # 取得件数制限
```

### 🚨 **本番で必要なセキュリティ**

**認証・認可:**
- **JWT認証**: ユーザーログイン機能
- **API制限**: レート制限（1分間に100リクエストまで）
- **HTTPS**: 通信の暗号化

**データ保護:**
- **個人情報**: ユーザーデータの暗号化
- **API キー**: 環境変数での管理
- **ログ**: 個人情報を含まないログ設計

---

## 📈 パフォーマンス最適化詳細

### ⚡ **フロントエンド最適化**

**画像最適化:**
```typescript
// Next.js の Image コンポーネント使用
import Image from 'next/image'

<Image 
  src={item.image_url}
  alt={item.title}
  width={300}
  height={300}
  loading="lazy"        // 遅延読み込み
  placeholder="blur"    // ぼかしプレースホルダー
/>
```

**バンドル最適化:**
```javascript
// 必要な分だけインポート（Tree Shaking）
import { useState } from 'react'           // ✅ Good
import * as React from 'react'            // ❌ Bad (全体読み込み)
```

### 🎯 **バックエンド最適化**

**非同期処理:**
```python
# async/await による非同期API
async def search_gifts(params):
    # I/O待機中に他のリクエストを処理可能
    result = await meilisearch_client.search(params)
    return result
```

**キャッシュ戦略:**
```python
# よく検索される結果をキャッシュ
@lru_cache(maxsize=128)
def get_popular_searches():
    return ["タオル", "コーヒー", "お米"]
```

---

## 🧪 テスト戦略詳細

### 🔬 **テスト種類**

**1. ユニットテスト（個別機能）**
```python
def test_search_params_validation():
    # 価格が負の値の場合エラーになることをテスト
    with pytest.raises(ValidationError):
        SearchParams(price_min=-100)
```

**2. 統合テスト（API全体）**
```python
def test_search_api():
    response = client.get("/search?q=タオル&price_max=3000")
    assert response.status_code == 200
    assert response.json()["total"] > 0
```

**3. E2Eテスト（ユーザー操作）**
```javascript
// Playwright でブラウザ操作をテスト
test('商品検索ができること', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.fill('[data-testid=search-input]', 'タオル')
  await page.click('[data-testid=search-button]')
  await expect(page.locator('.product-card')).toHaveCount.greaterThan(0)
})
```

---

## 🔁 とてもかんたん：入力から画面に出るまで（専門用語を避けた説明）

ここでは「ユーザーが検索して → 結果が画面に出る」までを、実際のファイル名ごとに順番に説明します。まずは易しい説明（何が起きるかのイメージ）、その下に「実際の動き（専門用語）」を続けて示します。

【フロントエンド（ブラウザ側）】  
# ① frontend/src/app/page.tsx  
役割（やさしく）：  
- ユーザーの入力（キーワード・ソート・ページ）を受け取り、検索を開始する。  
- 画面の状態（読み込み中・エラー・結果）を管理して表示する。  
イメージ：店の受付カウンター。お客さんが注文を書くところ。  

実際の動き（専門用語）：  
- React コンポーネント。useState/useEffect で状態管理し、イベントハンドラで fetchSearch() を呼び await して結果を扱う。

↓
# ② frontend/src/lib/api/search.ts  
役割（やさしく）：  
- 受付が渡した検索条件をインターネット経由でサーバーに送る（HTTP）。  
- サーバーの返事（データ）が来るのを待ち、来たらそれを返す。  
イメージ：郵便局員が受付の紙を本部に届ける。  

実際の動き（専門用語）：  
- TypeScript で URL を組み、fetch/axios による GET リクエストを行い、await res.json() でパースして JSON を返す。

↓
# ③ frontend/src/components/ProductGrid.tsx / ProductCard.tsx  
役割（やさしく）：  
- サーバーからの返事が来るまで「読み込み中」を見せる。  
- 返事が来たら商品の一覧（1つずつカード）を画面に並べる。  
イメージ：店員が「お待ちください」を出し、返事が届いたら箱を開け棚に並べる。  

実際の動き（専門用語）：  
- 受け取った items 配列を map して各 ProductCard を JSX でレンダー。loading フラグでスピナーやスケルトンを表示。

---

【バックエンド（サーバー側）】  
# ④ backend/app/main.py  
役割（やさしく）：  
- 外から来る「検索して」という頼み（HTTP）を受け付ける入口を作る。  
イメージ：郵便局の本部の案内板・受付。  

実際の動き（専門用語）：  
- FastAPI アプリを作りルーターを登録、ASGI サーバ（uvicorn）で起動。CORS 等のミドルウェア設定を行う。

↓
# ⑤ backend/app/api/v1/items.py  
役割（やさしく）：  
- 入口で受け取った「何を探すか」を確認し、実際に調べる担当に渡す。  
イメージ：窓口係が依頼書を該当部署に回す。  

実際の動き（専門用語）：  
- @router.get の非同期ハンドラがクエリを受け取り、Pydantic による入力検証を行い、サービス層を呼び出す。

↓
# ⑥ backend/app/api/deps.py  
役割（やさしく）：  
- どの「調べ方」（このアプリでは Meilisearch）を使うかを決めて渡す。  
イメージ：どの司書チームに回すか決める名簿。  

実際の動き（専門用語）：  
- FastAPI の Depends を使い、MeilisearchService 等のインスタンスを取得・注入する。

↓
# ⑦ backend/app/services/search_service_fixed.py  
役割（やさしく）：  
- 受け取った検索条件を検索機用に整え、本当の検索機（Meilisearch）に頼む。  
- 返ってきた結果を画面向けに整理して返す。  
イメージ：司書が検索端末で結果を取り出し、見やすい一覧にまとめる。  

実際の動き（専門用語）：  
- filters/sort/limit/offset を組み立て、meilisearch.Client.index.search(q, options) を await して raw 結果を受け取り、hits をマッピングして整形する。

---

【検索機（Meilisearch）】  
# ⑧ infra/docker-compose.yml（起動された Meilisearch サーバー）  
役割（やさしく）：  
- 実際にキーワードで探して該当商品一覧を返す装置。  
イメージ：図書館の自動検索機。ボタンで本の一覧が出る機械。  

実際の動き（専門用語）：  
- REST API（ポート7700）で index.search を受け、rankingRules, searchableAttributes を元にスコアリングして nbHits, hits を返す。

---

【戻りの流れ：検索機 → サーバー → ブラウザ】  
# ⑨ backend/app/services/search_service_fixed.py（Meiliからの結果を受け取り整理）  
役割（やさしく）：  
- 検索機が返した「生データ」を受け取り、画面で使える形に不要情報を外して必要な項目だけ残す。  
イメージ：司書が出力を確認し、不要ページを破り目次だけ残す作業。  

実際の動き（専門用語）：  
- Meili の生 JSON から不要プロパティを削除、型を整え pagination 情報を付与して dict を返す。

↓
# ⑩ backend/app/api/v1/items.py（最終チェックしてブラウザへ返す）  
役割（やさしく）：  
- 整理済みの一覧を最終チェックしてブラウザに返す。  
イメージ：窓口が請求書をチェックしてお客さんに渡す。  

実際の動き（専門用語）：  
- Service の結果を Pydantic のレスポンスモデルで検証し、FastAPI が JSON にシリアライズして HTTP で返す。

↓（ブラウザにデータ到着）
# ⑪ frontend/src/lib/api/search.ts（返事を受け取る）  
役割（やさしく）：  
- サーバーから届いたデータを受け取り、呼んだ画面に渡す。  
イメージ：配達員が荷物を受付に届ける。  

実際の動き（専門用語）：  
- fetch の Promise が解決され await で JSON を受け取り、型に合わせて呼び出し元に返す。

↓
# ⑫ frontend/src/app/search/page.tsx（画面を更新する）  
役割（やさしく）：  
- 受け取った一覧を画面状態にセットして ProductGrid に渡し、表示を更新する。  
- エラー時や0件時の表示も切り替える。  
イメージ：受付が荷物を棚に並べてお客さんに見せる。  

実際の動き（専門用語）：  
- 受け取ったデータを setState し React が再描画を行い、仮想DOMの差分適用でブラウザの表示が更新される。

---

### 重要なポイント（覚えておくこと）
- ②でサーバーに送った後、返事が来るまで時間がある。画面はその間「読み込み中」を表示する（③が表示する）。  
- サーバーから結果が来たら ProductGrid がデータを受け取り「商品カード」を並べる。  
- 「やさしい説明」と「専門用語での動き」を両方添えたので、イメージと実装の両方が把握できます。