# Google Search Console 問題修正ガイド

## 修正日
2025年12月18日

## 検出された問題

### 1. 重複ページ
- **問題**: クエリパラメータ付きURLが重複として検出
- **例**: 
  - `https://www.hare-gift.com/?status=resolved_model&value={}&offset=144`
  - `https://www.hare-gift.com/?status=resolved_model&value={}`

### 2. クロール済み - インデックス未登録
- **問題**: Next.jsの静的ファイルがクロールされている
- **例**:
  - フォントファイル: `/_next/static/media/*.woff2`
  - アイコン: `/apple-icon?*`

## 実施した修正

### 1. robots.txt の更新
**ファイル**: `frontend/public/robots.txt`

```txt
# すべての検索エンジンに対する設定
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /*?status=*
Disallow: /*?*&status=*
Disallow: /apple-icon
Disallow: /icon
Disallow: /*.woff2$
Disallow: /*.woff$
Disallow: /*.ttf$
```

**効果**:
- ✅ 静的ファイル（フォント、アイコン）をクロール対象から除外
- ✅ `status`パラメータを含むURLをブロック
- ✅ `_next`ディレクトリ全体をブロック

### 2. Next.js リダイレクト設定
**ファイル**: `frontend/next.config.ts`

```typescript
async redirects() {
  return [
    {
      source: '/',
      has: [
        {
          type: 'query',
          key: 'status',
        },
      ],
      destination: '/',
      permanent: true,
    },
  ];
}
```

**効果**:
- ✅ `status`パラメータ付きURLを正規URL(`/`)へ301リダイレクト
- ✅ 重複ページ問題の解消

### 3. Canonical URL の動的設定
**ファイル**: `frontend/src/app/page.tsx`

```typescript
export async function generateMetadata({ searchParams = {} }: HomePageProps): Promise<Metadata> {
  // ... 既存のコード

  return {
    ...metadata,
    alternates: {
      canonical: 'https://www.hare-gift.com',
    },
  };
}
```

**効果**:
- ✅ すべてのページで正規URLを明示的に指定
- ✅ クエリパラメータによる重複を防止

## 確認方法

### 1. robots.txt の確認
```bash
curl https://www.hare-gift.com/robots.txt
```

### 2. リダイレクトの確認
```bash
curl -I "https://www.hare-gift.com/?status=resolved_model&value={}"
# Expected: 301 Moved Permanently → https://www.hare-gift.com/
```

### 3. Canonical URL の確認
ブラウザで任意のページを開き、HTMLソースを表示:
```html
<link rel="canonical" href="https://www.hare-gift.com/" />
```

## Google Search Console での対応

### 1. 修正のインデックス登録
1. Search Console にログイン
2. 「URL検査」ツールで `https://www.hare-gift.com/` を検査
3. 「インデックス登録をリクエスト」をクリック

### 2. robots.txt の再クロール
1. 「設定」→「クロール」→「robots.txt テスター」
2. 新しい robots.txt が反映されていることを確認
3. 「送信」をクリック

### 3. 除外URLの監視
- 数日〜数週間後に「カバレッジ」レポートを確認
- 「除外」タブで問題が減少していることを確認

## 予想される効果

### 短期（1〜2週間）
- ❌ フォントファイルのクロール停止
- ❌ `status`パラメータ付きURLの新規インデックス停止

### 中期（1〜2ヶ月）
- ✅ 既存の重複ページがインデックスから削除
- ✅ Canonical URLによる正規化が完了
- ✅ クロールバジェットの最適化

### 長期（3ヶ月以降）
- ✅ Search Consoleのエラー数が大幅に減少
- ✅ 重要なページのインデックス率向上
- ✅ SEOパフォーマンスの改善

## 注意事項

1. **既存のインデックスは即座に削除されない**
   - Googleが再クロールするまで時間がかかる
   - 最大で数週間〜数ヶ月かかる場合がある

2. **robots.txt は絶対パスで指定**
   - 正規表現は使えない
   - パターンマッチングは限定的

3. **Canonical URLは全ページで統一**
   - 記事ページなど、個別URLを持つページは個別に設定が必要

## 追加の推奨設定

### 記事ページのCanonical URL
各記事ページで個別にcanonical URLを設定する必要があります。

**例**: `frontend/src/app/articles/[occasion]/[article-slug]/page.tsx`
```typescript
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  return {
    // ... 既存のメタデータ
    alternates: {
      canonical: `https://www.hare-gift.com/articles/${params.occasion}/${params['article-slug']}`,
    },
  };
}
```

### サイトマップの定期更新
- 新しい記事を追加したら sitemap.ts を更新
- Search Console で新しいサイトマップを送信

## 参考リンク

- [Google Search Console ヘルプ](https://support.google.com/webmasters/)
- [robots.txt の仕様](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- [Canonical URL について](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Next.js メタデータ API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
