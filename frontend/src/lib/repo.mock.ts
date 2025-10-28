/**
 * 繝｢繝・け繝・・繧ｿ繧剃ｽｿ逕ｨ縺励◆蝠・刀繝ｪ繝昴ず繝医Μ
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ:
 * - 迴ｾ蝨ｨ縺ｯ繝繝溘・繝・・繧ｿ繧剃ｽｿ縺｣縺ｦ讀懃ｴ｢讖溯・繧偵す繝溘Η繝ｬ繝ｼ繝・
 * - 蟆・擂縲∝ｮ滄圀縺ｮAPI縺ｫ鄂ｮ縺肴鋤縺医ｋ髫帙・莠呈鋤諤ｧ繧剃ｿ昴▽
 * - 繝輔Ο繝ｳ繝医お繝ｳ繝峨・髢狗匱繝ｻ繝・せ繝医ｒ API 辟｡縺励〒蜿ｯ閭ｽ縺ｫ縺吶ｋ
 */

import { GiftItem, SearchParams, SearchResponse, OccasionKey } from './types'

/**
 * 繝繝溘・繝・・繧ｿ・磯幕逋ｺ繝ｻ繝・せ繝育畑・・
 * 
 * 譛ｬ譚･縺ｯ scripts/data/sample_items.json 縺ｨ蜷後§繝・・繧ｿ縺縺後・
 * 繝輔Ο繝ｳ繝医お繝ｳ繝牙腰菴薙〒縺ｮ蜍穂ｽ懃｢ｺ隱阪・縺溘ａ迢ｬ遶九＠縺ｦ螳夂ｾｩ
 */
const MOCK_ITEMS: GiftItem[] = [
  {
    id: "item_001",
    title: "Premium Towel Gift Set",
    price: 2500,
    image_url: "https://picsum.photos/400/400?random=1",
    merchant: "Gift Shop Hanamusubi",
    source: "rakuten",
    url: "https://example.com/products/towel_gift_set",
    affiliate_url: "https://af.rakuten.co.jp/dummy/towel_gift_set",
    occasion: "funeral_return",
    updated_at: 1697500800
  },
  {
    id: "item_002", 
    title: "Imabari Towel Wooden Box Gift",
    price: 4800,
    image_url: "https://picsum.photos/400/400?random=2",
    merchant: "Imabari Towel Specialty Store",
    source: "rakuten",
    url: "https://example.com/products/imabari_towel",
    affiliate_url: "https://af.rakuten.co.jp/dummy/imabari_towel",
    occasion: "wedding_return",
    updated_at: 1697587200
  },
  {
    id: "item_003",
    title: "Catalog Gift Yasuragi", 
    price: 8500,
    image_url: "https://picsum.photos/400/400?random=3",
    merchant: "Catalog Gift Forest",
    source: "rakuten",
    url: "https://example.com/products/catalog_yasuragi", 
    affiliate_url: "https://af.rakuten.co.jp/dummy/catalog_yasuragi",
    occasion: "baby_return",
    updated_at: 1697673600
  },
  {
    id: "item_004",
    title: "Rice Gift Set (2kg x 3 varieties)",
    price: 3200,
    image_url: "https://picsum.photos/400/400?random=4", 
    merchant: "Traditional Rice Shop Honoka",
    source: "rakuten",
    url: "https://example.com/products/rice_gift_set",
    affiliate_url: "https://af.rakuten.co.jp/dummy/rice_gift_set",
    occasion: "funeral_return", 
    updated_at: 1697760000
  },
  {
    id: "item_005",
    title: "Premium Soap Set (Additive-free)",
    price: 1980,
    image_url: "https://picsum.photos/400/400?random=5",
    merchant: "Natural Soap Workshop", 
    source: "rakuten",
    url: "https://example.com/products/soap_gift_set",
    affiliate_url: "https://af.rakuten.co.jp/dummy/soap_gift_set",
    occasion: "wedding_return",
    updated_at: 1697846400
  },
  {
    id: "item_006", 
    title: "Traditional Sweets Assortment Wa-no-Kokoro",
    price: 5200,
    image_url: "https://picsum.photos/400/400?random=6",
    merchant: "Traditional Confectionery Kagetsudo",
    source: "rakuten",
    url: "https://example.com/products/wagashi_assort",
    affiliate_url: "https://af.rakuten.co.jp/dummy/wagashi_assort", 
    occasion: "baby_return",
    updated_at: 1697932800
  },
  {
    id: "item_007",
    title: "Premium Coffee Gift",
    price: 12800, 
    image_url: "https://picsum.photos/400/400?random=7",
    merchant: "Specialty Coffee Bean Store",
    source: "rakuten",
    url: "https://example.com/products/premium_coffee",
    affiliate_url: "https://af.rakuten.co.jp/dummy/premium_coffee",
    occasion: "funeral_return",
    updated_at: 1698019200
  },
  {
    id: "item_008",
    title: "Fruit Jelly Assortment",
    price: 2800,
    image_url: "https://picsum.photos/400/400?random=8", 
    merchant: "Fruit Farm Direct Store",
    source: "rakuten",
    url: "https://example.com/products/fruit_jelly_set",
    affiliate_url: "https://af.rakuten.co.jp/dummy/fruit_jelly_set",
    occasion: "wedding_return",
    updated_at: 1698105600
  },
  {
    id: "item_009",
    title: "Organic Seasoning Set",
    price: 6800,
    image_url: "https://picsum.photos/400/400?random=9",
    merchant: "Organic Food Forest",
    source: "rakuten", 
    url: "https://example.com/products/organic_seasoning",
    affiliate_url: "https://af.rakuten.co.jp/dummy/organic_seasoning",
    occasion: "baby_return",
    updated_at: 1698192000
  },
  {
    id: "item_010",
    title: "Premium Green Tea Gift (Shizuoka)",
    price: 4500,
    image_url: "https://picsum.photos/400/400?random=10",
    merchant: "Shizuoka Tea Garden Direct Sales",
    source: "rakuten",
    url: "https://example.com/products/premium_greentea", 
    affiliate_url: "https://af.rakuten.co.jp/dummy/premium_greentea",
    occasion: "funeral_return",
    updated_at: 1698278400
  },
  {
    id: "item_011",
    title: "Baumkuchen Gift (Individual packaging)",
    price: 3800,
    image_url: "https://picsum.photos/400/400?random=11",
    merchant: "Confectionery Workshop Sweet Dream",
    source: "rakuten",
    url: "https://example.com/products/baumkuchen_gift",
    affiliate_url: "https://af.rakuten.co.jp/dummy/baumkuchen_gift",
    occasion: "wedding_return", 
    updated_at: 1698364800
  },
  {
    id: "item_012",
    title: "Catalog Gift Eraberuclub",
    price: 15000,
    image_url: "https://picsum.photos/400/400?random=12",
    merchant: "Gift Catalog Center",
    source: "rakuten",
    url: "https://example.com/products/catalog_eraberuclub",
    affiliate_url: "https://af.rakuten.co.jp/dummy/catalog_eraberuclub",
    occasion: "baby_return",
    updated_at: 1698451200
  }
]

