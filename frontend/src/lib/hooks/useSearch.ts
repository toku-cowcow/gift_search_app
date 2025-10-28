/**
 * 讀懃ｴ｢讖溯・縺ｮ邨ｱ蜷医き繧ｹ繧ｿ繝繝輔ャ繧ｯ
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ・・
 * - 讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝牙・蜉帙√ョ繝舌え繝ｳ繧ｹ蜃ｦ逅・、PI蜻ｼ縺ｳ蜃ｺ縺励ｒ邨ｱ蜷・
 * - URL蜷梧悄縲√Ο繝ｼ繝・ぅ繝ｳ繧ｰ迥ｶ諷九√お繝ｩ繝ｼ繝上Φ繝峨Μ繝ｳ繧ｰ繧剃ｸ蜈・ｮ｡逅・
 * - 隍・焚縺ｮ繝壹・繧ｸ縺ｧ蜷後§讀懃ｴ｢繝ｭ繧ｸ繝・け繧貞・蛻ｩ逕ｨ
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 縲梧､懃ｴ｢縲阪↓蠢・ｦ√↑讖溯・繧偵・縺ｨ縺ｾ縺ｨ繧√↓縺励◆繝代ャ繧ｱ繝ｼ繧ｸ縺ｧ縺吶・
 * - 繝ｦ繝ｼ繧ｶ繝ｼ縺悟・蜉・竊・蟆代＠蠕・▲縺ｦ縺九ｉ讀懃ｴ｢螳溯｡鯉ｼ医ョ繝舌え繝ｳ繧ｹ・・
 * - 讀懃ｴ｢荳ｭ縺ｯ縲瑚ｪｭ縺ｿ霎ｼ縺ｿ荳ｭ...縲崎｡ｨ遉ｺ
 * - 繧ｨ繝ｩ繝ｼ縺瑚ｵｷ縺阪◆繧蛾←蛻・↓繝｡繝・そ繝ｼ繧ｸ陦ｨ遉ｺ
 * - URL繧り・蜍輔〒譖ｴ譁ｰ
 * 縺薙ｌ繧牙・驛ｨ繧偵√％縺ｮ繝輔ャ繧ｯ1縺､縺ｧ邁｡蜊倥↓菴ｿ縺医∪縺吶・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const { query, setQuery, results, isLoading, error } = useSearch()
 * // 蜈･蜉帶ｬ・ <input value={query} onChange={(e) => setQuery(e.target.value)} />
 * // 邨先棡陦ｨ遉ｺ: {isLoading ? '讀懃ｴ｢荳ｭ...' : results.map(...)}
 */

'use client'

import { useState, useEffect, useCallback } from 'react'
import { useQueryState } from './useQueryState'
import { useDebouncedValue } from './useDebouncedValue'
import { searchGifts } from '@/lib/api/giftApi'
import type { SearchParams, SearchResponse } from '@/lib/types'

/**
 * 讀懃ｴ｢讖溯・縺ｮ邨ｱ蜷医ヵ繝・け
 * 
 * @param initialQuery - 蛻晄悄讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝・
 * @param debounceMs - 繝・ヰ繧ｦ繝ｳ繧ｹ譎る俣・医Α繝ｪ遘抵ｼ・
 * @returns 讀懃ｴ｢迥ｶ諷九→繝上Φ繝峨Λ繝ｼ
 */
