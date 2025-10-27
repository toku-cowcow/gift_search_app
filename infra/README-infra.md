# Meilisearch Infrastructure

このディレクトリにはMeilisearchの検索エンジンをDockerで起動するための設定が含まれています。

## 前提条件

- Docker Desktop がインストールされ、起動していること

## Meilisearch 設定

- **バージョン**: v1.10
- **ポート**: 7700
- **マスターキー**: masterKey
- **データボリューム**: meili_data（永続化）
- **環境**: development

## 起動手順

### 1. Docker Desktop 起動
まず、Docker Desktop が起動していることを確認してください。

### 2. Meilisearch 起動
```bash
cd infra
docker compose up -d
```

### 3. 起動確認
```bash
# コンテナ状態確認
docker compose ps

# ログ確認
docker compose logs meilisearch

# ヘルスチェック
curl http://localhost:7700/health
```

期待されるレスポンス：
```json
{"status":"available"}
```

## 停止手順

```bash
# コンテナ停止
docker compose down

# データも削除する場合（注意：全データが削除されます）
docker compose down -v
```

## リセット手順

データを完全にクリアしてやり直す場合：

```bash
# コンテナ停止・削除
docker compose down

# ボリューム削除（データも削除）
docker volume rm infra_meili_data

# 再起動
docker compose up -d
```

## トラブルシューティング

### Docker Daemon が起動していない場合
```
error during connect: this error may indicate that the docker daemon is not running
```

**解決方法**: Docker Desktop を起動してください。

### ポート 7700 が既に使用されている場合
```
bind: address already in use
```

**解決方法**: 
1. 他のサービスでポート7700を使用していないか確認
2. 必要に応じてdocker-compose.ymlのポート設定を変更

### データが消えた場合
Dockerボリューム `meili_data` にデータが永続化されています。
コンテナを削除してもデータは保持されますが、ボリューム自体を削除するとデータも消えます。

## 管理コマンド

```bash
# 現在の状態確認
docker compose ps

# ログをリアルタイム表示
docker compose logs -f meilisearch

# コンテナに接続（デバッグ用）
docker compose exec meilisearch sh

# リソース使用量確認
docker stats gift_search_meilisearch
```

## API アクセス

- **管理画面**: http://localhost:7700
- **API Base URL**: http://localhost:7700
- **マスターキー**: masterKey

## 環境変数

| 変数名 | 値 | 説明 |
|--------|------|------|
| MEILI_MASTER_KEY | masterKey | API アクセス用のマスターキー |
| MEILI_ENV | development | 開発環境設定 |
| MEILI_URL | http://127.0.0.1:7700 | アプリケーションからのアクセス用URL |