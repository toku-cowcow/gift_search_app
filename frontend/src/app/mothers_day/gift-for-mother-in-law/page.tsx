/**
 * 義母への母の日プレゼント記事ページ
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
      "name": "義母への母の日プレゼントの相場はいくら？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "一般的には3,000〜5,000円が無難で、丁寧にしたい場合は5,000〜10,000円が目安です。"
      }
    },
    {
      "@type": "Question",
      "name": "義母に花は無難？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "無難です。ただし鉢植えは手入れ負担になることがあるので、迷ったら花束やアレンジに寄せると安全です。"
      }
    },
    {
      "@type": "Question",
      "name": "義母に\"選べるギフト\"は失礼？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "失礼ではありません。理由を添えて丁寧に渡すと、合理的で喜ばれやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "避けた方がいいプレゼントは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "香りが強いもの、好みが割れるデザイン、手入れが必要なもの、期限が短い生菓子などは外れやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "遠距離で贈るときの注意点は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "受け取りやすさが重要です。常温で日持ちするものが扱いやすく、冷蔵・冷凍は事前配慮が必要です。"
      }
    },
    {
      "@type": "Question",
      "name": "義母へのメッセージは短くてもいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "短くても大丈夫です。「ありがとうございます」に体調を気づかう一言を添えると印象が良いです。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '義母への母の日プレゼント｜相場・失礼にならない選び方・無難で喜ばれるギフト【深掘り】',
  description: '義母への母の日は距離感とマナーが難しい。相場の目安、失礼になりにくい定番ジャンル、避けた方がいいギフト、角が立たない渡し方・メッセージ例まで、失敗しない選び方を深掘りで解説します。',
  keywords: ['義母', '母の日', 'プレゼント', '相場', '無難', 'マナー', '失礼にならない'],
  openGraph: {
    title: '義母への母の日プレゼント｜相場・失礼にならない選び方・無難で喜ばれるギフト【深掘り】',
    description: '義母への母の日は距離感とマナーが難しい。相場の目安、失礼になりにくい定番ジャンル、避けた方がいいギフト、角が立たない渡し方・メッセージ例まで、失敗しない選び方を深掘りで解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/mothers_day/gift-for-mother-in-law',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/mothers_day/gift-for-mother-in-law',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function GiftForMotherInLawArticle() {
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
            <span className="text-gray-800">義母へのプレゼント</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-lg shadow-md p-8">
            {/* タイトル（h1） */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              義母への母の日プレゼント｜相場・失礼にならない選び方・無難で喜ばれるギフト【深掘り】
            </h1>

            {/* 最終更新日 */}
            <p className="text-sm text-gray-500 mb-6">
              最終更新日: 2026-01-05
            </p>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="mb-3">
                義母への母の日プレゼントは、実母よりも<strong>&quot;正解が分かりにくい&quot;</strong>と感じる人が多いです。
              </p>
              <p className="mb-3">
                理由はシンプルで、<strong>好み・距離感・家の慣習が読みづらい</strong>から。しかも失礼になりたくないので、無難に寄せたい気持ちも強くなります。
              </p>
              <p className="mb-3">
                ただし、義母への母の日は<strong>「豪華さ」よりも「丁寧さ」と「負担にならない気遣い」</strong>が評価されやすい傾向があります。
              </p>
              <p className="mb-3">
                この記事では、義母向けの相場、失敗しがちなポイント、無難で喜ばれやすいギフトジャンル、渡し方、すぐ使えるメッセージ例まで、長く深くまとめます。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-3">📋 この記事でわかること</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                <li>義母への母の日プレゼントの相場（いくらが無難？）</li>
                <li>失礼になりにくいギフトの条件（&quot;無難&quot;の中身）</li>
                <li>避けた方がいいプレゼント（地雷になりやすいもの）</li>
                <li>関係性別（同居/別居/遠距離）に最適な選び方</li>
                <li>角が立たない渡し方・メッセージ例文</li>
                <li>迷った時の最終解（選べるギフトの上手な使い方）</li>
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

            {/* セクション1: 難しい理由 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                義母への母の日が難しい理由（まず&quot;地雷&quot;を理解する）
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                義母向けが難しいのは、プレゼントそのものよりも<strong>「解釈」が発生する</strong>からです。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>好みが分からない</strong>：香り・味・デザインが刺さらない可能性</li>
                  <li><strong>距離感が難しい</strong>：高すぎても安すぎても気を遣わせる</li>
                  <li><strong>家の慣習</strong>：母の日を重視する家庭も、そうでない家庭もある</li>
                  <li><strong>&quot;比較&quot;が起きやすい</strong>：実母との差、兄弟姉妹家族との差が気になることも</li>
                </ul>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded">
                <p className="text-gray-800">
                  ここを踏まえると、義母向けは<strong>「好みの強いもの」より「無難で丁寧」</strong>に寄せるほど成功率が上がります。
                </p>
              </div>
            </section>

            {/* セクション2: 相場 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                義母への母の日プレゼントの相場（いくらが無難？）
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                💡 相場は家庭によりますが、一般的な目安は次の通りです。
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">よく選ばれる価格帯</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-gray-800 mb-2">3,000〜5,000円</h4>
                  <p className="text-gray-700 text-sm">最も無難。失礼になりにくく、気も遣わせにくい</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-gray-800 mb-2">5,000〜10,000円</h4>
                  <p className="text-gray-700 text-sm">少し丁寧にしたいとき（毎年より&quot;節目&quot;向き）</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-gray-800 mb-2">10,000円以上</h4>
                  <p className="text-gray-700 text-sm">同居でお世話になっている／家族連名／特別な年向き</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                <p className="text-gray-800 text-sm">
                  <strong>義母向けで重要なのは「継続できる金額」。</strong><br />
                  初年度に張り切りすぎると、翌年以降に下げづらくなります。長期戦を前提に、無理のない帯にすると安心です。
                </p>
              </div>
            </section>

            {/* セクション3: 無難の条件 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                失礼になりにくい義母ギフトの条件（&quot;無難&quot;の正体）
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                義母向けは<strong>「無難」を具体化すると選びやすく</strong>なります。条件はこの5つ。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-2">
                  <li><strong>好みが割れにくい</strong>（シンプル、香り控えめ、味のクセ少なめ）</li>
                  <li><strong>負担が残らない</strong>（使い切れる、手入れ不要、置き場所に困らない）</li>
                  <li><strong>高すぎない</strong>（内心で気を遣わせない）</li>
                  <li><strong>生活に馴染む</strong>（毎日使える、食べられる、楽しめる）</li>
                  <li><strong>丁寧さが伝わる</strong>（メッセージ、包装、渡し方）</li>
                </ol>
              </div>
            </section>

            {/* セクション4: 避けたいもの */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                まず避けたい：義母向けで&quot;地雷&quot;になりやすいプレゼント
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                義母向けは<strong>「避けた方がいい」も明確</strong>です。次は外れやすい傾向があります。
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">好みが割れやすいもの</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>香りが強いもの（香水・強い入浴剤・ディフューザー）</li>
                    <li>個性的すぎるデザイン（派手な柄の食器、インテリア）</li>
                    <li>好みの強い健康食品（好意でも押し付けに見えることがある）</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">負担になりやすいもの</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>手入れが必要な鉢植え（忙しい/苦手な場合は負担）</li>
                    <li>大きいもの、置き場所が必要なもの</li>
                    <li>賞味期限が短い生菓子（受け取りの都合もある）</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">&quot;匂わせ&quot;になりやすいもの（関係性によっては注意）</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>ダイエット・体型を連想させるもの</li>
                    <li>老いを連想させるもの（「健康」を強調しすぎる等）</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded mt-6">
                <p className="text-gray-800">
                  <strong>結論：</strong>「好み・体調・価値観に踏み込む系は避ける」のが安全です。
                </p>
              </div>
            </section>

            {/* セクション5: おすすめジャンル導入 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                ここからが本題：義母に&quot;無難で喜ばれやすい&quot;母の日ギフト（深掘り）
              </h2>
              <p className="text-gray-700 leading-relaxed">
                💡 義母向けで当たりやすいのは、次の5ジャンルです。<br />
                優先順位もつけて解説します。
              </p>
            </section>

            {/* セクション6: 第1優先 消耗品 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                第1優先：上質な消耗品（食べ物・飲み物）は最強に外しにくい
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                義母向けで最も安全なのが<strong>「上質消耗品」</strong>。理由は明確です。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li>使い切れるので負担が残らない</li>
                  <li>好みの地雷を踏みにくい（シンプル寄せしやすい）</li>
                  <li>価格帯の調整がしやすい（3,000〜10,000円で綺麗に収まる）</li>
                  <li>家族で楽しめる（&quot;皆で&quot;が義母に刺さりやすい）</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">おすすめ：焼き菓子（個包装・日持ち）</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                義母向けで特に強い条件は<strong>「個包装」と「日持ち」</strong>。<br />
                忙しい日でも少しずつ食べられて、来客時にも使えます。
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">選び方のコツ</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                  <li>個包装で日持ちするもの</li>
                  <li>味のクセが強すぎない（万人受けしやすい）</li>
                  <li>箱・包装が上品（義母向けは&quot;丁寧さ&quot;が伝わる）</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">おすすめ：お茶・コーヒー（&quot;おもてなし&quot;に使える）</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                義母世代は<strong>「人に出せるもの」が喜ばれやすい</strong>です。<br />
                お茶は好みが分かれるので、迷ったら&quot;飲みやすい系&quot;に寄せるのが安全です。
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">選び方のコツ</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                  <li>種類が選べるアソート</li>
                  <li>ノンカフェインや低カフェインがあると親切（体調配慮）</li>
                  <li>パッケージが上品</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">おすすめ：スープ・レトルトの上位版（忙しい義母に効く）</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                「手抜きに見えそう」と心配されがちですが、上質なものはむしろ喜ばれます。<br />
                <strong>&quot;お守りごはん&quot;としてストックできる</strong>のが価値です。
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">選び方のコツ</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                  <li>常温保存できる</li>
                  <li>1食ずつ完結（作る負担がない）</li>
                  <li>味が濃すぎない（万人向け）</li>
                </ul>
              </div>
            </section>

            {/* セクション7: 第2優先 花 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                第2優先：花（王道）—ただし&quot;負担が少ない形&quot;に調整する
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                母の日は花が王道です。ただし義母向けは<strong>「手入れの負担」に注意</strong>します。
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">花束・アレンジが無難（鉢植えは要注意）</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>花束/アレンジ</strong>：飾って楽しめる。手入れ負担が比較的少ない</li>
                  <li><strong>鉢植え</strong>：長く楽しめる一方、手入れが負担になる場合も</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                <h4 className="font-semibold text-gray-800 mb-2">失敗しにくい選び方</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                  <li>迷ったらアレンジメント</li>
                  <li>色は落ち着いたトーン寄せ（好みが分からない場合）</li>
                  <li>花＋消耗品（焼き菓子等）のセットは満足度が上がる</li>
                </ul>
              </div>
            </section>

            {/* セクション8: 第3優先 タオル */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                第3優先：タオルなど&quot;毎日触れる実用品&quot;のアップグレード
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実用品は当たりやすい反面、義母向けは「好みの主張が強いもの」を避けます。<br />
                そこで強いのが<strong>上質タオル</strong>です。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-3">上質タオルが強い理由</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li>何枚あっても困りにくい（洗い替えが増える）</li>
                  <li>毎日使うので満足度が高い</li>
                  <li>デザインの地雷を避けやすい（無地・無難色）</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                <h4 className="font-semibold text-gray-800 mb-2">選び方のコツ</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                  <li>色は白・グレー・ベージュなど</li>
                  <li>刺繍や柄は控えめ</li>
                  <li>触り心地の良さで勝負（上質感）</li>
                </ul>
              </div>
            </section>

            {/* セクション9: 第4優先 体験 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                第4優先：体験ギフト（関係性が近いなら強い）
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                義母との関係が良好なら<strong>「体験」も選択肢</strong>です。<br />
                ただし体験は&quot;使いづらさ&quot;が地雷なので、柔軟性が命です。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-3">失敗しない体験ギフトの条件</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li>期限が長い（予定が立てやすい）</li>
                  <li>場所が選べる/アクセスが良い</li>
                  <li>予約が難しすぎない</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                <h4 className="font-semibold text-gray-800 mb-2">おすすめの方向性</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                  <li>食事（ランチ/ディナー）</li>
                  <li>リラクゼーション（スパ等）</li>
                </ul>
              </div>
            </section>

            {/* セクション10: 第5優先 選べるギフト */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                第5優先：選べるギフト（迷ったときの最終解）
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                義母向けで迷ったときは<strong>「選べる」が最も安全</strong>です。<br />
                ただし&quot;丸投げ感&quot;が出ると味気ないので、渡し方を工夫します。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">選べるギフトを&quot;丁寧&quot;に見せる3つの工夫</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1) 理由を添える</h4>
                    <p className="text-gray-700 text-sm">「好みが分からないので、好きなものを選べる形にしました」</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2) 一言メッセージを丁寧に</h4>
                    <p className="text-gray-700 text-sm">義母向けはメッセージの丁寧さが評価されやすい</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">3) 小さな添え物を付ける（できれば消耗品）</h4>
                    <p className="text-gray-700 text-sm">焼き菓子少量など、負担にならないもの</p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション11: 状況別 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                同居・別居・遠距離｜状況別の最適解（失敗しにくい優先順位）
              </h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">同居の場合（お世話になっているなら&quot;少し丁寧&quot;に）</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>花＋消耗品</li>
                    <li>上質タオル</li>
                    <li>食事（家族で）</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">別居の場合（無難さ重視）</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>焼き菓子・お茶など上質消耗品</li>
                    <li>花（アレンジ）</li>
                    <li>選べるギフト</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">遠距離の場合（受け取り設計が重要）</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>常温で日持ちする消耗品（個包装）</li>
                    <li>花（受け取り不要の形なら）</li>
                    <li>選べるギフト</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded mt-6">
                <p className="text-gray-800 text-sm">
                  遠距離は「冷蔵・冷凍」「受け取り日時」「置き配不可」などが負担になることがあります。<strong>扱いやすさ重視が安全</strong>です。
                </p>
              </div>
            </section>

            {/* セクション12: 渡し方 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                角が立たない渡し方（母の日の当日じゃなくてもOK）
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                義母向けは<strong>&quot;渡し方の丁寧さ&quot;で印象が上がります</strong>。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>直接渡せるなら</strong>：短い言葉＋丁寧さ（包装や紙袋）</li>
                  <li><strong>配送なら</strong>：メッセージカードを必ず付ける</li>
                  <li><strong>遅れるなら</strong>：「遅くなりました」より「感謝の気持ち」を短く添える</li>
                </ul>
              </div>
            </section>

            {/* セクション13: メッセージ例 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                義母向けメッセージ例（コピペOK）
              </h2>

              <div className="space-y-5">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">短く丁寧（無難）</h3>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-700 text-sm">いつもありがとうございます。ささやかですが感謝の気持ちです。</p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">少し温かい</h3>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-700 text-sm">いつも温かく見守っていただき、ありがとうございます。どうぞお体にお気をつけてお過ごしください。</p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">関係性が良い場合</h3>
                  <div className="bg-white p-4 rounded">
                    <p className="text-gray-700 text-sm">いつもありがとうございます。また落ち着いたらぜひご一緒にお食事に行けたら嬉しいです。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション14: 最終解 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                迷ったときの結論（義母向けの&quot;最終解&quot;）
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                義母向けで迷ったら、次のどれかに寄せると失敗しにくいです。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li>個包装で日持ちする上質焼き菓子</li>
                  <li>お茶（飲みやすい系）＋短い丁寧メッセージ</li>
                  <li>花（アレンジ）＋消耗品の組み合わせ</li>
                  <li>上質タオル（無難色）</li>
                  <li>選べるギフト（理由を添える）</li>
                </ul>
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 義母への母の日プレゼントの相場はいくら？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    一般的には3,000〜5,000円が無難で、丁寧にしたい場合は5,000〜10,000円が目安です。
                  </p>
                </div>

                {/* Q2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 義母に花は無難？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    無難です。ただし鉢植えは手入れ負担になることがあるので、迷ったら花束やアレンジに寄せると安全です。
                  </p>
                </div>

                {/* Q3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 義母に&quot;選べるギフト&quot;は失礼？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    失礼ではありません。理由を添えて丁寧に渡すと、合理的で喜ばれやすいです。
                  </p>
                </div>

                {/* Q4 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 避けた方がいいプレゼントは？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    香りが強いもの、好みが割れるデザイン、手入れが必要なもの、期限が短い生菓子などは外れやすいです。
                  </p>
                </div>

                {/* Q5 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 遠距離で贈るときの注意点は？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    受け取りやすさが重要です。常温で日持ちするものが扱いやすく、冷蔵・冷凍は事前配慮が必要です。
                  </p>
                </div>

                {/* Q6 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 義母へのメッセージは短くてもいい？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    短くても大丈夫です。「ありがとうございます」に体調を気づかう一言を添えると印象が良いです。
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
