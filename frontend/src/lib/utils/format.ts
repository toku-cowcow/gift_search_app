/**
 * 豎守畑繝ｦ繝ｼ繝・ぅ繝ｪ繝・ぅ髢｢謨ｰ
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ・・
 * - 繧｢繝励Μ蜈ｨ菴薙〒菴ｿ縺・∪繧上☆萓ｿ蛻ｩ縺ｪ髢｢謨ｰ繧呈署萓・
 * - 繝・・繧ｿ縺ｮ螟画鋤縲∵､懆ｨｼ縲∬ｨ育ｮ励↑縺ｩ縺ｮ蜈ｱ騾壼・逅・ｒ縺ｾ縺ｨ繧√ｋ
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 縲碁％蜈ｷ邂ｱ縲阪・繧医≧縺ｪ繝輔ぃ繧､繝ｫ縺ｧ縺吶・
 * - 萓｡譬ｼ繧偵・,000蜀・阪・蠖｢蠑上↓縺吶ｋ 竊・formatPrice()
 * - 譌･莉倥ｒ縲・024蟷ｴ1譛・5譌･縲阪・蠖｢蠑上↓縺吶ｋ 竊・formatDate()
 * - URL縺梧ｭ｣縺励＞縺九メ繧ｧ繝・け縺吶ｋ 竊・isValidUrl()
 * 縺ｪ縺ｩ縲√＞繧阪ｓ縺ｪ蝣ｴ髱｢縺ｧ菴ｿ縺医ｋ縲御ｾｿ蛻ｩ縺ｪ驕灘・縲阪ｒ髮・ａ縺ｦ縺・∪縺吶・
 */

/**
 * 萓｡譬ｼ繧呈律譛ｬ蜀・ｽ｢蠑上〒繝輔か繝ｼ繝槭ャ繝・
 * 
 * @param price - 萓｡譬ｼ・域焚蛟､・・
 * @returns 繝輔か繝ｼ繝槭ャ繝医＆繧後◆萓｡譬ｼ譁・ｭ怜・・井ｾ・ "1,000蜀・・・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * formatPrice(1000) // 竊・"1,000蜀・
 * formatPrice(500) // 竊・"500蜀・ 
 * formatPrice(0) // 竊・"0蜀・
 */
export const formatPrice = (price: number): string => {
  if (typeof price !== 'number' || isNaN(price)) {
    return '萓｡譬ｼ譛ｪ險ｭ螳・
  }
  
  return price.toLocaleString('ja-JP') + '蜀・
}

/**
 * 萓｡譬ｼ蟶ｯ縺ｮ遽・峇繧定｡ｨ遉ｺ逕ｨ譁・ｭ怜・縺ｫ螟画鋤
 * 
 * @param min - 譛菴惹ｾ｡譬ｼ・域悴謖・ｮ壼庄・・
 * @param max - 譛鬮倅ｾ｡譬ｼ・域悴謖・ｮ壼庄・・
 * @returns 萓｡譬ｼ蟶ｯ縺ｮ陦ｨ遉ｺ譁・ｭ怜・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * formatPriceRange(1000, 5000) // 竊・"1,000蜀・縲・5,000蜀・
 * formatPriceRange(1000, undefined) // 竊・"1,000蜀・ｻ･荳・
 * formatPriceRange(undefined, 5000) // 竊・"5,000蜀・ｻ･荳・
 */
export const formatPriceRange = (min?: number, max?: number): string => {
  if (min !== undefined && max !== undefined) {
    return `${formatPrice(min)} 縲・${formatPrice(max)}`
  } else if (min !== undefined) {
    return `${formatPrice(min)}莉･荳柿
  } else if (max !== undefined) {
    return `${formatPrice(max)}莉･荳義
  } else {
    return '萓｡譬ｼ謖・ｮ壹↑縺・
  }
}

/**
 * 譌･莉倥ｒ譌･譛ｬ隱槫ｽ｢蠑上〒繝輔か繝ｼ繝槭ャ繝・
 * 
 * @param timestamp - Unix繧ｿ繧､繝繧ｹ繧ｿ繝ｳ繝暦ｼ育ｧ抵ｼ・
 * @returns 繝輔か繝ｼ繝槭ャ繝医＆繧後◆譌･莉俶枚蟄怜・・井ｾ・ "2024蟷ｴ1譛・5譌･"・・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * formatDate(1705267200) // 竊・"2024蟷ｴ1譛・5譌･"
 */
