# 🎮 Step3: 実践ハンズオン
*所要時間: 約30分 | 対象: 実際にアプリを動かしたい方*

## 🎯 このガイドの目標

**実際にアプリを起動して動かし**、商品データの管理と検索機能を体験します。

---

## 📋 事前準備

### 必須ソフトウェア

```bash
# バージョン確認
docker --version    # 20.0以降
python --version    # 3.8以降
node --version      # 18.0以降
```

---

## 🚀 起動手順

### 1. Meilisearch（検索エンジン）起動

```bash
cd infra
docker compose up -d

# 起動確認
docker compose ps
# → "Up" 表示されればOK
```

### 2. 商品データのインデックス

**◆ 商品データをMeiliに投入＋ジャンル分け（完全版ワークフロー）**

```bash
cd ../scripts

# ステップ1: 楽天APIからデータ取得 + Meilisearchに投入
python auto_update_products.py

# ステップ2: 未登録ジャンルIDの確認
# → コンソールに「[未登録] genre_id=xxxxx」と表示される
# → 自動でCSVに追記される

# ステップ3: CSVを編集（手動）
# data/cache/genre_id_list_mapped.csv を開く
# 追記された行のgenre_group, genre_subgroupを入力

# ステップ4: マッピングファイルを更新
python update_genre_mappings.py

# ステップ5: データを再インデックス（ジャンル分類を反映）
python index_meili_products.py --source rakuten --file data/sources/merged/merged_products_○○○○○○○○_○○○○○○.json
```

**期待する出力:**
```
[OK] ジャンルマッピングルール読み込み成功
[INFO] genre_id_mappings数: 1189
Loaded and normalized 11540 items
All 11540 documents uploaded successfully
分類済み: 10095件 (92.3%)

# 未登録ジャンルがある場合:
[未登録] genre_id=888888, genre_name='新商品カテゴリ'
[CSV追記] 888888,新商品カテゴリ,,
✅ 1件の未登録ジャンルIDをCSVに追記しました
```

### 3. バックエンド（API）起動

```bash
cd ../backend

# 依存パッケージインストール（初回のみ）
pip install -r requirements.txt

# APIサーバー起動
python start_server.py
```

**期待する出力:**
```
INFO:     Application startup complete.
INFO:     Uvicorn running on http://127.0.0.1:8000
```

### 4. フロントエンド起動

```bash
cd ../frontend

# 依存パッケージインストール（初回のみ）
npm install

# 開発サーバー起動
npm run dev
```

**起動確認:** ブラウザで `http://localhost:3000` にアクセス

---

## 🎨 ジャンル分類のカスタマイズ

### 完全版ワークフロー（推奨）

**商品データをMeiliに投入＋ジャンル分け:**

```bash
cd scripts

# 【ステップ1】楽天APIからデータ取得 + Meilisearchに投入
python auto_update_products.py

# 【ステップ2】未登録ジャンルIDの確認
# → コンソールに [未登録] genre_id=xxxxx と表示される
# → 自動で data/cache/genre_id_list_mapped.csv に追記される

# 【ステップ3】CSVを手動編集
# data/cache/genre_id_list_mapped.csv を開く
# 追記された行のgenre_group, genre_subgroupを入力

# 【ステップ4】マッピングファイルを更新
python update_genre_mappings.py

# 【ステップ5】データを再インデックス（ジャンル分類を反映）
python index_meili_products.py --source rakuten --file data/sources/merged/merged_products_○○○○○○○○_○○○○○○.json
```

**genre_id_list_mapped.csv の形式:**
```csv
genre_id,genre_name,genre_group,genre_subgroup
566732,カタログギフト,catalog,catalog_gift
215110,プリザーブドフラワー,home,flower_plant
888888,新商品,,                    ← 【ステップ2で自動追記】空欄OK
888888,新商品,home,interior        ← 【ステップ3で手動入力】
```

### 既存データの分類変更のみの場合

**ジャンル分類だけを変更したい場合:**

```bash
cd scripts

# 1. genre_id_list_mapped.csv を編集
#    - Excelやテキストエディタで開く
#    - 既存の行のgenre_group, genre_subgroupを変更

# 2. マッピングファイルを自動更新
python update_genre_mappings.py

# 3. データを再インデックス
python index_meili_products.py --source rakuten --file data/sources/merged/merged_products_○○○○○○○○_○○○○○○.json
```

### ジャンル分類の構造

