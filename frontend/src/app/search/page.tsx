/**
 * 商品検索結果ページ
 * 
 * このファイルの役割:
 * - URLパラメータ（q, occasion, price等）に基づく検索実行
 * - 検索結果の一覧表示（商品カード形式）
 * - ソート機能（価格順、新着順）
 * - フィルタ機能とページング制御
 * - ローディング・エラー状態の管理
 */

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { searchItems } from '@/lib/repo';  // 新しいリポジトリ層を使用
import { GiftItem, SortKey } from '@/lib/types';  // 新しい型定義を使用
import ProductCard from '@/components/ProductCard';

// ソート選択肢の定義（UIで表示される選択肢）
const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'updated_at:desc', label: '新着順' },
  { value: 'price:asc', label: '価格の安い順' },
  { value: 'price:desc', label: '価格の高い順' },
];

/**
 * 検索ページのメインコンテンツコンポーネント
 * 
 * URLパラメータを解析し、検索処理とUI表示を管理
 */
function SearchContent() {
  const searchParams = useSearchParams();
  
  // 検索結果の状態管理
  const [items, setItems] = useState<GiftItem[]>([]);      // 商品一覧
  const [loading, setLoading] = useState(true);           // ローディング状態
  const [error, setError] = useState<string | null>(null); // エラー状態
  const [total, setTotal] = useState(0);                  // 総件数
  const [currentSort, setCurrentSort] = useState<SortKey>('updated_at:desc'); // 現在のソート
  const [showFilters, setShowFilters] = useState(false);

  // Get search parameters
  const query = searchParams.get('q') || '';
  const occasion = searchParams.get('occasion') || '';
  const priceMin = searchParams.get('price_min') ? parseInt(searchParams.get('price_min')!) : undefined;
  const priceMax = searchParams.get('price_max') ? parseInt(searchParams.get('price_max')!) : undefined;

  /**
   * 商品検索を実行する関数
   * 
   * @param sort ソート条件（デフォルトは現在設定中のソート）
   */
  const fetchItems = async (sort: SortKey = currentSort) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await searchItems({
        q: query || undefined,
        occasion: (occasion as any) || undefined, // TODO: 型変換を適切に処理
        price_min: priceMin,
        price_max: priceMax,
        sort,
        limit: 20,
        offset: 0,
      });

      setItems(response.hits);
      setTotal(response.total);
    } catch (err) {
      setError('検索中にエラーが発生しました');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [query, occasion, priceMin, priceMax]);

  const handleSortChange = (newSort: SortKey) => {
    setCurrentSort(newSort);
    fetchItems(newSort);
  };

  const getOccasionLabel = (occasion: string) => {
    switch (occasion) {
      case 'funeral_return': return '香典返し';
      case 'wedding_return': return '結婚内祝い';
      case 'baby_return': return '出産内祝い';
      default: return '';
    }
  };



  const getPriceRangeLabel = () => {
    if (priceMin && priceMax) {
      return `${priceMin.toLocaleString()}円～${priceMax.toLocaleString()}円`;
    } else if (priceMin) {
      return `${priceMin.toLocaleString()}円以上`;
    } else if (priceMax) {
      return `${priceMax.toLocaleString()}円以下`;
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 border-b border-neutral-200/70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-lg font-semibold text-neutral-900 tracking-tight hover:text-neutral-700 transition-colors duration-200">
              ギフトセレクション
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <Link href="/search" className="px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200 no-underline">
                商品検索
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              検索結果
            </h1>
          </div>
          
          {/* Active Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {query && (
              <div className="inline-flex items-center px-4 py-2 bg-neutral-100 text-neutral-800 rounded-2xl text-sm font-medium">
                キーワード: {query}
              </div>
            )}
            {occasion && (
              <div className="inline-flex items-center px-4 py-2 bg-neutral-100 text-neutral-800 rounded-2xl text-sm font-medium">
                {getOccasionLabel(occasion)}
              </div>
            )}
            {getPriceRangeLabel() && (
              <div className="inline-flex items-center px-4 py-2 bg-neutral-100 text-neutral-800 rounded-2xl text-sm font-medium">
                {getPriceRangeLabel()}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">{total}件</span> の商品が見つかりました
            </p>
          </div>
        </div>

        {/* Sort and Filter Controls */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={currentSort}
                onChange={(e) => handleSortChange(e.target.value as SortKey)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-gray-700 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors cursor-pointer shadow-sm"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
            >
              フィルター
            </button>
          </div>

          <div className="text-sm text-gray-500">
            {loading ? '検索中...' : `${items.length}件を表示中`}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
            </div>
            <p className="mt-6 text-gray-600 text-lg font-medium">商品を検索中...</p>
            <p className="mt-2 text-gray-500 text-sm">少々お待ちください</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">エラーが発生しました</h3>
            <p className="text-gray-600 text-center mb-6 max-w-md">
              {error}
            </p>
            <button
              onClick={() => fetchItems()}
              className="inline-flex items-center px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-2xl transition-colors shadow-sm hover:shadow-md"
            >
              再試行
            </button>
          </div>
        )}

        {/* Results */}
        {!loading && !error && (
          <>
            {items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {items.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">商品が見つかりませんでした</h3>
                <p className="text-gray-600 text-center mb-8 max-w-md leading-relaxed">
                  検索条件を変更するか、別のキーワードでお試しください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/search"
                    className="inline-flex items-center px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-2xl transition-colors shadow-sm hover:shadow-md no-underline"
                  >
                    すべての商品を見る
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-white hover:bg-neutral-50 text-gray-900 font-medium rounded-2xl border border-gray-200 transition-colors no-underline"
                  >
                    トップページに戻る
                  </Link>
                </div>
              </div>
            )}
          </>
        )}

        {/* Load More Button (for future pagination) */}
        {!loading && !error && items.length > 0 && items.length < total && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-white hover:bg-neutral-50 text-gray-900 font-medium rounded-2xl border border-gray-200 transition-colors shadow-sm hover:shadow-md">
              さらに表示
            </button>
          </div>
        )}
      </main>


    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">読み込み中...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}