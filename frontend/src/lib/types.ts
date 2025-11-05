/**
 * UchiGift アプリケーション用型定義
 * 
 * バックエンドAPIスキーマに合わせた型定義と価格帯・用途・ソートのマッピング
 */

// ギフトアイテムの基本データ構造（APIレスポンスに合致）
export interface GiftItem {
  id: string;
  title: string;
  price: number;
  image_url: string;
  merchant: string;
  source: string;
  url: string;
  affiliate_url: string;
  occasion: string;
  occasions?: string[];     // 複数用途リスト（オプショナル）
  updated_at: number;
  review_count?: number;    // レビュー数
  review_average?: number;  // 評価平均（星評価）
}

// バックエンドAPIからのレスポンス型（実際のAPI仕様に合致）
export interface SearchResponse {
  total: number;
  hits: GiftItem[];
  query: string;
  processing_time_ms: number;
  limit: number;
  offset: number;
}

// フィルタリング用の型定義
export type OccasionKey = 
  | '' 
  | 'baby_return' 
  | 'wedding_return' 
  | 'funeral_return'
  | 'new_home'
  | 'recovery';

export type SourceKey = 
  | '' 
  | 'rakuten' 
  | 'amazon';

export type SortKey = 
  | 'updated_at:desc'
  | 'price:asc' 
  | 'price:desc'
  | 'review_count:desc'
  | 'review_average:desc';

// 価格帯マッピング（APIのprice_min/price_maxに変換）
export const PRICE_RANGE_MAPPINGS = {
  '': { label: 'すべての価格', price_min: undefined, price_max: undefined },
  'under3000': { label: '〜3,000円', price_min: undefined, price_max: 3000 },
  '3000-5000': { label: '3,001〜5,000円', price_min: 3001, price_max: 5000 },
  '5000-10000': { label: '5,001〜10,000円', price_min: 5001, price_max: 10000 },
  'over10000': { label: '10,000円〜', price_min: 10000, price_max: undefined }
} as const;

// 用途マッピング（UI表示名 → APIパラメータ）
export const OCCASION_MAPPINGS = {
  '': 'すべて',
  'baby_return': '出産内祝い',
  'wedding_return': '結婚内祝い', 
  'funeral_return': '香典返し',
  'new_home': '新築内祝い',
  'recovery': '快気祝い'
} as const;

// ソースマッピング（将来のAPI拡張対応）
export const SOURCE_MAPPINGS = {
  '': 'すべて',
  'rakuten': '楽天',
  'amazon': 'Amazon'
} as const;

// ソートマッピング（UI表示名 → APIパラメータ）
export const SORT_MAPPINGS = {
  'updated_at:desc': '新着順',
  'price:asc': '価格の安い順',
  'price:desc': '価格の高い順',
  'review_count:desc': 'レビュー件数順',
  'review_average:desc': 'レビュー評価順'
} as const;

export type PriceRangeKey = keyof typeof PRICE_RANGE_MAPPINGS;