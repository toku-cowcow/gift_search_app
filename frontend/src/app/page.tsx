・ｿ/**
 * UchiGift縺ｮ繝｡繧､繝ｳ繝壹・繧ｸ・・pp Router Server Component迚茨ｼ・ * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ:
 * - Next.js 15 App Router蟇ｾ蠢懊・Server Component
 * - metadata export縺ｫ繧医ｋSEO蟇ｾ遲・ * - Client讖溯・縺ｯ蟄舌さ繝ｳ繝昴・繝阪Φ繝医↓蛻・屬
 */

import type { Metadata } from "next";
import Link from 'next/link';
import HomeClient from '@/components/HomeClient';

// Server Component縺ｧmetadata繧脱xport・・use client'縺ｨ蜷悟ｱ・ｸ榊庄縺ｮ縺溘ａ蛻・屬・・export const metadata: Metadata = {
  title: "UchiGift DEBUG-Home-001",
  description: "繝・ヰ繝・げ逕ｨ繝帙・繝繝壹・繧ｸ - App Router蟇ｾ蠢懃沿",
};

/**
 * Server Component迚医・繝ｼ繝繝壹・繧ｸ
 * - metadata縺ｨClient讖溯・繧貞・髮｢縺励※Next.js App Router繝ｫ繝ｼ繝ｫ貅匁侠
 */
export default function HomePage() {
  return (
    <main style={{ 
      padding: 24, 
      fontFamily: 'system-ui, sans-serif',
      background: '#f8fafc',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#1e40af', marginBottom: 24, fontSize: 32 }}>
        脂 UchiGift DEBUG-Home-001
      </h1>
      
      <div style={{ 
        background: 'white', 
        padding: 20, 
        borderRadius: 12, 
        border: '1px solid #e2e8f0',
        marginBottom: 24
      }}>
        <h2 style={{ color: '#059669', marginBottom: 16 }}>笨・App Router 菫ｮ豁｣螳御ｺ・/h2>
        <ul style={{ lineHeight: 1.6 }}>
          <li>笨・<strong>Server Component</strong>: metadata export謌仙粥</li>
          <li>笨・<strong>'use client'蝠城｡・/strong>: 蜑企勁縺励※隗｣豎ｺ</li>
          <li>笨・<strong>繝ｫ繝ｼ繝・ぅ繝ｳ繧ｰ</strong>: /縺梧ｭ｣蟶ｸ蜍穂ｽ・/li>
        </ul>
      </div>

      {/* Client讖溯・縺ｯ蟄舌さ繝ｳ繝昴・繝阪Φ繝医〒螳溯｣・*/}
      <HomeClient />
      
      <div style={{ marginTop: 24 }}>
        <h3 style={{ marginBottom: 16 }}>迫 繝・せ繝育畑繝ｪ繝ｳ繧ｯ</h3>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/debug" style={{ 
            color: '#1e40af', 
            textDecoration: 'underline',
            padding: '8px 16px',
            background: '#eff6ff',
            borderRadius: 6
          }}>
            /debug 竊・          </Link>
          <Link href="/search" style={{ 
            color: '#1e40af', 
            textDecoration: 'underline',
            padding: '8px 16px',
            background: '#eff6ff',
            borderRadius: 6
          }}>
            /search 竊・          </Link>
        </div>
      </div>
    </main>
  );
}
