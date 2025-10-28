/**
 * 繧｢繝励Μ繧ｱ繝ｼ繧ｷ繝ｧ繝ｳ蜈ｨ菴薙〒菴ｿ逕ｨ縺吶ｋ螳壽焚螳夂ｾｩ
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ・・
 * - 繝輔ぅ繝ｫ繧ｿ驕ｸ謚櫁い縲√た繝ｼ繝域擅莉ｶ縺ｪ縺ｩ縺ｮ險ｭ螳壼､繧剃ｸ蜈・ｮ｡逅・
 * - 繝・じ繧､繝ｳ繧・ン繧ｸ繝阪せ繝ｭ繧ｸ繝・け縺ｧ菴ｿ縺・崋螳壼､繧貞ｮ夂ｾｩ
 * - 蟆・擂縺ｮ莉墓ｧ伜､画峩譎ゅ・蠖ｱ髻ｿ遽・峇繧帝剞螳・
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 縲瑚ｨｭ螳夊｡ｨ縲阪・繧医≧縺ｪ繝輔ぃ繧､繝ｫ縺ｧ縺吶・
 * - 繝輔ぅ繝ｫ繧ｿ縺ｧ驕ｸ縺ｹ繧倶ｾ｡譬ｼ蟶ｯ 竊・PRICE_RANGES
 * - 繧ｽ繝ｼ繝医〒驕ｸ縺ｹ繧区擅莉ｶ 竊・SORT_OPTIONS  
 * - 逕ｨ騾斐・陦ｨ遉ｺ蜷・竊・OCCASIONS
 * 縺ｪ縺ｩ縲∫判髱｢縺ｧ菴ｿ縺・碁∈謚櫁い縲阪ｒ縺薙％縺ｧ豎ｺ繧√※縺・∪縺吶・
 * 蛟､繧貞､峨∴縺溘＞譎ゅ・縲√％縺ｮ繝輔ぃ繧､繝ｫ繧剃ｿｮ豁｣縺吶ｌ縺ｰ蜈ｨ菴薙↓蜿肴丐縺輔ｌ縺ｾ縺吶・
 */

import type { PriceRange, SortOption, Occasion, OccasionKey, SortKey } from '../lib/types'

/**
 * 逕ｨ騾費ｼ亥茜逕ｨ繧ｷ繝ｼ繝ｳ・峨・螳夂ｾｩ
 * 
 * 繝輔ぅ繝ｫ繧ｿ逕ｻ髱｢繧・き繝・ざ繝ｪ陦ｨ遉ｺ縺ｧ菴ｿ逕ｨ縺吶ｋ逕ｨ騾斐・荳隕ｧ
 */
export const OCCASIONS: Occasion[] = [
  {
    key: 'wedding_return',
    label: '邨仙ｩ壼・逾昴＞'
  },
  {
    key: 'baby_return', 
    label: '蜃ｺ逕｣蜀・･昴＞'
  },
  {
    key: 'funeral_return',
    label: '鬥吝・霑斐＠'
  }
]

/**
 * 萓｡譬ｼ蟶ｯ繝輔ぅ繝ｫ繧ｿ縺ｮ驕ｸ謚櫁い
 * 
 * 萓｡譬ｼ蟶ｯ謖・ｮ壹〒菴ｿ逕ｨ縺吶ｋ螳夂ｾｩ貂医∩遽・峇
 */
export const PRICE_RANGES: PriceRange[] = [
  {
    label: '謖・ｮ壹＠縺ｪ縺・,
    min: undefined,
    max: undefined
  },
  {
    label: '縲・,000蜀・,
    min: undefined,
    max: 1000
  },
  {
    label: '1,000蜀・・,000蜀・,
    min: 1000,
    max: 3000
  },
  {
    label: '3,000蜀・・,000蜀・,
    min: 3000,
    max: 5000
  },
  {
    label: '5,000蜀・・0,000蜀・,
    min: 5000,
    max: 10000
  },
  {
    label: '10,000蜀・・0,000蜀・,
    min: 10000,
    max: 30000
  },
  {
    label: '30,000蜀・ｻ･荳・,
    min: 30000,
    max: undefined
  }
]

