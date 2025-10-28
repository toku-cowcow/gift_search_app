/**
 * フロントエンド全体で使用する型定義
 * 
 * このファイルの役割:
 * - バックエンドAPIとの型の整合性を保つ
 * - コンポーネント間でのデータ受け渡しを型安全にする
 * - 将来のAPI変更時の影響箇所を特定しやすくする
 */

/**
 * ギフト商品の情報を表現する型
 * 
 * バックエンドの GiftItem スキーマと対応している
 */
export interface GiftItem {
  id: string                    // 商品の一意識別子
  title: string                 // 商品名（表示用）
  price: number                 // 価格（円単位、整数）
  image_url: string             // 商品画像のURL
  merchant: string              // 販売業者名
  source: string                // データソース（rakuten等）
  url: string                   // 元の商品ページURL
  affiliate_url: string         // アフィリエイトURL（収益化用）
  occasion: OccasionKey         // 用途（型安全性のため専用型を使用）
  updated_at: number            // 更新日時（Unixタイムスタンプ）
}

/**
 * 用途（シーン）のキー
 * 
 * システムで対応している用途の種類を限定
 */
export type OccasionKey = 'funeral_return' | 'wedding_return' | 'baby_return'

/**
 * 用途の表示情報
 * 
 * フィルタ選択肢やラベル表示で使用
 */
export interface Occasion {
  key: OccasionKey              // システム内部キー
  label: string                 // ユーザー向け表示名（香典返し等）
}

/**
 * ソート順の指定
 * 
 * 検索結果の並び順を制御
 */
export type SortKey = 'updated_at:desc' | 'price:asc' | 'price:desc'

/**
 * 検索パラメータ
 * 
 * 検索APIに送信するパラメータをまとめた型
 */
export interface SearchParams {
  q?: string                    // 検索キーワード（任意）
  occasion?: OccasionKey        // 用途フィルタ（任意）
  price_min?: number            // 最低価格（任意）
  price_max?: number            // 最高価格（任意）
  sort?: SortKey                // ソート順（デフォルト: updated_at:desc）
  limit?: number                // 取得件数（デフォルト: 20）
  offset?: number               // オフセット（ページング用、デフォルト: 0）
}

/**
 * 検索結果のレスポンス
 * 
 * 検索APIから返される結果の構造
 */
export interface SearchResponse {
  total: number                 // 検索条件に該当する総件数
  hits: GiftItem[]              // 実際に取得した商品一覧
  query: string                 // 検索に使用されたクエリ文字列
  processing_time_ms: number    // 処理時間（ミリ秒）
  limit: number                 // 1ページあたりの件数
  offset: number                // 開始位置
}

/**
 * エラーレスポンス
 * 
 * API呼び出し時のエラー情報
 */
export interface ErrorResponse {
  error: string                 // エラーの概要
  detail?: string               // 詳細情報（任意）
}

/**
 * 価格帯フィルタ用の型
 * 
 * UI上での価格帯選択で使用
 */
export interface PriceRange {
  label: string                 // 表示名（「〜3,000円」等）
  min?: number                  // 最小値（未指定の場合は下限なし）
  max?: number                  // 最大値（未指定の場合は上限なし）
}

/**
 * ソートオプション
 * 
 * UI上でのソート選択で使用
 */
export interface SortOption {
  value: SortKey                // システム内部で使用する値
  label: string                 // ユーザー向け表示名
}