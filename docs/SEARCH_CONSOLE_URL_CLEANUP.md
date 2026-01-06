# Google Search Console - 不正URL削除ガイド

## 問題の概要

`status=resolved_model&value=...` パラメータを含む不正なURLがインデックスされています。
これらは内部状態管理用のパラメータで、SEOに悪影響を与えます。

## 実施した対策

### 1. robots.txt更新 ✅

以下のルールを追加し、今後のクロールをブロック：

```txt
Disallow: /*?*value=*
Disallow: /*?*&value=*
Disallow: /*?*offset=*
Disallow: /*?*&offset=*
```

### 2. Middlewareによるクリーンアップ ✅

不正なパラメータを含むURLを自動的に正規URLに301リダイレクト：
- `frontend/src/middleware.ts` 追加
- 許可パラメータのホワイトリスト管理
- `status`, `value`, `resolved_model` などを自動除外

## Googleサーチコンソールでの削除手順

### ステップ1: 一括削除リクエスト

1. **Search Consoleにアクセス**
   - https://search.google.com/search-console

2. **「削除」セクションに移動**
   - 左メニュー → 「削除」（Removals）

3. **URLプレフィックスで一括削除**
   ```
   https://www.hare-gift.com/?status=resolved_model
   ```
   - 「一時的な削除」→ 「新しいリクエスト」
   - 上記URLを入力（パターンマッチで全ての類似URLが対象）
   - 「このプレフィックスで始まるすべてのURLを削除」を選択

4. **offsetパラメータも削除**
   ```
   https://www.hare-gift.com/?*offset=
   ```
   - 同様の手順で削除リクエスト送信

### ステップ2: robots.txt再クロール

1. **robots.txtの更新を通知**
   - Search Console → 「設定」→ 「robots.txt テスター」
   - 「送信」をクリックして、Googleに更新を通知

2. **確認**
   - 24-48時間以内に新しいrobots.txtが適用される

### ステップ3: サイトマップ再送信

1. **サイトマップを再送信**
   - Search Console → 「サイトマップ」
   - `https://www.hare-gift.com/sitemap.xml` を再送信
   - 正規URLのみがインデックスされるようになる

### ステップ4: URLパラメータツール（任意）

1. **URLパラメータを設定**
   - Search Console → 「設定」→ 「クロール統計情報」
   - 以下のパラメータを「Googlebotをクロールさせない」に設定：
     - `status`
     - `value`
     - `offset`（ページネーションとして機能するため、慎重に）

## 期待される効果

- **1-2週間**: 削除リクエストが処理され、不正URLがインデックスから削除
- **2-4週間**: Middleware効果で、新規クロール時に正規URLのみが認識される
- **1-2ヶ月**: 正規URLのみが検索結果に表示され、SEO評価が統合される

## モニタリング

### 定期的に確認すべき指標

1. **インデックス数**
   - Search Console → 「カバレッジ」
   - 不正URLの数が減少しているか

2. **クロールエラー**
   - 301リダイレクトが正しく機能しているか
   - エラー率が増加していないか

3. **検索パフォーマンス**
   - 正規URLのクリック数・表示回数が増加しているか

## 注意事項

- **削除は一時的**: 削除リクエストは6ヶ月間有効。Middleware + robots.txtで恒久的に防止する必要がある
- **301リダイレクト**: Middlewareが301リダイレクトを返すため、Googleは正規URLを優先する
- **offset パラメータ**: ページネーションで使用している場合は慎重に。現在はMiddlewareで許可されているため、必要に応じて調整

## トラブルシューティング

### 削除されない場合

1. **robots.txtを確認**
   ```bash
   curl https://www.hare-gift.com/robots.txt
   ```
   - 更新が反映されているか確認

2. **Middlewareの動作確認**
   ```bash
   curl -I "https://www.hare-gift.com/?status=resolved_model&value={}"
   ```
   - 301リダイレクトが返されるか確認

3. **再度削除リクエスト**
   - 時間が経過しても削除されない場合、再度リクエストを送信

## 関連ドキュメント

- [Google - URL削除ツール](https://support.google.com/webmasters/answer/9689846)
- [Google - robots.txt の仕様](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
