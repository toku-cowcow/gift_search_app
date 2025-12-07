"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
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

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openDropdown, setOpenDropdown] = useState<GenreGroupKey | null>(null);

  const currentOccasion = (searchParams.get('occasion') || '') as OccasionKey;
  const currentGenre = (searchParams.get('genre_group') || '') as GenreGroupKey;
  const currentSubgroup = (searchParams.get('genre_subgroup') || '') as GenreSubgroupKey;

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

  const updateURL = (updates: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([k, v]) => {
      if (v !== undefined && v !== '') params.set(k, String(v));
      else params.delete(k);
    });
    params.delete('offset');
    router.push(params.toString() ? `/?${params.toString()}` : '/', { scroll: false });
  };

  const handleOccasion = (o: OccasionKey) => updateURL({ occasion: o || undefined });
  const handleGenre = (g: GenreGroupKey) => {
    // ジャンルグループ変更時はサブグループをクリア
    updateURL({ genre_group: g || undefined, genre_subgroup: undefined });
    setOpenDropdown(null); // ドロップダウンを閉じる
  };
  const handleSubgroup = (s: GenreSubgroupKey) => {
    updateURL({ genre_subgroup: s || undefined });
    setOpenDropdown(null); // 選択後ドロップダウンを閉じる
  };
  const toggleDropdown = (g: GenreGroupKey) => {
    setOpenDropdown(openDropdown === g ? null : g);
  };
  const handlePrice = (p: PriceRangeKey) => {
    if (!p) return updateURL({ price_min: undefined, price_max: undefined });
    const r = PRICE_RANGE_MAPPINGS[p];
    updateURL({ price_min: r.price_min, price_max: r.price_max });
  };

  const baseBtn =
    "inline-flex items-center h-12 px-6 rounded-full border text-base font-medium shadow-sm transition active:scale-[0.98]";

  return (
    <section className="py-4 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 space-y-4">

        {/* 1行目：用途（ピンク） */}
        <div className="flex flex-wrap gap-3 justify-center">
          {(Object.keys(OCCASION_MAPPINGS) as OccasionKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => handleOccasion(key)}
              className={`${baseBtn} bg-[#ECAFAD] text-neutral-800 border-neutral-300 hover:opacity-90 ${currentOccasion === key ? 'ring-2 ring-rose-400' : ''}`}
            >
              {OCCASION_MAPPINGS[key]}
            </button>
          ))}
        </div>

        {/* 2行目：価格帯（水色） */}
        <div className="flex flex-wrap gap-3 justify-center">
          {(Object.keys(PRICE_RANGE_MAPPINGS) as PriceRangeKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => handlePrice(key)}
              className={`${baseBtn} bg-[#B7D5EB] text-neutral-800 border-neutral-300 hover:opacity-90 ${currentPriceRange === key ? 'ring-2 ring-sky-400' : ''}`}
            >
              {PRICE_RANGE_MAPPINGS[key].label}
            </button>
          ))}
        </div>

        {/* 3行目：ジャンルグループ（緑） */}
        <div className="flex flex-wrap gap-3 justify-center">
          {(Object.keys(GENRE_GROUP_MAPPINGS) as GenreGroupKey[]).map((key) => {
            const hasSubgroups = GENRE_SUBGROUP_BY_GROUP[key]?.length > 0;
            return (
              <div key={key} className="relative">
                <button
                  type="button"
                  onClick={() => handleGenre(key)}
                  className={`${baseBtn} bg-[#CDEDE3] text-neutral-800 border-neutral-300 hover:opacity-90 ${currentGenre === key ? 'ring-2 ring-emerald-400' : ''}`}
                >
                  {GENRE_GROUP_MAPPINGS[key]}
                </button>
                
                {/* サブグループ開閉ボタン */}
                {hasSubgroups && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(key);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-neutral-600 hover:text-neutral-800"
                  >
                    <span className={`transition-transform ${openDropdown === key ? 'rotate-90' : ''}`}>
                      &#8249;
                    </span>
                  </button>
                )}

                {/* ドロップダウンメニュー */}
                {hasSubgroups && openDropdown === key && (
                  <div className="absolute top-full mt-2 left-0 min-w-[200px] bg-white rounded-lg shadow-lg border border-neutral-200 z-50">
                    {GENRE_SUBGROUP_BY_GROUP[key].map((subKey) => (
                      <button
                        key={subKey}
                        type="button"
                        onClick={() => handleSubgroup(subKey as GenreSubgroupKey)}
                        className={`w-full text-left px-4 py-3 hover:bg-[#FFF4B7] transition first:rounded-t-lg last:rounded-b-lg ${currentSubgroup === subKey ? 'bg-[#FFF4B7] font-medium' : ''}`}
                      >
                        {GENRE_SUBGROUP_MAPPINGS[subKey as GenreSubgroupKey]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}