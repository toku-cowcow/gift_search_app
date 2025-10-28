/**
 * モックデータを使用した商品リポジトリ
 * 
 * このファイルの役割:
 * - 現在はダミーデータを使って検索機能をシミュレート
 * - 将来、実際のAPIに置き換える際の互換性を保つ
 * - フロントエンドの開発・テストを API 無しで可能にする
 */

import { GiftItem, SearchParams, SearchResponse, OccasionKey } from './types'

/**
 * ダミーデータ（開発・テスト用）
 * 
 * 本来は scripts/data/sample_items.json と同じデータだが、
 * フロントエンド単体での動作確認のため独立して定義
 */
const MOCK_ITEMS: GiftItem[] = [
  {
    id: "item_001",
    title: "Premium Towel Gift Set",
    price: 2500,
    image_url: "https://picsum.photos/400/400?random=1",
    merchant: "Gift Shop Hanamusubi",
    source: "rakuten",
    url: "https://example.com/products/towel_gift_set",
    affiliate_url: "https://af.rakuten.co.jp/dummy/towel_gift_set",
    occasion: "funeral_return",
    updated_at: 1697500800
  },
  {
    id: "item_002", 
    title: "Imabari Towel Wooden Box Gift",
    price: 4800,
    image_url: "https://picsum.photos/400/400?random=2",
    merchant: "Imabari Towel Specialty Store",
    source: "rakuten",
    url: "https://example.com/products/imabari_towel",
    affiliate_url: "https://af.rakuten.co.jp/dummy/imabari_towel",
    occasion: "wedding_return",
    updated_at: 1697587200
  },
  {
    id: "item_003",
    title: "Catalog Gift Yasuragi", 
    price: 8500,
    image_url: "https://picsum.photos/400/400?random=3",
    merchant: "Catalog Gift Forest",
    source: "rakuten",
    url: "https://example.com/products/catalog_yasuragi", 
    affiliate_url: "https://af.rakuten.co.jp/dummy/catalog_yasuragi",
    occasion: "baby_return",
    updated_at: 1697673600
  },
  {
    id: "item_004",
    title: "Rice Gift Set (2kg x 3 varieties)",
    price: 3200,
    image_url: "https://picsum.photos/400/400?random=4", 
    merchant: "Traditional Rice Shop Honoka",
    source: "rakuten",
    url: "https://example.com/products/rice_gift_set",
    affiliate_url: "https://af.rakuten.co.jp/dummy/rice_gift_set",
    occasion: "funeral_return", 
    updated_at: 1697760000
  },
  {
    id: "item_005",
    title: "Premium Soap Set (Additive-free)",
    price: 1980,
    image_url: "https://picsum.photos/400/400?random=5",
    merchant: "Natural Soap Workshop", 
    source: "rakuten",
    url: "https://example.com/products/soap_gift_set",
    affiliate_url: "https://af.rakuten.co.jp/dummy/soap_gift_set",
    occasion: "wedding_return",
    updated_at: 1697846400
  },
  {
    id: "item_006", 
    title: "Traditional Sweets Assortment Wa-no-Kokoro",
    price: 5200,
    image_url: "https://picsum.photos/400/400?random=6",
    merchant: "Traditional Confectionery Kagetsudo",
    source: "rakuten",
    url: "https://example.com/products/wagashi_assort",
    affiliate_url: "https://af.rakuten.co.jp/dummy/wagashi_assort", 
    occasion: "baby_return",
    updated_at: 1697932800
  },
  {
    id: "item_007",
    title: "Premium Coffee Gift",
    price: 12800, 
    image_url: "https://picsum.photos/400/400?random=7",
    merchant: "Specialty Coffee Bean Store",
    source: "rakuten",
    url: "https://example.com/products/premium_coffee",
    affiliate_url: "https://af.rakuten.co.jp/dummy/premium_coffee",
    occasion: "funeral_return",
    updated_at: 1698019200
  },
  {
    id: "item_008",
    title: "Fruit Jelly Assortment",
    price: 2800,
    image_url: "https://picsum.photos/400/400?random=8", 
    merchant: "Fruit Farm Direct Store",
    source: "rakuten",
    url: "https://example.com/products/fruit_jelly_set",
    affiliate_url: "https://af.rakuten.co.jp/dummy/fruit_jelly_set",
    occasion: "wedding_return",
    updated_at: 1698105600
  },
  {
    id: "item_009",
    title: "Organic Seasoning Set",
    price: 6800,
    image_url: "https://picsum.photos/400/400?random=9",
    merchant: "Organic Food Forest",
    source: "rakuten", 
    url: "https://example.com/products/organic_seasoning",
    affiliate_url: "https://af.rakuten.co.jp/dummy/organic_seasoning",
    occasion: "baby_return",
    updated_at: 1698192000
  },
  {
    id: "item_010",
    title: "Premium Green Tea Gift (Shizuoka)",
    price: 4500,
    image_url: "https://picsum.photos/400/400?random=10",
    merchant: "Shizuoka Tea Garden Direct Sales",
    source: "rakuten",
    url: "https://example.com/products/premium_greentea", 
    affiliate_url: "https://af.rakuten.co.jp/dummy/premium_greentea",
    occasion: "funeral_return",
    updated_at: 1698278400
  },
  {
    id: "item_011",
    title: "Baumkuchen Gift (Individual packaging)",
    price: 3800,
    image_url: "https://picsum.photos/400/400?random=11",
    merchant: "Confectionery Workshop Sweet Dream",
    source: "rakuten",
    url: "https://example.com/products/baumkuchen_gift",
    affiliate_url: "https://af.rakuten.co.jp/dummy/baumkuchen_gift",
    occasion: "wedding_return", 
    updated_at: 1698364800
  },
  {
    id: "item_012",
    title: "Catalog Gift Eraberuclub",
    price: 15000,
    image_url: "https://picsum.photos/400/400?random=12",
    merchant: "Gift Catalog Center",
    source: "rakuten",
    url: "https://example.com/products/catalog_eraberuclub",
    affiliate_url: "https://af.rakuten.co.jp/dummy/catalog_eraberuclub",
    occasion: "baby_return",
    updated_at: 1698451200
  }
]

