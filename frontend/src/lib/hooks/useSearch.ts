/**
 * 検索機能の統合カスタムフック
 * 
 * このファイルの役割：
 * - 検索キーワード入力、デバウンス処理、API呼び出しを統合
 * - URL同期、ローディング状態、エラーハンドリングを一元管理
 * - 複数のページで同じ検索ロジックを再利用
 * 
 * 初心者向け解説：
 * 「検索」に必要な機能をひとまとめにしたパッケージです。
 * - ユーザーが入力 → 少し待ってから検索実行（デバウンス）
 * - 検索中は「読み込み中...」表示
 * - エラーが起きたら適切にメッセージ表示
 * - URLも自動で更新
 * これら全部を、このフック1つで簡単に使えます。
 * 
 * 使用例：
 * const { query, setQuery, results, isLoading, error } = useSearch()
 * // 入力欄: <input value={query} onChange={(e) => setQuery(e.target.value)} />
 * // 結果表示: {isLoading ? '検索中...' : results.map(...)}
 */

'use client'

import { useState, useEffect, useCallback } from 'react'
import { useQueryState } from './useQueryState'
import { useDebouncedValue } from './useDebouncedValue'
import { searchGifts } from '@/lib/api/giftApi'
import type { SearchParams, SearchResponse } from '@/lib/types'

/**
 * 検索機能の統合フック
 * 
 * @param initialQuery - 初期検索キーワード
 * @param debounceMs - デバウンス時間（ミリ秒）
 * @returns 検索状態とハンドラー
 */
export const useSearch = (initialQuery = '', debounceMs = 500) => {
  // URL同期された検索キーワード
  const [query, setQuery] = useQueryState('q', initialQuery)
  
  // URL同期されたフィルタ条件
  const [occasion, setOccasion] = useQueryState('occasion', undefined as string | undefined)
  const [priceMin, setPriceMin] = useQueryState('price_min', undefined as number | undefined)
  const [priceMax, setPriceMax] = useQueryState('price_max', undefined as number | undefined)
  const [sort, setSort] = useQueryState('sort', 'updated_at:desc' as any)
  
  // デバウンス適用された検索キーワード
  const debouncedQuery = useDebouncedValue(query, debounceMs)
  
  // 検索結果の状態
  const [results, setResults] = useState<SearchResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 検索実行関数
  const executeSearch = useCallback(async (searchParams: SearchParams) => {
    // 空の検索キーワードの場合はスキップ
    if (!searchParams.q?.trim()) {
      setResults(null)
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      setError(null)
      
      const response = await searchGifts(searchParams)
      setResults(response)
    } catch (err) {
      console.error('検索エラー:', err)
      setError('検索中にエラーが発生しました。もう一度お試しください。')
      setResults(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // デバウンスされたクエリが変更されたら検索実行
  useEffect(() => {
    const searchParams: SearchParams = {
      q: debouncedQuery,
      occasion: occasion as any,
      price_min: priceMin,
      price_max: priceMax,
      sort: sort as any,
      offset: 0, // 新しい検索では常に0から開始
    }

    executeSearch(searchParams)
  }, [debouncedQuery, occasion, priceMin, priceMax, sort, executeSearch])

  // 検索条件をクリア
  const clearSearch = useCallback(() => {
    setQuery('')
    setOccasion(undefined)
    setPriceMin(undefined)
    setPriceMax(undefined)
    setResults(null)
    setError(null)
  }, [setQuery, setOccasion, setPriceMin, setPriceMax])

  // フィルタを更新（検索は自動実行される）
  const updateFilters = useCallback((filters: {
    occasion?: string
    priceMin?: number
    priceMax?: number
    sort?: string
  }) => {
    if (filters.occasion !== undefined) setOccasion(filters.occasion || undefined)
    if (filters.priceMin !== undefined) setPriceMin(filters.priceMin || undefined)
    if (filters.priceMax !== undefined) setPriceMax(filters.priceMax || undefined)
    if (filters.sort !== undefined) setSort(filters.sort)
  }, [setOccasion, setPriceMin, setPriceMax, setSort])

  return {
    // 検索キーワード
    query,
    setQuery,
    
    // フィルタ条件
    filters: {
      occasion,
      priceMin,
      priceMax,
      sort,
    },
    
    // フィルタ更新
    updateFilters,
    
    // 検索結果
    results,
    isLoading,
    error,
    
    // ユーティリティ
    clearSearch,
    hasResults: (results?.hits?.length ?? 0) > 0,
    totalItems: results?.total || 0,
  }
}

/**
 * 商品詳細ページ用のフック
 * 
 * 指定されたIDの商品情報を取得
 * 
 * @param giftId - 商品ID
 * @returns 商品詳細の状態
 */
export const useGiftDetail = (giftId: string) => {
  const [gift, setGift] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGift = async () => {
      if (!giftId) return

      try {
        setIsLoading(true)
        setError(null)
        
        // 商品詳細API（将来実装予定）
        // const response = await getGiftById(giftId)
        // setGift(response)
        
        // 暫定的に検索結果から探す
        const searchResponse = await searchGifts({ q: '', limit: 1000 })
        const foundGift = searchResponse.hits.find((item: any) => item.id === giftId)
        
        if (foundGift) {
          setGift(foundGift)
        } else {
          setError('商品が見つかりませんでした。')
        }
      } catch (err) {
        console.error('商品詳細取得エラー:', err)
        setError('商品情報の取得中にエラーが発生しました。')
      } finally {
        setIsLoading(false)
      }
    }

    fetchGift()
  }, [giftId])

  return {
    gift,
    isLoading,
    error,
  }
}