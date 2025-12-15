/**
 * 用途別ナビゲーション定義
 * 
 * 各用途の検索URL・記事URL（将来のブログハブページ）を管理
 */

export type OccasionNav = {
  key: string;
  label: string;
  searchHref: string;  // 検索ページURL（クエリパラメータ付き）
  articleHref: string; // 記事ページURL（将来のブログハブ）
};

/**
 * 用途別メニューリスト
 * 
 * 注意: occasion値は検索パラメータで使用される値です
 */
export const OCCASION_NAV: OccasionNav[] = [
  {
    key: 'wedding_celebration',
    label: '結婚祝い',
    searchHref: '/?occasion=wedding_celebration',
    articleHref: '/wedding_celebration',
  },
  {
    key: 'birth_celebration',
    label: '出産祝い',
    searchHref: '/?occasion=birth_celebration',
    articleHref: '/birth_celebration',
  },
  {
    key: 'new_house_celebration',
    label: '新築祝い',
    searchHref: '/?occasion=new_house_celebration',
    articleHref: '/new_house_celebration',
  },
  {
    key: 'mothers_day',
    label: '母の日',
    searchHref: '/?occasion=mothers_day',
    articleHref: '/mothers_day',
  },
  {
    key: 'fathers_day',
    label: '父の日',
    searchHref: '/?occasion=fathers_day',
    articleHref: '/fathers_day',
  },
  {
    key: 'respect_for_aged_day',
    label: '敬老の日',
    searchHref: '/?occasion=respect_for_aged_day',
    articleHref: '/respect_for_the_aged',
  },
];
