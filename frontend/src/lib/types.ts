/**
 * 繝輔Ο繝ｳ繝医お繝ｳ繝牙・菴薙〒菴ｿ逕ｨ縺吶ｋ蝙句ｮ夂ｾｩ
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ:
 * - 繝舌ャ繧ｯ繧ｨ繝ｳ繝陰PI縺ｨ縺ｮ蝙九・謨ｴ蜷域ｧ繧剃ｿ昴▽
 * - 繧ｳ繝ｳ繝昴・繝阪Φ繝磯俣縺ｧ縺ｮ繝・・繧ｿ蜿励￠貂｡縺励ｒ蝙句ｮ牙・縺ｫ縺吶ｋ
 * - 蟆・擂縺ｮAPI螟画峩譎ゅ・蠖ｱ髻ｿ邂・園繧堤音螳壹＠繧・☆縺上☆繧・
 */

/**
 * 繧ｮ繝輔ヨ蝠・刀縺ｮ諠・ｱ繧定｡ｨ迴ｾ縺吶ｋ蝙・
 * 
 * 繝舌ャ繧ｯ繧ｨ繝ｳ繝峨・ GiftItem 繧ｹ繧ｭ繝ｼ繝槭→蟇ｾ蠢懊＠縺ｦ縺・ｋ
 */
export interface GiftItem {
  id: string                    // 蝠・刀縺ｮ荳諢剰ｭ伜挨蟄・
  title: string                 // 蝠・刀蜷搾ｼ郁｡ｨ遉ｺ逕ｨ・・
  price: number                 // 萓｡譬ｼ・亥・蜊倅ｽ阪∵紛謨ｰ・・
  image_url: string             // 蝠・刀逕ｻ蜒上・URL
  merchant: string              // 雋ｩ螢ｲ讌ｭ閠・錐
  source: string                // 繝・・繧ｿ繧ｽ繝ｼ繧ｹ・・akuten遲会ｼ・
  url: string                   // 蜈・・蝠・刀繝壹・繧ｸURL
  affiliate_url: string         // 繧｢繝輔ぅ繝ｪ繧ｨ繧､繝・RL・亥庶逶雁喧逕ｨ・・
  occasion: OccasionKey         // 逕ｨ騾費ｼ亥梛螳牙・諤ｧ縺ｮ縺溘ａ蟆ら畑蝙九ｒ菴ｿ逕ｨ・・
  updated_at: number            // 譖ｴ譁ｰ譌･譎ゑｼ・nix繧ｿ繧､繝繧ｹ繧ｿ繝ｳ繝暦ｼ・
}

/**
 * 逕ｨ騾費ｼ医す繝ｼ繝ｳ・峨・繧ｭ繝ｼ
 * 
 * 繧ｷ繧ｹ繝・Β縺ｧ蟇ｾ蠢懊＠縺ｦ縺・ｋ逕ｨ騾斐・遞ｮ鬘槭ｒ髯仙ｮ・
 */
export type OccasionKey = 'funeral_return' | 'wedding_return' | 'baby_return'

/**
 * 逕ｨ騾斐・陦ｨ遉ｺ諠・ｱ
 * 
 * 繝輔ぅ繝ｫ繧ｿ驕ｸ謚櫁い繧・Λ繝吶Ν陦ｨ遉ｺ縺ｧ菴ｿ逕ｨ
 */
export interface Occasion {
  key: OccasionKey              // 繧ｷ繧ｹ繝・Β蜀・Κ繧ｭ繝ｼ
  label: string                 // 繝ｦ繝ｼ繧ｶ繝ｼ蜷代￠陦ｨ遉ｺ蜷搾ｼ磯ｦ吝・霑斐＠遲会ｼ・
}

/**
 * 繧ｽ繝ｼ繝磯・・謖・ｮ・
 * 
 * 讀懃ｴ｢邨先棡縺ｮ荳ｦ縺ｳ鬆・ｒ蛻ｶ蠕｡
 */
export type SortKey = 'updated_at:desc' | 'price:asc' | 'price:desc'

/**
 * 讀懃ｴ｢繝代Λ繝｡繝ｼ繧ｿ
 * 
 * 讀懃ｴ｢API縺ｫ騾∽ｿ｡縺吶ｋ繝代Λ繝｡繝ｼ繧ｿ繧偵∪縺ｨ繧√◆蝙・
 */
