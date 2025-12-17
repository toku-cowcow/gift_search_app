/**
 * 出産内祝い（お返し）ガイド 記事ページ
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
      "name": "出産内祝いは「半返し」が絶対？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "絶対ではありません。基本は1/3〜1/2ですが、親・祖父母や高額祝い、職場の連名などは調整することが多いです。"
      }
    },
    {
      "@type": "Question",
      "name": "内祝いを贈るのが遅れたら失礼？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "遅れても大丈夫なことが多いです。遅れそうな時点で一言連絡し、できるだけ早めに贈ると丁寧です。"
      }
    },
    {
      "@type": "Question",
      "name": "職場の連名への内祝いはどうする？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "総額で考えず「1人あたり」で配れる形（個包装）がスムーズです。目安は1人あたり500〜1,500円程度が収まりやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "のしの名入れは親の名前？赤ちゃんの名前？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "一般的には赤ちゃんの名前です。読みづらい場合はふりがなを付けると親切です。"
      }
    },
    {
      "@type": "Question",
      "name": "ギフトカードで内祝いを返してもいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "相手や関係性によります。親しい友人には便利なこともありますが、目上や親族には品物のほうが無難な場合が多いです。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '出産内祝い（お返し）の相場は半返し？関係性別の金額目安・マナー・のしの書き方まで完全ガイド',
  description: '出産内祝い（お返し）の相場は「半返し」が基本ですが、親族・職場・高額祝いでは調整が必要。関係性別の目安、贈る時期、のしの書き方、避けたいNGまでまとめて解説。',
  keywords: ['出産内祝い', 'お返し', '相場', '半返し', 'マナー', 'のし', 'ギフト'],
  openGraph: {
    title: '出産内祝い（お返し）の相場は半返し？関係性別の金額目安・マナー・のしの書き方まで完全ガイド',
    description: '出産内祝い（お返し）の相場は「半返し」が基本ですが、親族・職場・高額祝いでは調整が必要。関係性別の目安、贈る時期、のしの書き方、避けたいNGまでまとめて解説。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/birth_celebration/return-gift-guide',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/birth_celebration/return-gift-guide',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function ReturnGiftGuideArticle() {
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
              <span className="text-gray-900">出産内祝い（お返し）</span>
            </nav>
          </div>
        </div>

        {/* ヒーローセクション */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-6">
              <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1 rounded-full">
                出産内祝いガイド
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              出産内祝い（お返し）の相場は半返し？<br />
              <span className="text-pink-600">関係性別の金額目安・マナー・のしの書き方</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              出産内祝い（お返し）の相場は「半返し」が基本ですが、親族・職場・高額祝いでは調整が必要です。この記事では、関係性別の金額目安、贈る時期、のしの書き方、避けたいNGまでまとめて解説します。
            </p>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">

          {/* 本文コンテンツ */}
          <div className="prose prose-lg max-w-none">
            
            {/* セクション1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                出産内祝いとは？まず押さえる前提
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                出産内祝いは、出産祝いをいただいた方へ「感謝の気持ち」を伝えるお返しです。最近は「内祝い＝お返し」の意味で使われるのが一般的で、形式よりも<strong className="text-pink-600">失礼がないこと・相手に負担をかけないこと</strong>が大切です。
              </p>
            </section>

            {/* セクション2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                出産内祝いの相場は「半返し」が基本。でも例外が多い
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                よく聞く「半返し（いただいた金額の半分程度）」は確かに基準になります。ただ、出産内祝いは関係性や金額によって&ldquo;ちょうどよさ&rdquo;が変わります。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                基本ルール（迷ったらここ）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>いただいた額の<strong>1/3〜1/2</strong>を目安</li>
                <li>迷うゾーンは<strong>1/3寄り</strong>にすると相手が受け取りやすいことが多い</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                例外になりやすい3パターン
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>親・祖父母など近い親族</strong>（高額になりやすい）</li>
                <li><strong>職場の連名</strong>（人数が多い）</li>
                <li><strong>高額の出産祝い</strong>（半返しだと返しが重くなる）</li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                この3つは「半返し」を機械的に当てはめないほうが、結果的にスマートです。
              </p>
            </section>

            {/* セクション3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                【関係性別】内祝いの金額目安（相手が受け取りやすい落としどころ）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                以下は「よくある出産祝い額」から逆算した内祝いの目安です。
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead className="bg-pink-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-bold">相手</th>
                      <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-bold">出産祝いでもらいがち</th>
                      <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-bold">内祝いの目安</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">友達・同僚（個人）</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">3,000円</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,000〜1,500円程度</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">友達・同僚（個人）</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">5,000円</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,500〜2,500円程度</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">親しい友達・同僚</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">10,000円</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">3,000〜5,000円程度</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">親族（叔父叔母・いとこ等）</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">10,000円</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">3,000〜5,000円程度</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">親・祖父母</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">30,000円</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">5,000〜10,000円程度<br /><span className="text-sm text-gray-600">（無理のない範囲で）</span></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">高額（例：50,000円）</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">50,000円</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">10,000〜15,000円程度<br /><span className="text-sm text-gray-600">（半返しにしないことも多い）</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed">
                ポイントは「相手の気持ちに対して、こちらが無理なく丁寧に返す」こと。特に親・祖父母は「お返し不要」の気持ちで包んでくれていることも多いので、金額を追いすぎず、<strong>品物＋メッセージ</strong>で誠実さを出すのがうまくいきます。
              </p>
            </section>

            {/* セクション4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                【職場の連名】内祝いの計算方法（ここが一番ややこしい）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                連名は「総額」に対して返そうとすると、数が増えすぎたり金額が不自然になりがちです。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                失敗しにくい考え方
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li><strong>1人あたり</strong>で均等に分ける（個包装が便利）</li>
                <li>1人あたりのお返しは<strong>500〜1,500円程度</strong>が収まりやすいことが多い</li>
              </ul>

              <div className="bg-gray-50 border-l-4 border-pink-400 p-6 mb-4">
                <p className="text-sm text-gray-600 mb-2 font-bold">例）連名で10,000円いただいた（10名）</p>
                <p className="text-gray-700 leading-relaxed">
                  1人あたり 1,000円相当の個包装お菓子<br />
                  → 配りやすく、職場での運用が楽です。
                </p>
              </div>

              <p className="text-sm text-gray-600 bg-yellow-50 p-4 rounded">
                ※職場の慣例（内祝いを省略する／部署で回す等）がある場合は、必ずそれに合わせるのが安全です。
              </p>
            </section>

            {/* セクション5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                贈る時期はいつ？遅れたらどうする？
              </h2>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                目安は「産後1か月ごろ」
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                一般的には、出産後1か月頃（お宮参りの時期）を目安に贈ることが多いです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                遅れそうなら「先に一言」が最強
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                遅れること自体より、何も連絡がないことの方が気まずくなりがちです。一言連絡しておくと印象が良くなります。
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2 font-bold">例文（LINE）</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  「お祝いありがとうございました。内祝いの手配が少し遅れていて、来週中にはお届けできそうです。遅くなってしまいすみません！」
                </p>
              </div>
            </section>

            {/* セクション6 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                のし（熨斗）の書き方：これだけ押さえればOK
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                出産内祝いののしは、難しく見えて型があります。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                水引
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li><strong>紅白の蝶結び（花結び）</strong>（何度あってもよいお祝いの結び）</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                表書き（上）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>「<strong>内祝</strong>」または「<strong>出産内祝</strong>」が一般的</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                名入れ（下）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>赤ちゃんの名前</strong>を書くのが一般的（苗字は書かないことが多い）</li>
                <li>読みづらい名前は<strong>ふりがな</strong>を付けると丁寧</li>
              </ul>
            </section>

            {/* セクション7 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                内祝いの品物、何を選ぶと失敗しにくい？
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                相手の負担になりにくいのは、次の方向性です。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                1）消えもの（お菓子・食品）
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                職場や親戚にも強く、好みの地雷が少なめ。個包装ならなお良いです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                2）カタログギフト
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                好みがわからない相手に強い選択肢。親族・目上にも合わせやすいです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                3）タオルなど実用品
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                実用性は高いですが、好みや品質差が出やすいので「上質・無難」を意識すると失敗しにくいです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                4）名入れギフト（注意点あり）
              </h3>
              <p className="text-gray-700 leading-relaxed">
                記念として喜ばれる一方、相手の好みに合わない可能性もあります。相手が身近で好みが読める場合に寄せるのが安全です。
              </p>
            </section>

            {/* セクション8 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                これは避けたい：内祝いのNG（地味に印象が下がる）
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>いただいた金額に対して明らかに高すぎる（相手が気を遣う）</li>
                <li>逆に安すぎて雑に見える（特に親族）</li>
                <li>受け取りが大変な配送（日時指定なし・冷蔵なのに事前連絡なし等）</li>
                <li>職場で配れないもの（個包装なし・切り分け必須など）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                内祝いは「相手がラク」が正解になりやすいです。
              </p>
            </section>

            {/* セクション9 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                メッセージカード例文（短く丁寧がいちばん伝わる）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                内祝いは品物だけより、短文でもメッセージがあると印象が上がります。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                友達・同僚へ
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  「お祝いありがとうございました。おかげさまで母子ともに元気に過ごしています。ささやかですが内祝いをお贈りします。今後ともよろしくお願いします。」
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                上司・目上へ
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  「このたびはご丁寧なお祝いを賜り、誠にありがとうございました。おかげさまで母子ともに健やかに過ごしております。ささやかではございますが内祝いの品をお贈りいたします。」
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                親族へ
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  「お祝いをありがとうございました。いただいたお気持ち、とても嬉しかったです。ささやかですが内祝いを贈ります。今後とも見守ってもらえたら嬉しいです。」
                </p>
              </div>
            </section>

            {/* FAQセクション */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                FAQ（よくある質問）
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Q1. 出産内祝いは「半返し」が絶対？
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    絶対ではありません。基本は1/3〜1/2ですが、親・祖父母や高額祝い、職場の連名などは調整することが多いです。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Q2. 内祝いを贈るのが遅れたら失礼？
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    遅れても大丈夫なことが多いです。遅れそうな時点で一言連絡し、できるだけ早めに贈ると丁寧です。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Q3. 職場の連名への内祝いはどうする？
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    総額で考えず「1人あたり」で配れる形（個包装）がスムーズです。目安は1人あたり500〜1,500円程度が収まりやすいです。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Q4. のしの名入れは親の名前？赤ちゃんの名前？
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    一般的には赤ちゃんの名前です。読みづらい場合はふりがなを付けると親切です。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Q5. ギフトカードで内祝いを返してもいい？
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    相手や関係性によります。親しい友人には便利なこともありますが、目上や親族には品物のほうが無難な場合が多いです。
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 text-center shadow-sm border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              内祝いギフトを探す
            </h3>
            <p className="text-gray-700 mb-6">
              内祝いは、相手への感謝を丁寧に伝える大切な機会です。
            </p>
            <Link
              href="/birth_celebration"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-md"
            >
              内祝いギフトを探す
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

