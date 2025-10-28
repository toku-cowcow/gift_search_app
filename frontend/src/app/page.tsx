/**
 * UchiGiftのメインページ（トップページ）
 * 
 * このファイルの役割:
 * - サイトのランディングページとして機能
 * - ブランド紹介、カテゴリナビ、商品一覧表示
 * - 価格帯フィルタとキーワード検索機能
 * - ユーザーの最初の接点となる重要なページ
 */

'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

// 表示用のダミーデータ（将来はrepo経由で取得予定）
// 現在は静的データとして定義し、フィルタ・検索のデモンストレーションに使用
const dummyProducts = [
  {
    id: 1,
    title: "今治タオル ギフトセット",
    price: "3,980円（税込）",
    numericPrice: 3980,
    image: "https://thumbnail.image.rakuten.co.jp/@0_mall/towel-ya/cabinet/gift/imabari-gift-set.jpg",
    description: "上質な今治タオルのギフトセット"
  },
  {
    id: 2,
    title: "スタバ ドリップコーヒー詰合せ",
    price: "2,160円（税込）",
    numericPrice: 2160,
    image: "https://thumbnail.image.rakuten.co.jp/@0_mall/starbucks/cabinet/gift/drip-coffee-set.jpg",
    description: "人気のスターバックスコーヒー詰合せ"
  },
  {
    id: 3,
    title: "銀座千疋屋 フルーツゼリー",
    price: "4,320円（税込）",
    numericPrice: 4320,
    image: "https://thumbnail.image.rakuten.co.jp/@0_mall/sembikiya/cabinet/jelly/fruit-jelly-gift.jpg",
    description: "老舗果物店の高級フルーツゼリー"
  },
  {
    id: 4,
    title: "神戸牛 すき焼き用",
    price: "8,640円（税込）",
    numericPrice: 8640,
    image: "https://thumbnail.image.rakuten.co.jp/@0_mall/kobe-beef/cabinet/sukiyaki/premium-sukiyaki.jpg",
    description: "最高級神戸牛のすき焼き用詰合せ"
  },
  {
    id: 5,
    title: "カタログギフト「やさしいきもち」",
    price: "5,500円（税込）",
    numericPrice: 5500,
    image: "https://thumbnail.image.rakuten.co.jp/@0_mall/catalog-gift/cabinet/yasashii/catalog-cover.jpg",
    description: "豊富な商品から選べるカタログギフト"
  },
  {
    id: 6,
    title: "ロクシタン ハンドクリームセット",
    price: "4,980円（税込）",
    numericPrice: 4980,
    image: "https://thumbnail.image.rakuten.co.jp/@0_mall/loccitane/cabinet/hand-cream/gift-set.jpg",
    description: "人気のロクシタンハンドクリーム詰合せ"
  },
  {
    id: 7,
    title: "宇治抹茶スイーツ詰合せ",
    price: "3,240円（税込）",
    numericPrice: 3240,
    image: "https://thumbnail.image.rakuten.co.jp/@0_mall/kyoto-sweets/cabinet/matcha/sweets-set.jpg",
    description: "京都宇治の本格抹茶を使用したスイーツ"
  },
  {
    id: 8,
    title: "ティファール フライパンセット",
    price: "7,980円（税込）",
    numericPrice: 7980,
    image: "https://thumbnail.image.rakuten.co.jp/@0_mall/tfal/cabinet/frying-pan/set-red.jpg",
    description: "使いやすいティファールのフライパンセット"
  },
  {
    id: 9,
    title: "バームクーヘン 詰合せ",
    price: "2,700円（税込）",
    numericPrice: 2700,
    image: "https://thumbnail.image.rakuten.co.jp/@0_mall/baumkuchen/cabinet/gift/assort-set.jpg",
    description: "しっとり美味しいバームクーヘンギフト"
  },
  {
    id: 10,
    title: "高級和牛 ステーキセット",
    price: "12,800円（税込）",
    numericPrice: 12800,
    image: "https://picsum.photos/280/160?random=10",
    description: "特選和牛のプレミアムステーキセット"
  },
  {
    id: 11,
    title: "プレミアム海苔詰合せ",
    price: "1,980円（税込）",
    numericPrice: 1980,
    image: "https://picsum.photos/280/160?random=11",
    description: "有明産の高級海苔詰合せギフト"
  },
  {
    id: 12,
    title: "高級茶葉セット",
    price: "15,000円（税込）",
    numericPrice: 15000,
    image: "https://picsum.photos/280/160?random=12",
    description: "厳選された日本茶の最高級セット"
  }
];

