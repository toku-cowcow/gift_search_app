export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 目的: 全ページ共通のHTML骨組み（<html><body>）を定義します。
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}