/**
 * メインページのヒーローセクションコンポーネント
 * 
 * サイトタイトルと説明文を2行固定で表示
 */

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  // ロゴクリック時の完全リセット処理
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // URLをクリアしてトップページに戻る（検索パラメータも全削除）
    window.location.href = '/';
  };
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo image */}
          <div className="flex justify-center mb-4">
            <button onClick={handleLogoClick} className="cursor-pointer hover:opacity-80 transition-opacity duration-200">
              <img
                src="/UchiGift_top_logo.svg"
                alt="UchiGift ロゴ"
                width={400}
                height={200}
                className="max-w-full h-auto"
              />
            </button>
          </div>

          {/* 説明文2行固定 */}
          <div className="max-w-3xl mx-auto leading-relaxed space-y-2 text-gray-700">
            <p>UchiGift（ウチギフト）は、内祝いギフト専門の検索サイトです。</p>
            <p>通販サイトの人気商品をまとめて比較し、心のこもった「ありがとう」を贈るお手伝いをします。</p>
          </div>
        </div>
      </div>
    </section>
  );
}