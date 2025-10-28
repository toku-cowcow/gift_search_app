/**
 * 繝舌Μ繝・・繧ｷ繝ｧ繝ｳ・域､懆ｨｼ・峨Θ繝ｼ繝・ぅ繝ｪ繝・ぅ
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ・・
 * - 繝ｦ繝ｼ繧ｶ繝ｼ蜈･蜉帙ｄ繝・・繧ｿ縺ｮ螯･蠖捺ｧ繧偵メ繧ｧ繝・け
 * - 繝輔か繝ｼ繝繧・､懃ｴ｢譚｡莉ｶ縺ｮ讀懆ｨｼ繝ｭ繧ｸ繝・け繧呈署萓・
 * - 繧ｻ繧ｭ繝･繝ｪ繝・ぅ繧・ョ繝ｼ繧ｿ謨ｴ蜷域ｧ縺ｮ蜷台ｸ・
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 縲悟刀雉ｪ繝√ぉ繝・け菫ゅ阪・繧医≧縺ｪ繝輔ぃ繧､繝ｫ縺ｧ縺吶・
 * - 萓｡譬ｼ縺梧ｭ｣縺励＞謨ｰ蛟､縺具ｼ・竊・validatePrice()
 * - 讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝峨′驕ｩ蛻・°・・竊・validateSearchQuery()  
 * - 繝輔か繝ｼ繝縺ｫ蠢・磯・岼縺悟・蜉帙＆繧後※縺・ｋ縺具ｼ・竊・validateRequired()
 * 縺ｪ縺ｩ縲√ョ繝ｼ繧ｿ縺後梧ｭ｣縺励＞迥ｶ諷九阪°繧偵メ繧ｧ繝・け縺吶ｋ驕灘・繧帝寔繧√※縺・∪縺吶・
 */

import type { SearchParams, OccasionKey, SortKey } from '../types'

/**
 * 讀懃ｴ｢繧ｯ繧ｨ繝ｪ縺ｮ螯･蠖捺ｧ繧呈､懆ｨｼ
 * 
 * @param query - 讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝・
 * @returns 讀懆ｨｼ邨先棡繧ｪ繝悶ず繧ｧ繧ｯ繝・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const result = validateSearchQuery('繧ｿ繧ｪ繝ｫ')
 * if (!result.isValid) {
 *   alert(result.error)
 * }
 */
export const validateSearchQuery = (query: string) => {
  // 遨ｺ譁・ｭ励メ繧ｧ繝・け
  if (!query || query.trim().length === 0) {
    return {
      isValid: false,
      error: '讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝峨ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞'
    }
  }
  
  // 髟ｷ縺吶℃繧句ｴ蜷・
  if (query.trim().length > 100) {
    return {
      isValid: false,
      error: '讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝峨・100譁・ｭ嶺ｻ･蜀・〒蜈･蜉帙＠縺ｦ縺上□縺輔＞'
    }
  }
  
  // 蜊ｱ髯ｺ縺ｪ譁・ｭ励′蜷ｫ縺ｾ繧後※縺・↑縺・°繝√ぉ繝・け・・QL繧､繝ｳ繧ｸ繧ｧ繧ｯ繧ｷ繝ｧ繝ｳ蟇ｾ遲悶↑縺ｩ・・
  const dangerousChars = /<script|javascript:|on\w+=/i
  if (dangerousChars.test(query)) {
    return {
      isValid: false,
      error: '菴ｿ逕ｨ縺ｧ縺阪↑縺・枚蟄励′蜷ｫ縺ｾ繧後※縺・∪縺・
    }
  }
  
  return {
    isValid: true,
    error: null
  }
}

/**
 * 萓｡譬ｼ縺ｮ螯･蠖捺ｧ繧呈､懆ｨｼ
 * 
 * @param price - 萓｡譬ｼ・域焚蛟､縺ｾ縺溘・譁・ｭ怜・・・
 * @returns 讀懆ｨｼ邨先棡繧ｪ繝悶ず繧ｧ繧ｯ繝・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const result = validatePrice('1000')
 * if (result.isValid) {
 *   console.log(result.value) // 竊・1000 (謨ｰ蛟､縺ｫ螟画鋤貂医∩)
 * }
 */
