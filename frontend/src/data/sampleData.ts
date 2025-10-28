/**
 * 繝｢繝・け繝・・繧ｿ繝ｻ繧ｵ繝ｳ繝励Ν繝・・繧ｿ
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ・・
 * - 髢狗匱荳ｭ縺ｮ繝・せ繝育畑繝・・繧ｿ繧呈署萓・
 * - API縺後∪縺螳梧・縺励※縺・↑縺・凾縺ｮ莉｣譖ｿ繝・・繧ｿ
 * - 繝・じ繧､繝ｳ遒ｺ隱咲畑縺ｮ繝ｪ繧｢繝ｫ縺ｪ繧ｵ繝ｳ繝励Ν
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 縲檎ｷｴ鄙堤畑縺ｮ縺翫ｂ縺｡繧・阪・繧医≧縺ｪ繝輔ぃ繧､繝ｫ縺ｧ縺吶・
 * 譛ｬ迚ｩ縺ｮAPI縺後〒縺阪ｋ縺ｾ縺ｧ縺ｮ髢薙・
 * 縲後％繧薙↑蝠・刀縺後≠縺｣縺溘ｉ...縲阪→縺・≧莉ｮ縺ｮ繝・・繧ｿ縺ｧ
 * 逕ｻ髱｢縺ｮ蜍穂ｽ懊ｒ遒ｺ隱阪☆繧九◆繧√↓菴ｿ縺・∪縺吶・
 */

import type { GiftItem, SearchResponse, Occasion } from '../lib/types'

/**
 * 繧ｵ繝ｳ繝励Ν縺ｮ蝠・刀繝・・繧ｿ
 * 
 * 螳滄圀縺ｮ蜀・･昴＞蝠・刀繧偵う繝｡繝ｼ繧ｸ縺励◆譫ｶ遨ｺ縺ｮ繝・・繧ｿ
 */
export const SAMPLE_GIFTS: GiftItem[] = [
  {
    id: 'towel_001',
    title: '莉頑ｲｻ繧ｿ繧ｪ繝ｫ 繧ｮ繝輔ヨ繧ｻ繝・ヨ・医ヵ繧ｧ繧､繧ｹ繧ｿ繧ｪ繝ｫ2譫夲ｼ・,
    price: 3000,
    image_url: '/images/sample/towel_gift_set.jpg',
    merchant: '莉頑ｲｻ繧ｿ繧ｪ繝ｫ蟆る摩蠎・,
    source: 'rakuten',
    url: 'https://example.com/towel_001',
    affiliate_url: 'https://affiliate.example.com/towel_001',
    occasion: 'wedding_return',
    updated_at: 1705267200 // 2024蟷ｴ1譛・5譌･縺ｮUnix繧ｿ繧､繝繧ｹ繧ｿ繝ｳ繝・
  },
  {
    id: 'sweets_001',
    title: '繝舌え繝繧ｯ繝ｼ繝倥Φ隧ｰ繧∝粋繧上○・亥句桁陬・蛟句・繧奇ｼ・,
    price: 2500,
    image_url: '/images/sample/baumkuchen_set.jpg',
    merchant: '繧ｹ繧､繝ｼ繝・ヵ繧｡繧ｯ繝医Μ繝ｼ',
    source: 'rakuten',
    url: 'https://example.com/sweets_001',
    affiliate_url: 'https://affiliate.example.com/sweets_001',
    occasion: 'baby_return',
    updated_at: 1705180800 // 2024蟷ｴ1譛・4譌･
  },
  {
    id: 'tea_001',
    title: '髱吝ｲ｡闌ｶ繧ｮ繝輔ヨ・井ｸ顔ｴ夂・闌ｶ100gﾃ・譛ｬ・・,
    price: 4200,
    image_url: '/images/sample/tea_gift.jpg',
    merchant: '髱吝ｲ｡闌ｶ蝨堤峩騾・,
    source: 'rakuten',
    url: 'https://example.com/tea_001',
    affiliate_url: 'https://affiliate.example.com/tea_001',
    occasion: 'funeral_return',
    updated_at: 1705094400 // 2024蟷ｴ1譛・3譌･
  },
  {
    id: 'rice_001',
    title: '譁ｰ貎溽恁逕｣繧ｳ繧ｷ繝偵き繝ｪ・・kgﾃ・陲具ｼ・,
    price: 5500,
    image_url: '/images/sample/rice_gift.jpg',
    merchant: '譁ｰ貎溽ｱｳ霎ｲ螳ｶ',
    source: 'rakuten',
    url: 'https://example.com/rice_001',
    affiliate_url: 'https://affiliate.example.com/rice_001',
    occasion: 'wedding_return',
    updated_at: 1705008000 // 2024蟷ｴ1譛・2譌･
  },
  {
    id: 'soap_001',
    title: '辟｡豺ｻ蜉遏ｳ鮖ｸ繧ｮ繝輔ヨ・医ワ繝ｳ繝峨た繝ｼ繝・蛟九そ繝・ヨ・・,
    price: 1800,
    image_url: '/images/sample/soap_gift.jpg',
    merchant: '繝翫メ繝･繝ｩ繝ｫ繧ｽ繝ｼ繝怜ｷ･謌ｿ',
    source: 'rakuten',
    url: 'https://example.com/soap_001',
    affiliate_url: 'https://affiliate.example.com/soap_001',
    occasion: 'baby_return',
    updated_at: 1704921600 // 2024蟷ｴ1譛・1譌･
  },
  {
    id: 'tableware_001',
    title: '鄒取ｿ・┥ 螟ｫ蟀ｦ闌ｶ遒励そ繝・ヨ・域｡千ｮｱ蜈･繧奇ｼ・,
    price: 8000,
    image_url: '/images/sample/tableware_gift.jpg',
    merchant: '鄒取ｿ・┥遯ｯ蜈・,
    source: 'rakuten',
    url: 'https://example.com/tableware_001',
    affiliate_url: 'https://affiliate.example.com/tableware_001',
    occasion: 'wedding_return',
    updated_at: 1704835200 // 2024蟷ｴ1譛・0譌･
  },
  {
    id: 'coffee_001',
    title: '繝峨Μ繝・・繧ｳ繝ｼ繝偵・繧ｮ繝輔ヨ・・0遞ｮ鬘榲・蛟九そ繝・ヨ・・,
    price: 3500,
    image_url: '/images/sample/coffee_gift.jpg',
    merchant: '閾ｪ螳ｶ辟咏・繧ｳ繝ｼ繝偵・蠎・,
    source: 'rakuten',
    url: 'https://example.com/coffee_001',
    affiliate_url: 'https://affiliate.example.com/coffee_001',
    occasion: 'funeral_return',
    updated_at: 1704748800 // 2024蟷ｴ1譛・譌･
  },
  {
    id: 'honey_001',
    title: '蝗ｽ逕｣縺ｯ縺｡縺ｿ縺､3遞ｮ繧ｻ繝・ヨ・亥推200g・・,
    price: 4800,
    image_url: '/images/sample/honey_gift.jpg',
    merchant: '鬢願怩蝣ｴ逶ｴ騾・,
    source: 'rakuten',
    url: 'https://example.com/honey_001',
    affiliate_url: 'https://affiliate.example.com/honey_001',
    occasion: 'baby_return',
    updated_at: 1704662400 // 2024蟷ｴ1譛・譌･
  }
]

