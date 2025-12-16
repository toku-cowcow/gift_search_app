/**
 * 狭い部屋の新婚向け結婚祝い記事ページ
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
      "name": "狭い部屋の新婚に家電を贈ってもいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "相手の希望が分かるならOKですが、型番指定レベルで確認できないなら避けたほうが安全です。"
      }
    },
    {
      "@type": "Question",
      "name": "食べ物ギフトは手抜きに見えない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "「普段は買わない上質感」があると結婚祝いらしくなります。個包装や日持ちもポイントです。"
      }
    },
    {
      "@type": "Question",
      "name": "体験ギフトは本当に喜ばれる？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "モノが増えないので、狭い部屋ほど相性が良いです。期限が長いものを選ぶと使いやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "カタログは味気ない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "必要なものを選べるので合理的で喜ばれやすいです。迷ったら有力な選択肢です。"
      }
    },
    {
      "@type": "Question",
      "name": "被りが怖いとき、最短の回避策は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "「置き場所」「冷凍庫の余裕」「飲み物の好み」だけでも聞けると失敗が減ります。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '狭い部屋の新婚に贈る結婚祝い｜置き場所で困らない「省スペース」ギフト大全',
  description: '1LDKやコンパクトな新居だと結婚祝いは「置き場所問題」が起きがち。省スペースで喜ばれる消耗品・体験・アップグレード系の選び方と、避けた方がいいギフトをまとめました。',
  keywords: ['結婚祝い', '狭い部屋', '省スペース', 'ギフト', '1LDK', 'コンパクト', '新婚', 'プレゼント'],
  openGraph: {
    title: '狭い部屋の新婚に贈る結婚祝い｜置き場所で困らない「省スペース」ギフト大全',
    description: '1LDKやコンパクトな新居だと結婚祝いは「置き場所問題」が起きがち。省スペースで喜ばれる消耗品・体験・アップグレード系の選び方と、避けた方がいいギフトをまとめました。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/wedding_celebration/small-space-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/wedding_celebration/small-space-wedding-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function SmallSpaceWeddingGiftArticle() {
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
            <span className="text-gray-900">狭い部屋の新婚向けギフト</span>
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
              狭い部屋の新婚に贈る結婚祝い｜置き場所で困らない&ldquo;省スペース&rdquo;ギフト大全
            </h1>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed space-y-4">
              <p>
                結婚祝い選びで意外と見落とされがちなのが「置き場所」です。特に1LDKやコンパクトな新居だと、嬉しいプレゼントでも&ldquo;どこに置こう…&rdquo;が起きがち。
              </p>
              <p>
                この記事では、狭い部屋の新婚夫婦でも負担にならない「省スペース」「被りにくい」「二人で使える」を軸に、外さない結婚祝いの選び方をまとめました。
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

            {/* セクション1: 失敗しやすい落とし穴 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                狭い部屋の結婚祝いで失敗しやすい3つの落とし穴
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-bold text-gray-900 mb-2">1) サイズが想像以上に大きい（箱・付属品も含む）</h3>
                  <p className="text-sm">家電や大型の食器セットは、本体だけでなく箱や付属品も含めるとかなりスペースを取ります。</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-bold text-gray-900 mb-2">2) &ldquo;定番家電&rdquo;ほど被りやすい（同棲・引越しで既に揃っている）</h3>
                  <p className="text-sm">電気ケトル、トースター、ホットプレートなどは既に持っている可能性が高いです。</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-bold text-gray-900 mb-2">3) 収納が増えないのにモノが増える（結果、部屋が散らかる）</h3>
                  <p className="text-sm">狭い部屋では収納スペースも限られており、モノが増えると管理が大変になります。</p>
                </div>
              </div>
            </section>

            {/* セクション2: 結論 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                結論：省スペース新婚に強いギフトは「消える」「薄い」「選べる」「体験」
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">消える</h3>
                  <p className="text-sm text-gray-700">食べ物・飲み物・日用品（使えばなくなる）</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">薄い</h3>
                  <p className="text-sm text-gray-700">タオル・リネン・小型の上質アイテム（収納しやすい）</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">選べる</h3>
                  <p className="text-sm text-gray-700">カタログ・ギフトカード（相手が必要なものを選べる）</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">体験</h3>
                  <p className="text-sm text-gray-700">食事・リラクゼーション等（モノが増えない）</p>
                </div>
              </div>
            </section>

            {/* セクション3: おすすめジャンル */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                省スペースで喜ばれやすいおすすめジャンル
              </h2>

              <div className="space-y-8">
                {/* 消える系 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1) &ldquo;消える系&rdquo;の上質消耗品（最強に外しにくい）
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>スープ・レトルトの上位版（忙しい新生活に刺さる）</li>
                      <li>焼き菓子・スイーツ（個包装・日持ちが安心）</li>
                      <li>コーヒー・紅茶（好みを聞けるなら強い）</li>
                      <li>調味料（だし・オリーブオイル・はちみつ等）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>賞味期限、アレルギー表示、冷蔵/冷凍スペースの配慮があると親切。
                    </p>
                  </div>
                </div>

                {/* 薄い系 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2) &ldquo;薄い系&rdquo;のアップグレード（置き場所を取らず満足度が上がる）
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>上質タオル（ホテル系）</li>
                      <li>ブランケット（薄手で肌触り重視）</li>
                      <li>枕カバー・リネン類（かさばりにくい）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>色は白・グレー・ベージュなど無難寄せ。
                    </p>
                  </div>
                </div>

                {/* 体験ギフト */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3) &ldquo;モノを増やさない&rdquo;体験ギフト
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>記念日ディナー</li>
                      <li>スパ・リラクゼーション</li>
                      <li>二人でできる体験（写真、陶芸など）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>期限が長い、場所が選べるタイプが安心。
                    </p>
                  </div>
                </div>

                {/* 選べるギフト */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4) &ldquo;最終解&rdquo;の選べるギフト
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>カタログギフト（幅広いジャンル）</li>
                      <li>日常で使えるギフトカード</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション4: 避けたほうがいいギフト */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                逆に避けたほうがいい（狭い部屋ほど難しい）ギフト
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>大型家電・大型調理家電</li>
                  <li>大きいインテリア・置物</li>
                  <li>食器セット（収納・好み・被り問題）</li>
                </ul>
              </div>
            </section>

            {/* セクション5: 確認フレーズ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                角が立たない確認フレーズ（被りと置き場所を回避）
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>「新居、収納どんな感じ？大きいもの避けるね」</li>
                  <li>「冷凍庫の余裕ある？なければ常温系にするよ」</li>
                  <li>「コーヒー派？紅茶派？どっちも飲む？」</li>
                </ul>
              </div>
            </section>

            {/* セクション6: メッセージ例 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                すぐ使えるメッセージ例
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    ご結婚おめでとうございます。置き場所で困らないよう、省スペースで楽しめるものを選びました。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    新生活おめでとう！二人の毎日がちょっと楽になるようなギフトにしました。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    ご入籍おめでとうございます。ささやかですがお祝いの気持ちです。末永くお幸せに。
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
                  <h3 className="font-bold text-gray-900 mb-2">Q. 狭い部屋の新婚に家電を贈ってもいい？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    相手の希望が分かるならOKですが、型番指定レベルで確認できないなら避けたほうが安全です。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 食べ物ギフトは手抜きに見えない？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    「普段は買わない上質感」があると結婚祝いらしくなります。個包装や日持ちもポイントです。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 体験ギフトは本当に喜ばれる？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    モノが増えないので、狭い部屋ほど相性が良いです。期限が長いものを選ぶと使いやすいです。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. カタログは味気ない？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    必要なものを選べるので合理的で喜ばれやすいです。迷ったら有力な選択肢です。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 被りが怖いとき、最短の回避策は？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    「置き場所」「冷凍庫の余裕」「飲み物の好み」だけでも聞けると失敗が減ります。
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
