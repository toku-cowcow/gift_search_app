/**
 * 用途別ハブページ
 * 
 * 各用途（結婚祝い、出産祝い等）の総合ガイドページ
 * SEO対策として、用途に関する情報を提供し、検索ページへ誘導
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { OCCASION_CONTENT } from '@/lib/occasionContent';
import { OCCASION_NAV } from '@/lib/occasions';

type PageProps = {
  params: {
    occasion: string;
  };
};

/**
 * 有効なoccasionのみを許可
 */
const validOccasions = Object.keys(OCCASION_CONTENT);

/**
 * 静的生成するパスを定義
 */
export function generateStaticParams() {
  return validOccasions.map((occasion) => ({
    occasion,
  }));
}

/**
 * 動的メタデータ生成（SEO対策）
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { occasion } = params;
  const content = OCCASION_CONTENT[occasion];

  if (!content) {
    return {
      title: 'ページが見つかりません | HAREGift',
    };
  }

  return {
    title: `${content.title} | HAREGift`,
    description: content.description,
    keywords: content.keywords,
    openGraph: {
      title: `${content.title} | HAREGift`,
      description: content.description,
      type: 'article',
      url: `https://www.hare-gift.com/${occasion}`,
    },
    alternates: {
      canonical: `https://www.hare-gift.com/${occasion}`,
    },
  };
}

/**
 * ハブページコンポーネント
 */