/**
 * 繧ｵ繝ｳ繝励Ν讀懃ｴ｢繝ｬ繧ｹ繝昴Φ繧ｹ
 * 
 * API蜻ｼ縺ｳ蜃ｺ縺励・繝｢繝・け逕ｨ
 */
export const SAMPLE_SEARCH_RESPONSE: SearchResponse = {
  total: SAMPLE_GIFTS.length,
  hits: SAMPLE_GIFTS,
  query: '繧ｿ繧ｪ繝ｫ',
  processing_time_ms: 45,
  limit: 20,
  offset: 0
}

/**
 * 莠ｺ豌玲､懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝・
 * 
 * 讀懃ｴ｢繝輔か繝ｼ繝縺ｧ繧ｵ繧ｸ繧ｧ繧ｹ繝医☆繧狗畑騾・
 */
export const POPULAR_KEYWORDS = [
  '繧ｿ繧ｪ繝ｫ',
  '繝舌え繝繧ｯ繝ｼ繝倥Φ',
  '繧ｳ繝ｼ繝偵・',
  '縺顔ｱｳ',
  '縺願幻',
  '遏ｳ鮖ｸ',
  '鬟溷勣',
  '縺ｯ縺｡縺ｿ縺､',
  '繧ｸ繝･繝ｼ繧ｹ',
  '縺願藷蟄・,
  '隱ｿ蜻ｳ譁・,
  '繧ｫ繧ｿ繝ｭ繧ｰ繧ｮ繝輔ヨ'
]

/**
 * 萓｡譬ｼ蟶ｯ蛻･縺ｮ繧ｵ繝ｳ繝励Ν蝠・刀謨ｰ
 * 
 * 繝輔ぅ繝ｫ繧ｿUI縺ｧ蜿り・ュ蝣ｱ縺ｨ縺励※陦ｨ遉ｺ
 */
export const SAMPLE_PRICE_DISTRIBUTION = {
  '縲・,000蜀・: 12,
  '1,000蜀・・,000蜀・: 45,
  '3,000蜀・・,000蜀・: 38,
  '5,000蜀・・0,000蜀・: 25,
  '10,000蜀・・: 15
}

/**
 * 逕ｨ騾泌挨縺ｮ繧ｵ繝ｳ繝励Ν蝠・刀謨ｰ
 * 
 * 繝輔ぅ繝ｫ繧ｿUI縺ｧ蜿り・ュ蝣ｱ縺ｨ縺励※陦ｨ遉ｺ
 */
export const SAMPLE_OCCASION_DISTRIBUTION = {
  wedding_return: 48,
  baby_return: 42,
  funeral_return: 35
}

