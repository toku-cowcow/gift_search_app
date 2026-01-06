/**
 * 父の日メッセージ例文集記事ページ
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
      "name": "父の日メッセージは短くても失礼じゃない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "短くても問題ありません。「ありがとう」に体調を気づかう一言があると十分伝わります。"
      }
    },
    {
      "@type": "Question",
      "name": "義父へのメッセージで気をつけることは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "丁寧語にして、踏み込みすぎる表現を避けると安心です。短く礼儀正しくが基本です。"
      }
    },
    {
      "@type": "Question",
      "name": "LINEだけでも大丈夫？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "関係性にもよりますが、LINEでも問題ないことが多いです。短く感謝を伝えるだけで印象は良くなります。"
      }
    },
    {
      "@type": "Question",
      "name": "遅れて送る場合はどう書けばいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "理由説明を長くせず「遅くなったけど、ありがとう」を短く添えるのが一番自然です。"
      }
    },
    {
      "@type": "Question",
      "name": "「何もいらない」と言う父には何を書けばいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "プレゼントの話より「いつもありがとう」「体に気をつけてね」を短く伝えるのが効果的です。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '父の日メッセージ例文集｜実父・義父・LINEでそのまま使える文例と書き方',
  description: '父の日のメッセージで迷う人向けに、短文・丁寧・LINE・義父向けなど状況別の例文を網羅。失礼にならない書き方、気まずくならないコツ、遅れたときのフォロー文までまとめました。',
  keywords: ['父の日', 'メッセージ', '例文', '実父', '義父', 'LINE'],
  openGraph: {
    title: '父の日メッセージ例文集｜実父・義父・LINEでそのまま使える文例と書き方',
    description: '父の日のメッセージで迷う人向けに、短文・丁寧・LINE・義父向けなど状況別の例文を網羅。失礼にならない書き方、気まずくならないコツ、遅れたときのフォロー文までまとめました。',
    type: 'article',
    url: 'https://www.hare-gift.com/fathers_day/fathers-day-message-examples',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/fathers_day/fathers-day-message-examples',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function FathersDayMessageExamplesArticle() {
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
            <Link href="/fathers_day" className="hover:text-pink-600 transition-colors">
              父の日
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">メッセージ例文集</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-lg shadow-md p-8">
            {/* タイトル（h1） */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              父の日メッセージ例文集｜実父・義父・LINEでそのまま使える文例と書き方
            </h1>

            {/* 最終更新日 */}
            <p className="text-sm text-gray-500 mb-6">
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="mb-3">
                父の日は、プレゼント以上に<strong>「言葉」が効く日</strong>です。
              </p>
              <p className="mb-3">
                でも実際は<strong>「照れくさい」「何を書けばいいか分からない」「義父には距離感が難しい」</strong>と迷いがち。
              </p>
              <p className="mb-3">
                この記事では、父の日にそのまま使えるメッセージ例文を状況別にまとめました。
              </p>
              <p className="mb-3">
                短文でも気持ちが伝わる「型」や、気まずくならない言い回し、遅れてしまったときのフォロー文まで、<strong>コピペで使える形で深掘り</strong>します。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4">📋 この記事でわかること</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                <li>父の日メッセージの基本の型（短文でも整う）</li>
                <li>実父向け／義父向けの例文（距離感別）</li>
                <li>LINE・SMS向けの短文例</li>
                <li>遠距離・会えない場合の言い方</li>
                <li>遅れてしまったときのフォロー例文</li>
                <li>1行添えるだけで印象が上がるフレーズ集</li>
              </ul>
            </div>

            {/* CTA1 */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-8">
              <p className="text-lg font-bold mb-3">父の日ギフトをカテゴリから探す</p>
              <Link
                href="/fathers_day"
                className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                父の日ギフトを探す
              </Link>
            </div>

            {/* セクション1: 短くていい理由 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                💡 父の日メッセージは「短くていい」理由
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                父の日メッセージで一番大切なのは、文章力ではなく<strong>「伝えたい気持ちが分かる」</strong>ことです。
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                長文にすると、逆に照れや言い訳っぽさが出てしまうこともあります。
              </p>
              <p className="text-gray-700 leading-relaxed">
                迷ったら、短く<strong>「感謝＋気づかい」で十分</strong>。<br />
                まずは「整う型」を押さえてから、例文を選ぶのが一番早いです。
              </p>
            </section>

            {/* セクション2: 基本の型 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                ✓ 迷ったらこれだけ：失敗しない「基本の型」
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                父の日メッセージは、この3点を入れると自然に整います。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>ありがとう</strong>（感謝）</li>
                  <li><strong>体調を気づかう</strong>（無理しないでね）</li>
                  <li><strong>これからもよろしく</strong>（元気でいてね）</li>
                </ol>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">最短テンプレ（そのまま使える）</h3>
                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-gray-700">
                      「いつもありがとう。体に気をつけて、これからも元気でいてね。」
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">少し柔らかいテンプレ</h3>
                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-gray-700">
                      「いつもありがとう。たまにはゆっくり休んでね。」
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション3: 実父へ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                💌 実父へ｜短くて自然な例文（コピペOK）
              </h2>

              {/* 短文（定番） */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">短文（定番）</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「いつもありがとう。体に気をつけてね。」</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「いつも助かってるよ。ありがとう。」</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「お父さん、いつもありがとう。たまには休んでね。」</p>
                  </div>
                </div>
              </div>

              {/* 少し照れくさい人向け */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">少し照れくさい人向け（硬すぎない）</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「面と向かって言えないけど、いつもありがとう。」</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「いつもありがとう。感謝してます。」</p>
                  </div>
                </div>
              </div>

              {/* 少し長め */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">少し長め（気持ちをしっかり）</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「いつも支えてくれてありがとう。無理しすぎないで、これからも元気でいてね。」</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「いつもありがとう。今度時間が合うときに、ごはん行こう。」</p>
                  </div>
                </div>
              </div>

              {/* 父が忙しい場合 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">父が忙しい場合（労い寄せ）</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「いつもお疲れさま。体に気をつけてね。ありがとう。」</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「無理しすぎないでね。いつもありがとう。」</p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション4: 義父へ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                🎩 義父へ｜丁寧で角が立たない例文（距離感別）
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                義父向けは<strong>「丁寧さ」と「短さ」が強い</strong>です。<br />
                踏み込みすぎず、礼儀が伝わる言い回しが安心です。
              </p>

              {/* 丁寧（無難） */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">丁寧（無難）</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-gray-700 text-sm">「いつもお世話になっております。日頃の感謝の気持ちです。」</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-gray-700 text-sm">「いつもありがとうございます。どうぞお体にお気をつけてお過ごしください。」</p>
                  </div>
                </div>
              </div>

              {/* 少し温かい */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">少し温かい（関係性が良い場合）</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-gray-700 text-sm">「いつも温かく見守っていただき、ありがとうございます。これからもよろしくお願いいたします。」</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-gray-700 text-sm">「いつもありがとうございます。お体に気をつけて、元気にお過ごしください。」</p>
                  </div>
                </div>
              </div>

              {/* 夫婦連名 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">夫婦連名で送りやすい</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-gray-700 text-sm">「いつもありがとうございます。二人より感謝の気持ちです。」</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-gray-700 text-sm">「日頃よりお心遣いいただきありがとうございます。今後ともよろしくお願いいたします。」</p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション5: LINE・SMS向け */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                📱 LINE・SMS向け｜短文で気持ちが伝わる例文
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                LINEは短いほど自然です。句読点を減らしてもOK。
              </p>

              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-green-400">
                  <p className="text-gray-700 text-sm">「父の日おめでとう！いつもありがとう」</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-green-400">
                  <p className="text-gray-700 text-sm">「いつもありがとう。体に気をつけてね」</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-green-400">
                  <p className="text-gray-700 text-sm">「ありがとう！たまにはゆっくり休んでね」</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-green-400">
                  <p className="text-gray-700 text-sm">「いつも感謝してるよ。また連絡するね」</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded mt-6">
                <p className="text-gray-700 text-sm">
                  💡 絵文字なしでも十分伝わります。<br />
                  どうしても照れるなら、短文＋スタンプでも成立します。
                </p>
              </div>
            </section>

            {/* セクション6: 遠距離 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                🌍 会えない・遠距離｜&quot;距離&quot;を埋める言い方
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                会えない状況を言い訳にせず、<strong>次につながる一言が効きます</strong>。
              </p>

              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-purple-400">
                  <p className="text-gray-700 text-sm">「なかなか会えないけど、いつもありがとう。体に気をつけてね。」</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-purple-400">
                  <p className="text-gray-700 text-sm">「また落ち着いたら会いに行くね。いつもありがとう。」</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-purple-400">
                  <p className="text-gray-700 text-sm">「いつも気にかけてくれてありがとう。元気でいてね。」</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                <h3 className="font-semibold text-gray-800 mb-3 text-sm">予定を添えると温度感が上がる</h3>
                <div className="bg-white p-4 rounded">
                  <p className="text-gray-700 text-sm">「今度時間が合う日に、食事でも行こう。いつもありがとう。」</p>
                </div>
              </div>
            </section>

            {/* セクション7: カード向け超短文 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                🎴 プレゼントに添える「カード向け」超短文
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                カードは短いほど上品にまとまります。
              </p>

              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                  <p className="text-gray-700 text-sm">「いつもありがとう。」</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                  <p className="text-gray-700 text-sm">「感謝の気持ちです。」</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                  <p className="text-gray-700 text-sm">「いつもお疲れさま。ありがとう。」</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                  <p className="text-gray-700 text-sm">「体に気をつけて、元気でいてね。」</p>
                </div>
              </div>
            </section>

            {/* セクション8: 遅れたとき */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                ⏰ 遅れてしまったとき｜気まずくならないフォロー文
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                遅れたときほど、<strong>理由説明を長くしないのがコツ</strong>です。<br />
                「遅れた」より「感謝」を中心に置きます。
              </p>

              {/* 短文（万能） */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">短文（万能）</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-orange-400">
                    <p className="text-gray-700 text-sm">「遅くなったけど、父の日おめでとう。いつもありがとう。」</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-orange-400">
                    <p className="text-gray-700 text-sm">「遅くなってごめんね。いつもありがとう。」</p>
                  </div>
                </div>
              </div>

              {/* 丁寧（義父にも） */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">丁寧（義父にも）</h3>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-orange-400">
                  <p className="text-gray-700 text-sm">「遅くなり申し訳ございません。日頃の感謝の気持ちです。」</p>
                </div>
              </div>

              {/* 後日会える前提 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">後日会える前提</h3>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-orange-400">
                  <p className="text-gray-700 text-sm">「遅くなったけど、今度会ったときに改めて。いつもありがとう。」</p>
                </div>
              </div>
            </section>

            {/* セクション9: 一言足しフレーズ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                ✨ 気まずくならない「一言足し」フレーズ集
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                文章が短くても、この一言で印象が上がります。
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">労い</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>「いつもお疲れさま」</li>
                    <li>「無理しすぎないでね」</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">尊敬</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>「いつも頼りにしてるよ」</li>
                    <li>「いつもすごいなと思ってる」</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">未来につなぐ</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>「またごはん行こう」</li>
                    <li>「今度ゆっくり話そう」</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション10: 埋める順番 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                📝 何を書けばいいか迷ったら：この順で埋める
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                迷ったときは、空欄を埋める感覚でOKです。
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside text-gray-700 space-y-3 ml-2">
                  <li>「いつもありがとう。」</li>
                  <li>「最近は（体/仕事/忙しさ）大丈夫？」</li>
                  <li>「また（ごはん/電話/会う）しよう。」</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">例（完成形）</h3>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                  <p className="text-gray-700 text-sm">「いつもありがとう。最近忙しいと思うけど、無理しすぎないでね。またごはん行こう。」</p>
                </div>
              </div>
            </section>

            {/* セクション11: 内部リンク */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                🎁 父の日ギフトも一緒に探すなら
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                メッセージを書いたら、あとはギフトを決めるだけ。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                選び方に迷う場合は、別記事で相場や選び方をまとめています。
              </p>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded">
                <Link
                  href="/fathers_day/how-to-choose-fathers-day-gift"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  → 父の日プレゼントの選び方｜相場・人気ランキング・外さないギフト大全
                </Link>
              </div>
            </section>

            {/* CTA2 */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-12">
              <p className="text-lg font-bold mb-3">人気順・予算別で父の日ギフトを探す</p>
              <Link
                href="/fathers_day"
                className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                父の日ギフトを探す
              </Link>
            </div>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-pink-500">
                ❓ よくある質問（FAQ）
              </h2>

              <div className="space-y-6">
                {/* Q1 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 父の日メッセージは短くても失礼じゃない？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    短くても問題ありません。「ありがとう」に体調を気づかう一言があると十分伝わります。
                  </p>
                </div>

                {/* Q2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 義父へのメッセージで気をつけることは？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    丁寧語にして、踏み込みすぎる表現を避けると安心です。短く礼儀正しくが基本です。
                  </p>
                </div>

                {/* Q3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. LINEだけでも大丈夫？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    関係性にもよりますが、LINEでも問題ないことが多いです。短く感謝を伝えるだけで印象は良くなります。
                  </p>
                </div>

                {/* Q4 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 遅れて送る場合はどう書けばいい？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    理由説明を長くせず「遅くなったけど、ありがとう」を短く添えるのが一番自然です。
                  </p>
                </div>

                {/* Q5 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 「何もいらない」と言う父には何を書けばいい？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    プレゼントの話より「いつもありがとう」「体に気をつけてね」を短く伝えるのが効果的です。
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
