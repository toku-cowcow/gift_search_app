'use client';

/**
 * 繝帙・繝繝壹・繧ｸ縺ｮClient Component驛ｨ蛻・
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ:
 * - useState遲峨・React Hooks繧剃ｽｿ逕ｨ
 * - 繧､繝ｳ繧ｿ繝ｩ繧ｯ繝・ぅ繝悶↑讖溯・繧呈署萓・
 * - Server Component縺九ｉ蛻・屬縺励※App Router繝ｫ繝ｼ繝ｫ貅匁侠
 */

import { useState } from 'react';

export default function HomeClient() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <div style={{ 
      background: '#fef3c7', 
      padding: 20, 
      borderRadius: 12, 
      border: '1px solid #f59e0b'
    }}>
      <h3 style={{ color: '#92400e', marginBottom: 16 }}>
        噫 Client Component 繝・せ繝・
      </h3>
      
      <div style={{ marginBottom: 16 }}>
        <button
          onClick={() => setCount(c => c + 1)}
          style={{
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 6,
            cursor: 'pointer',
            marginRight: 12
          }}
        >
          繧ｫ繧ｦ繝ｳ繝・ {count}
        </button>
        
        <input
          type="text"
          placeholder="繝｡繝・そ繝ｼ繧ｸ繧貞・蜉・.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: 6,
            marginRight: 12
          }}
        />
      </div>
      
      {message && (
        <p style={{ 
          background: '#ecfdf5', 
          color: '#047857', 
          padding: 12, 
          borderRadius: 6,
          margin: 0
        }}>
          蜈･蜉帙＆繧後◆繝｡繝・そ繝ｼ繧ｸ: <strong>{message}</strong>
        </p>
      )}
    </div>
  );
}