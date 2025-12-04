/**
 * Next.jsアプリケーションのルートレイアウト
 * 
 * このファイルの役割:
 * - 全ページ共通のHTML構造を定義
 * - フォント設定（日本語対応）
 * - メタデータ設定（SEO対策）
 * - 全体のスタイル設定
 */

import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Kiwi_Maru } from "next/font/google";
import "./globals.css";

// 英語用フォント（見出し・UI要素用）
const inter = Inter({
  variable: "--font-inter",              // CSS変数名
  subsets: ["latin"],                  // 読み込む文字セット
  display: "swap",                     // フォント読み込み戦略（表示優先）
});

// 日本語用フォント（本文テキスト用）
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",       // CSS変数名
  subsets: ["latin"],                  // 文字セット
  weight: ["300", "400", "500", "600", "700"], // 使用するフォントウェイト
  display: "swap",
});

// ブランド用フォント（ロゴ・特別な箇所用）
const kiwiMaru = Kiwi_Maru({
  variable: "--font-kiwi-maru",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

// SEO対策用のメタデータ定義
export const metadata: Metadata = {
  metadataBase: new URL('https://haregift.com'),
  title: {
    default: "HAREGift | ハレの日のギフトを探せる検索サイト",
    template: "%s | HAREGift",
  },
  description: "HAREGift（ハレギフト）は、結婚祝い・出産祝い・新築祝い・母の日・父の日など、ハレの日にぴったりの贈り物を探せるギフト検索サイトです。人気ショップや通販サイトの商品を横断して比較できます。",
  keywords: ["ギフト", "プレゼント", "結婚祝い", "出産祝い", "新築祝い", "内祝い", "母の日", "父の日", "敬老の日", "贈り物", "通販"],
  authors: [{ name: "HAREGift" }],
  creator: "HAREGift",
  publisher: "HAREGift",
  
  // Canonical URL（重複コンテンツ対策）
  alternates: {
    canonical: 'https://haregift.com',
  },
  
  // Open Graph Protocol (SNSシェア用)
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://haregift.com',
    title: 'HAREGift | ハレの日のギフトを探せる検索サイト',
    description: '結婚祝い・出産祝い・新築祝い・母の日・父の日など、ハレの日にぴったりの贈り物を探せるギフト検索サイトです。',
    siteName: 'HAREGift',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HAREGift - ハレの日のギフト検索',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'HAREGift | ハレの日のギフトを探せる検索サイト',
    description: '結婚祝い・出産祝い・新築祝い・母の日・父の日など、ハレの日にぴったりの贈り物を探せるギフト検索サイトです。',
    images: ['/og-image.png'],
  },
  
  // その他のメタデータ
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // アプリケーション情報
  applicationName: 'HAREGift',
  
  // 検証用（必要に応じて追加）
  // verification: {
  //   google: 'your-google-verification-code',
  //   yahoo: 'your-yahoo-verification-code',
  // },
};

/**
 * ルートレイアウトコンポーネント
 * 
 * @param children 各ページのコンテンツが挿入される
 * @returns 全ページ共通のHTML構造
 * 
 * 特徴:
 * - 日本語サイト（lang="ja"）として設定
 * - HAREGiftブランドカラーの背景色を適用
 * - 3種類のフォントを使い分け可能な設定
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* Google Fontsの読み込み高速化のためのプリコネクト */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WSQLP1GZW1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WSQLP1GZW1');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${kiwiMaru.variable} font-kiwi antialiased text-slate-900`}
        suppressHydrationWarning
        style={{ backgroundColor: '#FEF0F1' }}  // HAREGiftブランド背景色
      >
        {children}  {/* 各ページのコンテンツがここに挿入される */}
      </body>
    </html>
  );
}