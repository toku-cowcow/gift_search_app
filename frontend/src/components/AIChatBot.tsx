"use client";

import { useState } from 'react';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  message: string;
  timestamp: Date;
}

export default function AIChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      message: 'こんにちは！ギフト選びのお手伝いをいたします。どのような用途のギフトをお探しですか？',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);

    // 暫定的なAI応答（バックエンド実装後に置き換え）
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        message: '申し訳ございませんが、現在AI機能は準備中です。バックエンドの実装が完了次第、ご利用いただけるようになります。',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
        {/* チャットヘッダー */}
        <div className="bg-rose-50 px-6 py-4 border-b border-gray-200 rounded-t-lg">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <span className="mr-2">🤖</span>
            AIギフトコンシェルジュ
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            あなたにぴったりのギフトを一緒に見つけましょう
          </p>
        </div>

        {/* チャットメッセージエリア */}
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.message}</p>
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-rose-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString('ja-JP', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* メッセージ入力エリア */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="メッセージを入力してください..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              送信
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            ※ 現在AI機能は準備中です。バックエンド実装後にご利用いただけます。
          </p>
        </div>
      </div>
    </div>
  );
}