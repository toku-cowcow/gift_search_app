/**
 * HAREGiftのメインページ（トップページ）
 * 
 * バックエンドAPIと連携して商品検索〜表示を一元管理
 * タブ機能により「カテゴリ/価格から選ぶ」と「AIに相談する」を切り替え
 */

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

interface HomePageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function HomePage({ searchParams = {} }: HomePageProps) {
  return (
    <div className="bg-rose-50/60 min-h-screen pt-2 pb-4">
      {/* Header コンポーネント */}
      <Header />

      {/* ヒーローセクション - タイトル・説明文3行 */}
      <Hero />

      {/* メインコンテンツ（タブ機能含む） */}
      <MainContent searchParams={searchParams} />

      {/* フッター */}
      <Footer />
    </div>
  );
}