export const validatePrice = (price: string | number) => {
  // 遨ｺ縺ｮ蝣ｴ蜷医・OK・育怐逡･蜿ｯ閭ｽ・・
  if (price === '' || price === undefined || price === null) {
    return {
      isValid: true,
      value: undefined,
      error: null
    }
  }
  
  // 謨ｰ蛟､縺ｫ螟画鋤
  const numPrice = typeof price === 'string' ? parseFloat(price) : price
  
  // 謨ｰ蛟､縺ｧ縺ｪ縺・ｴ蜷・
  if (isNaN(numPrice)) {
    return {
      isValid: false,
      value: undefined,
      error: '萓｡譬ｼ縺ｯ謨ｰ蛟､縺ｧ蜈･蜉帙＠縺ｦ縺上□縺輔＞'
    }
  }
  
  // 雋縺ｮ謨ｰ縺ｮ蝣ｴ蜷・
  if (numPrice < 0) {
    return {
      isValid: false,
      value: undefined,
      error: '萓｡譬ｼ縺ｯ0莉･荳翫〒蜈･蜉帙＠縺ｦ縺上□縺輔＞'
    }
  }
  
  // 荳企剞繝√ぉ繝・け・・蜆・・縺ｾ縺ｧ・・
  if (numPrice > 100000000) {
    return {
      isValid: false,
      value: undefined,
      error: '萓｡譬ｼ縺ｯ1蜆・・莉･蜀・〒蜈･蜉帙＠縺ｦ縺上□縺輔＞'
    }
  }
  
  return {
    isValid: true,
    value: Math.floor(numPrice), // 謨ｴ謨ｰ縺ｫ荳ｸ繧√ｋ
    error: null
  }
}

/**
 * 萓｡譬ｼ遽・峇縺ｮ螯･蠖捺ｧ繧呈､懆ｨｼ
 * 
 * @param minPrice - 譛菴惹ｾ｡譬ｼ
 * @param maxPrice - 譛鬮倅ｾ｡譬ｼ
 * @returns 讀懆ｨｼ邨先棡繧ｪ繝悶ず繧ｧ繧ｯ繝・
 */
export const validatePriceRange = (minPrice?: number, maxPrice?: number) => {
  // 荳｡譁ｹ縺ｨ繧よ悴謖・ｮ壹・OK
  if (minPrice === undefined && maxPrice === undefined) {
    return {
      isValid: true,
      error: null
    }
  }
  
  // 迚・婿縺ｮ縺ｿ謖・ｮ壹ｂOK
  if (minPrice === undefined || maxPrice === undefined) {
    return {
      isValid: true,
      error: null
    }
  }
  
  // 譛菴惹ｾ｡譬ｼ縺梧怙鬮倅ｾ｡譬ｼ繧剃ｸ雁屓繧句ｴ蜷・
  if (minPrice > maxPrice) {
    return {
      isValid: false,
      error: '譛菴惹ｾ｡譬ｼ縺ｯ譛鬮倅ｾ｡譬ｼ莉･荳九〒險ｭ螳壹＠縺ｦ縺上□縺輔＞'
    }
  }
  
  return {
    isValid: true,
    error: null
  }
}

/**
 * 逕ｨ騾費ｼ・ccasion・峨・螯･蠖捺ｧ繧呈､懆ｨｼ
 * 
 * @param occasion - 逕ｨ騾斐く繝ｼ
 * @returns 讀懆ｨｼ邨先棡繧ｪ繝悶ず繧ｧ繧ｯ繝・
 */
export const validateOccasion = (occasion?: string) => {
  // 譛ｪ謖・ｮ壹・OK
  if (!occasion) {
    return {
      isValid: true,
      error: null
    }
  }
  
  // 譛牙柑縺ｪ逕ｨ騾斐・繝ｪ繧ｹ繝・
  const validOccasions: OccasionKey[] = [
    'wedding_return',
    'baby_return', 
    'funeral_return'
  ]
  
  if (!validOccasions.includes(occasion as OccasionKey)) {
    return {
      isValid: false,
      error: '辟｡蜉ｹ縺ｪ逕ｨ騾斐′謖・ｮ壹＆繧後※縺・∪縺・
    }
  }
  
  return {
    isValid: true,
    error: null
  }
}

