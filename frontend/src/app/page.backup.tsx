/**
 * UchiGiftのメインページ（トップページ）
 * 
 * このファイルの役割:
 * - サイトのランディングページとして機能
 * - ブランド紹介、カテゴリナビ、商品一覧表示
 * - 新しいアーキテクチャのデモンストレーション
 * - ユーザーの最初の接点となる重要なページ
 * 
 * 初心者向け解説:
 * サイトの「玄関」です。
 * - 新しいカスタムフックでリアルタイム検索
 * - サンプルデータで美しい商品表示
 * - カテゴリカードで用途別アクセス
 * - 将来のFastAPI連携の準備完了
 */

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
 * カテゴリ別商品件数を計算
 * 
 * @param occasion - 用途キー
 * @returns 該当商品件数
 */
const getOccasionCount = (occasion: string): number => {
  return SAMPLE_GIFTS.filter(gift => gift.occasion === occasion).length;
};

/**
 * ホームページコンポーネント
 * 
 * 新しいアーキテクチャのショーケース
 * - カテゴリカードによる用途別ナビゲーション
 * - サンプル商品の美しい表示
 * - 人気キーワードクイックアクセス
 * - 将来のAPI統合に向けた準備
 */
export default function HomePage() {
  // 表示する商品数（サンプル表示用）
  const [displayCount, setDisplayCount] = useState(8);
  
  // 表示用商品（最新順でソート）
  const displayedGifts = sortGifts(SAMPLE_GIFTS, 'updated_at:desc').slice(0, displayCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      {/* 共通ヘッダー */}
      <Header />
      
      {/* ヒーローセクション - 新しいプロップレス実装 */}
      <Hero />
      
      {/* カテゴリナビゲーション */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">用途から選ぶ</h2>
            <p className="text-neutral-600 text-lg">お探しの内祝いの種類をお選びください</p>
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
      
      {/* 人気キーワード */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">人気のキーワード</h2>
            <p className="text-neutral-600 text-lg">よく検索されているギフトから探す</p>
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
              詳細検索で探す
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* おすすめ商品 */}
      <section className="py-16 bg-white/80">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">おすすめギフト</h2>
            <p className="text-neutral-600 text-lg">人気の内祝いギフトをご紹介</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {displayedGifts.map((gift) => (
              <ProductCard key={gift.id} item={gift} />
            ))}
          </div>
          
          {/* もっと見るボタン */}
          {displayCount < SAMPLE_GIFTS.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setDisplayCount(prev => Math.min(prev + 4, SAMPLE_GIFTS.length))}
                className="inline-flex items-center px-8 py-4 bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:shadow-md rounded-xl font-semibold transition-all duration-200"
              >
                もっと見る ({SAMPLE_GIFTS.length - displayCount}件)
              </button>
            </div>
          )}
          
          <div className="text-center mt-8">
            <Link
              href="/search"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors no-underline"
            >
              すべての商品を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ブランド情報 */}
            <div>
              <h3 className="text-xl font-bold mb-4">UchiGift</h3>
              <p className="text-neutral-400 mb-4">
                内祝いギフト専門の検索サービス。結婚・出産・香典返しなど、
                心のこもった「ありがとう」を贈るお手伝いをします。
              </p>
            </div>
            
            {/* リンク */}
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><Link href="/search" className="hover:text-white transition-colors no-underline">商品検索</Link></li>
                <li><Link href="/search?occasion=wedding_return" className="hover:text-white transition-colors no-underline">結婚内祝い</Link></li>
                <li><Link href="/search?occasion=baby_return" className="hover:text-white transition-colors no-underline">出産内祝い</Link></li>
                <li><Link href="/search?occasion=funeral_return" className="hover:text-white transition-colors no-underline">香典返し</Link></li>
              </ul>
            </div>
            
            {/* お問い合わせ */}
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors no-underline">利用ガイド</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline">よくある質問</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
            <p>© 2024 UchiGift. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
