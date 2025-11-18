"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  OCCASION_MAPPINGS,
  PRICE_RANGE_MAPPINGS,
  OccasionKey,
  PriceRangeKey,
  GENRE_GROUP_MAPPINGS,
  GenreGroupKey
} from '@/lib/types';

type FilterType = 'occasion' | 'price' | 'genre' | null;

export default function HalfModalFilters() {
  const [activeModal, setActiveModal] = useState<FilterType>(null);
  const [showFullModal, setShowFullModal] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentOccasion = (searchParams.get('occasion') || '') as OccasionKey;
  const currentGenre = (searchParams.get('genre_group') || '') as GenreGroupKey;

  const getCurrentPriceRange = (): PriceRangeKey => {
    const min = searchParams.get('price_min');
    const max = searchParams.get('price_max');
    if (!min && !max) return '';
    if (!min && max === '3000') return 'under3000';
    if (min === '3001' && max === '5000') return '3000-5000';
    if (min === '5001' && max === '10000') return '5000-10000';
    if (min === '10000' && !max) return 'over10000';
    return '';
  };
  const currentPriceRange = getCurrentPriceRange();

  const updateURL = (updates: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([k, v]) => {
      if (v !== undefined && v !== '') params.set(k, String(v));
      else params.delete(k);
    });
    params.delete('offset');
    router.push(params.toString() ? `/?${params.toString()}` : '/', { scroll: false });
    setActiveModal(null); // 選択後にモーダルを閉じる
  };

  const handleOccasion = (o: OccasionKey) => updateURL({ occasion: o || undefined });
  const handleGenre = (g: GenreGroupKey) => updateURL({ genre_group: g || undefined });
  const handlePrice = (p: PriceRangeKey) => {
    if (!p) return updateURL({ price_min: undefined, price_max: undefined });
    const r = PRICE_RANGE_MAPPINGS[p];
    updateURL({ price_min: r.price_min, price_max: r.price_max });
  };

  // アクティブな選択数を計算
  const getActiveCount = () => {
    let count = 0;
    if (currentOccasion) count++;
    if (currentPriceRange) count++;
    if (currentGenre) count++;
    return count;
  };

  const getDisplayText = (type: FilterType) => {
    switch (type) {
      case 'occasion':
        return currentOccasion ? OCCASION_MAPPINGS[currentOccasion] : '用途';
      case 'price':
        return currentPriceRange ? PRICE_RANGE_MAPPINGS[currentPriceRange].label : '価格帯';
      case 'genre':
        return currentGenre ? GENRE_GROUP_MAPPINGS[currentGenre] : 'ジャンル';
      default:
        return '';
    }
  };

  const resetAll = () => {
    const params = new URLSearchParams();
    router.push('/', { scroll: false });
    setShowFullModal(false);
  };

  return (
    <>
      {/* 上部フィルターバー */}
      <section className="sticky top-16 z-50 bg-white border-b border-gray-300 py-3 shadow">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 justify-center md:justify-center">
            {/* フィルターアイコン + アクティブ数バッジ（左端） */}
            <button
              onClick={() => setShowFullModal(true)}
              className="flex items-center justify-center gap-1 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              {getActiveCount() > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {getActiveCount()}
                </span>
              )}
            </button>

            {/* フィルターボタン群（PC: 中央揃え、スマホ: 左揃え） */}
            <div className="flex gap-2 overflow-x-auto md:justify-center">
              {/* 用途フィルター */}
              <button
                onClick={() => setActiveModal(activeModal === 'occasion' ? null : 'occasion')}
                className={`flex items-center gap-1 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                  currentOccasion 
                    ? 'bg-rose-100 border-rose-300 text-rose-800' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{getDisplayText('occasion')}</span>
                <svg className={`w-4 h-4 transition-transform ${activeModal === 'occasion' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 価格帯フィルター */}
              <button
                onClick={() => setActiveModal(activeModal === 'price' ? null : 'price')}
                className={`flex items-center gap-1 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                  currentPriceRange 
                    ? 'bg-sky-100 border-sky-300 text-sky-800' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{getDisplayText('price')}</span>
                <svg className={`w-4 h-4 transition-transform ${activeModal === 'price' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* ジャンルフィルター */}
              <button
                onClick={() => setActiveModal(activeModal === 'genre' ? null : 'genre')}
                className={`flex items-center gap-1 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                  currentGenre 
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-800' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{getDisplayText('genre')}</span>
                <svg className={`w-4 h-4 transition-transform ${activeModal === 'genre' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ドロップダウン形式ハーフモーダル */}
      {activeModal && (
        <div className="sticky top-31 z-50">
          <div 
            className="fixed inset-0 bg-transparent"
            onClick={() => setActiveModal(null)}
          />
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[280px] max-w-[90vw] animate-in slide-in-from-top-2 duration-200">
            {/* ドロップダウンヘッダー */}
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">
                {activeModal === 'occasion' && '用途'}
                {activeModal === 'price' && '価格帯'}
                {activeModal === 'genre' && 'ジャンル'}
              </h3>
            </div>

            {/* ドロップダウンコンテンツ */}
            <div className="max-h-[40vh] overflow-y-auto">
              {activeModal === 'occasion' && (
                <div className="py-2">
                  {(Object.keys(OCCASION_MAPPINGS) as OccasionKey[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleOccasion(key)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center text-sm text-gray-700"
                    >
                      <span className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
                        currentOccasion === key 
                          ? 'bg-rose-500 text-white text-xs' 
                          : 'border-2 border-gray-300'
                      }`}>
                        {currentOccasion === key && '●'}
                      </span>
                      {OCCASION_MAPPINGS[key]}
                    </button>
                  ))}
                </div>
              )}

              {activeModal === 'price' && (
                <div className="py-2">
                  {(Object.keys(PRICE_RANGE_MAPPINGS) as PriceRangeKey[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => handlePrice(key)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center text-sm text-gray-700"
                    >
                      <span className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
                        currentPriceRange === key 
                          ? 'bg-sky-500 text-white text-xs' 
                          : 'border-2 border-gray-300'
                      }`}>
                        {currentPriceRange === key && '●'}
                      </span>
                      {PRICE_RANGE_MAPPINGS[key].label}
                    </button>
                  ))}
                </div>
              )}

              {activeModal === 'genre' && (
                <div className="py-2">
                  {(Object.keys(GENRE_GROUP_MAPPINGS) as GenreGroupKey[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleGenre(key)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center text-sm text-gray-700"
                    >
                      <span className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
                        currentGenre === key 
                          ? 'bg-emerald-500 text-white text-xs' 
                          : 'border-2 border-gray-300'
                      }`}>
                        {currentGenre === key && '●'}
                      </span>
                      {GENRE_GROUP_MAPPINGS[key]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 左側ハーフモーダル（サイドバー） */}
      {showFullModal && (
        <>
          {/* 背景オーバーレイ */}
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setShowFullModal(false)}
          />
          
          {/* サイドバーパネル */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-white z-50 shadow-xl overflow-y-auto">
            {/* ヘッダー */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">適用済みフィルター</h2>
              <button
                onClick={() => setShowFullModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
          </div>

          {/* 適用済みフィルタータグエリア */}
          {getActiveCount() > 0 && (
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex flex-wrap gap-2">
                {currentOccasion && (
                  <div className="flex items-center gap-2 bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm">
                    <span>{OCCASION_MAPPINGS[currentOccasion]}</span>
                    <button
                      onClick={() => handleOccasion('')}
                      className="hover:bg-rose-200 rounded-full p-1"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
                {currentPriceRange && (
                  <div className="flex items-center gap-2 bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">
                    <span>{PRICE_RANGE_MAPPINGS[currentPriceRange].label}</span>
                    <button
                      onClick={() => handlePrice('')}
                      className="hover:bg-sky-200 rounded-full p-1"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
                {currentGenre && (
                  <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    <span>{GENRE_GROUP_MAPPINGS[currentGenre]}</span>
                    <button
                      onClick={() => handleGenre('')}
                      className="hover:bg-emerald-200 rounded-full p-1"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* コンテンツ */}
          <div className="p-4 space-y-6">
            {/* 用途セクション */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-medium text-gray-900">用途</h3>
                {!currentOccasion ? (
                  <span className="text-sm text-gray-500">−</span>
                ) : (
                  <button
                    onClick={() => handleOccasion('')}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    +
                  </button>
                )}
              </div>
              {!currentOccasion ? (
                <div className="space-y-2">
                  {(Object.keys(OCCASION_MAPPINGS) as OccasionKey[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleOccasion(key)}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center text-sm text-gray-700"
                    >
                      <span className="w-4 h-4 rounded-full border border-gray-300 mr-3"></span>
                      {OCCASION_MAPPINGS[key]}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-3 bg-rose-50 rounded-lg">
                  <div className="flex items-center text-sm text-rose-800">
                    <span className="w-4 h-4 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center mr-3">●</span>
                    {OCCASION_MAPPINGS[currentOccasion]}
                  </div>
                </div>
              )}
            </div>

            {/* 価格帯セクション */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-medium text-gray-900">価格帯</h3>
                {!currentPriceRange ? (
                  <span className="text-sm text-gray-500">−</span>
                ) : (
                  <button
                    onClick={() => handlePrice('')}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    +
                  </button>
                )}
              </div>
              {!currentPriceRange ? (
                <div className="space-y-2">
                  {(Object.keys(PRICE_RANGE_MAPPINGS) as PriceRangeKey[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => handlePrice(key)}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center text-sm text-gray-700"
                    >
                      <span className="w-4 h-4 rounded-full border border-gray-300 mr-3"></span>
                      {PRICE_RANGE_MAPPINGS[key].label}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-3 bg-sky-50 rounded-lg">
                  <div className="flex items-center text-sm text-sky-800">
                    <span className="w-4 h-4 rounded-full bg-sky-500 text-white text-xs flex items-center justify-center mr-3">●</span>
                    {PRICE_RANGE_MAPPINGS[currentPriceRange].label}
                  </div>
                </div>
              )}
            </div>

            {/* ジャンルセクション */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-medium text-gray-900">ジャンル</h3>
                {!currentGenre ? (
                  <span className="text-sm text-gray-500">−</span>
                ) : (
                  <button
                    onClick={() => handleGenre('')}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    +
                  </button>
                )}
              </div>
              {!currentGenre ? (
                <div className="space-y-2">
                  {(Object.keys(GENRE_GROUP_MAPPINGS) as GenreGroupKey[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleGenre(key)}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center text-sm text-gray-700"
                    >
                      <span className="w-4 h-4 rounded-full border border-gray-300 mr-3"></span>
                      {GENRE_GROUP_MAPPINGS[key]}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <div className="flex items-center text-sm text-emerald-800">
                    <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center mr-3">●</span>
                    {GENRE_GROUP_MAPPINGS[currentGenre]}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* フッター */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
            <button
              onClick={resetAll}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              すべてクリア
            </button>
          </div>
          </div>
        </>
      )}
    </>
  );
}