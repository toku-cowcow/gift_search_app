import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // manual_products.jsonのパスを指定
    const filePath = path.join(process.cwd(), '..', 'scripts', 'data', 'sources', 'others', 'manual_products.json');
    
    // ファイルを読み込む
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(fileContents);
    
    // Carousel=1の商品のみをフィルタリング
    const carouselProducts = products
      .filter((product: any) => product.Carousel === 1)
      .map((product: any) => ({
        id: product.id,
        title: product.title,
        image_url: product.image_url,
        affiliate_url: product.affiliate_url,
        price: product.price,
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
