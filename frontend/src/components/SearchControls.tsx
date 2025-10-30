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
    router.push(params.toString() ? `/?${params.toString()}` : '/', { scroll: false });
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
    setQ(''); // 検索ボックスの内容もクリア
    router.push('/', { scroll: false });
  };

  return (
    <section className="py-6 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">

          {/* 検索フォーム（幅420px・右内側ボタン） */}
          <form onSubmit={onSubmit} className="w-[420px] max-w-full">
            {/* 入力とボタンを同じ相対コンテナに入れる */}
            <div className="relative">
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
                placeholder="キーワードで検索"
                className="h-12 w-full rounded-full border-2 border-[#ECAFAD] bg-white pl-5 pr-24 placeholder:text-rose-400/80 focus:outline-none focus:ring-2 focus:ring-rose-300"
              />

              {/* 絶対配置で垂直中央。ボタン分の幅は input の pr-24 で確保 */}
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-5 rounded-full bg-[#ECAFAD] hover:bg-rose-400 text-white font-semibold shadow-sm flex items-center justify-center leading-none"
                aria-label="検索"
              >
                検索
              </button>
            </div>

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

        </div>
      </div>
    </section>
  );
}