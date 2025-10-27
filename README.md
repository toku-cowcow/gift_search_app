# UchiGift - 冠婚葬祭ギフト検索アプリ

> **初学者向け説明**: このプロジェクトは、結婚や出産などのお祝い事の「内祝い」ギフトを検索できるWebアプリケーションです。現在はダミーデータで動作し、将来は楽天APIと連携予定です。

## 🎯 このアプリケーションについて

UchiGift（ウチギフト）は、内祝いギフト専門の検索Webアプリケーションです。

**対応シーン**:
- 🕊️ 香典返し  
- 💒 結婚内祝い
- 👶 出産内祝い

**主な機能**:
- シーン・価格帯での商品フィルタ
- 商品の詳細情報表示
- アフィリエイトリンクでの商品購入導線

## 🏗️ 技術構成（初学者向け解説）

```
Webアプリケーションの構成
│
├─ フロントエンド（画面）     → Next.js + TypeScript
├─ バックエンド（API）       → FastAPI + Python  
├─ 検索エンジン             → Meilisearch (Docker)
└─ 商品データ              → JSONファイル（将来は楽天API）
```

**各技術の役割**:
- **Next.js**: ユーザーが見る画面を作成（React + TypeScript）
- **FastAPI**: フロントエンドからのリクエストを処理するAPI
- **Meilisearch**: 高速な商品検索を実現する検索エンジン
- **Docker**: Meilisearchを簡単に起動するためのコンテナ技術

## 📁 プロジェクト構造の見取り図

```
gift_search_app/                    # プロジェクトのルート
│
├─ README.md                        # このファイル（プロジェクトの説明書）
├─ .env.example                     # 環境変数の設定例
│
├─ infra/                          # インフラ設定
│   └─ docker-compose.yml          # Meilisearch起動設定
│
├─ scripts/                        # データ管理スクリプト
│   ├─ index_meili.py              # サンプルデータをMeilisearchに投入
│   └─ data/sample_items.json       # 12個のサンプル商品データ
│
├─ backend/                        # バックエンド（API部分）
│   ├─ app/main.py                 # FastAPIアプリの起動ファイル
│   ├─ app/routers/               # APIエンドポイント群
│   │   ├─ health.py              # ヘルスチェック用API
│   │   ├─ items.py               # 商品検索・取得API
│   │   └─ stats.py               # デバッグ用統計API
│   ├─ app/services/              # ビジネスロジック層
│   │   └─ search_service.py      # Meilisearch操作
│   ├─ app/schemas/               # データ構造定義
│   │   ├─ item.py                # 商品データの型定義
│   │   └─ search.py              # 検索関連の型定義
│   └─ requirements.txt           # Python依存パッケージ一覧
│
└─ frontend/                      # フロントエンド（画面部分）
    ├─ package.json               # Node.js依存パッケージ一覧
    ├─ src/app/page.tsx           # メインページ
    ├─ src/app/search/page.tsx    # 検索結果ページ  
    ├─ src/components/            # 再利用可能なUI部品
    │   ├─ Header.tsx             # ヘッダー（サイト上部）
    │   ├─ Hero.tsx               # メインビジュアル部分
    │   └─ ProductCard.tsx        # 商品カード表示
    └─ src/lib/                   # 共通ライブラリ
        ├─ types.ts               # TypeScript型定義
        ├─ repo.ts                # データ取得の窓口
        └─ repo.mock.ts           # モックデータ版の実装
```

## 🏃‍♂️ データの流れ（初学者向け）

```
[ユーザー] 
    ↓ 「タオル」で検索
[フロントエンド (Next.js)]
    ↓ repo.ts経由でデータ要求
[現在] repo.mock.ts（ダミーデータ）
[将来] バックエンドAPI → Meilisearch → 楽天API
    ↓ 検索結果を返却
[フロントエンド]
    ↓ ProductCardで表示
[ユーザー] 商品カードを見る・クリック
```

## 🚀 初回セットアップ手順（Windows版）

> **初学者へ**: 以下の手順を順番に実行すれば、約5分でアプリが起動します。各手順で何をしているかも説明します。

### 📋 事前準備（最初に1回だけ）

以下のソフトウェアがインストールされているか確認してください：

- **Docker Desktop**: Meilisearch（検索エンジン）を動かすため
- **Python 3.8以上**: バックエンドAPI用
- **Node.js 18以上**: フロントエンド用
- **pnpm または npm**: フロントエンドの依存関係管理用

### ⚡ 5分間クイックスタート

#### ステップ1: Meilisearch起動（30秒）
```cmd
cd infra
docker compose up -d
```
> **説明**: 検索エンジンを起動します。`-d`はバックグラウンド実行の意味

