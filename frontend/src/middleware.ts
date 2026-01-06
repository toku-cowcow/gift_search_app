/**
 * Next.js Middleware
 * 
 * 不正なURLパラメータをクリーンアップし、正規URLにリダイレクト
 * SEO汚染を防ぐため、内部状態パラメータや不明なパラメータを除去
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 許可されたURLパラメータのホワイトリスト
const ALLOWED_PARAMS = new Set([
  'q',              // 検索キーワード
  'occasion',       // 用途フィルタ
  'genre_group',    // ジャンル大分類
  'genre_subgroup', // ジャンル中分類
  'price_min',      // 最低価格
  'price_max',      // 最高価格
  'sort',           // ソート
  'limit',          // 取得件数
  'offset',         // ページネーション
  'price_range',    // 価格帯（簡易指定）
]);

// 除外すべき不正なパラメータパターン
const FORBIDDEN_PARAMS = new Set([
  'status',         // 内部状態管理
  'value',          // 内部状態管理
  'resolved_model', // 内部実装詳細
]);

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // ルートパスとoccasionページのみ処理（記事ページは除外）
  if (pathname !== '/' && !pathname.startsWith('/search')) {
    return NextResponse.next();
  }

  let hasInvalidParams = false;
  const cleanParams = new URLSearchParams();

  // パラメータをチェックして、ホワイトリストにあるもののみを保持
  searchParams.forEach((value, key) => {
    // 禁止パラメータを検出
    if (FORBIDDEN_PARAMS.has(key)) {
      hasInvalidParams = true;
      return;
    }

    // 許可されたパラメータのみを追加
    if (ALLOWED_PARAMS.has(key)) {
      cleanParams.set(key, value);
    } else {
      // 不明なパラメータも除外
      hasInvalidParams = true;
    }
  });

  // 不正なパラメータが検出された場合、クリーンなURLにリダイレクト
  if (hasInvalidParams) {
    const cleanUrl = new URL(pathname, request.url);
    cleanUrl.search = cleanParams.toString();

    // 301永久リダイレクトでクリーンなURLに統一
    return NextResponse.redirect(cleanUrl, { status: 301 });
  }

  return NextResponse.next();
}

// ミドルウェアを適用するパスを指定
export const config = {
  matcher: [
    '/',
    '/search',
    // 静的ファイル、API、内部パスは除外
    '/((?!_next/static|_next/image|favicon.ico|api|images|articles).*)',
  ],
};
