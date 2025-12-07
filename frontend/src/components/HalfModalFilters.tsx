"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  OCCASION_MAPPINGS,
  PRICE_RANGE_MAPPINGS,
  OccasionKey,
  PriceRangeKey,
  GENRE_GROUP_MAPPINGS,
  GenreGroupKey,
  GENRE_SUBGROUP_MAPPINGS,
  GENRE_SUBGROUP_BY_GROUP,
  GenreSubgroupKey
} from '@/lib/types';

type FilterType = 'occasion' | 'price' | 'genre' | null;

export default function HalfModalFilters() {
  const [activeModal, setActiveModal] = useState<FilterType>(null);
  const [showFullModal, setShowFullModal] = useState(false);
  const [expandedGenres, setExpandedGenres] = useState<GenreGroupKey[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentOccasion = (searchParams.get('occasion') || '') as OccasionKey;
  const currentGenre = (searchParams.get('genre_group') || '') as GenreGroupKey;
  const currentSubgroups = (searchParams.get('genre_subgroup') || '').split(',').filter(Boolean) as GenreSubgroupKey[];

  const getCurrentPriceRange = (): PriceRangeKey => {
    const min = searchParams.get('price_min');
    const max = searchParams.get('price_max');
    if (!min && !max) return '';
    if (!min && max === '3000') return 'under3000';
    if (min === '3001' && max === '5000') return '3000-5000';
    if (min === '5001' && max === '10000') return '5000-10000';
    if (min === '10001' && max === '30000') return '10000-30000';
    if (min === '30001' && !max) return 'over30000';
    return '';
  };
  const currentPriceRange = getCurrentPriceRange();

  const closeModal = () => {
    // 画面を閉じるとき、選択されている中分類があるジャンル以外を折り畳む
    const genresWithSelection = (Object.keys(GENRE_SUBGROUP_BY_GROUP) as GenreGroupKey[]).filter(genre => {
      const subgroups = GENRE_SUBGROUP_BY_GROUP[genre] || [];
      return currentSubgroups.some(sub => subgroups.includes(sub));
    });
    setExpandedGenres(genresWithSelection);
    setActiveModal(null);
  };

  const updateURL = (updates: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([k, v]) => {
      if (v !== undefined && v !== '') params.set(k, String(v));
      else params.delete(k);
    });
    params.delete('offset');
    router.push(params.toString() ? `/?${params.toString()}` : '/', { scroll: false });
  };

  const handleOccasion = (o: OccasionKey) => {
    updateURL({ occasion: o || undefined });
    setActiveModal(null);
  };
  const handleGenre = (g: GenreGroupKey) => {
    if (!g) {
      // 「すべて」を選択：大分類と中分類をクリア
      updateURL({ genre_group: undefined, genre_subgroup: undefined });
      setExpandedGenres([]);
      closeModal();
      return;
    }
    
    // 大分類を選択すると、その大分類の全ての中分類を選択
    const allSubgroups = GENRE_SUBGROUP_BY_GROUP[g] || [];
    updateURL({ 
      genre_group: g, 
      genre_subgroup: allSubgroups.length > 0 ? allSubgroups.join(',') : undefined 
    });
    setExpandedGenres([]);
    // 画面は閉じない
  };
  const handleSubgroup = (s: GenreSubgroupKey) => {
    // 選択しようとしている中分類の親ジャンルを特定
    let newParentGenre: GenreGroupKey | undefined;
    for (const [genre, subgroups] of Object.entries(GENRE_SUBGROUP_BY_GROUP)) {
      if (subgroups.includes(s)) {
        newParentGenre = genre as GenreGroupKey;
        break;
      }
    }
    
    if (!newParentGenre) return;
    
    // 現在選択されている中分類の親ジャンルを確認
    let currentParentGenre: GenreGroupKey | undefined;
    if (currentSubgroups.length > 0) {
      for (const [genre, subgroups] of Object.entries(GENRE_SUBGROUP_BY_GROUP)) {
        if (subgroups.includes(currentSubgroups[0])) {
          currentParentGenre = genre as GenreGroupKey;
          break;
        }
      }
    }
    
    // 異なる大分類を跨ぐ場合は既存の選択を解除
    let newSubgroups: GenreSubgroupKey[];
    if (currentParentGenre && currentParentGenre !== newParentGenre) {
      // 別の大分類の中分類を選択 → 既存の選択をクリアして新しい中分類のみ選択
      newSubgroups = [s];
    } else {
      // 同じ大分類内でのトグル
      newSubgroups = currentSubgroups.includes(s)
        ? currentSubgroups.filter(sub => sub !== s)
        : [...currentSubgroups, s];
    }
    
    const allSubgroupsInGenre = GENRE_SUBGROUP_BY_GROUP[newParentGenre] || [];
    const selectedInGenre = newSubgroups.filter(sub => allSubgroupsInGenre.includes(sub));
    
    // 全ての中分類が選択されている場合は大分類も選択
    if (selectedInGenre.length === allSubgroupsInGenre.length && allSubgroupsInGenre.length > 0) {
      updateURL({ 
        genre_group: newParentGenre,
        genre_subgroup: newSubgroups.length > 0 ? newSubgroups.join(',') : undefined 
      });
    } else if (selectedInGenre.length > 0) {
      // 一部の中分類が選択されている場合は大分類は選択解除
      updateURL({ 
        genre_group: undefined,
        genre_subgroup: newSubgroups.length > 0 ? newSubgroups.join(',') : undefined 
      });
    } else {
      // そのジャンルの中分類が1つも選択されていない場合
      updateURL({ 
        genre_group: undefined,
        genre_subgroup: undefined 
      });
    }
  };
  const toggleSubgroupExpansion = (g: GenreGroupKey) => {
    if (expandedGenres.includes(g)) {
      // 同じジャンルをクリックした場合は閉じる
      setExpandedGenres(expandedGenres.filter(genre => genre !== g));
    } else {
      // 別のジャンルをクリックした場合
      // 選択された中分類がないジャンルを閉じる
      const newExpanded = expandedGenres.filter(genre => {
        const hasSelected = currentSubgroups.some(sub => 
          GENRE_SUBGROUP_BY_GROUP[genre]?.includes(sub)
        );
        return hasSelected; // 選択された中分類があるジャンルのみ残す
      });
      // 新しいジャンルを追加
      setExpandedGenres([...newExpanded, g]);
    }
  };
  const handlePrice = (p: PriceRangeKey) => {
    if (!p) return updateURL({ price_min: undefined, price_max: undefined });
    const r = PRICE_RANGE_MAPPINGS[p];
    updateURL({ price_min: r.price_min, price_max: r.price_max });
    setActiveModal(null);
  };

  // アクティブな選択数を計算
  const getActiveCount = () => {
    let count = 0;
    if (currentOccasion) count++;
    if (currentPriceRange) count++;
    // ジャンル：大分類が選択されている場合は1、中分類のみの場合はその数
    if (currentGenre) {
      count++;
    } else if (currentSubgroups.length > 0) {
      count += currentSubgroups.length;
    }
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
                  currentGenre || currentSubgroups.length > 0
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
            onClick={closeModal}
          />
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 w-[320px] max-w-[90vw] animate-in slide-in-from-top-2 duration-200">
            {/* ドロップダウンヘッダー */}
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">
                {activeModal === 'occasion' && '用途'}
                {activeModal === 'price' && '価格帯'}
                {activeModal === 'genre' && 'ジャンル'}
              </h3>
            </div>

            {/* ドロップダウンコンテンツ */}
            <div className="max-h-[50vh] overflow-y-auto">
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
                  {(Object.keys(GENRE_GROUP_MAPPINGS) as GenreGroupKey[]).map((key) => {
                    const hasSubgroups = GENRE_SUBGROUP_BY_GROUP[key]?.length > 0;
                    const isExpanded = expandedGenres.includes(key);
                    // 「すべて」(key='')の選択状態：大分類も中分類も選択されていない場合のみ選択状態
                    const isSelected = key === '' 
                      ? (!currentGenre && currentSubgroups.length === 0)
                      : currentGenre === key;
                    return (
                      <div key={key}>
                        <div className="flex items-center h-12">
                          <button
                            onClick={() => handleGenre(key)}
                            className="flex-1 text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center text-sm text-gray-700 h-full"
                          >
                            <span className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
                              isSelected 
                                ? 'bg-emerald-500 text-white text-xs' 
                                : 'border-2 border-gray-300'
                            }`}>
                              {isSelected && '●'}
                            </span>
                            {GENRE_GROUP_MAPPINGS[key]}
                          </button>
                          {/* サブグループ展開ボタン（常に同じ幅を確保） */}
                          <div className="w-10 h-full flex items-center justify-center flex-shrink-0">
                            {hasSubgroups ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSubgroupExpansion(key);
                                }}
                                className="w-full h-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <span className={`inline-block transition-transform text-lg ${isExpanded ? 'rotate-90' : ''}`}>
                                  &#8250;
                                </span>
                              </button>
                            ) : (
                              <span className="invisible">&#8250;</span>
                            )}
                          </div>
                        </div>
                        {/* サブグループリスト（ドロップダウン内） */}
                        {isExpanded && hasSubgroups && (
                          <div className="ml-8 mr-4 mb-2 space-y-1 border-l-2 border-emerald-200 pl-3">
                            {GENRE_SUBGROUP_BY_GROUP[key].map((subKey) => (
                              <button
                                key={subKey}
                                onClick={() => handleSubgroup(subKey as GenreSubgroupKey)}
                                className={`w-full text-left px-3 py-2 rounded hover:bg-emerald-50 transition-colors text-sm ${
                                  currentSubgroups.includes(subKey as GenreSubgroupKey) ? 'bg-emerald-100 font-medium' : 'text-gray-600'
                                }`}
                              >
                                <div className="flex items-center">
                                  <span className={`w-3 h-3 rounded-full mr-2 ${
                                    currentSubgroups.includes(subKey as GenreSubgroupKey)
                                      ? 'bg-emerald-500'
                                      : 'border border-gray-400'
                                  }`}></span>
                                  {GENRE_SUBGROUP_MAPPINGS[subKey as GenreSubgroupKey]}
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
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
                  <div className="flex items-center gap-2 bg-emerald-200 text-emerald-900 px-3 py-1 rounded-full text-sm font-medium">
                    <span>{GENRE_GROUP_MAPPINGS[currentGenre]}</span>
                    <button
                      onClick={() => handleGenre('')}
                      className="hover:bg-emerald-300 rounded-full p-1"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
                {currentSubgroups.map((subKey) => (
                  <div key={subKey} className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    <span>{GENRE_SUBGROUP_MAPPINGS[subKey]}</span>
                    <button
                      onClick={() => handleSubgroup(subKey)}
                      className="hover:bg-emerald-100 rounded-full p-1"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
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
              {/* ジャンル選択リスト（ドロップダウンと同じ仕様） */}
              <div className="space-y-2">
                {(Object.keys(GENRE_GROUP_MAPPINGS) as GenreGroupKey[]).map((key) => {
                  const hasSubgroups = GENRE_SUBGROUP_BY_GROUP[key]?.length > 0;
                  const isExpanded = expandedGenres.includes(key);
                  // 「すべて」(key='')の選択状態：大分類も中分類も選択されていない場合のみ選択状態
                  const isSelected = key === '' 
                    ? (!currentGenre && currentSubgroups.length === 0)
                    : currentGenre === key;
                  return (
                    <div key={key}>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleGenre(key)}
                          className="flex-1 text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center text-sm text-gray-700"
                        >
                          <span className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${
                            isSelected 
                              ? 'bg-emerald-500 text-white text-xs' 
                              : 'border border-gray-300'
                          }`}>
                            {isSelected && '●'}
                          </span>
                          {GENRE_GROUP_MAPPINGS[key]}
                        </button>
                        {/* サブグループ展開ボタン（常に表示して幅を確保） */}
                        <div className="w-10 h-12 flex items-center justify-center flex-shrink-0">
                          {hasSubgroups ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSubgroupExpansion(key);
                              }}
                              className="w-full h-full flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                            >
                              <span className={`inline-block transition-transform text-lg ${isExpanded ? 'rotate-90' : ''}`}>
                                &#8250;
                              </span>
                            </button>
                          ) : (
                            <span className="invisible">&#8250;</span>
                          )}
                        </div>
                      </div>
                      {/* サブグループリスト（サイドバー内） */}
                      {isExpanded && hasSubgroups && (
                        <div className="ml-8 mr-2 mb-2 space-y-1 border-l-2 border-emerald-200 pl-3">
                          {GENRE_SUBGROUP_BY_GROUP[key].map((subKey) => (
                            <button
                              key={subKey}
                              onClick={() => handleSubgroup(subKey as GenreSubgroupKey)}
                              className={`w-full text-left px-3 py-2 rounded hover:bg-emerald-50 transition-colors text-sm ${
                                currentSubgroups.includes(subKey as GenreSubgroupKey) ? 'bg-emerald-100 font-medium' : 'text-gray-600'
                              }`}
                            >
                              <div className="flex items-center">
                                <span className={`w-3 h-3 rounded-full mr-2 ${
                                  currentSubgroups.includes(subKey as GenreSubgroupKey)
                                    ? 'bg-emerald-500'
                                    : 'border border-gray-400'
                                }`}></span>
                                {GENRE_SUBGROUP_MAPPINGS[subKey as GenreSubgroupKey]}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
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