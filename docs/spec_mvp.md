# Gift Search App MVP 仕様書

## プロジェクト概要

**リポジトリ名**: gift_search_app  
**目的**: 冠婚葬祭ギフト検索のMVPを作成する。楽天APIは後から実装し、まずはダミーデータ（JSON）をMeilisearchに投入して検索できるサイトを構築する。

## 技術スタック

- **フロントエンド**: Next.js (TypeScript)
- **バックエンド**: FastAPI (Python)
- **検索エンジン**: Meilisearch (Docker)
- **データベース**: なし

## モノレポ構成

```
gift_search_app/
├── docs/         # 仕様メモ
├── infra/        # MeilisearchをDockerで起動
├── scripts/      # 収集/正規化/インデックス投入（今はダミー）
├── backend/      # FastAPI（/search, /items/{id}）
└── frontend/     # Next.js（トップ/検索ページ/カード）
```

## 前提・制約

### 対応用途
- 香典返し
- 結婚内祝い
- 出産内祝い

### 価格帯
- ～3,000円
- ～5,000円
- ～10,000円
- 10,000円～

### 更新頻度
- 1日1回（後でGitHub Actions対応）

### 最小スキーマ
以下のフィールドを必須とする：
- `id`: 商品ID
- `title`: 商品タイトル
- `price`: 価格
- `image_url`: 商品画像URL
- `merchant`: 販売業者
- `source`: データソース
- `url`: 商品URL
- `affiliate_url`: アフィリエイトURL
- `occasion`: 用途（香典返し/結婚内祝い/出産内祝い）
- `updated_at`: 更新日時

### Meilisearch設定
- **インデックス名**: `items`
- **フィルタ可能フィールド**: `occasion`, `price`
- **ソート可能フィールド**: `updated_at`, `price`

## 環境変数

### 共通環境変数
- `MEILI_URL`: http://127.0.0.1:7700
- `MEILI_KEY`: masterKey
- `INDEX_NAME`: items
- `TIMEZONE`: Asia/Tokyo

### フロントエンド固有
- `NEXT_PUBLIC_API_BASE`: http://localhost:8000

## 禁止事項

1. **秘密鍵のコミット禁止**: `.env`ファイルを`.gitignore`に追加する
2. **Amazonスクレイピング禁止**: Amazon商品のスクレイピングは行わない

## 成果物の要件

ローカル環境で以下の手順で動作すること：

1. `docker compose up -d` でMeilisearch起動
2. `pnpm dev` でフロントエンド起動
3. `uvicorn main:app --reload` でバックエンド起動
4. 検索機能が動作し、カードから外部（ダミー）アフィリエイトURLへ遷移できる

## API仕様

### エンドポイント

#### 1. 検索API
- **URL**: `GET /search`
- **パラメータ**:
  - `q`: 検索クエリ（任意）
  - `occasion`: 用途フィルタ（任意）
  - `price_max`: 最大価格フィルタ（任意）
  - `limit`: 取得件数（デフォルト: 20）
  - `offset`: オフセット（デフォルト: 0）

#### 2. 商品詳細API
- **URL**: `GET /items/{id}`
- **パラメータ**:
  - `id`: 商品ID（必須）

## フロントエンド仕様

### ページ構成
1. **トップページ**: 検索フォームと人気商品表示
2. **検索結果ページ**: フィルタ機能付き商品一覧
3. **商品カード**: 商品情報表示とアフィリエイトリンク

### 機能要件
- レスポンシブデザイン
- 用途・価格帯でのフィルタリング
- 商品カードからのアフィリエイトURL遷移

## データ管理

### ダミーデータ
初期段階では、JSON形式のダミーデータを使用してMeilisearchにインデックスを作成する。

### データ更新
- スクリプトによる定期的なデータ更新（1日1回）
- 将来的にGitHub Actionsによる自動化

## 開発フェーズ

### MVP段階（現在）
1. ダミーデータでの検索機能実装
2. 基本的なUI/UX構築
3. アフィリエイトURL遷移機能

### 次期段階
1. 楽天APIとの連携
2. リアルタイムデータ更新
3. 高度なフィルタリング機能