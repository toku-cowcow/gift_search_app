/**
 * API騾壻ｿ｡繧ｯ繝ｩ繧､繧｢繝ｳ繝医・險ｭ螳・
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ・・
 * - 繝舌ャ繧ｯ繧ｨ繝ｳ繝会ｼ・astAPI・峨→縺ｮ騾壻ｿ｡險ｭ螳壹ｒ荳蜈・ｮ｡逅・
 * - HTTP 繝ｪ繧ｯ繧ｨ繧ｹ繝医・蜈ｱ騾夊ｨｭ螳夲ｼ医・繝ｼ繧ｹURL縲√・繝・ム繝ｼ縲√ち繧､繝繧｢繧ｦ繝医↑縺ｩ・・
 * - 繧ｨ繝ｩ繝ｼ繝上Φ繝峨Μ繝ｳ繧ｰ縺ｮ邨ｱ荳
 * 
 * 蛻晏ｿ・・髄縺題ｧ｣隱ｬ・・
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｯ縲碁崕隧ｱ縺ｮ蝓ｺ譛ｬ險ｭ螳壹阪・繧医≧縺ｪ繧ゅ・縲・
 * - 縺ｩ縺薙↓髮ｻ隧ｱ繧偵°縺代ｋ縺具ｼ・aseURL・・
 * - 縺ｩ縺ｮ縺上ｉ縺・ｾ・▽縺具ｼ・imeout・・ 
 * - 繧ｨ繝ｩ繝ｼ縺瑚ｵｷ縺阪◆譎ゅ←縺・☆繧九°・・nterceptors・・
 * 繧呈ｱｺ繧√※縺・∪縺吶・
 */

import axios, { AxiosInstance, AxiosError } from 'axios'

/**
 * 繝舌ャ繧ｯ繧ｨ繝ｳ繝峨し繝ｼ繝舌・縺ｮ繝吶・繧ｹURL蜿門ｾ・
 * 迺ｰ蠅・､画焚縺九ｉ隱ｭ縺ｿ霎ｼ縺ｿ縲∬ｨｭ螳壹＆繧後※縺・↑縺・ｴ蜷医・繝ｭ繝ｼ繧ｫ繝ｫ髢狗匱迺ｰ蠅・ｒ菴ｿ逕ｨ
 */
const getBaseURL = (): string => {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
  
  if (!baseURL) {
    console.warn('NEXT_PUBLIC_BACKEND_URL 縺瑚ｨｭ螳壹＆繧後※縺・∪縺帙ｓ縲ゅョ繝輔か繝ｫ繝医・繝ｭ繝ｼ繧ｫ繝ｫ繧ｵ繝ｼ繝舌・繧剃ｽｿ逕ｨ縺励∪縺吶・)
    return 'http://localhost:8000'
  }
  
  return baseURL
}

/**
 * API繧ｯ繝ｩ繧､繧｢繝ｳ繝医う繝ｳ繧ｹ繧ｿ繝ｳ繧ｹ
 * 
 * axios繝ｩ繧､繝悶Λ繝ｪ繧剃ｽｿ逕ｨ縺励※HTTP騾壻ｿ｡繧定｡後＞縺ｾ縺吶・
 * axios縺ｯ縲碁崕隧ｱ繧偵°縺代ｋ驕灘・縲阪・繧医≧縺ｪ繧ゅ・縺ｧ縲・
 * 繧ｵ繝ｼ繝舌・縺ｫ繝・・繧ｿ繧貞叙繧翫↓陦後▲縺溘ｊ縲・√▲縺溘ｊ縺ｧ縺阪∪縺吶・
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000, // 10遘偵〒繧ｿ繧､繝繧｢繧ｦ繝茨ｼ医◎繧御ｻ･荳雁ｾ・◆縺ｪ縺・ｼ・
  headers: {
    'Content-Type': 'application/json', // JSON繝・・繧ｿ繧帝∝女菫｡縺吶ｋ縺薙→繧貞ｮ｣險
  },
})

/**
 * 繝ｬ繧ｹ繝昴Φ繧ｹ・医し繝ｼ繝舌・縺九ｉ縺ｮ霑比ｺ具ｼ峨・蜃ｦ逅・
 * 
 * 謌仙粥縺励◆蝣ｴ蜷茨ｼ壹◎縺ｮ縺ｾ縺ｾ繝・・繧ｿ繧定ｿ斐☆
 * 繧ｨ繝ｩ繝ｼ縺ｮ蝣ｴ蜷茨ｼ壹お繝ｩ繝ｼ蜀・ｮｹ繧偵ｏ縺九ｊ繧・☆縺乗紛逅・＠縺ｦ謚輔￡繧・
 */
apiClient.interceptors.response.use(
  // 謌仙粥譎ゅ・蜃ｦ逅・ｼ・00逡ｪ蜿ｰ縺ｮ繧ｹ繝・・繧ｿ繧ｹ繧ｳ繝ｼ繝会ｼ・
  (response) => {
    return response
  },
  
  // 繧ｨ繝ｩ繝ｼ譎ゅ・蜃ｦ逅・ｼ・00逡ｪ蜿ｰ縲・00逡ｪ蜿ｰ縺ｮ繧ｹ繝・・繧ｿ繧ｹ繧ｳ繝ｼ繝会ｼ・
  (error: AxiosError) => {
    // 繧ｨ繝ｩ繝ｼ蜀・ｮｹ繧偵さ繝ｳ繧ｽ繝ｼ繝ｫ縺ｫ陦ｨ遉ｺ・磯幕逋ｺ譎ゅ・繝・ヰ繝・げ逕ｨ・・
    console.error('API騾壻ｿ｡繧ｨ繝ｩ繝ｼ:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: error.config?.url,
    })
    
    // 繧ｨ繝ｩ繝ｼ繧偵◎縺ｮ縺ｾ縺ｾ謚輔￡縺ｦ縲∝他縺ｳ蜃ｺ縺怜・縺ｧ蜃ｦ逅・〒縺阪ｋ繧医≧縺ｫ縺吶ｋ
    return Promise.reject(error)
  }
)

