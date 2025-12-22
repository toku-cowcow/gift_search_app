/**
 * トップページ用商品カルーセルコンポーネント（Swiper.js版）
 * 
 * 【構造】
 * - Swiper.jsを使用した無限ループカルーセル
 * - manual_products.jsonのCarousel=1の商品を表示
 * - ドットページネーション + 左右ナビゲーション付き
 * 
 * 【カスタマイズポイント】
 * - 矢印の見た目: .swiper-button-prev/next の background-image を変更
 * - ドットの色: .swiper-pagination-bullet の background-color を変更
 * - スライド高さ: .swiper-slide の aspect-ratio を調整
 * - 余白: px-[calc(50vw-120px)] の値を調整
 * - 自動再生: autoplayオプションをコメント解除
 */

"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
// Swiperコアとモジュール
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';

// Swiperスタイル
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// バナーデータの型定義
interface CarouselBanner {
  id: string;
  href: string;          // リンク先URL（affiliate_url）
  src: string;           // 画像URL（image_url）
  alt: string;           // 画像の説明（title）
  price: number;         // 価格
  trackingLabel?: string; // トラッキング用ラベル（将来の拡張用）
}

export default function ProductCarousel() {
  const [banners, setBanners] = useState<CarouselBanner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // カルーセル対象商品を取得してバナーデータに変換
    const fetchCarouselProducts = async () => {
      try {
        const response = await fetch('/api/carousel-products');
        if (!response.ok) {
          throw new Error('商品の取得に失敗しました');
        }
        const data = await response.json() as Array<{
          id: string;
          title: string;
          image_url: string;
          affiliate_url: string;
          price: number;
        }>;
        
        // APIレスポンスをバナーデータ形式に変換
        const bannerData: CarouselBanner[] = data.map((product) => ({
          id: product.id,
          href: product.affiliate_url,
          src: product.image_url,
          alt: product.title,
          price: product.price,
          trackingLabel: `carousel-product-${product.id}`,
        }));
        
        setBanners(bannerData);
        setIsLoading(false);
      } catch (error) {
        console.error('カルーセル商品の取得に失敗:', error);
        setIsLoading(false);
      }
    };

    fetchCarouselProducts();
  }, []);

  // クリックトラッキング用フック（将来の拡張用）
  const handleBannerClick = (banner: CarouselBanner) => {
    // ここにGA4やその他のトラッキングコードを追加可能
    console.log('Banner clicked:', banner.trackingLabel);
  };

  // ローディング中または商品がない場合は何も表示しない
  if (isLoading || banners.length === 0) {
    return null;
  }

  return (
    <div id="top-kv" className="relative w-full mb-8">
      {/* 
        Swiper設定
        - loop: true で無限ループ
        - centeredSlides: true で中央揃え
        - slidesPerView: 'auto' でカスタム幅に対応
        - spaceBetween: カード間の余白
        - keyboard: キーボード操作有効
        - 自動再生（オプション）: 下記のautoplayをコメント解除
      */}
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={16}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{
          el: '.swiper-pagination-custom',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }}
        keyboard={{
          enabled: true,
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false, // ユーザー操作後も継続
        //   pauseOnMouseEnter: true,      // hover中は停止
        // }}
        className="w-full"
      >
        {/* Swiper Wrapper は自動生成される */}
        {banners.map((banner) => (
          <SwiperSlide
            key={banner.id}
            className="!w-60 md:!w-80"
            style={{ height: 'auto' }}
          >
            {/* クリック可能なバナー */}
            <a
              href={banner.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleBannerClick(banner)}
              className="block w-full aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white group"
            >
              {/* 画像エリア（レイアウトシフト防止） */}
              <div className="relative w-full h-[80%]">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  sizes="(max-width: 768px) 240px, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  draggable={false}
                  priority={banners.indexOf(banner) < 3}
                />
              </div>

              {/* 商品情報 */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-white">
                <h3 className="text-xs font-bold text-gray-800 truncate mb-1">
                  {banner.alt}
                </h3>
                <p className="text-sm font-bold text-red-600">
                  ¥{banner.price.toLocaleString()}
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}

        {/* カスタムナビゲーションボタン（左） */}
        <button
          className="swiper-button-prev-custom absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all hover:scale-110"
          aria-label="前のスライド"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* カスタムナビゲーションボタン（右） */}
        <button
          className="swiper-button-next-custom absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all hover:scale-110"
          aria-label="次のスライド"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* カスタムページネーション（ドット） */}
        <div className="swiper-pagination-custom mt-6 flex justify-center gap-2"></div>
      </Swiper>

      {/* カスタムスタイル */}
      <style jsx global>{`
        /* ===== ページネーション（ドット）のカスタマイズ ===== */
        .swiper-pagination-bullet-custom {
          width: 8px;
          height: 8px;
          background-color: #d1d5db; /* gray-300 */
          border-radius: 9999px;
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-custom:hover {
          background-color: #9ca3af; /* gray-400 */
        }

        /* アクティブなドット */
        .swiper-pagination-bullet-active-custom {
          width: 32px;
          background-color: #1f2937; /* gray-800 */
        }

        /* ===== ナビゲーションボタンのカスタマイズ ===== */
        /* 背景画像を使いたい場合は、以下のようにbackground-imageを設定 */
        /*
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
        */

        /* ===== レスポンシブ調整 ===== */
        @media (max-width: 768px) {
          /* スマホでは高さを制限 */
          #top-kv .swiper-slide {
            max-height: 400px;
          }
        }

        /* ===== Swiper内部の調整 ===== */
        #top-kv .swiper {
          padding-left: calc(50vw - 120px);
          padding-right: calc(50vw - 120px);
        }

        @media (max-width: 768px) {
          #top-kv .swiper {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
