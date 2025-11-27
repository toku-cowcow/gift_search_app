# auto_update_products.py 使用ガイド

## 概要

`auto_update_products.py`は楽天商品データと手動商品データを統合してMeiliSearchに自動投入するスクリプトです。

## 新機能：データ統合

### ステップ4.5: データ統合

楽天APIから取得した商品データと`manual_products.json`の手動商品データを自動的に統合します。

**処理フロー:**
1. 楽天商品データ取得 → `rakuten_haregift_products_YYYYMMDD_HHMMSS.json`
2. 手動商品データ読み込み → `manual_products.json`
3. 両データを統合 → `merged_products_YYYYMMDD_HHMMSS.json`
4. 統合データをMeiliSearchにインデックス

**統合データの特徴:**
- `source`フィールドで区別（`rakuten` or `manual`）
- IDの重複チェック不要（異なるプレフィックス）
- 一度のインデックス処理で完了

## 使用方法

### 基本的な使い方

```bash
# 完全自動更新（推奨）
python auto_update_products.py

# 既存の楽天データを使用（API取得スキップ）
python auto_update_products.py --no-fetch

# 完全自動モード（インタラクティブなし）
python auto_update_products.py --no-interactive

# バックアップファイル保持数指定
python auto_update_products.py --keep-backups 10
```

### 実行ステップ

**ステップ0:** ファイルクリーンアップ
- 古い商品データファイルを削除
- デフォルト5個のバックアップを保持

**ステップ1:** 楽天商品データ取得
- 楽天APIから最新商品を取得
- `data/sources/rakuten/`に保存

**ステップ2:** ジャンル分析
- 未マッピングジャンルを検出
- カテゴリ別に分類

**ステップ3:** 自動マッピング
- 信頼度の高いジャンルを自動分類
- `genre_mapping_rules.json`を更新

**ステップ4:** インタラクティブマッピング（オプション）
- 未分類ジャンルを手動確認
- `--no-interactive`でスキップ可能

**ステップ4.5:** データ統合 ⭐NEW⭐
- 楽天データと手動データを統合
- `data/sources/merged/`に保存
- 空のエントリは自動除外

**ステップ5:** MeiliSearch再インデックス
- 既存インデックスを削除
- 統合データを投入
- 分類結果を確認

## 手動商品データの要件

`manual_products.json`のフォーマット：

```json
{
  "id": "vendor_001",           // 必須: 英数字+ハイフン+アンダースコアのみ
  "title": "商品名",
  "price": 3000,
  "image_url": "https://...",
  "merchant": "販売元",
  "source": "manual",            // 必須: "manual"固定
  "url": "https://...",
  "affiliate_url": "https://...",
  "occasion": "mothers_day",     // 必須: 主用途
  "updated_at": 1732406400,      // UNIXタイムスタンプ
  "review_count": 0,
  "review_average": 0.0,
  "description": "商品説明",     // 必須: AI推薦に使用
  "occasions": ["mothers_day"],  // 必須: 用途リスト
  "genre_group": "food"          // 必須: food/drink/home/catalog/craft
}
```

**重要:**
- `id`はスペースを含まないこと（例: `INC_MARKET_001` ✅ `INC MARKET_001` ❌）
- `source`は必ず`"manual"`とすること
- `review_count`と`review_average`は数値（0, 0.0）、空文字列不可
- 空のテンプレート行は自動的にスキップされます

## トラブルシューティング

### データ統合に失敗する

**原因:** `manual_products.json`にフォーマットエラーがある

**解決策:**
1. JSONフォーマットが正しいか確認
2. IDにスペースが含まれていないか確認
3. 空のテンプレート行を削除

### 手動商品が表示されない

**原因:** `updated_at`が古い、またはフィルタ条件に合わない

**解決策:**
1. `updated_at`を最新のタイムスタンプに更新
2. `occasion`と`occasions`が正しく設定されているか確認

### インデックスエラー

**原因:** MeiliSearchの設定が正しくない

**解決策:**
1. `.env`ファイルの`MEILI_URL`と`MEILI_KEY`を確認
2. MeiliSearchが起動しているか確認（`docker compose ps`）

## ファイル構造

```
data/
├── sources/
│   ├── rakuten/
│   │   └── rakuten_haregift_products_*.json
│   ├── others/
│   │   └── manual_products.json
│   └── merged/
│       └── merged_products_*.json  ← 統合データ
└── cache/
    └── genre_mapping_rules.json
```

## ログ確認

実行ログは標準出力に表示されます：

```
[2025-11-25 10:00:00] INFO: HAREGift 商品データ自動更新システム開始
[2025-11-25 10:00:05] INFO: ステップ1: 楽天商品データ取得開始
[2025-11-25 10:05:00] INFO: 楽天商品: 4554件
[2025-11-25 10:05:01] INFO: ステップ4.5: データ統合開始
[2025-11-25 10:05:02] INFO: 手動商品: 35件
[2025-11-25 10:05:03] INFO: 統合後: 4589件
[2025-11-25 10:05:04] INFO: ステップ4.5完了: 楽天4554件 + 手動35件 = 統合4589件
```

## おすすめの運用方法

### 定期実行（推奨）

```bash
# 毎日午前3時に完全自動実行
0 3 * * * cd /path/to/scripts && python auto_update_products.py --no-interactive
```

### 手動商品追加時

```bash
# 既存の楽天データを使用して手動商品のみ更新
python auto_update_products.py --no-fetch --no-interactive
```

### ジャンル確認が必要な時

```bash
# インタラクティブモードで実行
python auto_update_products.py
```
