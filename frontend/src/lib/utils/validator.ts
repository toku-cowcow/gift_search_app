/**
 * バリデーション（検証）ユーティリティ
 * 
 * このファイルの役割：
 * - ユーザー入力やデータの妥当性をチェック
 * - フォームや検索条件の検証ロジックを提供
 * - セキュリティやデータ整合性の向上
 * 
 * 初心者向け解説：
 * 「品質チェック係」のようなファイルです。
 * - 価格が正しい数値か？ → validatePrice()
 * - 検索キーワードが適切か？ → validateSearchQuery()  
 * - フォームに必須項目が入力されているか？ → validateRequired()
 * など、データが「正しい状態」かをチェックする道具を集めています。
 */

import type { SearchParams, OccasionKey, SortKey } from '../types'

/**
 * 検索クエリの妥当性を検証
 * 
 * @param query - 検索キーワード
 * @returns 検証結果オブジェクト
 * 
 * 使用例：
 * const result = validateSearchQuery('タオル')
 * if (!result.isValid) {
 *   alert(result.error)
 * }
 */
export const validateSearchQuery = (query: string) => {
  // 空文字チェック
  if (!query || query.trim().length === 0) {
    return {
      isValid: false,
      error: '検索キーワードを入力してください'
    }
  }
  
  // 長すぎる場合
  if (query.trim().length > 100) {
    return {
      isValid: false,
      error: '検索キーワードは100文字以内で入力してください'
    }
  }
  
  // 危険な文字が含まれていないかチェック（SQLインジェクション対策など）
  const dangerousChars = /<script|javascript:|on\w+=/i
  if (dangerousChars.test(query)) {
    return {
      isValid: false,
      error: '使用できない文字が含まれています'
    }
  }
  
  return {
    isValid: true,
    error: null
  }
}

/**
 * 価格の妥当性を検証
 * 
 * @param price - 価格（数値または文字列）
 * @returns 検証結果オブジェクト
 * 
 * 使用例：
 * const result = validatePrice('1000')
 * if (result.isValid) {
 *   console.log(result.value) // → 1000 (数値に変換済み)
 * }
 */
export const validatePrice = (price: string | number) => {
  // 空の場合はOK（省略可能）
  if (price === '' || price === undefined || price === null) {
    return {
      isValid: true,
      value: undefined,
      error: null
    }
  }
  
  // 数値に変換
  const numPrice = typeof price === 'string' ? parseFloat(price) : price
  
  // 数値でない場合
  if (isNaN(numPrice)) {
    return {
      isValid: false,
      value: undefined,
      error: '価格は数値で入力してください'
    }
  }
  
  // 負の数の場合
  if (numPrice < 0) {
    return {
      isValid: false,
      value: undefined,
      error: '価格は0以上で入力してください'
    }
  }
  
  // 上限チェック（1億円まで）
  if (numPrice > 100000000) {
    return {
      isValid: false,
      value: undefined,
      error: '価格は1億円以内で入力してください'
    }
  }
  
  return {
    isValid: true,
    value: Math.floor(numPrice), // 整数に丸める
    error: null
  }
}

/**
 * 価格範囲の妥当性を検証
 * 
 * @param minPrice - 最低価格
 * @param maxPrice - 最高価格
 * @returns 検証結果オブジェクト
 */
export const validatePriceRange = (minPrice?: number, maxPrice?: number) => {
  // 両方とも未指定はOK
  if (minPrice === undefined && maxPrice === undefined) {
    return {
      isValid: true,
      error: null
    }
  }
  
  // 片方のみ指定もOK
  if (minPrice === undefined || maxPrice === undefined) {
    return {
      isValid: true,
      error: null
    }
  }
  
  // 最低価格が最高価格を上回る場合
  if (minPrice > maxPrice) {
    return {
      isValid: false,
      error: '最低価格は最高価格以下で設定してください'
    }
  }
  
  return {
    isValid: true,
    error: null
  }
}

/**
 * 用途（occasion）の妥当性を検証
 * 
 * @param occasion - 用途キー
 * @returns 検証結果オブジェクト
 */
