"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchControls() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [q, setQ] = useState(searchParams.get('q') || '');
  const [sort, setSort] = useState(searchParams.get('sort') || 'updated_at:desc');

  const updateURL = (updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([k, v]) => (v && v !== '') ? params.set(k, v) : params.delete(k));
    params.delete('offset'); // ページリセット
    router.push(params.toString() ? `/?${params.toString()}` : '/');
  };

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    updateURL({ q });
  };

  const resetAll = () => {
    const keep: string[] = []; // 完全リセット
    const params = new URLSearchParams();
    keep.forEach(k => {
      const v = searchParams.get(k);
      if (v) params.set(k, v);
    });
    router.push('/');
  };

  return (
    <section className="py-6 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">

          {/* 検索フォーム（幅420px・右内側ボタン） */}
          <form onSubmit={onSubmit} className="relative w-[420px] max-w-full">
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
              placeholder="キーワードで検索"
              className="h-12 w-full rounded-full border-2 border-[#ECAFAD] bg-white pl-5 pr-24 placeholder:text-rose-400/80 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-4 rounded-full bg-[#ECAFAD] text-white font-semibold"
            >
              検索
            </button>

            {/* すべて表示（リセット） */}
            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={resetAll}
                className="inline-flex items-center px-4 py-1 rounded-full border border-gray-400 text-sm bg-white hover:bg-gray-50"
              >
                すべて表示
              </button>
            </div>
          </form>

          {/* 並び順（右側） */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">並び順:</label>
            <select
              value={sort}
              onChange={(e) => { setSort(e.target.value); updateURL({ sort: e.target.value }); }}
              className="ml-2 h-12 rounded-md border px-3 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            >
              <option value="updated_at:desc">新着順</option>
              <option value="price:asc">価格の安い順</option>
              <option value="price:desc">価格の高い順</option>
            </select>
          </div>

        </div>
      </div>
    </section>
  );
}