#### ステップ2: Python環境準備（2分）
```cmd
# プロジェクトルートに戻る
cd ..

# 仮想環境を作成（初回のみ）
python -m venv venv

# 仮想環境を有効化
venv\Scripts\activate

# 必要なライブラリをインストール
pip install -r backend\requirements.txt
```
> **説明**: Pythonの仮想環境を作って、必要なライブラリを隔離してインストール

#### ステップ3: サンプルデータ投入（30秒）
```cmd
python scripts\index_meili.py
```
> **説明**: 12個のダミー商品データをMeilisearchに投入。検索テスト用

#### ステップ4: バックエンド起動（新しいコマンドプロンプト）
```cmd
cd backend
..\venv\Scripts\activate
python app\main.py
```
> **説明**: APIサーバーを起動。フロントエンドからの検索リクエストを処理

#### ステップ5: フロントエンド起動（さらに新しいコマンドプロンプト）
```cmd
cd frontend
pnpm install
pnpm dev
```
> **説明**: Webアプリの画面部分を起動。ブラウザで見られるようになる

### 🎯 動作確認

すべてが正常に起動すると、以下のURLでアクセスできます：

- **メインアプリ**: http://localhost:3000
- **API仕様書**: http://localhost:8000/docs  
- **Meilisearch管理画面**: http://localhost:7700

### 🔄 2回目以降の起動手順

2回目以降は環境構築済みなので、3つのコマンドプロンプトで実行するだけ：

```cmd
# ターミナル1: Meilisearch
cd infra && docker compose up -d

# ターミナル2: バックエンド
cd backend && ..\venv\Scripts\activate && python app\main.py  

# ターミナル3: フロントエンド
cd frontend && pnpm dev
```

## 🧪 動作テスト項目

以下の機能が正常に動作することを確認してください：

### ✅ メインページ（http://localhost:3000）
- [ ] ページが正常に表示される
- [ ] 「出産内祝い」「結婚内祝い」等のカテゴリボタンが表示
- [ ] 価格帯ボタン（〜3,000円等）がクリック可能  
- [ ] 価格帯選択で商品が絞り込まれる
- [ ] 検索ボックスでキーワード検索が可能

### ✅ 検索ページ（http://localhost:3000/search）  
- [ ] 12個のサンプル商品が表示される
- [ ] ソート機能（価格昇順・降順、更新日降順）が動作
- [ ] 商品カードに画像・価格・販売店が表示

### ✅ API確認（http://localhost:8000/docs）
- [ ] Swagger UI でAPI仕様が確認できる
- [ ] `/health` エンドポイントが正常応答
- [ ] `/search` エンドポイントで商品検索可能
- [ ] `/occasions` で用途一覧が取得可能

### ✅ Meilisearch（http://localhost:7700）
- [ ] Meilisearch管理画面にアクセス可能  
- [ ] `items` インデックスに12件のデータが存在

### ⚠️ よくある問題とトラブルシューティング

#### 問題1: 「このサイトにアクセスできません」
**原因**: サーバーが起動していない
**解決策**: 
```bash
# FastAPI確認
curl http://localhost:8000/health

# Next.js確認  
curl http://localhost:3000
```

#### 問題2: 「No module named 'app'」エラー
**原因**: Pythonパスまたは仮想環境の問題
**解決策**:
```bash
# 正しいディレクトリから実行
cd backend
python app/main.py  # uvicornの代替
```

#### 問題3: Node.js実行ポリシーエラー（Windows）
**原因**: PowerShell実行ポリシー
**解決策**:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### 問題4: ウイルスソフトによるブロック
**原因**: uvicornがセキュリティソフトでブロックされる
**解決策**: 
```bash
# uvicornの代わりにPython直接実行
cd backend
python app/main.py
```

#### 問題5: Docker起動失敗
**解決策**:
```bash
# Dockerサービス確認
docker --version
docker compose --version

# ポート競合確認
netstat -an | grep 7700
```

### 🔄 開発時の起動手順（2回目以降）

```bash
# ターミナル1: Meilisearch（必要に応じて）
cd infra && docker compose up -d

# ターミナル2: バックエンド  
cd backend && source ../venv/bin/activate && python app/main.py

# ターミナル3: フロントエンド
cd frontend && pnpm dev
```

### 📦 パッケージ管理

#### Python依存関係更新
```bash
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r backend/requirements.txt
```

#### Node.js依存関係更新
```bash
cd frontend
pnpm install  # または npm install
```

## 環境変数

### 共通
- `MEILI_URL`: http://127.0.0.1:7700
- `MEILI_KEY`: masterKey
- `INDEX_NAME`: items
- `TIMEZONE`: Asia/Tokyo

### フロントエンド
- `NEXT_PUBLIC_API_BASE`: http://localhost:8000

## API エンドポイント

- `GET /search`: ギフト検索
- `GET /items/{id}`: 商品詳細取得

