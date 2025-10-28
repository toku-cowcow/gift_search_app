/**
 * URL繧ｯ繧ｨ繝ｪ繝代Λ繝｡繝ｼ繧ｿ縺ｨ迥ｶ諷九ｒ蜷梧悄縺吶ｋ繧ｫ繧ｹ繧ｿ繝繝輔ャ繧ｯ
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ・・
 * - URL縺ｮ?query=繧ｿ繧ｪ繝ｫ&occasion=邨仙ｩ・縺ｮ驛ｨ蛻・→縲√さ繝ｳ繝昴・繝阪Φ繝医・迥ｶ諷九ｒ騾｣謳ｺ
 * - 繝悶Λ繧ｦ繧ｶ縺ｮ謌ｻ繧九・騾ｲ繧繝懊ち繝ｳ縺ｫ蟇ｾ蠢・
 * - URL繧貞・譛峨＠縺滓凾縺ｫ縲∝酔縺俶､懃ｴ｢邨先棡繧定｡ｨ遉ｺ
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 繝ｦ繝ｼ繧ｶ繝ｼ縺梧､懃ｴ｢縺励※縲檎ｵ先棡繧旦RL縺ｧ蜈ｱ譛峨＠縺溘＞縲肴凾繧・・
 * 繝悶Λ繧ｦ繧ｶ縺ｮ謌ｻ繧九・繧ｿ繝ｳ縺ｧ縲悟燕縺ｮ讀懃ｴ｢邨先棡縺ｫ謌ｻ繧翫◆縺・肴凾縺ｫ縲・
 * URL縺ｨ逕ｻ髱｢縺ｮ迥ｶ諷九ｒ荳閾ｴ縺輔○繧九◆繧√・驕灘・縺ｧ縺吶・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const [query, setQuery] = useQueryState('q', '')
 * // URL: /search?q=繧ｿ繧ｪ繝ｫ 縺ｮ譎ゅ〈uery 縺ｯ '繧ｿ繧ｪ繝ｫ' 縺ｫ縺ｪ繧・
 * // setQuery('繝上Φ繧ｫ繝・) 縺吶ｋ縺ｨ URL: /search?q=繝上Φ繧ｫ繝・縺ｫ縺ｪ繧・
 */

'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react'

/**
 * URL繧ｯ繧ｨ繝ｪ繝代Λ繝｡繝ｼ繧ｿ縺ｨ迥ｶ諷九ｒ蜷梧悄縺吶ｋ繝輔ャ繧ｯ
 * 
 * @param key - URL繝代Λ繝｡繝ｼ繧ｿ縺ｮ繧ｭ繝ｼ蜷搾ｼ井ｾ具ｼ・q', 'occasion', 'price_min'・・
 * @param defaultValue - 繝・ヵ繧ｩ繝ｫ繝亥､
 * @returns [迴ｾ蝨ｨ縺ｮ蛟､, 蛟､繧呈峩譁ｰ縺吶ｋ髢｢謨ｰ]
 */
export const useQueryState = <T extends string | number | undefined>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // 迴ｾ蝨ｨ縺ｮURL 縺九ｉ謖・ｮ壹＆繧後◆繧ｭ繝ｼ縺ｮ蛟､繧貞叙蠕・
  const getValue = useCallback((): T => {
    const param = searchParams.get(key)
    
    if (param === null) {
      return defaultValue
    }
    
    // 蝙九↓蠢懊§縺ｦ螟画鋤
    if (typeof defaultValue === 'number') {
      const num = parseInt(param, 10)
      return (isNaN(num) ? defaultValue : num) as T
    }
    
    return param as T
  }, [searchParams, key, defaultValue])

  // 蛟､繧呈峩譁ｰ縺励※URL縺ｫ蜿肴丐縺吶ｋ髢｢謨ｰ
  const setValue = useCallback(
    (newValue: T) => {
      const params = new URLSearchParams(searchParams.toString())
      
      if (newValue === undefined || newValue === '' || newValue === defaultValue) {
        // 繝・ヵ繧ｩ繝ｫ繝亥､縺ｾ縺溘・遨ｺ縺ｮ蝣ｴ蜷医・繝代Λ繝｡繝ｼ繧ｿ繧貞炎髯､
        params.delete(key)
      } else {
        // 蛟､繧定ｨｭ螳・
        params.set(key, String(newValue))
      }
      
      // URL繧呈峩譁ｰ・医・繝ｼ繧ｸ繝ｪ繝ｭ繝ｼ繝峨↑縺暦ｼ・
      const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
      router.replace(newUrl, { scroll: false })
    },
    [router, pathname, searchParams, key, defaultValue]
  )

  return [getValue(), setValue]
}

/**
 * 隍・焚縺ｮ繧ｯ繧ｨ繝ｪ繝代Λ繝｡繝ｼ繧ｿ繧剃ｸ蠎ｦ縺ｫ譖ｴ譁ｰ縺吶ｋ繝輔ャ繧ｯ
 * 
 * 隍・焚縺ｮ讀懃ｴ｢譚｡莉ｶ繧貞酔譎ゅ↓螟画峩縺吶ｋ蝣ｴ蜷医↓菴ｿ逕ｨ
 * 萓具ｼ壹ヵ繧｣繝ｫ繧ｿ繝輔か繝ｼ繝縺ｮ騾∽ｿ｡譎ゅ↑縺ｩ
 * 
 * @returns 繝代Λ繝｡繝ｼ繧ｿ繧呈峩譁ｰ縺吶ｋ髢｢謨ｰ
 */
export const useUpdateQueryParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return useCallback(
    (updates: Record<string, string | number | undefined>) => {
      const params = new URLSearchParams(searchParams.toString())
      
      // 蜷・ヱ繝ｩ繝｡繝ｼ繧ｿ繧呈峩譁ｰ
      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === '') {
          params.delete(key)
        } else {
          params.set(key, String(value))
        }
      })
      
      // URL繧剃ｸ諡ｬ譖ｴ譁ｰ
      const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
      router.replace(newUrl, { scroll: false })
    },
    [router, pathname, searchParams]
  )
}

/**
 * 讀懃ｴ｢繝代Λ繝｡繝ｼ繧ｿ繧貞叙蠕励☆繧九Θ繝ｼ繝・ぅ繝ｪ繝・ぅ繝輔ャ繧ｯ
 * 
 * 迴ｾ蝨ｨ縺ｮURL縺九ｉ讀懃ｴ｢譚｡莉ｶ繧偵☆縺ｹ縺ｦ蜿門ｾ・
 * 
 * @returns 讀懃ｴ｢繝代Λ繝｡繝ｼ繧ｿ繧ｪ繝悶ず繧ｧ繧ｯ繝・
 */
export const useSearchQuery = () => {
  const searchParams = useSearchParams()

  return {
    // 讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝・
    query: searchParams.get('q') || '',
    
    // 逕ｨ騾斐ヵ繧｣繝ｫ繧ｿ
    occasion: searchParams.get('occasion') || undefined,
    
    // 萓｡譬ｼ蟶ｯ繝輔ぅ繝ｫ繧ｿ  
    priceMin: searchParams.get('price_min') ? parseInt(searchParams.get('price_min')!, 10) : undefined,
    priceMax: searchParams.get('price_max') ? parseInt(searchParams.get('price_max')!, 10) : undefined,
    
    // 繧ｽ繝ｼ繝・
    sort: searchParams.get('sort') || 'updated_at:desc',
    
    // 繝壹・繧ｸ繝ｳ繧ｰ
    page: searchParams.get('page') ? parseInt(searchParams.get('page')!, 10) : 1,
  }
}