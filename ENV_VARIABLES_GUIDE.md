# 🔧 環境変数統一ガイド

## 🎯 統一方針

以下の方針で環境変数を統一しました：

### 📁 ファイル構成
- **`.env`** - ローカル開発用（Git管理しない）
- **`.env.example`** - テンプレート用（Git管理する、値は空）
- **本番環境** - Amplify/Elastic Beanstalk の環境変数で管理

### 🚫 削除対象
- ~~`.env.production`~~
- ~~`.env.local`~~
- ~~`LOCAL_*`系の環境変数~~

## 📋 必須環境変数一覧

### バックエンド (.env)
```bash
# アプリケーション基本設定
APP_NAME=UchiGift API
APP_VERSION=1.0.0
DEBUG=true
HOST=0.0.0.0
PORT=8000

# URL設定
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:8000
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# MeiliSearch設定
MEILI_URL=http://127.0.0.1:7700
MEILI_KEY=masterKey
INDEX_NAME=items
SEARCH_SOURCE=meili

# 楽天API設定
RAKUTEN_APPLICATION_ID=your-rakuten-app-id
RAKUTEN_APPLICATION_SECRET=your-rakuten-secret
RAKUTEN_AFFILIATE_ID=your-affiliate-id
RAKUTEN_API_ENDPOINT=https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601
RAKUTEN_GENRE_API_ENDPOINT=https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20120723

# OpenAI API設定
OPENAI_API_KEY=sk-your-openai-key
OPENAI_MODEL=gpt-4o-mini
OPENAI_MAX_TOKENS=1000

# その他設定
TIMEZONE=Asia/Tokyo
LOG_LEVEL=INFO
```

### フロントエンド (.env.local)
```bash
# バックエンド API設定
NEXT_PUBLIC_API_BASE=http://localhost:8000

# アプリケーション設定
NEXT_PUBLIC_APP_NAME=UchiGift
NEXT_PUBLIC_APP_VERSION=1.0.0
NODE_ENV=development

# 機能フラグ
NEXT_PUBLIC_ENABLE_AI_FEATURES=true
NEXT_PUBLIC_ENABLE_ANALYTICS=false

# 外部サービス（オプション）
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
NEXT_PUBLIC_SENTRY_DSN=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🌐 本番環境設定

### AWS Amplify（フロントエンド）
```bash
NEXT_PUBLIC_API_BASE=https://your-backend-url.com
NEXT_PUBLIC_APP_NAME=UchiGift
NEXT_PUBLIC_APP_VERSION=1.0.0
NODE_ENV=production
NEXT_PUBLIC_ENABLE_AI_FEATURES=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### AWS Elastic Beanstalk（バックエンド）
```bash
APP_NAME=UchiGift API
APP_VERSION=1.0.0
DEBUG=false
HOST=0.0.0.0
PORT=8000

FRONTEND_URL=https://your-frontend-domain.com
BACKEND_URL=https://your-backend-domain.com
ALLOWED_ORIGINS=https://your-frontend-domain.com

MEILI_URL=http://44.192.31.106:7700
MEILI_KEY=your-production-master-key
INDEX_NAME=items
SEARCH_SOURCE=meili

RAKUTEN_APPLICATION_ID=your-production-app-id
RAKUTEN_APPLICATION_SECRET=your-production-secret
RAKUTEN_AFFILIATE_ID=your-production-affiliate-id
RAKUTEN_API_ENDPOINT=https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601

OPENAI_API_KEY=sk-your-production-openai-key
OPENAI_MODEL=gpt-4o-mini
OPENAI_MAX_TOKENS=1000

TIMEZONE=Asia/Tokyo
LOG_LEVEL=INFO
```

## ✅ セキュリティ改善点

### ✅ 完了済み
1. **ハードコード値の完全排除** - 全てのURLとAPIエンドポイントを環境変数化
2. **LOCAL_変数の削除** - 複雑な環境判定ロジックをシンプル化
3. **統一された環境変数名** - 一貫性のある命名規則
4. **適切な.gitignore設定** - 機密情報の誤コミット防止

### ⚠️ 注意点
- `.env`ファイルは絶対にGitにコミットしない
- 本番環境では必ず全ての環境変数を設定する
- `NEXT_PUBLIC_`で始まる変数はブラウザに公開される

## 🔧 セットアップ手順

### ローカル開発
1. `cp .env.example .env`
2. `cp frontend/.env.example frontend/.env.local`
3. 実際の値に書き換え
4. 開発サーバー起動

### 本番デプロイ
1. AWS Amplify/Elastic Beanstalk の環境変数設定画面で設定
2. `.env`ファイルは使用しない
3. 必要に応じて環境変数の値を更新

これで一貫性があり、セキュアで管理しやすい環境変数運用が完成しました。