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
  const params = await searchParams;
  const occasion = typeof params.occasion === 'string' ? params.occasion : undefined;
  const priceRange = typeof params.price_range === 'string' ? params.price_range : undefined;
  const query = typeof params.q === 'string' ? params.q : undefined;

  const metadata = generateCategoryMetadata({ occasion, priceRange, query });

  // SEO最適化: canonical URL設定
  // - occasionページは個別にインデックス（重要なカテゴリページ）
  // - フィルタ（価格範囲、検索、ページネーション）はoccasionページに統合
  let canonicalUrl = 'https://www.hare-gift.com';
  if (occasion) {
    canonicalUrl = `https://www.hare-gift.com/?occasion=${occasion}`;
  }

  return {
    ...metadata,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function HomePage({ searchParams = {} }: HomePageProps) {
  // 構造化データ生成
  const websiteSchema = generateWebSiteSchema();
  
  // パンくずリスト生成
  const params = await searchParams;
  const occasion = typeof params.occasion === 'string' ? params.occasion : undefined;
  const breadcrumbItems = [
    { name: 'ホーム', url: 'https://www.hare-gift.com' },
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
        url: `https://www.hare-gift.com/?occasion=${occasion}`,
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
        <MainContent searchParams={params} />

        {/* フッター */}
        <Footer />
      </div>
    </>
  );
}