import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UchiGift - 冠婚葬祭ギフト検索',
  description: '内祝いギフトを簡単検索',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}