/**
 * カテゴリカードコンポーネント
 * 
 * このコンポーネントの役割：
 * - 用途別カテゴリ（結婚内祝い、出産内祝いなど）を魅力的に表示
 * - 各カテゴリの特徴的な画像とアイコンで視覚的な区別
 * - カテゴリページへの誘導とクイック検索機能
 * - レスポンシブ対応で統一感のあるデザイン
 * 
 * 初心者向け解説：
 * 「商品の種類別の入り口」を表すカードです。
 * - 結婚内祝い → 結婚祝いのお返しギフト
 * - 出産内祝い → 出産祝いのお返しギフト  
 * - 香典返し → 香典へのお返しギフト
 * 各カテゴリをクリックすると、その用途の商品が検索されます。
 */

import Link from 'next/link';
import { Occasion } from '@/lib/types';

/**
 * CategoryCardコンポーネントのプロパティ
 */
interface CategoryCardProps {
  /** カテゴリ情報（用途キーとラベル） */
  category: Occasion;
  /** 商品件数（表示用） */
  itemCount?: number;
  /** カテゴリの説明文 */
  description?: string;
  /** カテゴリの代表画像URL */
  imageUrl?: string;
}

/**
 * 用途に応じたデフォルト画像とアイコンを取得
 */
const getCategoryVisuals = (occasionKey: string) => {
  switch (occasionKey) {
    case 'wedding_return':
      return {
        icon: '💒',
        gradient: 'from-blue-400 to-purple-500',
        description: '結婚のお祝いへの感謝の気持ちを込めたお返しギフト',
        defaultImage: '/images/categories/wedding-return.jpg'
      };
    case 'baby_return':
      return {
        icon: '👶',
        gradient: 'from-pink-400 to-yellow-400',
        description: '出産のお祝いへの感謝の気持ちを込めたお返しギフト',
        defaultImage: '/images/categories/baby-return.jpg'
      };
    case 'funeral_return':
      return {
        icon: '🙏',
        gradient: 'from-gray-600 to-gray-800',
        description: 'ご香典への感謝の気持ちを込めたお返しギフト',
        defaultImage: '/images/categories/funeral-return.jpg'
      };
    default:
      return {
        icon: '🎁',
        gradient: 'from-neutral-400 to-neutral-600',
        description: 'お祝いへの感謝の気持ちを込めたお返しギフト',
        defaultImage: '/images/categories/default.jpg'
      };
  }
};

/**
 * カテゴリカードコンポーネント
 * 
 * @param category - カテゴリ情報
 * @param itemCount - 商品件数
 * @param description - カテゴリ説明
 * @param imageUrl - カテゴリ画像URL
 * @returns カテゴリカードのJSX要素
 */
export default function CategoryCard({ 
  category, 
  itemCount, 
  description, 
  imageUrl 
}: CategoryCardProps) {
  const visuals = getCategoryVisuals(category.key);
  const finalDescription = description || visuals.description;
  const finalImageUrl = imageUrl || visuals.defaultImage;

  return (
    <Link href={`/search?occasion=${category.key}`}>
      <div className="group cursor-pointer bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-neutral-100 hover:border-neutral-200 transform hover:-translate-y-2">
        {/* Header Image/Gradient */}
        <div className={`relative h-48 bg-gradient-to-br ${visuals.gradient} overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-repeat opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
          </div>
          
          {/* Icon */}
          <div className="absolute top-6 left-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl">
              {visuals.icon}
            </div>
          </div>
          
          {/* Item Count Badge */}
          {itemCount !== undefined && (
            <div className="absolute top-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold text-neutral-700">{itemCount}点</span>
              </div>
            </div>
          )}
          
          {/* Decorative Elements */}
          <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
            <div className="w-32 h-32 bg-white/10 rounded-full"></div>
          </div>
          <div className="absolute -top-8 -right-8">
            <div className="w-24 h-24 bg-white/5 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Title */}
          <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
            {category.label}
          </h3>
          
          {/* Description */}
          <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {finalDescription}
          </p>
          
          {/* Action */}
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
              商品を見る
            </span>
            
            <div className="w-6 h-6 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-3xl ring-2 ring-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </Link>
  );
}