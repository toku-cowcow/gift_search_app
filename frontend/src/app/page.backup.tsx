・ｿ/**
 * UchiGift縺ｮ繝｡繧､繝ｳ繝壹・繧ｸ・医ヨ繝・・繝壹・繧ｸ・・ * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ:
 * - 繧ｵ繧､繝医・繝ｩ繝ｳ繝・ぅ繝ｳ繧ｰ繝壹・繧ｸ縺ｨ縺励※讖溯・
 * - 繝悶Λ繝ｳ繝臥ｴｹ莉九√き繝・ざ繝ｪ繝翫ン縲∝膚蜩∽ｸ隕ｧ陦ｨ遉ｺ
 * - 譁ｰ縺励＞繧｢繝ｼ繧ｭ繝・け繝√Ε縺ｮ繝・Δ繝ｳ繧ｹ繝医Ξ繝ｼ繧ｷ繝ｧ繝ｳ
 * - 繝ｦ繝ｼ繧ｶ繝ｼ縺ｮ譛蛻昴・謗･轤ｹ縺ｨ縺ｪ繧矩㍾隕√↑繝壹・繧ｸ
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ:
 * 繧ｵ繧､繝医・縲檎私髢｢縲阪〒縺吶・ * - 譁ｰ縺励＞繧ｫ繧ｹ繧ｿ繝繝輔ャ繧ｯ縺ｧ繝ｪ繧｢繝ｫ繧ｿ繧､繝讀懃ｴ｢
 * - 繧ｵ繝ｳ繝励Ν繝・・繧ｿ縺ｧ鄒弱＠縺・膚蜩∬｡ｨ遉ｺ
 * - 繧ｫ繝・ざ繝ｪ繧ｫ繝ｼ繝峨〒逕ｨ騾泌挨繧｢繧ｯ繧ｻ繧ｹ
 * - 蟆・擂縺ｮFastAPI騾｣謳ｺ縺ｮ貅門ｙ螳御ｺ・ */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { OCCASIONS } from '@/constants/filters';
import { SAMPLE_GIFTS, POPULAR_KEYWORDS, filterGiftsByPrice, sortGifts } from '@/data/sampleData';
import { formatPrice, truncateText } from '@/lib/utils';
import { useSearch } from '@/lib/hooks';

/**
 * 繧ｫ繝・ざ繝ｪ蛻･蝠・刀莉ｶ謨ｰ繧定ｨ育ｮ・ * 
 * @param occasion - 逕ｨ騾斐く繝ｼ
 * @returns 隧ｲ蠖灘膚蜩∽ｻｶ謨ｰ
 */
const getOccasionCount = (occasion: string): number => {
  return SAMPLE_GIFTS.filter(gift => gift.occasion === occasion).length;
};

/**
 * 繝帙・繝繝壹・繧ｸ繧ｳ繝ｳ繝昴・繝阪Φ繝・ * 
 * 譁ｰ縺励＞繧｢繝ｼ繧ｭ繝・け繝√Ε縺ｮ繧ｷ繝ｧ繝ｼ繧ｱ繝ｼ繧ｹ
 * - 繧ｫ繝・ざ繝ｪ繧ｫ繝ｼ繝峨↓繧医ｋ逕ｨ騾泌挨繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ
 * - 繧ｵ繝ｳ繝励Ν蝠・刀縺ｮ鄒弱＠縺・｡ｨ遉ｺ
 * - 莠ｺ豌励く繝ｼ繝ｯ繝ｼ繝峨け繧､繝・け繧｢繧ｯ繧ｻ繧ｹ
 * - 蟆・擂縺ｮAPI邨ｱ蜷医↓蜷代￠縺滓ｺ門ｙ
 */
