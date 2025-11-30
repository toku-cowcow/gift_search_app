#!/usr/bin/env python3
"""
UchiGift 商品データ自動更新システム

このスクリプトの機能:
1. 楽天API商品取得 (fetch_rakuten_products.py)
2. ジャンル分析・自動分類 (analyze_genres.py)
3. ユーザー確認・個別調整 (インタラクティブ)
4. Meilisearch再インデックス (index_meili_products.py)

使用方法:
python auto_update_products.py [--no-fetch] [--no-interactive] [--max-items 5000]
"""

import os
import sys
import json
import time
import subprocess
import argparse
from pathlib import Path
from typing import Dict, List, Set, Optional
from datetime import datetime

# .envファイルを最初に読み込み
from dotenv import load_dotenv
# プロジェクトルートの.envファイルを読み込み
load_dotenv(Path(__file__).parent.parent / '.env')


class HAREGiftAutoUpdater:
    def __init__(self, no_fetch: bool = False, no_interactive: bool = False, max_items: int = 5000, 
                 keep_backups: int = 5, cleanup_old: bool = True):
        self.no_fetch = no_fetch
        self.no_interactive = no_interactive
        self.max_items = max_items
        self.keep_backups = keep_backups  # 保持するバックアップ数
        self.cleanup_old = cleanup_old    # 古いファイル自動削除
        self.data_dir = Path('data')
        self.scripts_dir = Path('.')
        
        # ステップ実行状況
        self.steps = {
            'cleanup': False,
            'fetch': False,
            'analyze': False,
            'auto_map': False,
            'interactive': False,
            'reindex': False
        }

    def log(self, message: str, level: str = "INFO"):
        """ログ出力"""
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        print(f"[{timestamp}] {level}: {message}")

    def run_command(self, command: List[str], description: str) -> bool:
        """外部コマンド実行"""
        self.log(f"実行中: {description}")
        try:
            result = subprocess.run(command, capture_output=True, text=True)
            if result.returncode != 0:
                self.log(f"エラー: {description} 失敗", "ERROR")
                self.log(f"エラー詳細: {result.stderr}", "ERROR")
                return False
            self.log(f"完了: {description}")
            return True
        except Exception as e:
            self.log(f"例外エラー: {description} - {e}", "ERROR")
            return False

    def step_0_cleanup_old_files(self):
        """ステップ0: 古いデータファイルのクリーンアップ"""
        if not self.cleanup_old:
            self.log("ファイルクリーンアップをスキップします")
            self.steps['cleanup'] = True
            return
        
        self.log("ステップ0: 古いデータファイルのクリーンアップ開始")
        
        # manage_data_files.pyを使用してクリーンアップ実行
        command = [
            'python', 'manage_data_files.py', 
            '--cleanup', 
            '--keep', str(self.keep_backups),
            '--auto-confirm'  # 自動実行のため確認プロンプトをスキップ
        ]
        
        if self.run_command(command, f"古いファイルクリーンアップ（{self.keep_backups}個保持）"):
            self.steps['cleanup'] = True
            self.log(f"クリーンアップ完了: {self.keep_backups}個のファイルを保持")
        else:
            self.log("クリーンアップに失敗しました", "ERROR")
            # クリーンアップ失敗でも処理を継続
            self.steps['cleanup'] = True

    def step_1_fetch_products(self) -> Optional[str]:
        """ステップ1: 楽天商品データ取得"""
        if self.no_fetch:
            self.log("楽天API取得をスキップします")
            # 最新のファイルを検索（新しいフォルダ構造に対応）
            rakuten_dir = self.data_dir / 'sources' / 'rakuten'
            existing_files = list(rakuten_dir.glob('rakuten_haregift_products_*.json'))
            if not existing_files:
                # 旧ファイル名パターンも検索
                existing_files = list(rakuten_dir.glob('rakuten_uchiwai_products_*.json'))
                if not existing_files:
                    # ルートフォルダでも検索（互換性）
                    existing_files = list(self.data_dir.glob('rakuten_*_products_*.json'))
            
            if existing_files:
                latest_file = max(existing_files, key=lambda x: x.stat().st_mtime)
                self.log(f"既存ファイルを使用: {latest_file.name}")
                self.steps['fetch'] = True
                return str(latest_file)
            else:
                self.log("既存データファイルが見つかりません", "ERROR")
                return None

        self.log("ステップ1: 楽天商品データ取得開始")
        
        # fetch_rakuten_products.pyを実行
        if not self.run_command(['python', 'fetch_rakuten_products.py'], '楽天商品データ取得'):
            return None
        
        # 新しく作成されたファイルを検索（新しいフォルダ構造）
        rakuten_dir = self.data_dir / 'sources' / 'rakuten'
        latest_files = list(rakuten_dir.glob('rakuten_haregift_products_*.json'))
        if not latest_files:
            # 旧ファイル名パターンも検索
            latest_files = list(rakuten_dir.glob('rakuten_uchiwai_products_*.json'))
            if not latest_files:
                # ルートフォルダでも検索（互換性）
                latest_files = list(self.data_dir.glob('rakuten_*_products_*.json'))
        
        if not latest_files:
            self.log("楽天データファイルが作成されませんでした", "ERROR")
            return None
        
        latest_file = max(latest_files, key=lambda x: x.stat().st_mtime)
        self.log(f"ステップ1完了: {latest_file.name}")
        self.steps['fetch'] = True
        return str(latest_file)

    def step_2_analyze_genres(self) -> Dict:
        """ステップ2: ジャンル分析"""
        self.log("ステップ2: ジャンル分析開始")
        
        # analyze_genres.pyのロジックを直接実行
        from analyze_genres import load_genre_cache, load_mapping_rules, suggest_category
        
        genre_cache = load_genre_cache()
        rules = load_mapping_rules()
        exact_mappings = rules.get('exact_mappings', {})
        
        if not genre_cache:
            self.log("genre_cache.json が見つかりません", "ERROR")
            return {}
        
        # 未マッピングジャンルを検出
        unmapped_genres = []
        for genre_id, genre_name in genre_cache.items():
            if genre_name and genre_name not in exact_mappings:
                suggestion = suggest_category(genre_name, rules)
                unmapped_genres.append({
                    'id': genre_id,
                    'name': genre_name,
                    'suggestion': suggestion
                })
        
        # 分類候補別にグループ化
        by_suggestion = {}
        for genre in unmapped_genres:
            suggestion = genre['suggestion']
            if suggestion not in by_suggestion:
                by_suggestion[suggestion] = []
            by_suggestion[suggestion].append(genre)
        
        self.log(f"総ジャンル数: {len(genre_cache)}")
        self.log(f"マッピング済み: {len(exact_mappings)}")
        self.log(f"未マッピング: {len(unmapped_genres)}")
        
        for suggestion, genres in by_suggestion.items():
            self.log(f"  {suggestion}: {len(genres)}件")
        
        self.log("ステップ2完了: ジャンル分析")
        self.steps['analyze'] = True
        return by_suggestion

    def step_3_auto_mapping(self, analysis_result: Dict) -> Dict[str, str]:
        """ステップ3: 自動マッピング提案・適用"""
        self.log("ステップ3: 自動マッピング適用開始")
        
        auto_mappings = {}
        
        # 信頼度の高いカテゴリを自動適用
        trusted_categories = ['food', 'drink', 'home', 'catalog', 'craft']
        
        for category in trusted_categories:
            if category in analysis_result:
                genres = analysis_result[category]
                self.log(f"{category}カテゴリ: {len(genres)}件を自動マッピング")
                
                for genre in genres[:20]:  # 上位20件まで自動適用
                    auto_mappings[genre['name']] = category
                    self.log(f"  追加: {genre['name']} → {category}")
        
        # ルールファイルを更新
        if auto_mappings:
            self.update_mapping_rules(auto_mappings)
            self.log(f"[OK] ステップ3完了: {len(auto_mappings)}件を自動マッピング")
        else:
            self.log("[OK] ステップ3完了: 新しい自動マッピングなし")
        
        self.steps['auto_map'] = True
        return auto_mappings

    def step_4_interactive_mapping(self, analysis_result: Dict) -> Dict[str, str]:
        """ステップ4: インタラクティブマッピング（オプション）"""
        if self.no_interactive:
            self.log("インタラクティブモードをスキップします")
            self.steps['interactive'] = True
            return {}

        self.log("🎨 ステップ4: インタラクティブマッピング開始")
        
        # 未処理のジャンル（unknownカテゴリ）のみを対象
        unknown_genres = analysis_result.get('unknown', [])
        if not unknown_genres:
            self.log("インタラクティブ処理が必要なジャンルがありません")
            self.steps['interactive'] = True
            return {}
        
        self.log(f"未分類ジャンル {len(unknown_genres)}件の確認を開始します")
        self.log("(Enterでスキップ、q で終了)")
        
        new_mappings = {}
        categories = ['food', 'drink', 'home', 'catalog', 'craft', 'exclude']
        
        for i, genre in enumerate(unknown_genres[:10], 1):  # 最初の10件のみ
            print(f"\n[{i}/{min(10, len(unknown_genres))}] ジャンル: '{genre['name']}'")
            print(f"選択肢: {', '.join(categories)}")
            
            choice = input(f"分類を選択 (Enterでスキップ): ").strip().lower()
            
            if choice == 'q':
                break
            elif choice == '':
                continue
            elif choice in categories:
                if choice != 'exclude':
                    new_mappings[genre['name']] = choice
                    print(f"[OK] '{genre['name']}' → {choice}")
                else:
                    print(f"➡️ '{genre['name']}' を除外")
            else:
                print(f"無効な選択: {choice}")
        
        if new_mappings:
            self.update_mapping_rules(new_mappings)
            self.log(f"[OK] ステップ4完了: {len(new_mappings)}件をインタラクティブマッピング")
        else:
            self.log("[OK] ステップ4完了: インタラクティブマッピングなし")
        
        self.steps['interactive'] = True
        return new_mappings

    def step_4_5_merge_data(self, rakuten_file: str) -> Optional[str]:
        """ステップ4.5: 楽天商品データと手動商品データを統合"""
        self.log("ステップ4.5: データ統合開始")
        
        # 手動商品データのパス
        manual_file = self.data_dir / 'sources' / 'others' / 'manual_products.json'
        
        if not manual_file.exists():
            self.log(f"手動商品データが見つかりません: {manual_file}", "WARNING")
            self.log("楽天データのみでインデックスを続行します")
            return rakuten_file
        
        try:
            # 楽天データ読み込み
            with open(rakuten_file, 'r', encoding='utf-8') as f:
                rakuten_data = json.load(f)
            self.log(f"楽天商品: {len(rakuten_data)}件")
            
            # 楽天商品のoccasionをoccasions配列に変換
            for item in rakuten_data:
                if 'occasion' in item and 'occasions' not in item:
                    # occasionフィールドをoccasions配列に変換
                    item['occasions'] = [item['occasion']]
            
            # 楽天商品の最新updated_atを取得
            max_updated_at = max((item.get('updated_at', 0) for item in rakuten_data), default=0)
            
            # 手動データ読み込み（空のエントリを除外）
            with open(manual_file, 'r', encoding='utf-8') as f:
                manual_data = json.load(f)
            # IDが空でない有効なデータのみフィルタ
            manual_data = [item for item in manual_data if item.get('id', '').strip()]
            
            # 手動商品のupdated_atを楽天商品の最新より1分後に設定
            manual_updated_at = max_updated_at + 60  # 60秒 = 1分
            for item in manual_data:
                item['updated_at'] = manual_updated_at
            
            self.log(f"手動商品: {len(manual_data)}件")
            self.log(f"手動商品のupdated_at: {manual_updated_at} (楽天最新+60秒)")
            
            # データ統合
            merged_data = rakuten_data + manual_data
            self.log(f"統合後: {len(merged_data)}件")
            
            # 統合ファイルを保存
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            merged_file = self.data_dir / 'sources' / 'merged' / f'merged_products_{timestamp}.json'
            merged_file.parent.mkdir(parents=True, exist_ok=True)
            
            with open(merged_file, 'w', encoding='utf-8') as f:
                json.dump(merged_data, f, ensure_ascii=False, indent=2)
            
            self.log(f"統合ファイル作成: {merged_file.name}")
            
            # 古いmerged_products_*.jsonファイルを削除（5つまで保持）
            merged_dir = self.data_dir / 'sources' / 'merged'
            existing_merged_files = sorted(
                merged_dir.glob('merged_products_*.json'),
                key=lambda x: x.stat().st_mtime,
                reverse=True
            )
            
            if len(existing_merged_files) > self.keep_backups:
                files_to_delete = existing_merged_files[self.keep_backups:]
                for old_file in files_to_delete:
                    try:
                        old_file.unlink()
                        self.log(f"古い統合ファイル削除: {old_file.name}")
                    except Exception as e:
                        self.log(f"ファイル削除エラー: {old_file.name} - {e}", "WARNING")
            
            self.log(f"ステップ4.5完了: 楽天{len(rakuten_data)}件 + 手動{len(manual_data)}件 = 統合{len(merged_data)}件")
            
            return str(merged_file)
            
        except Exception as e:
            self.log(f"データ統合エラー: {e}", "ERROR")
            self.log("楽天データのみでインデックスを続行します", "WARNING")
            return rakuten_file

    def step_5_reindex(self, data_file: str) -> bool:
        """ステップ5: Meilisearch再インデックス（ローカル＋本番環境）"""
        self.log("[Step5] Meilisearch再インデックス開始")
        
        # MeiliSearch設定（環境変数から取得）
        meili_url = os.getenv('MEILI_URL')
        meili_key = os.getenv('MEILI_KEY')
        
        if not meili_url or not meili_key:
            raise ValueError("MEILI_URL または MEILI_KEY 環境変数が設定されていません")
        
        self.log(f"MeiliSearch: {meili_url}")
        
        # MeiliSearch処理
        self.log("MeiliSearch: 既存インデックスを削除中...")
        delete_cmd = [
            'python', '-c',
            f"import requests; requests.delete('{meili_url}/indexes/items', headers={{'Authorization': 'Bearer {meili_key}'}}); print('インデックス削除完了')"
        ]
        
        if not self.run_command(delete_cmd, "既存インデックス削除"):
            self.log("インデックス削除に失敗しましたが続行します", "WARNING")
        
        time.sleep(2)  # Meilisearch処理待機
        
        # データソースの判定（統合データかどうか）
        is_merged = 'merged_products' in data_file
        source = 'rakuten' if not is_merged else 'rakuten'  # index_meili_products.pyはrakutenとして処理
        
        # MeiliSearch再インデックス実行
        self.log(f"MeiliSearch: データ投入開始... (source={source}, merged={is_merged})")
        reindex_cmd = [
            'python', 'index_meili_products.py',
            '--source', source,
            '--file', data_file
        ]
        
        if not self.run_command(reindex_cmd, "Meilisearch再インデックス"):
            self.log("再インデックスに失敗", "ERROR")
            return False
        
        time.sleep(5)  # インデックス完了待機
        
        # 結果確認
        self.log("分類結果を確認中...")
        check_cmd = [
            'python', '-c',
            f"import requests; resp = requests.get('{meili_url}/indexes/items/search', params={{'facets': ['genre_group']}}, headers={{'Authorization': 'Bearer {meili_key}'}}); facets = resp.json().get('facetDistribution', {{}}); print('最終ジャンル分布:'); [print(f'  {{k}}: {{v}}個') for k, v in facets.get('genre_group', {{}}).items()]"
        ]
        
        check_success = self.run_command(check_cmd, "分類結果確認")
        
        if check_success:
            self.log("[OK] ステップ5完了: 再インデックス成功")
            self.steps['reindex'] = True
            return True
        
        return False

    def update_mapping_rules(self, new_mappings: Dict[str, str]):
        """ジャンルマッピングルールを更新"""
        rules_file = self.data_dir / 'genre_mapping_rules.json'
        
        try:
            with open(rules_file, 'r', encoding='utf-8') as f:
                rules = json.load(f)
            
            if 'exact_mappings' not in rules:
                rules['exact_mappings'] = {}
            
            rules['exact_mappings'].update(new_mappings)
            
            with open(rules_file, 'w', encoding='utf-8') as f:
                json.dump(rules, f, ensure_ascii=False, indent=2)
            
            self.log(f"ルールファイル更新: {len(new_mappings)}件追加")
            
        except Exception as e:
            self.log(f"ルールファイル更新エラー: {e}", "ERROR")

    def run_full_pipeline(self):
        """完全パイプライン実行"""
        self.log("HAREGift 商品データ自動更新システム開始")
        self.log("=" * 60)
        
        start_time = time.time()
        
        try:
            # ステップ0: ファイルクリーンアップ
            self.step_0_cleanup_old_files()
            
            # ステップ1: 商品データ取得
            data_file = self.step_1_fetch_products()
            if not data_file:
                raise Exception("商品データ取得に失敗")
            
            # ステップ2: ジャンル分析
            analysis_result = self.step_2_analyze_genres()
            if not analysis_result:
                raise Exception("ジャンル分析に失敗")
            
            # ステップ3: 自動マッピング
            auto_mappings = self.step_3_auto_mapping(analysis_result)
            
            # ステップ4: インタラクティブマッピング
            interactive_mappings = self.step_4_interactive_mapping(analysis_result)
            
            # ステップ4.5: データ統合（楽天 + 手動商品）
            merged_file = self.step_4_5_merge_data(data_file)
            if not merged_file:
                raise Exception("データ統合に失敗")
            data_file = merged_file  # 以降は統合ファイルを使用
            
            # ステップ5: 再インデックス
            if not self.step_5_reindex(data_file):
                raise Exception("再インデックスに失敗")
            
            # ディスク使用量の確認
            self.report_disk_usage()
            
            # 完了レポート
            elapsed_time = time.time() - start_time
            self.log("=" * 60)
            self.log("自動更新システム完了!")
            self.log(f"実行時間: {elapsed_time:.1f}秒")
            self.log(f"データファイル: {data_file}")
            self.log(f"自動マッピング: {len(auto_mappings)}件")
            self.log(f"手動マッピング: {len(interactive_mappings)}件")
            
            # ステップ実行状況
            self.log("\n実行ステップ:")
            for step, completed in self.steps.items():
                status = "OK" if completed else "NG"
                self.log(f"  {status} {step}")
            
            return True
            
        except Exception as e:
            self.log(f"パイプライン実行エラー: {e}", "ERROR")
            return False

    def report_disk_usage(self):
        """ディスク使用量レポート"""
        try:
            rakuten_files = list(self.data_dir.glob('rakuten_uchiwai_products_*.json'))
            total_size = sum(f.stat().st_size for f in rakuten_files)
            total_size_mb = total_size / 1024 / 1024
            
            self.log(f"ディスク使用量: {total_size_mb:.1f}MB ({len(rakuten_files)}ファイル)")
            
            if len(rakuten_files) > 0:
                latest_file = max(rakuten_files, key=lambda x: x.stat().st_mtime)
                latest_size_mb = latest_file.stat().st_size / 1024 / 1024
                self.log(f"最新ファイル: {latest_file.name} ({latest_size_mb:.1f}MB)")
                
        except Exception as e:
            self.log(f"ディスク使用量計算エラー: {e}", "WARNING")