export const useSearch = (initialQuery = '', debounceMs = 500) => {
  // URL蜷梧悄縺輔ｌ縺滓､懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝・
  const [query, setQuery] = useQueryState('q', initialQuery)
  
  // URL蜷梧悄縺輔ｌ縺溘ヵ繧｣繝ｫ繧ｿ譚｡莉ｶ
  const [occasion, setOccasion] = useQueryState('occasion', undefined as string | undefined)
  const [priceMin, setPriceMin] = useQueryState('price_min', undefined as number | undefined)
  const [priceMax, setPriceMax] = useQueryState('price_max', undefined as number | undefined)
  const [sort, setSort] = useQueryState('sort', 'updated_at:desc' as any)
  
  // 繝・ヰ繧ｦ繝ｳ繧ｹ驕ｩ逕ｨ縺輔ｌ縺滓､懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝・
  const debouncedQuery = useDebouncedValue(query, debounceMs)
  
  // 讀懃ｴ｢邨先棡縺ｮ迥ｶ諷・
  const [results, setResults] = useState<SearchResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 讀懃ｴ｢螳溯｡碁未謨ｰ
  const executeSearch = useCallback(async (searchParams: SearchParams) => {
    // 遨ｺ縺ｮ讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝峨・蝣ｴ蜷医・繧ｹ繧ｭ繝・・
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
      console.error('讀懃ｴ｢繧ｨ繝ｩ繝ｼ:', err)
      setError('讀懃ｴ｢荳ｭ縺ｫ繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆縲ゅｂ縺・ｸ蠎ｦ縺願ｩｦ縺励￥縺縺輔＞縲・)
      setResults(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // 繝・ヰ繧ｦ繝ｳ繧ｹ縺輔ｌ縺溘け繧ｨ繝ｪ縺悟､画峩縺輔ｌ縺溘ｉ讀懃ｴ｢螳溯｡・
  useEffect(() => {
    const searchParams: SearchParams = {
      q: debouncedQuery,
      occasion: occasion as any,
      price_min: priceMin,
      price_max: priceMax,
      sort: sort as any,
      offset: 0, // 譁ｰ縺励＞讀懃ｴ｢縺ｧ縺ｯ蟶ｸ縺ｫ0縺九ｉ髢句ｧ・
    }

    executeSearch(searchParams)
  }, [debouncedQuery, occasion, priceMin, priceMax, sort, executeSearch])

  // 讀懃ｴ｢譚｡莉ｶ繧偵け繝ｪ繧｢
  const clearSearch = useCallback(() => {
    setQuery('')
    setOccasion(undefined)
    setPriceMin(undefined)
    setPriceMax(undefined)
    setResults(null)
    setError(null)
  }, [setQuery, setOccasion, setPriceMin, setPriceMax])

  // 繝輔ぅ繝ｫ繧ｿ繧呈峩譁ｰ・域､懃ｴ｢縺ｯ閾ｪ蜍募ｮ溯｡後＆繧後ｋ・・
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
    // 讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝・
    query,
    setQuery,
    
    // 繝輔ぅ繝ｫ繧ｿ譚｡莉ｶ
    filters: {
      occasion,
      priceMin,
      priceMax,
      sort,
    },
    
    // 繝輔ぅ繝ｫ繧ｿ譖ｴ譁ｰ
    updateFilters,
    
    // 讀懃ｴ｢邨先棡
    results,
    isLoading,
    error,
    
    // 繝ｦ繝ｼ繝・ぅ繝ｪ繝・ぅ
    clearSearch,
    hasResults: (results?.hits?.length ?? 0) > 0,
    totalItems: results?.total || 0,
  }
}

/**
 * 蝠・刀隧ｳ邏ｰ繝壹・繧ｸ逕ｨ縺ｮ繝輔ャ繧ｯ
 * 
 * 謖・ｮ壹＆繧後◆ID縺ｮ蝠・刀諠・ｱ繧貞叙蠕・
 * 
 * @param giftId - 蝠・刀ID
 * @returns 蝠・刀隧ｳ邏ｰ縺ｮ迥ｶ諷・
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
        
        // 蝠・刀隧ｳ邏ｰAPI・亥ｰ・擂螳溯｣・ｺ亥ｮ夲ｼ・
        // const response = await getGiftById(giftId)
        // setGift(response)
        
        // 證ｫ螳夂噪縺ｫ讀懃ｴ｢邨先棡縺九ｉ謗｢縺・
        const searchResponse = await searchGifts({ q: '', limit: 1000 })
        const foundGift = searchResponse.hits.find((item: any) => item.id === giftId)
        
        if (foundGift) {
          setGift(foundGift)
        } else {
          setError('蝠・刀縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ縺ｧ縺励◆縲・)
        }
      } catch (err) {
        console.error('蝠・刀隧ｳ邏ｰ蜿門ｾ励お繝ｩ繝ｼ:', err)
        setError('蝠・刀諠・ｱ縺ｮ蜿門ｾ嶺ｸｭ縺ｫ繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆縲・)
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