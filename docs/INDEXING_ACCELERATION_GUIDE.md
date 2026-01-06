# インデックス加速ガイド - 新規記事を早くGoogleに登録する方法

## 現状確認 ✅

### サイトマップ生成状況
- **総ページ数**: 約50ページ
- **wedding_celebration記事**: 8件
  - `/wedding_celebration/ng-gifts`
  - `/wedding_celebration/noshi-guide`
  - `/wedding_celebration/eating-out-couple-wedding-gift` ⭐新規
  - `/wedding_celebration/space-saving-gifts` ⭐新規
  - `/wedding_celebration/cohabiting-couple-wedding-gift` ⭐新規
  - `/wedding_celebration/wedding-gift-guide` ⭐新規
  - `/wedding_celebration/pet-friendly-wedding-gift`
  - `/wedding_celebration/pregnant-couple-wedding-gift`
- **mothers_day記事**: 4件
- **fathers_day記事**: 4件
- **その他occasion記事**: 多数

### Googleインデックス状況（2026/01/06時点）
- **登録済み**: 約13ページのみ
- **未登録**: 約37ページ（新規記事含む）

## 即座に実行すべき対策

### 1. Googleサーチコンソールでサイトマップ再送信

#### 手順
1. **Search Consoleにアクセス**
   ```
   https://search.google.com/search-console
   ```

2. **サイトマップセクションに移動**
   - 左メニュー → 「サイトマップ」

3. **既存のサイトマップを確認**
   - `https://www.hare-gift.com/sitemap.xml` が登録されているか確認

4. **再送信または新規送信**
   - 既に登録済みの場合 → 「再送信」ボタンをクリック
   - 未登録の場合 → 「新しいサイトマップの追加」に `sitemap.xml` を入力して送信

5. **ステータス確認**
   - 数時間〜1日後に「成功」になることを確認
   - 検出されたURL数が約50になっているか確認

### 2. URL検査ツールで個別インデックスリクエスト

#### 優先度高: 新規作成記事（4件）

```
https://www.hare-gift.com/wedding_celebration/eating-out-couple-wedding-gift
https://www.hare-gift.com/wedding_celebration/space-saving-gifts
https://www.hare-gift.com/wedding_celebration/cohabiting-couple-wedding-gift
https://www.hare-gift.com/wedding_celebration/wedding-gift-guide
```

#### 手順（各URLごとに実行）
1. Search Console → 上部の検索バー
2. URLを入力してEnter
3. 「インデックス登録をリクエスト」ボタンをクリック
4. 1-2分待機
5. 「リクエストが送信されました」と表示されたら完了

**注意**: 1日あたり10件程度に制限されているため、最重要ページから優先的に実施

### 3. 内部リンク強化

新規記事へのリンクを増やして、クローラーが発見しやすくする：

#### 実装済み箇所 ✅
- [wedding_celebration/page.tsx](frontend/src/app/[occasion]/page.tsx) - 各記事へのリンク
- [wedding-gift-guide](frontend/src/app/wedding_celebration/wedding-gift-guide/page.tsx) - 5つの内部リンク

#### 追加推奨箇所
1. **トップページ ([page.tsx](frontend/src/app/page.tsx))**
   - 「おすすめ記事」セクションを追加
   - 新規4記事へのリンクを表示

2. **Header ([Header.tsx](frontend/src/components/Header.tsx))**
   - 既にoccasion別メニューあり ✅

3. **Footer ([Footer.tsx](frontend/src/components/Footer.tsx))**
   - 用途別リンクあり ✅
   - 「人気記事」セクションを追加検討

### 4. SNS・外部発信

#### Twitter/X
```
🎁 新記事公開！結婚祝い選びの完全ガイド

✅ 料理しない夫婦への外食派ギフト
✅ 狭い部屋に住む二人への省スペースギフト
✅ 同棲カップルに被らないギフト
✅ 保存版：結婚祝いの選び方完全ガイド

詳しくはこちら👇
https://www.hare-gift.com/wedding_celebration
#結婚祝い #ギフト選び
```

#### はてなブックマーク
- 各記事をセルフブックマーク
- タグ: `結婚祝い`, `ギフト`, `プレゼント`

#### note/ブログ
- 「結婚祝いギフトの選び方まとめ」として記事化
- 自サイトの新記事4件へのリンクを含める

### 5. robots.txtの確認

現在のrobots.txtが記事のクロールをブロックしていないか確認：

```bash
curl https://www.hare-gift.com/robots.txt
```

**期待される出力** (記事はブロックされていないこと):
```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
```

### 6. モニタリング

#### 毎日チェック
- Search Console → 「カバレッジ」
- インデックス登録済みページ数の増加を確認

#### 1週間後
- 新規4記事がインデックスされているか確認
- `site:hare-gift.com 料理しない夫婦` で検索して表示されるか

#### 2週間後
- 検索パフォーマンス（表示回数・クリック数）を確認
- 順位が上がっているか

## タイムライン予測

| 期間 | 期待される状況 |
|---|---|
| **即日〜1日** | サイトマップ送信完了 |
| **1-3日** | Googleがサイトマップをクロール開始 |
| **3-7日** | 新規記事がインデックス登録（URL検査ツール使用時） |
| **7-14日** | 新規記事がインデックス登録（自然クロール） |
| **2-4週間** | 検索結果に表示され始める |
| **1-2ヶ月** | 検索順位が安定 |

## トラブルシューティング

### Q: 1週間経ってもインデックスされない
**A**: 以下を確認
1. robots.txtで記事がブロックされていないか
2. 記事に noindex メタタグがないか（metadata.tsを確認）
3. 内部リンクが正しく設置されているか
4. 再度URL検査ツールでリクエスト送信

### Q: サイトマップのステータスが「エラー」
**A**: 
1. `https://www.hare-gift.com/sitemap.xml` にブラウザでアクセス
2. XMLが正しく表示されるか確認
3. ビルドエラーがないか確認 (`npm run build`)

### Q: 一部の記事だけインデックスされない
**A**: 
- コンテンツ品質が低いと判断された可能性
- より詳細な情報を追加
- 内部リンクを増やす
- FAQ JSONを追加（既に追加済み ✅）

## チェックリスト

- [ ] サイトマップ再送信（Search Console）
- [ ] 新規4記事のURL検査ツールリクエスト
- [ ] robots.txt確認
- [ ] SNS発信（Twitter/X、はてブ等）
- [ ] 1日後: サイトマップステータス確認
- [ ] 3日後: インデックス数確認
- [ ] 7日後: 新規記事インデックス確認
- [ ] 14日後: 検索パフォーマンス確認

## 参考リンク

- [Google - サイトマップの作成と送信](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google - URL検査ツール](https://support.google.com/webmasters/answer/9012289)
- [Google - インデックス登録のリクエスト](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
