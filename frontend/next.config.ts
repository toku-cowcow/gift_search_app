/**
 * Next.js設定ファイル
 * 
 * このファイルの役割:
 * - Next.jsアプリケーションの動作をカスタマイズ
 * - App Routerのsrc/app/ディレクトリ認識を明示的に指定
 * - ルート誤認問題を完全解決する設定
 */

import type { NextConfig } from "next";
import fs from 'node:fs';

// デバッグ用：起動時の詳細情報を確認
console.log('[UchiGift] CWD=', process.cwd());
console.log('[UchiGift] ls src/app =', fs.readdirSync('./src/app', { withFileTypes: true }).map(d => d.name));

const nextConfig: NextConfig = {
  // 🔧 正しいワークスペースルートを明示的に指定
  // 複数のpackage-lock.jsonによる誤認識を修正
  outputFileTracingRoot: process.cwd(),
  
  // Next.js 15では src/ ディレクトリは自動認識される（srcDir設定不要）
  // App Routerもデフォルトで有効
};

export default nextConfig;