/**
 * 価格帯による商品フィルタリング関数
 * 
 * @param products 対象商品配列
 * @param priceRange 価格帯文字列（「〜3,000円」等）
 * @returns フィルタ済み商品配列
 * 
 * 注意: 将来はrepo層で実装し、この関数は削除予定
 */
const filterProductsByPrice = (products: typeof dummyProducts, priceRange: string) => {
  // 価格帯文字列に基づく条件分岐で商品をフィルタリング
  switch (priceRange) {
    case '〜3,000円':
      return products.filter(product => product.numericPrice <= 3000);  // 3,000円以下
    case '3,001〜5,000円':
      return products.filter(product => product.numericPrice > 3000 && product.numericPrice <= 5000);  // 3,001円〜5,000円
    case '5,001〜10,000円':
      return products.filter(product => product.numericPrice > 5000 && product.numericPrice <= 10000);  // 5,001円〜10,000円
    case '10,000円〜':
      return products.filter(product => product.numericPrice >= 10000);  // 10,000円以上
    default:
      return products;  // 全ての商品を返す
  }
};

/**
 * ホームページコンポーネント
 * 
 * 冠婚葬祭ギフト検索アプリのメインページ
 * - 商品検索機能
 * - 価格帯フィルタリング
 * - 商品一覧表示
 */
