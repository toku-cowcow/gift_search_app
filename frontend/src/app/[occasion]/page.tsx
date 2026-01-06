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
                  href="/wedding_celebration/wedding-gift-guide"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    結婚祝いの選び方｜相場・マナー・外さない人気ギフトまで（保存版）
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    結婚祝いの相場、のしや渡す時期などのマナー、ご祝儀との違い、外さない人気ギフトの選び方、NG例、確認テンプレ、状況別の最適解までを1記事に凝縮。初めてでも失敗しない保存版ガイドです。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/wedding_celebration/cohabiting-couple-wedding-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    同棲カップルに贈る結婚祝い｜もう揃ってる二人に「被らない」選び方
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    同棲カップルの結婚祝いは家電や食器が一通り揃っていて被りがち。被りを避けるコツを「設計」で整理し、アップグレード・消耗品・体験・メンテ負担削減・二人時間の質を上げる方向で外さない選び方を解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/wedding_celebration/space-saving-gifts"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    狭い部屋の新婚に贈る結婚祝い｜置き場所で困らない「省スペース」ギフト大全
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    ワンルームや1K、収納少なめの新婚に贈る結婚祝いは『置き場所で詰まない』が最重要。小さいだけでなく、出しっぱなしで成立、多用途、縦収納、折りたたみ、消耗品など省スペースの正解をカテゴリ別に深く解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/wedding_celebration/eating-out-couple-wedding-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    料理しない夫婦に贈る結婚祝い｜キッチン家電より喜ばれる「外食派」ギフト
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    料理しない夫婦への結婚祝いはキッチン家電より、外食・中食の生活に刺さる『負担が減る』ギフトが正解。食事券や予約のしやすさ、家で食べる時間の質を上げるアイテム、片付けの手間を減らす工夫まで深掘りで解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/wedding_celebration/pet-friendly-wedding-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    ペットがいる夫婦に贈る結婚祝い｜犬猫のいる家で本当に助かるギフト
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    犬猫のいる家の結婚祝いは、毛・におい・衛生・誤飲リスク・掃除頻度を前提に選ぶと外さない。ペットと暮らす新生活で本当に助かる時短・消耗品・安全設計のギフトを深掘りで解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/wedding_celebration/pregnant-couple-wedding-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    妊娠中カップルの結婚祝い｜新生活と出産準備を両方助ける『気が利く』ギフト
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    妊娠中の結婚は新生活と出産準備が同時進行。体調・時間・家事負担・衛生・収納の悩みに効く結婚祝いを、実用品・消耗品・時短・体験の切り口で深掘りします。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/wedding_celebration/noshi-guide"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    結婚祝いの「のし」完全ガイド｜表書き・水引・内のし外のし・連名・郵送まで
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    結婚祝いののしで迷ったらこの記事。表書き（御祝/寿/御結婚御祝）の使い分け、水引の種類（結び切り）、内のし外のし、名前の書き方（連名・家族・職場）や郵送のマナーまで分かりやすく解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/wedding_celebration/ng-gifts"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    結婚祝いで贈ってはいけないNGギフト13選｜タブー理由と外さない代替案
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    結婚祝いで避けたいプレゼントを、タブーの意味と実用面の失敗例から整理。刃物や割れ物だけでなく、被りやすい家電、好みが割れる香りものまで、NG理由と代替案をセットで解説します。
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
                <Link
                  href="/articles/mothers_day/how-to-choose-mothers-day-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    母の日プレゼントの選び方｜相場・人気ジャンル・失敗しないコツ【保存版】
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    母の日の相場は3,000〜5,000円が定番。花・スイーツ・実用品の選び方、実母・義母・遠距離別のコツ、すぐ使えるメッセージ例まで完全網羅。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
                <Link
                  href="/articles/mothers_day/gift-ideas-beyond-flowers"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    母の日は花以外も人気｜実用・グルメ・体験のおすすめと選び方
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    「花は毎年贈っている」「実用的なものがいい」と考える方へ。実用品・グルメ・体験の3軸で整理し、外しにくい選び方を解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
                <Link
                  href="/articles/mothers_day/message-examples"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    母の日メッセージ例文集｜実母・義母・LINEでそのまま使える文例
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    母の日のメッセージで迷っている方へ。実母・義母・LINE・遠距離など状況別にそのまま使える例文を紹介。短い文でも感謝が伝わるコツを解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
                <Link
                  href="/mothers_day/gift-for-mother-in-law"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    義母への母の日プレゼント｜相場・失礼にならない選び方・無難で喜ばれるギフト【深掘り】
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    義母への母の日は距離感とマナーが難しい。相場の目安、失礼になりにくい定番ジャンル、避けた方がいいギフト、角が立たない渡し方・メッセージ例まで深掘り解説。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
                <Link
                  href="/mothers_day/flowers-guide"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    母の日の花ギフト完全ガイド｜花束・アレンジ・鉢植えの違いと失敗しない選び方
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    母の日は花が王道。でも花束・アレンジ・鉢植えで&quot;負担&quot;が変わる。花ギフトの種類別の向き不向き、色やサイズ、配送の注意点まで深掘りで解説。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
                <Link
                  href="/mothers_day/by-age"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    母の日プレゼントは年代で選ぶ｜50代・60代・70代に喜ばれる傾向と失敗回避
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    母の日の&quot;正解&quot;は年代で変わる。50代は忙しさ、60代は趣味とゆとり、70代は負担の少なさが鍵。年代別の選び方と外しにくい考え方を整理。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
                <Link
                  href="/mothers_day/for-working-mom"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    働くお母さんに贈る母の日｜忙しい毎日がラクになるプレゼントの選び方【時間を贈る】
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    働くお母さんへの母の日は&quot;モノ&quot;より&quot;時間&quot;が喜ばれやすい。負担を増やさない選び方、失敗しやすいNG、渡し方のコツまで深掘りで解説。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
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
                <Link
                  href="/fathers_day/how-to-choose-fathers-day-gift"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    父の日プレゼントの選び方｜相場・人気ランキング・外さないギフト大全【保存版】
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    父の日の相場は3,000〜5,000円が定番。お酒・グルメ・ファッション・健康・体験の選び方、避けるべきギフト、すぐ使えるメッセージ例まで1本で完全網羅。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/fathers_day/fathers-day-message-examples"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    父の日メッセージ例文集｜実父・義父・LINEでそのまま使える文例と書き方
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    父の日のメッセージで迷う人向けに、短文・丁寧・LINE・義父向けなど状況別の例文を網羅。失礼にならない書き方、気まずくならないコツ、遅れたときのフォロー文までまとめました。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/fathers_day/last-minute"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    父の日ギリギリでも間に合う｜当日・前日に用意できるプレゼントと失敗しない渡し方
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    父の日を忘れていた、準備が間に合わない人向け。今日でも用意できる父の日プレゼント（近所で買える・予約できる・デジタルで即日）と、気まずくならない渡し方、後日フォローまでを攻略形式でまとめます。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>

                <Link
                  href="/fathers_day/yellow-flowers"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    父の日に黄色い花を贈る理由｜黄色いバラ・ひまわりの意味と失敗しない選び方
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    父の日に黄色い花はアリ？という疑問に、黄色いバラ・ひまわりの印象、誤解されにくい選び方、花束・アレンジ・プリザの違い、メッセージのコツまで深掘りで解説します。
                  </p>
                  <div className="mt-3 text-sm text-pink-600 font-medium group-hover:underline">
                    記事を読む →
                  </div>
                </Link>
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
