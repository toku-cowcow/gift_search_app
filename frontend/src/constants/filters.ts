/**
 * アプリケーション全体で使用する定数定義
 * 
 * このファイルの役割：
 * - フィルタ選択肢、ソート条件などの設定値を一元管理
 * - デザインやビジネスロジックで使う固定値を定義
 * - 将来の仕様変更時の影響範囲を限定
 * 
 * 初心者向け解説：
 * 「設定表」のようなファイルです。
 * - フィルタで選べる価格帯 → PRICE_RANGES
 * - ソートで選べる条件 → SORT_OPTIONS  
 * - 用途の表示名 → OCCASIONS
 * など、画面で使う「選択肢」をここで決めています。
 * 値を変えたい時は、このファイルを修正すれば全体に反映されます。
 */

import type { PriceRange, SortOption, Occasion, OccasionKey, SortKey } from '../lib/types'

/**
 * 用途（利用シーン）の定義
 * 
 * フィルタ画面やカテゴリ表示で使用する用途の一覧
 */
export const OCCASIONS: Occasion[] = [
  {
    key: 'wedding_return',
    label: '結婚内祝い'
  },
  {
    key: 'baby_return', 
    label: '出産内祝い'
  },
  {
    key: 'funeral_return',
    label: '香典返し'
  }
]

/**
 * 価格帯フィルタの選択肢
 * 
 * 価格帯指定で使用する定義済み範囲
 */
export const PRICE_RANGES: PriceRange[] = [
  {
    label: '指定しない',
    min: undefined,
    max: undefined
  },
  {
    label: '〜1,000円',
    min: undefined,
    max: 1000
  },
  {
    label: '1,000円〜3,000円',
    min: 1000,
    max: 3000
  },
  {
    label: '3,000円〜5,000円',
    min: 3000,
    max: 5000
  },
  {
    label: '5,000円〜10,000円',
    min: 5000,
    max: 10000
  },
  {
    label: '10,000円〜30,000円',
    min: 10000,
    max: 30000
  },
  {
    label: '30,000円以上',
    min: 30000,
    max: undefined
  }
]

/**
 * ソート条件の選択肢
 * 
 * 検索結果の並び順指定で使用
 */
export const SORT_OPTIONS: SortOption[] = [
  {
    value: 'updated_at:desc',
    label: '更新日時（新しい順）'
  },
  {
    value: 'price:asc',
    label: '価格（安い順）'
  },
  {
    value: 'price:desc',
    label: '価格（高い順）'
  }
]

/**
 * ページネーション設定
 */
export const PAGINATION = {
  /** 1ページあたりのデフォルト表示件数 */
  DEFAULT_LIMIT: 20,
  
  /** ページネーションで選択可能な件数オプション */
  LIMIT_OPTIONS: [10, 20, 50, 100],
  
  /** 一度に表示するページ番号の最大数 */
  MAX_PAGE_BUTTONS: 5
}

/**
 * 検索機能の設定
 */
export const SEARCH_CONFIG = {
  /** 検索キーワードのデバウンス時間（ミリ秒） */
  DEBOUNCE_MS: 500,
  
  /** 検索キーワードの最大文字数 */
  MAX_QUERY_LENGTH: 100,
  
  /** 検索キーワードの最小文字数 */
  MIN_QUERY_LENGTH: 1,
  
  /** 人気キーワードの表示件数 */
  POPULAR_KEYWORDS_COUNT: 10
}

/**
 * UI表示の設定
 */
export const UI_CONFIG = {
  /** 商品タイトルの表示最大文字数 */
  MAX_TITLE_LENGTH: 50,
  
  /** 商品説明の表示最大文字数 */
  MAX_DESCRIPTION_LENGTH: 100,
  
  /** エラーメッセージの自動非表示時間（ミリ秒） */
  ERROR_TIMEOUT_MS: 5000,
  
  /** 成功メッセージの自動非表示時間（ミリ秒） */
  SUCCESS_TIMEOUT_MS: 3000,
  
  /** ローディング表示の最小時間（ミリ秒） */
  MIN_LOADING_TIME_MS: 300
}

