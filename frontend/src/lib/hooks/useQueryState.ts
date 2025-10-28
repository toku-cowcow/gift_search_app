/**
 * URLクエリパラメータと状態を同期するカスタムフック
 * 
 * このファイルの役割：
 * - URLの?query=タオル&occasion=結婚 の部分と、コンポーネントの状態を連携
 * - ブラウザの戻る・進むボタンに対応
 * - URLを共有した時に、同じ検索結果を表示
 * 
 * 初心者向け解説：
 * ユーザーが検索して「結果をURLで共有したい」時や、
 * ブラウザの戻るボタンで「前の検索結果に戻りたい」時に、
 * URLと画面の状態を一致させるための道具です。
 * 
 * 使用例：
 * const [query, setQuery] = useQueryState('q', '')
 * // URL: /search?q=タオル の時、query は 'タオル' になる
 * // setQuery('ハンカチ') すると URL: /search?q=ハンカチ になる
 */

'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react'

/**
 * URLクエリパラメータと状態を同期するフック
 * 
 * @param key - URLパラメータのキー名（例：'q', 'occasion', 'price_min'）
 * @param defaultValue - デフォルト値
 * @returns [現在の値, 値を更新する関数]
 */
export const useQueryState = <T extends string | number | undefined>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // 現在のURL から指定されたキーの値を取得
  const getValue = useCallback((): T => {
    const param = searchParams.get(key)
    
    if (param === null) {
      return defaultValue
    }
    
    // 型に応じて変換
    if (typeof defaultValue === 'number') {
      const num = parseInt(param, 10)
      return (isNaN(num) ? defaultValue : num) as T
    }
    
    return param as T
  }, [searchParams, key, defaultValue])

  // 値を更新してURLに反映する関数
  const setValue = useCallback(
    (newValue: T) => {
      const params = new URLSearchParams(searchParams.toString())
      
      if (newValue === undefined || newValue === '' || newValue === defaultValue) {
        // デフォルト値または空の場合はパラメータを削除
        params.delete(key)
      } else {
        // 値を設定
        params.set(key, String(newValue))
      }
      
      // URLを更新（ページリロードなし）
      const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
      router.replace(newUrl, { scroll: false })
    },
    [router, pathname, searchParams, key, defaultValue]
  )

  return [getValue(), setValue]
}

/**
 * 複数のクエリパラメータを一度に更新するフック
 * 
 * 複数の検索条件を同時に変更する場合に使用
 * 例：フィルタフォームの送信時など
 * 
 * @returns パラメータを更新する関数
 */
export const useUpdateQueryParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return useCallback(
    (updates: Record<string, string | number | undefined>) => {
      const params = new URLSearchParams(searchParams.toString())
      
      // 各パラメータを更新
      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === '') {
          params.delete(key)
        } else {
          params.set(key, String(value))
        }
      })
      
      // URLを一括更新
      const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
      router.replace(newUrl, { scroll: false })
    },
    [router, pathname, searchParams]
  )
}

/**
 * 検索パラメータを取得するユーティリティフック
 * 
 * 現在のURLから検索条件をすべて取得
 * 
 * @returns 検索パラメータオブジェクト
 */
export const useSearchQuery = () => {
  const searchParams = useSearchParams()

  return {
    // 検索キーワード
    query: searchParams.get('q') || '',
    
    // 用途フィルタ
    occasion: searchParams.get('occasion') || undefined,
    
    // 価格帯フィルタ  
    priceMin: searchParams.get('price_min') ? parseInt(searchParams.get('price_min')!, 10) : undefined,
    priceMax: searchParams.get('price_max') ? parseInt(searchParams.get('price_max')!, 10) : undefined,
    
    // ソート
    sort: searchParams.get('sort') || 'updated_at:desc',
    
    // ページング
    page: searchParams.get('page') ? parseInt(searchParams.get('page')!, 10) : 1,
  }
}