#!/usr/bin/env python3
"""
ジャンル分類管理ツール

このスクリプトの機能:
- genre_cache.json内の未分類ジャンルを検出
- 新ジャンルの分類候補を提案
- ジャンルマッピングルールの更新支援
"""

import json
import os
from pathlib import Path
from collections import Counter
from typing import Dict, List, Set


def load_genre_cache() -> Dict[str, str]:
    """ジャンルキャッシュを読み込み"""
    cache_file = Path('data/cache/genre_cache.json')
    if cache_file.exists():
        with open(cache_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def load_mapping_rules() -> Dict:
    """ジャンルマッピングルールを読み込み"""
    rules_file = Path('data/cache/genre_mapping_rules.json')
    if rules_file.exists():
        with open(rules_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def suggest_category(genre_name: str, rules: Dict) -> str:
    """ジャンル名から分類候補を提案"""
    name_lower = genre_name.lower()
    
    # キーワードベース推定
    for category in ['food', 'drink', 'home', 'catalog', 'craft']:
        keywords = rules.get(f'{category}_keywords', [])
        for keyword in keywords:
            if keyword in genre_name:
                return category
    
    # 除外パターン
    for exclude_pattern in rules.get('exclude_patterns', []):
        if exclude_pattern in genre_name:
            return 'exclude'
    
    return 'unknown'


def analyze_unmapped_genres():
    """未分類ジャンルの分析とレポート生成"""
    print("🔍 ジャンル分類状況を分析中...")
    
    # データ読み込み
    genre_cache = load_genre_cache()
    rules = load_mapping_rules()
    exact_mappings = rules.get('exact_mappings', {})
    
    if not genre_cache:
        print("❌ genre_cache.json が見つかりません")
        return
    
    # 統計情報
    total_genres = len(genre_cache)
    mapped_genres = len(exact_mappings)
    
    print(f"📊 ジャンル統計:")
    print(f"  総ジャンル数: {total_genres}")
    print(f"  マッピング済み: {mapped_genres}")
    print(f"  未マッピング: {total_genres - mapped_genres}")
    
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
    
    if not unmapped_genres:
        print("✅ すべてのジャンルがマッピング済みです！")
        return
    
    # 分類候補別にグループ化
    by_suggestion = {}
    for genre in unmapped_genres:
        suggestion = genre['suggestion']
        if suggestion not in by_suggestion:
            by_suggestion[suggestion] = []
        by_suggestion[suggestion].append(genre)
    
    print(f"\n🎯 未分類ジャンル分析:")
    for suggestion, genres in sorted(by_suggestion.items()):
        print(f"\n【{suggestion}】({len(genres)}件)")
        for genre in sorted(genres, key=lambda x: x['name'])[:10]:  # 上位10件表示
            print(f"  - {genre['name']} (ID: {genre['id']})")
        if len(genres) > 10:
            print(f"  ... 他 {len(genres) - 10} 件")
    
    # 分類候補のサマリー
    print(f"\n📈 分類候補サマリー:")
    for suggestion, count in sorted(Counter([g['suggestion'] for g in unmapped_genres]).items()):
        print(f"  {suggestion}: {count}件")
    
    # 更新提案の生成
    print(f"\n💡 更新提案:")
    print("以下のジャンルを exact_mappings に追加することを検討してください:")
    
    # 信頼度の高い提案のみ表示
    high_confidence = []
    for suggestion in ['food', 'drink', 'home', 'catalog', 'craft']:
        if suggestion in by_suggestion:
            for genre in by_suggestion[suggestion][:5]:  # 上位5件のみ
                high_confidence.append(f'    "{genre["name"]}": "{suggestion}",')
    
    if high_confidence:
        print("\n```json")
        for line in high_confidence:
            print(line)
        print("```")


def update_mapping_rules(new_mappings: Dict[str, str]):
    """新しいマッピングをルールファイルに追加"""
    rules_file = Path('data/genre_mapping_rules.json')
    
    if not rules_file.exists():
        print("❌ ジャンルマッピングルールファイルが見つかりません")
        return
    
    with open(rules_file, 'r', encoding='utf-8') as f:
        rules = json.load(f)
    
    # exact_mappings を更新
    if 'exact_mappings' not in rules:
        rules['exact_mappings'] = {}
    
    rules['exact_mappings'].update(new_mappings)
    
    # ファイルに保存
    with open(rules_file, 'w', encoding='utf-8') as f:
        json.dump(rules, f, ensure_ascii=False, indent=2)
    
    print(f"✅ {len(new_mappings)}件のマッピングを追加しました")


def interactive_mapping():
    """対話型マッピング更新"""
    print("🎯 対話型ジャンルマッピング更新")
    print("未分類ジャンルを1つずつ確認します (q で終了)")
    
    genre_cache = load_genre_cache()
    rules = load_mapping_rules()
    exact_mappings = rules.get('exact_mappings', {})
    
    new_mappings = {}
    categories = ['food', 'drink', 'home', 'catalog', 'craft', 'exclude']
    
    for genre_id, genre_name in genre_cache.items():
        if genre_name and genre_name not in exact_mappings:
            suggestion = suggest_category(genre_name, rules)
            
            print(f"\n📝 ジャンル: '{genre_name}'")
            print(f"   提案: {suggestion}")
            print(f"   選択肢: {', '.join(categories)}")
            
            choice = input(f"   分類を選択 [{suggestion}]: ").strip().lower()
            
            if choice == 'q':
                break
            elif choice == '':
                choice = suggestion
            elif choice not in categories:
                print(f"   無効な選択: {choice}")
                continue
            
            if choice != 'exclude':
                new_mappings[genre_name] = choice
                print(f"   ✅ '{genre_name}' → {choice}")
            else:
                print(f"   ➡️ '{genre_name}' を除外")
    
    if new_mappings:
        print(f"\n📝 {len(new_mappings)}件の新しいマッピングを保存しますか? (y/N): ", end="")
        confirm = input().strip().lower()
        
        if confirm == 'y':
            update_mapping_rules(new_mappings)
        else:
            print("💾 保存をキャンセルしました")


def main():
    """メイン実行"""
    import sys
    
    if len(sys.argv) > 1 and sys.argv[1] == '--interactive':
        interactive_mapping()
    else:
        analyze_unmapped_genres()
        print(f"\n💡 対話型更新を実行するには:")
        print(f"   python {sys.argv[0]} --interactive")


if __name__ == '__main__':
    main()