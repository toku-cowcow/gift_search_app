/**
 * 構造化データ（Schema.org JSON-LD）ユーティリティ
 * 
 * 検索結果でリッチスニペット表示を実現
 */

interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

interface ProductSchema {
  '@context': string;
  '@type': string;
  name: string;
  image: string;
  description: string;
  brand?: {
    '@type': string;
    name: string;
  };
  offers: {
    '@type': string;
    url: string;
    priceCurrency: string;
    price: number;
    availability: string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: number;
    reviewCount: number;
  };
}

/**
 * WebSiteスキーマを生成
 */
export function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HAREGift',
    url: 'https://haregift.com',
    description: 'ハレの日のギフトを探せる検索サイト。結婚祝い・出産祝い・新築祝い・母の日・父の日など、様々なシーンのギフトを検索できます。',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://haregift.com/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Breadcrumbスキーマを生成
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(index < items.length - 1 && { item: item.url }),
    })),
  };
}

/**
 * Productスキーマを生成
 */
export function generateProductSchema(product: {
  name: string;
  image: string;
  description: string;
  brand?: string;
  url: string;
  price: number;
  rating?: number;
  reviewCount?: number;
}): ProductSchema {
  const schema: ProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    offers: {
      '@type': 'Offer',
      url: product.url,
      priceCurrency: 'JPY',
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
  };

  if (product.brand) {
    schema.brand = {
      '@type': 'Brand',
      name: product.brand,
    };
  }

  if (product.rating && product.reviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    };
  }

  return schema;
}

/**
 * JSON-LDスクリプトタグを生成
 */
export function generateJsonLd(schema: object): string {
  return JSON.stringify(schema);
}
