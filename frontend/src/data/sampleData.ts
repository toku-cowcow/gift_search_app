/**
 * モックデータ・サンプルデータ
 * 
 * このファイルの役割：
 * - 開発中のテスト用データを提供
 * - APIがまだ完成していない時の代替データ
 * - デザイン確認用のリアルなサンプル
 * 
 * 初心者向け解説：
 * 「練習用のおもちゃ」のようなファイルです。
 * 本物のAPIができるまでの間、
 * 「こんな商品があったら...」という仮のデータで
 * 画面の動作を確認するために使います。
 */

import type { GiftItem, SearchResponse, Occasion } from '../lib/types'

/**
 * サンプルの商品データ
 * 
 * 実際の内祝い商品をイメージした架空のデータ
 */
export const SAMPLE_GIFTS: GiftItem[] = [
  {
    id: 'towel_001',
    title: '今治タオル ギフトセット（フェイスタオル2枚）',
    price: 3000,
    image_url: '/images/sample/towel_gift_set.jpg',
    merchant: '今治タオル専門店',
    source: 'rakuten',
    url: 'https://example.com/towel_001',
    affiliate_url: 'https://affiliate.example.com/towel_001',
    occasion: 'wedding_return',
    updated_at: 1705267200 // 2024年1月15日のUnixタイムスタンプ
  },
  {
    id: 'sweets_001',
    title: 'バウムクーヘン詰め合わせ（個包装6個入り）',
    price: 2500,
    image_url: '/images/sample/baumkuchen_set.jpg',
    merchant: 'スイーツファクトリー',
    source: 'rakuten',
    url: 'https://example.com/sweets_001',
    affiliate_url: 'https://affiliate.example.com/sweets_001',
    occasion: 'baby_return',
    updated_at: 1705180800 // 2024年1月14日
  },
  {
    id: 'tea_001',
    title: '静岡茶ギフト（上級煎茶100g×2本）',
    price: 4200,
    image_url: '/images/sample/tea_gift.jpg',
    merchant: '静岡茶園直送',
    source: 'rakuten',
    url: 'https://example.com/tea_001',
    affiliate_url: 'https://affiliate.example.com/tea_001',
    occasion: 'funeral_return',
    updated_at: 1705094400 // 2024年1月13日
  },
  {
    id: 'rice_001',
    title: '新潟県産コシヒカリ（2kg×2袋）',
    price: 5500,
    image_url: '/images/sample/rice_gift.jpg',
    merchant: '新潟米農家',
    source: 'rakuten',
    url: 'https://example.com/rice_001',
    affiliate_url: 'https://affiliate.example.com/rice_001',
    occasion: 'wedding_return',
    updated_at: 1705008000 // 2024年1月12日
  },
  {
    id: 'soap_001',
    title: '無添加石鹸ギフト（ハンドソープ3個セット）',
    price: 1800,
    image_url: '/images/sample/soap_gift.jpg',
    merchant: 'ナチュラルソープ工房',
    source: 'rakuten',
    url: 'https://example.com/soap_001',
    affiliate_url: 'https://affiliate.example.com/soap_001',
    occasion: 'baby_return',
    updated_at: 1704921600 // 2024年1月11日
  },
  {
    id: 'tableware_001',
    title: '美濃焼 夫婦茶碗セット（桐箱入り）',
    price: 8000,
    image_url: '/images/sample/tableware_gift.jpg',
    merchant: '美濃焼窯元',
    source: 'rakuten',
    url: 'https://example.com/tableware_001',
    affiliate_url: 'https://affiliate.example.com/tableware_001',
    occasion: 'wedding_return',
    updated_at: 1704835200 // 2024年1月10日
  },
  {
    id: 'coffee_001',
    title: 'ドリップコーヒーギフト（10種類×2個セット）',
    price: 3500,
    image_url: '/images/sample/coffee_gift.jpg',
    merchant: '自家焙煎コーヒー店',
    source: 'rakuten',
    url: 'https://example.com/coffee_001',
    affiliate_url: 'https://affiliate.example.com/coffee_001',
    occasion: 'funeral_return',
    updated_at: 1704748800 // 2024年1月9日
  },
  {
    id: 'honey_001',
    title: '国産はちみつ3種セット（各200g）',
    price: 4800,
    image_url: '/images/sample/honey_gift.jpg',
    merchant: '養蜂場直送',
    source: 'rakuten',
    url: 'https://example.com/honey_001',
    affiliate_url: 'https://affiliate.example.com/honey_001',
    occasion: 'baby_return',
    updated_at: 1704662400 // 2024年1月8日
  }
]

