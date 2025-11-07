"""
商品検索・取得関連のAPIエンドポイント（v1）

このファイルの役割:
- 商品検索、商品詳細取得、用途一覧のAPIを提供
- HTTPリクエストの受け取り、バリデーション、サービス層への橋渡し
- 新しいFastAPI推奨構成に基づく実装
"""

from typing import Optional
from fastapi import APIRouter, HTTPException, Query, Depends
from ...schemas import GiftItem, SearchResponse, SearchParams
from ...services.product_provider_base import ProductProviderBase
from ...api.deps import get_product_provider


# ルータインスタンスを作成
router = APIRouter(
    tags=["商品検索"],  # OpenAPI（Swagger）でのグループ化用
    prefix=""           # プレフィックスなし（/search, /items等で直接アクセス）
)


@router.get("/search", response_model=SearchResponse)
async def search_gifts(
    q: Optional[str] = Query(None, description="検索キーワード（商品名、業者名等）"),
    occasion: Optional[str] = Query(None, description="用途フィルタ（funeral_return, wedding_return, baby_return）"),
    genre_group: Optional[str] = Query(None, description="ジャンルグループフィルタ（food, drink, home, catalog, craft）"),
    price_min: Optional[int] = Query(None, description="最低価格（円）"),
    price_max: Optional[int] = Query(None, description="最高価格（円）"),
    sort: Optional[str] = Query("updated_at:desc", description="ソート順（updated_at:desc, price:asc, price:desc, review_average:asc, review_average:desc, review_count:asc, review_count:desc）"),
    limit: int = Query(20, ge=1, le=100, description="取得件数（1-100件）"),
    offset: int = Query(0, ge=0, description="スキップ件数（ページング用）"),
    exact_match: bool = Query(False, description="完全一致検索フラグ（true: フレーズ検索、false: 通常検索）"),
    provider: ProductProviderBase = Depends(get_product_provider)
):
    """
    ギフト商品を検索する
    
    概要:
    冠婚葬祭シーン別のギフト商品を条件に基づいて検索します。
    現在はMeilisearchから検索、将来は楽天APIからも検索可能。
    
    使用例:
    - GET /search?q=タオル&occasion=funeral_return&price_max=5000
      → 香典返し用のタオル、5000円以下を検索
    - GET /search?sort=price:asc&limit=10
      → 価格安い順で10件取得
    - GET /search
      → 全商品を取得（デフォルト20件）
    
    パラメータ詳細:
    - q: 商品名や業者名での部分一致検索
    - occasion: 用途での絞り込み（香典返し、結婚内祝い、出産内祝い）
    - price_min/max: 価格帯での絞り込み
    - sort: 並び順（更新日降順、価格昇順・降順）
    - limit: 1ページの件数（最大100件）
    - offset: 開始位置（ページング用）
    
    返り値:
    - total: 条件に合致する総件数
    - hits: 実際に返される商品一覧
    - query: 検索に使用されたキーワード
    - その他メタ情報（処理時間等）
    
    エラー処理:
    - パラメータ不正: 422 Unprocessable Entity
    - 検索エラー: 500 Internal Server Error
    """
    try:
        # HTTPパラメータをサービス層用のデータクラスに変換
        search_params = SearchParams(
            q=q,
            occasion=occasion,
            genre_group=genre_group,
            price_min=price_min,
            price_max=price_max,
            sort=sort or "updated_at:desc",
            limit=limit,
            offset=offset,
            exact_match=exact_match
        )
        
        # 依存関係注入されたProviderで検索実行
        # 設定により自動的にMeilisearch/楽天APIが選択される
        return provider.search_items(search_params)
        
    except Exception as e:
        # サービス層でのエラーをHTTPエラーに変換
        raise HTTPException(
            status_code=500, 
            detail=f"検索処理でエラーが発生しました: {str(e)}"
        )


@router.get("/items/{item_id}", response_model=GiftItem)
async def get_item(
    item_id: str,
    provider: ProductProviderBase = Depends(get_product_provider)
):
    """
    商品IDで特定の商品詳細を取得する
    
    概要:
    商品の一意識別子（ID）を指定して、詳細情報を取得します。
    商品カードクリック時や、直接URL指定時に使用されます。
    
    使用例:
    - GET /items/item_001
      → ID「item_001」の商品詳細を取得
    
    パラメータ:
    - item_id: 商品の一意識別子（英数字、アンダースコア等）
    
    返り値:
    - 商品の詳細情報
      - 基本情報: title, price, description
      - 画像: image_url
      - 販売情報: merchant, url, affiliate_url
      - 分類: occasion, keywords
    
    エラー処理:
    - 404: 指定されたIDの商品が存在しない
    - 500: 検索処理でエラーが発生
    
    将来の拡張:
    - アクセス解析（どの商品がよく見られるか）
    - 関連商品の推奨機能
    """
    try:
        return provider.get_item_by_id(item_id)
        
    except ValueError as e:
        # 商品が見つからない場合は404エラー
        raise HTTPException(
            status_code=404, 
            detail=f"商品ID '{item_id}' が見つかりません"
        )
    except Exception as e:
        # その他のエラーは500エラー
        raise HTTPException(
            status_code=500, 
            detail=f"商品取得でエラーが発生しました: {str(e)}"
        )


@router.get("/occasions")
async def list_occasions():
    """
    利用可能な用途（シーン）の一覧を取得する
    
    概要:
    冠婚葬祭で使用される用途の一覧を返します。
    フロントエンドのフィルタ選択肢として使用されます。
    
    用途:
    - フロントエンドのプルダウンメニュー生成
    - 用途の表示名とAPIで使用するキーのマッピング提供
    - 新しい用途追加時の動的対応
    
    返り値例:
    {
      "occasions": [
        {"key": "funeral_return", "label": "香典返し"},
        {"key": "wedding_return", "label": "結婚内祝い"},
        {"key": "baby_return", "label": "出産内祝い"}
      ]
    }
    
    将来の拡張:
    - データベースから動的に取得
    - 多言語対応（Accept-Languageヘッダー対応）
    - 季節限定用途の追加（お中元、お歳暮等）
    - ユーザーカスタム用途の対応
    """
    # 現在は固定値を返すが、将来はデータベースから取得予定
    occasions = [
        {
            "key": "funeral_return", 
            "label": "香典返し",
            "description": "お通夜・お葬式でいただいた香典に対するお返し"
        },
        {
            "key": "wedding_return", 
            "label": "結婚内祝い",
            "description": "結婚祝いをいただいた方へのお返し"
        },
        {
            "key": "baby_return", 
            "label": "出産内祝い",
            "description": "出産祝いをいただいた方へのお返し"
        }
    ]
    
    return {"occasions": occasions}