/**
 * API騾壻ｿ｡縺ｮ繝倥Ν繝代・髢｢謨ｰ
 * 
 * 繧医￥菴ｿ縺・TTP繝｡繧ｽ繝・ラ・・ET, POST, PUT, DELETE・峨ｒ
 * 邁｡蜊倥↓蜻ｼ縺ｳ蜃ｺ縺帙ｋ繧医≧縺ｫ髢｢謨ｰ縺ｨ縺励※逕ｨ諢・
 */
export const api = {
  /**
   * GET 繝ｪ繧ｯ繧ｨ繧ｹ繝茨ｼ医ョ繝ｼ繧ｿ繧貞叙蠕暦ｼ・
   * @param url - 蜿門ｾ励＠縺溘＞繝・・繧ｿ縺ｮURL
   * @param params - URL繝代Λ繝｡繝ｼ繧ｿ・・key=value 縺ｮ驛ｨ蛻・ｼ・
   */
  get: <T = any>(url: string, params?: Record<string, any>) => 
    apiClient.get<T>(url, { params }),

  /**
   * POST 繝ｪ繧ｯ繧ｨ繧ｹ繝茨ｼ医ョ繝ｼ繧ｿ繧帝∽ｿ｡繝ｻ菴懈・・・
   * @param url - 繝・・繧ｿ繧帝∽ｿ｡縺吶ｋURL
   * @param data - 騾∽ｿ｡縺吶ｋ繝・・繧ｿ
   */
  post: <T = any>(url: string, data?: any) => 
    apiClient.post<T>(url, data),

  /**
   * PUT 繝ｪ繧ｯ繧ｨ繧ｹ繝茨ｼ医ョ繝ｼ繧ｿ繧呈峩譁ｰ・・
   * @param url - 譖ｴ譁ｰ縺吶ｋ繝・・繧ｿ縺ｮURL
   * @param data - 譖ｴ譁ｰ縺吶ｋ繝・・繧ｿ
   */
  put: <T = any>(url: string, data?: any) => 
    apiClient.put<T>(url, data),

  /**
   * DELETE 繝ｪ繧ｯ繧ｨ繧ｹ繝茨ｼ医ョ繝ｼ繧ｿ繧貞炎髯､・・
   * @param url - 蜑企勁縺吶ｋ繝・・繧ｿ縺ｮURL
   */
  delete: <T = any>(url: string) => 
    apiClient.delete<T>(url),
}

// 繝・ヵ繧ｩ繝ｫ繝医お繧ｯ繧ｹ繝昴・繝茨ｼ井ｻ悶・繝輔ぃ繧､繝ｫ縺ｧimport縺励ｄ縺吶￥縺吶ｋ・・
export default apiClient