/**
 * HAREGiftのメインページ（トップページ）
 * 
 * バックエンドAPIと連携して商品検索〜表示を一元管理
 * タブ機能により「カテゴリ/価格から選ぶ」と「AIに相談する」を切り替え
 */

import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import { generateWebSiteSchema, generateJsonLd, generateBreadcrumbSchema } from '@/lib/schema';
import { generateCategoryMetadata } from '@/lib/metadata';

interface HomePageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

/**
 * 動的メタデータ生成
 */
export async function generateMetadata({ searchParams = {} }: HomePageProps): Promise<Metadata> {
  const occasion = typeof searchParams.occasion === 'string' ? searchParams.occasion : undefined;
  const priceRange = typeof searchParams.price_range === 'string' ? searchParams.price_range : undefined;
  const query = typeof searchParams.q === 'string' ? searchParams.q : undefined;

  const metadata = generateCategoryMetadata({ occasion, priceRange, query });

  // canonical URLを設定（クエリパラメータを除外）
  return {
    ...metadata,
    alternates: {
      canonical: 'https://haregift.com',
    },
  };
}

export default async function HomePage({ searchParams = {} }: HomePageProps) {
  // 構造化データ生成
  const websiteSchema = generateWebSiteSchema();
  
  // パンくずリスト生成
  const occasion = typeof searchParams.occasion === 'string' ? searchParams.occasion : undefined;
  const breadcrumbItems = [
    { name: 'ホーム', url: 'https://haregift.com' },
  ];
  
  if (occasion) {
    const occasionNames: Record<string, string> = {
      wedding: '結婚祝い',
      birth: '出産祝い',
      new_home: '新築祝い',
      mothers_day: '母の日',
      fathers_day: '父の日',
      respect_aged: '敬老の日',
    };
    if (occasionNames[occasion]) {
      breadcrumbItems.push({
        name: occasionNames[occasion],
        url: `https://haregift.com/?occasion=${occasion}`,
      });
    }
  }
  
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  
  return (
    <>
      {/* 構造化データ（JSON-LD） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateJsonLd(websiteSchema) }}
      />
      {breadcrumbItems.length > 1 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateJsonLd(breadcrumbSchema) }}
        />
      )}
      
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
    </>
  );
}