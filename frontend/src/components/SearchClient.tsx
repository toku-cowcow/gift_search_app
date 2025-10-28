'use client';

/**
 * 讀懃ｴ｢繝壹・繧ｸ縺ｮClient Component驛ｨ蛻・
 * 
 * 縺薙・繝輔ぃ繧､繝ｫ縺ｮ蠖ｹ蜑ｲ:
 * - useState遲峨・React Hooks繧剃ｽｿ逕ｨ
 * - 讀懃ｴ｢繝輔か繝ｼ繝縺ｮ繧､繝ｳ繧ｿ繝ｩ繧ｯ繧ｷ繝ｧ繝ｳ
 * - Server Component縺九ｉ蛻・屬縺励※App Router繝ｫ繝ｼ繝ｫ貅匁侠
 */

import { useState } from 'react';

export default function SearchClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div style={{ 
      background: '#fef3c7', 
      padding: 20, 
      borderRadius: 12, 
      border: '1px solid #f59e0b'
    }}>
      <h3 style={{ color: '#92400e', marginBottom: 16 }}>
        剥 讀懃ｴ｢Client Component 繝・せ繝・
      </h3>
      
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="蝠・刀蜷阪〒讀懃ｴ｢..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '300px',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: 6,
            marginRight: 12
          }}
        />
        
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: 6,
            marginRight: 12
          }}
        >
          <option value="">繧ｫ繝・ざ繝ｪ繧帝∈謚・/option>
          <option value="wedding">邨仙ｩ壼・逾昴＞</option>
          <option value="baby">蜃ｺ逕｣蜀・･昴＞</option>
          <option value="funeral">鬥吝・霑斐＠</option>
        </select>
        
        <button
          onClick={() => alert(`讀懃ｴ｢: "${searchTerm}" 繧ｫ繝・ざ繝ｪ: "${category}"`)}
          style={{
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 6,
            cursor: 'pointer'
          }}
        >
          讀懃ｴ｢螳溯｡・
        </button>
      </div>
      
      {searchTerm && (
        <p style={{ 
          background: '#ecfdf5', 
          color: '#047857', 
          padding: 12, 
          borderRadius: 6,
          margin: 0
        }}>
          讀懃ｴ｢繧ｭ繝ｼ繝ｯ繝ｼ繝・ <strong>{searchTerm}</strong>
          {category && ` (繧ｫ繝・ざ繝ｪ: ${category})`}
        </p>
      )}
    </div>
  );
}