/**
 * モックデータを使った商品検索サービス
 * 
 * 実際のAPIの動作をシミュレートし、同じインターフェースを提供
 */
export class MockProductRepository {
  
  /**
   * 商品検索を実行します（モックデータ版）
   * 
   * @param params 検索パラメータ
   * @returns Promise<SearchResponse> 検索結果
   * 
   * 処理の流れ:
   * 1. キーワード検索（タイトル・業者名での部分一致）
   * 2. 用途フィルタ
   * 3. 価格フィルタ  
   * 4. ソート
   * 5. ページング（limit/offset）
   */
  async searchItems(params: SearchParams): Promise<SearchResponse> {
    // 処理時間をシミュレート（実際のAPIコールのような遅延）
    await this._simulateDelay(100)
    
    let filteredItems = [...MOCK_ITEMS]
    
    // 1. キーワード検索（タイトルと業者名で部分一致）
    if (params.q) {
      const keyword = params.q.toLowerCase()
      filteredItems = filteredItems.filter(item => 
        item.title.toLowerCase().includes(keyword) ||
        item.merchant.toLowerCase().includes(keyword)
      )
    }
    
    // 2. 用途フィルタ
    if (params.occasion) {
      filteredItems = filteredItems.filter(item => item.occasion === params.occasion)
    }
    
    // 3. 価格フィルタ
    if (params.price_min !== undefined) {
      filteredItems = filteredItems.filter(item => item.price >= params.price_min!)
    }
    if (params.price_max !== undefined) {
      filteredItems = filteredItems.filter(item => item.price <= params.price_max!)
    }
    
    // 4. ソート
    const sortKey = params.sort || 'updated_at:desc'
    filteredItems = this._sortItems(filteredItems, sortKey)
    
    // 5. ページング
    const limit = params.limit || 20
    const offset = params.offset || 0
    const total = filteredItems.length
    const hits = filteredItems.slice(offset, offset + limit)
    
    return {
      total,
      hits,
      query: params.q || '',
      processing_time_ms: 15, // モックなので固定値
      limit,
      offset
    }
  }
  
  /**
   * IDで特定の商品を取得します
   * 
   * @param itemId 商品ID
   * @returns Promise<GiftItem> 商品情報
   * @throws Error 商品が見つからない場合
   */
  async getItemById(itemId: string): Promise<GiftItem> {
    await this._simulateDelay(50)
    
    const item = MOCK_ITEMS.find(item => item.id === itemId)
    if (!item) {
      throw new Error(`Item with ID '${itemId}' not found`)
    }
    
    return item
  }
  
  /**
   * 利用可能な用途一覧を取得します
   * 
   * @returns Promise<Occasion[]> 用途一覧
   */
  async getOccasions() {
    await this._simulateDelay(30)
    
    return [
      { key: 'funeral_return' as OccasionKey, label: '香典返し' },
      { key: 'wedding_return' as OccasionKey, label: '結婚内祝い' },
      { key: 'baby_return' as OccasionKey, label: '出産内祝い' }
    ]
  }
  
  /**
   * ソート処理（内部用）
   * 
   * @param items ソート対象の商品配列
   * @param sortKey ソート条件
   * @returns ソート済みの商品配列
   */
  private _sortItems(items: GiftItem[], sortKey: string): GiftItem[] {
    return [...items].sort((a, b) => {
      switch (sortKey) {
        case 'price:asc':
          return a.price - b.price
        case 'price:desc':
          return b.price - a.price
        case 'updated_at:desc':
        default:
          return b.updated_at - a.updated_at
      }
    })
  }
  
  /**
   * API呼び出しの遅延をシミュレート（内部用）
   * 
   * @param ms 遅延時間（ミリ秒）
   */
  private _simulateDelay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

/**
 * シングルトンインスタンス
 * 
 * アプリケーション全体で同じインスタンスを使い回し
 */
export const mockProductRepository = new MockProductRepository()