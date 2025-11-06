"use client";

import { useState } from 'react';

export type TabType = 'category' | 'ai-chat';

interface TabSelectorProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function TabSelector({ activeTab, onTabChange }: TabSelectorProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex justify-center">
        <div className="flex bg-gray-100 shadow rounded-full p-1">
          <button
            onClick={() => onTabChange('category')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'category'
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            カテゴリ/価格から選ぶ
          </button>
          <button
            onClick={() => onTabChange('ai-chat')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'ai-chat'
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            AIに相談する
          </button>
        </div>
      </div>
    </div>
  );
}