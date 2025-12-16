/**
 * 料理しない夫婦向け結婚祝い記事ページ
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
      "name": "外食派に食べ物ギフトって失礼？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "失礼ではありません。結婚祝いらしくするなら「上質感」と「扱いやすさ（個包装・日持ち）」を意識すると印象が良いです。"
      }
    },
    {
      "@type": "Question",
      "name": "食事券は使いづらくない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "期限が長い・場所が選べるタイプなら使いやすいです。忙しい夫婦ほど柔軟性が価値になります。"
      }
    },
    {
      "@type": "Question",
      "name": "家電を贈りたいときはどうする？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "直球で希望を聞くのが安全です。型番や欲しい機能まで確認できると失敗しにくいです。"
      }
    },
    {
      "@type": "Question",
      "name": "消耗品は安く見えない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "普段買わない価格帯（上質タオル、上位レトルト等）なら結婚祝いらしくなります。"
      }
    },
    {
      "@type": "Question",
      "name": "被りを避ける最短の質問は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "「甘いものOK？」「冷凍庫余裕ある？」「家で料理する？」の3つでかなり回避できます。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '料理しない夫婦に贈る結婚祝い｜キッチン家電より喜ばれる「外食派」ギフト',
  description: '自炊しない・外食中心の夫婦には、ホットプレートや鍋より「生活がラクになる」ギフトが刺さります。失敗しない選び方とおすすめジャンル、避けたい贈り物を紹介。',
  keywords: ['結婚祝い', '外食派', '料理しない', 'ギフト', 'プレゼント', '自炊しない', 'グルメ', '体験'],
  openGraph: {
    title: '料理しない夫婦に贈る結婚祝い｜キッチン家電より喜ばれる「外食派」ギフト',
    description: '自炊しない・外食中心の夫婦には、ホットプレートや鍋より「生活がラクになる」ギフトが刺さります。失敗しない選び方とおすすめジャンル、避けたい贈り物を紹介。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/wedding_celebration/non-cooking-couple-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/wedding_celebration/non-cooking-couple-wedding-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function NonCookingCoupleWeddingGiftArticle() {
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
            <span className="text-gray-900">料理しない夫婦向けギフト</span>
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
              料理しない夫婦に贈る結婚祝い｜キッチン家電より喜ばれる&ldquo;外食派&rdquo;ギフト
            </h1>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed space-y-4">
              <p>
                結婚祝い＝家電、のイメージは強いですが、外食派・料理しない夫婦には刺さらないことがあります。すでに持っている、使わない、置き場所がない…。
              </p>
              <p>
                この記事では「自炊しない夫婦」に向けて、キッチン家電より喜ばれやすい結婚祝いの選び方をまとめました。
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

            {/* セクション1: 家電が外れやすい理由 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                外食派夫婦の結婚祝いで&ldquo;家電が外れやすい&rdquo;理由
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>使う頻度が低いので置物化しやすい</li>
                  <li>収納が圧迫される（箱も大きい）</li>
                  <li>既に最低限揃っているケースが多い</li>
                </ul>
              </div>
            </section>

            {/* セクション2: 結論 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                結論：外食派に刺さるのは「時短」「ご褒美」「体験」「消耗品」
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">時短</h3>
                  <p className="text-sm text-gray-700">忙しい日がラクになる</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">ご褒美</h3>
                  <p className="text-sm text-gray-700">普段の外食がちょっと特別になる</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">体験</h3>
                  <p className="text-sm text-gray-700">二人の思い出が増える</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">消耗品</h3>
                  <p className="text-sm text-gray-700">被っても困りにくい</p>
                </div>
              </div>
            </section>

            {/* セクション3: おすすめジャンル */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                おすすめジャンル（外食派向け）
              </h2>

              <div className="space-y-8">
                {/* ご褒美グルメ */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1) ご褒美グルメ（家で&ldquo;外食気分&rdquo;）
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>高級レトルト・スープの詰め合わせ</li>
                      <li>産地の食べ比べ（肉・魚・ご当地）</li>
                      <li>デザート・焼き菓子（個包装・日持ち）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>冷凍便は冷凍庫容量に注意。常温OKのセットは扱いやすい。
                    </p>
                  </div>
                </div>

                {/* 食の体験 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2) 食の体験（モノが増えない）
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>ペア食事券・コース体験</li>
                      <li>カフェチケット系（使いやすい範囲で）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>場所が選べる、期限が長いものが安心。
                    </p>
                  </div>
                </div>

                {/* 日用品アップグレード */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3) &ldquo;生活がラクになる&rdquo;日用品アップグレード
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>上質タオル（毎日使う）</li>
                      <li>ちょっと良い洗剤・ランドリー系（香りは控えめが無難）</li>
                      <li>バスアイテム（好みが強い場合は避ける）</li>
                    </ul>
                  </div>
                </div>

                {/* 選べるギフト */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4) 好みが読めないときの「選べる」
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>カタログギフト</li>
                      <li>日常で使えるギフトカード</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション4: 避けたほうがいいギフト */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                避けたほうがいいギフト（外食派ほど外れやすい）
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>料理前提の調理家電（使わない可能性）</li>
                  <li>大きい鍋・食器セット（収納と趣味の問題）</li>
                  <li>香りが強い消耗品（好みが割れる）</li>
                </ul>
              </div>
            </section>

            {/* セクション5: 確認フレーズ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                角が立たない確認フレーズ
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>「家で料理する？しないなら&ldquo;ラク系&rdquo;に寄せるね」</li>
                  <li>「冷凍庫って余裕ある？なければ常温のセットにする」</li>
                  <li>「甘いもの得意？塩系がいい？」</li>
                </ul>
              </div>
            </section>

            {/* セクション6: メッセージ例 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                メッセージ例
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    ご結婚おめでとうございます。忙しい日でも二人で楽しめる&ldquo;ご褒美&rdquo;を選びました。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    新生活おめでとう！外食派でも使いやすい形にしてみたよ。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    ご入籍おめでとうございます。ささやかですがお祝いの気持ちです。
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
                  <h3 className="font-bold text-gray-900 mb-2">Q. 外食派に食べ物ギフトって失礼？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    失礼ではありません。結婚祝いらしくするなら「上質感」と「扱いやすさ（個包装・日持ち）」を意識すると印象が良いです。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 食事券は使いづらくない？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    期限が長い・場所が選べるタイプなら使いやすいです。忙しい夫婦ほど柔軟性が価値になります。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 家電を贈りたいときはどうする？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    直球で希望を聞くのが安全です。型番や欲しい機能まで確認できると失敗しにくいです。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 消耗品は安く見えない？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    普段買わない価格帯（上質タオル、上位レトルト等）なら結婚祝いらしくなります。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 被りを避ける最短の質問は？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    「甘いものOK？」「冷凍庫余裕ある？」「家で料理する？」の3つでかなり回避できます。
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