export default function HomePage() {
  // 陦ｨ遉ｺ縺吶ｋ蝠・刀謨ｰ・医し繝ｳ繝励Ν陦ｨ遉ｺ逕ｨ・・  const [displayCount, setDisplayCount] = useState(8);
  
  // 陦ｨ遉ｺ逕ｨ蝠・刀・域怙譁ｰ鬆・〒繧ｽ繝ｼ繝茨ｼ・  const displayedGifts = sortGifts(SAMPLE_GIFTS, 'updated_at:desc').slice(0, displayCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      {/* 蜈ｱ騾壹・繝・ム繝ｼ */}
      <Header />
      
      {/* 繝偵・繝ｭ繝ｼ繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ - 譁ｰ縺励＞繝励Ο繝・・繝ｬ繧ｹ螳溯｣・*/}
      <Hero />
      
      {/* 繧ｫ繝・ざ繝ｪ繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">逕ｨ騾斐°繧蛾∈縺ｶ</h2>
            <p className="text-neutral-600 text-lg">縺頑爾縺励・蜀・･昴＞縺ｮ遞ｮ鬘槭ｒ縺企∈縺ｳ縺上□縺輔＞</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OCCASIONS.map((occasion) => (
              <CategoryCard
                key={occasion.key}
                category={occasion}
                itemCount={getOccasionCount(occasion.key)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* 莠ｺ豌励く繝ｼ繝ｯ繝ｼ繝・*/}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">莠ｺ豌励・繧ｭ繝ｼ繝ｯ繝ｼ繝・/h2>
            <p className="text-neutral-600 text-lg">繧医￥讀懃ｴ｢縺輔ｌ縺ｦ縺・ｋ繧ｮ繝輔ヨ縺九ｉ謗｢縺・/p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {POPULAR_KEYWORDS.map((keyword) => (
              <Link
                key={keyword}
                href={`/search?q=${encodeURIComponent(keyword)}`}
                className="px-6 py-3 bg-white border border-neutral-200 rounded-full text-neutral-700 hover:border-neutral-300 hover:shadow-md transition-all duration-200 no-underline"
              >
                {keyword}
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/search"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl no-underline"
            >
              隧ｳ邏ｰ讀懃ｴ｢縺ｧ謗｢縺・              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 縺翫☆縺吶ａ蝠・刀 */}
      <section className="py-16 bg-white/80">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">縺翫☆縺吶ａ繧ｮ繝輔ヨ</h2>
            <p className="text-neutral-600 text-lg">莠ｺ豌励・蜀・･昴＞繧ｮ繝輔ヨ繧偵＃邏ｹ莉・/p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {displayedGifts.map((gift) => (
              <ProductCard key={gift.id} item={gift} />
            ))}
          </div>
          
          {/* 繧ゅ▲縺ｨ隕九ｋ繝懊ち繝ｳ */}
          {displayCount < SAMPLE_GIFTS.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setDisplayCount(prev => Math.min(prev + 4, SAMPLE_GIFTS.length))}
                className="inline-flex items-center px-8 py-4 bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:shadow-md rounded-xl font-semibold transition-all duration-200"
              >
                繧ゅ▲縺ｨ隕九ｋ ({SAMPLE_GIFTS.length - displayCount}莉ｶ)
              </button>
            </div>
          )}
          
          <div className="text-center mt-8">
            <Link
              href="/search"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors no-underline"
            >
              縺吶∋縺ｦ縺ｮ蝠・刀繧定ｦ九ｋ 竊・            </Link>
          </div>
        </div>
      </section>

      {/* 繝輔ャ繧ｿ繝ｼ */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 繝悶Λ繝ｳ繝画ュ蝣ｱ */}
            <div>
              <h3 className="text-xl font-bold mb-4">UchiGift</h3>
              <p className="text-neutral-400 mb-4">
                蜀・･昴＞繧ｮ繝輔ヨ蟆る摩縺ｮ讀懃ｴ｢繧ｵ繝ｼ繝薙せ縲らｵ仙ｩ壹・蜃ｺ逕｣繝ｻ鬥吝・霑斐＠縺ｪ縺ｩ縲・                蠢・・縺薙ｂ縺｣縺溘後≠繧翫′縺ｨ縺・阪ｒ雍医ｋ縺頑焔莨昴＞繧偵＠縺ｾ縺吶・              </p>
            </div>
            
            {/* 繝ｪ繝ｳ繧ｯ */}
            <div>
              <h4 className="font-semibold mb-4">繧ｵ繝ｼ繝薙せ</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><Link href="/search" className="hover:text-white transition-colors no-underline">蝠・刀讀懃ｴ｢</Link></li>
                <li><Link href="/search?occasion=wedding_return" className="hover:text-white transition-colors no-underline">邨仙ｩ壼・逾昴＞</Link></li>
                <li><Link href="/search?occasion=baby_return" className="hover:text-white transition-colors no-underline">蜃ｺ逕｣蜀・･昴＞</Link></li>
                <li><Link href="/search?occasion=funeral_return" className="hover:text-white transition-colors no-underline">鬥吝・霑斐＠</Link></li>
              </ul>
            </div>
            
            {/* 縺雁撫縺・粋繧上○ */}
            <div>
              <h4 className="font-semibold mb-4">繧ｵ繝昴・繝・/h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors no-underline">蛻ｩ逕ｨ繧ｬ繧､繝・/a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline">繧医￥縺ゅｋ雉ｪ蝠・/a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline">縺雁撫縺・粋繧上○</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline">繝励Λ繧､繝舌す繝ｼ繝昴Μ繧ｷ繝ｼ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
            <p>ﾂｩ 2024 UchiGift. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
