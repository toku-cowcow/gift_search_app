"""
Phase 2: ハイブリッド検索システム

このファイルの役割:
- Phase 1の意図抽出結果を活用した高度な検索システム
- Meilisearch（構造化フィルター）とFAISS（ベクトル検索）の組み合わせ
- より精密な商品推薦と高いユーザー満足度を実現
"""

import asyncio
import logging
from typing import List, Dict, Any, Optional, Tuple
from datetime import datetime

from ..schemas import GiftItem, SearchParams, SearchResponse
from .search_service_fixed import MeilisearchService
from langchain_community.vectorstores import FAISS

# ログ設定
logger = logging.getLogger(__name__)


class HybridSearchEngine:
    """ハイブリッド検索エンジン（Phase 2）"""
    
    def __init__(self, meilisearch_service: MeilisearchService, vector_store: FAISS):
        """
        初期化
        
        Args:
            meilisearch_service: Meilisearch検索サービス
            vector_store: FAISSベクトルストア
        """
        self.meilisearch_service = meilisearch_service
        self.vector_store = vector_store
        
        # 検索戦略の重み設定
        self.search_weights = {
            "semantic_weight": 0.6,      # セマンティック検索の重み
            "structured_weight": 0.4,    # 構造化検索の重み
            "intent_boost": 0.2          # 意図マッチング時のブースト
        }
        
        logger.info("ハイブリッド検索エンジン初期化完了")
    
    async def hybrid_search(
        self,
        query: str,
        user_intent: Dict[str, Any],
        limit: int = 10,
        semantic_threshold: float = 0.7
    ) -> Tuple[List[GiftItem], Dict[str, Any]]:
        """
        ハイブリッド検索メイン実行
        
        Args:
            query: 検索クエリ
            user_intent: Phase 1で抽出された意図データ
            limit: 取得件数
            semantic_threshold: セマンティック検索の類似度閾値
            
        Returns:
            (商品リスト, 検索メタデータ)
        """
        start_time = datetime.now()
        search_metadata = {
            "strategy": "hybrid_phase2",
            "steps": [],
            "performance": {}
        }
        
        try:
            # Step 1: 意図ベース構造化フィルター構築
            structured_params = self._build_structured_filters(user_intent)
            search_metadata["steps"].append(f"構造化フィルター: {structured_params.__dict__}")
            
            # Step 2: セマンティック検索実行
            semantic_results = await self._semantic_search(query, limit * 2)
            search_metadata["steps"].append(f"セマンティック検索: {len(semantic_results)}件")
            
            # Step 3: 構造化検索実行
            structured_results = await self._structured_search(structured_params, limit * 2)
            search_metadata["steps"].append(f"構造化検索: {len(structured_results)}件")
            
            # Step 4: 結果マージとスコアリング
            merged_results = self._merge_and_score(
                semantic_results,
                structured_results,
                user_intent,
                query
            )
            search_metadata["steps"].append(f"マージ・スコアリング: {len(merged_results)}件")
            
            # Step 5: 意図適合性フィルタリング
            filtered_results = self._intent_compatibility_filter(merged_results, user_intent)
            search_metadata["steps"].append(f"意図フィルタリング: {len(filtered_results)}件")
            
            # Step 6: 最終スコア順ソート
            final_results = sorted(filtered_results, key=lambda x: x.get('hybrid_score', 0), reverse=True)
            final_products = [item['product'] for item in final_results[:limit]]
            
            # パフォーマンス記録
            end_time = datetime.now()
            search_metadata["performance"] = {
                "total_time_ms": (end_time - start_time).total_seconds() * 1000,
                "semantic_count": len(semantic_results),
                "structured_count": len(structured_results),
                "final_count": len(final_products)
            }
            
            logger.info(f"ハイブリッド検索完了: {len(final_products)}件, {search_metadata['performance']['total_time_ms']:.1f}ms")
            
            return final_products, search_metadata
            
        except Exception as e:
            logger.error(f"ハイブリッド検索エラー: {str(e)}")
            import traceback
            logger.error(f"スタックトレース: {traceback.format_exc()}")
            
            # 安全なフォールバック: 空の結果を返す
            search_metadata["error"] = str(e)
            search_metadata["fallback"] = "empty_result"
            
            return [], search_metadata
    
    def _build_structured_filters(self, user_intent: Dict[str, Any]) -> SearchParams:
        """
        意図データから構造化検索パラメータを構築
        
        Args:
            user_intent: 抽出された意図データ
            
        Returns:
            SearchParams オブジェクト
        """
        params = SearchParams()
        
        # 用途フィルター
        if user_intent.get('occasion') and user_intent['occasion'] != 'unknown':
            params.occasion = user_intent['occasion']
        
        # 予算フィルター
        if user_intent.get('budget_min'):
            params.price_min = user_intent['budget_min']
        if user_intent.get('budget_max'):
            params.price_max = user_intent['budget_max']
        
        # ジャンル推定（キーワードから）
        if user_intent.get('keywords'):
            genre_group = self._infer_genre_from_keywords(user_intent['keywords'])
            if genre_group:
                params.genre_group = genre_group
        
        # 相手との関係性に基づく価格帯調整
        if user_intent.get('target_relationship'):
            self._adjust_price_by_relationship(params, user_intent['target_relationship'])
        
        return params
    
    def _infer_genre_from_keywords(self, keywords: List[str]) -> Optional[str]:
        """
        キーワードからジャンルグループを推定
        
        Args:
            keywords: キーワードリスト
            
        Returns:
            推定されたジャンルグループ
        """
        keyword_text = ' '.join(keywords).lower()
        
        # ジャンル推定ルール
        genre_rules = {
            'food': ['食品', '食べ物', 'グルメ', '美味', 'スイーツ', 'お菓子', 'フルーツ'],
            'drink': ['飲み物', 'ドリンク', 'コーヒー', 'お茶', 'ジュース', '酒'],
            'home': ['家庭', '生活', '日用品', 'インテリア', 'キッチン', 'バス', 'タオル'],
            'catalog': ['カタログ', 'ギフト券', 'チケット', '選べる', '好きな'],
            'craft': ['工芸', 'ハンドメイド', '手作り', '伝統', '職人', '和風']
        }
        
        for genre, genre_keywords in genre_rules.items():
            if any(gkw in keyword_text for gkw in genre_keywords):
                return genre
        
        return None
    
    def _adjust_price_by_relationship(self, params: SearchParams, relationship: str):
        """
        関係性に基づいて価格帯を調整
        
        Args:
            params: 検索パラメータ（修正対象）
            relationship: 相手との関係性
        """
        # ユーザーが明示的に予算を指定している場合は、それを尊重する
        # 自動価格調整は予算が未指定の場合のみ適用
        user_specified_budget = (params.price_min is not None and params.price_min > 0) or (params.price_max is not None and params.price_max > 0)
        
        if user_specified_budget:
            # ユーザー指定の予算を尊重し、自動調整は行わない
            return
        
        # 予算未指定の場合のみ関係性に基づく価格調整を適用
        relationship_price_adjustments = {
            'boss': {'min_boost': 1.2, 'max_boost': 2.0},        # 上司: やや高級志向
            'client': {'min_boost': 1.5, 'max_boost': 2.5},      # 取引先: 高級志向
            'colleague': {'min_boost': 1.0, 'max_boost': 1.3},   # 同僚: 標準的
            'friend': {'min_boost': 0.8, 'max_boost': 1.2},      # 友人: やや抑えめ
            'family': {'min_boost': 0.9, 'max_boost': 1.5},      # 家族: 幅広く
        }
        
        if relationship in relationship_price_adjustments:
            adj = relationship_price_adjustments[relationship]
            
            if params.price_min:
                params.price_min = int(params.price_min * adj['min_boost'])
            if params.price_max:
                params.price_max = int(params.price_max * adj['max_boost'])
    
    async def _semantic_search(self, query: str, limit: int) -> List[Dict[str, Any]]:
        """
        セマンティック検索実行
        
        Args:
            query: 検索クエリ
            limit: 取得件数
            
        Returns:
            スコア付き商品リスト
        """
        try:
            # ベクトル検索実行
            docs_with_scores = self.vector_store.similarity_search_with_score(query, k=limit)
            
            results = []
            for doc, score in docs_with_scores:
                # スコア正規化（FAISSは距離なので、類似度に変換）
                similarity = max(0, 1 - score / 2)  # 簡易正規化
                
                results.append({
                    'product_id': doc.metadata.get('product_id', ''),
                    'semantic_score': similarity,
                    'source': 'semantic',
                    'doc': doc
                })
            
            logger.debug(f"セマンティック検索結果: {len(results)}件")
            return results
            
        except Exception as e:
            logger.error(f"セマンティック検索エラー: {str(e)}")
            return []
    
    async def _structured_search(self, params: SearchParams, limit: int) -> List[Dict[str, Any]]:
        """
        構造化検索実行
        
        Args:
            params: 検索パラメータ
            limit: 取得件数
            
        Returns:
            スコア付き商品リスト
        """
        try:
            params.limit = limit
            search_result = self.meilisearch_service.search_items(params)
            
            results = []
            for item in search_result.hits:
                # 構造化スコア計算（価格適合性、評価など）
                structured_score = self._calculate_structured_score(item, params)
                
                results.append({
                    'product_id': item.id,
                    'structured_score': structured_score,
                    'source': 'structured',
                    'product': item
                })
            
            logger.debug(f"構造化検索結果: {len(results)}件")
            return results
            
        except Exception as e:
            logger.error(f"構造化検索エラー: {str(e)}")
            return []
    
    def _calculate_structured_score(self, item: GiftItem, params: SearchParams) -> float:
        """
        構造化検索のスコア計算
        
        Args:
            item: 商品アイテム
            params: 検索パラメータ
            
        Returns:
            構造化スコア (0.0-1.0)
        """
        score = 0.0
        factors = 0
        
        # 価格適合性 (0.4の重み)
        if params.price_min or params.price_max:
            price_score = self._price_compatibility_score(item.price, params.price_min, params.price_max)
            score += price_score * 0.4
            factors += 0.4
        
        # レビュー評価 (0.3の重み)
        if hasattr(item, 'review_average') and item.review_average:
            review_score = min(item.review_average / 5.0, 1.0)
            score += review_score * 0.3
            factors += 0.3
        
        # レビュー数（人気度） (0.2の重み)
        if hasattr(item, 'review_count') and item.review_count:
            # レビュー数を対数変換してスコア化
            import math
            popularity_score = min(math.log(item.review_count + 1) / math.log(100), 1.0)
            score += popularity_score * 0.2
            factors += 0.2
        
        # 用途適合性 (0.1の重み)
        if params.occasion and hasattr(item, 'occasion') and item.occasion == params.occasion:
            score += 1.0 * 0.1
            factors += 0.1
        
        # 正規化
        return score / factors if factors > 0 else 0.5
    
    def _price_compatibility_score(self, price: int, min_price: Optional[int], max_price: Optional[int]) -> float:
        """
        価格適合性スコア計算
        
        Args:
            price: 商品価格
            min_price: 最低価格
            max_price: 最高価格
            
        Returns:
            価格適合性スコア (0.0-1.0)
        """
        if min_price is None and max_price is None:
            return 1.0
        
        # 範囲内かチェック
        if min_price and price < min_price:
            return 0.0
        if max_price and price > max_price:
            return 0.0
        
        # 範囲内での最適性計算
        if min_price and max_price:
            range_center = (min_price + max_price) / 2
            range_width = max_price - min_price
            
            # 中心に近いほど高スコア
            distance_from_center = abs(price - range_center)
            normalized_distance = distance_from_center / (range_width / 2) if range_width > 0 else 0
            
            return max(0, 1 - normalized_distance * 0.5)  # 中心で1.0、端で0.5
        
        return 1.0
    
    def _merge_and_score(
        self,
        semantic_results: List[Dict[str, Any]],
        structured_results: List[Dict[str, Any]],
        user_intent: Dict[str, Any],
        query: str
    ) -> List[Dict[str, Any]]:
        """
        セマンティック検索と構造化検索の結果をシンプルにマージ（一時的な修正）
        
        Args:
            semantic_results: セマンティック検索結果
            structured_results: 構造化検索結果
            user_intent: ユーザー意図
            query: 検索クエリ
            
        Returns:
            統合スコア付き商品リスト
        """
        try:
            # まずは構造化検索の結果を優先（既に予算フィルタされているため）
            results = []
            
            logger.info(f"構造化検索結果数: {len(structured_results)}")
            
            # 構造化検索結果を処理
            for i, result in enumerate(structured_results[:3]):  # 最大3件
                logger.debug(f"構造化結果{i}: type={type(result)}, keys={list(result.keys()) if isinstance(result, dict) else 'not dict'}")
                
                if isinstance(result, dict) and 'product' in result:
                    # 期待される辞書形式の場合
                    product = result['product']
                    results.append({
                        'product': product,
                        'hybrid_score': 1.0 - (i * 0.1),  # 順位ベーススコア
                        'sources': ['structured']
                    })
                    logger.info(f"商品追加: {product.title[:30]}... - {product.price}円")
                elif hasattr(result, 'id'):
                    # GiftItemオブジェクトが直接来た場合
                    results.append({
                        'product': result,
                        'hybrid_score': 1.0 - (i * 0.1),
                        'sources': ['structured']
                    })
                    logger.info(f"商品追加(直接): {result.title[:30]}... - {result.price}円")
                else:
                    logger.warning(f"不明な結果形式: {type(result)}")
            
            logger.info(f"シンプルマージ完了: {len(results)}件")
            return results
            
        except Exception as e:
            logger.error(f"シンプルマージエラー: {e}")
            # 最低限の結果を返す
            simple_results = []
            for result in structured_results[:3]:
                if hasattr(result, 'id'):
                    simple_results.append({
                        'product': result,
                        'hybrid_score': 0.5
                    })
            return simple_results
    
    def _calculate_intent_boost(self, product: GiftItem, user_intent: Dict[str, Any]) -> float:
        """
        商品の意図適合性ブーストを計算
        
        Args:
            product: 商品
            user_intent: ユーザー意図
            
        Returns:
            意図ブースト値 (0.0-1.0)
        """
        boost = 0.0
        
        # キーワード一致チェック
        if user_intent.get('keywords'):
            title_lower = product.title.lower()
            keyword_matches = sum(1 for kw in user_intent['keywords'] if kw.lower() in title_lower)
            keyword_ratio = keyword_matches / len(user_intent['keywords'])
            boost += keyword_ratio * 0.4
        
        # 価格適合性チェック
        min_price = user_intent.get('budget_min')
        max_price = user_intent.get('budget_max')
        if min_price or max_price:
            price_score = self._price_compatibility_score(product.price, min_price, max_price)
            boost += price_score * 0.3
        
        # 用途一致チェック
        if (user_intent.get('occasion') and 
            hasattr(product, 'occasion') and 
            product.occasion == user_intent['occasion']):
            boost += 0.3
        
        return min(boost, 1.0)
    
    def _calculate_hybrid_score(self, item: Dict[str, Any]) -> float:
        """
        統合スコア計算
        
        Args:
            item: マージ済みアイテム
            
        Returns:
            統合スコア
        """
        semantic_score = item.get('semantic_score', 0)
        structured_score = item.get('structured_score', 0)
        intent_boost = item.get('intent_boost', 0)
        
        # 重み付き平均
        base_score = (
            semantic_score * self.search_weights['semantic_weight'] +
            structured_score * self.search_weights['structured_weight']
        )
        
        # 意図ブーストを適用
        final_score = base_score + (intent_boost * self.search_weights['intent_boost'])
        
        # 複数ソースからのアイテムにボーナス
        if len(item.get('sources', [])) > 1:
            final_score *= 1.1  # 10%ボーナス
        
        return min(final_score, 1.0)
    
    def _intent_compatibility_filter(
        self, 
        merged_results: List[Dict[str, Any]], 
        user_intent: Dict[str, Any]
    ) -> List[Dict[str, Any]]:
        """
        意図適合性による最終フィルタリング
        
        Args:
            merged_results: マージ済み結果
            user_intent: ユーザー意図
            
        Returns:
            フィルタリング済み結果
        """
        # 基本的にはすべての結果を通す（Phase 1で基本的なフィルタリングは済み）
        # 明らかに不適切な商品のみ除外
        
        filtered = []
        for item in merged_results:
            if self._is_appropriate_product(item, user_intent):
                filtered.append(item)
        
        return filtered
    
    def _is_appropriate_product(self, item: Dict[str, Any], user_intent: Dict[str, Any]) -> bool:
        """
        商品が意図に適切かチェック
        
        Args:
            item: 商品アイテム
            user_intent: ユーザー意図
            
        Returns:
            適切性フラグ
        """
        # 基本的なチェック
        if not item.get('product'):
            return False
        
        product = item['product']
        
        # 価格範囲外の商品を除外
        if user_intent.get('budget_max') and product.price > user_intent['budget_max'] * 1.5:
            return False
        
        if user_intent.get('budget_min') and product.price < user_intent['budget_min'] * 0.5:
            return False
        
        return True
    
    def _calculate_rrf_scores(self, semantic_results: List[Dict], structured_results: List[Dict], k: int = 60) -> List[Dict]:
        """
        RRF（Reciprocal Rank Fusion）によるスコア統合
        
        Args:
            semantic_results: セマンティック検索結果（スコア付き）
            structured_results: 構造化検索結果（ランク付き）
            k: RRFパラメータ（通常60）
            
        Returns:
            統合されたスコア付き結果
        """
        # 商品IDごとの統合スコアを計算
        combined_scores = {}
        
        logger.debug(f"セマンティック検索結果サンプル: {semantic_results[:2] if semantic_results else 'なし'}")
        logger.debug(f"構造化検索結果サンプル: {structured_results[:2] if structured_results else 'なし'}")
        
        # セマンティック検索のRRFスコア
        for rank, result in enumerate(semantic_results):
            # resultがGiftItemオブジェクトの場合とDict型の場合を考慮
            if hasattr(result, 'id'):
                product_id = result.id
                product = result
            elif isinstance(result, dict):
                product_id = result.get('id', result.get('product', {}).get('id', ''))
                product = result.get('product', result)
            else:
                logger.warning(f"不明なsemantic result形式: {type(result)}")
                continue
                
            if product_id:
                rrf_score = 1.0 / (k + rank + 1)
                if product_id not in combined_scores:
                    combined_scores[product_id] = {'product': product, 'scores': {}}
                combined_scores[product_id]['scores']['semantic'] = rrf_score
        
        # 構造化検索のRRFスコア
        for rank, result in enumerate(structured_results):
            # resultがGiftItemオブジェクトの場合とDict型の場合を考慮
            if hasattr(result, 'id'):
                product_id = result.id
                product = result
            elif isinstance(result, dict):
                product_id = result.get('id', result.get('product', {}).get('id', ''))
                product = result.get('product', result)
            else:
                logger.warning(f"不明なstructured result形式: {type(result)}")
                continue
                
            if product_id:
                rrf_score = 1.0 / (k + rank + 1)
                if product_id not in combined_scores:
                    combined_scores[product_id] = {'product': product, 'scores': {}}
                combined_scores[product_id]['scores']['structured'] = rrf_score
        
        # 最終スコア計算：重み付き和 + レビュー加点 + 多様性ペナルティ
        final_results = []
        merchant_count = {}
        
        for product_id, data in combined_scores.items():
            product = data['product']
            scores = data['scores']
            
            # 基本スコア（重み付き和）
            semantic_score = scores.get('semantic', 0.0)
            structured_score = scores.get('structured', 0.0)
            base_score = 0.6 * semantic_score + 0.4 * structured_score
            
            # レビュー加点
            review_bonus = self._calculate_review_bonus(product)
            
            # 多様性ペナルティ（同一ショップ連打の抑制）
            merchant = getattr(product, 'merchant', 'unknown') if hasattr(product, 'merchant') else product.get('merchant', 'unknown') if isinstance(product, dict) else 'unknown'
            merchant_penalty = self._calculate_merchant_penalty(merchant, merchant_count)
            
            # 最終スコア
            final_score = base_score + review_bonus - merchant_penalty
            
            final_results.append({
                'product': product,
                'final_score': final_score,
                'score_breakdown': {
                    'semantic': semantic_score,
                    'structured': structured_score,
                    'base_score': base_score,
                    'review_bonus': review_bonus,
                    'merchant_penalty': merchant_penalty
                }
            })
            
            # ショップ件数をカウント
            merchant_count[merchant] = merchant_count.get(merchant, 0) + 1
        
        # スコア降順でソート
        final_results.sort(key=lambda x: x['final_score'], reverse=True)
        
        logger.info(f"RRFスコア統合完了: {len(final_results)}件")
        if final_results:
            logger.info(f"トップ商品スコア: {final_results[0]['final_score']:.4f}")
        
        return final_results
    
    def _calculate_review_bonus(self, product) -> float:
        """
        レビュー評価による加点計算
        
        Args:
            product: 商品データ（GiftItemまたは辞書）
            
        Returns:
            レビュー加点スコア
        """
        # GiftItemオブジェクトか辞書かを判定して適切にアクセス
        if hasattr(product, 'review_average'):
            review_average = product.review_average or 0.0
            review_count = product.review_count or 0
        elif isinstance(product, dict):
            review_average = product.get('review_average', 0.0)
            review_count = product.get('review_count', 0)
        else:
            review_average = 0.0
            review_count = 0
        
        # レビュー平均による加点（最大0.25点）
        avg_bonus = min(0.05 * review_average, 0.25) if review_average > 0 else 0.0
        
        # レビュー数による加点（最大0.1点）
        count_bonus = min(0.00002 * review_count, 0.1) if review_count > 0 else 0.0
        
        return avg_bonus + count_bonus
    
    def _calculate_merchant_penalty(self, merchant: str, merchant_count: Dict[str, int]) -> float:
        """
        同一ショップ連打抑制のためのペナルティ計算
        
        Args:
            merchant: ショップ名
            merchant_count: ショップ別件数辞書
            
        Returns:
            ペナルティスコア
        """
        current_count = merchant_count.get(merchant, 0)
        
        # 2件目以降にペナルティ
        if current_count >= 1:
            # 2件目: -0.1, 3件目: -0.2, ...
            penalty = 0.1 * current_count
            return min(penalty, 0.5)  # 最大ペナルティは0.5
        
        return 0.0