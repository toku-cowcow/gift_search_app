/**
 * 商品グリッド表示コンポーネント（Server Component）
 * 
 * APIから商品データを取得し3カラムグリッドで表示
 * ページネーション機能付き
 */

import Link from 'next/link';
import ProductCard from './ProductCard';
import { fetchSearch, buildSearchParams } from '@/lib/api/search';

interface ProductGridProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function ProductGrid({ searchParams = {} }: ProductGridProps) {
  const apiParams = buildSearchParams(searchParams);
  const result = await fetchSearch(apiParams);
  
  const { hits: items, total, limit, offset } = result;
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  // ページネーション用URL生成
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams();
    
    Object.entries(searchParams).forEach(([key, value]) => {
      if (typeof value === 'string' && value && key !== 'offset') {
        params.set(key, value);
      }
    });
    
    if (page > 1) {
      const newOffset = (page - 1) * limit;
      params.set('offset', newOffset.toString());
    }
    
    const query = params.toString();
    return query ? `/?${query}` : '/';
  };

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <p className="text-gray-600 text-lg mb-2">お探しの商品が見つかりませんでした</p>
        <p className="text-gray-500 text-sm">検索条件を変更してお試しください</p>
      </div>
    );
  }

  return (
    <section className="py-12 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* 検索結果情報 */}
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-600">
            {total}件中 {offset + 1}〜{Math.min(offset + limit, total)}件を表示
            {apiParams.q && <span className="ml-2 font-medium">「{apiParams.q}」</span>}
          </p>
        </div>

        {/* 商品グリッド（3カラム・gap-10） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* ページネーション */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            
            {/* 前へボタン */}
            {currentPage > 1 ? (
              <Link
                href={createPageUrl(currentPage - 1)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                前へ
              </Link>
            ) : (
              <span className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-400 cursor-not-allowed">
                前へ
              </span>
            )}

            {/* ページ情報 */}
            <div className="flex items-center gap-2 px-4">
              <span className="text-sm font-medium text-gray-700">
                ページ {currentPage} / {totalPages}
              </span>
            </div>

            {/* 次へボタン */}
            {currentPage < totalPages ? (
              <Link
                href={createPageUrl(currentPage + 1)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                次へ
              </Link>
            ) : (
              <span className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-400 cursor-not-allowed">
                次へ
              </span>
            )}

          </div>
        )}

      </div>
    </section>
  );
}