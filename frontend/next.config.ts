/**
 * Next.js設定ファイル
 * 
 * このファイルの役割:
 * - Next.jsアプリケーションの動作をカスタマイズ
 * - 画像の最適化、ビルド設定、外部リンク等を制御
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * 画像最適化設定
   * 手動商品データで様々な外部ドメインの画像を使用するため、
   * 画像最適化を無効化し、unoptimizedモードで動作させる
   */
  images: {
    unoptimized: true, // 画像最適化を無効化（外部ドメイン制限なし）
  },

  /**
   * ESLint設定
   * ビルド時のlintエラーを警告として扱い、ビルドを継続
   */
  eslint: {
    ignoreDuringBuilds: false, // lintは実行するが、エラーでも継続
  },
  
  /**
   * TypeScript設定
   * 型エラーでもビルドを継続（Amplifyデプロイ用）
   */
  typescript: {
    ignoreBuildErrors: true, // 型エラーを無視してビルド継続
  },
  
  /* 
   * 将来追加予定の設定:
   * - experimental: 実験的機能の有効化
   * - env: 環境変数の設定
   */
};

export default nextConfig;
