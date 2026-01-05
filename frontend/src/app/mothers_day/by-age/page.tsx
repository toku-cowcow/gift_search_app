/**
 * 母の日プレゼントは年代で選ぶ記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、CTA配置、内部リンク
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
      "name": "年代が分からない場合は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "年代より「忙しいか」「趣味があるか」「負担を増やしたくないか」で判断すると失敗が減ります。"
      }
    },
    {
      "@type": "Question",
      "name": "50代の母に実用的すぎるのは失礼？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "失礼ではありません。上質感があると特別感が出ます。"
      }
    },
    {
      "@type": "Question",
      "name": "70代の母に避けた方がいいのは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "重いもの、期限が短いもの、受け取りが難しい冷蔵冷凍は避けると安心です。"
      }
    },
    {
      "@type": "Question",
      "name": "年代別で一番差が出るのは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "\"負担\"と\"使い道の想像のしやすさ\"です。扱いやすさを優先すると外れにくいです。"
      }
    },
    {
      "@type": "Question",
      "name": "年代別でも花は無難？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "無難です。迷ったら手入れ負担の少ない形（アレンジ等）が安心です。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '母の日プレゼントは年代で選ぶ｜50代・60代・70代に喜ばれる傾向と失敗回避',
  description: '母の日の"正解"は年代で変わる。50代は忙しさ、60代は趣味とゆとり、70代は負担の少なさが鍵。年代別の選び方と外しにくい考え方を整理します。',
  keywords: ['母の日', 'プレゼント', '年代別', '50代', '60代', '70代', '選び方'],
  openGraph: {
    title: '母の日プレゼントは年代で選ぶ｜50代・60代・70代に喜ばれる傾向と失敗回避',
    description: '母の日の"正解"は年代で変わる。50代は忙しさ、60代は趣味とゆとり、70代は負担の少なさが鍵。年代別の選び方と外しにくい考え方を整理します。',
    type: 'article',
    url: 'https://www.hare-gift.com/mothers_day/by-age',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/mothers_day/by-age',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function ByAgeArticle() {
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
            <Link href="/mothers_day" className="hover:text-pink-600 transition-colors">
              母の日
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">年代別の選び方</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-lg shadow-md p-8">
            {/* タイトル（h1） */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              母の日プレゼントは年代で選ぶ｜50代・60代・70代に喜ばれる傾向と失敗回避
            </h1>

            {/* 最終更新日 */}
            <p className="text-sm text-gray-500 mb-6">
              最終更新日: 2026-01-05
            </p>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="mb-3">
                母の日プレゼントで迷う理由のひとつが、<strong>「好みが分からない」</strong>こと。
              </p>
              <p className="mb-3">
                でも実は、好み以前に<strong>&quot;生活&quot;が年代で変わります</strong>。忙しさ、体力、趣味、家で過ごす時間…。
              </p>
              <p className="mb-3">
                この記事では、<strong>50代・60代・70代それぞれで喜ばれやすいポイント</strong>を整理し、失敗しにくい選び方をまとめます。
              </p>
            </div>

            {/* CTA1 */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-8">
              <p className="text-lg font-bold mb-3">母の日ギフトをカテゴリから探す</p>
              <Link
                href="/mothers_day"
                className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                母の日ギフトを探す
              </Link>
            </div>

            {/* セクション1: 3つの軸 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                年代別で外れにくくする「3つの軸」
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                💡 年代が違っても、失敗しにくい軸は共通です。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>負担を増やさない</strong>（手入れ・置き場所・期限）</li>
                  <li><strong>日常で使える</strong>（出番がある）</li>
                  <li><strong>気持ちが伝わる</strong>（丁寧さ・メッセージ）</li>
                </ol>
              </div>
            </section>

            {/* セクション2: 50代 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                50代：忙しさに寄り添うと喜ばれやすい
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                50代は仕事・家事・親のケアなど、<strong>生活が詰まりやすい時期</strong>。<br />
                &quot;手間が増えるもの&quot;より、<strong>&quot;ラクになるもの&quot;が刺さりやすい</strong>傾向があります。
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">選び方の方向性</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>すぐ使える、消費できる</li>
                    <li>手入れ不要、片付けが簡単</li>
                    <li>家族で楽しめる（気持ちが伝わりやすい）</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">避けたい方向性</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>手入れが必要で負担が増えるもの</li>
                    <li>置き場所が必要な大きいもの</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション3: 60代 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                60代：趣味・ゆとり・&quot;自分の時間&quot;に合うと当たりやすい
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                60代は<strong>人によって差が大きい世代</strong>。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                仕事が落ち着いて趣味が広がる人もいれば、まだ現役で忙しい人もいます。<br />
                ここは<strong>「お母さんが何で時間を使っているか」で選ぶ</strong>のがコツです。
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">ヒントになる観察ポイント</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>最近ハマっていること（散歩/読書/料理/旅行など）</li>
                    <li>家で過ごす時間が増えたか</li>
                    <li>&quot;家での楽しみ&quot;があるか</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">失敗回避の考え方</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>趣味が分かるなら一点突破</li>
                    <li>分からないなら&quot;無難な消耗品＋丁寧メッセージ&quot;に戻る</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション4: 70代 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                70代：ポイントは&quot;負担の少なさ&quot;と&quot;扱いやすさ&quot;
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                70代は<strong>「嬉しいけど扱いきれない」が起きやすい世代</strong>。<br />
                体力・置き場所・受け取りのしやすさを最優先にすると失敗が減ります。
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">選び方の方向性</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                  <li>軽い、少ない、シンプル</li>
                  <li>期限に追われない（個包装・日持ち）</li>
                  <li>受け取りやすい（常温のほうが無難）</li>
                </ul>
              </div>
            </section>

            {/* セクション5: 年代別早見表 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                年代別早見表（考え方だけでOK）
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-pink-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">年代</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">喜ばれやすい軸</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">失敗しやすい軸</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">50代</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">時短/手間が増えない</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">手入れ負担/大型</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">60代</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">趣味/自分時間/少し特別</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">好みが強すぎる</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">70代</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">軽い/日持ち/受け取りやすい</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">期限が短い/重い</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* セクション6: 迷ったら戻る安全策 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                迷ったら戻る&quot;安全策&quot;（年代を問わず強い）
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                迷ったときは、選び方を戻すと失敗が減ります。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li>日持ちする個包装の消耗品</li>
                  <li>無難な花（手入れ負担が少ない形）</li>
                  <li>丁寧な短文メッセージ</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                  <p className="text-gray-800 text-sm mb-2">
                    花以外の一般的な選び方はこちら
                  </p>
                  <Link
                    href="/articles/mothers_day/gift-ideas-beyond-flowers"
                    className="text-pink-600 font-semibold hover:underline"
                  >
                    → 母の日は花以外も人気｜実用・グルメ・体験のおすすめと選び方
                  </Link>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                  <p className="text-gray-800 text-sm mb-2">
                    メッセージ例はこちら
                  </p>
                  <Link
                    href="/articles/mothers_day/message-examples"
                    className="text-pink-600 font-semibold hover:underline"
                  >
                    → 母の日メッセージ例文集｜実母・義母・LINEでそのまま使える文例
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA2 */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-12">
              <p className="text-lg font-bold mb-3">人気順・予算別で母の日ギフトを探す</p>
              <Link
                href="/mothers_day"
                className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                母の日ギフトを探す
              </Link>
            </div>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-pink-500">
                よくある質問（FAQ）
              </h2>

              <div className="space-y-6">
                {/* Q1 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 年代が分からない（お母さんが若い/年齢を聞きづらい）場合は？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    年代より「忙しいか」「趣味があるか」「負担を増やしたくないか」で判断すると失敗が減ります。
                  </p>
                </div>

                {/* Q2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 50代の母に&quot;実用的すぎる&quot;のは失礼？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    失礼ではありません。上質感があると特別感が出ます。
                  </p>
                </div>

                {/* Q3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 70代の母に避けた方がいいのは？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    重いもの、期限が短いもの、受け取りが難しい冷蔵冷凍は避けると安心です。
                  </p>
                </div>

                {/* Q4 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 年代別で一番差が出るのは？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    &quot;負担&quot;と&quot;使い道の想像のしやすさ&quot;です。扱いやすさを優先すると外れにくいです。
                  </p>
                </div>

                {/* Q5 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 年代別でも花は無難？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    無難です。迷ったら手入れ負担の少ない形（アレンジ等）が安心です。
                  </p>
                </div>
              </div>
            </section>

          </article>
        </main>
      </div>

      <Footer />
    </>
  );
}
