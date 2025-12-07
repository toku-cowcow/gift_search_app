import meilisearch

client = meilisearch.Client('http://localhost:7700', 'masterKey')
index = client.index('items')

# 全体の件数
stats = index.get_stats()
print(f'Total documents: {stats.number_of_documents}')
print()

# 各大分類の件数
genres = {
    'food': '食品・スイーツ',
    'drink': '飲料',
    'home': '生活雑貨・日用品',
    'catalog': 'カタログギフト等',
    'craft': '工芸・伝統雑貨'
}

for key, name in genres.items():
    result = index.search('', {'filter': f'genre_group = "{key}"', 'limit': 1})
    print(f'{name} ({key}): {result["estimatedTotalHits"]} 件')

print()
print('genre_groupの値による分布:')
# 全件取得して手動で数える
result = index.search('', {'limit': 10932})
total = len(result['hits'])
print(f'全件: {total} 件')

genre_counts = {}
empty_count = 0
none_count = 0

for hit in result['hits']:
    genre = hit.get('genre_group')
    if genre is None:
        none_count += 1
    elif genre == '':
        empty_count += 1
    else:
        genre_counts[genre] = genre_counts.get(genre, 0) + 1

print(f'\n空文字列: {empty_count} 件')
print(f'None/null: {none_count} 件')
print(f'\n各genre_groupの件数:')
for genre, count in sorted(genre_counts.items()):
    print(f'  {genre}: {count} 件')
