# HAREGift データディレクトリ構造 📁

この構造は、複数のECサイトからの商品データを効率的に管理・統合するために設計されています。

## 📂 ディレクトリ構造

```
scripts/data/
├── sources/              # 各ECサイトの生データ
│   ├── rakuten/         # 楽天市場の商品データ
│   │   ├── rakuten_haregift_products_20241118_*.json
│   │   └── rakuten_uchiwai_products_*.json (旧形式)
│   ├── amazon/          # Amazon商品データ（将来用）
│   │   └── amazon_products_*.json
│   ├── yahoo/           # Yahoo!ショッピング（将来用）
│   │   └── yahoo_products_*.json
│   └── manual/          # 手動追加データ（将来用）
├── merged/              # 統合・正規化済みデータ
│   ├── all_sources_products_*.json     # 全ソース統合データ
│   └── meilisearch_ready_*.json        # Meilisearch投入用
├── cache/               # キャッシュファイル
│   ├── genre_mapping_rules.json       # ジャンル分類ルール
│   ├── genre_cache.json               # ジャンル情報キャッシュ
│   └── meili_settings.json            # Meilisearch設定
└── temp/                # 一時ファイル・処理中ファイル
    ├── fetch_progress.json            # API取得進行状況
    └── processing_*.json              # 処理中データ
```

## 🚀 データフロー

```
1. 各ECサイトAPI → sources/{site}/     # 生データ取得
2. データ正規化 → merged/               # 統合・正規化
3. Meilisearch投入 ← merged/            # 検索エンジンへ
```

## ⚙️ 自動管理ルール

### 📦 **sources/**: ソース別データ管理
- 各サイト別に最新5ファイル自動保持
- 古いファイルは自動削除（容量節約）
- 生データなので手動編集禁止

### 🔗 **merged/**: 統合データ管理  
- 統合データは最新3ファイル保持
- 重複除去・データ正規化済み
- Meilisearch投入用の最終データ

### ⚡ **cache/**: 高速化キャッシュ
- ジャンル分類ルール・設定情報
- 削除すると再生成に時間がかかる
- 手動管理（削除注意）

### 🗂️ **temp/**: 一時処理ファイル
- 処理完了後は自動削除
- API取得進行状況・処理中データ
- 手動削除禁止（処理中断の原因）

## 🎯 本番運用での最適化

### 📈 **スケーラビリティ**
- **並列処理**: 複数ソースの同時取得
- **差分更新**: 変更分のみ処理
- **バッチ処理**: 夜間自動更新

### 💾 **ストレージ効率**
- **自動削除**: 古いファイルの定期清掃
- **圧縮保存**: 大容量ファイルの最適化
- **クラウド連携**: AWS S3バックアップ

### 🔍 **監視・ログ**
- **取得統計**: ソース別件数・エラー率
- **容量監視**: ディスク使用量アラート
- **データ品質**: 重複・欠損チェック

## 📋 ファイル命名規則

### 🛒 **sources/{site}/**
```
rakuten_haregift_products_YYYYMMDD_HHMMSS.json
amazon_products_YYYYMMDD_HHMMSS.json
yahoo_products_YYYYMMDD_HHMMSS.json
```

### 🔄 **merged/**
```
all_sources_YYYYMMDD_HHMMSS.json          # 全ソース統合
meilisearch_ready_YYYYMMDD_HHMMSS.json    # 検索用最適化済み
```

### ⚡ **cache/** (固定名)
```
genre_mapping_rules.json    # ジャンル分類ルール
genre_cache.json           # ジャンル情報キャッシュ  
meili_settings.json        # Meilisearch設定
```

### 📊 **temp/** (処理時のみ)
```
fetch_progress.json               # API取得進行状況
processing_YYYYMMDD_HHMMSS.json  # 処理中データ
```

## 🚨 重要な注意事項

| フォルダ | 手動操作 | 自動管理 | 注意点 |
|---------|---------|---------|--------|
| **sources/** | ❌ 編集禁止 | ✅ 自動削除 | 生データなので変更厳禁 |
| **merged/** | ❌ 編集禁止 | ✅ 自動削除 | 処理済みデータ |
| **cache/** | ⚠️ 削除注意 | ❌ 手動管理 | 削除で再生成時間増 |
| **temp/** | ❌ 削除禁止 | ✅ 自動削除 | 処理中断の原因 |

## 🔧 トラブルシューティング

### 💥 **容量不足エラー**
```bash
# 古いファイル手動削除
python manage_data_files.py --cleanup --keep 3
```

### 🗃️ **キャッシュ破損**
```bash
# キャッシュ再生成
rm cache/genre_*.json
python analyze_genres.py --rebuild-cache
```

### 📁 **フォルダ構造確認**
```bash
# ディレクトリ一覧表示
python manage_data_files.py --list
```