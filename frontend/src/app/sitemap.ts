/**
 * Next.js動的サイトマップ生成
 * 
 * 検索エンジンにサイト構造を通知し、インデックス速度を向上
 * 記事は自動的にスキャンされるため、手動更新不要
 */

import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hare-gift.com';
  
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

  // カテゴリページ（各シーン）- SEO最重要ページ
  const occasions = [
    { slug: 'wedding_celebration', name: '結婚祝い' },
    { slug: 'birth_celebration', name: '出産祝い' },
    { slug: 'new_house_celebration', name: '新築祝い' },
    { slug: 'mothers_day', name: '母の日' },
    { slug: 'fathers_day', name: '父の日' },
    { slug: 'respect_aged', name: '敬老の日' },
  ];

  // occasionページ（/?occasion=wedding_celebration など）- 最重要
  const occasionRoutes = occasions.map((occasion) => ({
    url: `${baseUrl}/?occasion=${occasion.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.95,
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

  // 記事ページ - ファイルシステムから自動取得
  const articlesDir = path.join(process.cwd(), 'src', 'app', 'articles');
  const articleRoutes: MetadataRoute.Sitemap = [];

  try {
    // articlesディレクトリが存在するか確認
    if (fs.existsSync(articlesDir)) {
      // occasionフォルダ（wedding_celebration, birth_celebrationなど）を取得
      const occasions = fs.readdirSync(articlesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      // 各occasionフォルダ内の記事を取得
      occasions.forEach((occasion) => {
        const occasionPath = path.join(articlesDir, occasion);
        const articles = fs.readdirSync(occasionPath, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name);

        // 各記事のpage.tsxファイルが存在するか確認
        articles.forEach((article) => {
          const articlePagePath = path.join(occasionPath, article, 'page.tsx');
          if (fs.existsSync(articlePagePath)) {
            // ファイルの最終更新日時を取得
            const stats = fs.statSync(articlePagePath);
            
            articleRoutes.push({
              url: `${baseUrl}/articles/${occasion}/${article}`,
              lastModified: stats.mtime,
              changeFrequency: 'monthly' as const,
              priority: 0.8,
            });
          }
        });
      });
    }
  } catch (error) {
    console.error('記事のスキャンに失敗:', error);
    // エラーが発生してもサイトマップ生成を続行
  }

  return [
    ...routes,
    ...occasionRoutes,
    ...genreRoutes,
    ...priceRoutes,
    ...articleRoutes,
  ];
}
