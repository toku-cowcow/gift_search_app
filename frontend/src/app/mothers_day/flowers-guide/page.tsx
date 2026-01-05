/**
 * 母の日の花ギフト完全ガイド記事ページ
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
      "name": "母の日の花は花束とアレンジどっちが無難？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "迷ったらアレンジがおすすめです。花瓶不要で\"そのまま飾れる\"ので負担が少ないです。"
      }
    },
    {
      "@type": "Question",
      "name": "鉢植えは失礼じゃない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "失礼ではありません。ただし手入れが必要なので、相手が植物好きでない限りはアレンジのほうが安全です。"
      }
    },
    {
      "@type": "Question",
      "name": "遠距離で花を贈るときの注意点は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "受け取りやすさが重要です。相手の在宅時間に合わせ、サイズは大きすぎないものが安心です。"
      }
    },
    {
      "@type": "Question",
      "name": "カーネーション以外でも母の日っぽくなる？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "なります。花の種類より、色味と\"母の日らしい気持ち\"が伝わるかが大事です。"
      }
    },
    {
      "@type": "Question",
      "name": "花に何かを足すなら何が無難？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "個包装で日持ちする焼き菓子や、お茶などの軽い消耗品が合わせやすいです。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '母の日の花ギフト完全ガイド｜花束・アレンジ・鉢植えの違いと失敗しない選び方',
  description: '母の日は花が王道。でも花束・アレンジ・鉢植えで"負担"が変わる。この記事では花ギフトの種類別の向き不向き、色やサイズ、配送の注意点まで深掘りで解説します。',
  keywords: ['母の日', '花', '花束', 'アレンジメント', '鉢植え', 'プリザーブドフラワー', 'カーネーション'],
  openGraph: {
    title: '母の日の花ギフト完全ガイド｜花束・アレンジ・鉢植えの違いと失敗しない選び方',
    description: '母の日は花が王道。でも花束・アレンジ・鉢植えで"負担"が変わる。この記事では花ギフトの種類別の向き不向き、色やサイズ、配送の注意点まで深掘りで解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/mothers_day/flowers-guide',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/mothers_day/flowers-guide',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function FlowersGuideArticle() {
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
            <span className="text-gray-800">花ギフト完全ガイド</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-lg shadow-md p-8">
            {/* タイトル（h1） */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              母の日の花ギフト完全ガイド｜花束・アレンジ・鉢植えの違いと失敗しない選び方
            </h1>

            {/* 最終更新日 */}
            <p className="text-sm text-gray-500 mb-6">
              最終更新日: 2026-01-05
            </p>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="mb-3">
                母の日ギフトの王道といえば<strong>花</strong>。写真映えもして「母の日らしさ」が一瞬で伝わります。
              </p>
              <p className="mb-3">
                ただ、花選びで意外と多い失敗が<strong>「気持ちは嬉しいけど、手入れが大変」「置く場所がない」「受け取りが難しい」</strong>など、&quot;負担&quot;の部分。
              </p>
              <p className="mb-3">
                この記事では、花束・アレンジ・鉢植え・プリザーブドなど、<strong>花ギフトの種類ごとの違いと、外しにくい選び方</strong>を深掘りでまとめます。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-3">🌸 この記事でわかること</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                <li>花束/アレンジ/鉢植えの違い（どれが無難？）</li>
                <li>失敗しない花ギフトの選び方（負担・サイズ・色・配送）</li>
                <li>カーネーション以外の選択肢（迷ったときの考え方）</li>
                <li>遠距離で贈るときの注意点</li>
                <li>花に添える一言メッセージのコツ（例文は別記事へ誘導）</li>
              </ul>
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

            {/* セクション1: 花が強い理由 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                母の日に花が強い理由（&quot;花は無難&quot;の正体）
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                💐 花が母の日ギフトで強いのは、次の特徴があるからです。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>季節感とイベント感が出る</strong>（母の日らしさが伝わる）</li>
                  <li><strong>飾った瞬間に部屋が明るくなる</strong>（体験価値が高い）</li>
                  <li><strong>食の好みやサイズ感より&quot;好みの地雷&quot;が少ない</strong>（ただしゼロではない）</li>
                </ul>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded">
                <p className="text-gray-800 text-sm">
                  ただし、義母・遠距離・忙しいお母さんの場合は<strong>「花の形」を間違えると負担になりやすい</strong>ので、種類選びが重要です。
                </p>
              </div>
            </section>

            {/* セクション2: 花ギフト4種類 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                花ギフトは4種類ある｜まずは&quot;形&quot;で選ぶと失敗が減る
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                母の日の花ギフトは、ざっくり次の4種類に分けると整理できます。
              </p>

              <div className="space-y-6">
                {/* 花束 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">1) 花束（王道・軽く渡しやすい）</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">向いている人</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                      <li>直接会って手渡しできる</li>
                      <li>花瓶がある（または花瓶を用意する余裕がある）</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-sm text-gray-800">
                      <strong>注意点：</strong>花瓶が必要なことが多い（相手の家に花瓶がないと困る）
                    </p>
                  </div>
                </div>

                {/* アレンジメント */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">2) フラワーアレンジメント（&quot;そのまま飾れる&quot;最強枠）</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">向いている人</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                      <li>忙しい/手入れが苦手</li>
                      <li>遠距離配送で贈りたい（箱から出して置くだけが理想）</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">強い理由</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                      <li>花瓶不要で&quot;受け取った瞬間に完成&quot;</li>
                      <li>手間が少なく、満足度が高い</li>
                    </ul>
                  </div>
                </div>

                {/* 鉢植え */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">3) 鉢植え（長く楽しめるが、負担にもなる）</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">向いている人</h4>
                    <p className="text-gray-700 text-sm ml-2">植物が好き、育てるのが得意</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-3">
                    <p className="text-sm text-gray-800 mb-1">
                      <strong>注意点（重要）：</strong>水やり・置き場所・日当たりなど、相手の生活に合わないと負担
                    </p>
                  </div>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded">
                    <p className="text-sm text-gray-800">
                      <strong>迷ったら：</strong>初心者向け/手入れ少なめが安心。自信がなければアレンジメントに寄せる。
                    </p>
                  </div>
                </div>

                {/* プリザーブド */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">4) プリザーブド/ドライ（&quot;手入れゼロ&quot;だが好みが分かれる）</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">向いている人</h4>
                    <p className="text-gray-700 text-sm ml-2">生花の手入れが難しい（忙しい/遠距離/介護など）</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-3">
                    <p className="text-sm text-gray-800">
                      <strong>注意点：</strong>&quot;インテリアの好み&quot;が出やすい（色・雰囲気が合わないと飾りづらい）
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-sm text-gray-800">
                      <strong>失敗回避：</strong>色は落ち着いたトーン、サイズは小さめ〜中くらいが無難
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション3: チェックリスト */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                失敗しない花ギフトの選び方（チェックリスト）
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                💡 花は「どの花」より<strong>「相手の負担を増やさない設計」</strong>が重要です。
              </p>

              <div className="space-y-5">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">✓ チェック1：相手は手入れが得意？忙しい？</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>忙しい/苦手：アレンジメント寄せ</li>
                    <li>得意/好き：鉢植えも選択肢</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">✓ チェック2：置き場所はある？（サイズ感）</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>大きすぎると飾れない</li>
                    <li>迷ったら&quot;テーブルに置けるサイズ&quot;が安全</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">✓ チェック3：色は&quot;好み&quot;が出る（分からなければ無難寄せ）</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>好みが分かる：好きな色へ</li>
                    <li>分からない：淡い/落ち着いた色味に寄せる（派手すぎは避ける）</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">✓ チェック4：香りが強すぎないか（体調・好み）</h3>
                  <p className="text-gray-700 text-sm">
                    香りの強いものは、好みや体調で合わない場合もあります。<br />
                    分からない場合は控えめに。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">✓ チェック5：遠距離なら&quot;受け取りやすさ&quot;を最優先</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>冷蔵が必要なセットは受け取りハードルが上がる</li>
                    <li>花は受け取り日時が合う設計が大事（在宅時間に合わせる）</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション4: カーネーション以外 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                カーネーション以外もOK｜&quot;選び方の考え方&quot;だけ押さえる
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                母の日＝カーネーションの印象は強いですが、<strong>絶対ではありません</strong>。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                迷ったときは<strong>「相手の部屋に合う雰囲気」「手入れの負担」</strong>を優先すると外れにくいです。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">選び方の例</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>&quot;母の日らしさ&quot;重視</strong>：王道カラー寄せのアレンジ</li>
                  <li><strong>&quot;長く楽しむ&quot;重視</strong>：育てやすい鉢植え（相手が植物好きなら）</li>
                  <li><strong>&quot;手入れゼロ&quot;重視</strong>：プリザーブド（好みの雰囲気を確認できるなら）</li>
                </ul>
              </div>
            </section>

            {/* セクション5: 花＋何か */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                花＋何かで満足度が上がる（でも&quot;重くしすぎない&quot;）
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                花にプラスするなら、相手の負担になりにくい<strong>&quot;軽い添え物&quot;</strong>が相性良いです。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li>個包装で日持ちする焼き菓子</li>
                  <li>お茶（飲みやすいタイプ）</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                <p className="text-gray-800 text-sm mb-2">
                  「花以外の選び方」をもっと知りたい方はこちら
                </p>
                <Link
                  href="/articles/mothers_day/gift-ideas-beyond-flowers"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  → 母の日は花以外も人気｜実用・グルメ・体験のおすすめと選び方
                </Link>
              </div>
            </section>

            {/* セクション6: メッセージ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                花に添えるメッセージは短くていい（例文は別記事へ）
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                花は見た目で気持ちが伝わるので、<strong>文章は短くてOK</strong>です。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 text-sm mb-2">例：「いつもありがとう。体に気をつけてね。」</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                <p className="text-gray-800 text-sm mb-2">
                  例文を探している方はこちら
                </p>
                <Link
                  href="/articles/mothers_day/message-examples"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  → 母の日メッセージ例文集｜実母・義母・LINEでそのまま使える文例
                </Link>
              </div>
            </section>

            {/* CTA2 */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-12">
              <p className="text-lg font-bold mb-3">予算別・人気順で母の日ギフトを探す</p>
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 母の日の花は花束とアレンジどっちが無難？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    迷ったらアレンジがおすすめです。花瓶不要で&quot;そのまま飾れる&quot;ので負担が少ないです。
                  </p>
                </div>

                {/* Q2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 鉢植えは失礼じゃない？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    失礼ではありません。ただし手入れが必要なので、相手が植物好きでない限りはアレンジのほうが安全です。
                  </p>
                </div>

                {/* Q3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 遠距離で花を贈るときの注意点は？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    受け取りやすさが重要です。相手の在宅時間に合わせ、サイズは大きすぎないものが安心です。
                  </p>
                </div>

                {/* Q4 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. カーネーション以外でも母の日っぽくなる？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    なります。花の種類より、色味と&quot;母の日らしい気持ち&quot;が伝わるかが大事です。
                  </p>
                </div>

                {/* Q5 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 花に何かを足すなら何が無難？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    個包装で日持ちする焼き菓子や、お茶などの軽い消耗品が合わせやすいです。
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