/**
 * 繧ｽ繝ｼ繝域擅莉ｶ縺ｮ驕ｸ謚櫁い
 * 
 * 讀懃ｴ｢邨先棡縺ｮ荳ｦ縺ｳ鬆・欠螳壹〒菴ｿ逕ｨ
 */
export const SORT_OPTIONS: SortOption[] = [
  {
    value: 'updated_at:desc',
    label: '譖ｴ譁ｰ譌･譎ゑｼ域眠縺励＞鬆・ｼ・
  },
  {
    value: 'price:asc',
    label: '萓｡譬ｼ・亥ｮ峨＞鬆・ｼ・
  },
  {
    value: 'price:desc',
    label: '萓｡譬ｼ・磯ｫ倥＞鬆・ｼ・
  }
]

/**
 * 繝壹・繧ｸ繝阪・繧ｷ繝ｧ繝ｳ險ｭ螳・
 */
export const PAGINATION = {
  /** 1繝壹・繧ｸ縺ゅ◆繧翫・繝・ヵ繧ｩ繝ｫ繝郁｡ｨ遉ｺ莉ｶ謨ｰ */
  DEFAULT_LIMIT: 20,
  
  /** 繝壹・繧ｸ繝阪・繧ｷ繝ｧ繝ｳ縺ｧ驕ｸ謚槫庄閭ｽ縺ｪ莉ｶ謨ｰ繧ｪ繝励す繝ｧ繝ｳ */
  LIMIT_OPTIONS: [10, 20, 50, 100],
  
  /** 荳蠎ｦ縺ｫ陦ｨ遉ｺ縺吶ｋ繝壹・繧ｸ逡ｪ蜿ｷ縺ｮ譛螟ｧ謨ｰ */
  MAX_PAGE_BUTTONS: 5
}

/**
 * 讀懃ｴ｢讖溯・縺ｮ險ｭ螳・
 */
export const SEARCH_CONFIG = {
  /** 讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝峨・繝・ヰ繧ｦ繝ｳ繧ｹ譎る俣・医Α繝ｪ遘抵ｼ・*/
  DEBOUNCE_MS: 500,
  
  /** 讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝峨・譛螟ｧ譁・ｭ玲焚 */
  MAX_QUERY_LENGTH: 100,
  
  /** 讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝峨・譛蟆乗枚蟄玲焚 */
  MIN_QUERY_LENGTH: 1,
  
  /** 莠ｺ豌励く繝ｼ繝ｯ繝ｼ繝峨・陦ｨ遉ｺ莉ｶ謨ｰ */
  POPULAR_KEYWORDS_COUNT: 10
}

/**
 * UI陦ｨ遉ｺ縺ｮ險ｭ螳・
 */
export const UI_CONFIG = {
  /** 蝠・刀繧ｿ繧､繝医Ν縺ｮ陦ｨ遉ｺ譛螟ｧ譁・ｭ玲焚 */
  MAX_TITLE_LENGTH: 50,
  
  /** 蝠・刀隱ｬ譏弱・陦ｨ遉ｺ譛螟ｧ譁・ｭ玲焚 */
  MAX_DESCRIPTION_LENGTH: 100,
  
  /** 繧ｨ繝ｩ繝ｼ繝｡繝・そ繝ｼ繧ｸ縺ｮ閾ｪ蜍暮撼陦ｨ遉ｺ譎る俣・医Α繝ｪ遘抵ｼ・*/
  ERROR_TIMEOUT_MS: 5000,
  
  /** 謌仙粥繝｡繝・そ繝ｼ繧ｸ縺ｮ閾ｪ蜍暮撼陦ｨ遉ｺ譎る俣・医Α繝ｪ遘抵ｼ・*/
  SUCCESS_TIMEOUT_MS: 3000,
  
  /** 繝ｭ繝ｼ繝・ぅ繝ｳ繧ｰ陦ｨ遉ｺ縺ｮ譛蟆乗凾髢難ｼ医Α繝ｪ遘抵ｼ・*/
  MIN_LOADING_TIME_MS: 300
}

