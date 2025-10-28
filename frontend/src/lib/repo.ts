/**
 * データ取得の統一窓口
 * 
 * このファイルの役割:
 * - フロントエンドコンポーネントが直接呼び出すデータ取得関数を提供
 * - FastAPI実装とモックデータを環境変数で切り替え可能
 * - データソースの変更がコンポーネントに影響しないよう抽象化
 * 
 * 初心者向け解説:
 * 「受付係」のようなファイルです。
 * - 本物のサーバー（FastAPI）から取得 → DATA_SOURCE='api'
 * - 練習用のサンプルデータから取得 → DATA_SOURCE='mock'  
 * 設定を変えるだけで、データの取得先を変更できます。
 */

import { GiftItem, SearchParams, SearchResponse, Occasion } from './types'
import { mockProductRepository } from './repo.mock'
import * as giftApi from './api/giftApi'

/**
 * 使用するデータソースの選択
 * 
 * 環境変数 NEXT_PUBLIC_DATA_SOURCE で制御可能
 * - 'api': FastAPIサーバーを使用（本番・開発サーバー接続時）
 * - 'mock': モックデータを使用（デフォルト、オフライン開発用）
 */
const DATA_SOURCE = process.env.NEXT_PUBLIC_DATA_SOURCE || 'mock'

/**
 * FastAPI用のリポジトリ実装
 * 
 * 新しいgiftApiを使用してFastAPIと通信
 */
const apiRepository = {
  async searchItems(params: SearchParams): Promise<SearchResponse> {
    // FastAPIのレスポンス形式から既存の型形式に変換
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
      throw new Error('商品が見つかりませんでした')
    }
    return item
  },

  async getOccasions(): Promise<Occasion[]> {
    return await giftApi.getOccasions()
  }
}

/**
 * 実際に使用するリポジトリを選択
 * 
 * FastAPI接続とモックデータを環境変数で切り替え
 */
const getRepository = () => {
  switch (DATA_SOURCE) {
    case 'api':
      console.log('🌐 FastAPI サーバーに接続しています...')
      return apiRepository
    case 'mock':
    default:
      console.log('📊 モックデータを使用しています')
      return mockProductRepository
  }
}

// 使用するリポジトリのインスタンス
const repository = getRepository()

/**
 * 商品を検索します
 * 
 * コンポーネントからはこの関数を呼び出すことで、
 * データソースを意識せずに商品検索が可能
 * 
 * @param params 検索パラメータ
 * @returns Promise<SearchResponse> 検索結果
 * 
 * 使用例:
 * ```typescript
 * const results = await searchItems({
 *   q: 'タオル',
 *   occasion: 'funeral_return',
 *   price_max: 5000
 * })
 * ```
 */
export const searchItems = async (params: SearchParams): Promise<SearchResponse> => {
  try {
    return await repository.searchItems(params)
  } catch (error) {
    console.error('商品検索でエラーが発生しました:', error)
    throw new Error('商品検索に失敗しました。しばらく時間をおいて再度お試しください。')
  }
}

/**
 * 商品IDで特定の商品を取得します
 * 
 * @param itemId 商品ID
 * @returns Promise<GiftItem> 商品情報
 * 
 * 使用例:
 * ```typescript
 * const item = await getItemById('item_001')
 * ```
 */
export const getItemById = async (itemId: string): Promise<GiftItem> => {
  try {
    return await repository.getItemById(itemId)
  } catch (error) {
    console.error(`商品取得でエラーが発生しました (ID: ${itemId}):`, error)
    throw new Error('商品情報の取得に失敗しました。')
  }
}

/**
 * 利用可能な用途一覧を取得します
 * 
 * @returns Promise<Occasion[]> 用途一覧
 * 
 * 使用例:
 * ```typescript
 * const occasions = await getOccasions()
 * // フィルタのオプションとして使用
 * ```
 */
export const getOccasions = async (): Promise<Occasion[]> => {
  try {
    return await repository.getOccasions()
  } catch (error) {
    console.error('用途一覧の取得でエラーが発生しました:', error)
    throw new Error('用途一覧の取得に失敗しました。')
  }
}

/**
 * 現在使用中のデータソースを取得します（デバッグ用）
 * 
 * @returns string データソース名
 */
export const getCurrentDataSource = (): string => {
  return DATA_SOURCE
}

/**
 * ヘルスチェック（接続確認）
 * 
 * データソースが正常に動作しているかを確認
 * ロード時や定期的な疎通確認に使用
 * 
 * @returns Promise<boolean> 正常時はtrue、エラー時はfalse
 */
export const healthCheck = async (): Promise<boolean> => {
  try {
    if (DATA_SOURCE === 'api') {
      // FastAPIのヘルスチェックエンドポイントを使用
      return await giftApi.checkHealth()
    } else {
      // モックデータの場合は簡単な検索で確認
      await repository.searchItems({ limit: 1 })
      return true
    }
  } catch (error) {
    console.error('ヘルスチェックに失敗しました:', error)
    return false
  }
}

/**
 * FastAPIサーバーの詳細状態チェック
 * 
 * 管理画面やデバッグ時に詳細な接続情報を取得
 * 
 * @returns Promise<{connected: boolean, serverInfo?: any, error?: string}>
 */
export const checkServerStatus = async () => {
  if (DATA_SOURCE !== 'api') {
    return {
      connected: false,
      error: 'モックデータモードのため、サーバー接続はありません'
    }
  }

  try {
    const isHealthy = await giftApi.checkHealth()
    if (isHealthy) {
      // 統計情報も取得してサーバー状態を詳しく確認
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
        error: 'サーバーが応答していません'
      }
    }
  } catch (error) {
    return {
      connected: false,
      error: error instanceof Error ? error.message : '不明なエラー'
    }
  }
}