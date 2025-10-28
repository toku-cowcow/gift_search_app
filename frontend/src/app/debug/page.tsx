/**
 * デバッグ用ページ
 * 
 * このファイルの役割:
 * - Next.jsのルーティングが正常に動作するかテスト
 * - ファイル変更の反映確認用
 * - /debug パスでアクセス可能
 */

import type { Metadata } from "next";

// DEBUG用メタデータ（反映確認のため）
export const metadata: Metadata = {
  title: "UchiGift DEBUG-Debug-001",
  description: "デバッグ専用ページ",
};

/**
 * デバッグページコンポーネント
 * 
 * シンプルな表示でNext.jsが正常に動作していることを確認
 */
export default function DebugPage() {
  const currentTime = new Date().toLocaleString('ja-JP');
  
  return (
    <main style={{ 
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#f0f8ff',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#2563eb', marginBottom: '1rem' }}>
        🔧 UchiGift Debug Page
      </h1>
      
      <div style={{ 
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '2px solid #10b981',
        marginBottom: '1rem'
      }}>
        <h2>✅ Next.js App Router 動作確認</h2>
        <ul>
          <li>✅ /debug パスでアクセス成功</li>
          <li>✅ TypeScript コンパイル成功</li>
          <li>✅ metadata 反映確認（ブラウザタブタイトル参照）</li>
          <li>✅ React コンポーネント描画成功</li>
        </ul>
      </div>

      <div style={{ 
        backgroundColor: '#fef3c7',
        padding: '1rem',
        borderRadius: '6px',
        border: '1px solid #f59e0b'
      }}>
        <p><strong>現在時刻:</strong> {currentTime}</p>
        <p><strong>ページパス:</strong> /debug</p>
        <p><strong>期待されるタブタイトル:</strong> UchiGift DEBUG-Debug-001</p>
      </div>

      <nav style={{ marginTop: '2rem' }}>
        <h3>🔗 テスト用リンク</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '0.5rem 0' }}>
            <a href="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              → ホームページ (/)</a>
          </li>
          <li style={{ margin: '0.5rem 0' }}>
            <a href="/search" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              → 検索ページ (/search)</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}