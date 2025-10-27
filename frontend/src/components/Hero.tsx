/**
 * メインページのヒーローセクションコンポーネント
 * 
 * このコンポーネントの役割:
 * - サイトの紹介とキャッチコピーを表示
 * - 用途別のカテゴリボタンを提供
 * - 価格帯フィルタボタンを提供（親コンポーネントと連動）
 * - ユーザーの最初のアクションを促進
 */

/**
 * Heroコンポーネントのプロパティ
 */
interface HeroProps {
  selectedPriceRange: string;                    // 現在選択されている価格帯
  onPriceFilter: (priceRange: string) => void;  // 価格帯選択時のコールバック関数
}

/**
 * ヒーローセクション - サイトの顔となる部分
 * 
 * @param selectedPriceRange 選択中の価格帯（ボタンのハイライト制御用）
 * @param onPriceFilter 価格帯ボタンがクリックされた際の処理
 */
const Hero = ({ selectedPriceRange, onPriceFilter }: HeroProps) => {
  // 価格帯フィルタの選択肢（UIで表示される文字列）
  const priceRanges = ['〜3,000円', '3,001〜5,000円', '5,001〜10,000円', '10,000円〜'];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
              UchiGift
            </h1>
            <p className="text-neutral-700 leading-relaxed max-w-3xl mx-auto text-base">
              UchiGift（ウチギフト）は、内祝いギフト専門の検索サイトです。<br />
              出産・結婚・新築・快気祝いなど、シーン別・予算別にぴったりの内祝いを見つけられます。<br />
              通販サイトの人気商品をまとめて比較し、心のこもった「ありがとう」を贈るお手伝いをします。
            </p>
          </div>
          
          {/* Category buttons */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              <button 
                className="font-medium rounded-full transition-opacity duration-200 border-0 text-neutral-800 hover:opacity-90"
                style={{ 
                  backgroundColor: '#ECAFAD',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  minWidth: '140px'
                }}
              >
                出産内祝い
              </button>
              <button 
                className="font-medium rounded-full transition-opacity duration-200 border-0 text-neutral-800 hover:opacity-90"
                style={{ 
                  backgroundColor: '#ECAFAD',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  minWidth: '140px'
                }}
              >
                結婚内祝い
              </button>
              <button 
                className="font-medium rounded-full transition-opacity duration-200 border-0 text-neutral-800 hover:opacity-90"
                style={{ 
                  backgroundColor: '#ECAFAD',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  minWidth: '140px'
                }}
              >
                新築内祝い
              </button>
              <button 
                className="font-medium rounded-full transition-opacity duration-200 border-0 text-neutral-800 hover:opacity-90"
                style={{ 
                  backgroundColor: '#ECAFAD',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  minWidth: '140px'
                }}
              >
                その他内祝い
              </button>
            </div>
            
            {/* Price range buttons */}
            <div className="flex flex-wrap justify-center mb-8" style={{ gap: '1.5rem' }}>
              {priceRanges.map((priceRange) => (
                <button 
                  key={priceRange}
                  onClick={() => onPriceFilter(priceRange)}
                  className={`font-medium rounded-full transition-all duration-200 border-0 ${
                    selectedPriceRange === priceRange
                      ? 'text-white shadow-lg'
                      : 'text-neutral-800 hover:opacity-90'
                  }`}
                  style={{ 
                    backgroundColor: selectedPriceRange === priceRange ? '#9BB8D3' : '#B7D5EB',
                    padding: '1rem 2rem',
                    fontSize: '1rem',
                    minWidth: '140px'
                  }}
                >
                  {priceRange}
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;