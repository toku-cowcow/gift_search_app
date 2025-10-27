/**
 * サイト全体のヘッダーコンポーネント
 * 
 * このコンポーネントの役割:
 * - サイトのロゴとブランド表示
 * - 主要な用途（香典返し等）への直接リンク
 * - 商品検索ページへの誘導
 * - レスポンシブ対応（モバイル・デスクトップ）
 */

import Link from 'next/link';

/**
 * ヘッダーコンポーネント
 * 
 * 全ページで共通使用されるナビゲーション要素
 * sticky配置により、スクロール時も上部に固定表示される
 */
const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(254, 240, 241, 0.9)', borderBottomColor: 'rgba(191, 191, 191, 0.5)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className="text-xl font-bold text-neutral-900 tracking-tight hover:text-neutral-700 transition-colors duration-200">
              UchiGift
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link 
              href="/search?category=funeral"
              className="px-4 py-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors duration-200 no-underline"
            >
              香典返し
            </Link>
            <Link 
              href="/search?category=wedding"
              className="px-4 py-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors duration-200 no-underline"
            >
              結婚内祝い
            </Link>
            <Link 
              href="/search?category=baby"
              className="px-4 py-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors duration-200 no-underline"
            >
              出産内祝い
            </Link>
            <div className="w-px h-4 mx-4" style={{ backgroundColor: 'rgba(191, 191, 191, 0.5)' }}></div>
            <Link 
              href="/search"
              className="px-8 py-3 text-white text-base font-medium rounded-full hover:opacity-90 transition-opacity duration-200 no-underline border-0"
              style={{ backgroundColor: '#AFABAB' }}
            >
              商品を探す
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 transition-colors text-sm font-medium">
            メニュー
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;