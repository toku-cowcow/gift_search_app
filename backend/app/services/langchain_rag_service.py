"""
LangChainベースRAGサービス（互換性維持版）

このファイルの役割:
- 既存APIとの互換性を維持
- 複雑なchain機能は一時的に無効化
- Phase 3最適化版（optimized_rag_service.py）の使用を推奨

注意: LangChain v1.0+互換性問題により一部機能を簡素化
"""

import os
import json
import logging
from typing import List, Dict, Any, Optional
from datetime import datetime

# LangChain imports (simplified)
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.documents import Document

from ..core.config import settings
from ..schemas import GiftItem, SearchParams
from .product_provider_base import ProductProviderBase
from .search_service_fixed import MeilisearchService

# ログ設定
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class LangChainRAGService:
    """LangChain RAGサービス（簡素化版）"""
    
    def __init__(self):
        """
        初期化（簡素化版）
        
        注意: このサービスは互換性維持のために簡素化されています。
        最新の高性能版は OptimizedLangChainRAGService をご利用ください。
        """
        logger.warning("LangChain RAGサービス（簡素化版）を初期化中...")
        logger.warning("高性能版をお求めの場合は OptimizedLangChainRAGService をご利用ください")
        
        # 基本サービス
        self.meilisearch_service = MeilisearchService()
        
        # LLM設定（基本版）
        self.llm = ChatOpenAI(
            model_name=settings.openai_model,
            temperature=0.3,
            api_key=settings.openai_api_key
        )
        
        # エラーフラグ
        self._initialization_error = False
    
    async def get_conversation_recommendation(
        self,
        user_input: str,
        chat_history: List[Dict[str, str]] = None,
        limit: int = 3
    ) -> Dict[str, Any]:
        """
        会話型レコメンド（簡素版）
        
        注意: 機能が制限されています。
        完全な機能をお求めの場合は /ai/fast-recommend エンドポイントをご利用ください。
        """
        logger.warning("簡素版会話型レコメンドを実行中...")
        
        try:
            # シンプルな検索のみ実行
            search_params = SearchParams(q=user_input, limit=limit)
            search_result = self.meilisearch_service.search_items(search_params)
            
            # 基本的なAI応答生成
            simple_response = f"「{user_input}」に対して{len(search_result.hits)}件の商品をご提案いたします。詳細な分析や意図抽出をお求めの場合は、高性能版の /ai/fast-recommend エンドポイントをご利用ください。"
            
            return {
                "ai_response": simple_response,
                "recommendations": search_result.hits,
                "reasoning": "簡素版レコメンド（制限機能）",
                "suggestion": "高性能版は /ai/fast-recommend をご利用ください"
            }
            
        except Exception as e:
            logger.error(f"簡素版レコメンドエラー: {str(e)}")
            return {
                "ai_response": f"申し訳ございません。エラーが発生しました: {str(e)}",
                "recommendations": [],
                "reasoning": "エラー発生",
                "suggestion": "高性能版の /ai/fast-recommend をお試しください"
            }
    
    async def get_hybrid_recommendation(
        self,
        user_input: str,
        chat_history: List[Dict[str, str]] = None,
        limit: int = 3
    ) -> Dict[str, Any]:
        """
        ハイブリッドレコメンド（簡素版）
        
        Phase 2の複雑な機能は OptimizedLangChainRAGService に移行しました。
        """
        logger.warning("ハイブリッドレコメンド（簡素版）を実行中...")
        
        # 基本的な検索と応答のみ
        return await self.get_conversation_recommendation(
            user_input=user_input,
            chat_history=chat_history,
            limit=limit
        )
    
    async def health_check(self) -> Dict[str, Any]:
        """ヘルスチェック（簡素版）"""
        return {
            "status": "simplified",
            "message": "簡素化版で動作中",
            "recommendation": "高性能版は OptimizedLangChainRAGService をご利用ください",
            "meilisearch_available": True,
            "llm_available": bool(settings.openai_api_key)
        }