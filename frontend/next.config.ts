/**
 * Next.js設定ファイル
 * 
 * このファイルの役割:
 * - Next.jsアプリケーションの動作をカスタマイズ
 * - 画像の最適化、ビルド設定、外部リンク等を制御
 * - 現在は最小設定（将来的に画像ドメイン許可等を追加予定）
 */

import type { NextConfig } from "next";

// デバッグ用：起動時の現在ディレクトリを確認
console.log('[UchiGift] CWD=', process.cwd());

const nextConfig: NextConfig = {
  /* 
   * 現在は基本設定のみ使用
   * 
   * 将来追加予定の設定:
   * - images: 外部画像ドメインの許可（楽天、Amazon等）
   * - experimental: 実験的機能の有効化
   * - env: 環境変数の設定
   */
  
  // Next.js 15+ではApp Routerがデフォルトで有効
  
  // 🔧 CRITICAL FIX: 正しいワークスペースルートを明示的に指定
  // 複数のpackage-lock.jsonによる誤認識を修正
  outputFileTracingRoot: process.cwd(), // frontendディレクトリを明示的にルートとして設定
};

export default nextConfig;
