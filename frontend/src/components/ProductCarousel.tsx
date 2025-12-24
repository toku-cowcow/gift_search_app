/**
 * トップページ用商品カルーセルコンポーネント（Swiper.js版）
 * 
 * 【構造】
 * - Swiper.jsを使用した無限ループカルーセル
 * - manual_products.jsonのCarousel=1の商品を表示
 * - 画像左側・テキスト右側の横長レイアウト
 * - 表示順番号バッジ・セールスバッジ・説明文・詳細ボタンを表示
 * 
 * 【カスタマイズポイント】
 * - 文字サイズ: CSS変数 --carousel-text-size で調整可能
 * - 背景色: rose/ピンク系のグラデーション
 * - 矢印の見た目: .swiper-button-prev/next の background-image を変更
 * - ドットの色: .swiper-pagination-bullet の background-color を変更
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
  description: string;   // 商品説明
  salesBadge?: string;   // セールスバッジ（オプション）
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
          description: string;
          sales_badge?: string;
        }>;
        
        // APIレスポンスをバナーデータ形式に変換
        const bannerData: CarouselBanner[] = data.map((product) => ({
          id: product.id,
          href: product.affiliate_url,
          src: product.image_url,
          alt: product.title,
          price: product.price,
          description: product.description,
          salesBadge: product.sales_badge,
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
    <div id="top-kv" className="relative w-full mb-0 py-4">
      {/* タイトル */}
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-wider">
        BEST-SELLING ITEM
      </h2>

      {/* 
        Swiper設定
        - loop: true で無限ループ
        - centeredSlides: true で中央揃え
        - slidesPerView: 'auto' でカスタム幅に対応
        - spaceBetween: カード間の余白
        - keyboard: キーボード操作有効
      */}
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={24}
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
        className="w-full"
      >
        {/* Swiper Wrapper は自動生成される */}
        {banners.map((banner, index) => (
          <SwiperSlide
            key={banner.id}
            className="!w-[85%] md:!w-[55%] lg:!w-[55%]"
            style={{ height: 'auto' }}
          >
            {/* クリック可能なカード全体 */}
            <a
              href={banner.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleBannerClick(banner)}
              className="block w-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-rose-200 via-pink-50 to-rose-200 group relative"
            >
              <div className="flex flex-col md:flex-row h-full min-h-[500px] md:min-h-[450px]">
                {/* 左側: 画像エリア */}
                <div className="relative w-full md:w-2/5 min-h-[300px] md:min-h-full">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    draggable={false}
                    priority={index < 2}
                  />
                  
                  {/* 左上: 順番バッジ */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-4 py-3 min-w-[60px] flex items-center justify-center">
                    <span className="text-3xl font-bold text-rose-600">{index + 1}</span>
                  </div>
                </div>

                {/* 右側: テキストエリア */}
                <div className="w-full md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                  {/* 商品タイトル */}
                  <h3 className="text-lg md:text-xl lg:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {banner.alt}
                  </h3>

                {/* セールスバッジ（あれば表示） */}
                {banner.salesBadge && banner.salesBadge.trim() !== '' && (
                  <div className="mb-4">
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-full shadow-lg">
                      <span className="text-base md:text-lg lg:text-xl whitespace-nowrap">{banner.salesBadge}</span>
                    </div>
                  </div>
                )}

                  {/* 商品説明 */}
                  <div 
                    className="flex-grow mb-4 overflow-hidden"
                    style={{ fontSize: 'var(--carousel-text-size, 0.875rem)' }}
                  >
                    <p className="text-gray-700 leading-relaxed line-clamp-4 md:line-clamp-5">
                      {banner.description}
                    </p>
                  </div>

                  {/* 下部: 詳細ボタン */}
                  <div className="flex items-center justify-end">
                    {/* 詳細ボタン（装飾のみ） */}
                    <div className="bg-rose-500 text-white rounded-full p-3 md:p-4 shadow-lg group-hover:bg-rose-600 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
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
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}

        {/* カスタムナビゲーションボタン（左） */}
        <button
          className="swiper-button-prev-custom absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white rounded-full p-4 md:p-5 shadow-2xl transition-all hover:scale-110"
          aria-label="前のスライド"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-rose-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* カスタムナビゲーションボタン（右） */}
        <button
          className="swiper-button-next-custom absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white rounded-full p-4 md:p-5 shadow-2xl transition-all hover:scale-110"
          aria-label="次のスライド"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-rose-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* カスタムページネーション（ドット） */}
        <div className="swiper-pagination-custom mt-4 flex justify-center gap-2"></div>
      </Swiper>

      {/* カスタムスタイル */}
      <style jsx global>{`
        /* ===== CSS変数で文字サイズを調整可能に ===== */
        :root {
          --carousel-text-size: 0.875rem; /* 14px デフォルト */
        }

        /* 文字サイズの調整例（コメント解除して使用）
        @media (min-width: 768px) {
          :root {
            --carousel-text-size: 0.9375rem; /* 15px */
          }
        }
        @media (min-width: 1024px) {
          :root {
            --carousel-text-size: 1rem; /* 16px */
          }
        }
        */

        /* ===== ページネーション（ドット）のカスタマイズ ===== */
        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background-color: #fda4af; /* rose-300 */
          border-radius: 9999px;
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-custom:hover {
          background-color: #fb7185; /* rose-400 */
        }

        /* アクティブなドット */
        .swiper-pagination-bullet-active-custom {
          width: 40px;
          background-color: #f43f5e; /* rose-500 */
        }

        /* ===== レスポンシブ調整 ===== */
        @media (max-width: 768px) {
          #top-kv .swiper-slide {
            min-height: 550px;
          }
        }

        @media (min-width: 768px) {
          #top-kv .swiper-slide {
            min-height: 500px;
          }
        }

        @media (min-width: 1024px) {
          #top-kv .swiper-slide {
            min-height: 480px;
          }
        }

        /* ===== Swiper内部の調整 ===== */
        #top-kv .swiper {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 768px) {
          #top-kv .swiper {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (min-width: 1024px) {
          #top-kv .swiper {
            padding-left: 4rem;
            padding-right: 4rem;
          }
        }
      `}</style>
    </div>
  );
}
