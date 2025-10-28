/**
 * ユーティリティ関数のエクスポートファイル
 * 
 * このファイルの役割：
 * - lib/utils/ 内の全ての関数を一箇所から import できるようにする
 * - import文をシンプルにして、開発効率を向上させる
 * 
 * 初心者向け解説：
 * 「総合受付」のようなファイルです。
 * 他のファイルから使いたい関数があるとき、
 * どこにあるか覚えなくても、
 * import { formatPrice, validateEmail } from '@/lib/utils'
 * のように、まとめて取得できるようになります。
 */

// フォーマット関連
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

// バリデーション関連
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

// 便利な型ガード関数も追加
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