/**
 * サンプル検索レスポンス
 * 
 * API呼び出しのモック用
 */
export const SAMPLE_SEARCH_RESPONSE: SearchResponse = {
  total: SAMPLE_GIFTS.length,
  hits: SAMPLE_GIFTS,
  query: 'タオル',
  processing_time_ms: 45,
  limit: 20,
  offset: 0
}

/**
 * 人気検索キーワード
 * 
 * 検索フォームでサジェストする用途
 */
export const POPULAR_KEYWORDS = [
  'タオル',
  'バウムクーヘン',
  'コーヒー',
  'お米',
  'お茶',
  '石鹸',
  '食器',
  'はちみつ',
  'ジュース',
  'お菓子',
  '調味料',
  'カタログギフト'
]

/**
 * 価格帯別のサンプル商品数
 * 
 * フィルタUIで参考情報として表示
 */
export const SAMPLE_PRICE_DISTRIBUTION = {
  '〜1,000円': 12,
  '1,000円〜3,000円': 45,
  '3,000円〜5,000円': 38,
  '5,000円〜10,000円': 25,
  '10,000円〜': 15
}

/**
 * 用途別のサンプル商品数
 * 
 * フィルタUIで参考情報として表示
 */
export const SAMPLE_OCCASION_DISTRIBUTION = {
  wedding_return: 48,
  baby_return: 42,
  funeral_return: 35
}

/**
 * デモ用エラーレスポンス
 * 
 * エラーハンドリングのテスト用
 */
export const SAMPLE_ERROR_RESPONSES = {
  network: {
    error: 'ネットワークエラー',
    detail: 'サーバーに接続できませんでした。インターネット接続を確認してください。'
  },
  notFound: {
    error: '商品が見つかりません',
    detail: '指定された条件に一致する商品がありませんでした。'
  },
  serverError: {
    error: 'サーバーエラー',
    detail: 'サーバーで問題が発生しました。しばらく時間をおいてから再度お試しください。'
  }
}

/**
 * サンプル統計データ
 * 
 * ダッシュボードや管理画面での表示用
 */
export const SAMPLE_STATS = {
  totalGifts: 135,
  totalSearches: 2480,
  popularOccasion: 'wedding_return',
  averagePrice: 4200,
  lastUpdated: 1705267200,
  dailySearches: [
    { date: '2024-01-15', count: 145 },
    { date: '2024-01-14', count: 132 },
    { date: '2024-01-13', count: 158 },
    { date: '2024-01-12', count: 167 },
    { date: '2024-01-11', count: 139 },
    { date: '2024-01-10', count: 124 },
    { date: '2024-01-09', count: 141 }
  ]
}

/**
 * サンプル検索機能のヘルパー関数
 * 
 * 開発中にサンプルデータで検索をシミュレートする
 */
export const searchSampleGifts = (query: string, occasion?: string): GiftItem[] => {
  let results = SAMPLE_GIFTS
  
  // キーワードフィルタ
  if (query && query.trim()) {
    const keyword = query.toLowerCase()
    results = results.filter(gift => 
      gift.title.toLowerCase().includes(keyword) ||
      gift.merchant.toLowerCase().includes(keyword)
    )
  }
  
  // 用途フィルタ
  if (occasion) {
    results = results.filter(gift => gift.occasion === occasion)
  }
  
  return results
}

/**
 * 価格帯でフィルタリング
 * 
 * @param gifts - 商品一覧
 * @param minPrice - 最低価格
 * @param maxPrice - 最高価格
 * @returns フィルタされた商品一覧
 */
export const filterGiftsByPrice = (
  gifts: GiftItem[], 
  minPrice?: number, 
  maxPrice?: number
): GiftItem[] => {
  return gifts.filter(gift => {
    if (minPrice !== undefined && gift.price < minPrice) return false
    if (maxPrice !== undefined && gift.price > maxPrice) return false
    return true
  })
}

/**
 * ソート機能
 * 
 * @param gifts - 商品一覧
 * @param sortKey - ソート条件
 * @returns ソートされた商品一覧
 */
export const sortGifts = (gifts: GiftItem[], sortKey: string): GiftItem[] => {
  const sorted = [...gifts]
  
  switch (sortKey) {
    case 'price:asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price:desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'updated_at:desc':
    default:
      return sorted.sort((a, b) => b.updated_at - a.updated_at)
  }
}