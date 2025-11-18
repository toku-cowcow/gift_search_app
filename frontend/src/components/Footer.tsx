/**
 * サイトフッターコンポーネント
 * 
 * 利用規約、プライバシーポリシー、著作権表示、アフィリエイト表記を含む
 */

"use client";

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6">
        
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
        <div className="text-center space-y-1">
          <p className="text-xs text-gray-500">
            【PR】当サイトは商品紹介にアフィリエイト広告を利用しています
          </p>
          <p className="text-xs text-gray-500">
            © {currentYear} UchiGift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;