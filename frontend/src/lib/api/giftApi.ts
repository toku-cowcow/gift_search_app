/**
 * 繧ｮ繝輔ヨ蝠・刀讀懃ｴ｢API
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ・・
 * - 繝舌ャ繧ｯ繧ｨ繝ｳ繝会ｼ・astAPI・峨・蝠・刀讀懃ｴ｢讖溯・縺ｨ騾壻ｿ｡
 * - 讀懃ｴ｢縲∬ｩｳ邏ｰ蜿門ｾ励∝茜逕ｨ繧ｷ繝ｼ繝ｳ蜿門ｾ励↑縺ｩ縺ｮAPI蜻ｼ縺ｳ蜃ｺ縺励ｒ邂｡逅・
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｯ縲後Ξ繧ｹ繝医Λ繝ｳ縺ｮ繝｡繝九Η繝ｼ繧呈ｳｨ譁・☆繧区婿豕輔阪・繧医≧縺ｪ繧ゅ・縲・
 * - 縲後ち繧ｪ繝ｫ繧呈､懃ｴ｢縺励※縲坂・ searchGifts()
 * - 縲後％縺ｮ蝠・刀縺ｮ隧ｳ邏ｰ繧呈蕗縺医※縲坂・ getGiftById()  
 * - 縲後←繧薙↑逕ｨ騾斐′縺ゅｋ縺ｮ・溘坂・ getOccasions()
 * 縺ｨ縺・▲縺溷・菴鍋噪縺ｪ縲梧ｳｨ譁・・莉墓婿縲阪ｒ螳夂ｾｩ縺励※縺・∪縺吶・
 */

import { api } from './client'
import type { 
  GiftItem, 
  SearchParams, 
  SearchResponse, 
  Occasion 
} from '../types'

/**
 * 繧ｮ繝輔ヨ讀懃ｴ｢API蜻ｼ縺ｳ蜃ｺ縺・
 * 
 * @param params - 讀懃ｴ｢譚｡莉ｶ・医く繝ｼ繝ｯ繝ｼ繝峨∫畑騾斐∽ｾ｡譬ｼ蟶ｯ縺ｪ縺ｩ・・
 * @returns 讀懃ｴ｢邨先棡・亥膚蜩∽ｸ隕ｧ + 邱丈ｻｶ謨ｰ + 繝壹・繧ｸ諠・ｱ・・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const results = await searchGifts({ 
 *   query: '繧ｿ繧ｪ繝ｫ', 
 *   occasion: '邨仙ｩ壼・逾昴＞', 
 *   minPrice: 1000, 
 *   maxPrice: 5000 
 * })
 */
export const searchGifts = async (params: SearchParams): Promise<SearchResponse> => {
  try {
    // 繝舌ャ繧ｯ繧ｨ繝ｳ繝峨・ /api/v1/search 繧ｨ繝ｳ繝峨・繧､繝ｳ繝医ｒ蜻ｼ縺ｳ蜃ｺ縺・
    const response = await api.get<SearchResponse>('/api/v1/search', {
      params: {
        q: params.q,
        occasion: params.occasion,
        price_min: params.price_min,
        price_max: params.price_max,
        sort: params.sort,
        limit: params.limit || 20,
        offset: params.offset || 0,
      }
    })
    
    return response.data
  } catch (error) {
    console.error('蝠・刀讀懃ｴ｢API繧ｨ繝ｩ繝ｼ:', error)
    
    // 繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺溷ｴ蜷医・遨ｺ縺ｮ邨先棡繧定ｿ斐☆
    // 螳滄圀縺ｮ繧｢繝励Μ縺ｧ縺ｯ繧ｨ繝ｩ繝ｼ繝｡繝・そ繝ｼ繧ｸ繧定｡ｨ遉ｺ縺吶ｋ縺ｪ縺ｩ縺ｮ蜃ｦ逅・ｂ蠢・ｦ・
    return {
      total: 0,
      hits: [],
      query: params.q || '',
      processing_time_ms: 0,
      limit: params.limit || 20,
      offset: params.offset || 0
    }
  }
}

/**
 * 繧ｮ繝輔ヨ蝠・刀隧ｳ邏ｰ蜿門ｾ・
 * 
 * @param itemId - 蝠・刀ID
 * @returns 蝠・刀隧ｳ邏ｰ諠・ｱ
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const giftDetail = await getGiftById('towel_001')
 */