/**
 * 繧ｽ繝ｼ繝域擅莉ｶ縺ｮ螯･蠖捺ｧ繧呈､懆ｨｼ
 * 
 * @param sort - 繧ｽ繝ｼ繝域擅莉ｶ
 * @returns 讀懆ｨｼ邨先棡繧ｪ繝悶ず繧ｧ繧ｯ繝・
 */
export const validateSort = (sort?: string) => {
  // 譛ｪ謖・ｮ壽凾縺ｯ繝・ヵ繧ｩ繝ｫ繝医た繝ｼ繝医ｒ菴ｿ逕ｨ
  if (!sort) {
    return {
      isValid: true,
      value: 'updated_at:desc' as SortKey,
      error: null
    }
  }
  
  // 譛牙柑縺ｪ繧ｽ繝ｼ繝域擅莉ｶ縺ｮ繝ｪ繧ｹ繝・
  const validSorts: SortKey[] = [
    'updated_at:desc',
    'price:asc',
    'price:desc'
  ]
  
  if (!validSorts.includes(sort as SortKey)) {
    return {
      isValid: false,
      value: 'updated_at:desc' as SortKey,
      error: '辟｡蜉ｹ縺ｪ繧ｽ繝ｼ繝域擅莉ｶ縺梧欠螳壹＆繧後※縺・∪縺・
    }
  }
  
  return {
    isValid: true,
    value: sort as SortKey,
    error: null
  }
}

/**
 * 讀懃ｴ｢繝代Λ繝｡繝ｼ繧ｿ蜈ｨ菴薙・螯･蠖捺ｧ繧呈､懆ｨｼ
 * 
 * @param params - 讀懃ｴ｢繝代Λ繝｡繝ｼ繧ｿ
 * @returns 讀懆ｨｼ邨先棡繧ｪ繝悶ず繧ｧ繧ｯ繝・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const result = validateSearchParams({
 *   q: '繧ｿ繧ｪ繝ｫ',
 *   price_min: 1000,
 *   price_max: 5000
 * })
 * 
 * if (!result.isValid) {
 *   alert(result.errors.join('\n'))
 * }
 */
export const validateSearchParams = (params: SearchParams) => {
  const errors: string[] = []
  
  // 讀懃ｴ｢繧ｯ繧ｨ繝ｪ縺ｮ讀懆ｨｼ
  if (params.q) {
    const queryResult = validateSearchQuery(params.q)
    if (!queryResult.isValid && queryResult.error) {
      errors.push(queryResult.error)
    }
  }
  
  // 逕ｨ騾斐・讀懆ｨｼ
  const occasionResult = validateOccasion(params.occasion)
  if (!occasionResult.isValid && occasionResult.error) {
    errors.push(occasionResult.error)
  }
  
  // 萓｡譬ｼ縺ｮ讀懆ｨｼ
  if (params.price_min !== undefined) {
    const minPriceResult = validatePrice(params.price_min)
    if (!minPriceResult.isValid && minPriceResult.error) {
      errors.push(`譛菴惹ｾ｡譬ｼ: ${minPriceResult.error}`)
    }
  }
  
  if (params.price_max !== undefined) {
    const maxPriceResult = validatePrice(params.price_max)
    if (!maxPriceResult.isValid && maxPriceResult.error) {
      errors.push(`譛鬮倅ｾ｡譬ｼ: ${maxPriceResult.error}`)
    }
  }
  
  // 萓｡譬ｼ遽・峇縺ｮ讀懆ｨｼ
  const priceRangeResult = validatePriceRange(params.price_min, params.price_max)
  if (!priceRangeResult.isValid && priceRangeResult.error) {
    errors.push(priceRangeResult.error)
  }
  
  // 繧ｽ繝ｼ繝域擅莉ｶ縺ｮ讀懆ｨｼ
  const sortResult = validateSort(params.sort)
  if (!sortResult.isValid && sortResult.error) {
    errors.push(sortResult.error)
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    cleanParams: errors.length === 0 ? params : null
  }
}