/**
 * API騾壻ｿ｡縺ｮ險ｭ螳・
 */
export const API_CONFIG = {
  /** 繝ｪ繧ｯ繧ｨ繧ｹ繝医ち繧､繝繧｢繧ｦ繝域凾髢難ｼ医Α繝ｪ遘抵ｼ・*/
  TIMEOUT_MS: 10000,
  
  /** 繝ｪ繝医Λ繧､蝗樊焚 */
  RETRY_COUNT: 3,
  
  /** 繝ｪ繝医Λ繧､髢馴囈・医Α繝ｪ遘抵ｼ・*/
  RETRY_DELAY_MS: 1000,
  
  /** 繝吶・繧ｹURL・育腸蠅・､画焚縺九ｉ蜿門ｾ励√ヵ繧ｩ繝ｼ繝ｫ繝舌ャ繧ｯ蛟､・・*/
  BASE_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'
}

/**
 * 繝ｭ繝ｼ繧ｫ繝ｫ繧ｹ繝医Ξ繝ｼ繧ｸ縺ｮ繧ｭ繝ｼ蜷・
 */
export const STORAGE_KEYS = {
  /** 繝ｦ繝ｼ繧ｶ繝ｼ縺ｮ讀懃ｴ｢螻･豁ｴ */
  SEARCH_HISTORY: 'uchiGift_searchHistory',
  
  /** 繝ｦ繝ｼ繧ｶ繝ｼ險ｭ螳夲ｼ郁｡ｨ遉ｺ莉ｶ謨ｰ縲√た繝ｼ繝郁ｨｭ螳壹↑縺ｩ・・*/
  USER_PREFERENCES: 'uchiGift_userPreferences',
  
  /** 縺頑ｰ励↓蜈･繧雁膚蜩√・ID荳隕ｧ */
  FAVORITES: 'uchiGift_favorites',
  
  /** 譛蠕後↓菴ｿ逕ｨ縺励◆繝輔ぅ繝ｫ繧ｿ譚｡莉ｶ */
  LAST_FILTERS: 'uchiGift_lastFilters'
}

/**
 * 螟夜Κ繧ｵ繝ｼ繝薙せ逕ｨ縺ｮ險ｭ螳・
 */
export const EXTERNAL_CONFIG = {
  /** 讌ｽ螟ｩ繧｢繝輔ぅ繝ｪ繧ｨ繧､繝・D・亥ｰ・擂縺ｮ讌ｽ螟ｩAPI騾｣謳ｺ逕ｨ・・*/
  RAKUTEN_AFFILIATE_ID: process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID || '',
  
  /** Google Analytics ID */
  GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID || '',
  
  /** 繧ｵ繝昴・繝医Γ繝ｼ繝ｫ */
  SUPPORT_EMAIL: 'support@uchigift.com'
}

/**
 * 繝｡繧ｿ繝・・繧ｿ縺ｨSEO險ｭ螳・
 */
