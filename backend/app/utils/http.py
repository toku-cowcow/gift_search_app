"""
HTTP通信関連のユーティリティ関数

このファイルの役割:
- API呼び出し時の共通処理
- パラメータ構築、エラーハンドリング
"""

from typing import Dict, Any, Optional


def build_query_params(params: Dict[str, Any]) -> Dict[str, str]:
    """
    クエリパラメータを構築する
    
    概要:
    APIリクエスト用のクエリパラメータを構築します。
    None値の除去、型変換等を行います。
    
    Args:
        params: 元のパラメータ辞書
        
    Returns:
        Dict[str, str]: 文字列化済みのパラメータ辞書
        
    使用例:
        >>> params = {"q": "タオル", "limit": 20, "unused": None}
        >>> build_query_params(params)
        {"q": "タオル", "limit": "20"}
    """
    # None値を除去し、全て文字列に変換
    cleaned_params = {}
    for key, value in params.items():
        if value is not None:
            cleaned_params[key] = str(value)
    
    return cleaned_params


def format_api_error(error_type: str, message: str, status_code: Optional[int] = None) -> Dict[str, Any]:
    """
    APIエラーを統一形式でフォーマット
    
    Args:
        error_type: エラー種別 ('timeout', 'connection', 'auth', 'rate_limit', 'server')
        message: エラーメッセージ
        status_code: HTTPステータスコード（オプション）
        
    Returns:
        統一されたエラー辞書
    """
    error_messages = {
        'timeout': 'リクエストがタイムアウトしました',
        'connection': 'サーバーに接続できませんでした',
        'auth': '認証に失敗しました',
        'rate_limit': 'API使用制限に達しました',
        'server': 'サーバーエラーが発生しました',
        'unknown': '不明なエラーが発生しました'
    }
    
    return {
        'error': True,
        'type': error_type,
        'message': error_messages.get(error_type, error_messages['unknown']),
        'detail': message,
        'status_code': status_code
    }