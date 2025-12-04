/**
 * Open Graph画像生成
 * 
 * SNSシェア時に表示される画像を動的生成
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'HAREGift - ハレの日のギフト検索サイト';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FEF0F1 0%, #FFE5E9 100%)',
          padding: '60px',
        }}
      >
        {/* ロゴ部分 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #FF6B9D 0%, #FFA5C5 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'flex',
            }}
          >
            HAREGift
          </div>
        </div>

        {/* キャッチコピー */}
        <div
          style={{
            fontSize: 48,
            color: '#334155',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: '600',
          }}
        >
          ハレの日のギフトを探せる
        </div>
        
        <div
          style={{
            fontSize: 38,
            color: '#64748B',
            textAlign: 'center',
          }}
        >
          結婚祝い・出産祝い・新築祝い・母の日・父の日
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
