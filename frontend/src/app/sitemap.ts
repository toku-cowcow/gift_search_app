/**
 * Next.js動的サイトマップ生成
 * 
 * 検索エンジンにサイト構造を通知し、インデックス速度を向上
 */

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://haregift.com';
  
  // 基本ページ
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
  ];

  // カテゴリページ（各シーン）
  const occasions = [
    { slug: 'wedding', name: '結婚祝い' },
    { slug: 'birth', name: '出産祝い' },
    { slug: 'new_home', name: '新築祝い' },
    { slug: 'mothers_day', name: '母の日' },
    { slug: 'fathers_day', name: '父の日' },
    { slug: 'respect_aged', name: '敬老の日' },
  ];

  const occasionRoutes = occasions.map((occasion) => ({
    url: `${baseUrl}/?occasion=${occasion.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // 価格帯ページ
  const priceRanges = [
    '0-3000',
    '3000-5000',
    '5000-10000',
    '10000-20000',
    '20000-',
  ];

  const priceRoutes = priceRanges.map((range) => ({
    url: `${baseUrl}/?price_range=${range}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // カテゴリ × 価格帯の組み合わせ（主要なもの）
  const combinedRoutes = occasions.flatMap((occasion) =>
    priceRanges.slice(0, 3).map((range) => ({
      url: `${baseUrl}/?occasion=${occasion.slug}&price_range=${range}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  );

  return [...routes, ...occasionRoutes, ...priceRoutes, ...combinedRoutes];
}
