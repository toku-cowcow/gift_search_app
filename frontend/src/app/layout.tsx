/**
 * Next.js繧｢繝励Μ繧ｱ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繝ｫ繝ｼ繝医Ξ繧､繧｢繧ｦ繝・
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ:
 * - 蜈ｨ繝壹・繧ｸ蜈ｱ騾壹・HTML讒矩繧貞ｮ夂ｾｩ
 * - 繝輔か繝ｳ繝郁ｨｭ螳夲ｼ域律譛ｬ隱槫ｯｾ蠢懶ｼ・
 * - 繝｡繧ｿ繝・・繧ｿ險ｭ螳夲ｼ・EO蟇ｾ遲厄ｼ・
 * - 蜈ｨ菴薙・繧ｹ繧ｿ繧､繝ｫ險ｭ螳・
 */

import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Kiwi_Maru } from "next/font/google";
import "./globals.css";

// 闍ｱ隱樒畑繝輔か繝ｳ繝茨ｼ郁ｦ句・縺励・UI隕∫ｴ逕ｨ・・
const inter = Inter({
  variable: "--font-inter",              // CSS螟画焚蜷・
  subsets: ["latin"],                  // 隱ｭ縺ｿ霎ｼ繧譁・ｭ励そ繝・ヨ
  display: "swap",                     // 繝輔か繝ｳ繝郁ｪｭ縺ｿ霎ｼ縺ｿ謌ｦ逡･・郁｡ｨ遉ｺ蜆ｪ蜈茨ｼ・
});

// 譌･譛ｬ隱樒畑繝輔か繝ｳ繝茨ｼ域悽譁・ユ繧ｭ繧ｹ繝育畑・・
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",       // CSS螟画焚蜷・
  subsets: ["latin"],                  // 譁・ｭ励そ繝・ヨ
  weight: ["300", "400", "500", "600", "700"], // 菴ｿ逕ｨ縺吶ｋ繝輔か繝ｳ繝医え繧ｧ繧､繝・
  display: "swap",
});

// 繝悶Λ繝ｳ繝臥畑繝輔か繝ｳ繝茨ｼ医Ο繧ｴ繝ｻ迚ｹ蛻･縺ｪ邂・園逕ｨ・・
const kiwiMaru = Kiwi_Maru({
  variable: "--font-kiwi-maru",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

// SEO蟇ｾ遲也畑縺ｮ繝｡繧ｿ繝・・繧ｿ螳夂ｾｩ・・EBUG逕ｨ縺ｫ繧ｿ繧､繝医Ν螟画峩・・
export const metadata: Metadata = {
  title: "UchiGift DEBUG-Layout-001",
  description: "蜃ｺ逕｣繝ｻ邨仙ｩ壹・譁ｰ遽峨・蠢ｫ豌礼･昴＞縺ｪ縺ｩ縲√す繝ｼ繝ｳ蛻･繝ｻ莠育ｮ怜挨縺ｫ縺ｴ縺｣縺溘ｊ縺ｮ蜀・･昴＞繧定ｦ九▽縺代ｉ繧後∪縺吶・,
  // TODO: 蟆・擂霑ｽ蜉莠亥ｮ・
  // keywords: ["蜀・･昴＞", "繧ｮ繝輔ヨ", "蜃ｺ逕｣逾昴＞", "邨仙ｩ夂･昴＞"]
  // openGraph: OGP險ｭ螳・
};

/**
 * 繝ｫ繝ｼ繝医Ξ繧､繧｢繧ｦ繝医さ繝ｳ繝昴・繝阪Φ繝・
 * 
 * @param children 蜷・・繝ｼ繧ｸ縺ｮ繧ｳ繝ｳ繝・Φ繝・′謖ｿ蜈･縺輔ｌ繧・
 * @returns 蜈ｨ繝壹・繧ｸ蜈ｱ騾壹・HTML讒矩
 * 
 * 迚ｹ蠕ｴ:
 * - 譌･譛ｬ隱槭し繧､繝茨ｼ・ang="ja"・峨→縺励※險ｭ螳・
 * - UchiGift繝悶Λ繝ｳ繝峨き繝ｩ繝ｼ縺ｮ閭梧勹濶ｲ繧帝←逕ｨ
 * - 3遞ｮ鬘槭・繝輔か繝ｳ繝医ｒ菴ｿ縺・・縺大庄閭ｽ縺ｪ險ｭ螳・
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* Google Fonts縺ｮ隱ｭ縺ｿ霎ｼ縺ｿ鬮倬溷喧縺ｮ縺溘ａ縺ｮ繝励Μ繧ｳ繝阪け繝・*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${kiwiMaru.variable} font-kiwi antialiased text-slate-900`}
        suppressHydrationWarning
        style={{ backgroundColor: '#FEF0F1' }}  // UchiGift繝悶Λ繝ｳ繝芽レ譎ｯ濶ｲ
      >
        {children}  {/* 蜷・・繝ｼ繧ｸ縺ｮ繧ｳ繝ｳ繝・Φ繝・′縺薙％縺ｫ謖ｿ蜈･縺輔ｌ繧・*/}
      </body>
    </html>
  );
}