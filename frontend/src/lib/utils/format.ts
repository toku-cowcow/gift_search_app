/**
 * 汎用ユーティリティ関数
 * 
 * このファイルの役割：
 * - アプリ全体で使いまわす便利な関数を提供
 * - データの変換、検証、計算などの共通処理をまとめる
 * 
 * 初心者向け解説：
 * 「道具箱」のようなファイルです。
 * - 価格を「1,000円」の形式にする → formatPrice()
 * - 日付を「2024年1月15日」の形式にする → formatDate()
 * - URLが正しいかチェックする → isValidUrl()
 * など、いろんな場面で使える「便利な道具」を集めています。
 */

/**
 * 価格を日本円形式でフォーマット
 * 
 * @param price - 価格（数値）
 * @returns フォーマットされた価格文字列（例: "1,000円"）
 * 
 * 使用例：
 * formatPrice(1000) // → "1,000円"
 * formatPrice(500) // → "500円" 
 * formatPrice(0) // → "0円"
 */
export const formatPrice = (price: number): string => {
  if (typeof price !== 'number' || isNaN(price)) {
    return '価格未設定'
  }
  
  return price.toLocaleString('ja-JP') + '円'
}

/**
 * 価格帯の範囲を表示用文字列に変換
 * 
 * @param min - 最低価格（未指定可）
 * @param max - 最高価格（未指定可） 
 * @returns 価格帯の表示文字列
 * 
 * 使用例：
 * formatPriceRange(1000, 5000) // → "1,000円 〜 5,000円"
 * formatPriceRange(1000, undefined) // → "1,000円以上"
 * formatPriceRange(undefined, 5000) // → "5,000円以下"
 */
export const formatPriceRange = (min?: number, max?: number): string => {
  if (min !== undefined && max !== undefined) {
    return `${formatPrice(min)} 〜 ${formatPrice(max)}`
  } else if (min !== undefined) {
    return `${formatPrice(min)}以上`
  } else if (max !== undefined) {
    return `${formatPrice(max)}以下`
  } else {
    return '価格指定なし'
  }
}

/**
 * 日付を日本語形式でフォーマット
 * 
 * @param timestamp - Unixタイムスタンプ（秒）
 * @returns フォーマットされた日付文字列（例: "2024年1月15日"）
 * 
 * 使用例：
 * formatDate(1705267200) // → "2024年1月15日"
 */
export const formatDate = (timestamp: number): string => {
  try {
    const date = new Date(timestamp * 1000) // Unixタイムスタンプ（秒）をミリ秒に変換
    
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch (error) {
    console.error('日付フォーマットエラー:', error)
    return '日付不明'
  }
}

/**
 * 相対日付の表示（〇〇前、〇〇後）
 * 
 * @param timestamp - Unixタイムスタンプ（秒）
 * @returns 相対的な時間表現（例: "3日前"、"1週間前"）
 * 
 * 使用例：
 * formatRelativeDate(Date.now()/1000 - 86400) // → "1日前"
 */
export const formatRelativeDate = (timestamp: number): string => {
  try {
    const now = Date.now()
    const targetTime = timestamp * 1000
    const diffMs = now - targetTime
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) {
      return '今日'
    } else if (diffDays === 1) {
      return '昨日'
    } else if (diffDays < 7) {
      return `${diffDays}日前`
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7)
      return `${weeks}週間前`
    } else {
      const months = Math.floor(diffDays / 30)
      return `${months}ヶ月前`
    }
  } catch (error) {
    console.error('相対日付フォーマットエラー:', error)
    return '不明'
  }
}

/**
 * 文字列を指定文字数で切り詰める
 * 
 * @param text - 対象文字列
 * @param maxLength - 最大文字数
 * @param suffix - 切り詰め時の接尾辞（デフォルト: "..."）
 * @returns 切り詰められた文字列
 * 
 * 使用例：
 * truncateText('とても長い商品名です', 10) // → "とても長い商品名で..."
 */
export const truncateText = (text: string, maxLength: number, suffix = '...'): string => {
  if (!text || text.length <= maxLength) {
    return text
  }
  
  return text.substring(0, maxLength - suffix.length) + suffix
}

/**
 * URLの妥当性を検証
 * 
 * @param url - 検証対象のURL文字列
 * @returns URLが有効かどうか
 * 
 * 使用例：
 * isValidUrl('https://example.com') // → true
 * isValidUrl('invalid-url') // → false
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
 * 配列をランダムにシャッフル
 * 
 * @param array - シャッフル対象の配列
 * @returns シャッフルされた新しい配列
 * 
 * 使用例：
 * shuffleArray([1, 2, 3, 4]) // → [3, 1, 4, 2] など
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
 * 配列を指定サイズのチャンクに分割
 * 
 * @param array - 分割対象の配列
 * @param chunkSize - チャンクのサイズ
 * @returns 分割された二次元配列
 * 
 * 使用例：
 * chunkArray([1, 2, 3, 4, 5], 2) // → [[1, 2], [3, 4], [5]]
 */
export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = []
  
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  
  return chunks
}

/**
 * オブジェクトから未定義・空の値を除去
 * 
 * @param obj - 対象オブジェクト
 * @returns クリーンアップされたオブジェクト
 * 
 * 使用例：
 * cleanObject({ a: 1, b: '', c: undefined, d: 'valid' })
 * // → { a: 1, d: 'valid' }
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
 * デバウンス用のスリープ関数
 * 
 * @param ms - 待機時間（ミリ秒）
 * @returns Promise
 * 
 * 使用例：
 * await sleep(1000) // 1秒待機
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * エラーオブジェクトから表示用メッセージを生成
 * 
 * @param error - エラーオブジェクト
 * @returns ユーザー向けエラーメッセージ
 * 
 * 使用例：
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
  
  return '予期しないエラーが発生しました'
}