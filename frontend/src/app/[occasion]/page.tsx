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
      url: `https://haregift.com/${occasion}`,
    },
    alternates: {
      canonical: `https://haregift.com/${occasion}`,
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

          {/* 記事一覧セクション */}
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
