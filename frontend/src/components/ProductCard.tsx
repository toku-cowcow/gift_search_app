/**
 * 商品カードコンポーネント（Server Component）
 * 
 * 個別の商品情報を視覚的に表示し、アフィリエイトリンクを提供
 */

import { GiftItem, OCCASION_MAPPINGS } from '@/lib/types';
import Image from 'next/image';

interface ProductCardProps {
  item: GiftItem;
}

// 価格フォーマット関数
const formatPrice = (price: number): string => {
  return `${price.toLocaleString('ja-JP')}円`;
};

// 用途ラベル取得関数
const getOccasionLabel = (occasion: string): string => {
  for (const [key, value] of Object.entries(OCCASION_MAPPINGS)) {
    if (key === occasion) {
      return value;
    }
  }
  return occasion;
};

// 用途バッジの色を決定する関数
const getOccasionColor = (occasion: string) => {
  switch (occasion) {
    case 'funeral_return':
      return 'bg-gray-800 text-white';
    case 'wedding_return':
      return 'bg-blue-600 text-white';
    case 'baby_return':
      return 'bg-emerald-600 text-white';
    default:
      return 'bg-gray-600 text-white';
  }
};

// 星評価表示コンポーネント（小数点精密対応）
const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    const fillPercentage = Math.max(0, Math.min(1, rating - i + 1));
    
    if (fillPercentage === 0) {
      // 空の星
      stars.push(
        <span key={i} className="text-gray-300 font-medium">☆</span>
      );
    } else if (fillPercentage === 1) {
      // 満点の星
      stars.push(
        <span key={i} className="text-yellow-500 font-medium">★</span>
      );
    } else {
      // 部分的な星（小数点対応）
      stars.push(
        <span key={i} className="relative inline-block text-yellow-500 font-medium">
          <span 
            className="absolute inset-0 overflow-hidden text-yellow-500"
            style={{ width: `${fillPercentage * 100}%` }}
          >
            ★
          </span>
          <span className="text-gray-300">☆</span>
        </span>
      );
    }
  }

  return <span className="inline-flex items-center">{stars}</span>;
};

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* 商品画像 */}
      <div className="relative aspect-[4/3] bg-gray-100 max-w-[160px] mx-auto mt-4">
        <Image
          src={item.image_url}
          alt={item.title}
          fill
          className="aspect-[4/3] object-cover"
          sizes="240px"
        />
        
        {/* 用途バッジ - 複数対応 */}
        <div className="absolute -top-2 -left-14 z-10 flex flex-col gap-1">
          {item.occasions && item.occasions.length > 1 ? (
            // 複数カテゴリの場合
            item.occasions.map((occasion: string, index: number) => (
              <span key={occasion} className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getOccasionColor(occasion)}`}>
                {getOccasionLabel(occasion)}
              </span>
            ))
          ) : (
            // 単一カテゴリの場合（既存の動作）
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getOccasionColor(item.occasion)}`}>
              {getOccasionLabel(item.occasion)}
            </span>
          )}
        </div>

        {/* ソースバッジ - 画像に半分かかる位置（右上） */}
        <div className="absolute -top-2 -right-6 z-10">
          <span className="inline-flex items-center px-2 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
            {item.source}
          </span>
        </div>
      </div>

      {/* 商品情報 */}
      <div className="p-4">
        {/* 商品名 */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight">
          {item.title}
        </h3>

        {/* 販売者 */}
        <div className="mb-3">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {item.merchant}
          </span>
        </div>

        {/* 価格 */}
        <div className="mb-2">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(item.price)}
          </span>
        </div>

        {/* 評価とレビュー */}
        <div className="mt-1 mb-2 text-sm flex items-center">
          {item.review_count && item.review_count > 0 ? (
            <>
              <StarRating rating={item.review_average || 0} />
              <span className="ml-2 text-gray-500 text-xs">
                {(item.review_average || 0).toFixed(1)} ({item.review_count})
              </span>
            </>
          ) : (
            <>
              <StarRating rating={0} />
              <span className="ml-2 text-gray-400 text-xs">(0)</span>
            </>
          )}
        </div>

        {/* アクションボタン */}
        <div className="flex gap-2">
          {/* 購入ボタン */}
          <a
            href={item.affiliate_url}
            target="_blank"
            rel="nofollow noreferrer"
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center"
          >
            購入する
          </a>
        </div>
      </div>
    </div>
  );
}