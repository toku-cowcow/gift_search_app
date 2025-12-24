import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ProductData {
  id: string;
  title: string;
  image_url: string;
  affiliate_url: string;
  price: number;
  description: string;
  sales_badge?: string;
  Carousel?: number;
}

export async function GET() {
  try {
    // manual_products.jsonのパスを指定（scriptsフォルダから読み込む）
    const filePath = path.join(process.cwd(), '..', 'scripts', 'data', 'sources', 'others', 'manual_products.json');
    
    // ファイルを読み込む
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(fileContents) as ProductData[];
    
    // Carousel=1の商品のみをフィルタリング
    const carouselProducts = products
      .filter((product) => product.Carousel === 1)
      .map((product) => ({
        id: product.id,
        title: product.title,
        image_url: product.image_url,
        affiliate_url: product.affiliate_url,
        price: product.price,
        description: product.description,
        sales_badge: product.sales_badge,
      }));
    
    return NextResponse.json(carouselProducts);
  } catch (error) {
    console.error('カルーセル商品の取得エラー:', error);
    return NextResponse.json(
      { error: 'カルーセル商品の取得に失敗しました' },
      { status: 500 }
    );
  }
}