/**
 * 蠢・医ヵ繧｣繝ｼ繝ｫ繝峨・讀懆ｨｼ
 * 
 * @param value - 讀懆ｨｼ蟇ｾ雎｡縺ｮ蛟､
 * @param fieldName - 繝輔ぅ繝ｼ繝ｫ繝牙錐・医お繝ｩ繝ｼ繝｡繝・そ繝ｼ繧ｸ逕ｨ・・
 * @returns 讀懆ｨｼ邨先棡繧ｪ繝悶ず繧ｧ繧ｯ繝・
 */
export const validateRequired = (value: any, fieldName: string) => {
  if (value === undefined || value === null || value === '') {
    return {
      isValid: false,
      error: `${fieldName}縺ｯ蠢・磯・岼縺ｧ縺兪
    }
  }
  
  return {
    isValid: true,
    error: null
  }
}

/**
 * 繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ縺ｮ螯･蠖捺ｧ繧呈､懆ｨｼ
 * 
 * @param email - 繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ
 * @returns 讀懆ｨｼ邨先棡繧ｪ繝悶ず繧ｧ繧ｯ繝・
 */
export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!email) {
    return {
      isValid: false,
      error: '繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ繧貞・蜉帙＠縺ｦ縺上□縺輔＞'
    }
  }
  
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: '豁｣縺励＞繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ縺ｮ蠖｢蠑上〒蜈･蜉帙＠縺ｦ縺上□縺輔＞'
    }
  }
  
  return {
    isValid: true,
    error: null
  }
}

/**
 * 繝輔か繝ｼ繝繝・・繧ｿ縺ｮ荳諡ｬ讀懆ｨｼ
 * 
 * @param data - 繝輔か繝ｼ繝繝・・繧ｿ
 * @param rules - 讀懆ｨｼ繝ｫ繝ｼ繝ｫ
 * @returns 讀懆ｨｼ邨先棡繧ｪ繝悶ず繧ｧ繧ｯ繝・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const result = validateForm(
 *   { name: 'John', email: 'invalid' },
 *   { name: { required: true }, email: { required: true, type: 'email' } }
 * )
 */
export const validateForm = (
  data: Record<string, any>,
  rules: Record<string, { required?: boolean; type?: 'email' | 'number'; min?: number; max?: number }>
) => {
  const errors: Record<string, string> = {}
  
  Object.entries(rules).forEach(([field, rule]) => {
    const value = data[field]
    
    // 蠢・医メ繧ｧ繝・け
    if (rule.required) {
      const requiredResult = validateRequired(value, field)
      if (!requiredResult.isValid && requiredResult.error) {
        errors[field] = requiredResult.error
        return
      }
    }
    
    // 蝙九メ繧ｧ繝・け
    if (value && rule.type) {
      switch (rule.type) {
        case 'email':
          const emailResult = validateEmail(value)
          if (!emailResult.isValid && emailResult.error) {
            errors[field] = emailResult.error
          }
          break
        case 'number':
          const numberResult = validatePrice(value)
          if (!numberResult.isValid && numberResult.error) {
            errors[field] = numberResult.error
          }
          break
      }
    }
    
    // 遽・峇繝√ぉ繝・け
    if (value && (rule.min !== undefined || rule.max !== undefined)) {
      const numValue = typeof value === 'string' ? parseFloat(value) : value
      
      if (!isNaN(numValue)) {
        if (rule.min !== undefined && numValue < rule.min) {
          errors[field] = `${field}縺ｯ${rule.min}莉･荳翫〒蜈･蜉帙＠縺ｦ縺上□縺輔＞`
        }
        if (rule.max !== undefined && numValue > rule.max) {
          errors[field] = `${field}縺ｯ${rule.max}莉･荳九〒蜈･蜉帙＠縺ｦ縺上□縺輔＞`
        }
      }
    }
  })
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}