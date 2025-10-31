"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { SORT_MAPPINGS, SortKey } from '@/lib/types';

export default function SortControls() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URLパラメータから直接取得（stateを使わない）
  const currentSort = searchParams.get('sort') || 'updated_at:desc';

  const updateURL = (updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([k, v]) => (v && v !== '') ? params.set(k, v) : params.delete(k));
    params.delete('offset'); // ページリセット
    router.push(params.toString() ? `/?${params.toString()}` : '/', { scroll: false });
  };

  return (
    <div className="flex justify-center items-center py-2 mb-2">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">並び順:</label>
        <select
          value={currentSort}
          onChange={(e) => { updateURL({ sort: e.target.value }); }}
          className="ml-2 h-10 rounded-md border px-3 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
        >
          {(Object.keys(SORT_MAPPINGS) as SortKey[]).map((key) => (
            <option key={key} value={key}>
              {SORT_MAPPINGS[key]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}