def main():
    """メイン実行関数"""
    parser = argparse.ArgumentParser(
        description='HAREGift 商品データ自動更新システム',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
使用例:
  # 完全自動更新（推奨、5個バックアップ保持）
  python auto_update_products.py

  # 既存データで更新（楽天API取得スキップ）
  python auto_update_products.py --no-fetch

  # インタラクティブモードなし（完全自動）
  python auto_update_products.py --no-interactive

  # 取得件数指定
  python auto_update_products.py --max-items 10000

  # バックアップ保持数指定
  python auto_update_products.py --keep-backups 10

  # ファイル削除無効化
  python auto_update_products.py --no-cleanup
        """
    )
    
    parser.add_argument(
        '--no-fetch',
        action='store_true',
        help='楽天API取得をスキップ（既存データを使用）'
    )
    
    parser.add_argument(
        '--no-interactive',
        action='store_true',
        help='インタラクティブモードをスキップ（完全自動化）'
    )
    
    parser.add_argument(
        '--max-items',
        type=int,
        default=5000,
        help='最大取得件数（デフォルト: 5000）'
    )
    
    parser.add_argument(
        '--keep-backups',
        type=int,
        default=5,
        help='保持するバックアップファイル数（デフォルト: 5）'
    )
    
    parser.add_argument(
        '--no-cleanup',
        action='store_true',
        help='古いファイルの自動削除を無効化'
    )
    
    args = parser.parse_args()
    
    # システム初期化・実行
    updater = HAREGiftAutoUpdater(
        no_fetch=args.no_fetch,
        no_interactive=args.no_interactive,
        max_items=args.max_items,
        keep_backups=args.keep_backups,
        cleanup_old=not args.no_cleanup
    )
    
    success = updater.run_full_pipeline()
    sys.exit(0 if success else 1)


if __name__ == '__main__':
    main()