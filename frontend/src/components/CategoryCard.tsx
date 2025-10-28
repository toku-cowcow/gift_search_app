/**
 * 繧ｫ繝・ざ繝ｪ繧ｫ繝ｼ繝峨さ繝ｳ繝昴・繝阪Φ繝・
 * 
 * 縺薙・繧ｳ繝ｳ繝昴・繝阪Φ繝医・蠖ｹ蜑ｲ・・
 * - 逕ｨ騾泌挨繧ｫ繝・ざ繝ｪ・育ｵ仙ｩ壼・逾昴＞縲∝・逕｣蜀・･昴＞縺ｪ縺ｩ・峨ｒ鬲・鴨逧・↓陦ｨ遉ｺ
 * - 蜷・き繝・ざ繝ｪ縺ｮ迚ｹ蠕ｴ逧・↑逕ｻ蜒上→繧｢繧､繧ｳ繝ｳ縺ｧ隕冶ｦ夂噪縺ｪ蛹ｺ蛻･
 * - 繧ｫ繝・ざ繝ｪ繝壹・繧ｸ縺ｸ縺ｮ隱伜ｰ弱→繧ｯ繧､繝・け讀懃ｴ｢讖溯・
 * - 繝ｬ繧ｹ繝昴Φ繧ｷ繝門ｯｾ蠢懊〒邨ｱ荳諢溘・縺ゅｋ繝・じ繧､繝ｳ
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 縲悟膚蜩√・遞ｮ鬘槫挨縺ｮ蜈･繧雁哨縲阪ｒ陦ｨ縺吶き繝ｼ繝峨〒縺吶・
 * - 邨仙ｩ壼・逾昴＞ 竊・邨仙ｩ夂･昴＞縺ｮ縺願ｿ斐＠繧ｮ繝輔ヨ
 * - 蜃ｺ逕｣蜀・･昴＞ 竊・蜃ｺ逕｣逾昴＞縺ｮ縺願ｿ斐＠繧ｮ繝輔ヨ  
 * - 鬥吝・霑斐＠ 竊・鬥吝・縺ｸ縺ｮ縺願ｿ斐＠繧ｮ繝輔ヨ
 * 蜷・き繝・ざ繝ｪ繧偵け繝ｪ繝・け縺吶ｋ縺ｨ縲√◎縺ｮ逕ｨ騾斐・蝠・刀縺梧､懃ｴ｢縺輔ｌ縺ｾ縺吶・
 */

import Link from 'next/link';
import { Occasion } from '@/lib/types';

/**
 * CategoryCard繧ｳ繝ｳ繝昴・繝阪Φ繝医・繝励Ο繝代ユ繧｣
 */
interface CategoryCardProps {
  /** 繧ｫ繝・ざ繝ｪ諠・ｱ・育畑騾斐く繝ｼ縺ｨ繝ｩ繝吶Ν・・*/
  category: Occasion;
  /** 蝠・刀莉ｶ謨ｰ・郁｡ｨ遉ｺ逕ｨ・・*/
  itemCount?: number;
  /** 繧ｫ繝・ざ繝ｪ縺ｮ隱ｬ譏取枚 */
  description?: string;
  /** 繧ｫ繝・ざ繝ｪ縺ｮ莉｣陦ｨ逕ｻ蜒酋RL */
  imageUrl?: string;
}

/**
 * 逕ｨ騾斐↓蠢懊§縺溘ョ繝輔か繝ｫ繝育判蜒上→繧｢繧､繧ｳ繝ｳ繧貞叙蠕・
 */
const getCategoryVisuals = (occasionKey: string) => {
  switch (occasionKey) {
    case 'wedding_return':
      return {
        icon: '鋳',
        gradient: 'from-blue-400 to-purple-500',
        description: '邨仙ｩ壹・縺顔･昴＞縺ｸ縺ｮ諢溯ｬ昴・豌玲戟縺｡繧定ｾｼ繧√◆縺願ｿ斐＠繧ｮ繝輔ヨ',
        defaultImage: '/images/categories/wedding-return.jpg'
      };
    case 'baby_return':
      return {
        icon: '存',
        gradient: 'from-pink-400 to-yellow-400',
        description: '蜃ｺ逕｣縺ｮ縺顔･昴＞縺ｸ縺ｮ諢溯ｬ昴・豌玲戟縺｡繧定ｾｼ繧√◆縺願ｿ斐＠繧ｮ繝輔ヨ',
        defaultImage: '/images/categories/baby-return.jpg'
      };
    case 'funeral_return':
      return {
        icon: '剌',
        gradient: 'from-gray-600 to-gray-800',
        description: '縺秘ｦ吝・縺ｸ縺ｮ諢溯ｬ昴・豌玲戟縺｡繧定ｾｼ繧√◆縺願ｿ斐＠繧ｮ繝輔ヨ',
        defaultImage: '/images/categories/funeral-return.jpg'
      };
    default:
      return {
        icon: '氏',
        gradient: 'from-neutral-400 to-neutral-600',
        description: '縺顔･昴＞縺ｸ縺ｮ諢溯ｬ昴・豌玲戟縺｡繧定ｾｼ繧√◆縺願ｿ斐＠繧ｮ繝輔ヨ',
        defaultImage: '/images/categories/default.jpg'
      };
  }
};

/**
 * 繧ｫ繝・ざ繝ｪ繧ｫ繝ｼ繝峨さ繝ｳ繝昴・繝阪Φ繝・
 * 
 * @param category - 繧ｫ繝・ざ繝ｪ諠・ｱ
 * @param itemCount - 蝠・刀莉ｶ謨ｰ
 * @param description - 繧ｫ繝・ざ繝ｪ隱ｬ譏・
 * @param imageUrl - 繧ｫ繝・ざ繝ｪ逕ｻ蜒酋RL
 * @returns 繧ｫ繝・ざ繝ｪ繧ｫ繝ｼ繝峨・JSX隕∫ｴ
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
                <span className="text-sm font-semibold text-neutral-700">{itemCount}轤ｹ</span>
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
              蝠・刀繧定ｦ九ｋ
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