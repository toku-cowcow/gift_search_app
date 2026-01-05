/**
 * 母の日メッセージ例文集記事ページ
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
      "name": "母の日のメッセージは短くてもいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "短くても大丈夫です。「ありがとう＋体調気づかい」だけでも十分伝わります。"
      }
    },
    {
      "@type": "Question",
      "name": "義母へのメッセージで気をつけることは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "丁寧語にして、負担になる表現（無理な約束など）を避けると安心です。"
      }
    },
    {
      "@type": "Question",
      "name": "LINEだけでも失礼じゃない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "普段の関係性によりますが、LINEでも問題ないことが多いです。可能なら一言丁寧にすると印象が良いです。"
      }
    },
    {
      "@type": "Question",
      "name": "遅れて送る場合はどう書く？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "「遅くなったけど、ありがとう」を短く添えれば十分です。"
      }
    },
    {
      "@type": "Question",
      "name": "感謝以外に何を書けばいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "体調を気づかう一言や「また会おうね」を添えると温度感が上がります。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '母の日メッセージ例文集｜実母・義母・LINEでそのまま使える文例',
  description: '母の日のメッセージで迷っている方へ。実母・義母・LINE・遠距離など状況別にそのまま使える例文を紹介。短い文でも感謝が伝わるコツを解説します。',
  keywords: ['母の日', 'メッセージ', '例文', '実母', '義母', 'LINE', 'カード'],
  openGraph: {
    title: '母の日メッセージ例文集｜実母・義母・LINEでそのまま使える文例',
    description: '母の日のメッセージで迷っている方へ。実母・義母・LINE・遠距離など状況別にそのまま使える例文を紹介。短い文でも感謝が伝わるコツを解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/mothers_day/message-examples',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/mothers_day/message-examples',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function MessageExamplesArticle() {
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
            <span className="text-gray-800">メッセージ例文集</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-lg shadow-md p-8">
            {/* タイトル（h1） */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              母の日メッセージ例文集｜実母・義母・LINEでそのまま使える文例
            </h1>

            {/* 最終更新日 */}
            <p className="text-sm text-gray-500 mb-6">
              最終更新日: 2026-01-05
            </p>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="mb-3">
                母の日は、プレゼント以上に<strong>「言葉」が効く日</strong>です。
              </p>
              <p className="mb-3">
                でも実際は、照れくさい、何を書けばいいか分からない、義母には距離感が難しい…となりがち。
              </p>
              <p className="mb-3">
                この記事では、<strong>状況別にそのまま使える母の日メッセージ例文</strong>をまとめました。短い文でも、感謝が伝わるコツも解説します。
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

            {/* セクション1: 基本 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                母の日メッセージの基本（失敗しない型）
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 迷ったら、この3点を入れるだけで整います。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>ありがとう</strong>（感謝）</li>
                  <li><strong>体調を気づかう</strong>（無理しないでね）</li>
                  <li><strong>これからもよろしく</strong>（元気でいてね）</li>
                </ol>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">例（最短）</h3>
                <p className="bg-white p-4 rounded text-gray-700">
                  「いつもありがとう。体に気をつけて、元気でいてね。」
                </p>
              </div>
            </section>

            {/* セクション2: 実母向け */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                実母へ｜短くて自然な例文
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつもありがとう。無理しすぎないでね。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつも助けてくれてありがとう。これからも元気でいてね。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">ありがとう。今度ゆっくりご飯行こう。</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">少し長め</h3>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-700">
                    いつも本当にありがとう。お母さんのおかげで助かってます。体に気をつけて、これからも元気でいてね。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション3: 義母向け */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                義母へ｜丁寧で角が立たない例文
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつもありがとうございます。ささやかですが感謝の気持ちです。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつも温かく見守っていただき、ありがとうございます。今後ともよろしくお願いいたします。</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">少し長め</h3>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-700">
                    いつもお心遣いいただきありがとうございます。日頃の感謝の気持ちを込めて贈ります。どうぞお体にお気をつけてお過ごしください。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション4: LINE・DM向け */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                LINE・DM向け｜短文で気持ちが伝わる例文
              </h2>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつもありがとう！体に気をつけてね。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">ありがとう。無理しすぎないで、たまには休んでね。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつも感謝してるよ。また近いうちに会おうね。</p>
                </div>
              </div>
            </section>

            {/* セクション5: 遠距離向け */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                遠距離のとき｜会えない前提で温かい例文
              </h2>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">なかなか会えないけど、いつもありがとう。体に気をつけてね。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつも気にかけてくれてありがとう。落ち着いたら会いに行くね。</p>
                </div>
              </div>
            </section>

            {/* セクション6: 夫婦連名 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                夫婦連名で送る｜義母にも使いやすい例文
              </h2>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつもありがとうございます。二人より感謝の気持ちです。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつもお世話になっております。今後ともよろしくお願いいたします。</p>
                </div>
              </div>
            </section>

            {/* セクション7: 一言フレーズ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                一言添えると印象が上がるフレーズ集
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li>いつも助けてもらってます</li>
                  <li>たまにはゆっくり休んでね</li>
                  <li>また近いうちに会おうね</li>
                  <li>体に気をつけてね</li>
                </ul>
              </div>
            </section>

            {/* セクション8: カード向け */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                プレゼントに添える短文（カード向け）
              </h2>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつもありがとう。感謝の気持ちです。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">ありがとう。これからも元気でいてね。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">いつも支えてくれてありがとう。</p>
                </div>
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 母の日のメッセージは短くてもいい？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    短くても大丈夫です。「ありがとう＋体調気づかい」だけでも十分伝わります。
                  </p>
                </div>

                {/* Q2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 義母へのメッセージで気をつけることは？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    丁寧語にして、負担になる表現（無理な約束など）を避けると安心です。
                  </p>
                </div>

                {/* Q3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. LINEだけでも失礼じゃない？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    普段の関係性によりますが、LINEでも問題ないことが多いです。可能なら一言丁寧にすると印象が良いです。
                  </p>
                </div>

                {/* Q4 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 遅れて送る場合はどう書く？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    「遅くなったけど、ありがとう」を短く添えれば十分です。
                  </p>
                </div>

                {/* Q5 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 感謝以外に何を書けばいい？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    体調を気づかう一言や「また会おうね」を添えると温度感が上がります。
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
