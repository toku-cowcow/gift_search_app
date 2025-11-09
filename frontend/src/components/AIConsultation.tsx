/**
 * AI相談コンポーネント
 * 
 * ユーザーの自然言語入力を受け取り、AI推奨APIを呼び出して
 * ギフト推奨結果を表示します（Phase 3最適化版対応）
 */

'use client';

import { useState } from 'react';
import { fetchAIRecommendations, AIRecommendResponse } from '@/lib/api/ai';
import ProductCard from './ProductCard';

interface FormData {
  occasion: string;
  relationship: string;
  budget_min: string;
  budget_max: string;
  gender: string;
  age: string;
  urgency: string;
  notes: string;
}

export default function AIConsultation() {
  const [formData, setFormData] = useState<FormData>({
    occasion: '',
    relationship: '',
    budget_min: '',
    budget_max: '',
    gender: '',
    age: '',
    urgency: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIRecommendResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const buildUserInput = () => {
    const parts: string[] = [];
    
    if (formData.occasion) parts.push(`用途: ${formData.occasion}`);
    if (formData.relationship) parts.push(`相手: ${formData.relationship}`);
    if (formData.budget_min || formData.budget_max) {
      const budget = `予算: ${formData.budget_min || '0'}円〜${formData.budget_max || '無制限'}円`;
      parts.push(budget);
    }
    if (formData.gender) parts.push(`性別: ${formData.gender}`);
    if (formData.age) parts.push(`年代: ${formData.age}`);
    if (formData.urgency) parts.push(`急ぎ度: ${formData.urgency}`);
    if (formData.notes) parts.push(`備考: ${formData.notes}`);
    
    const userInput = parts.join('、');
    console.log('🔍 送信する相談内容:', userInput);
    return userInput;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const userInput = buildUserInput();
    if (!userInput.trim()) {
      setError('少なくとも一つの項目を入力してください');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const userInput = buildUserInput();
      const response = await fetchAIRecommendations(userInput.trim());
      setResult(response);
      
      if (response.recommendations.length === 0) {
        setError('申し訳ありませんが、条件に合うギフトが見つかりませんでした。検索条件を変えてみてください。');
      }
    } catch (err) {
      console.error('AI consultation error:', err);
      setError('AI機能の実行中にエラーが発生しました。しばらくしてからもう一度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      occasion: '',
      relationship: '',
      budget_min: '',
      budget_max: '',
      gender: '',
      age: '',
      urgency: '',
      notes: ''
    });
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* AI相談入力フォーム */}
      <div className="bg-white rounded-lg shadow-sm border border-rose-100 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          🤖 AIギフト相談
        </h2>
        <p className="text-gray-600 mb-4">
          ギフトの用途や相手について詳しく教えてください。AIが最適な商品を推奨します。<br />
          <span className="text-red-500 text-sm">*</span> がついた項目は必須入力です。
        </p>
        
        <form onSubmit={handleSubmit}>
          {/* 用途 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                用途 <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => handleInputChange('occasion', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                disabled={loading}
              >
                <option value="">選択してください</option>
                <option value="結婚内祝い">結婚内祝い</option>
                <option value="出産内祝い">出産内祝い</option>
                <option value="香典返し">香典返し</option>
                <option value="お祝い返し">お祝い返し（入学・就職・新築など）</option>
                <option value="お中元・お歳暮">お中元・お歳暮</option>
                <option value="ビジネス関係">ビジネス関係</option>
                <option value="その他">その他</option>
              </select>
            </div>

            {/* 相手との関係 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                相手との関係 <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.relationship}
                onChange={(e) => handleInputChange('relationship', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                disabled={loading}
              >
                <option value="">選択してください</option>
                <option value="上司・目上の方">上司・目上の方</option>
                <option value="同僚・同等関係">同僚・同等関係</option>
                <option value="友人・知人">友人・知人</option>
                <option value="親族・家族">親族・家族</option>
                <option value="取引先・顧客">取引先・顧客</option>
                <option value="近所・地域の方">近所・地域の方</option>
                <option value="その他">その他</option>
              </select>
            </div>
          </div>

          {/* 予算 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                予算下限（円）
              </label>
              <input
                type="number"
                value={formData.budget_min}
                onChange={(e) => handleInputChange('budget_min', e.target.value)}
                placeholder="例: 3000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                disabled={loading}
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                予算上限（円）
              </label>
              <input
                type="number"
                value={formData.budget_max}
                onChange={(e) => handleInputChange('budget_max', e.target.value)}
                placeholder="例: 10000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                disabled={loading}
                min="0"
              />
            </div>
          </div>

          {/* 性別・年代 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                相手の性別
              </label>
              <select
                value={formData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                disabled={loading}
              >
                <option value="">選択してください</option>
                <option value="男性">男性</option>
                <option value="女性">女性</option>
                <option value="不明">不明</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                相手の年代
              </label>
              <select
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                disabled={loading}
              >
                <option value="">選択してください</option>
                <option value="20代">20代</option>
                <option value="30代">30代</option>
                <option value="40代">40代</option>
                <option value="50代">50代</option>
                <option value="60代">60代</option>
                <option value="70代以上">70代以上</option>
                <option value="不明">不明</option>
              </select>
            </div>
          </div>

          {/* 急ぎ度・備考 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                急ぎ度
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => handleInputChange('urgency', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                disabled={loading}
              >
                <option value="">選択してください</option>
                <option value="急ぎ">急ぎ（数日以内）</option>
                <option value="通常">通常（1〜2週間）</option>
                <option value="計画中">計画中（時間に余裕あり）</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                備考・特記事項
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="特別な要望、好みなどがあればご記入ください"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 resize-y min-h-[80px]"
                disabled={loading}
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading || (!formData.occasion && !formData.relationship)}
              className="px-6 py-2 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'AI推奨実行中...' : 'AI推奨を実行'}
            </button>
            
            <button
              type="button"
              onClick={handleClear}
              disabled={loading}
              className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              クリア
            </button>
          </div>
        </form>
      </div>

      {/* エラー表示 */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-red-400">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* AI推奨結果表示 */}
      {result && (
        <div className="space-y-6">
          {/* AI応答テキスト */}
          {result.ai_response && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                🤖 AIからの提案
              </h3>
              <p className="text-blue-700 whitespace-pre-line">{result.ai_response}</p>
            </div>
          )}

          {/* 実行結果サマリー */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              ✨ AI推奨完了
            </h3>
            <div className="text-sm text-green-700 space-y-1">
              <p>• 推奨商品数: {result.recommendations.length}件</p>
              <p>• 処理時間: {((result.performance?.total_endpoint_time_ms || 0) / 1000).toFixed(2)}秒</p>
              <p>• 検索結果総数: {result.search_metadata?.performance?.final_count || result.recommendations.length}件</p>
              {result.user_intent?.occasion && (
                <p>• 認識された用途: {result.user_intent.occasion}</p>
              )}
              {result.user_intent?.budget_min && result.user_intent?.budget_max && (
                <p>• 認識された予算: {result.user_intent.budget_min}円〜{result.user_intent.budget_max}円</p>
              )}
              {result.performance?.optimization && (
                <p>• 最適化レベル: {result.performance.optimization}</p>
              )}
            </div>
          </div>

          {/* 推奨商品一覧 */}
          {result.recommendations.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                推奨ギフト ({result.recommendations.length}件)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {result.recommendations.map((recommendation) => (
                  <div key={recommendation.id} className="relative">
                    <ProductCard
                      item={{
                        id: recommendation.id,
                        title: recommendation.title,
                        price: recommendation.price,
                        image_url: recommendation.image_url,
                        merchant: recommendation.merchant,
                        url: recommendation.url,
                        affiliate_url: recommendation.affiliate_url,
                        source: recommendation.source || "AI推奨",
                        occasion: recommendation.occasion || "",
                        occasions: recommendation.occasions,
                        updated_at: recommendation.updated_at || Date.now(),
                        review_count: recommendation.review_count || 0,
                        review_average: recommendation.review_average || 0
                      }}
                    />
                    {/* AI推奨情報 */}
                    <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-xs text-blue-700 font-medium mb-1">
                        🎯 AI推奨商品
                      </p>
                      <p className="text-sm text-blue-600">
                        {recommendation.merchant} の {recommendation.title.length > 50 
                          ? `${recommendation.title.substring(0, 50)}...` 
                          : recommendation.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ローディング表示 */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-rose-600">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-rose-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            AIが最適なギフトを探しています...
          </div>
        </div>
      )}
    </div>
  );
}