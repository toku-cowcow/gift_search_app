/**
 * 蝠・刀繧ｫ繝ｼ繝峨さ繝ｳ繝昴・繝阪Φ繝・
 * 
 * 縺薙・繧ｳ繝ｳ繝昴・繝阪Φ繝医・蠖ｹ蜑ｲ:
 * - 蛟句挨縺ｮ蝠・刀諠・ｱ繧定ｦ冶ｦ夂噪縺ｫ鬲・鴨逧・↓陦ｨ遉ｺ
 * - 蝠・刀逕ｻ蜒上∽ｾ｡譬ｼ縲∫畑騾斐∬ｲｩ螢ｲ蠎礼ｭ峨・諠・ｱ陦ｨ遉ｺ
 * - 蝠・刀隧ｳ邏ｰ繝壹・繧ｸ縺ｸ縺ｮ繝ｪ繝ｳ繧ｯ縺ｨ繧｢繝輔ぅ繝ｪ繧ｨ繧､繝医Μ繝ｳ繧ｯ繧呈署萓・
 * - 縺頑ｰ励↓蜈･繧頑ｩ溯・・亥ｰ・擂逧・↓繝ｭ繝ｼ繧ｫ繝ｫ繧ｹ繝医Ξ繝ｼ繧ｸ菫晏ｭ倅ｺ亥ｮ夲ｼ・
 */

import { GiftItem, OccasionKey } from '@/lib/types';
import { formatPrice, truncateText } from '@/lib/utils';
import { OCCASIONS } from '@/constants/filters';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HeartIcon, ShoppingBagIcon, EyeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

/**
 * ProductCard繧ｳ繝ｳ繝昴・繝阪Φ繝医・繝励Ο繝代ユ繧｣
 */
interface ProductCardProps {
  item: GiftItem;  // 陦ｨ遉ｺ縺吶ｋ蝠・刀繝・・繧ｿ
}

/**
 * 逕ｨ騾斐く繝ｼ繧呈律譛ｬ隱槭Λ繝吶Ν縺ｫ螟画鋤縺吶ｋ髢｢謨ｰ
 * 
 * @param occasion 逕ｨ騾斐く繝ｼ
 * @returns 譌･譛ｬ隱槭Λ繝吶Ν
 */
const getOccasionLabel = (occasion: OccasionKey): string => {
  const occasionData = OCCASIONS.find(occ => occ.key === occasion);
  return occasionData ? occasionData.label : occasion;
};

/**
 * 蝠・刀繧ｫ繝ｼ繝峨さ繝ｳ繝昴・繝阪Φ繝・
 * 
 * @param item 陦ｨ遉ｺ縺吶ｋ蝠・刀縺ｮ諠・ｱ
 * @returns 蝠・刀繧ｫ繝ｼ繝峨・JSX隕∫ｴ
 * 
 * 讖溯・:
 * - 蝠・刀逕ｻ蜒上・陦ｨ遉ｺ・医お繝ｩ繝ｼ譎ゅ・繝励Ξ繝ｼ繧ｹ繝帙Ν繝繝ｼ陦ｨ遉ｺ・・
 * - 縺頑ｰ励↓蜈･繧翫・繧ｿ繝ｳ・育樟蝨ｨ縺ｯ繝ｭ繝ｼ繧ｫ繝ｫ迥ｶ諷九・縺ｿ・・
 * - 逕ｨ騾泌挨縺ｮ濶ｲ蛻・￠繝舌ャ繧ｸ陦ｨ遉ｺ
 * - 蝠・刀隧ｳ邏ｰ縺ｸ縺ｮ繝ｪ繝ｳ繧ｯ縺ｨ繧｢繝輔ぅ繝ｪ繧ｨ繧､繝医Μ繝ｳ繧ｯ
 */
export default function ProductCard({ item }: ProductCardProps) {
  // 逕ｻ蜒剰ｪｭ縺ｿ霎ｼ縺ｿ繧ｨ繝ｩ繝ｼ迥ｶ諷具ｼ郁｡ｨ遉ｺ蛻・ｊ譖ｿ縺育畑・・
  const [imageError, setImageError] = useState(false);
  // 縺頑ｰ励↓蜈･繧顔憾諷具ｼ亥ｰ・擂縺ｯ繝ｭ繝ｼ繧ｫ繝ｫ繧ｹ繝医Ξ繝ｼ繧ｸ繧БPI縺ｨ騾｣謳ｺ莠亥ｮ夲ｼ・
  const [isFavorite, setIsFavorite] = useState(false);

  /**
   * 逕ｨ騾斐↓蠢懊§縺溘ヰ繝・ず縺ｮ濶ｲ繧呈ｱｺ螳壹☆繧矩未謨ｰ
   * 
   * @param occasion 逕ｨ騾斐く繝ｼ
   * @returns TailwindCSS縺ｮ繧ｯ繝ｩ繧ｹ蜷肴枚蟄怜・
   */
  const getOccasionColor = (occasion: string) => {
    switch (occasion) {
      case 'funeral_return':
        return 'bg-neutral-800 text-white';
      case 'wedding_return':
        return 'bg-blue-600 text-white';
      case 'baby_return':
        return 'bg-emerald-600 text-white';
      default:
        return 'bg-neutral-600 text-white';
    }
  };
  
  return (
    <div className="group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-neutral-100 hover:border-neutral-200 transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden">
        {!imageError ? (
          <Image
            src={item.image_url}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
            <div className="text-center text-neutral-500">
              <div className="w-16 h-16 mx-auto mb-3 bg-neutral-300 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-medium">逕ｻ蜒上′隱ｭ縺ｿ霎ｼ繧√∪縺帙ｓ</p>
            </div>
          </div>
        )}
        
        {/* Overlay Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {/* Occasion Badge */}
          <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold shadow-soft backdrop-blur-sm ${getOccasionColor(item.occasion)}`}>
            {getOccasionLabel(item.occasion)}
          </span>
          
          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-soft hover:bg-white hover:scale-110 transition-all duration-200"
          >
            {isFavorite ? (
              <HeartSolidIcon className="w-5 h-5 text-red-500" />
            ) : (
              <HeartIcon className="w-5 h-5 text-neutral-600" />
            )}
          </button>
        </div>

        {/* Source Badge */}
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-sm text-neutral-700 text-xs font-medium rounded-xl shadow-soft">
            {item.source}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-bold text-neutral-900 mb-3 line-clamp-2 text-lg leading-tight group-hover:text-primary-600 transition-colors">
          {truncateText(item.title, 50)}
        </h3>

        {/* Merchant */}
        <div className="mb-4">
          <span className="text-sm text-neutral-500 font-medium bg-neutral-50 px-3 py-1 rounded-lg">
            {item.merchant}
          </span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-neutral-900">
              {formatPrice(item.price)}
            </span>
            <span className="text-sm text-neutral-400">
              遞手ｾｼ
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {/* View Details Button */}
          <Link
            href={`/items/${item.id}`}
            className="flex-1 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 text-neutral-900 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 group/btn"
          >
            <EyeIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            隧ｳ邏ｰ
          </Link>

          {/* Purchase Button */}
          <a
            href={item.affiliate_url}
            target="_blank"
            rel="nofollow noreferrer"
            className="flex-1 flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-soft hover:shadow-medium group/btn"
          >
            <ShoppingBagIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            雉ｼ蜈･
          </a>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}