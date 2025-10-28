/**
 * カスタムフックのエクスポートファイル
 * 
 * このファイルの役割：
 * - lib/hooks/ 内の全てのフックを一箇所から import できるようにする
 * - フック名の衝突を避け、使いやすい名前で提供する
 * 
 * 初心者向け解説：
 * 「フック管理室」のようなファイルです。
 * コンポーネントで「検索機能を使いたい」「URL同期したい」時に、
 * import { useSearch, useQueryState } from '@/lib/hooks'
 * のように、必要なフックをまとめて取得できます。
 */

// デバウンス関連フック
export { useDebouncedValue, useDebouncedSearch } from './useDebouncedValue'

// URL同期関連フック  
export {
  useQueryState,
  useUpdateQueryParams,
  useSearchQuery
} from './useQueryState'

// 検索機能統合フック
export {
  useSearch,
  useGiftDetail
} from './useSearch'