/**
 * 繝・Δ逕ｨ繧ｨ繝ｩ繝ｼ繝ｬ繧ｹ繝昴Φ繧ｹ
 * 
 * 繧ｨ繝ｩ繝ｼ繝上Φ繝峨Μ繝ｳ繧ｰ縺ｮ繝・せ繝育畑
 */
export const SAMPLE_ERROR_RESPONSES = {
  network: {
    error: '繝阪ャ繝医Ρ繝ｼ繧ｯ繧ｨ繝ｩ繝ｼ',
    detail: '繧ｵ繝ｼ繝舌・縺ｫ謗･邯壹〒縺阪∪縺帙ｓ縺ｧ縺励◆縲ゅう繝ｳ繧ｿ繝ｼ繝阪ャ繝域磁邯壹ｒ遒ｺ隱阪＠縺ｦ縺上□縺輔＞縲・
  },
  notFound: {
    error: '蝠・刀縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ',
    detail: '謖・ｮ壹＆繧後◆譚｡莉ｶ縺ｫ荳閾ｴ縺吶ｋ蝠・刀縺後≠繧翫∪縺帙ｓ縺ｧ縺励◆縲・
  },
  serverError: {
    error: '繧ｵ繝ｼ繝舌・繧ｨ繝ｩ繝ｼ',
    detail: '繧ｵ繝ｼ繝舌・縺ｧ蝠城｡後′逋ｺ逕溘＠縺ｾ縺励◆縲ゅ＠縺ｰ繧峨￥譎る俣繧偵♀縺・※縺九ｉ蜀榊ｺｦ縺願ｩｦ縺励￥縺縺輔＞縲・
  }
}

/**
 * 繧ｵ繝ｳ繝励Ν邨ｱ險医ョ繝ｼ繧ｿ
 * 
 * 繝繝・す繝･繝懊・繝峨ｄ邂｡逅・判髱｢縺ｧ縺ｮ陦ｨ遉ｺ逕ｨ
 */
export const SAMPLE_STATS = {
  totalGifts: 135,
  totalSearches: 2480,
  popularOccasion: 'wedding_return',
  averagePrice: 4200,
  lastUpdated: 1705267200,
  dailySearches: [
    { date: '2024-01-15', count: 145 },
    { date: '2024-01-14', count: 132 },
    { date: '2024-01-13', count: 158 },
    { date: '2024-01-12', count: 167 },
    { date: '2024-01-11', count: 139 },
    { date: '2024-01-10', count: 124 },
    { date: '2024-01-09', count: 141 }
  ]
}

/**
 * 繧ｵ繝ｳ繝励Ν讀懃ｴ｢讖溯・縺ｮ繝倥Ν繝代・髢｢謨ｰ
 * 
 * 髢狗匱荳ｭ縺ｫ繧ｵ繝ｳ繝励Ν繝・・繧ｿ縺ｧ讀懃ｴ｢繧偵す繝溘Η繝ｬ繝ｼ繝医☆繧・
 */
export const searchSampleGifts = (query: string, occasion?: string): GiftItem[] => {
  let results = SAMPLE_GIFTS
  
  // 繧ｭ繝ｼ繝ｯ繝ｼ繝峨ヵ繧｣繝ｫ繧ｿ
  if (query && query.trim()) {
    const keyword = query.toLowerCase()
    results = results.filter(gift => 
      gift.title.toLowerCase().includes(keyword) ||
      gift.merchant.toLowerCase().includes(keyword)
    )
  }
  
  // 逕ｨ騾斐ヵ繧｣繝ｫ繧ｿ
  if (occasion) {
    results = results.filter(gift => gift.occasion === occasion)
  }
  
  return results
}

/**
 * 萓｡譬ｼ蟶ｯ縺ｧ繝輔ぅ繝ｫ繧ｿ繝ｪ繝ｳ繧ｰ
 * 
 * @param gifts - 蝠・刀荳隕ｧ
 * @param minPrice - 譛菴惹ｾ｡譬ｼ
 * @param maxPrice - 譛鬮倅ｾ｡譬ｼ
 * @returns 繝輔ぅ繝ｫ繧ｿ縺輔ｌ縺溷膚蜩∽ｸ隕ｧ
 */
export const filterGiftsByPrice = (
  gifts: GiftItem[], 
  minPrice?: number, 
  maxPrice?: number
): GiftItem[] => {
  return gifts.filter(gift => {
    if (minPrice !== undefined && gift.price < minPrice) return false
    if (maxPrice !== undefined && gift.price > maxPrice) return false
    return true
  })
}

/**
 * 繧ｽ繝ｼ繝域ｩ溯・
 * 
 * @param gifts - 蝠・刀荳隕ｧ
 * @param sortKey - 繧ｽ繝ｼ繝域擅莉ｶ
 * @returns 繧ｽ繝ｼ繝医＆繧後◆蝠・刀荳隕ｧ
 */
export const sortGifts = (gifts: GiftItem[], sortKey: string): GiftItem[] => {
  const sorted = [...gifts]
  
  switch (sortKey) {
    case 'price:asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price:desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'updated_at:desc':
    default:
      return sorted.sort((a, b) => b.updated_at - a.updated_at)
  }
}