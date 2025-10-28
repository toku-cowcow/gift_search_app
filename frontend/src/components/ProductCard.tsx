/**
 * 商品カードコンポーネント
 * 
 * このコンポーネントの役割:
 * - 個別の商品情報を視覚的に魅力的に表示
 * - 商品画像、価格、用途、販売店等の情報表示
 * - 商品詳細ページへのリンクとアフィリエイトリンクを提供
 * - お気に入り機能（将来的にローカルストレージ保存予定）
 */

import { GiftItem, OccasionKey } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HeartIcon, ShoppingBagIcon, EyeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

/**
 * ProductCardコンポーネントのプロパティ
 */
interface ProductCardProps {
  item: GiftItem;  // 表示する商品データ
}

/**
 * 価格を表示用にフォーマットする関数
 * 
 * @param price 価格（数値）
 * @returns フォーマットされた価格文字列（例: "3,000円"）
 */
const formatPrice = (price: number): string => {
  return `${price.toLocaleString('ja-JP')}円`;
};

/**
 * 用途キーを日本語ラベルに変換する関数
 * 
 * @param occasion 用途キー
 * @returns 日本語ラベル
 */
const getOccasionLabel = (occasion: OccasionKey): string => {
  switch (occasion) {
    case 'funeral_return': return '香典返し';
    case 'wedding_return': return '結婚内祝い';
    case 'baby_return': return '出産内祝い';
    default: return occasion;
  }
};

/**
 * 商品カードコンポーネント
 * 
 * @param item 表示する商品の情報
 * @returns 商品カードのJSX要素
 * 
 * 機能:
 * - 商品画像の表示（エラー時はプレースホルダー表示）
 * - お気に入りボタン（現在はローカル状態のみ）
 * - 用途別の色分けバッジ表示
 * - 商品詳細へのリンクとアフィリエイトリンク
 */
export default function ProductCard({ item }: ProductCardProps) {
  // 画像読み込みエラー状態（表示切り替え用）
  const [imageError, setImageError] = useState(false);
  // お気に入り状態（将来はローカルストレージやAPIと連携予定）
  const [isFavorite, setIsFavorite] = useState(false);

  /**
   * 用途に応じたバッジの色を決定する関数
   * 
   * @param occasion 用途キー
   * @returns TailwindCSSのクラス名文字列
   */
  const getOccasionColor = (occasion: string) => {
    switch (occasion) {
      case 'funeral_return':
        return 'bg-neutral-800 text-white';
      case 'wedding_return':
        return 'bg-blue-600 text-white';
      case 'baby_return':
        return 'bg-emerald-600 text-white';
      default:
        return 'bg-neutral-600 text-white';
    }
  };
  
  return (
    <div className="group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-neutral-100 hover:border-neutral-200 transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden">
        {!imageError ? (
          <Image
            src={item.image_url}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
            <div className="text-center text-neutral-500">
              <div className="w-16 h-16 mx-auto mb-3 bg-neutral-300 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-medium">画像が読み込めません</p>
            </div>
          </div>
        )}
        
        {/* Overlay Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {/* Occasion Badge */}
          <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold shadow-soft backdrop-blur-sm ${getOccasionColor(item.occasion)}`}>
            {getOccasionLabel(item.occasion)}
          </span>
          
          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-soft hover:bg-white hover:scale-110 transition-all duration-200"
          >
            {isFavorite ? (
              <HeartSolidIcon className="w-5 h-5 text-red-500" />
            ) : (
              <HeartIcon className="w-5 h-5 text-neutral-600" />
            )}
          </button>
        </div>

        {/* Source Badge */}
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-sm text-neutral-700 text-xs font-medium rounded-xl shadow-soft">
            {item.source}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-bold text-neutral-900 mb-3 line-clamp-2 text-lg leading-tight group-hover:text-primary-600 transition-colors">
          {item.title}
        </h3>

        {/* Merchant */}
        <div className="mb-4">
          <span className="text-sm text-neutral-500 font-medium bg-neutral-50 px-3 py-1 rounded-lg">
            {item.merchant}
          </span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-neutral-900">
              {formatPrice(item.price)}
            </span>
            <span className="text-sm text-neutral-400">
              税込
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {/* View Details Button */}
          <Link
            href={`/items/${item.id}`}
            className="flex-1 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 text-neutral-900 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 group/btn"
          >
            <EyeIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            詳細
          </Link>

          {/* Purchase Button */}
          <a
            href={item.affiliate_url}
            target="_blank"
            rel="nofollow noreferrer"
            className="flex-1 flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-soft hover:shadow-medium group/btn"
          >
            <ShoppingBagIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            購入
          </a>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}