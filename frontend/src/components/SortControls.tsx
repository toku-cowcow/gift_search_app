"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortControls() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sort, setSort] = useState(searchParams.get('sort') || 'updated_at:desc');

  const updateURL = (updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([k, v]) => (v && v !== '') ? params.set(k, v) : params.delete(k));
    params.delete('offset'); // ページリセット
    router.push(params.toString() ? `/?${params.toString()}` : '/');
  };

  return (
    <div className="flex justify-center items-center py-2 mb-2">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">並び順:</label>
        <select
          value={sort}
          onChange={(e) => { setSort(e.target.value); updateURL({ sort: e.target.value }); }}
          className="ml-2 h-10 rounded-md border px-3 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
        >
          <option value="updated_at:desc">新着順</option>
          <option value="price:asc">価格の安い順</option>
          <option value="price:desc">価格の高い順</option>
        </select>
      </div>
    </div>
  );
}