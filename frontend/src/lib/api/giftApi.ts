/**
 * ギフト商品検索API
 * 
 * このファイルの役割：
 * - バックエンド（FastAPI）の商品検索機能と通信
 * - 検索、詳細取得、利用シーン取得などのAPI呼び出しを管理
 * 
 * 初心者向け解説：
 * このファイルは「レストランのメニューを注文する方法」のようなもの。
 * - 「タオルを検索して」→ searchGifts()
 * - 「この商品の詳細を教えて」→ getGiftById()  
 * - 「どんな用途があるの？」→ getOccasions()
 * といった具体的な「注文の仕方」を定義しています。
 */

import { api } from './client'
import type { 
  GiftItem, 
  SearchParams, 
  SearchResponse, 
  Occasion 
} from '../types'

/**
 * ギフト検索API呼び出し
 * 
 * @param params - 検索条件（キーワード、用途、価格帯など）
 * @returns 検索結果（商品一覧 + 総件数 + ページ情報）
 * 
 * 使用例：
 * const results = await searchGifts({ 
 *   query: 'タオル', 
 *   occasion: '結婚内祝い', 
 *   minPrice: 1000, 
 *   maxPrice: 5000 
 * })
 */
export const searchGifts = async (params: SearchParams): Promise<SearchResponse> => {
  try {
    // バックエンドの /api/v1/search エンドポイントを呼び出し
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
    console.error('商品検索APIエラー:', error)
    
    // エラーが発生した場合は空の結果を返す
    // 実際のアプリではエラーメッセージを表示するなどの処理も必要
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
 * ギフト商品詳細取得
 * 
 * @param itemId - 商品ID
 * @returns 商品詳細情報
 * 
 * 使用例：
 * const giftDetail = await getGiftById('towel_001')
 */
export const getGiftById = async (itemId: string): Promise<GiftItem | null> => {
  try {
    // バックエンドの /api/v1/items/{id} エンドポイントを呼び出し
    const response = await api.get<GiftItem>(`/api/v1/items/${itemId}`)
    return response.data
  } catch (error) {
    console.error('商品詳細取得APIエラー:', error)
    return null // 商品が見つからない場合はnullを返す
  }
}

/**
 * 利用シーン一覧取得
 * 
 * @returns 利用可能なシーン（結婚内祝い、出産内祝い、香典返しなど）の一覧
 * 
 * 使用例：
 * const occasions = await getOccasions()
 * // → [{ id: 'wedding', name: '結婚内祝い' }, ...]
 */
export const getOccasions = async (): Promise<Occasion[]> => {
  try {
    // バックエンドの /api/v1/occasions エンドポイントを呼び出し
    const response = await api.get<Occasion[]>('/api/v1/occasions')
    return response.data
  } catch (error) {
    console.error('利用シーン取得APIエラー:', error)
    
    // エラーが発生した場合はデフォルトのシーンを返す
    return [
      { key: 'wedding_return', label: '結婚内祝い' },
      { key: 'baby_return', label: '出産内祝い' },
      { key: 'funeral_return', label: '香典返し' },
    ]
  }
}

/**
 * システムヘルスチェック
 * 
 * @returns バックエンドサーバーの稼働状況
 * 
 * 使用例：
 * const isHealthy = await checkHealth()
 * if (!isHealthy) {
 *   // サーバーエラーメッセージを表示
 * }
 */
export const checkHealth = async (): Promise<boolean> => {
  try {
    // バックエンドの /health エンドポイントを呼び出し
    const response = await api.get('/health')
    
    // レスポンスが正常で、statusが"healthy"の場合はtrue
    return response.data?.status === 'healthy'
  } catch (error) {
    console.error('ヘルスチェックエラー:', error)
    return false
  }
}

/**
 * 検索統計情報取得
 * 
 * @returns 検索に関する統計情報（人気キーワード、よく使われる用途など）
 */
export const getSearchStats = async () => {
  try {
    // バックエンドの /api/v1/stats エンドポイントを呼び出し
    const response = await api.get('/api/v1/stats')
    return response.data
  } catch (error) {
    console.error('統計情報取得APIエラー:', error)
    return null
  }
}