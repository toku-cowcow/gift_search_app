# 🎮 Step3: 実践ハンズオン
*所要時間: 約20分 | 対象: Step1・Step2を読んだ方・実際に動かしたい方*

## 🎯 このガイドの目標

**実際にアプリを起動して動かし**、機能を体験・カスタマイズしてみます。

---

## 📋 事前準備チェック

### 🛠️ **必須ソフトウェア**

| ソフト | インストール確認コマンド | バージョン要件 |
|--------|-------------------------|----------------|
| **Docker** | `docker --version` | 20.0以降 |
| **Python** | `python --version` | 3.8以降 |
| **Node.js** | `node --version` | 18.0以降 |
| **Git** | `git --version` | 2.0以降 |

**インストールされていない場合:**
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Python](https://www.python.org/downloads/) 
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

---

## 🚀 Step 1: アプリを起動してみよう！

### 📁 **1.1 プロジェクトの準備**

```bash
# 現在の場所を確認
pwd
# → gift_search_app フォルダにいることを確認

# フォルダ構成を確認
ls -la
# → backend/, frontend/, infra/, scripts/ が表示されればOK
```

### 🔍 **1.2 検索エンジン起動（Meilisearch）**

```bash
# インフラフォルダに移動
cd infra

# Meilisearchをバックグラウンド起動
docker compose up -d

# 起動確認
docker compose ps
# → meilisearch が "Up" 状態になっていればOK

# ログ確認（エラーがないかチェック）
docker compose logs meilisearch
```

**✅ 成功の場合:** `Meilisearch is ready to accept requests!` が表示される  
**❌ エラーの場合:** ポート7700が使用中の可能性 → 他のアプリを停止してから再実行

### 📊 **1.3 商品データを投入**

```bash
# スクリプトフォルダに移動  
cd ../scripts

# 【重要】古いインデックスを削除してクリーンな状態にする
python -c "
import requests
headers = {'Authorization': 'Bearer masterKey'}
try:
    requests.delete('http://localhost:7700/indexes/items', headers=headers)
    print('✅ 古いインデックスを削除しました')
except:
    print('ℹ️ インデックスが存在しないか、削除に失敗しました（初回は正常）')
"

# 楽天商品データ投入スクリプトを実行
python .\index_meili_products.py --source rakuten --file .\data\rakuten_uchiwai_products_20251030_233859.json
```

**期待する出力:**
```
✅ 古いインデックスを削除しました
Loading sample data...
Loaded 2070 items from rakuten_uchiwai_products_20251030_233859.json  
Uploading documents to Meilisearch...
Documents uploaded successfully. Task UID: 0
Upserted 2070 items to index 'items'
Index statistics: {
  "numberOfDocuments": 2070,
  "isIndexing": false
}
```

**✅ 成功:** 「2070 items」と「numberOfDocuments: 2070」が表示される  
**❌ エラー:** Meilisearchが起動していない可能性 → 1.2を再実行

### ⚙️ **1.4 バックエンド起動（FastAPI）**

```bash
# バックエンドフォルダに移動
cd ../backend

# 仮想環境作成（初回のみ）
python -m venv venv

# 仮想環境有効化
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# 依存パッケージインストール
pip install -r requirements.txt

# APIサーバー起動
python start_server.py
```

**期待する出力:**
```
INFO:     Started server process [12345]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
```

**✅ テスト:** ブラウザで `http://localhost:8000/docs` にアクセス → Swagger画面が表示

### 📱 **1.5 フロントエンド起動（Next.js）**

**新しいターミナルを開いて:**

```bash
# フロントエンドフォルダに移動
cd frontend

# 依存パッケージインストール（初回のみ）
npm install

# 開発サーバー起動
npm run dev
```

**期待する出力:**
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

**✅ テスト:** ブラウザで `http://localhost:3000` にアクセス → アプリが表示される

---

## 🎮 Step 2: 基本機能を体験してみよう！

### 🔍 **2.1 検索機能テスト**

**アプリ画面で以下を試してみてください:**

1. **基本検索**
   - 検索ボックスに「タオル」と入力
   - エンターキーを押す
   - 結果: 112件程度のタオル商品が表示

2. **フィルタ検索**  
   - 検索ワード: 「コーヒー」
   - 用途: 「香典返し」を選択
   - 価格帯: 1000円〜3000円を設定
   - 結果: 条件に合う商品のみ表示

3. **ソート機能**
   - 「コーヒー」で検索
   - 並び順: 「価格安い順」を選択
   - 結果: 432円 → 486円 → 540円... の順で表示
   - 並び順: 「レビュー件数順」を選択  
   - 結果: レビューの多い順で表示

### 📊 **2.2 検索精度の確認**

**以下のテストケースで検索精度を確認:**

| 検索ワード | 期待結果 | 実際の動作確認 |
|-----------|----------|---------------|
| **コーヒー** | 225件程度 | ☐ 関連商品のみ表示される |
| **あああああ** | 0件 | ☐ 無意味な検索は排除される |
| **こーひー** | 0件 | ☐ 店舗名マッチなし |
| **タオル** | 112件程度 | ☐ タオル関連商品のみ |

### 🎨 **2.3 UI・UX の確認**

**レスポンシブ対応:**
1. ブラウザの幅を縮小してスマホサイズに
2. 商品カードが縦並びになることを確認
3. 検索フィルタが使いやすく配置されることを確認

**星評価表示:**
1. レビューのある商品の星評価が正しく表示されるか
2. 小数点評価（4.6など）が正確に表示されるか

---

## 🛠️ Step 3: コードをカスタマイズしてみよう！

### 🎨 **3.1 商品カードのデザイン変更**

**ファイル:** `frontend/src/components/ProductCard.tsx`

**変更例1: カードの背景色を変更**
```typescript
// 現在の行を探す (約10行目あたり)
<div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">

// 以下に変更
<div className="bg-blue-50 border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
```

**変更例2: 価格の文字色を赤色に**
```typescript  
// 現在の行を探す (約120行目あたり)
<span className="text-2xl font-bold text-gray-900">

// 以下に変更  
<span className="text-2xl font-bold text-red-600">
```

**確認:** ブラウザをリロードして変更が反映されることを確認

### 📊 **3.2 検索結果の表示件数変更**

**ファイル:** `frontend/src/lib/api/search.ts`

```typescript
// 現在の行を探す (約35行目あたり)
searchParams.set('limit', (params.limit || 48).toString());

// 以下に変更（1ページ12件表示に）
searchParams.set('limit', (params.limit || 12).toString());
```

**確認:** 検索結果が12件ずつ表示されることを確認

### 🔍 **3.3 新しいソート順を追加**

**ファイル:** `frontend/src/lib/types.ts`

```typescript
// 現在のSortOption型を探す (約50行目あたり)
export type SortOption = 
  | 'updated_at:desc'
  | 'price:asc'
  | 'price:desc'
  | 'review_count:desc'
  | 'review_average:desc';

// 新しいオプションを追加
export type SortOption = 
  | 'updated_at:desc'
  | 'price:asc'
  | 'price:desc'
  | 'review_count:desc'
  | 'review_average:desc'
  | 'review_count:asc';     // レビュー件数少ない順を追加

// SORT_LABELSも更新 (約85行目あたり)
export const SORT_LABELS: Record<SortOption, string> = {
  'updated_at:desc': '新着順',
  'price:asc': '価格安い順', 
  'price:desc': '価格高い順',
  'review_count:desc': 'レビュー件数順',
  'review_average:desc': 'レビュー評価順',
  'review_count:asc': 'レビュー件数少ない順', // 追加
};
```

**確認:** ソート選択肢に新しいオプションが表示されることを確認

### 🎯 **3.4 商品情報の追加表示**

**ファイル:** `frontend/src/components/ProductCard.tsx`

**商品詳細に販売店名を大きく表示:**
```typescript
// 販売店名の表示部分を探す (約150行目あたり)
<p className="text-sm text-gray-500 mb-2">{item.merchant}</p>

// 以下に変更（より目立つように）
<p className="text-lg font-semibold text-blue-600 mb-2">🏪 {item.merchant}</p>
```

**確認:** 販売店名が目立つように表示されることを確認

---

## 🧪 Step 4: API を直接叩いて理解を深めよう！

### 🔧 **4.1 APIテストツールで検索**

**ブラウザで以下のURLにアクセス:**

```
# 基本検索
http://localhost:8000/api/v1/search?q=タオル

# フィルタ付き検索
http://localhost:8000/api/v1/search?q=コーヒー&price_max=2000&sort=price:asc

# 空検索（全商品）
http://localhost:8000/api/v1/search?limit=5
```

**JSONレスポンスの内容確認:**
```json
{
  "total": 112,
  "hits": [
    {
      "id": "rakuten_xxx",
      "title": "今治タオルギフト...",
      "price": 2980,
      "review_count": 45,
      "review_average": 4.6,
      ...
    }
  ],
  "query": "タオル",
  "processing_time_ms": 2,
  "limit": 20,
  "offset": 0
}
```

### 📊 **4.2 Meilisearch管理画面**

**ブラウザで `http://localhost:7700` にアクセス:**

1. **検索テスト**
   - 左サイドバーから「items」インデックスを選択
   - 検索ボックスで「タオル」を検索
   - 結果を確認

2. **設定確認**  
   - 「Settings」タブをクリック
   - 「Sortable attributes」で価格・レビューソートが有効か確認
   - 「Searchable attributes」で検索対象フィールドを確認

3. **統計情報**
   - 「Stats」で商品数（2070件）を確認
   - インデックスサイズを確認

---

## 🐛 Step 5: よくある問題と解決方法

### ❌ **Problem 1: 商品が表示されない**

**症状:** 検索しても「0件」と表示される

**解決手順:**
```bash
# 1. Meilisearchの状態確認
cd infra  
docker compose ps
# → meilisearch が "Up" になっているか確認

# 2. 楽天データ投入の再実行
python scripts/index_meili_products.py --source rakuten --file data/rakuten_uchiwai_products_20251030_233859.json
# → "2070 items uploaded successfully" が表示されるか確認

# 3. ブラウザのハードリロード
# Ctrl+Shift+R (Windows) または Cmd+Shift+R (Mac)
```

### ❌ **Problem 2: カテゴリが「unknown」になる**

**症状:** 商品フィルタで「出産内祝い」「結婚内祝い」が表示されず、すべて「unknown」になる

**解決手順:**
```bash
# 1. インデックス完全再作成（推奨）
cd scripts

# 古いインデックスを削除
python -c "
import requests
headers = {'Authorization': 'Bearer masterKey'}
requests.delete('http://localhost:7700/indexes/items', headers=headers)
print('古いインデックスを削除しました')
"

# 新しいデータで再投入（カテゴリ推測機能付き）
python index_meili_products.py --source rakuten --file ./data/rakuten_uchiwai_products_20251030_233859.json

# 2. カテゴリ分類確認
python -c "
import requests
headers = {'Authorization': 'Bearer masterKey'}
response = requests.get('http://localhost:7700/indexes/items/search?facets=[\"occasion\",\"occasions\"]', headers=headers)
facets = response.json().get('facetDistribution', {})
print('主カテゴリ分布:', facets.get('occasion', {}))
print('複数カテゴリ分布:', facets.get('occasions', {}))
"

# 3. 複数カテゴリ商品の確認
python -c "
import requests
headers = {'Authorization': 'Bearer masterKey'}
response = requests.get('http://localhost:7700/indexes/items/search?q=内祝&limit=3', headers=headers)
for item in response.json().get('hits', []):
    print(f\"商品: {item['title'][:50]}...\")
    print(f\"  主カテゴリ: {item.get('occasion', 'N/A')}\")
    print(f\"  全カテゴリ: {item.get('occasions', ['N/A'])}\")
    print()
"
```

### ❌ **Problem 3: ソート機能が動かない**

**症状:** レビュー順・評価順で並び替えても順序が変わらない

**解決手順:**
```bash
# 1. Meilisearchの設定確認
python -c "
import requests
headers = {'Authorization': 'Bearer masterKey'}
response = requests.get('http://localhost:7700/indexes/items/settings', headers=headers)
print('sortableAttributes:', response.json().get('sortableAttributes', []))
"

# 2. 設定更新（必要な場合）
cd scripts
python -c "
import requests
headers = {'Authorization': 'Bearer masterKey', 'Content-Type': 'application/json'}
settings = {'sortableAttributes': ['price', 'review_count', 'review_average', 'updated_at']}
requests.patch('http://localhost:7700/indexes/items/settings', headers=headers, json=settings)
"
```

### ❌ **Problem 4: フロントエンドが起動しない**

**症状:** `npm run dev` でエラーが発生する

**解決手順:**
```bash
# 1. Node.jsバージョン確認
node --version
# → 18.0以上であることを確認

# 2. 依存関係の再インストール
rm -rf node_modules package-lock.json
npm install

# 3. ポート確認
netstat -an | findstr :3000
# → 3000番ポートが使用中の場合は他のアプリを停止
```

---

## 🎓 Step 6: さらなる学習・カスタマイズ案

### 🌟 **初級カスタマイズ**

1. **デザインカスタマイズ**
   - 商品カードの角を丸くする
   - ホバーエフェクトの追加
   - 色テーマの変更

2. **機能追加**
   - 商品のお気に入り機能（ローカルストレージ使用）
   - 検索履歴の表示
   - 商品詳細ページの追加

### 🚀 **中級カスタマイズ**

1. **検索機能の拡張**
   - カテゴリフィルタの追加
   - 価格帯スライダーの改善
   - 検索結果のページネーション

2. **パフォーマンス改善**
   - 画像の遅延読み込み
   - 検索結果のキャッシュ
   - 無限スクロール実装

### 💪 **上級カスタマイズ**

1. **新機能開発**
   - ユーザー認証・ログイン機能
   - 商品レビュー投稿機能
   - レコメンド機能（類似商品提案）

2. **インフラ改善**
   - CI/CDパイプライン構築
   - 本番環境デプロイ（Vercel + Railway）
   - パフォーマンス監視（APM）

---

## 🏆 ハンズオン完了チェックリスト

### ✅ **基本動作確認**
- [ ] Meilisearchが起動している
- [ ] 商品データが2070件投入されている  
- [ ] バックエンドAPI（FastAPI）が動作している
- [ ] フロントエンド（Next.js）が表示される
- [ ] 検索機能が正常に動作する

### ✅ **機能体験**
- [ ] 「タオル」で検索して結果が表示される
- [ ] 価格帯フィルタが動作する
- [ ] ソート機能（価格順・レビュー順）が動作する
- [ ] レスポンシブデザインを確認した
- [ ] 星評価が正しく表示される

### ✅ **カスタマイズ体験**
- [ ] 商品カードのデザインを変更した
- [ ] 検索結果の表示件数を変更した
- [ ] APIを直接叩いてレスポンスを確認した
- [ ] Meilisearch管理画面を操作した

### ✅ **理解度確認**
- [ ] フロントエンド・バックエンド・検索エンジンの役割を理解した
- [ ] APIの仕組みを理解した
- [ ] 検索精度の仕組みを理解した
- [ ] レスポンシブデザインの重要性を理解した

---

## 🎉 おめでとうございます！

**✨ あなたは以下を体験しました:**

🎯 **実践的なWebアプリ開発の全工程**  
🔍 **現代的な検索システムの構築・運用**  
📱 **レスポンシブなフロントエンド開発**  
⚙️ **RESTful APIの設計・実装**  
🐳 **Dockerを使ったインフラ管理**  

### 🚀 **次のステップ**

**📚 さらに学習したい方:**
- React/Next.js の公式チュートリアル
- FastAPI の公式ドキュメント
- Meilisearch の詳細な設定方法

**🛠️ スキルアップしたい方:**
- GitHub でコードを公開
- ポートフォリオとしてデプロイ
- オリジナル機能の追加開発

**💼 キャリアに活かしたい方:**
- このプロジェクトを面接でアピール
- 技術ブログでの解説記事作成
- オープンソース活動への参加

**🎊 素晴らしいWebエンジニアへの第一歩を踏み出しました！**