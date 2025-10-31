"""
商品検索・取得関連のルータ

このファイルの役割:
- 商品検索、商品詳細取得、用途一覧のAPIエンドポイントを提供
- HTTPリクエストの受け取り、バリデーション、サービス層への橋渡しを担当
"""

from typing import Optional
from fastapi import APIRouter, HTTPException, Query
from ..schemas import GiftItem, SearchResponse, SearchParams, Occasion
from ..services import MeilisearchService

# ルータインスタンスを作成
router = APIRouter(
    tags=["items"],  # OpenAPI（Swagger）でのグループ化用
    prefix=""        # プレフィックスなし（/search, /items等で直接アクセス）
)

# サービス層のインスタンス
search_service = MeilisearchService()


@router.get("/search", response_model=SearchResponse)
async def search_gifts(
    q: Optional[str] = Query(None, description="検索キーワード（商品名、業者名等）"),
    occasion: Optional[str] = Query(None, description="用途フィルタ（funeral_return, wedding_return, baby_return）"),
    price_min: Optional[int] = Query(None, description="最低価格（円）"),
    price_max: Optional[int] = Query(None, description="最高価格（円）"),
    sort: Optional[str] = Query("updated_at:desc", description="ソート順（updated_at:desc, price:asc, price:desc, review_count:desc, review_average:desc）"),
    limit: int = Query(20, ge=1, le=100, description="取得件数（1-100件）"),
    offset: int = Query(0, ge=0, description="スキップ件数（ページング用）")
):
    """
    ギフト商品を検索します
    
    使用例:
    - GET /search?q=タオル&occasion=funeral_return&price_max=5000
    - GET /search?sort=price:asc&limit=10
    - GET /search （全商品を取得）
    
    パラメータ説明:
    - q: 商品名や業者名での部分一致検索
    - occasion: 用途での絞り込み（香典返し等）
    - price_min/max: 価格帯での絞り込み
    - sort: 並び順（更新日降順、価格昇順・降順）
    - limit: 1ページの件数（最大100件）
    - offset: 開始位置（2ページ目なら limit × 1）
    
    返り値:
    - total: 条件に合致する総件数
    - hits: 実際に返される商品一覧
    - query: 検索に使用されたキーワード
    - その他メタ情報（処理時間等）
    """
    try:
        # HTTPパラメータをサービス層用のオブジェクトに変換
        search_params = SearchParams(
            q=q,
            occasion=occasion,
            price_min=price_min,
            price_max=price_max,
            sort=sort or "updated_at:desc",
            limit=limit,
            offset=offset
        )
        
        # デバッグログ：受け取ったパラメータを出力
        print(f"DEBUG - Router received sort parameter: {sort}")
        print(f"DEBUG - SearchParams.sort: {search_params.sort}")
        
        # サービス層で検索実行
        return search_service.search_items(search_params)
        
    except Exception as e:
        # サービス層でのエラーをHTTPエラーに変換
        raise HTTPException(
            status_code=500, 
            detail=f"検索処理でエラーが発生しました: {str(e)}"
        )


@router.get("/items/{item_id}", response_model=GiftItem)
async def get_item(item_id: str):
    """
    商品IDで特定の商品詳細を取得します
    
    使用例:
    - GET /items/item_001
    
    パラメータ:
    - item_id: 商品の一意識別子
    
    返り値:
    - 商品の詳細情報（価格、画像、アフィリエイトURL等）
    
    エラー:
    - 404: 指定されたIDの商品が存在しない
    - 500: 検索処理でエラーが発生
    """
    try:
        return search_service.get_item_by_id(item_id)
        
    except ValueError as e:
        # 商品が見つからない場合は404エラー
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        # その他のエラーは500エラー
        raise HTTPException(
            status_code=500, 
            detail=f"商品取得でエラーが発生しました: {str(e)}"
        )


@router.get("/occasions")
async def list_occasions():
    """
    利用可能な用途（シーン）の一覧を取得します
    
    用途:
    - フロントエンドのフィルタ選択肢を動的に生成
    - 用途の表示名とシステム内部キーのマッピング提供
    
    返り値:
    - occasions: 用途のリスト
      - key: システム内部で使用するキー
      - label: ユーザー向けの表示名
    
    将来の拡張:
    - データベースから動的に取得する可能性あり
    - 多言語対応時は Accept-Language ヘッダーを参照予定
    """
    # 現在は固定値を返すが、将来はデータベースから取得予定
    occasions = [
        {"key": "funeral_return", "label": "香典返し"},
        {"key": "wedding_return", "label": "結婚内祝い"},
        {"key": "baby_return", "label": "出産内祝い"}
    ]
    
    return {"occasions": occasions}