export interface SearchParams {
  q?: string                    // 讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝会ｼ井ｻｻ諢擾ｼ・
  occasion?: OccasionKey        // 逕ｨ騾斐ヵ繧｣繝ｫ繧ｿ・井ｻｻ諢擾ｼ・
  price_min?: number            // 譛菴惹ｾ｡譬ｼ・井ｻｻ諢擾ｼ・
  price_max?: number            // 譛鬮倅ｾ｡譬ｼ・井ｻｻ諢擾ｼ・
  sort?: SortKey                // 繧ｽ繝ｼ繝磯・ｼ医ョ繝輔か繝ｫ繝・ updated_at:desc・・
  limit?: number                // 蜿門ｾ嶺ｻｶ謨ｰ・医ョ繝輔か繝ｫ繝・ 20・・
  offset?: number               // 繧ｪ繝輔そ繝・ヨ・医・繝ｼ繧ｸ繝ｳ繧ｰ逕ｨ縲√ョ繝輔か繝ｫ繝・ 0・・
}

/**
 * 讀懃ｴ｢邨先棡縺ｮ繝ｬ繧ｹ繝昴Φ繧ｹ
 * 
 * 讀懃ｴ｢API縺九ｉ霑斐＆繧後ｋ邨先棡縺ｮ讒矩
 */
export interface SearchResponse {
  total: number                 // 讀懃ｴ｢譚｡莉ｶ縺ｫ隧ｲ蠖薙☆繧狗ｷ丈ｻｶ謨ｰ
  hits: GiftItem[]              // 螳滄圀縺ｫ蜿門ｾ励＠縺溷膚蜩∽ｸ隕ｧ
  query: string                 // 讀懃ｴ｢縺ｫ菴ｿ逕ｨ縺輔ｌ縺溘け繧ｨ繝ｪ譁・ｭ怜・
  processing_time_ms: number    // 蜃ｦ逅・凾髢難ｼ医Α繝ｪ遘抵ｼ・
  limit: number                 // 1繝壹・繧ｸ縺ゅ◆繧翫・莉ｶ謨ｰ
  offset: number                // 髢句ｧ倶ｽ咲ｽｮ
}

/**
 * 繧ｨ繝ｩ繝ｼ繝ｬ繧ｹ繝昴Φ繧ｹ
 * 
 * API蜻ｼ縺ｳ蜃ｺ縺玲凾縺ｮ繧ｨ繝ｩ繝ｼ諠・ｱ
 */
export interface ErrorResponse {
  error: string                 // 繧ｨ繝ｩ繝ｼ縺ｮ讎りｦ・
  detail?: string               // 隧ｳ邏ｰ諠・ｱ・井ｻｻ諢擾ｼ・
}

/**
 * 萓｡譬ｼ蟶ｯ繝輔ぅ繝ｫ繧ｿ逕ｨ縺ｮ蝙・
 * 
 * UI荳翫〒縺ｮ萓｡譬ｼ蟶ｯ驕ｸ謚槭〒菴ｿ逕ｨ
 */
export interface PriceRange {
  label: string                 // 陦ｨ遉ｺ蜷搾ｼ医後・,000蜀・咲ｭ会ｼ・
  min?: number                  // 譛蟆丞､・域悴謖・ｮ壹・蝣ｴ蜷医・荳矩剞縺ｪ縺暦ｼ・
  max?: number                  // 譛螟ｧ蛟､・域悴謖・ｮ壹・蝣ｴ蜷医・荳企剞縺ｪ縺暦ｼ・
}

/**
 * 繧ｽ繝ｼ繝医が繝励す繝ｧ繝ｳ
 * 
 * UI荳翫〒縺ｮ繧ｽ繝ｼ繝磯∈謚槭〒菴ｿ逕ｨ
 */
export interface SortOption {
  value: SortKey                // 繧ｷ繧ｹ繝・Β蜀・Κ縺ｧ菴ｿ逕ｨ縺吶ｋ蛟､
  label: string                 // 繝ｦ繝ｼ繧ｶ繝ｼ蜷代￠陦ｨ遉ｺ蜷・
}