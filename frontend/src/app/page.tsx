/**
 * UchiGiftのメインページ（トップページ）
 * 
 * バックエンドAPIと連携して商品検索〜表示を一元管理
 * 元の3カラムデザインを踏襲し、検索・フィルタ・ソート機能を統合
 */

import { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchControls from '@/components/SearchControls';
import Filters from '@/components/Filters';
import ProductGrid from '@/components/ProductGrid';

interface HomePageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function HomePage({ searchParams = {} }: HomePageProps) {
  return (
    <div className="bg-rose-50/60 min-h-screen pt-6 pb-16">
      {/* Header コンポーネント */}
      <Header />

      {/* ヒーローセクション - タイトル・説明文3行 */}
      <Hero />

      {/* フィルター群の区切り */}
      <div className="mt-6 md:mt-8">
        {/* フィルター選択（残す3行のみ） */}
        <Filters />

        {/* 検索・フィルターコントロール */}
        <SearchControls />
      </div>

      {/* 商品一覧セクション */}
      <section className="border-t border-rose-100 mt-6 pt-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mt-10 mb-4">商品一覧</h2>
          
          {/* 商品グリッド */}
          <Suspense fallback={
            <div className="py-20 text-center">
              <div className="relative inline-block">
                <div className="w-16 h-16 border-4 border-rose-200 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-rose-600 rounded-full animate-spin border-t-transparent"></div>
              </div>
              <p className="mt-6 text-gray-600 text-lg font-medium">商品を読み込み中...</p>
            </div>
          }>
            <ProductGrid searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}