export const getGiftById = async (itemId: string): Promise<GiftItem | null> => {
  try {
    // 繝舌ャ繧ｯ繧ｨ繝ｳ繝峨・ /api/v1/items/{id} 繧ｨ繝ｳ繝峨・繧､繝ｳ繝医ｒ蜻ｼ縺ｳ蜃ｺ縺・
    const response = await api.get<GiftItem>(`/api/v1/items/${itemId}`)
    return response.data
  } catch (error) {
    console.error('蝠・刀隧ｳ邏ｰ蜿門ｾ輸PI繧ｨ繝ｩ繝ｼ:', error)
    return null // 蝠・刀縺瑚ｦ九▽縺九ｉ縺ｪ縺・ｴ蜷医・null繧定ｿ斐☆
  }
}

/**
 * 蛻ｩ逕ｨ繧ｷ繝ｼ繝ｳ荳隕ｧ蜿門ｾ・
 * 
 * @returns 蛻ｩ逕ｨ蜿ｯ閭ｽ縺ｪ繧ｷ繝ｼ繝ｳ・育ｵ仙ｩ壼・逾昴＞縲∝・逕｣蜀・･昴＞縲・ｦ吝・霑斐＠縺ｪ縺ｩ・峨・荳隕ｧ
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const occasions = await getOccasions()
 * // 竊・[{ id: 'wedding', name: '邨仙ｩ壼・逾昴＞' }, ...]
 */
export const getOccasions = async (): Promise<Occasion[]> => {
  try {
    // 繝舌ャ繧ｯ繧ｨ繝ｳ繝峨・ /api/v1/occasions 繧ｨ繝ｳ繝峨・繧､繝ｳ繝医ｒ蜻ｼ縺ｳ蜃ｺ縺・
    const response = await api.get<Occasion[]>('/api/v1/occasions')
    return response.data
  } catch (error) {
    console.error('蛻ｩ逕ｨ繧ｷ繝ｼ繝ｳ蜿門ｾ輸PI繧ｨ繝ｩ繝ｼ:', error)
    
    // 繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺溷ｴ蜷医・繝・ヵ繧ｩ繝ｫ繝医・繧ｷ繝ｼ繝ｳ繧定ｿ斐☆
    return [
      { key: 'wedding_return', label: '邨仙ｩ壼・逾昴＞' },
      { key: 'baby_return', label: '蜃ｺ逕｣蜀・･昴＞' },
      { key: 'funeral_return', label: '鬥吝・霑斐＠' },
    ]
  }
}

/**
 * 繧ｷ繧ｹ繝・Β繝倥Ν繧ｹ繝√ぉ繝・け
 * 
 * @returns 繝舌ャ繧ｯ繧ｨ繝ｳ繝峨し繝ｼ繝舌・縺ｮ遞ｼ蜒咲憾豕・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const isHealthy = await checkHealth()
 * if (!isHealthy) {
 *   // 繧ｵ繝ｼ繝舌・繧ｨ繝ｩ繝ｼ繝｡繝・そ繝ｼ繧ｸ繧定｡ｨ遉ｺ
 * }
 */
export const checkHealth = async (): Promise<boolean> => {
  try {
    // 繝舌ャ繧ｯ繧ｨ繝ｳ繝峨・ /health 繧ｨ繝ｳ繝峨・繧､繝ｳ繝医ｒ蜻ｼ縺ｳ蜃ｺ縺・
    const response = await api.get('/health')
    
    // 繝ｬ繧ｹ繝昴Φ繧ｹ縺梧ｭ｣蟶ｸ縺ｧ縲《tatus縺・healthy"縺ｮ蝣ｴ蜷医・true
    return response.data?.status === 'healthy'
  } catch (error) {
    console.error('繝倥Ν繧ｹ繝√ぉ繝・け繧ｨ繝ｩ繝ｼ:', error)
    return false
  }
}

/**
 * 讀懃ｴ｢邨ｱ險域ュ蝣ｱ蜿門ｾ・
 * 
 * @returns 讀懃ｴ｢縺ｫ髢｢縺吶ｋ邨ｱ險域ュ蝣ｱ・井ｺｺ豌励く繝ｼ繝ｯ繝ｼ繝峨√ｈ縺丈ｽｿ繧上ｌ繧狗畑騾斐↑縺ｩ・・
 */
export const getSearchStats = async () => {
  try {
    // 繝舌ャ繧ｯ繧ｨ繝ｳ繝峨・ /api/v1/stats 繧ｨ繝ｳ繝峨・繧､繝ｳ繝医ｒ蜻ｼ縺ｳ蜃ｺ縺・
    const response = await api.get('/api/v1/stats')
    return response.data
  } catch (error) {
    console.error('邨ｱ險域ュ蝣ｱ蜿門ｾ輸PI繧ｨ繝ｩ繝ｼ:', error)
    return null
  }
}