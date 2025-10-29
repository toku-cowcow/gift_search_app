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
    case 'new_home':
      return 'bg-purple-600 text-white';
    case 'recovery':
      return 'bg-orange-600 text-white';
    default:
      return 'bg-gray-600 text-white';
  }
};

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* 商品画像 */}
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image
          src={item.image_url}
          alt={item.title}
          fill
          className="aspect-[4/3] object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* 用途バッジ */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getOccasionColor(item.occasion)}`}>
            {getOccasionLabel(item.occasion)}
          </span>
        </div>

        {/* ソースバッジ */}
        <div className="absolute top-3 right-3">
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
        <div className="mb-4">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(item.price)}
          </span>
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