/**
 * API通信の設定
 */
export const API_CONFIG = {
  /** リクエストタイムアウト時間（ミリ秒） */
  TIMEOUT_MS: 10000,
  
  /** リトライ回数 */
  RETRY_COUNT: 3,
  
  /** リトライ間隔（ミリ秒） */
  RETRY_DELAY_MS: 1000,
  
  /** ベースURL（環境変数から取得、フォールバック値） */
  BASE_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'
}

/**
 * ローカルストレージのキー名
 */
export const STORAGE_KEYS = {
  /** ユーザーの検索履歴 */
  SEARCH_HISTORY: 'uchiGift_searchHistory',
  
  /** ユーザー設定（表示件数、ソート設定など） */
  USER_PREFERENCES: 'uchiGift_userPreferences',
  
  /** お気に入り商品のID一覧 */
  FAVORITES: 'uchiGift_favorites',
  
  /** 最後に使用したフィルタ条件 */
  LAST_FILTERS: 'uchiGift_lastFilters'
}

/**
 * 外部サービス用の設定
 */
export const EXTERNAL_CONFIG = {
  /** 楽天アフィリエイトID（将来の楽天API連携用） */
  RAKUTEN_AFFILIATE_ID: process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID || '',
  
  /** Google Analytics ID */
  GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID || '',
  
  /** サポートメール */
  SUPPORT_EMAIL: 'support@uchigift.com'
}

/**
 * メタデータとSEO設定
 */
export const META_CONFIG = {
  /** サイト名 */
  SITE_NAME: 'UchiGift - 内祝いギフト検索',
  
  /** デフォルトページタイトル */
  DEFAULT_TITLE: '内祝いギフト検索 | 結婚・出産・香典返しの贈り物を簡単検索',
  
  /** デフォルトの説明文 */
  DEFAULT_DESCRIPTION: '結婚内祝い、出産内祝い、香典返しなどの内祝いギフトを簡単に検索できるサービスです。価格帯や用途から最適な贈り物を見つけましょう。',
  
  /** デフォルトのOGP画像 */
  DEFAULT_OGP_IMAGE: '/images/ogp-default.jpg'
}

/**
 * カラーテーマ（Tailwind CSS クラス）
 */
export const THEME_COLORS = {
  /** プライマリカラー */
  PRIMARY: {
    50: 'bg-blue-50',
    100: 'bg-blue-100', 
    500: 'bg-blue-500',
    600: 'bg-blue-600',
    700: 'bg-blue-700'
  },
  
  /** セカンダリカラー */
  SECONDARY: {
    50: 'bg-gray-50',
    100: 'bg-gray-100',
    500: 'bg-gray-500',
    600: 'bg-gray-600'
  },
  
  /** アクセントカラー */
  ACCENT: {
    50: 'bg-pink-50',
    500: 'bg-pink-500',
    600: 'bg-pink-600'
  },
  
  /** ステータスカラー */
  SUCCESS: 'bg-green-500',
  WARNING: 'bg-yellow-500', 
  ERROR: 'bg-red-500'
}

/**
 * レスポンシブブレイクポイント
 */
export const BREAKPOINTS = {
  SM: '640px',   // スマートフォン
  MD: '768px',   // タブレット
  LG: '1024px',  // デスクトップ（小）
  XL: '1280px',  // デスクトップ（大）
  '2XL': '1536px' // デスクトップ（特大）
}

/**
 * アニメーション設定
 */
export const ANIMATIONS = {
  /** フェードインの時間（ミリ秒） */
  FADE_IN_MS: 200,
  
  /** スライドの時間（ミリ秒） */
  SLIDE_MS: 300,
  
  /** バウンス効果の時間（ミリ秒） */
  BOUNCE_MS: 400
}