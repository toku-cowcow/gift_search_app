"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { fetchSearch, buildSearchParams, type GiftItem } from '@/lib/api/search';

interface ProductGridClientProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

interface SearchResult {
  hits: GiftItem[];
  total: number;
  limit: number;
  offset: number;
}

export default function ProductGridClient({ searchParams = {} }: ProductGridClientProps) {
  const [result, setResult] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sp = useSearchParams();

  // クライアント側のURLクエリをオブジェクト化
  const clientQuery: Record<string, string | undefined> = {};
  if (sp) {
    sp.forEach((value, key) => {
      clientQuery[key] = value;
    });
  }

  // propsで渡されたsearchParams（サーバ側）とクライアントのURLクエリをマージ
  // クライアントのクエリを優先する
  const effectiveSearchParams: Record<string, string | string[] | undefined> = {
    ...searchParams,
    ...clientQuery,
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiParams = buildSearchParams(effectiveSearchParams);
        const data = await fetchSearch(apiParams);
        setResult(data);
      } catch (err) {
        console.error('商品データの取得に失敗しました:', err);
        setError('商品データの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  // effectiveSearchParamsはオブジェクトなので、変更検知にはシリアライズを使う
  }, [JSON.stringify(effectiveSearchParams)]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="relative inline-block">
          <div className="w-16 h-16 border-4 border-rose-200 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-rose-600 rounded-full animate-spin border-t-transparent"></div>
        </div>
        <p className="mt-6 text-gray-600 text-lg font-medium">商品を読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center">
        <div className="text-red-400 mb-4">
          <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <p className="text-red-600 text-lg mb-2">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="text-rose-500 hover:text-rose-700 underline"
        >
          再読み込み
        </button>
      </div>
    );
  }

  if (!result) return null;

  const { hits: items, total, limit, offset } = result;
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  // ページネーション用URL生成
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams();
    
    Object.entries(effectiveSearchParams).forEach(([key, value]) => {
      if (key === 'offset') return;
      if (typeof value === 'string' && value) {
        params.set(key, value);
      } else if (typeof value === 'number') {
        params.set(key, String(value));
      } else if (Array.isArray(value) && value.length > 0) {
        params.set(key, String(value[0]));
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
        <p className="text-gray-500 text-sm">検索条件を変更してもう一度お試しください</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      {/* 検索結果の総件数表示 */}
      <div className="mb-6 text-center">
        <p className="text-gray-600">
          <span className="font-semibold text-gray-600">{total.toLocaleString()}</span>件の商品が見つかりました
          {totalPages > 1 && (
            <span className="ml-2 text-sm">
              （{currentPage}/{totalPages}ページ）
            </span>
          )}
        </p>
      </div>

      {/* 商品グリッド：3カラム（PC）、2カラム（タブレット・スマホ） */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            {/* 前のページ */}
            {currentPage > 1 && (
              <Link
                href={createPageUrl(currentPage - 1)}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700"
              >
                前へ
              </Link>
            )}

            {/* ページ番号 */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const page = Math.max(1, currentPage - 2) + i;
              if (page > totalPages) return null;
              
              return (
                <Link
                  key={page}
                  href={createPageUrl(page)}
                  className={`px-3 py-2 text-sm font-medium border rounded-md ${
                    page === currentPage
                      ? 'text-white bg-rose-500 border-rose-500'
                      : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                >
                  {page}
                </Link>
              );
            })}

            {/* 次のページ */}
            {currentPage < totalPages && (
              <Link
                href={createPageUrl(currentPage + 1)}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700"
              >
                次へ
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}