export default function HomePage() {
  // 選択中の価格帯を管理
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  
  // フィルタ済み商品リストを管理
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);
  
  // 現在の検索キーワード（確定済み）
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  
  // 検索入力欄の値（入力中）
  const [searchInput, setSearchInput] = useState<string>('');

  /**
   * 価格帯フィルター処理
   * 
   * @param priceRange 選択された価格帯
   */
  const handlePriceFilter = (priceRange: string) => {
    if (selectedPriceRange === priceRange) {
      // 同じボタンを再度押した場合はフィルターをリセット
      setSelectedPriceRange('');
      applyFilters('', searchKeyword);
    } else {
      // 新しい価格帯フィルターを適用
      setSelectedPriceRange(priceRange);
      applyFilters(priceRange, searchKeyword);
    }
  };

  /**
   * 検索実行処理
   * 入力されたキーワードで商品を検索
   */
  const executeSearch = () => {
    setSearchKeyword(searchInput);  // 入力値を確定キーワードに設定
    applyFilters(selectedPriceRange, searchInput);  // フィルターを適用
  };

  /**
   * キーボードイベント処理
   * Enterキーで検索を実行
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
  };

  /**
   * フィルター統合適用処理
   * 価格帯とキーワードの両方のフィルターを適用
   * 
   * @param priceRange 価格帯フィルター
   * @param keyword 検索キーワード
   */
  const applyFilters = (priceRange: string, keyword: string) => {
    let filtered = dummyProducts;
    
    // 価格帯フィルターを適用
    if (priceRange) {
      filtered = filterProductsByPrice(filtered, priceRange);
    }
    
    // キーワード検索フィルターを適用
    if (keyword) {
      const lowerKeyword = keyword.toLowerCase();  // 大文字小文字を区別しない検索
      filtered = filtered.filter(product => 
        // 商品名または説明文にキーワードが含まれているかチェック
        product.title.toLowerCase().includes(lowerKeyword) ||
        product.description.toLowerCase().includes(lowerKeyword)
      );
    }
    
    // フィルタ結果を状態に反映
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen">
      {/* ヘッダー: ナビゲーションとロゴ */}
      <Header />
      
      {/* ヒーロー: メインビジュアルと検索フォーム */}
      <Hero selectedPriceRange={selectedPriceRange} onPriceFilter={handlePriceFilter} />
      
      {/* 商品グリッドセクション */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-24">
          {/* 商品一覧コンテナ */}
          <div className="bg-white rounded-lg py-20 px-16" style={{ borderTopWidth: '4px', borderTopColor: '#E48A88', backgroundColor: '#FFFFFF' }}>
            <h2 className="text-xl font-semibold text-neutral-900 mb-12 text-center">商品一覧</h2>
            
            {/* フィルター結果情報 */}
            <div className="text-center mb-8">
              <p className="text-neutral-600">
                {selectedPriceRange 
                  ? `${selectedPriceRange}の商品：${filteredProducts.length}件`  // 価格帯フィルター適用時
                  : `全商品：${filteredProducts.length}件`  // 全商品表示時
                }
              </p>
              
              {/* 検索ボックス */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginTop: '1.5rem',
                marginBottom: '1rem'
              }}>
                <div style={{ 
                  display: 'flex', 
                  width: '100%', 
                  maxWidth: '400px',
                  position: 'relative'
                }}>
                  {/* キーワード入力フィールド */}
                  <input
                    type="text"
                    placeholder="キーワードで検索"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    style={{
                      padding: '0.75rem 1rem',
                      paddingRight: '4rem',  // 検索ボタンのスペースを確保
                      fontSize: '1rem',
                      border: '2px solid #ECAFAD',
                      borderRadius: '8px',
                      width: '100%',
                      outline: 'none',
                      backgroundColor: '#fff',
                      color: '#333'
                    }}
                  />
                  {/* 検索実行ボタン */}
                  <button
                    onClick={executeSearch}
                    style={{
                      position: 'absolute',
                      right: '0.25rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      padding: '0.5rem 1rem',
                      backgroundColor: '#ECAFAD',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    検索
                  </button>
                </div>
              </div>
              
              {/* フィルターリセットボタン（価格帯選択時のみ表示） */}
              {selectedPriceRange && (
                <button
                  onClick={() => {
                    // 全フィルターをリセットして初期状態に戻す
                    setSelectedPriceRange('');
                    setSearchInput('');
                    setSearchKeyword('');
                    setFilteredProducts(dummyProducts);
                  }}
                  className="mt-4 px-8 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-50"
                >
                  すべて表示
                </button>
              )}
            </div>
            
            {/* 商品グリッド */}
            <div 
              className="grid grid-cols-3 mb-16" 
              style={{ 
                gap: '6rem',  // 商品間の大きな余白（96px）
                padding: '2rem'  // グリッド全体のパディング
              }}
            >
              {/* 最大9商品を表示 */}
              {filteredProducts.slice(0, 9).map((product) => (
                <div 
                  key={product.id} 
                  className="rounded-lg text-center bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                  style={{
                    padding: '3rem',  // 商品カード内の大きなパディング（48px）
                    margin: '1rem'  // カード間の追加マージン
                  }}
                >
                  {/* 商品画像エリア */}
                  <div className="w-40 h-28 bg-neutral-100 rounded-lg flex items-center justify-center overflow-hidden mx-auto" style={{ marginBottom: '2rem' }}>
                    <img 
                      src={`https://picsum.photos/160/112?random=${product.id}`} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* 商品名 */}
                  <h3 className="font-medium text-neutral-900 text-base leading-tight" style={{ marginBottom: '1rem' }}>{product.title}</h3>
                  {/* 商品価格 */}
                  <p className="text-sm text-neutral-600 font-semibold" style={{ marginBottom: '0.75rem' }}>{product.price}</p>
                  {/* 商品説明 */}
                  <p className="text-xs text-neutral-500">{product.description}</p>
                </div>
              ))}
            </div>

            {/* 検索結果なしメッセージ */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-neutral-500 text-lg">該当する商品が見つかりませんでした。</p>
                <p className="text-neutral-400 text-sm mt-2">別の価格帯やキーワードをお試しください。</p>
              </div>
            )}
            
            {/* ページネーション表示 */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 text-base text-neutral-600 mb-8">
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span className="font-medium">
                  {/* 表示件数情報 */}
                  {filteredProducts.length}件中 1-{Math.min(9, filteredProducts.length)}件表示
                </span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </div>
              <div>
                {/* 外部サイトへのリンクボタン */}
                <button className="px-24 py-6 hover:opacity-90 text-white rounded-full text-2xl font-medium transition-opacity duration-200 border-0" style={{ backgroundColor: '#AFABAB' }}>
                  楽天市場で他の商品を見る
                </button>
              </div>
            </div>
            
            {/* 免責事項・更新情報 */}
            <div className="mt-12 text-center text-base text-neutral-700 space-y-2">
              <p>このページは、2025年10月17日時点の情報となります。</p>
              <p>詳しくは楽天市場の商品ページをご確認ください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-neutral-800 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            {/* サイト名・ブランディング */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-1">UchiGift</h3>
              <p className="text-xs text-neutral-400">ウチギフト</p>
            </div>
            {/* サイト説明 */}
            <p className="text-neutral-400 mb-8 max-w-md mx-auto text-sm">
              内祝いギフト専門の検索サイト
            </p>
            {/* 著作権情報とリンク */}
            <div className="flex justify-center gap-6 text-sm text-neutral-400">
              <span>© 2024 UchiGift</span>
              <a href="#" className="hover:text-neutral-300 transition-colors cursor-pointer no-underline">プライバシーポリシー</a>
              <a href="#" className="hover:text-neutral-300 transition-colors cursor-pointer no-underline">利用規約</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
