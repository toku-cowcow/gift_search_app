/**
 * データ取得の統一窓口
 * 
 * このファイルの役割:
 * - フロントエンドコンポーネントが直接呼び出すデータ取得関数を提供
 * - 現在はモックデータ、将来は実際のAPIに簡単に切り替え可能
 * - データソースの変更がコンポーネントに影響しないよう抽象化
 */

import { GiftItem, SearchParams, SearchResponse, Occasion } from './types'
import { mockProductRepository } from './repo.mock'
// TODO(楽天API): 将来は以下のインポートに切り替え
// import { apiProductRepository } from './repo.api'

/**
 * 使用するデータソースの選択
 * 
 * 環境変数 NEXT_PUBLIC_DATA_SOURCE で制御可能
 * - 'mock': モックデータを使用（デフォルト、開発用）
 * - 'api': 実際のAPIを使用（本番用）
 */
const DATA_SOURCE = process.env.NEXT_PUBLIC_DATA_SOURCE || 'mock'

/**
 * 実際に使用するリポジトリを選択
 * 
 * 現在はモックのみ、将来はAPIリポジトリを追加予定
 */
const getRepository = () => {
  switch (DATA_SOURCE) {
    case 'api':
      // TODO(楽天API): APIリポジトリが実装されたら有効化
      // return apiProductRepository
      console.warn('API repository not implemented yet, falling back to mock')
      return mockProductRepository
    case 'mock':
    default:
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
    // 簡単な検索を実行して動作確認
    await repository.searchItems({ limit: 1 })
    return true
  } catch (error) {
    console.error('ヘルスチェックに失敗しました:', error)
    return false
  }
}