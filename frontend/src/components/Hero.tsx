/**
 * メインページのヒーローセクションコンポーネント
 * 
 * このコンポーネントの役割:
 * - サイトの紹介とキャッチコピーを表示
 * - 用途別のカテゴリボタンを提供
 * - 価格帯フィルタボタンを提供（親コンポーネントと連動）
 * - ユーザーの最初のアクションを促進
 * 
 * 初心者向け解説:
 * サイトの「顔」となる部分です。
 * - サイトの説明を分かりやすく表示
 * - よく使われる用途・価格帯をボタンで簡単アクセス
 * - ユーザーが「何ができるか」をすぐ理解できるデザイン
 */

import Link from 'next/link';
import { OCCASIONS, PRICE_RANGES, META_CONFIG } from '@/constants/filters';

/**
 * Heroコンポーネントのプロパティ
 */
interface HeroProps {
  /** 現在選択されている価格帯（オプション） */
  selectedPriceRange?: string;
  /** 価格帯選択時のコールバック関数（オプション） */
  onPriceFilter?: (priceRange: string) => void;
}

/**
 * ヒーローセクション - サイトの顔となる部分
 * 
 * @param selectedPriceRange 選択中の価格帯（ボタンのハイライト制御用）
 * @param onPriceFilter 価格帯ボタンがクリックされた際の処理
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
          
          {/* Category buttons - 用途別クイックアクセス */}
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
            
            {/* Price range buttons - 価格帯別クイックアクセス */}
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