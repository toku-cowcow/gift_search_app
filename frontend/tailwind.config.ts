/**
 * Tailwind CSS設定ファイル
 * 
 * このファイルの役割:
 * - アプリ全体のデザインシステムを定義
 * - カラーパレット、フォント、スペーシング等を統一
 * - UchiGift独自のブランドカラーとスタイルを設定
 * - レスポンシブデザインとアニメーションを制御
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  // TailwindCSSが適用されるファイルのパターンを指定
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',     // pagesディレクトリのファイル
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // コンポーネントファイル
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',       // app router用のファイル
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f8f7ff',
          100: '#f1efff',
          200: '#e6e2ff',
          300: '#d2c9ff',
          400: '#b8a6ff',
          500: '#9d7eff',
          600: '#6B4EFF', // メインブランドカラー
          700: '#5B3ED4',
          800: '#4B2FAD',
          900: '#3B2087',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#5B5B7A', // 落ち着いた墨色
          700: '#4A4A62',
          800: '#39394A',
          900: '#282833',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // UchiGiftオリジナルブランドカラー
        'uchi-bg': '#FEF0F1',        // 背景色（淡いピンク）
        'uchi-category': '#ECAFAD',  // カテゴリボタン色
        'uchi-price': '#B7D5EB',     // 価格帯ボタン色
        'uchi-border-top': '#E48A88', // ヘッダーボーダー色
        'uchi-border': '#BFBFBF',    // 汎用ボーダー色
        'uchi-button': '#AFABAB',    // 汎用ボタン色
      },
      fontFamily: {
        'sans': ['Kiwi Maru', 'var(--font-noto-sans-jp)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'noto': ['var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
        'kiwi': ['Kiwi Maru', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1152px', // max-w-6xl equivalent
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '28': '7rem',
        '32': '8rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 12px 0 rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 24px 0 rgba(0, 0, 0, 0.06)',
        'large': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'colored': '0 4px 24px 0 rgba(139, 92, 246, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
export default config