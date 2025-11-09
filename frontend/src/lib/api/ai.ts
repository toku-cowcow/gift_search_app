/**
 * AI推奨API関数（Phase 3対応）
 * 
 * UchiGiftバックエンドのAI機能と連携してギフト推奨を実行
 * エンドポイント: POST ${NEXT_PUBLIC_API_BASE}/ai/fast-recommend
 */

export interface AIRecommendRequest {
  user_input: string;
}

export interface AIRecommendation {
  id: string;
  title: string;
  price: number;
  image_url: string;
  merchant: string;
  url: string;
  affiliate_url: string;
  source?: string;
  occasion?: string;
  occasions?: string[];
  updated_at?: number;
  review_count?: number;
  review_average?: number;
  // Phase3では以下のフィールドは含まれない場合がある
  reason?: string;
  confidence_score?: number;
}

export interface AIRecommendResponse {
  recommendations: AIRecommendation[];
  user_intent?: {
    occasion?: string;
    target_age?: string;
    target_relationship?: string;
    budget_min?: number;
    budget_max?: number;
    keywords?: string[];
    gender?: string;
    urgency?: string;
  };
  search_metadata?: {
    strategy?: string;
    steps?: string[];
    performance?: {
      total_time_ms?: number;
      semantic_count?: number;
      structured_count?: number;
      final_count?: number;
    };
  };
  processing_steps?: string[];
  performance?: {
    total_time_ms?: number;
    search_time_ms?: number;
    response_time_ms?: number;
    optimization?: string;
    total_endpoint_time_ms?: number;
  };
  reasoning?: string;
  ai_response?: string;
  // レガシーフィールド（後方互換性のため）
  extracted_intent?: any;
  processing_time_seconds?: number;
  search_summary?: {
    total_found?: number;
    search_query?: string;
    filters_applied?: Record<string, any>;
  };
}

/**
 * AI推奨APIを実行（Phase 3最適化版）
 * 
 * @param userInput ユーザーの自然言語入力
 * @returns AIRecommendResponse
 */
export async function fetchAIRecommendations(userInput: string): Promise<AIRecommendResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
  const url = `${baseUrl}/ai/fast-recommend`;
  
  console.log('🤖 AI API呼び出し:', { url, userInput });
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_input: userInput
      }),
      cache: 'no-store', // 常に最新の推奨を取得
    });
    
    if (!response.ok) {
      throw new Error(`AI API Error: ${response.status} ${response.statusText}`);
    }
    
    const data: AIRecommendResponse = await response.json();
    console.log('🤖 AI APIレスポンス:', data);
    return data;
    
  } catch (error) {
    console.error('AI Recommend API Error:', error);
    
    // フォールバック: 空の結果を返す
    return {
      recommendations: [],
      extracted_intent: {},
      processing_time_seconds: 0,
      search_summary: {
        total_found: 0,
        search_query: userInput,
        filters_applied: {}
      }
    };
  }
}

/**
 * 従来のAI推奨API（レガシーサポート用）
 * 
 * @param userInput ユーザーの自然言語入力
 * @returns AIRecommendResponse
 */
export async function fetchLegacyAIRecommendations(userInput: string): Promise<AIRecommendResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
  const url = `${baseUrl}/ai/recommend`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_input: userInput
      }),
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error(`Legacy AI API Error: ${response.status} ${response.statusText}`);
    }
    
    const data: AIRecommendResponse = await response.json();
    return data;
    
  } catch (error) {
    console.error('Legacy AI Recommend API Error:', error);
    
    // Phase 3にフォールバック
    return await fetchAIRecommendations(userInput);
  }
}

/**
 * AI Chat API（対話形式）
 * 
 * @param userInput ユーザーの質問・相談内容
 * @returns チャット応答
 */
export async function fetchAIChat(userInput: string): Promise<{ response: string; processing_time_seconds: number }> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
  const url = `${baseUrl}/ai/chat`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_input: userInput
      }),
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error(`AI Chat API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return {
      response: data.response || 'AIからの応答を取得できませんでした。',
      processing_time_seconds: data.processing_time_seconds || 0
    };
    
  } catch (error) {
    console.error('AI Chat API Error:', error);
    
    return {
      response: '申し訳ありませんが、現在AI機能が利用できません。しばらくしてからもう一度お試しください。',
      processing_time_seconds: 0
    };
  }
}