/**
 * 動的メタデータユーティリティ
 * 
 * カテゴリや検索パラメータに応じて最適化されたメタデータを生成
 */

import { Metadata } from 'next';

// カテゴリ情報の型定義
interface OccasionInfo {
  name: string;
  title: string;
  description: string;
  keywords: string[];
}

// カテゴリ情報マップ
export const OCCASIONS: Record<string, OccasionInfo> = {
  wedding: {
    name: '結婚祝い',
    title: '結婚祝いのギフト・プレゼント',
    description: '結婚祝いにぴったりのギフトを探せます。人気の食器セット、タオルギフト、カタログギフトなど、新生活を彩る贈り物を価格帯別に比較できます。',
    keywords: ['結婚祝い', 'ウェディングギフト', '結婚プレゼント', '新婚', '食器', 'タオル', 'カタログギフト'],
  },
  birth: {
    name: '出産祝い',
    title: '出産祝いのギフト・プレゼント',
    description: '出産祝いに喜ばれるギフトを探せます。おむつケーキ、ベビー服、おもちゃ、タオルセットなど、赤ちゃんとママに優しい贈り物を厳選。',
    keywords: ['出産祝い', 'ベビーギフト', 'おむつケーキ', 'ベビー服', '赤ちゃん', '出産プレゼント'],
  },
  new_home: {
    name: '新築祝い',
    title: '新築祝い・引越し祝いのギフト',
    description: '新築祝い・引越し祝いにおすすめのギフトを探せます。インテリア雑貨、キッチン用品、家電など、新しい住まいを彩る贈り物を比較。',
    keywords: ['新築祝い', '引越し祝い', '新居祝い', 'インテリア', 'キッチン用品', '家電'],
  },
  mothers_day: {
    name: '母の日',
    title: '母の日のギフト・プレゼント',
    description: '母の日に喜ばれるギフトを探せます。スイーツ、美容グッズ、ファッション小物、食品など、お母さんに感謝を伝える特別なプレゼントを厳選。',
    keywords: ['母の日', 'スイーツ', '美容', 'ファッション', 'お母さん', 'プレゼント', '食品'],
  },
  fathers_day: {
    name: '父の日',
    title: '父の日のギフト・プレゼント',
    description: '父の日におすすめのギフトを探せます。お酒、グルメ、ファッション小物、趣味のアイテムなど、お父さんに喜ばれる贈り物を価格帯別に比較。',
    keywords: ['父の日', 'お酒', 'グルメ', 'ネクタイ', '趣味', 'お父さん', 'プレゼント'],
  },
  respect_aged: {
    name: '敬老の日',
    title: '敬老の日のギフト・プレゼント',
    description: '敬老の日に喜ばれるギフトを探せます。和菓子、健康グッズ、趣味のアイテム、食品など、おじいちゃん・おばあちゃんに感謝を伝える贈り物を厳選。',
    keywords: ['敬老の日', '和菓子', '健康グッズ', 'おじいちゃん', 'おばあちゃん', 'プレゼント', '食品'],
  },
};

// 価格帯情報マップ
const PRICE_RANGES: Record<string, string> = {
  '0-3000': '3000円以下',
  '3000-5000': '3000円〜5000円',
  '5000-10000': '5000円〜1万円',
  '10000-20000': '1万円〜2万円',
  '20000-': '2万円以上',
};

/**
 * カテゴリページ用の動的メタデータを生成
 * 
 * SEO最適化方針:
 * - occasionページ: 個別インデックス（重要なカテゴリページ）
 * - フィルタ・ページネーション: occasionページにcanonical統合
 */
export function generateCategoryMetadata(params: {
  occasion?: string;
  priceRange?: string;
  query?: string;
}): Metadata {
  const { occasion, priceRange, query } = params;

  // デフォルトメタデータ
  let title = 'HAREGift | ハレの日のギフトを探せる検索サイト';
  let description = 'HAREGift（ハレギフト）は、結婚祝い・出産祝い・新築祝い・母の日・父の日など、ハレの日にぴったりの贈り物を探せるギフト検索サイトです。';
  let keywords = ['ギフト', 'プレゼント', '贈り物', '通販'];

  // カテゴリが指定されている場合
  if (occasion && OCCASIONS[occasion]) {
    const occasionInfo = OCCASIONS[occasion];
    title = `${occasionInfo.title} | HAREGift`;
    description = occasionInfo.description;
    keywords = [...occasionInfo.keywords, ...keywords];

    // 価格帯も指定されている場合（titleとdescriptionは変更するがcanonicalは除外）
    if (priceRange && PRICE_RANGES[priceRange]) {
      const priceLabel = PRICE_RANGES[priceRange];
      title = `${occasionInfo.name} ${priceLabel}のギフト | HAREGift`;
      description = `${occasionInfo.name}で予算${priceLabel}のギフトを探せます。${description}`;
    }
  }
  // 価格帯のみ指定されている場合
  else if (priceRange && PRICE_RANGES[priceRange]) {
    const priceLabel = PRICE_RANGES[priceRange];
    title = `${priceLabel}のギフト・プレゼント | HAREGift`;
    description = `予算${priceLabel}で探せるギフトを厳選。結婚祝い・出産祝い・新築祝いなど、様々なシーンに対応した贈り物を比較できます。`;
  }
  // 検索クエリが指定されている場合
  else if (query) {
    title = `「${query}」の検索結果 | HAREGift`;
    description = `「${query}」に関連するギフト・プレゼントを探せます。HAREGiftで最適な贈り物を見つけましょう。`;
  }

  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'ja_JP',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/**
 * 商品ページ用の動的メタデータを生成
 */
export function generateProductMetadata(product: {
  name: string;
  description: string;
  price: number;
  image: string;
  occasion?: string;
}): Metadata {
  const occasionName = product.occasion && OCCASIONS[product.occasion] 
    ? OCCASIONS[product.occasion].name 
    : 'ギフト';

  const title = `${product.name} | ${occasionName} | HAREGift`;
  const description = `${product.description} 価格: ${product.price.toLocaleString()}円。HAREGiftで人気の${occasionName}ギフトです。`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'ja_JP',
      images: [
        {
          url: product.image,
          width: 300,
          height: 300,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [product.image],
    },
  };
}
