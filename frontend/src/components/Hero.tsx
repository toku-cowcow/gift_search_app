/**
 * 繝｡繧､繝ｳ繝壹・繧ｸ縺ｮ繝偵・繝ｭ繝ｼ繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ繧ｳ繝ｳ繝昴・繝阪Φ繝・
 * 
 * 縺薙・繧ｳ繝ｳ繝昴・繝阪Φ繝医・蠖ｹ蜑ｲ:
 * - 繧ｵ繧､繝医・邏ｹ莉九→繧ｭ繝｣繝・メ繧ｳ繝斐・繧定｡ｨ遉ｺ
 * - 逕ｨ騾泌挨縺ｮ繧ｫ繝・ざ繝ｪ繝懊ち繝ｳ繧呈署萓・
 * - 萓｡譬ｼ蟶ｯ繝輔ぅ繝ｫ繧ｿ繝懊ち繝ｳ繧呈署萓幢ｼ郁ｦｪ繧ｳ繝ｳ繝昴・繝阪Φ繝医→騾｣蜍包ｼ・
 * - 繝ｦ繝ｼ繧ｶ繝ｼ縺ｮ譛蛻昴・繧｢繧ｯ繧ｷ繝ｧ繝ｳ繧剃ｿ・ｲ
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ:
 * 繧ｵ繧､繝医・縲碁｡斐阪→縺ｪ繧矩Κ蛻・〒縺吶・
 * - 繧ｵ繧､繝医・隱ｬ譏弱ｒ蛻・°繧翫ｄ縺吶￥陦ｨ遉ｺ
 * - 繧医￥菴ｿ繧上ｌ繧狗畑騾斐・萓｡譬ｼ蟶ｯ繧偵・繧ｿ繝ｳ縺ｧ邁｡蜊倥い繧ｯ繧ｻ繧ｹ
 * - 繝ｦ繝ｼ繧ｶ繝ｼ縺後御ｽ輔′縺ｧ縺阪ｋ縺九阪ｒ縺吶＄逅・ｧ｣縺ｧ縺阪ｋ繝・じ繧､繝ｳ
 */

import Link from 'next/link';
import { OCCASIONS, PRICE_RANGES, META_CONFIG } from '@/constants/filters';

/**
 * Hero繧ｳ繝ｳ繝昴・繝阪Φ繝医・繝励Ο繝代ユ繧｣
 */
interface HeroProps {
  /** 迴ｾ蝨ｨ驕ｸ謚槭＆繧後※縺・ｋ萓｡譬ｼ蟶ｯ・医が繝励す繝ｧ繝ｳ・・*/
  selectedPriceRange?: string;
  /** 萓｡譬ｼ蟶ｯ驕ｸ謚樊凾縺ｮ繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ髢｢謨ｰ・医が繝励す繝ｧ繝ｳ・・*/
  onPriceFilter?: (priceRange: string) => void;
}

/**
 * 繝偵・繝ｭ繝ｼ繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ - 繧ｵ繧､繝医・鬘斐→縺ｪ繧矩Κ蛻・
 * 
 * @param selectedPriceRange 驕ｸ謚樔ｸｭ縺ｮ萓｡譬ｼ蟶ｯ・医・繧ｿ繝ｳ縺ｮ繝上う繝ｩ繧､繝亥宛蠕｡逕ｨ・・
 * @param onPriceFilter 萓｡譬ｼ蟶ｯ繝懊ち繝ｳ縺後け繝ｪ繝・け縺輔ｌ縺滄圀縺ｮ蜃ｦ逅・
 */
const Hero = ({ selectedPriceRange, onPriceFilter }: HeroProps) => {

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
              {META_CONFIG.SITE_NAME.split(' - ')[0]}
            </h1>
            <p className="text-neutral-700 leading-relaxed max-w-3xl mx-auto text-base">
              {META_CONFIG.DEFAULT_DESCRIPTION}
            </p>
          </div>
          
          {/* Category buttons - 逕ｨ騾泌挨繧ｯ繧､繝・け繧｢繧ｯ繧ｻ繧ｹ */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              {OCCASIONS.map((occasion) => (
                <Link
                  key={occasion.key}
                  href={`/search?occasion=${occasion.key}`}
                  className="font-medium rounded-full transition-opacity duration-200 border-0 text-neutral-800 hover:opacity-90 no-underline"
                  style={{ 
                    backgroundColor: '#ECAFAD',
                    padding: '1rem 2rem',
                    fontSize: '1rem',
                    minWidth: '140px',
                    display: 'inline-block',
                    textAlign: 'center'
                  }}
                >
                  {occasion.label}
                </Link>
              ))}
            </div>
            
            {/* Price range buttons - 萓｡譬ｼ蟶ｯ蛻･繧ｯ繧､繝・け繧｢繧ｯ繧ｻ繧ｹ */}
            <div className="flex flex-wrap justify-center mb-8" style={{ gap: '1.5rem' }}>
              {PRICE_RANGES.filter(range => range.min !== undefined || range.max !== undefined).map((priceRange) => (
                <Link
                  key={priceRange.label}
                  href={`/search?price_min=${priceRange.min || ''}&price_max=${priceRange.max || ''}`}
                  className={`font-medium rounded-full transition-all duration-200 border-0 no-underline ${
                    selectedPriceRange === priceRange.label
                      ? 'text-white shadow-lg'
                      : 'text-neutral-800 hover:opacity-90'
                  }`}
                  style={{ 
                    backgroundColor: selectedPriceRange === priceRange.label ? '#9BB8D3' : '#B7D5EB',
                    padding: '1rem 2rem',
                    fontSize: '1rem',
                    minWidth: '140px',
                    display: 'inline-block',
                    textAlign: 'center'
                  }}
                >
                  {priceRange.label}
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;