/**
 * 繝｢繝・け繝・・繧ｿ繧剃ｽｿ縺｣縺溷膚蜩∵､懃ｴ｢繧ｵ繝ｼ繝薙せ
 * 
 * 螳滄圀縺ｮAPI縺ｮ蜍穂ｽ懊ｒ繧ｷ繝溘Η繝ｬ繝ｼ繝医＠縲∝酔縺倥う繝ｳ繧ｿ繝ｼ繝輔ぉ繝ｼ繧ｹ繧呈署萓・
 */
export class MockProductRepository {
  
  /**
   * 蝠・刀讀懃ｴ｢繧貞ｮ溯｡後＠縺ｾ縺呻ｼ医Δ繝・け繝・・繧ｿ迚茨ｼ・
   * 
   * @param params 讀懃ｴ｢繝代Λ繝｡繝ｼ繧ｿ
   * @returns Promise<SearchResponse> 讀懃ｴ｢邨先棡
   * 
   * 蜃ｦ逅・・豬√ｌ:
   * 1. 繧ｭ繝ｼ繝ｯ繝ｼ繝画､懃ｴ｢・医ち繧､繝医Ν繝ｻ讌ｭ閠・錐縺ｧ縺ｮ驛ｨ蛻・ｸ閾ｴ・・
   * 2. 逕ｨ騾斐ヵ繧｣繝ｫ繧ｿ
   * 3. 萓｡譬ｼ繝輔ぅ繝ｫ繧ｿ  
   * 4. 繧ｽ繝ｼ繝・
   * 5. 繝壹・繧ｸ繝ｳ繧ｰ・・imit/offset・・
   */
  async searchItems(params: SearchParams): Promise<SearchResponse> {
    // 蜃ｦ逅・凾髢薙ｒ繧ｷ繝溘Η繝ｬ繝ｼ繝茨ｼ亥ｮ滄圀縺ｮAPI繧ｳ繝ｼ繝ｫ縺ｮ繧医≧縺ｪ驕・ｻｶ・・
    await this._simulateDelay(100)
    
    let filteredItems = [...MOCK_ITEMS]
    
    // 1. 繧ｭ繝ｼ繝ｯ繝ｼ繝画､懃ｴ｢・医ち繧､繝医Ν縺ｨ讌ｭ閠・錐縺ｧ驛ｨ蛻・ｸ閾ｴ・・
    if (params.q) {
      const keyword = params.q.toLowerCase()
      filteredItems = filteredItems.filter(item => 
        item.title.toLowerCase().includes(keyword) ||
        item.merchant.toLowerCase().includes(keyword)
      )
    }
    
    // 2. 逕ｨ騾斐ヵ繧｣繝ｫ繧ｿ
    if (params.occasion) {
      filteredItems = filteredItems.filter(item => item.occasion === params.occasion)
    }
    
    // 3. 萓｡譬ｼ繝輔ぅ繝ｫ繧ｿ
    if (params.price_min !== undefined) {
      filteredItems = filteredItems.filter(item => item.price >= params.price_min!)
    }
    if (params.price_max !== undefined) {
      filteredItems = filteredItems.filter(item => item.price <= params.price_max!)
    }
    
    // 4. 繧ｽ繝ｼ繝・
    const sortKey = params.sort || 'updated_at:desc'
    filteredItems = this._sortItems(filteredItems, sortKey)
    
    // 5. 繝壹・繧ｸ繝ｳ繧ｰ
    const limit = params.limit || 20
    const offset = params.offset || 0
    const total = filteredItems.length
    const hits = filteredItems.slice(offset, offset + limit)
    
    return {
      total,
      hits,
      query: params.q || '',
      processing_time_ms: 15, // 繝｢繝・け縺ｪ縺ｮ縺ｧ蝗ｺ螳壼､
      limit,
      offset
    }
  }
  
