"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import {
  OCCASION_MAPPINGS,
  PRICE_RANGE_MAPPINGS,
  OccasionKey,
  PriceRangeKey,
  GENRE_GROUP_MAPPINGS,
  GenreGroupKey
} from '@/lib/types';

export default function Filters() {
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
  };

  const handleOccasion = (o: OccasionKey) => updateURL({ occasion: o || undefined });
  const handleGenre = (g: GenreGroupKey) => updateURL({ genre_group: g || undefined });
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
          {(Object.keys(GENRE_GROUP_MAPPINGS) as GenreGroupKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => handleGenre(key)}
              className={`${baseBtn} bg-[#CDEDE3] text-neutral-800 border-neutral-300 hover:opacity-90 ${currentGenre === key ? 'ring-2 ring-emerald-400' : ''}`}
            >
              {GENRE_GROUP_MAPPINGS[key]}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}