```
大分類 (genre_group)
├─ food (食品)
│  ├─ sweets (スイーツ・お菓子)
│  ├─ meat_seafood (肉・魚介類)
│  ├─ staple_food (米・麺・パン)
│  └─ other_food (調味料・その他)
├─ drink (飲料)
│  ├─ alcohol (アルコール)
│  ├─ soft_drink (ソフトドリンク)
│  └─ tea_coffee (お茶・コーヒー)
├─ home (生活雑貨)
│  ├─ textile (タオル・寝具)
│  ├─ tableware_kitchen (食器・キッチン)
│  ├─ fashion (ファッション)
│  └─ その他多数...
├─ catalog (カタログギフト)
└─ craft (工芸品)
```

## 📚 よく使うコマンド集

### データ管理
```bash
cd scripts

# 完全版ワークフロー（楽天API取得 + ジャンル分類）
python auto_update_products.py
# → 未登録ジャンルIDがあればCSV編集
python update_genre_mappings.py
python index_meili_products.py --source rakuten --file data/sources/merged/merged_products_○○○○○○○○_○○○○○○.json

# ジャンルマッピングのみ更新（データ取得なし）
python update_genre_mappings.py
python index_meili_products.py --source rakuten --file data/sources/merged/merged_products_○○○○○○○○_○○○○○○.json

# 分類状況確認
python -c "import meilisearch; c=meilisearch.Client('http://localhost:7700', 'masterKey'); r=c.index('items').search('', {'limit':11000}); print(f'総数:{len(r[\"hits\"])}件')"
```

### サーバー操作
```bash
# Meilisearch
cd infra
docker compose up -d        # 起動
docker compose down         # 停止
docker compose logs -f      # ログ表示

# バックエンド
cd backend
python start_server.py

# フロントエンド
cd frontend
npm run dev
```

---

## 📚 参考情報

### API直接アクセス
```bash
# ブラウザでアクセス
http://localhost:8000/api/v1/search?q=タオル
http://localhost:8000/api/v1/search?q=コーヒー&genre_group=food&price_max=2000&sort=price:asc
```

### Meilisearch管理画面
- URL: http://localhost:7700
- 検索テスト、設定確認、統計情報の表示が可能

---

## 🎉 完了

ギフト検索アプリの実践ハンズオンが完了しました。

**習得した内容:**
- Webアプリ開発の全工程
- 検索システムの構築・運用
- ジャンル分類の自動化
- データ管理とインデックス作成


---

## 📤 GitHubへのアップロード

### 変更の確認

```bash
# プロジェクトルートに移動
cd c:\Users\tokuu\Documents\Python_development\No1_gift_search_app\gift_search_app

# 変更されたファイルを確認
git status
```

### ステージング（追加）

```bash
# すべての変更をステージング
git add .

# または個別にファイルを追加
git add frontend/
git add backend/
git add scripts/
git add docs/

# ステージング確認
git status
```

### コミット

```bash
# 変更内容をコミット
git commit -m "ジャンル分類機能の改善と統合ワークフロー追加"

# より詳細なメッセージの場合
git commit -m "ジャンル分類機能の改善

- genre_id フィールドのインデックス化を修正
- 統合ワークフロー update_genre_mappings.py を追加
- ドキュメントを簡潔に書き換え
- 不要な一時ファイルを削除"
```

### プッシュ

```bash
# 初回プッシュ（リモートリポジトリがまだない場合）
# GitHubでリポジトリを作成してから：
git remote add origin https://github.com/your-username/gift_search_app.git
git branch -M main
git push -u origin main

# 2回目以降のプッシュ
git push
```

### セキュリティチェック（重要）

**APIキーが含まれる `.env` ファイルは除外する：**

```bash
# .gitignore に追加されているか確認
cat .gitignore | findstr /C:".env"

# もし .env がコミットされてしまった場合
git rm --cached .env backend/.env scripts/.env
git commit -m "セキュリティ修正: APIキーファイルを除外"
```

---

## 🎉 完了

ギフト検索アプリの実践ハンズオンが完了しました。

**習得した内容:**
- Webアプリ開発の全工程
- 検索システムの構築・運用
- ジャンル分類の自動化
- データ管理とインデックス作成
- Gitでのバージョン管理

**次のステップ:**
- デザインのカスタマイズ
- 機能の追加・拡張
- パフォーマンス改善
- 本番環境へのデプロイ