## 対応用途

- 香典返し
- 結婚内祝い
- 出産内祝い

## 価格帯

- ～3,000円
- ～5,000円
- ～10,000円
- 10,000円～

## セキュリティ

### 環境変数管理
- **秘密情報はSecretsで管理**: API キー、パスワード、トークンなどの秘密情報は環境変数で管理し、本番環境ではGitHub SecretsやAWS Systems Manager Parameter Store等の安全な方法で管理してください。
- **環境変数ファイルのコミット禁止**: `.env*` ファイルは `.gitignore` に追加済みです。絶対にコミットしないでください。
- **`.env.example` ファイル**: 必要な環境変数は `.env.example` ファイルで明示しています。
- **認証情報の分離**: 開発環境と本番環境で異なる認証情報を使用してください。

### CORS設定
- 現在は開発用に `http://localhost:3000` を許可
- 本番環境では適切なドメインに制限してください

## 開発ルール

- 秘密鍵のコミット禁止（.envファイルをgitignoreに追加済み）
- Amazonのスクレイピング禁止
- データ更新頻度：1日1回（将来的にGitHub Actions対応予定）
- セキュリティ設定の定期的な見直し

## 💡 開発者向け情報

### アーキテクチャ設計思想

このプロジェクトは**初学者でも理解しやすく、将来の拡張に対応しやすい**構造を目指しています：

**バックエンド**: 責務分離によるクリーンアーキテクチャ
- `routers/`: HTTPリクエスト処理
- `services/`: ビジネスロジック  
- `schemas/`: データ構造定義

**フロントエンド**: Repository パターンによるデータ取得抽象化
- `repo.ts`: データ取得の統一窓口
- `repo.mock.ts`: 現在のモック実装
- `repo.api.ts`: 将来のAPI実装（未作成）

### 将来の拡張予定

1. **データソース拡張**
   - 楽天市場API連携
   - 商品データのリアルタイム更新

2. **AI機能追加**  
   - チャットボットによる商品レコメンド
   - 自然言語での商品検索

3. **ユーザー機能**
   - お気に入り商品保存
   - 検索履歴・おすすめ表示

## 📝 整理・リファクタリング完了報告（2025年10月27日）

### 実施した作業内容

#### 1. 未使用ファイル・依存の削除
- ✅ `frontend/public/` の未使用SVGファイル5個を削除
- ✅ 重複していた `next.config.js` を削除（TypeScript版を使用）  
- ✅ 重複していた `start_server.py` を削除
- ✅ 冗長な `.env.example` ファイルを統合

#### 2. フォルダ構成の再編
- ✅ `backend/app/` を `routers/`, `services/`, `schemas/` に分割
- ✅ `frontend/src/lib/` に型定義とリポジトリ層を新設
- ✅ 責務の明確な分離によりメンテナンス性を向上

#### 3. 日本語コメントの追加  
- ✅ 全ファイルの先頭に「このファイルの役割」を記載
- ✅ 主要関数にDocstring/JSDocで引数・返り値・処理内容を説明
- ✅ 行内コメントで「なぜこの実装か」を補足

#### 4. 型定義の明確化・共有
- ✅ `frontend/src/lib/types.ts` に統一的な型定義を作成
- ✅ バックエンドのスキーマとフロントエンドの型の整合性を確保
- ✅ 型安全性の向上とIDE支援の強化

#### 5. データ取得口の一本化
- ✅ `repo.ts` でデータ取得を抽象化
- ✅ `repo.mock.ts` で現在のモック実装を提供
- ✅ 将来のAPI切り替えが容易な構造を構築

#### 6. 環境変数設定の充実
- ✅ 開発・本番・将来拡張用の設定テンプレートを作成
- ✅ 各設定項目に詳細な説明コメントを付与
- ✅ セキュリティ設定の注意点を明記

#### 7. README の初学者向け刷新
- ✅ Windows前提の手順を詳細に記載
- ✅ 技術構成の役割を図解で説明
- ✅ データフローの可視化
- ✅ 動作確認項目のチェックリスト化

### 効果・改善点

**🎯 初学者にとって**:
- プロジェクト構造が一目で理解できる
- 各ファイルの役割が明確  
- Windows環境での起動手順が完備

**🛠️ 開発者にとって**:
- 責務が分離され、修正箇所の特定が容易
- 型安全性が向上し、バグの早期発見が可能
- 将来のAPI切り替えが最小変更で実現可能

**🚀 将来の拡張に向けて**:
- 楽天API導入時は `repo.api.ts` を追加するだけ
- AI機能追加時は既存コードへの影響を最小化
- 新機能開発時の学習コストを大幅削減

このリファクタリングにより、**初学者が30分で全体像を把握し、開発に参加できる**状態を実現しました。

## ライセンス

MIT License