export default function OccasionPage({ params }: PageProps) {
  const { occasion } = params;
  const content = OCCASION_CONTENT[occasion];

  // 無効なoccasionの場合は404
  if (!content) {
    notFound();
  }

  // 対応する検索URLを取得
  const occasionNav = OCCASION_NAV.find((nav) => nav.key === occasion);
  const searchUrl = occasionNav?.searchHref || `/?occasion=${occasion}`;

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* パンくずリスト */}
          <nav className="text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-gray-900">ホーム</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{content.h1}</span>
          </nav>

          {/* メインコンテンツ */}
          <article className="bg-white rounded-lg shadow-sm p-8 mb-8">
            {/* タイトル */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {content.h1}
            </h1>

            {/* イントロ */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {content.intro}
            </p>

            {/* 検索ボタン（目立つCTA） */}
            <div className="mb-12 text-center">
              <Link
                href={searchUrl}
                className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                🎁 {content.searchButtonText}
              </Link>
            </div>

            {/* セクション */}
            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <section key={index} className="border-l-4 border-pink-400 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            {/* 下部CTA */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                人気の{content.h1}ギフトを今すぐチェック
              </p>
              <Link
                href={searchUrl}
                className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-lg transition-all"
              >
                ギフトを探す →
              </Link>
            </div>
          </article>

          {/* 記事一覧セクション - 結婚祝い */}
          {occasion === 'wedding_celebration' && (
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>📝</span>
                <span>おすすめ記事</span>
              </h2>
              <div className="space-y-4">
                <Link
                  href="/articles/wedding_celebration/how-to-choose-wedding-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    結婚祝いの選び方｜相場・マナー・外さない人気ギフトまで（保存版）
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    結婚祝いは相場・マナー・相手の暮らしに合うかが重要。関係性別の相場、失礼にならない渡し方、外しにくいギフトの選び方を解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/wedding_celebration/cohabiting-couple-wedding-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    同棲カップルに贈る結婚祝い｜もう揃ってる二人に「被らない」選び方
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    同棲中のカップルは家電や食器が揃っていて被りがち。アップグレード系・消耗品・体験ギフトなど「外さない」選び方を紹介します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/wedding_celebration/small-space-wedding-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    狭い部屋の新婚に贈る結婚祝い｜置き場所で困らない「省スペース」ギフト大全
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    1LDKやコンパクトな新居向け。省スペースで喜ばれる消耗品・体験・アップグレード系の選び方を紹介します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/wedding_celebration/non-cooking-couple-wedding-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    料理しない夫婦に贈る結婚祝い｜キッチン家電より喜ばれる「外食派」ギフト
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    外食派・自炊しない夫婦向け。グルメ・体験・日用品など、調理家電より喜ばれる選び方を紹介します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/wedding_celebration/pet-owner-wedding-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    ペットがいる夫婦に贈る結婚祝い｜犬猫のいる家で「本当に助かる」ギフト
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    犬猫がいる家庭向け。香り・誤飲・破損リスクに配慮した、ペットがいても安心なギフトの選び方を紹介します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/wedding_celebration/expecting-baby-wedding-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    妊娠中カップルの結婚祝い｜新生活と出産準備を両方助ける「気が利く」ギフト
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    妊娠中・授かり婚のカップル向け。体調配慮・時短・負担を減らすギフトの選び方を紹介します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* 記事一覧セクション - 出産祝い */}
          {occasion === 'birth_celebration' && (
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>📝</span>
                <span>おすすめ記事</span>
              </h2>
              <div className="space-y-4">
                <Link
                  href="/articles/birth_celebration/gift-budget-guide"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    出産祝いの相場はいくら？関係性別の金額目安と失礼にならない決め方（友達・職場・親族）
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    出産祝いの相場は「関係性」と「贈り方（個人/連名）」で決まります。友達・職場・親族別の金額目安、迷ったときの決め方、NG例まで具体的に解説。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/birth_celebration/workplace-gift-etiquette"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    職場の出産祝いマナー完全ガイド｜連名の相場・のしの書き方・メッセージ例文（同僚/上司/部下）
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    職場の出産祝いで迷う「連名の相場」「のし（表書き・名入れ）」「渡すタイミング」「メッセージ例文」をまとめて解説。失礼を避け、気持ちが伝わる実務ガイド。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/birth_celebration/return-gift-guide"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    出産内祝い（お返し）の相場は半返し？関係性別の金額目安・マナー・のしの書き方まで完全ガイド
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    出産内祝い（お返し）の相場は「半返し」が基本ですが、親族・職場・高額祝いでは調整が必要。関係性別の目安、贈る時期、のしの書き方、避けたいNGまでまとめて解説。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/birth_celebration/second-child-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    二人目の出産祝いで被らないギフトの選び方｜上の子がいる家庭に喜ばれるプレゼント実例
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    二人目の出産祝いは「すでに揃っている問題」で悩みがち。被らない選び方の軸、失敗しない確認ポイント、喜ばれるギフト実例を具体的に解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* 記事一覧セクション - 新築祝い */}
          {occasion === 'new_house_celebration' && (
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>📝</span>
                <span>おすすめ記事</span>
              </h2>
              <div className="space-y-4">
                <Link
                  href="/articles/new_house_celebration/complete-manners-guide"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    新築祝いの相場はいくら？贈る時期・のしの書き方・NGギフトまで失敗しない基本マナー完全ガイド
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    贈る時期は入居後1〜2か月、相場は関係性別に3,000〜100,000円。のしの書き方、NGギフト、メッセージ例まで完全網羅。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/new_house_celebration/popular-gifts-by-budget"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    新築祝いで喜ばれる定番ギフト決定版｜予算別（3,000円・5,000円・1万円・2万円・3万円）おすすめと失敗しない選び方
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    予算別に定番ギフトを具体例つきで紹介。カタログギフト、タオル、食器、消えもの、上質日用品など、失敗しない選び方を徹底解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/new_house_celebration/taboo-guide"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    新築祝いのタブー完全ガイド｜避けるべきギフト・縁起・マナーを徹底解説
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    火・刃物・マット・時計など、新築祝いで贈ってはいけないタブーを3つのカテゴリに分類。具体例と代替案で徹底解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/articles/new_house_celebration/noshi-complete-guide"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    新築祝いののし完全ガイド｜水引の選び方・表書き・内のし外のしの使い分けまで徹底解説
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    水引は紅白蝶結び、表書きは&quot;御新築祝&quot;または&quot;祝御新築&quot;。内のし・外のしの使い分け、書き方の具体例、のしテンプレートまで完全網羅します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* 記事一覧セクション - 母の日 */}
          {occasion === 'mothers_day' && (
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>📝</span>
                <span>おすすめ記事</span>
              </h2>
              <div className="space-y-4">
                {/* ここに母の日の記事を追加 */}
                <div className="text-center py-8 text-gray-500">
                  記事を準備中です
                </div>
              </div>
            </div>
          )}

          {/* 記事一覧セクション - 父の日 */}
          {occasion === 'fathers_day' && (
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>📝</span>
                <span>おすすめ記事</span>
              </h2>
              <div className="space-y-4">
                {/* ここに父の日の記事を追加 */}
                <div className="text-center py-8 text-gray-500">
                  記事を準備中です
                </div>
              </div>
            </div>
          )}

          {/* 記事一覧セクション - 敬老の日 */}
          {occasion === 'respect_for_the_aged' && (
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>📝</span>
                <span>おすすめ記事</span>
              </h2>
              <div className="space-y-4">
                {/* ここに敬老の日の記事を追加 */}
                <div className="text-center py-8 text-gray-500">
                  記事を準備中です
                </div>
              </div>
            </div>
          )}

          {/* 関連リンク */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              その他の用途から探す
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {OCCASION_NAV.filter((nav) => nav.key !== occasion).map((nav) => (
                <Link
                  key={nav.key}
                  href={nav.articleHref}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
