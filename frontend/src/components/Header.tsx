/**
 * サイト全体のヘッダーコンポーネント
 * 
 * このコンポーネントの役割:
 * - サイトのロゴとブランド表示
 * - 主要な用途（香典返し等）への直接リンク
 * - 商品検索ページへの誘導
 * - レスポンシブ対応（モバイル・デスクトップ）
 */

"use client";

import Link from 'next/link';

/**
 * ヘッダーコンポーネント
 * 
 * 全ページで共通使用されるナビゲーション要素
 * sticky配置により、スクロール時も上部に固定表示される
 */
const Header = () => {
  // ロゴクリック時の完全リセット処理
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // URLをクリアしてトップページに戻る（検索パラメータも全削除）
    window.location.href = '/';
  };
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(254, 240, 241, 0.9)', borderBottomColor: 'rgba(191, 191, 191, 0.5)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="group cursor-pointer">
            <h1 className="text-xl font-bold text-neutral-900 tracking-tight hover:text-neutral-700 transition-colors duration-200">
              UchiGift
            </h1>
          </button>


        </div>
      </div>
    </header>
  );
};

export default Header;