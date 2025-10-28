export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 逶ｮ逧・ 蜈ｨ繝壹・繧ｸ蜈ｱ騾壹・HTML鬪ｨ邨・∩・・html><body>・峨ｒ螳夂ｾｩ縺励∪縺吶・
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}