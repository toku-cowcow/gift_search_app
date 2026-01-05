/**
 * 母の日は花以外も人気記事ページ
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
      "name": "母の日に花以外を贈っても失礼？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "失礼ではありません。お母さんの生活に合うものを選べば、むしろ喜ばれやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "実用品は味気なくならない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "上質に寄せると特別感が出ます。メッセージを添えると気持ちが伝わります。"
      }
    },
    {
      "@type": "Question",
      "name": "体験ギフトは使ってもらえる？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "期限が長い・場所が選べるタイプなら使いやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "スイーツは太るのが気になる？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "量が調整できる個包装や、お茶・スープなど\"甘くない\"選択肢もあります。"
      }
    },
    {
      "@type": "Question",
      "name": "義母に花以外を贈るなら何が無難？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "好みが割れにくい消耗品（お茶、焼き菓子、タオル等）と丁寧なメッセージが安全です。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '母の日は花以外も人気｜実用・グルメ・体験のおすすめと選び方',
  description: '母の日に花以外を贈りたい方向け。実用品・グルメ・体験の3軸で整理し、外しにくい選び方を解説。実母・義母・遠距離別のコツやメッセージ例も紹介します。',
  keywords: ['母の日', '花以外', 'プレゼント', '実用品', 'グルメ', '体験ギフト', 'おすすめ'],
  openGraph: {
    title: '母の日は花以外も人気｜実用・グルメ・体験のおすすめと選び方',
    description: '母の日に花以外を贈りたい方向け。実用品・グルメ・体験の3軸で整理し、外しにくい選び方を解説。実母・義母・遠距離別のコツやメッセージ例も紹介します。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/mothers_day/gift-ideas-beyond-flowers',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/mothers_day/gift-ideas-beyond-flowers',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function GiftIdeasBeyondFlowersArticle() {
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
            <span className="text-gray-800">花以外のプレゼント</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-lg shadow-md p-8">
            {/* タイトル（h1） */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              母の日は花以外も人気｜実用・グルメ・体験のおすすめと選び方
            </h1>

            {/* 最終更新日 */}
            <p className="text-sm text-gray-500 mb-6">
              最終更新日: 2026-01-05
            </p>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="mb-3">
                母の日といえば花。
              </p>
              <p className="mb-3">
                でも<strong>「花は毎年贈っている」「手入れが負担になりそう」「花以外で実用的なものがいい」</strong>と考える人も増えています。
              </p>
              <p className="mb-3">
                この記事では、母の日の<strong>&quot;花以外&quot;プレゼント</strong>を、実用品・グルメ・体験の3軸で整理し、外しにくい選び方をまとめました。
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

            {/* セクション1: 選び方のコツ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                母の日に花以外を選ぶときのコツ（失敗しない3ポイント）
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 花以外でも「生活に合う・好みを外さない・受け取りやすい」で絞れば失敗しません。
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    ✓ 1) 生活に合うか（使うシーンが想像できる）
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>毎日使うもの、気分転換できるもの</strong>は満足度が上がりやすいです。<br />
                    「もらったけど使わない」を避けるには、お母さんの日常を想像することが大切です。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    ✓ 2) 好みの地雷を踏まない（香り・サイズ・デザイン）
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    分からないときほど<strong>「控えめ」「シンプル」</strong>が安全です。<br />
                    香りが強すぎる、デザインが個性的すぎる、サイズが合わないは避けましょう。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    ✓ 3) 受け取りやすいか（遠距離・共働き家庭なら重要）
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>冷蔵・冷凍は受け取りが難しい場合</strong>があるので、状況に合わせます。<br />
                    常温で日持ちするものは扱いやすく、遠距離でも安心です。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション2: おすすめジャンル */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                花以外の母の日プレゼント｜おすすめジャンル3つ
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 実用品・グルメ・体験の3軸で選ぶと、お母さんの生活スタイルに合わせやすいです。
              </p>

              {/* 実用品 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  1) 実用品（毎日助かる）
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  実用品は<strong>&quot;毎日使うもの&quot;ほど当たりやすい</strong>です。<br />
                  上質なものを選ぶと、自分では買わない特別感が出ます。
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">おすすめ実用品</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li><strong>上質タオル</strong>：洗い替えが増えて困りにくい</li>
                    <li><strong>ハンドケア・ボディケア</strong>：香りは控えめが無難</li>
                    <li><strong>キッチン消耗品の上位版</strong>：良い洗剤・スポンジ等</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-sm text-gray-800">
                    <strong>選び方のコツ：</strong>デザインより「使いやすさ」「上質感」を優先。
                  </p>
                </div>
              </div>

              {/* グルメ */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  2) スイーツ・グルメ（使い切れて満足度が高い）
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>使い切れる</strong>から負担が残らず、<strong>ちょっと贅沢</strong>にすると特別感が出ます。
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">おすすめグルメ</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li><strong>焼き菓子・スイーツ</strong>：個包装・日持ち</li>
                    <li><strong>お茶・コーヒー</strong>：好みを軽く確認できると強い</li>
                    <li><strong>スープ・レトルトの上質セット</strong>：忙しいお母さんに刺さる</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-sm text-gray-800 mb-1">
                    <strong>選び方のコツ：</strong>日持ちと個包装は強い。
                  </p>
                  <p className="text-sm text-gray-700">
                    ⚠️ 冷凍は冷凍庫容量に注意。
                  </p>
                </div>
              </div>

              {/* 体験 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  3) 体験（モノが増えない）
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>モノを増やしたくない</strong>お母さんや、思い出を贈りたいときに。
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">おすすめ体験</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li><strong>食事券</strong>：使いやすい</li>
                    <li><strong>リラクゼーション</strong>：疲れやすい層に刺さる</li>
                    <li><strong>体験ギフト</strong>：好みが分かるなら</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-sm text-gray-800">
                    <strong>選び方のコツ：</strong>期限が長い、場所が選べる、予約が取りやすい。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション3: 予算別 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                予算別｜花以外プレゼントの選び方
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 予算に合わせて、満足度の高いギフトを選びましょう。
              </p>

              <div className="space-y-5">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    3,000円前後
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                    <li>焼き菓子・お茶などの消耗品</li>
                    <li>ハンドケア（無香料寄せだと安心）</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    5,000円前後
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                    <li>上質タオル</li>
                    <li>ちょっと贅沢なグルメセット</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    10,000円前後
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                    <li>体験ギフト（食事・リラクゼーション）</li>
                    <li>実用品のアップグレード（普段買わない上質感）</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション4: 状況別 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                実母・義母・遠距離で「花以外」を選ぶコツ
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 相手との関係性や距離で選び方を調整すると成功率が上がります。
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">実母</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>好みが分かるなら一点突破。</strong><br />
                    分からないなら消耗品が安全です。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">義母</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>無難さ重視。</strong><br />
                    派手さより丁寧さ（メッセージで印象が上がる）。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">遠距離</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>受け取りやすさ優先。</strong><br />
                    常温で日持ちするものが強い。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション5: メッセージ例 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                すぐ使えるメッセージ例
              </h2>

              <div className="space-y-5">
                <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">実母向け</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p className="bg-white p-3 rounded">
                      いつもありがとう。無理しすぎないで、これからも元気でいてね。
                    </p>
                    <p className="bg-white p-3 rounded">
                      いつも支えてくれてありがとう。感謝の気持ちです。
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">義母向け（丁寧）</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p className="bg-white p-3 rounded">
                      いつもありがとうございます。ささやかですが感謝の気持ちです。
                    </p>
                  </div>
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 母の日に花以外を贈っても失礼？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    失礼ではありません。お母さんの生活に合うものを選べば、むしろ喜ばれやすいです。
                  </p>
                </div>

                {/* Q2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 実用品は味気なくならない？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    上質に寄せると特別感が出ます。メッセージを添えると気持ちが伝わります。
                  </p>
                </div>

                {/* Q3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 体験ギフトは使ってもらえる？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    期限が長い・場所が選べるタイプなら使いやすいです。
                  </p>
                </div>

                {/* Q4 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. スイーツは太るのが気になる？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    量が調整できる個包装や、お茶・スープなど&quot;甘くない&quot;選択肢もあります。
                  </p>
                </div>

                {/* Q5 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 義母に花以外を贈るなら何が無難？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    好みが割れにくい消耗品（お茶、焼き菓子、タオル等）と丁寧なメッセージが安全です。
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
