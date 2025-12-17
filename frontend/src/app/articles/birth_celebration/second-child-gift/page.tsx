/**
 * 二人目の出産祝い 記事ページ
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
      "name": "二人目の出産祝いは「現金」でも失礼じゃない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "親しい関係なら失礼ではありません。ただ、相手が気を遣うこともあるので「必要なものに使ってね」と一言添えると角が立ちにくいです。"
      }
    },
    {
      "@type": "Question",
      "name": "上の子にもプレゼントを用意した方がいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "必須ではありませんが、配慮したいなら小さめで消えもの寄り（お菓子・絵本など）が無難です。大物は増えて困る場合があります。"
      }
    },
    {
      "@type": "Question",
      "name": "おむつを贈るならサイズはどれが安全？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "家庭によります。新生児は余ることもあるため、可能なら一言確認するのが安全です。確認できない場合はS〜Mあたりを検討します。"
      }
    },
    {
      "@type": "Question",
      "name": "名入れギフトは迷惑になることもある？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "好みや置き場所の問題が出やすいので、相手のテイストが読める場合におすすめです。"
      }
    },
    {
      "@type": "Question",
      "name": "渡すタイミングはいつがいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "産後すぐは忙しいため、退院後〜落ち着いた頃が渡しやすいことが多いです。配送なら日時指定への配慮があると親切です。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '二人目の出産祝いで被らないギフトの選び方｜上の子がいる家庭に喜ばれるプレゼント実例',
  description: '二人目の出産祝いは「すでに揃っている問題」で悩みがち。被らない選び方の軸、失敗しない確認ポイント、喜ばれるギフト実例を具体的に解説します。',
  keywords: ['二人目', '出産祝い', '被らない', 'おすすめ', '上の子', 'ギフト', 'プレゼント'],
  openGraph: {
    title: '二人目の出産祝いで被らないギフトの選び方｜上の子がいる家庭に喜ばれるプレゼント実例',
    description: '二人目の出産祝いは「すでに揃っている問題」で悩みがち。被らない選び方の軸、失敗しない確認ポイント、喜ばれるギフト実例を具体的に解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/birth_celebration/second-child-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/birth_celebration/second-child-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function SecondChildGiftArticle() {
  return (
    <>
      <Header />
      
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* パンくずリスト */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-pink-600 transition-colors">
                ホーム
              </Link>
              <span className="mx-2">/</span>
              <Link href="/birth_celebration" className="hover:text-pink-600 transition-colors">
                出産祝い
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">二人目の出産祝い</span>
            </nav>
          </div>
        </div>

        {/* ヒーローセクション */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-6">
              <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1 rounded-full">
                二人目の出産祝いガイド
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              二人目の出産祝いで被らないギフトの選び方<br />
              <span className="text-pink-600">上の子がいる家庭に喜ばれるプレゼント実例</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              二人目の出産祝いは、一人目とは違う難しさがあります。すでに一通り揃っている、お下がりで回せる、収納が増えるのが困る。この記事では、二人目家庭に喜ばれる「被らない選び方」の軸と、失敗しない確認ポイントを具体的に解説します。
            </p>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">

          {/* 本文コンテンツ */}
          <div className="prose prose-lg max-w-none">
            
            {/* セクション1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                二人目の出産祝い、いちばん難しいのは「もう持ってる」問題
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                一人目の出産祝いは、ベビー服・タオル・食器・おくるみ・スタイなど、定番がわかりやすい反面、二人目になると事情が変わります。
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>すでに一通り揃っている</li>
                <li>お下がりで回せる</li>
                <li>収納が増えるのが困る</li>
                <li>兄姉の生活リズムがある（受け取り・外出が大変）</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                この状態で「定番ギフト」をそのまま選ぶと、高確率で被ります。二人目の出産祝いは、定番を避けるのではなく、<strong className="text-pink-600">&ldquo;定番の出し方&rdquo;を変える</strong>のがコツです。
              </p>
            </section>

            {/* セクション2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                被らないための結論：二人目ギフトはこの3軸で選ぶ
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                二人目家庭に刺さりやすいのは、次の3タイプです。（どれか1つに絞って深く選ぶと、満足度が上がります）
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                1）消えもの（消耗品）を「ちょっと良い」に寄せる
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                被らない確率が高く、相手の負担になりにくい王道です。ポイントは&ldquo;消えもの&rdquo;でも雑にしないこと。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>おしりふき（厚手・大判・水分量多め）</li>
                <li>ベビー用洗剤・柔軟剤（無香料派も多い）</li>
                <li>スキンケア（低刺激・ポンプ式）</li>
                <li>ミルク関連（家庭の方針があるので要確認）</li>
                <li>離乳食ストック（開始時期に合わせる）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>コツ：</strong>価格は「量」ではなく「使い心地」に投資。同じカテゴリーでも&ldquo;上位版&rdquo;は喜ばれやすいです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                2）「上の子がいるからこそ助かる」時短・家事支援に振り切る
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                二人目の大変さは、赤ちゃんだけではなく&ldquo;上の子の生活が止まらない&rdquo;こと。だから刺さるのは、モノより<strong className="text-pink-600">時間が増えるギフト</strong>です。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>家事代行（スポット）</li>
                <li>宅配ごはん・冷凍惣菜の詰め合わせ</li>
                <li>スープストック系の常備食</li>
                <li>洗い物が減るグッズ（ただし増えるモノは厳選）</li>
                <li>産後の体を労わるケアアイテム（ママ向け）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                「赤ちゃん用品を贈りたい気持ち」を、<strong>家庭の余裕を作る方向</strong>に変換すると、被りにくく満足度が高いです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                3）&ldquo;2人目ならでは&rdquo;の記念にする（名入れ・写真・メモリアル）
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                二人目は、良くも悪くもイベントが流れ作業になりがち。だからこそ「この子のための記念」が残ると喜ばれます。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>名入れタオル（サイズ・収納に配慮した薄手など）</li>
                <li>誕生記録のメモリアル（小さく飾れるもの）</li>
                <li>兄姉とのリンクアイテム（親の好み確認が前提）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>注意：</strong>名入れは好みが割れます。サプライズにせず、相手が好きなテイストを把握してからが安全です。
              </p>
            </section>

            {/* セクション3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                失敗率を下げる「確認ポイント」だけは先に押さえる
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                二人目ギフトの事故は、だいたいここで起きます。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                サイズ問題（特におむつ・服）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>おむつは新生児サイズが余っている家庭も多い</li>
                <li>服は好み・季節・成長スピードで外しやすい</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>おすすめ：</strong>おむつは「今」ではなく「少し先」を確認してから。服は贈るなら、季節とサイズを絞って&ldquo;1着だけ良いもの&rdquo;が安全です。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                ブランド・香り・アレルギー（洗剤・スキンケア）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>無香料派が一定数いる</li>
                <li>肌が弱い子もいる</li>
                <li>すでに固定ブランドがある</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>おすすめ：</strong>迷うなら&ldquo;無香料・低刺激・成分シンプル&rdquo;へ寄せる。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                家が狭い・収納が少ない問題
              </h3>
              <p className="text-gray-700 leading-relaxed">
                二人目はモノが増えがちなので、「大きい」「場所を取る」「増える」の3点セットは避けるのが無難です。
              </p>
            </section>

            {/* セクション4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                二人目の出産祝い：本当に喜ばれやすいギフト実例（被りにくさ重視）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ここからは、被りにくく、かつ「もらって助かった」と言われやすい実例をタイプ別に紹介します。あなたは、どの家庭状況に近いですか？
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                A：相手の好みが読めない（安全にいきたい）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>厚手おしりふきの&ldquo;良いやつ&rdquo;</li>
                <li>低刺激スキンケア（ポンプ式）</li>
                <li>冷凍スープ・常備食セット（産後に助かる）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                「使うかどうかわからない趣味アイテム」より、<strong>使う確率が高い消耗品</strong>が強いです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                B：上の子の対応で手一杯そう（時間を贈る）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>冷凍おかず・ミールキット</li>
                <li>家事代行（相手が抵抗ない場合）</li>
                <li>使い捨て系の家事ラク（キッチン消耗品の上位版など）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                ここは&ldquo;おしゃれ&rdquo;より&ldquo;実務&rdquo;で刺さります。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                C：二人目でも「記念」を大事にしたい家庭
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>小さく飾れるメモリアル（場所を取らない）</li>
                <li>名入れタオル（薄手・実用寄り）</li>
                <li>兄姉とおそろい系（事前に好み確認）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                記念系は、「置き場所」「テイスト」を外さないのが勝負です。
              </p>
            </section>

            {/* セクション5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                そのまま使える：事前確認メッセージ（角が立たない）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                二人目は特に、聞いた方が早い場面が多いです。でも聞き方で気を遣わせたくない。そんなときはこれ。
              </p>
              
              <div className="bg-gray-50 border-l-4 border-pink-400 p-6 mb-4">
                <p className="text-sm text-gray-500 mb-2">例文（LINE向け）</p>
                <p className="text-gray-700 leading-relaxed">
                  「出産祝い、二人目だと被りやすいかなと思って！今いちばん助かるのって、消耗品系（おしりふきとか）と、食事サポート系（スープとか）どっちが嬉しい？好みNGがあったらそれも教えて〜」
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                &ldquo;選択肢を2つに絞る&rdquo;と、相手が答えやすいです。
              </p>
            </section>

            {/* セクション6 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                HAREGiftでの探し方（被らない二人目ギフト向け）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ここまでの内容を踏まえると、探す時は次の順番がラクです。
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>「消耗品」「ママ向け」「時短・家事ラク」など目的を先に決める</li>
                <li>価格帯を決める（迷ったら&ldquo;ちょっと良い消耗品&rdquo;）</li>
                <li>口コミで「実際に助かった」系の声が多いものを優先</li>
              </ol>

              <p className="text-gray-700 leading-relaxed mb-4">
                HAREGiftで「二人目」「消耗品」「時短」などの軸で絞り込むと、被りにくい候補をまとめて比較できます。まずは候補を10個まで減らすところから始めるのがおすすめです。
              </p>
            </section>

            {/* FAQセクション */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                よくある質問（FAQ）
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 二人目の出産祝いは「現金」でも失礼じゃない？
                  </h3>
                  <p className="text-gray-700">
                    親しい関係なら失礼ではありません。ただ、相手が気を遣うこともあるので「必要なものに使ってね」と一言添えると角が立ちにくいです。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 上の子にもプレゼントを用意した方がいい？
                  </h3>
                  <p className="text-gray-700">
                    必須ではありませんが、上の子の気持ちに配慮したいなら小さめで消えもの寄りが無難です（お菓子・絵本など）。大物は増えて困る場合があります。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. おむつを贈るならサイズはどれが安全？
                  </h3>
                  <p className="text-gray-700">
                    家庭によります。新生児は余ることもあるので、確認できないならS〜Mあたりを検討しつつ、可能なら一言聞くのが安全です。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 名入れギフトは迷惑になることもある？
                  </h3>
                  <p className="text-gray-700">
                    あります。テイストや置き場所の問題が出やすいので、相手の好みが読める場合におすすめです。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 渡すタイミングはいつがいい？
                  </h3>
                  <p className="text-gray-700">
                    産後すぐはバタバタしがちなので、退院後〜落ち着いた頃が渡しやすいことが多いです。配送なら日時指定の配慮があると親切です。
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 text-center shadow-sm border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              出産祝いギフトを探す
            </h3>
            <p className="text-gray-700 mb-6">
              二人目の出産祝いは、センスより&ldquo;相手の生活をラクにする視点&rdquo;が勝ちます。
            </p>
            <Link
              href="/birth_celebration"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-md"
            >
              出産祝いギフトを探す
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
