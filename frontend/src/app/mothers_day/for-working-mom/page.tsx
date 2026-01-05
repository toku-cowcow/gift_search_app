/**
 * 働くお母さんに贈る母の日記事ページ
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
      "name": "働く母にはモノより体験がいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "体験が合う人も多いですが、忙しい人ほど「予約の取りやすさ」「期限の長さ」が重要です。負担が増えない設計なら当たりやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "花は働く母には不向き？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "不向きではありません。ただし手入れ負担が少ない形（そのまま飾れるアレンジ等）が安心です。"
      }
    },
    {
      "@type": "Question",
      "name": "受け取りが難しいときは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "常温で日持ちするもの、またはデジタル＋後日の二段構えが安全です。"
      }
    },
    {
      "@type": "Question",
      "name": "実用品は味気ない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "上質感があると特別感が出ます。短い感謝の一言を添えると気持ちが伝わります。"
      }
    },
    {
      "@type": "Question",
      "name": "迷ったときの最終解は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "「負担が少ない」「すぐ使える」「日常が少しラクになる」の3条件で選ぶと失敗が減ります。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '働くお母さんに贈る母の日｜忙しい毎日がラクになるプレゼントの選び方【時間を贈る】',
  description: '働くお母さんへの母の日は"モノ"より"時間"が喜ばれやすい。負担を増やさない選び方、失敗しやすいNG、渡し方のコツまで深掘りで解説します。',
  keywords: ['母の日', '働くお母さん', 'プレゼント', '時間を贈る', '負担ゼロ', '忙しい'],
  openGraph: {
    title: '働くお母さんに贈る母の日｜忙しい毎日がラクになるプレゼントの選び方【時間を贈る】',
    description: '働くお母さんへの母の日は"モノ"より"時間"が喜ばれやすい。負担を増やさない選び方、失敗しやすいNG、渡し方のコツまで深掘りで解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/mothers_day/for-working-mom',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/mothers_day/for-working-mom',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function ForWorkingMomArticle() {
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
            <span className="text-gray-800">働くお母さん向け</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-lg shadow-md p-8">
            {/* タイトル（h1） */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              働くお母さんに贈る母の日｜忙しい毎日がラクになるプレゼントの選び方【時間を贈る】
            </h1>

            {/* 最終更新日 */}
            <p className="text-sm text-gray-500 mb-6">
              最終更新日: 2026-01-05
            </p>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="mb-3">
                働くお母さんへの母の日は、豪華さより<strong>「ラクになった」「休めた」が正解になりやすい</strong>です。
              </p>
              <p className="mb-3">
                忙しいほど、手入れ・片付け・受け取りなどの<strong>&quot;追加タスク&quot;が負担</strong>になります。
              </p>
              <p className="mb-3">
                この記事では<strong>「時間を贈る」を軸</strong>に、働くお母さんに外しにくい選び方と、逆に外れやすいNG、渡し方のコツを深掘りでまとめます。
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

            {/* セクション1: 結論 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                働くお母さん向けの結論：選ぶべきは&quot;負担ゼロ設計&quot;
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ⏰ 働くお母さん向けは、次の3つを満たすほど当たりやすいです。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>受け取ってすぐ使える</strong>（準備がいらない）</li>
                  <li><strong>片付けが増えない</strong>（置き場所・ゴミ・手入れが少ない）</li>
                  <li><strong>生活が少しラクになる</strong>（時短 or 休息）</li>
                </ul>
              </div>
            </section>

            {/* セクション2: 3カテゴリ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                &quot;時間を贈る&quot;母の日ギフト 3カテゴリ（切り口は忙しさ）
              </h2>

              <div className="space-y-6">
                {/* カテゴリA */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">カテゴリA：手間を減らす（家事の負担を減らす）</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    ポイントは<strong>「お母さんが&quot;やらなくていい&quot;が増える」</strong>こと。
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                      <li>すぐ使える形（開封→完了に近い）</li>
                      <li>追加の手入れが不要</li>
                    </ul>
                  </div>
                </div>

                {/* カテゴリB */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">カテゴリB：休息を増やす（回復の時間を作る）</h3>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                      <li>使うハードルが低い（準備が要らない）</li>
                      <li>好みの地雷を踏みにくい（香り強すぎ注意）</li>
                    </ul>
                  </div>
                </div>

                {/* カテゴリC */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">カテゴリC：予定を贈る（&quot;この日休んでいい&quot;を作る）</h3>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-4">
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                      <li>食事の予約など、&quot;段取り&quot;がプレゼントになる</li>
                      <li>当日が難しければ後日に回してOK（忙しい人ほど効く）</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded mt-6">
                <p className="text-gray-800 text-sm mb-2">
                  一般的な「花以外の選び方」はこちら
                </p>
                <Link
                  href="/articles/mothers_day/gift-ideas-beyond-flowers"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  → 母の日は花以外も人気｜実用・グルメ・体験のおすすめと選び方
                </Link>
              </div>
            </section>

            {/* セクション3: NG */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                失敗しやすいNG（忙しい人ほど外れる）
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>手入れが必要なもの</strong>（世話・洗濯・管理が増える）</li>
                  <li><strong>大きいもの</strong>（置き場所の悩みが増える）</li>
                  <li><strong>受け取りが難しいもの</strong>（冷蔵冷凍で在宅が必要 等）</li>
                  <li><strong>香りが強いもの</strong>（好み・体調で合わない）</li>
                </ul>
              </div>
            </section>

            {/* セクション4: 確認の仕方 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                角が立たない&quot;確認の仕方&quot;（忙しい人ほど聞いた方が親切）
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                直球で「何が欲しい？」だと気を遣わせることも。<br />
                代わりに<strong>&quot;負担を減らす確認&quot;</strong>にすると自然です。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">聞き方例</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <p className="text-gray-700 text-sm">
                      「忙しいと思うから、手間が増えない形にしたい。香り系は苦手ある？」
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <p className="text-gray-700 text-sm">
                      「受け取り大変だと嫌だから、常温のほうがいい？」
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション5: 渡し方 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                渡し方で満足度が上がる（忙しい人ほど&quot;段取り&quot;が効く）
              </h2>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">直接渡せる</h3>
                  <p className="text-gray-700 text-sm">短い感謝＋すぐ使える形</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">遠距離</h3>
                  <p className="text-gray-700 text-sm">受け取りやすさ最優先＋メッセージカード</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">後日フォロー</h3>
                  <p className="text-gray-700 text-sm">忙しいほど&quot;後日ごはん行こう&quot;が喜ばれやすい</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded mt-6">
                <p className="text-gray-800 text-sm mb-2">
                  メッセージ例を探す場合はこちら
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 働く母には&quot;モノ&quot;より&quot;体験&quot;がいい？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    体験が合う人も多いですが、忙しい人ほど「予約の取りやすさ」「期限の長さ」が重要です。負担が増えない設計なら当たりやすいです。
                  </p>
                </div>

                {/* Q2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 花は働く母には不向き？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    不向きではありません。ただし手入れ負担が少ない形（そのまま飾れるアレンジ等）が安心です。
                  </p>
                </div>

                {/* Q3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 母が忙しすぎて受け取りが難しいときは？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    常温で日持ちするもの、またはデジタル＋後日の二段構えが安全です。
                  </p>
                </div>

                {/* Q4 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 実用品は味気ない？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    上質感があると特別感が出ます。短い感謝の一言を添えると気持ちが伝わります。
                  </p>
                </div>

                {/* Q5 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 迷ったときの最終解は？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    「負担が少ない」「すぐ使える」「日常が少しラクになる」の3条件で選ぶと失敗が減ります。
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
