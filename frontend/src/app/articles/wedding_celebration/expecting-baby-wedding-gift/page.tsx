/**
 * 妊娠中カップル向け結婚祝い記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、CTA配置
 */

import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// FAQ JSON-LD データ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "妊娠中の結婚祝い、何を避ければいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "重い・大きいもの、香りが強いもの、期限が短い生もの中心のギフトは避けると安全です。"
      }
    },
    {
      "@type": "Question",
      "name": "食べ物ギフトは失礼？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "失礼ではありません。やさしい味・常温OK・日持ち・アレルギー表示を意識すると喜ばれやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "体験ギフトは使える？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "期限が長く、場所が選べるものなら使いやすいです。無理に使わせない設計が大切です。"
      }
    },
    {
      "@type": "Question",
      "name": "ベビー用品を結婚祝いで贈るのはアリ？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "関係性と相手の希望次第です。本人が欲しいと言っている場合以外は、まずは結婚祝いとして「二人向け」に寄せるのが無難です。"
      }
    },
    {
      "@type": "Question",
      "name": "被りを避ける最短の確認は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "「常温or冷凍」「香りOKか」「大きいものNGか」の3点で失敗が減ります。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '妊娠中カップルの結婚祝い｜新生活と出産準備を両方助ける「気が利く」ギフト',
  description: '妊娠中の結婚祝いは、体調配慮・時短・負担にならないことが重要。新生活と出産準備の両方に役立つギフト選びと、避けたい贈り物をまとめました。',
  keywords: ['結婚祝い', '妊娠中', '授かり婚', 'ギフト', 'プレゼント', '出産準備', 'マタニティ'],
  openGraph: {
    title: '妊娠中カップルの結婚祝い｜新生活と出産準備を両方助ける「気が利く」ギフト',
    description: '妊娠中の結婚祝いは、体調配慮・時短・負担にならないことが重要。新生活と出産準備の両方に役立つギフト選びと、避けたい贈り物をまとめました。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/wedding_celebration/expecting-baby-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/wedding_celebration/expecting-baby-wedding-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function ExpectingBabyWeddingGiftArticle() {
  return (
    <>
      <Header />
      
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* パンくずリスト */}
          <nav className="mb-4 text-sm text-gray-600">
            <Link href="/" className="hover:text-pink-600 transition-colors">
              ホーム
            </Link>
            <span className="mx-2">›</span>
            <Link href="/wedding_celebration" className="hover:text-pink-600 transition-colors">
              結婚祝い
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">妊娠中カップル向けギフト</span>
          </nav>

          {/* 記事一覧に戻るボタン */}
          <div className="mb-8">
            <Link
              href="/wedding_celebration"
              className="inline-flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors"
            >
              <span>←</span>
              <span>記事一覧に戻る</span>
            </Link>
          </div>

          {/* 記事コンテンツ */}
          <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            {/* 最終更新日 */}
            <div className="text-sm text-gray-500 mb-4">
              最終更新日: 2025-12-16
            </div>

            {/* h1タイトル */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              妊娠中カップルの結婚祝い｜新生活と出産準備を両方助ける&ldquo;気が利く&rdquo;ギフト
            </h1>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed space-y-4">
              <p>
                妊娠中のカップルへの結婚祝いは、「華やかさ」よりも「負担を減らす」が正解になりやすいです。体調が安定しない時期もあり、買い物や家事のハードルが上がります。
              </p>
              <p>
                この記事では、妊娠中の新婚に向けて、気を遣わせず本当に助かる結婚祝いの選び方をまとめました。
              </p>
            </div>

            {/* CTA1 */}
            <div className="my-8 text-center">
              <Link
                href="/wedding_celebration"
                className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
              >
                🎁 結婚祝いをカテゴリから探す
              </Link>
            </div>

            {/* セクション1: 意識したい3つの軸 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                妊娠中カップルの結婚祝いで意識したい3つの軸
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-bold text-gray-900 mb-2">1) 体調配慮</h3>
                  <p className="text-sm">香り・刺激・重い荷物を避ける</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-bold text-gray-900 mb-2">2) 時短</h3>
                  <p className="text-sm">家事や食事の負担を減らす</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-bold text-gray-900 mb-2">3) 置き場所</h3>
                  <p className="text-sm">大型のものは避け、扱いやすい形に</p>
                </div>
              </div>
            </section>

            {/* セクション2: 結論 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                結論：妊娠中に刺さるのは「時短」「上質消耗品」「体験」「選べる」
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">時短</h3>
                  <p className="text-sm text-gray-700">上位レトルト、スープ、簡単調理系（無理なく食事が整う）</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">上質消耗品</h3>
                  <p className="text-sm text-gray-700">タオル、リネン、日用品（被っても困りにくい）</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">体験</h3>
                  <p className="text-sm text-gray-700">気分転換になる（ただし期限と場所の柔軟性が重要）</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">選べる</h3>
                  <p className="text-sm text-gray-700">必要なものが変わりやすい時期に強い</p>
                </div>
              </div>
            </section>

            {/* セクション3: おすすめジャンル */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                おすすめジャンル
              </h2>

              <div className="space-y-8">
                {/* 時短グルメ */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1) 時短グルメ（&ldquo;食べる&rdquo;ハードルを下げる）
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>スープ・レトルトの上質セット</li>
                      <li>やさしい味の出汁・調味料</li>
                      <li>常温保存できるごはんのお供</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>刺激が強いものは避け、やさしい味寄せ。アレルギー表記が明確なものを優先。
                    </p>
                  </div>
                </div>

                {/* 上質タオル・リネン */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2) 上質タオル・リネン（地味に一番助かる）
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>上質タオル（洗い替えが増える）</li>
                      <li>ブランケット（薄手で扱いやすい）</li>
                    </ul>
                  </div>
                </div>

                {/* 体験ギフト */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3) 体験ギフト（気分転換）
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>食事券・リラクゼーション（場所が選べるもの）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>期限が長い、予約が柔軟、無理なく使えることが大事。
                    </p>
                  </div>
                </div>

                {/* 選べるギフト */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4) 選べるギフト（変化の多い時期の最適解）
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>カタログギフト</li>
                      <li>ギフトカード</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション4: 避けたほうがいいギフト */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                避けたほうがいいギフト（妊娠中ほど外れやすい）
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>重い・大きいもの（持ち帰りや移動が負担）</li>
                  <li>香りが強いもの（好み・体調で合わない可能性）</li>
                  <li>生もの中心で期限が短いもの（タイミングが難しい）</li>
                </ul>
              </div>
            </section>

            {/* セクション5: 確認フレーズ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                角が立たない確認フレーズ
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>「いま食べやすいものある？刺激少なめにしようか？」</li>
                  <li>「常温がいい？冷凍でも大丈夫？」</li>
                  <li>「大きいもの避けるね。置き場所困らないようにする」</li>
                </ul>
              </div>
            </section>

            {/* セクション6: メッセージ例 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                メッセージ例
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    ご結婚おめでとうございます。無理なく使える形で、新生活の助けになるものを選びました。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    ご入籍おめでとうございます。体調の負担にならないよう、扱いやすいギフトにしました。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    おめでとう！落ち着いたらまた改めてお祝いさせてね。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション7: FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                FAQ（よくある質問）
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 妊娠中の結婚祝い、何を避ければいい？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    重い・大きいもの、香りが強いもの、期限が短い生もの中心のギフトは避けると安全です。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 食べ物ギフトは失礼？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    失礼ではありません。やさしい味・常温OK・日持ち・アレルギー表示を意識すると喜ばれやすいです。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 体験ギフトは使える？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    期限が長く、場所が選べるものなら使いやすいです。無理に使わせない設計が大切です。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. ベビー用品を結婚祝いで贈るのはアリ？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    関係性と相手の希望次第です。本人が欲しいと言っている場合以外は、まずは結婚祝いとして「二人向け」に寄せるのが無難です。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 被りを避ける最短の確認は？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    「常温or冷凍」「香りOKか」「大きいものNGか」の3点で失敗が減ります。
                  </p>
                </div>
              </div>
            </section>

            {/* CTA2 */}
            <div className="my-8 text-center py-8 bg-pink-50 rounded-lg">
              <Link
                href="/wedding_celebration"
                className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
              >
                人気順・予算別で結婚祝いを探す →
              </Link>
            </div>

            {/* 記事一覧に戻るボタン */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                href="/wedding_celebration"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-pink-600 font-medium transition-colors"
              >
                <span>←</span>
                <span>記事一覧に戻る</span>
              </Link>
            </div>
          </article>
        </main>
      </div>

      <Footer />
    </>
  );
}
