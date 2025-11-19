# 🎁 HAREGift - ハレの日ギフト検索アプリ

結婚祝い、出産祝い、新築祝い、母の日、父の日、敬老の日など、人生の節目や季節イベントに最適なギフトを検索できるWebアプリケーションです。

## ✨ 主な機能

- 🔍 **スマート検索** - 5000件以上の商品から瞬時に検索
- 🏷️ **自動ジャンル分類** - 食品・ドリンク・日用品・カタログ・工芸品に自動分類
- 💰 **価格・レビューフィルタ** - 予算とレビュー評価での絞り込み
- 🎯 **シーン別検索** - 結婚祝い、出産祝い、母の日など用途別検索
- 📱 **レスポンシブデザイン** - PC・スマホ両対応
- 🤖 **完全自動化システム** - データ取得から更新まで自動実行

## 🛠️ 技術スタック

### フロントエンド
- **Next.js 15** - React フレームワーク
- **TypeScript** - 型安全な開発
- **TailwindCSS 4** - モダンCSS フレームワーク

### バックエンド
- **FastAPI** - 高速なPython APIフレームワーク
- **Pydantic** - データ検証・設定管理
- **Python 3.11** - メイン開発言語

### 検索エンジン・データ
- **Meilisearch** - 高速全文検索エンジン
- **楽天市場API** - 商品データ取得
- **Docker** - コンテナ化

## 🚀 クイックスタート

### 前提条件
- Docker Desktop
- Python 3.8+
- Node.js 18+

### 1. リポジトリクローン
```bash
git clone https://github.com/YOUR_USERNAME/gift-search-app.git
cd gift-search-app
```

### 2. 環境変数設定
```bash
# .envファイルを作成（.env.exampleを参考に）
cp .env.example .env

# 必要なAPIキーを設定
# RAKUTEN_APPLICATION_ID=your-rakuten-app-id
# OPENAI_API_KEY=your-openai-api-key
```

### 3. Meilisearch起動
```bash
cd infra
docker compose up -d
```

### 4. バックエンド起動
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python start_server.py
```

### 5. フロントエンド起動
```bash
cd frontend
npm install
npm run dev
```

### 6. データ投入
```bash
cd scripts
python auto_update_products.py --no-interactive
```

🎉 **アプリにアクセス**: http://localhost:3000

## 📊 システム構成

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js       │────│    FastAPI      │────│  Meilisearch    │
│  (Frontend)     │    │   (Backend)     │    │   (Search)      │
│  localhost:3000 │    │  localhost:8000 │    │  localhost:7700 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   楽天市場API    │
                       │ (商品データ取得) │
                       └─────────────────┘
```

## 🎮 使用方法

1. **基本検索**: 商品名やキーワードで検索
2. **シーン別検索**: 結婚祝い、出産祝い、母の日、父の日、敬老の日、新築祝いなどのシーンで検索
3. **フィルタ検索**: ジャンル・価格帯・レビュー評価で絞り込み
4. **ソート機能**: 価格順・レビュー順・新着順で並び替え
5. **レスポンシブ対応**: PC・スマホ・タブレット対応

詳細な使用方法は [docs/STEP3_実践ハンズオン.md](docs/STEP3_実践ハンズオン.md) を参照してください。

## 🔄 自動化システム

### データ自動更新
```bash
# 楽天APIから最新商品データを取得・分類・投入
python scripts/auto_update_products.py

# ファイル管理（古いデータの自動削除）
python scripts/manage_data_files.py --cleanup --keep 5
```

### ジャンル自動分類
- 305種類の楽天ジャンルを5つのグループに自動分類
- AIによる商品カテゴリ最適化
- 検索精度の継続的改善

## 📁 プロジェクト構造

```
gift-search-app/
├── frontend/          # Next.js フロントエンド
├── backend/           # FastAPI バックエンド
├── infra/            # Docker設定
├── scripts/          # 自動化スクリプト
├── docs/             # ドキュメント
└── data/             # 商品データ（gitignore）
```

## 🤝 開発・貢献

### ローカル開発
```bash
# 全サービス起動
docker compose -f infra/docker-compose.yml up -d
python backend/start_server.py &
npm --prefix frontend run dev
```

### テスト実行
```bash
# バックエンドテスト
cd backend && python -m pytest

# フロントエンドテスト  
cd frontend && npm test
```

## 📝 ライセンス

MIT License - 自由に使用・改変・配布できます。

## 🙏 謝辞

- [楽天市場API](https://webservice.rakuten.co.jp/) - 商品データ提供
- [Meilisearch](https://www.meilisearch.com/) - 高速検索エンジン
- [OpenAI](https://openai.com/) - AI分類機能

---

⭐ このプロジェクトが役立った場合は、ぜひスターをお願いします！