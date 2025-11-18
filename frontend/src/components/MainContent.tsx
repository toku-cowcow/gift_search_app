"use client";

import { useState } from 'react';
import SearchControls from '@/components/SearchControls';
import HalfModalFilters from '@/components/HalfModalFilters';
import SortControls from '@/components/SortControls';
import TabSelector from '@/components/TabSelector';
import AIConsultation from '@/components/AIConsultation';
import ProductGridClient from '@/components/ProductGridClient';

interface MainContentProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function MainContent({ searchParams = {} }: MainContentProps) {
  const [activeTab, setActiveTab] = useState<'category' | 'ai-chat'>('category');

  return (
    <>
      {/* タブセレクター */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <TabSelector 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {activeTab === 'category' ? (
        <>
          {/* カテゴリ/価格から選ぶタブの内容 */}
          
          {/* ハーフモーダルフィルター */}
          <HalfModalFilters />

          <div className="mt-2 md:mt-1">
            {/* 検索・フィルターコントロール */}
            <SearchControls />
          </div>

          {/* 商品一覧セクション */}
          <section className="border-t-4 border-rose-100 border-dashed mt-4 pt-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center mt-4 mb-4">商品一覧</h2>
              
              {/* 並び順コントロール（商品一覧タイトルの下） */}
              <SortControls />
              
                 {/* 商品グリッド（クライアントでフェッチ） */}
                 <ProductGridClient searchParams={searchParams} />
            </div>
          </section>
        </>
      ) : (
        <>
          {/* AIに相談するタブの内容 */}
          <div className="mt-4">
            <AIConsultation />
          </div>
        </>
      )}
    </>
  );
}