/**
 * 繧ｵ繧､繝亥・菴薙・繝倥ャ繝繝ｼ繧ｳ繝ｳ繝昴・繝阪Φ繝・
 * 
 * 縺薙・繧ｳ繝ｳ繝昴・繝阪Φ繝医・蠖ｹ蜑ｲ:
 * - 繧ｵ繧､繝医・繝ｭ繧ｴ縺ｨ繝悶Λ繝ｳ繝芽｡ｨ遉ｺ
 * - 荳ｻ隕√↑逕ｨ騾費ｼ磯ｦ吝・霑斐＠遲会ｼ峨∈縺ｮ逶ｴ謗･繝ｪ繝ｳ繧ｯ
 * - 蝠・刀讀懃ｴ｢繝壹・繧ｸ縺ｸ縺ｮ隱伜ｰ・
 * - 繝ｬ繧ｹ繝昴Φ繧ｷ繝門ｯｾ蠢懶ｼ医Δ繝舌う繝ｫ繝ｻ繝・せ繧ｯ繝医ャ繝暦ｼ・
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ:
 * 繧ｵ繧､繝医・縲檎恚譚ｿ縲埼Κ蛻・〒縺吶・
 * 縺ｩ縺ｮ繝壹・繧ｸ縺ｫ縺・※繧ゅ√％縺薙°繧峨Γ繧､繝ｳ讖溯・縺ｫ繧｢繧ｯ繧ｻ繧ｹ縺ｧ縺阪∪縺吶・
 * - 繝ｭ繧ｴ繧偵け繝ｪ繝・け 竊・繝医ャ繝励・繝ｼ繧ｸ縺ｫ謌ｻ繧・
 * - 逕ｨ騾斐・繧ｿ繝ｳ 竊・縺昴・逕ｨ騾斐・蝠・刀繧呈､懃ｴ｢
 * - 縲悟膚蜩√ｒ謗｢縺吶坂・ 隧ｳ邏ｰ讀懃ｴ｢繝壹・繧ｸ
 */

import Link from 'next/link';
import { OCCASIONS, META_CONFIG } from '@/constants/filters';

/**
 * 繝倥ャ繝繝ｼ繧ｳ繝ｳ繝昴・繝阪Φ繝・
 * 
 * 蜈ｨ繝壹・繧ｸ縺ｧ蜈ｱ騾壻ｽｿ逕ｨ縺輔ｌ繧九リ繝薙ご繝ｼ繧ｷ繝ｧ繝ｳ隕∫ｴ
 * sticky驟咲ｽｮ縺ｫ繧医ｊ縲√せ繧ｯ繝ｭ繝ｼ繝ｫ譎ゅｂ荳企Κ縺ｫ蝗ｺ螳夊｡ｨ遉ｺ縺輔ｌ繧・
 */
const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(254, 240, 241, 0.9)', borderBottomColor: 'rgba(191, 191, 191, 0.5)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className="text-xl font-bold text-neutral-900 tracking-tight hover:text-neutral-700 transition-colors duration-200">
              {META_CONFIG.SITE_NAME.split(' - ')[0]} {/* "UchiGift" 驛ｨ蛻・・縺ｿ陦ｨ遉ｺ */}
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* 逕ｨ騾泌挨縺ｮ繧ｯ繧､繝・け繝ｪ繝ｳ繧ｯ */}
            {OCCASIONS.map((occasion) => (
              <Link 
                key={occasion.key}
                href={`/search?occasion=${occasion.key}`}
                className="px-4 py-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors duration-200 no-underline"
              >
                {occasion.label}
              </Link>
            ))}
            
            <div className="w-px h-4 mx-4" style={{ backgroundColor: 'rgba(191, 191, 191, 0.5)' }}></div>
            
            {/* 繝｡繧､繝ｳ讀懃ｴ｢繝壹・繧ｸ縺ｸ縺ｮ繝ｪ繝ｳ繧ｯ */}
            <Link 
              href="/search"
              className="px-8 py-3 text-white text-base font-medium rounded-full hover:opacity-90 transition-opacity duration-200 no-underline border-0"
              style={{ backgroundColor: '#AFABAB' }}
            >
              蝠・刀繧呈爾縺・
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 transition-colors text-sm font-medium">
            繝｡繝九Η繝ｼ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;