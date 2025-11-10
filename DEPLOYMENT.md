# 🚀 本番環境デプロイメントガイド

## 📋 環境変数設定チェックリスト

### 1. バックエンド (.env)
本番環境では以下の設定を必ず変更してください：

```bash
# 本番用URL設定
FRONTEND_URL=https://your-domain.com
BACKEND_URL=https://api.your-domain.com
ALLOWED_ORIGINS=https://your-domain.com

# セキュリティ設定
DEBUG=false
LOG_LEVEL=INFO

# 楽天API（本番キー）
RAKUTEN_APPLICATION_ID=your-production-key
RAKUTEN_APPLICATION_SECRET=your-production-secret
RAKUTEN_AFFILIATE_ID=your-production-affiliate-id

# OpenAI API（AI機能用）
OPENAI_API_KEY=sk-your-production-openai-key

# Meilisearch（本番インスタンス）
MEILI_URL=https://your-meilisearch-host.com
MEILI_KEY=your-production-master-key
```

### 2. フロントエンド (.env.production)

```bash
# 本番APIエンドポイント
NEXT_PUBLIC_API_BASE=https://api.your-domain.com

# 本番設定
NODE_ENV=production
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

## 🔐 セキュリティのベストプラクティス

### ✅ 必須対応
- [ ] .envファイルを絶対にGitにコミットしない
- [ ] 本番環境の楽天APIキーを設定
- [ ] CORS設定で本番ドメインのみ許可
- [ ] DEBUG=falseに設定
- [ ] HTTPS必須（HTTP禁止）

### ⚠️ 推奨対応
- [ ] 環境変数をCI/CDで注入
- [ ] APIキーローテーションの実装
- [ ] Sentryなどのエラー監視導入
- [ ] ログ収集システムの構築

## 📦 デプロイメント手順

### バックエンド
1. 環境変数を本番値に更新
2. requirements.txtの依存関係インストール
3. Meilisearchの起動・データ投入
4. FastAPIサーバーの起動

### フロントエンド
1. .env.productionファイルの作成
2. `npm run build`でビルド
3. 静的ファイルの配信

## 🌐 推奨デプロイメント環境

### クラウドプロバイダー
- **Vercel** (フロントエンド)
- **Railway/Render** (バックエンド)
- **Meilisearch Cloud** (検索エンジン)

### 設定例 (Vercel)
環境変数を以下のように設定：
```
NEXT_PUBLIC_API_BASE=https://your-backend.railway.app
```

### 設定例 (Railway)
環境変数を以下のように設定：
```
PORT=8000
FRONTEND_URL=https://your-app.vercel.app
RAKUTEN_APPLICATION_ID=...
```

## 🔍 本番環境テスト

デプロイ後の動作確認項目：
- [ ] フロントエンドからバックエンドAPIへの接続
- [ ] 商品検索の動作
- [ ] AI推奨機能の動作
- [ ] CORS設定の確認
- [ ] エラーログの確認

## 📞 サポート

問題が発生した場合：
1. ログを確認
2. 環境変数の設定を再確認
3. APIキーの有効性を確認
4. ネットワーク接続を確認