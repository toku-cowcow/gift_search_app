/**
 * 商品検索結果ページ
 * 
 * このファイルの役割:
 * - URLパラメータ（q, occasion, price等）に基づく検索実行
 * - 検索結果の一覧表示（商品カード形式）
 * - ソート機能（価格順、新着順）
 * - フィルタ機能とページング制御
 * - ローディング・エラー状態の管理
 * 
 * 初心者向け解説:
 * 「検索結果を見るページ」です。
 * - URLの?q=タオル&occasion=結婚 などから条件を読み取り
 * - useSearchフックで自動的に検索実行
 * - 結果をカード形式で美しく表示
 * - フィルタやソートで結果を絞り込み
 */

import type { Metadata } from "next";

// DEBUG用メタデータ（反映確認のため）
export const metadata: Metadata = {
  title: "UchiGift DEBUG-Search-001",
  description: "デバッグ用検索ページ",
};

'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearch } from '@/lib/hooks';
import { formatPriceRange } from '@/lib/utils';
import { OCCASIONS, SORT_OPTIONS, PRICE_RANGES } from '@/constants/filters';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';

/**
 * 検索ページのメインコンテンツコンポーネント
 * 
 * 新しいuseSearchフックを使用した最新の実装
 */
function SearchContent() {
  // 統合検索フックを使用（URL同期、デバウンス、API呼び出しが全て自動）
  const {
    query,
    setQuery,
    filters,
    updateFilters,
    results,
    isLoading,
    error,
    hasResults,
    totalItems
  } = useSearch();

  /**
   * 用途キーから表示名を取得
   */
  const getOccasionLabel = (occasionKey: string) => {
    const occasion = OCCASIONS.find(occ => occ.key === occasionKey);
    return occasion ? occasion.label : '';
  };

  /**
   * 価格範囲の表示文字列を生成
   */
  const getPriceRangeLabel = () => {
    return formatPriceRange(filters.priceMin, filters.priceMax);
  };

  /**
   * ソート条件を変更
   */
  const handleSortChange = (newSort: string) => {
    updateFilters({ sort: newSort });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 共通ヘッダーを使用 */}
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              検索結果
            </h1>
          </div>
          
          {/* Active Filters - 現在適用中のフィルタを表示 */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {query && (
              <div className="inline-flex items-center px-4 py-2 bg-neutral-100 text-neutral-800 rounded-2xl text-sm font-medium">
                キーワード: {query}
              </div>
            )}
            {filters.occasion && (
              <div className="inline-flex items-center px-4 py-2 bg-neutral-100 text-neutral-800 rounded-2xl text-sm font-medium">
                {getOccasionLabel(filters.occasion)}
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
              <span className="font-semibold text-gray-900">{totalItems}件</span> の商品が見つかりました
            </p>
          </div>
        </div>

        {/* Sort Controls */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={filters.sort}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-gray-700 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors cursor-pointer shadow-sm"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            {isLoading ? '検索中...' : `${results?.hits.length || 0}件を表示中`}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
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
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-2xl transition-colors shadow-sm hover:shadow-md"
            >
              再読み込み
            </button>
          </div>
        )}

        {/* Results */}
        {!isLoading && !error && (
          <>
            {hasResults ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {results!.hits.map((item: any) => (
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