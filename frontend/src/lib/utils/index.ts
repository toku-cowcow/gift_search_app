/**
 * 繝ｦ繝ｼ繝・ぅ繝ｪ繝・ぅ髢｢謨ｰ縺ｮ繧ｨ繧ｯ繧ｹ繝昴・繝医ヵ繧｡繧､繝ｫ
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ・・
 * - lib/utils/ 蜀・・蜈ｨ縺ｦ縺ｮ髢｢謨ｰ繧剃ｸ邂・園縺九ｉ import 縺ｧ縺阪ｋ繧医≧縺ｫ縺吶ｋ
 * - import譁・ｒ繧ｷ繝ｳ繝励Ν縺ｫ縺励※縲・幕逋ｺ蜉ｹ邇・ｒ蜷台ｸ翫＆縺帙ｋ
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 縲檎ｷ丞粋蜿嶺ｻ倥阪・繧医≧縺ｪ繝輔ぃ繧､繝ｫ縺ｧ縺吶・
 * 莉悶・繝輔ぃ繧､繝ｫ縺九ｉ菴ｿ縺・◆縺・未謨ｰ縺後≠繧九→縺阪・
 * 縺ｩ縺薙↓縺ゅｋ縺玖ｦ壹∴縺ｪ縺上※繧ゅ・
 * import { formatPrice, validateEmail } from '@/lib/utils'
 * 縺ｮ繧医≧縺ｫ縲√∪縺ｨ繧√※蜿門ｾ励〒縺阪ｋ繧医≧縺ｫ縺ｪ繧翫∪縺吶・
 */

// 繝輔か繝ｼ繝槭ャ繝磯未騾｣
export {
  formatPrice,
  formatPriceRange,
  formatDate,
  formatRelativeDate,
  truncateText,
  isValidUrl,
  shuffleArray,
  chunkArray,
  cleanObject,
  sleep,
  getErrorMessage
} from './format'

// 繝舌Μ繝・・繧ｷ繝ｧ繝ｳ髢｢騾｣
export {
  validateSearchQuery,
  validatePrice,
  validatePriceRange,
  validateOccasion,
  validateSort,
  validateSearchParams,
  validateRequired,
  validateEmail,
  validateForm
} from './validator'

// 萓ｿ蛻ｩ縺ｪ蝙九ぎ繝ｼ繝蛾未謨ｰ繧りｿｽ蜉
export const isDefined = <T>(value: T | undefined | null): value is T => {
  return value !== undefined && value !== null
}

export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value)
}

export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim().length === 0
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}