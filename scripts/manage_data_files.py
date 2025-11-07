#!/usr/bin/env python3
"""
データファイル管理ユーティリティ

古い楽天商品データファイルの管理・クリーンアップを行います。
"""

import os
import argparse
from pathlib import Path
from datetime import datetime
from typing import List


def format_file_info(file_path: Path) -> str:
    """ファイル情報をフォーマット"""
    stat = file_path.stat()
    size_mb = stat.st_size / 1024 / 1024
    mtime = datetime.fromtimestamp(stat.st_mtime)
    return f"{file_path.name:<45} | {size_mb:>8.1f}MB | {mtime.strftime('%Y-%m-%d %H:%M:%S')}"


def list_data_files():
    """データファイル一覧表示"""
    data_dir = Path('data')
    if not data_dir.exists():
        print("[ERROR] dataディレクトリが存在しません")
        return
    
    rakuten_files = list(data_dir.glob('rakuten_uchiwai_products_*.json'))
    if not rakuten_files:
        print("📁 楽天商品データファイルが見つかりません")
        return
    
    # 作成日時でソート（新しい順）
    rakuten_files.sort(key=lambda x: x.stat().st_mtime, reverse=True)
    
    print(f"[LIST] 楽天商品データファイル一覧 ({len(rakuten_files)}個)")
    print("=" * 80)
    print(f"{'ファイル名':<45} | {'サイズ':<8} | 作成日時")
    print("-" * 80)
    
    total_size = 0
    for i, file_path in enumerate(rakuten_files):
        status = "最新" if i == 0 else f"{i+1}個前"
        print(f"{status} {format_file_info(file_path)}")
        total_size += file_path.stat().st_size
    
    print("-" * 80)
    print(f"合計: {total_size / 1024 / 1024:.1f}MB")
    
    return rakuten_files


def cleanup_old_files(keep_count: int = 3, dry_run: bool = False, auto_confirm: bool = False):
    """古いファイルをクリーンアップ"""
    print(f"[CLEANUP] 古いファイルクリーンアップ (保持数: {keep_count})")
    
    files = list_data_files()
    if not files or len(files) <= keep_count:
        print(f"[OK] クリーンアップ不要: {len(files) if files else 0}個 <= {keep_count}個")
        return
    
    files_to_delete = files[keep_count:]
    
    print(f"\n[DELETE] 削除対象ファイル ({len(files_to_delete)}個):")
    total_delete_size = 0
    
    for file_path in files_to_delete:
        print(f"  [DEL] {format_file_info(file_path)}")
        total_delete_size += file_path.stat().st_size
    
    print(f"\n削除予定サイズ: {total_delete_size / 1024 / 1024:.1f}MB")
    
    if dry_run:
        print("[DRY-RUN] ドライランモード: 実際の削除は行いません")
        return
    
    # 確認プロンプト（非対話型モードの場合はスキップ）
    if not auto_confirm:
        response = input(f"\n本当に{len(files_to_delete)}個のファイルを削除しますか? [y/N]: ")
        if response.lower() != 'y':
            print("[CANCEL] クリーンアップをキャンセルしました")
            return
    
    # 実際の削除
    deleted_count = 0
    for file_path in files_to_delete:
        try:
            file_path.unlink()
            print(f"[OK] 削除: {file_path.name}")
            deleted_count += 1
        except Exception as e:
            print(f"[ERROR] 削除エラー: {file_path.name} - {e}")
    
    print(f"\n[DONE] クリーンアップ完了: {deleted_count}/{len(files_to_delete)}個削除")


def analyze_disk_usage():
    """ディスク使用量分析"""
    data_dir = Path('data')
    if not data_dir.exists():
        return
    
    print("[DISK] ディスク使用量分析")
    print("=" * 50)
    
    file_types = {
        'rakuten_products': 'rakuten_uchiwai_products_*.json',
        'genre_cache': 'genre_cache.json',
        'mapping_rules': 'genre_mapping_rules.json',
        'settings': 'meili_settings.json',
        'progress': 'fetch_progress.json'
    }
    
    total_size = 0
    for name, pattern in file_types.items():
        files = list(data_dir.glob(pattern))
        if files:
            size = sum(f.stat().st_size for f in files)
            total_size += size
            print(f"{name:<15}: {size / 1024 / 1024:>8.1f}MB ({len(files)}ファイル)")
        else:
            print(f"{name:<15}: {'0.0':>8}MB (0ファイル)")
    
    print("-" * 50)
    print(f"{'総使用量':<15}: {total_size / 1024 / 1024:>8.1f}MB")


def main():
    parser = argparse.ArgumentParser(
        description='データファイル管理ユーティリティ',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
使用例:
  # ファイル一覧表示
  python manage_data_files.py --list

  # ディスク使用量分析
  python manage_data_files.py --analyze

  # 5個まで保持してクリーンアップ
  python manage_data_files.py --cleanup --keep 5

  # ドライラン（削除シミュレーション）
  python manage_data_files.py --cleanup --keep 5 --dry-run

  # 自動実行（確認プロンプトなし）
  python manage_data_files.py --cleanup --keep 5 --auto-confirm
        """
    )
    
    parser.add_argument(
        '--list',
        action='store_true',
        help='データファイル一覧を表示'
    )
    
    parser.add_argument(
        '--cleanup',
        action='store_true',
        help='古いファイルをクリーンアップ'
    )
    
    parser.add_argument(
        '--analyze',
        action='store_true',
        help='ディスク使用量を分析'
    )
    
    parser.add_argument(
        '--keep',
        type=int,
        default=3,
        help='保持するファイル数（デフォルト: 3）'
    )
    
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='削除せずにシミュレーションのみ実行'
    )
    
    parser.add_argument(
        '--auto-confirm',
        action='store_true',
        help='削除確認プロンプトをスキップ（自動実行用）'
    )
    
    args = parser.parse_args()
    
    if not any([args.list, args.cleanup, args.analyze]):
        # デフォルトは一覧表示
        args.list = True
    
    if args.list:
        list_data_files()
    
    if args.analyze:
        if args.list:
            print()
        analyze_disk_usage()
    
    if args.cleanup:
        if args.list or args.analyze:
            print()
        cleanup_old_files(args.keep, args.dry_run, args.auto_confirm)


if __name__ == '__main__':
    main()