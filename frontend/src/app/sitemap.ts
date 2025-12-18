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
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
  ];

  // ジャンルページ（大分類）
  const genres = [
    { slug: 'food', name: '食品' },
    { slug: 'drink', name: '飲料' },
    { slug: 'home', name: '生活雑貨' },
    { slug: 'catalog', name: 'カタログギフト' },
    { slug: 'craft', name: '工芸品' },
  ];

  const genreRoutes = genres.map((genre) => ({
    url: `${baseUrl}/search?genre_group=${genre.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // カテゴリページ（各シーン）
  const occasions = [
    { slug: 'wedding_celebration', name: '結婚祝い' },
    { slug: 'birth_celebration', name: '出産祝い' },
    { slug: 'new_house_celebration', name: '新築祝い' },
    { slug: 'mothers_day', name: '母の日' },
    { slug: 'fathers_day', name: '父の日' },
    { slug: 'respect_for_the_aged', name: '敬老の日' },
  ];

  // occasionハブページ（/birth_celebration など）
  const occasionHubRoutes = occasions.map((occasion) => ({
    url: `${baseUrl}/${occasion.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const occasionRoutes = occasions.map((occasion) => ({
    url: `${baseUrl}/search?occasion=${occasion.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.85,
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
    url: `${baseUrl}/search?price_range=${range}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // ジャンル × 価格帯の組み合わせ（主要なもの）
  const genrePriceRoutes = genres.flatMap((genre) =>
    priceRanges.slice(0, 3).map((range) => ({
      url: `${baseUrl}/search?genre_group=${genre.slug}&price_range=${range}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.65,
    }))
  );

  // シーン × 価格帯の組み合わせ（主要なもの）
  const occasionPriceRoutes = occasions.flatMap((occasion) =>
    priceRanges.slice(0, 3).map((range) => ({
      url: `${baseUrl}/search?occasion=${occasion.slug}&price_range=${range}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  );

  // 記事ページ
  const articles = [
    // 結婚祝い記事
    { slug: 'wedding_celebration/how-to-choose-wedding-gift', date: '2025-12-16' },
    { slug: 'wedding_celebration/cohabiting-couple-wedding-gift', date: '2025-12-16' },
    { slug: 'wedding_celebration/small-space-wedding-gift', date: '2025-12-16' },
    { slug: 'wedding_celebration/non-cooking-couple-wedding-gift', date: '2025-12-16' },
    { slug: 'wedding_celebration/pet-owner-wedding-gift', date: '2025-12-16' },
    { slug: 'wedding_celebration/expecting-baby-wedding-gift', date: '2025-12-16' },
    // 出産祝い記事
    { slug: 'birth_celebration/gift-budget-guide', date: '2025-12-16' },
    { slug: 'birth_celebration/workplace-gift-etiquette', date: '2025-12-16' },
    { slug: 'birth_celebration/return-gift-guide', date: '2025-12-16' },
    { slug: 'birth_celebration/second-child-gift', date: '2025-12-16' },
    // 新築祝い記事
    { slug: 'new_house_celebration/complete-manners-guide', date: '2025-12-17' },
    { slug: 'new_house_celebration/popular-gifts-by-budget', date: '2025-12-17' },
    { slug: 'new_house_celebration/taboo-guide', date: '2025-12-17' },
  ];

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...routes,
    ...genreRoutes,
    ...occasionHubRoutes,
    ...occasionRoutes,
    ...priceRoutes,
    ...genrePriceRoutes,
    ...occasionPriceRoutes,
    ...articleRoutes,
  ];
}