export const META_CONFIG = {
  /** 繧ｵ繧､繝亥錐 */
  SITE_NAME: 'UchiGift - 蜀・･昴＞繧ｮ繝輔ヨ讀懃ｴ｢',
  
  /** 繝・ヵ繧ｩ繝ｫ繝医・繝ｼ繧ｸ繧ｿ繧､繝医Ν */
  DEFAULT_TITLE: '蜀・･昴＞繧ｮ繝輔ヨ讀懃ｴ｢ | 邨仙ｩ壹・蜃ｺ逕｣繝ｻ鬥吝・霑斐＠縺ｮ雍医ｊ迚ｩ繧堤ｰ｡蜊俶､懃ｴ｢',
  
  /** 繝・ヵ繧ｩ繝ｫ繝医・隱ｬ譏取枚 */
  DEFAULT_DESCRIPTION: '邨仙ｩ壼・逾昴＞縲∝・逕｣蜀・･昴＞縲・ｦ吝・霑斐＠縺ｪ縺ｩ縺ｮ蜀・･昴＞繧ｮ繝輔ヨ繧堤ｰ｡蜊倥↓讀懃ｴ｢縺ｧ縺阪ｋ繧ｵ繝ｼ繝薙せ縺ｧ縺吶ゆｾ｡譬ｼ蟶ｯ繧・畑騾斐°繧画怙驕ｩ縺ｪ雍医ｊ迚ｩ繧定ｦ九▽縺代∪縺励ｇ縺・・,
  
  /** 繝・ヵ繧ｩ繝ｫ繝医・OGP逕ｻ蜒・*/
  DEFAULT_OGP_IMAGE: '/images/ogp-default.jpg'
}

/**
 * 繧ｫ繝ｩ繝ｼ繝・・繝橸ｼ・ailwind CSS 繧ｯ繝ｩ繧ｹ・・
 */
export const THEME_COLORS = {
  /** 繝励Λ繧､繝槭Μ繧ｫ繝ｩ繝ｼ */
  PRIMARY: {
    50: 'bg-blue-50',
    100: 'bg-blue-100', 
    500: 'bg-blue-500',
    600: 'bg-blue-600',
    700: 'bg-blue-700'
  },
  
  /** 繧ｻ繧ｫ繝ｳ繝繝ｪ繧ｫ繝ｩ繝ｼ */
  SECONDARY: {
    50: 'bg-gray-50',
    100: 'bg-gray-100',
    500: 'bg-gray-500',
    600: 'bg-gray-600'
  },
  
  /** 繧｢繧ｯ繧ｻ繝ｳ繝医き繝ｩ繝ｼ */
  ACCENT: {
    50: 'bg-pink-50',
    500: 'bg-pink-500',
    600: 'bg-pink-600'
  },
  
  /** 繧ｹ繝・・繧ｿ繧ｹ繧ｫ繝ｩ繝ｼ */
  SUCCESS: 'bg-green-500',
  WARNING: 'bg-yellow-500', 
  ERROR: 'bg-red-500'
}

/**
 * 繝ｬ繧ｹ繝昴Φ繧ｷ繝悶ヶ繝ｬ繧､繧ｯ繝昴う繝ｳ繝・
 */
export const BREAKPOINTS = {
  SM: '640px',   // 繧ｹ繝槭・繝医ヵ繧ｩ繝ｳ
  MD: '768px',   // 繧ｿ繝悶Ξ繝・ヨ
  LG: '1024px',  // 繝・せ繧ｯ繝医ャ繝暦ｼ亥ｰ擾ｼ・
  XL: '1280px',  // 繝・せ繧ｯ繝医ャ繝暦ｼ亥､ｧ・・
  '2XL': '1536px' // 繝・せ繧ｯ繝医ャ繝暦ｼ育音螟ｧ・・
}

/**
 * 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ險ｭ螳・
 */
export const ANIMATIONS = {
  /** 繝輔ぉ繝ｼ繝峨う繝ｳ縺ｮ譎る俣・医Α繝ｪ遘抵ｼ・*/
  FADE_IN_MS: 200,
  
  /** 繧ｹ繝ｩ繧､繝峨・譎る俣・医Α繝ｪ遘抵ｼ・*/
  SLIDE_MS: 300,
  
  /** 繝舌え繝ｳ繧ｹ蜉ｹ譫懊・譎る俣・医Α繝ｪ遘抵ｼ・*/
  BOUNCE_MS: 400
}