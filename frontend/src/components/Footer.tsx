/**
 * サイトフッターコンポーネント
 * 
 * 利用規約、プライバシーポリシー、著作権表示、アフィリエイト表記を含む
 */

"use client";

import Link from 'next/link';
import { OCCASION_NAV } from '@/lib/occasions';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* 用途別で探す */}
        <div className="mb-8 text-center">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">用途別で探す</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {OCCASION_NAV.map((occasion) => (
              <Link
                key={occasion.key}
                href={occasion.searchHref}
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                {occasion.label}
              </Link>
            ))}
          </div>
        </div>

        {/* 基本リンク */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-3">
          <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
            利用規約
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
            プライバシーポリシー
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
            お問い合わせ
          </Link>
        </div>

        {/* アフィリエイト表記と著作権表示 */}
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-500">
            【PR】当サイトは商品紹介にアフィリエイト広告を利用しています
          </p>
          <p className="text-xs text-gray-600 max-w-3xl mx-auto leading-relaxed">
            このサイトで掲載されている情報は、HAREGiftの作成者により運営されています。価格、販売可能情報は、変更される場合があります。購入時に各商品ページに表示されている価格が、その商品の販売に適用されます。
          </p>
          <p className="text-xs text-gray-500">
            © {currentYear} HAREGift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;