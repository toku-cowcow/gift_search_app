/**
 * バックエンド検索API関数
 * 
 * UchiGiftバックエンドと連携して商品検索を実行
 * エンドポイント: GET ${NEXT_PUBLIC_API_BASE}/api/v1/search
 */

interface SearchParams {
  q?: string;
  occasion?: string;
  genre_group?: string;
  price_min?: number;
  price_max?: number;
  source?: string;
  sort?: string;
  limit?: number;
  offset?: number;
  exact_match?: boolean;
}

export interface SearchResponse {
  total: number;
  hits: GiftItem[];
  query: string;
  processing_time_ms: number;
  limit: number;
  offset: number;
}

export interface GiftItem {
  id: string;
  title: string;
  price: number;
  image_url: string;
  merchant: string;
  source: string;
  url: string;
  affiliate_url: string;
  occasion: string;
  occasions?: string[];  // 複数用途リスト（オプショナル）
  updated_at: number;
}

/**
 * サーバーサイド用検索API実行関数
 * 
 * @param params 検索パラメータ
 * @returns SearchResponse
 */
export async function fetchSearch(params: SearchParams): Promise<SearchResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE;
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_API_BASE environment variable is not set');
  }
  
  // URLパラメータを構築
  const searchParams = new URLSearchParams();
  
  if (params.q) searchParams.set('q', params.q);
  if (params.occasion) searchParams.set('occasion', params.occasion);
  if (Number.isFinite(params.price_min)) searchParams.set('price_min', params.price_min!.toString());
  if (Number.isFinite(params.price_max)) searchParams.set('price_max', params.price_max!.toString());
  if (params.source) searchParams.set('source', params.source);
  if (params.genre_group) searchParams.set('genre_group', params.genre_group);
  if (params.sort) searchParams.set('sort', params.sort);
  if (params.exact_match) searchParams.set('exact_match', 'true');
  
  // limit は常に48固定
  searchParams.set('limit', (params.limit || 48).toString());
  searchParams.set('offset', (params.offset || 0).toString());
  
  const url = `${baseUrl}/api/v1/search?${searchParams.toString()}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // 常に最新データを取得
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data: SearchResponse = await response.json();
    return data;
    
  } catch (error) {
    console.error('Search API Error:', error);
    
    // フォールバック: 空の結果を返す
    return {
      total: 0,
      hits: [],
      query: params.q || '',
      processing_time_ms: 0,
      limit: params.limit || 48,
      offset: params.offset || 0,
    };
  }
}

/**
 * URLクエリパラメータからSearchParamsオブジェクトを構築
 * 
 * @param searchParams Next.js searchParams
 * @returns SearchParams
 */
export function buildSearchParams(searchParams: Record<string, string | string[] | undefined>): SearchParams {
  const params: SearchParams = {};
  
  if (typeof searchParams.q === 'string') params.q = searchParams.q;
  if (typeof searchParams.occasion === 'string') params.occasion = searchParams.occasion;
  if (typeof searchParams.source === 'string') params.source = searchParams.source;
  if (typeof searchParams.sort === 'string') params.sort = searchParams.sort;
  if (searchParams.exact_match === 'true') params.exact_match = true;
  
  // 数値パラメータの安全な変換
  if (typeof searchParams.price_min === 'string') {
    const val = parseInt(searchParams.price_min);
    if (Number.isFinite(val)) params.price_min = val;
  }
  
  if (typeof searchParams.price_max === 'string') {
    const val = parseInt(searchParams.price_max);
    if (Number.isFinite(val)) params.price_max = val;
  }
  
  if (typeof searchParams.offset === 'string') {
    const val = parseInt(searchParams.offset);
    if (Number.isFinite(val) && val >= 0) params.offset = val;
  }
  
  // limitは常に48
  params.limit = 48;
  if (typeof searchParams.genre_group === 'string') params['genre_group'] = searchParams.genre_group;
  
  // 検索クエリがある場合は常に完全一致検索
  if (params.q) {
    params.exact_match = true;
  }
  
  // sortのデフォルトとバリデーション
  const validSorts = ['updated_at:desc', 'price:asc', 'price:desc', 'review_count:desc', 'review_average:desc'];
  if (!params.sort || !validSorts.includes(params.sort)) {
    params.sort = 'updated_at:desc';
  }
  
  return params;
}