export const validateOccasion = (occasion?: string) => {
  // 未指定はOK
  if (!occasion) {
    return {
      isValid: true,
      error: null
    }
  }
  
  // 有効な用途のリスト
  const validOccasions: OccasionKey[] = [
    'wedding_return',
    'baby_return', 
    'funeral_return'
  ]
  
  if (!validOccasions.includes(occasion as OccasionKey)) {
    return {
      isValid: false,
      error: '無効な用途が指定されています'
    }
  }
  
  return {
    isValid: true,
    error: null
  }
}

/**
 * ソート条件の妥当性を検証
 * 
 * @param sort - ソート条件
 * @returns 検証結果オブジェクト
 */
export const validateSort = (sort?: string) => {
  // 未指定時はデフォルトソートを使用
  if (!sort) {
    return {
      isValid: true,
      value: 'updated_at:desc' as SortKey,
      error: null
    }
  }
  
  // 有効なソート条件のリスト
  const validSorts: SortKey[] = [
    'updated_at:desc',
    'price:asc',
    'price:desc'
  ]
  
  if (!validSorts.includes(sort as SortKey)) {
    return {
      isValid: false,
      value: 'updated_at:desc' as SortKey,
      error: '無効なソート条件が指定されています'
    }
  }
  
  return {
    isValid: true,
    value: sort as SortKey,
    error: null
  }
}

/**
 * 検索パラメータ全体の妥当性を検証
 * 
 * @param params - 検索パラメータ
 * @returns 検証結果オブジェクト
 * 
 * 使用例：
 * const result = validateSearchParams({
 *   q: 'タオル',
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
  
  // 検索クエリの検証
  if (params.q) {
    const queryResult = validateSearchQuery(params.q)
    if (!queryResult.isValid && queryResult.error) {
      errors.push(queryResult.error)
    }
  }
  
  // 用途の検証
  const occasionResult = validateOccasion(params.occasion)
  if (!occasionResult.isValid && occasionResult.error) {
    errors.push(occasionResult.error)
  }
  
  // 価格の検証
  if (params.price_min !== undefined) {
    const minPriceResult = validatePrice(params.price_min)
    if (!minPriceResult.isValid && minPriceResult.error) {
      errors.push(`最低価格: ${minPriceResult.error}`)
    }
  }
  
  if (params.price_max !== undefined) {
    const maxPriceResult = validatePrice(params.price_max)
    if (!maxPriceResult.isValid && maxPriceResult.error) {
      errors.push(`最高価格: ${maxPriceResult.error}`)
    }
  }
  
  // 価格範囲の検証
  const priceRangeResult = validatePriceRange(params.price_min, params.price_max)
  if (!priceRangeResult.isValid && priceRangeResult.error) {
    errors.push(priceRangeResult.error)
  }
  
  // ソート条件の検証
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
 * 必須フィールドの検証
 * 
 * @param value - 検証対象の値
 * @param fieldName - フィールド名（エラーメッセージ用）
 * @returns 検証結果オブジェクト
 */
export const validateRequired = (value: any, fieldName: string) => {
  if (value === undefined || value === null || value === '') {
    return {
      isValid: false,
      error: `${fieldName}は必須項目です`
    }
  }
  
  return {
    isValid: true,
    error: null
  }
}

/**
 * メールアドレスの妥当性を検証
 * 
 * @param email - メールアドレス
 * @returns 検証結果オブジェクト
 */
export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!email) {
    return {
      isValid: false,
      error: 'メールアドレスを入力してください'
    }
  }
  
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: '正しいメールアドレスの形式で入力してください'
    }
  }
  
  return {
    isValid: true,
    error: null
  }
}

/**
 * フォームデータの一括検証
 * 
 * @param data - フォームデータ
 * @param rules - 検証ルール
 * @returns 検証結果オブジェクト
 * 
 * 使用例：
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
    
    // 必須チェック
    if (rule.required) {
      const requiredResult = validateRequired(value, field)
      if (!requiredResult.isValid && requiredResult.error) {
        errors[field] = requiredResult.error
        return
      }
    }
    
    // 型チェック
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
    
    // 範囲チェック
    if (value && (rule.min !== undefined || rule.max !== undefined)) {
      const numValue = typeof value === 'string' ? parseFloat(value) : value
      
      if (!isNaN(numValue)) {
        if (rule.min !== undefined && numValue < rule.min) {
          errors[field] = `${field}は${rule.min}以上で入力してください`
        }
        if (rule.max !== undefined && numValue > rule.max) {
          errors[field] = `${field}は${rule.max}以下で入力してください`
        }
      }
    }
  })
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}