export const formatDate = (timestamp: number): string => {
  try {
    const date = new Date(timestamp * 1000) // Unix繧ｿ繧､繝繧ｹ繧ｿ繝ｳ繝暦ｼ育ｧ抵ｼ峨ｒ繝溘Μ遘偵↓螟画鋤
    
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch (error) {
    console.error('譌･莉倥ヵ繧ｩ繝ｼ繝槭ャ繝医お繝ｩ繝ｼ:', error)
    return '譌･莉倅ｸ肴・'
  }
}

/**
 * 逶ｸ蟇ｾ譌･莉倥・陦ｨ遉ｺ・医・・燕縲√・・ｾ鯉ｼ・
 * 
 * @param timestamp - Unix繧ｿ繧､繝繧ｹ繧ｿ繝ｳ繝暦ｼ育ｧ抵ｼ・
 * @returns 逶ｸ蟇ｾ逧・↑譎る俣陦ｨ迴ｾ・井ｾ・ "3譌･蜑・縲・1騾ｱ髢灘燕"・・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * formatRelativeDate(Date.now()/1000 - 86400) // 竊・"1譌･蜑・
 */
export const formatRelativeDate = (timestamp: number): string => {
  try {
    const now = Date.now()
    const targetTime = timestamp * 1000
    const diffMs = now - targetTime
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) {
      return '莉頑律'
    } else if (diffDays === 1) {
      return '譏ｨ譌･'
    } else if (diffDays < 7) {
      return `${diffDays}譌･蜑港
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7)
      return `${weeks}騾ｱ髢灘燕`
    } else {
      const months = Math.floor(diffDays / 30)
      return `${months}繝ｶ譛亥燕`
    }
  } catch (error) {
    console.error('逶ｸ蟇ｾ譌･莉倥ヵ繧ｩ繝ｼ繝槭ャ繝医お繝ｩ繝ｼ:', error)
    return '荳肴・'
  }
}

/**
 * 譁・ｭ怜・繧呈欠螳壽枚蟄玲焚縺ｧ蛻・ｊ隧ｰ繧√ｋ
 * 
 * @param text - 蟇ｾ雎｡譁・ｭ怜・
 * @param maxLength - 譛螟ｧ譁・ｭ玲焚
 * @param suffix - 蛻・ｊ隧ｰ繧∵凾縺ｮ謗･蟆ｾ霎橸ｼ医ョ繝輔か繝ｫ繝・ "..."・・
 * @returns 蛻・ｊ隧ｰ繧√ｉ繧後◆譁・ｭ怜・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * truncateText('縺ｨ縺ｦ繧る聞縺・膚蜩∝錐縺ｧ縺・, 10) // 竊・"縺ｨ縺ｦ繧る聞縺・膚蜩∝錐縺ｧ..."
 */
export const truncateText = (text: string, maxLength: number, suffix = '...'): string => {
  if (!text || text.length <= maxLength) {
    return text
  }
  
  return text.substring(0, maxLength - suffix.length) + suffix
}

/**
 * URL縺ｮ螯･蠖捺ｧ繧呈､懆ｨｼ
 * 
 * @param url - 讀懆ｨｼ蟇ｾ雎｡縺ｮURL譁・ｭ怜・
 * @returns URL縺梧怏蜉ｹ縺九←縺・°
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * isValidUrl('https://example.com') // 竊・true
 * isValidUrl('invalid-url') // 竊・false
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * 驟榊・繧偵Λ繝ｳ繝繝縺ｫ繧ｷ繝｣繝・ヵ繝ｫ
 * 
 * @param array - 繧ｷ繝｣繝・ヵ繝ｫ蟇ｾ雎｡縺ｮ驟榊・
 * @returns 繧ｷ繝｣繝・ヵ繝ｫ縺輔ｌ縺滓眠縺励＞驟榊・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * shuffleArray([1, 2, 3, 4]) // 竊・[3, 1, 4, 2] 縺ｪ縺ｩ
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array]
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  
  return shuffled
}

/**
 * 驟榊・繧呈欠螳壹し繧､繧ｺ縺ｮ繝√Ε繝ｳ繧ｯ縺ｫ蛻・牡
 * 
 * @param array - 蛻・牡蟇ｾ雎｡縺ｮ驟榊・
 * @param chunkSize - 繝√Ε繝ｳ繧ｯ縺ｮ繧ｵ繧､繧ｺ
 * @returns 蛻・牡縺輔ｌ縺滉ｺ梧ｬ｡蜈・・蛻・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * chunkArray([1, 2, 3, 4, 5], 2) // 竊・[[1, 2], [3, 4], [5]]
 */
export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = []
  
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  
  return chunks
}

/**
 * 繧ｪ繝悶ず繧ｧ繧ｯ繝医°繧画悴螳夂ｾｩ繝ｻ遨ｺ縺ｮ蛟､繧帝勁蜴ｻ
 * 
 * @param obj - 蟇ｾ雎｡繧ｪ繝悶ず繧ｧ繧ｯ繝・
 * @returns 繧ｯ繝ｪ繝ｼ繝ｳ繧｢繝・・縺輔ｌ縺溘が繝悶ず繧ｧ繧ｯ繝・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * cleanObject({ a: 1, b: '', c: undefined, d: 'valid' })
 * // 竊・{ a: 1, d: 'valid' }
 */
export const cleanObject = (obj: Record<string, any>): Record<string, any> => {
  const cleaned: Record<string, any> = {}
  
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      cleaned[key] = value
    }
  })
  
  return cleaned
}

/**
 * 繝・ヰ繧ｦ繝ｳ繧ｹ逕ｨ縺ｮ繧ｹ繝ｪ繝ｼ繝鈴未謨ｰ
 * 
 * @param ms - 蠕・ｩ滓凾髢難ｼ医Α繝ｪ遘抵ｼ・
 * @returns Promise
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * await sleep(1000) // 1遘貞ｾ・ｩ・
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 繧ｨ繝ｩ繝ｼ繧ｪ繝悶ず繧ｧ繧ｯ繝医°繧芽｡ｨ遉ｺ逕ｨ繝｡繝・そ繝ｼ繧ｸ繧堤函謌・
 * 
 * @param error - 繧ｨ繝ｩ繝ｼ繧ｪ繝悶ず繧ｧ繧ｯ繝・
 * @returns 繝ｦ繝ｼ繧ｶ繝ｼ蜷代￠繧ｨ繝ｩ繝ｼ繝｡繝・そ繝ｼ繧ｸ
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * try { ... } catch (err) {
 *   const message = getErrorMessage(err)
 *   alert(message)
 * }
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }
  
  if (typeof error === 'string') {
    return error
  }
  
  return '莠域悄縺励↑縺・お繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆'
}