/**
 * 繝・・繧ｿ蜿門ｾ励・邨ｱ荳遯灘哨
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ:
 * - 繝輔Ο繝ｳ繝医お繝ｳ繝峨さ繝ｳ繝昴・繝阪Φ繝医′逶ｴ謗･蜻ｼ縺ｳ蜃ｺ縺吶ョ繝ｼ繧ｿ蜿門ｾ鈴未謨ｰ繧呈署萓・
 * - FastAPI螳溯｣・→繝｢繝・け繝・・繧ｿ繧堤腸蠅・､画焚縺ｧ蛻・ｊ譖ｿ縺亥庄閭ｽ
 * - 繝・・繧ｿ繧ｽ繝ｼ繧ｹ縺ｮ螟画峩縺後さ繝ｳ繝昴・繝阪Φ繝医↓蠖ｱ髻ｿ縺励↑縺・ｈ縺・歓雎｡蛹・
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ:
 * 縲悟女莉倅ｿゅ阪・繧医≧縺ｪ繝輔ぃ繧､繝ｫ縺ｧ縺吶・
 * - 譛ｬ迚ｩ縺ｮ繧ｵ繝ｼ繝舌・・・astAPI・峨°繧牙叙蠕・竊・DATA_SOURCE='api'
 * - 邱ｴ鄙堤畑縺ｮ繧ｵ繝ｳ繝励Ν繝・・繧ｿ縺九ｉ蜿門ｾ・竊・DATA_SOURCE='mock'  
 * 險ｭ螳壹ｒ螟峨∴繧九□縺代〒縲√ョ繝ｼ繧ｿ縺ｮ蜿門ｾ怜・繧貞､画峩縺ｧ縺阪∪縺吶・
 */

import { GiftItem, SearchParams, SearchResponse, Occasion } from './types'
import { mockProductRepository } from './repo.mock'
import * as giftApi from './api/giftApi'

/**
 * 菴ｿ逕ｨ縺吶ｋ繝・・繧ｿ繧ｽ繝ｼ繧ｹ縺ｮ驕ｸ謚・
 * 
 * 迺ｰ蠅・､画焚 NEXT_PUBLIC_DATA_SOURCE 縺ｧ蛻ｶ蠕｡蜿ｯ閭ｽ
 * - 'api': FastAPI繧ｵ繝ｼ繝舌・繧剃ｽｿ逕ｨ・域悽逡ｪ繝ｻ髢狗匱繧ｵ繝ｼ繝舌・謗･邯壽凾・・
 * - 'mock': 繝｢繝・け繝・・繧ｿ繧剃ｽｿ逕ｨ・医ョ繝輔か繝ｫ繝医√が繝輔Λ繧､繝ｳ髢狗匱逕ｨ・・
 */
const DATA_SOURCE = process.env.NEXT_PUBLIC_DATA_SOURCE || 'mock'

/**
 * FastAPI逕ｨ縺ｮ繝ｪ繝昴ず繝医Μ螳溯｣・
 * 
 * 譁ｰ縺励＞giftApi繧剃ｽｿ逕ｨ縺励※FastAPI縺ｨ騾壻ｿ｡
 */
const apiRepository = {
  async searchItems(params: SearchParams): Promise<SearchResponse> {
    // FastAPI縺ｮ繝ｬ繧ｹ繝昴Φ繧ｹ蠖｢蠑上°繧画里蟄倥・蝙句ｽ｢蠑上↓螟画鋤
    const apiResponse = await giftApi.searchGifts(params)
    
    return {
      total: apiResponse.total,
      hits: apiResponse.hits,
      query: params.q || '',
      processing_time_ms: apiResponse.processing_time_ms,
      limit: apiResponse.limit,
      offset: apiResponse.offset
    }
  },

  async getItemById(itemId: string): Promise<GiftItem> {
    const item = await giftApi.getGiftById(itemId)
    if (!item) {
      throw new Error('蝠・刀縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ縺ｧ縺励◆')
    }
    return item
  },

  async getOccasions(): Promise<Occasion[]> {
    return await giftApi.getOccasions()
  }
}

