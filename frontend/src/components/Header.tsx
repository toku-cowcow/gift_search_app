/**
 * サイト全体のヘッダーコンポーネント
 * 
 * このコンポーネントの役割:
 * - サイトのロゴとブランド表示
 * - 用途別メニュー（検索・記事へのリンク）
 * - レスポンシブ対応（モバイル・デスクトップ）
 */

"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { OCCASION_NAV } from '@/lib/occasions';

/**
 * ヘッダーコンポーネント
 * 
 * 全ページで共通使用されるナビゲーション要素
 * sticky配置により、スクロール時も上部に固定表示される
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // ロゴクリック時の完全リセット処理
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // URLをクリアしてトップページに戻る（検索パラメータも全削除）
    window.location.href = '/';
  };

  // メニュー外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-60 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(254, 240, 241, 0.9)', borderBottomColor: 'rgba(191, 191, 191, 0.5)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="group cursor-pointer">
            <h1 className="text-xl font-bold text-neutral-900 tracking-tight hover:text-neutral-700 transition-colors duration-200">
              HAREGift
            </h1>
          </button>

          {/* 用途別メニュー */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-white/50 rounded-lg transition-colors"
              aria-label="用途別メニュー"
            >
              <span className="text-xl">☰</span>
            </button>

            {/* ドロップダウンメニュー */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 sm:w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-[80vh] overflow-y-auto">
                {OCCASION_NAV.map((occasion) => (
                  <div key={occasion.key} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0">
                    <div className="font-medium text-neutral-900 mb-2 text-sm">
                      {occasion.label}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={occasion.searchHref}
                        className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        検索
                      </Link>
                      <Link
                        href={occasion.articleHref}
                        className="flex items-center gap-1 text-xs text-green-600 hover:text-green-800 hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        記事
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;