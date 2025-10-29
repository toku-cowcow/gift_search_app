"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import {
  OCCASION_MAPPINGS,
  SOURCE_MAPPINGS,
  PRICE_RANGE_MAPPINGS,
  OccasionKey,
  SourceKey,
  PriceRangeKey
} from '@/lib/types';

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentOccasion = (searchParams.get('occasion') || '') as OccasionKey;
  const currentSource = (searchParams.get('source') || '') as SourceKey;

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
    router.push(params.toString() ? `/?${params.toString()}` : '/');
  };

  const handleOccasion = (o: OccasionKey) => updateURL({ occasion: o || undefined });
  const handleSource = (s: SourceKey) => updateURL({ source: s || undefined });
  const handlePrice = (p: PriceRangeKey) => {
    if (!p) return updateURL({ price_min: undefined, price_max: undefined });
    const r = PRICE_RANGE_MAPPINGS[p];
    updateURL({ price_min: r.price_min, price_max: r.price_max });
  };

  const baseBtn =
    "inline-flex items-center h-12 px-6 rounded-full border text-base font-medium shadow-sm transition active:scale-[0.98]";

  return (
    <section className="py-6 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 space-y-4">

        {/* 1行目：用途（ピンク） */}
        <div className="flex flex-wrap gap-3 justify-center">
          {(Object.keys(OCCASION_MAPPINGS) as OccasionKey[]).map((key) => (
            <button
              key={key}
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
              onClick={() => handlePrice(key)}
              className={`${baseBtn} bg-[#B7D5EB] text-neutral-800 border-neutral-300 hover:opacity-90 ${currentPriceRange === key ? 'ring-2 ring-sky-400' : ''}`}
            >
              {PRICE_RANGE_MAPPINGS[key].label}
            </button>
          ))}
        </div>

        {/* 3行目：ソース（緑） */}
        <div className="flex flex-wrap gap-3 justify-center">
          {(Object.keys(SOURCE_MAPPINGS) as SourceKey[]).map((key) => (
            <button
              key={key}
              onClick={() => handleSource(key)}
              className={`${baseBtn} bg-[#CDEDE3] text-neutral-800 border-neutral-300 hover:opacity-90 ${currentSource === key ? 'ring-2 ring-emerald-400' : ''}`}
            >
              {SOURCE_MAPPINGS[key]}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}