/**
 * 螳滄圀縺ｫ菴ｿ逕ｨ縺吶ｋ繝ｪ繝昴ず繝医Μ繧帝∈謚・
 * 
 * FastAPI謗･邯壹→繝｢繝・け繝・・繧ｿ繧堤腸蠅・､画焚縺ｧ蛻・ｊ譖ｿ縺・
 */
const getRepository = () => {
  switch (DATA_SOURCE) {
    case 'api':
      console.log('倹 FastAPI 繧ｵ繝ｼ繝舌・縺ｫ謗･邯壹＠縺ｦ縺・∪縺・..')
      return apiRepository
    case 'mock':
    default:
      console.log('投 繝｢繝・け繝・・繧ｿ繧剃ｽｿ逕ｨ縺励※縺・∪縺・)
      return mockProductRepository
  }
}

// 菴ｿ逕ｨ縺吶ｋ繝ｪ繝昴ず繝医Μ縺ｮ繧､繝ｳ繧ｹ繧ｿ繝ｳ繧ｹ
const repository = getRepository()

/**
 * 蝠・刀繧呈､懃ｴ｢縺励∪縺・
 * 
 * 繧ｳ繝ｳ繝昴・繝阪Φ繝医°繧峨・縺薙・髢｢謨ｰ繧貞他縺ｳ蜃ｺ縺吶％縺ｨ縺ｧ縲・
 * 繝・・繧ｿ繧ｽ繝ｼ繧ｹ繧呈э隴倥○縺壹↓蝠・刀讀懃ｴ｢縺悟庄閭ｽ
 * 
 * @param params 讀懃ｴ｢繝代Λ繝｡繝ｼ繧ｿ
 * @returns Promise<SearchResponse> 讀懃ｴ｢邨先棡
 * 
 * 菴ｿ逕ｨ萓・
 * ```typescript
 * const results = await searchItems({
 *   q: '繧ｿ繧ｪ繝ｫ',
 *   occasion: 'funeral_return',
 *   price_max: 5000
 * })
 * ```
 */
export const searchItems = async (params: SearchParams): Promise<SearchResponse> => {
  try {
    return await repository.searchItems(params)
  } catch (error) {
    console.error('蝠・刀讀懃ｴ｢縺ｧ繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆:', error)
    throw new Error('蝠・刀讀懃ｴ｢縺ｫ螟ｱ謨励＠縺ｾ縺励◆縲ゅ＠縺ｰ繧峨￥譎る俣繧偵♀縺・※蜀榊ｺｦ縺願ｩｦ縺励￥縺縺輔＞縲・)
  }
}

/**
 * 蝠・刀ID縺ｧ迚ｹ螳壹・蝠・刀繧貞叙蠕励＠縺ｾ縺・
 * 
 * @param itemId 蝠・刀ID
 * @returns Promise<GiftItem> 蝠・刀諠・ｱ
 * 
 * 菴ｿ逕ｨ萓・
 * ```typescript
 * const item = await getItemById('item_001')
 * ```
 */
export const getItemById = async (itemId: string): Promise<GiftItem> => {
  try {
    return await repository.getItemById(itemId)
  } catch (error) {
    console.error(`蝠・刀蜿門ｾ励〒繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆ (ID: ${itemId}):`, error)
    throw new Error('蝠・刀諠・ｱ縺ｮ蜿門ｾ励↓螟ｱ謨励＠縺ｾ縺励◆縲・)
  }
}

/**
 * 蛻ｩ逕ｨ蜿ｯ閭ｽ縺ｪ逕ｨ騾比ｸ隕ｧ繧貞叙蠕励＠縺ｾ縺・
 * 
 * @returns Promise<Occasion[]> 逕ｨ騾比ｸ隕ｧ
 * 
 * 菴ｿ逕ｨ萓・
 * ```typescript
 * const occasions = await getOccasions()
 * // 繝輔ぅ繝ｫ繧ｿ縺ｮ繧ｪ繝励す繝ｧ繝ｳ縺ｨ縺励※菴ｿ逕ｨ
 * ```
 */
export const getOccasions = async (): Promise<Occasion[]> => {
  try {
    return await repository.getOccasions()
  } catch (error) {
    console.error('逕ｨ騾比ｸ隕ｧ縺ｮ蜿門ｾ励〒繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆:', error)
    throw new Error('逕ｨ騾比ｸ隕ｧ縺ｮ蜿門ｾ励↓螟ｱ謨励＠縺ｾ縺励◆縲・)
  }
}

/**
 * 迴ｾ蝨ｨ菴ｿ逕ｨ荳ｭ縺ｮ繝・・繧ｿ繧ｽ繝ｼ繧ｹ繧貞叙蠕励＠縺ｾ縺呻ｼ医ョ繝舌ャ繧ｰ逕ｨ・・
 * 
 * @returns string 繝・・繧ｿ繧ｽ繝ｼ繧ｹ蜷・
 */
export const getCurrentDataSource = (): string => {
  return DATA_SOURCE
}

/**
 * 繝倥Ν繧ｹ繝√ぉ繝・け・域磁邯夂｢ｺ隱搾ｼ・
 * 
 * 繝・・繧ｿ繧ｽ繝ｼ繧ｹ縺梧ｭ｣蟶ｸ縺ｫ蜍穂ｽ懊＠縺ｦ縺・ｋ縺九ｒ遒ｺ隱・
 * 繝ｭ繝ｼ繝画凾繧・ｮ壽悄逧・↑逍朱夂｢ｺ隱阪↓菴ｿ逕ｨ
 * 
 * @returns Promise<boolean> 豁｣蟶ｸ譎ゅ・true縲√お繝ｩ繝ｼ譎ゅ・false
 */
export const healthCheck = async (): Promise<boolean> => {
  try {
    if (DATA_SOURCE === 'api') {
      // FastAPI縺ｮ繝倥Ν繧ｹ繝√ぉ繝・け繧ｨ繝ｳ繝峨・繧､繝ｳ繝医ｒ菴ｿ逕ｨ
      return await giftApi.checkHealth()
    } else {
      // 繝｢繝・け繝・・繧ｿ縺ｮ蝣ｴ蜷医・邁｡蜊倥↑讀懃ｴ｢縺ｧ遒ｺ隱・
      await repository.searchItems({ limit: 1 })
      return true
    }
  } catch (error) {
    console.error('繝倥Ν繧ｹ繝√ぉ繝・け縺ｫ螟ｱ謨励＠縺ｾ縺励◆:', error)
    return false
  }
}

/**
 * FastAPI繧ｵ繝ｼ繝舌・縺ｮ隧ｳ邏ｰ迥ｶ諷九メ繧ｧ繝・け
 * 
 * 邂｡逅・判髱｢繧・ョ繝舌ャ繧ｰ譎ゅ↓隧ｳ邏ｰ縺ｪ謗･邯壽ュ蝣ｱ繧貞叙蠕・
 * 
 * @returns Promise<{connected: boolean, serverInfo?: any, error?: string}>
 */
export const checkServerStatus = async () => {
  if (DATA_SOURCE !== 'api') {
    return {
      connected: false,
      error: '繝｢繝・け繝・・繧ｿ繝｢繝ｼ繝峨・縺溘ａ縲√し繝ｼ繝舌・謗･邯壹・縺ゅｊ縺ｾ縺帙ｓ'
    }
  }

  try {
    const isHealthy = await giftApi.checkHealth()
    if (isHealthy) {
      // 邨ｱ險域ュ蝣ｱ繧ょ叙蠕励＠縺ｦ繧ｵ繝ｼ繝舌・迥ｶ諷九ｒ隧ｳ縺励￥遒ｺ隱・
      const stats = await giftApi.getSearchStats()
      return {
        connected: true,
        serverInfo: {
          status: 'healthy',
          stats,
          timestamp: new Date().toISOString()
        }
      }
    } else {
      return {
        connected: false,
        error: '繧ｵ繝ｼ繝舌・縺悟ｿ懃ｭ斐＠縺ｦ縺・∪縺帙ｓ'
      }
    }
  } catch (error) {
    return {
      connected: false,
      error: error instanceof Error ? error.message : '荳肴・縺ｪ繧ｨ繝ｩ繝ｼ'
    }
  }
}