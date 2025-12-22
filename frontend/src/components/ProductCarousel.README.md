# ProductCarousel コンポーネント（Swiper.js版）

## 概要
Swiper.jsを使用した無限ループカルーセルコンポーネントです。  
dot-st / studio CLIPのトップページKVカルーセルと同等の構造・挙動を実現しています。

## 主な機能
- ✅ 無限ループスライド（loop: true）
- ✅ 中央揃えレイアウト（centeredSlides: true）
- ✅ ドットページネーション（クリック可能）
- ✅ 左右ナビゲーションボタン
- ✅ キーボード操作対応（左右キー）
- ✅ スワイプ/ドラッグ操作対応
- ✅ レスポンシブデザイン（PC/SP対応）
- ✅ トラッキング用フック搭載

## DOM構造
```html
<div id="top-kv" class="relative w-full mb-8">
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="...">
          <img src="..." alt="..." />
        </a>
      </div>
      <!-- 他のスライド -->
    </div>
  </div>
  
  <!-- カスタムナビゲーションボタン -->
  <button class="swiper-button-prev-custom"></button>
  <button class="swiper-button-next-custom"></button>
  
  <!-- カスタムページネーション -->
  <div class="swiper-pagination-custom"></div>
</div>
```

## カスタマイズポイント

### 1. 矢印ボタンの見た目を変更
**現在**: SVGアイコンを使用  
**背景画像に変更したい場合**:

```css
/* style jsx global 内で以下をコメント解除して編集 */
.swiper-button-prev-custom {
  background-image: url('/path/to/arrow-left.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
}

.swiper-button-next-custom {
  background-image: url('/path/to/arrow-right.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
}
```

### 2. ドットの色・サイズを変更
```css
/* 通常時のドット */
.swiper-pagination-bullet-custom {
  width: 8px;           /* サイズ変更 */
  height: 8px;
  background-color: #d1d5db;  /* 色変更 */
}

/* アクティブ時のドット */
.swiper-pagination-bullet-active-custom {
  width: 32px;          /* 横長サイズ変更 */
  background-color: #1f2937;  /* 色変更 */
}
```

### 3. スライドの高さを調整
```css
/* PC版 */
#top-kv .swiper-slide {
  aspect-ratio: 1 / 1;  /* 正方形 */
  /* または */
  height: 500px;        /* 固定高さ */
}

/* スマホ版 */
@media (max-width: 768px) {
  #top-kv .swiper-slide {
    max-height: 400px;  /* 高さ上限 */
  }
}
```

### 4. 左右の余白を調整
```css
/* PC版: 中央揃えの余白 */
#top-kv .swiper {
  padding-left: calc(50vw - 120px);   /* 120px = カード幅の半分 */
  padding-right: calc(50vw - 120px);
}

/* スマホ版 */
@media (max-width: 768px) {
  #top-kv .swiper {
    padding-left: 1rem;   /* 16px */
    padding-right: 1rem;
  }
}
```

### 5. カードの横幅を変更
```tsx
// ProductCarousel.tsx内で変更
<SwiperSlide
  className="!w-60 md:!w-80"  // w-60 (240px) → 任意の値に変更
>
```

### 6. 自動再生を有効化
```tsx
// Swiperコンポーネントの props で以下をコメント解除
autoplay={{
  delay: 5000,                    // 5秒ごと
  disableOnInteraction: false,    // ユーザー操作後も継続
  pauseOnMouseEnter: true,        // hover中は停止
}}
```

## データ構造
バナーデータは以下の型で管理されています：

```typescript
interface CarouselBanner {
  id: string;            // 一意のID
  href: string;          // リンク先URL
  src: string;           // 画像URL
  alt: string;           // 画像の説明文
  price: number;         // 価格
  trackingLabel?: string; // トラッキング用ラベル（オプション）
}
```

## トラッキング設定
```tsx
// handleBannerClick 関数内でGA4などのトラッキングコードを追加
const handleBannerClick = (banner: CarouselBanner) => {
  // 例: Google Analytics 4
  gtag('event', 'banner_click', {
    banner_id: banner.id,
    banner_label: banner.trackingLabel,
  });
  
  // 例: カスタムトラッキング
  console.log('Banner clicked:', banner.trackingLabel);
};
```

## レスポンシブ挙動
| 画面サイズ | カード幅 | 表示枚数 | 特徴 |
|-----------|---------|---------|------|
| PC (768px以上) | 320px | 可変 | 中央1枚を大きく、左右も見える |
| スマホ (767px以下) | 240px | 可変 | 左右のパディングを縮小 |

## 注意事項
1. **Swiperの重複スライド**: `loop: true` により、Swiperが自動的に duplicate slide を生成します（正常動作）
2. **画像の最適化**: Next.js Imageコンポーネントを使用しているため、自動的に最適化されます
3. **キーボード操作**: 左右キーでスライド移動が可能です
4. **アクセシビリティ**: aria-label を設定済みです

## トラブルシューティング

### スライドが動かない
→ Swiperのバージョンを確認: `npm list swiper`（v11以上推奨）

### ドットが表示されない
→ `.swiper-pagination-custom` のクラス名が正しいか確認

### 画像が途切れる
→ `object-contain` を `object-cover` に変更するか、aspect-ratio を調整

### 中央揃えがずれる
→ `padding-left` と `padding-right` の calc() 内の値を調整

## 参考リンク
- [Swiper.js 公式ドキュメント](https://swiperjs.com/)
- [Next.js Image 最適化](https://nextjs.org/docs/app/building-your-application/optimizing/images)
