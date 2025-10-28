/**
 * 蛟､縺ｮ螟画峩繧帝≦蟒ｶ縺輔○繧九き繧ｹ繧ｿ繝繝輔ャ繧ｯ
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ・・
 * - 蜈･蜉帛､縺悟､画峩縺輔ｌ縺滓凾縺ｫ縲∽ｸ螳壽凾髢灘ｾ・▲縺ｦ縺九ｉ蜃ｦ逅・ｒ螳溯｡・
 * - 讀懃ｴ｢繝懊ャ繧ｯ繧ｹ縺ｧ縺ｮ驕主ｺｦ縺ｪAPI蜻ｼ縺ｳ蜃ｺ縺励ｒ髦ｲ縺・
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 繝ｦ繝ｼ繧ｶ繝ｼ縺梧､懃ｴ｢繝懊ャ繧ｯ繧ｹ縺ｫ縲後◆縲阪後◆縲阪後◆縺翫阪後◆縺翫ｋ縲阪→鬮倬溘〒蜈･蜉帙＠縺滓凾縲・
 * 豈主屓讀懃ｴ｢API繧貞他縺ｶ縺ｮ縺ｧ縺ｯ縺ｪ縺上√悟・蜉帙′關ｽ縺｡逹縺・◆繧画､懃ｴ｢縺吶ｋ縲阪ｈ縺・↓
 * 驕・ｻｶ繧偵°縺代ｋ縺溘ａ縺ｮ驕灘・縺ｧ縺吶・
 * 
 * 菴ｿ逕ｨ萓具ｼ・
 * const [searchQuery, setSearchQuery] = useState('')
 * const debouncedQuery = useDebouncedValue(searchQuery, 300) // 300ms驕・ｻｶ
 * 
 * // debouncedQuery 縺悟､牙喧縺励◆譎ゅ□縺第､懃ｴ｢API蜻ｼ縺ｳ蜃ｺ縺・
 * useEffect(() => {
 *   if (debouncedQuery) {
 *     searchItems(debouncedQuery)
 *   }
 * }, [debouncedQuery])
 */

import { useState, useEffect } from 'react'

/**
 * 驕・ｻｶ縺輔ｌ縺溷､繧定ｿ斐☆繧ｫ繧ｹ繧ｿ繝繝輔ャ繧ｯ
 * 
 * @param value - 逶｣隕悶☆繧句､・磯壼ｸｸ縺ｯ蜈･蜉帙ヵ繧ｩ繝ｼ繝縺ｮ蛟､・・
 * @param delay - 驕・ｻｶ譎る俣・医Α繝ｪ遘抵ｼ峨ョ繝輔か繝ｫ繝医・300ms
 * @returns 驕・ｻｶ縺輔ｌ縺溷､
 */
export const useDebouncedValue = <T>(value: T, delay: number = 300): T => {
  // 驕・ｻｶ縺輔ｌ縺溷､繧剃ｿ晄戟縺吶ｋstate
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // 謖・ｮ壽凾髢灘ｾ後↓蛟､繧呈峩譁ｰ縺吶ｋ繧ｿ繧､繝槭・繧定ｨｭ螳・
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // 繧ｯ繝ｪ繝ｼ繝ｳ繧｢繝・・髢｢謨ｰ・・
    // 蛟､縺悟・縺ｳ螟画峩縺輔ｌ縺溷ｴ蜷医∝燕縺ｮ繧ｿ繧､繝槭・繧偵く繝｣繝ｳ繧ｻ繝ｫ
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay]) // value 縺ｾ縺溘・ delay 縺悟､画峩縺輔ｌ縺滓凾縺ｫ螳溯｡・

  return debouncedValue
}

/**
 * 讀懃ｴ｢蟆ら畑縺ｮ繝・ヰ繧ｦ繝ｳ繧ｹ繝輔ャ繧ｯ
 * 
 * 讀懃ｴ｢縺ｫ繧医￥菴ｿ繧上ｌ繧玖ｨｭ螳夲ｼ・00ms驕・ｻｶ縲∫ｩｺ譁・ｭ怜・縺ｮ蝣ｴ蜷医・蜊ｳ蠎ｧ縺ｫ蜿肴丐・峨ｒ
 * 繝励Μ繧ｻ繝・ヨ縺励◆繝舌・繧ｸ繝ｧ繝ｳ
 * 
 * @param searchQuery - 讀懃ｴ｢繧ｯ繧ｨ繝ｪ
 * @returns 驕・ｻｶ縺輔ｌ縺滓､懃ｴ｢繧ｯ繧ｨ繝ｪ
 */
export const useDebouncedSearch = (searchQuery: string): string => {
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery)

  useEffect(() => {
    // 遨ｺ譁・ｭ怜・縺ｮ蝣ｴ蜷医・蜊ｳ蠎ｧ縺ｫ蜿肴丐・域､懃ｴ｢邨先棡繧偵け繝ｪ繧｢縺吶ｋ縺溘ａ・・
    if (searchQuery === '') {
      setDebouncedQuery(searchQuery)
      return
    }

    // 蜈･蜉帙′縺ゅｋ蝣ｴ蜷医・500ms驕・ｻｶ
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [searchQuery])

  return debouncedQuery
}