  /**
   * ID縺ｧ迚ｹ螳壹・蝠・刀繧貞叙蠕励＠縺ｾ縺・
   * 
   * @param itemId 蝠・刀ID
   * @returns Promise<GiftItem> 蝠・刀諠・ｱ
   * @throws Error 蝠・刀縺瑚ｦ九▽縺九ｉ縺ｪ縺・ｴ蜷・
   */
  async getItemById(itemId: string): Promise<GiftItem> {
    await this._simulateDelay(50)
    
    const item = MOCK_ITEMS.find(item => item.id === itemId)
    if (!item) {
      throw new Error(`Item with ID '${itemId}' not found`)
    }
    
    return item
  }
  
  /**
   * 蛻ｩ逕ｨ蜿ｯ閭ｽ縺ｪ逕ｨ騾比ｸ隕ｧ繧貞叙蠕励＠縺ｾ縺・
   * 
   * @returns Promise<Occasion[]> 逕ｨ騾比ｸ隕ｧ
   */
  async getOccasions() {
    await this._simulateDelay(30)
    
    return [
      { key: 'funeral_return' as OccasionKey, label: '鬥吝・霑斐＠' },
      { key: 'wedding_return' as OccasionKey, label: '邨仙ｩ壼・逾昴＞' },
      { key: 'baby_return' as OccasionKey, label: '蜃ｺ逕｣蜀・･昴＞' }
    ]
  }
  
  /**
   * 繧ｽ繝ｼ繝亥・逅・ｼ亥・驛ｨ逕ｨ・・
   * 
   * @param items 繧ｽ繝ｼ繝亥ｯｾ雎｡縺ｮ蝠・刀驟榊・
   * @param sortKey 繧ｽ繝ｼ繝域擅莉ｶ
   * @returns 繧ｽ繝ｼ繝域ｸ医∩縺ｮ蝠・刀驟榊・
   */
  private _sortItems(items: GiftItem[], sortKey: string): GiftItem[] {
    return [...items].sort((a, b) => {
      switch (sortKey) {
        case 'price:asc':
          return a.price - b.price
        case 'price:desc':
          return b.price - a.price
        case 'updated_at:desc':
        default:
          return b.updated_at - a.updated_at
      }
    })
  }
  
  /**
   * API蜻ｼ縺ｳ蜃ｺ縺励・驕・ｻｶ繧偵す繝溘Η繝ｬ繝ｼ繝茨ｼ亥・驛ｨ逕ｨ・・
   * 
   * @param ms 驕・ｻｶ譎る俣・医Α繝ｪ遘抵ｼ・
   */
  private _simulateDelay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

/**
 * 繧ｷ繝ｳ繧ｰ繝ｫ繝医Φ繧､繝ｳ繧ｹ繧ｿ繝ｳ繧ｹ
 * 
 * 繧｢繝励Μ繧ｱ繝ｼ繧ｷ繝ｧ繝ｳ蜈ｨ菴薙〒蜷後§繧､繝ｳ繧ｹ繧ｿ繝ｳ繧ｹ繧剃ｽｿ縺・屓縺・
 */
export const mockProductRepository = new MockProductRepository()