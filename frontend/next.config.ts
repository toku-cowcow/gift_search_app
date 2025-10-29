/**
 * Next.js設定ファイル
 * 
 * このファイルの役割:
 * - Next.jsアプリケーションの動作をカスタマイズ
 * - 画像の最適化、ビルド設定、外部リンク等を制御
 * - 現在は最小設定（将来的に画像ドメイン許可等を追加予定）
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * 画像最適化設定
   * 外部ホストからの画像読み込みを許可
   */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https', 
        hostname: 'thumbnail.image.rakuten.co.jp',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  
  /* 
   * 将来追加予定の設定:
   * - experimental: 実験的機能の有効化
   * - env: 環境変数の設定
   */
};

export default nextConfig;
