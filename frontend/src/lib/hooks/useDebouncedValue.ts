/**
 * 値の変更を遅延させるカスタムフック
 * 
 * このファイルの役割：
 * - 入力値が変更された時に、一定時間待ってから処理を実行
 * - 検索ボックスでの過度なAPI呼び出しを防ぐ
 * 
 * 初心者向け解説：
 * ユーザーが検索ボックスに「た」「た」「たお」「たおる」と高速で入力した時、
 * 毎回検索APIを呼ぶのではなく、「入力が落ち着いたら検索する」ように
 * 遅延をかけるための道具です。
 * 
 * 使用例：
 * const [searchQuery, setSearchQuery] = useState('')
 * const debouncedQuery = useDebouncedValue(searchQuery, 300) // 300ms遅延
 * 
 * // debouncedQuery が変化した時だけ検索API呼び出し
 * useEffect(() => {
 *   if (debouncedQuery) {
 *     searchItems(debouncedQuery)
 *   }
 * }, [debouncedQuery])
 */

import { useState, useEffect } from 'react'

/**
 * 遅延された値を返すカスタムフック
 * 
 * @param value - 監視する値（通常は入力フォームの値）
 * @param delay - 遅延時間（ミリ秒）デフォルトは300ms
 * @returns 遅延された値
 */
export const useDebouncedValue = <T>(value: T, delay: number = 300): T => {
  // 遅延された値を保持するstate
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // 指定時間後に値を更新するタイマーを設定
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // クリーンアップ関数：
    // 値が再び変更された場合、前のタイマーをキャンセル
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay]) // value または delay が変更された時に実行

  return debouncedValue
}

/**
 * 検索専用のデバウンスフック
 * 
 * 検索によく使われる設定（500ms遅延、空文字列の場合は即座に反映）を
 * プリセットしたバージョン
 * 
 * @param searchQuery - 検索クエリ
 * @returns 遅延された検索クエリ
 */
export const useDebouncedSearch = (searchQuery: string): string => {
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery)

  useEffect(() => {
    // 空文字列の場合は即座に反映（検索結果をクリアするため）
    if (searchQuery === '') {
      setDebouncedQuery(searchQuery)
      return
    }

    // 入力がある場合は500ms遅延
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [searchQuery])

  return debouncedQuery
}