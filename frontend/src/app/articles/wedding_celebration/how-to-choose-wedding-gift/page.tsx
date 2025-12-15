/**
 * 結婚祝いの選び方 記事ページ
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
      "name": "結婚祝いは現金とプレゼント、どちらがいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "相手の希望が分かるならそれが最優先。分からない場合は、友人ならプレゼント、親族なら現金が無難になりやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "結婚祝いを渡すのが遅れたら失礼？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "気にしすぎなくて大丈夫です。遅れた理由より「お祝いしたい気持ち」を一言添えると印象が良くなります。"
      }
    },
    {
      "@type": "Question",
      "name": "結婚祝いの「被り」を避けるコツは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "消耗品・体験・カタログは被りに強いです。家電や食器は事前確認できるならベストです。"
      }
    },
    {
      "@type": "Question",
      "name": "夫婦で好みが違いそうなときは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "色・デザインはシンプルに寄せて、機能で選ぶ（実用性重視）と外しにくいです。"
      }
    },
    {
      "@type": "Question",
      "name": "お返し（内祝い）を気にさせない金額って？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "関係性が軽いほど高額は避けるのが無難。相場の範囲内に収めると、相手の負担も減ります。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '結婚祝いの選び方｜相場・マナー・外さない人気ギフトまで（保存版）',
  description: '結婚祝いは相場・マナー・相手の暮らしに合うかが重要。本記事では関係性別の相場、失礼にならない渡し方、外しにくいギフトの選び方とおすすめジャンルをわかりやすく解説します。',
  keywords: ['結婚祝い', '選び方', '相場', 'マナー', 'ギフト', 'プレゼント', '贈り物'],
  openGraph: {
    title: '結婚祝いの選び方｜相場・マナー・外さない人気ギフトまで（保存版）',
    description: '結婚祝いは相場・マナー・相手の暮らしに合うかが重要。本記事では関係性別の相場、失礼にならない渡し方、外しにくいギフトの選び方とおすすめジャンルをわかりやすく解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/wedding_celebration/how-to-choose-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/wedding_celebration/how-to-choose-wedding-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function HowToChooseWeddingGiftArticle() {
  return (
    <>
      <Header />
      
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* パンくずリスト */}
          <nav className="text-sm text-gray-600 mb-4" aria-label="パンくずリスト">
            <Link href="/" className="hover:text-gray-900 hover:underline">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <Link href="/wedding_celebration" className="hover:text-gray-900 hover:underline">
              結婚祝い
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">結婚祝いの選び方</span>
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

          {/* タイトル */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            結婚祝いの選び方｜相場・マナー・外さない人気ギフトまで（保存版）
          </h1>

          {/* 最終更新日 */}
          <p className="text-sm text-gray-500 mb-8">
            最終更新日: 2025-12-15
          </p>

          {/* 導入文 */}
          <div className="text-lg text-gray-700 mb-8 leading-relaxed">
            <p>
              結婚祝いは「何を贈るか」よりも、「相手の新生活に自然に合うか」が大切です。好みが分からない、被りが怖い、マナーも気になる。そんな悩みを一気に解決できるように、相場・渡し方・外しにくいギフトの選び方をまとめました。
            </p>
          </div>

          {/* CTA1 */}
          <div className="my-10 text-center">
            <Link
              href="/wedding_celebration"
              className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              🎁 結婚祝いをカテゴリから探す
            </Link>
          </div>

          {/* 本文コンテンツ */}
          <div className="prose prose-lg max-w-none">
            
            {/* セクション1 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 mt-12 border-b-2 border-pink-400 pb-2">
                結婚祝いで失敗しない3つの原則
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                結婚祝いを選ぶときは、次の3つだけ意識すれば失敗率が大きく下がります。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                1. 置き場所に困らない（サイズ・重さ・収納）
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                新生活は荷物が増えがちです。大きすぎる家電や飾り物は、嬉しい反面「どこに置こう…」になりがち。迷ったらコンパクトな実用品、または消耗品が強いです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                2. 好みが割れにくい（色・デザイン・香り）
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                色は白・グレー・ベージュなどの無難寄せが安全です。香りの強いもの、個性的な柄の食器は好みが分かれます。二人のテイストが分からないほど、シンプルに寄せるのがコツです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                3. 被っても困りにくい（消耗品・体験・選べる）
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                タオル、コーヒー、調味料などの消耗品は被りに強いです。どうしても被りが気になるなら、体験ギフトやカタログなど「相手が選べる」設計にすると安心です。
              </p>
            </section>

            {/* セクション2 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 mt-12 border-b-2 border-pink-400 pb-2">
                【早見表】結婚祝いの相場はどれくらい？
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                結婚祝いの相場は関係性で変わります。高すぎると相手が内祝い（お返し）で悩むこともあるので、「相場の範囲内」を意識すると親切です。
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>友人：</strong>3,000〜10,000円</li>
                <li><strong>同僚：</strong>3,000〜10,000円（連名なら合算で上げやすい）</li>
                <li><strong>上司・先輩：</strong>5,000〜20,000円</li>
                <li><strong>親族：</strong>10,000〜50,000円（親等や慣習で変動）</li>
                <li><strong>連名：</strong>1人あたり3,000〜5,000円でも見栄えは作れる</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                迷ったら「友人・同僚は5,000〜10,000円」「親族は10,000円以上」を基準に、距離感で微調整すると決めやすいです。
              </p>
            </section>

            {/* セクション3 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 mt-12 border-b-2 border-pink-400 pb-2">
                結婚祝いの基本マナー（渡す時期・のし・NGになりやすいもの）
              </h2>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                渡す時期の目安
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>挙式に招待された場合：</strong>挙式の1か月前〜1週間前</li>
                <li><strong>入籍のみ／挙式なしの場合：</strong>報告を受けてから1か月以内</li>
                <li><strong>遅れた場合：</strong>できるだけ早めに。遅れたことよりも「お祝いしたい気持ち」を添えるのが大事です。</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                のし（迷ったらこれ）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>表書き：</strong>寿 または 御結婚御祝</li>
                <li><strong>水引：</strong>紅白の結び切り（10本が一般的）</li>
                <li><strong>名入れ：</strong>贈り主の名前（連名はバランスよく）</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                NGになりやすい贈り物（例外もある）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>刃物：</strong>縁を切る連想（ただし相手の希望が明確なら例外）</li>
                <li><strong>櫛（くし）：</strong>語呂（苦・死）</li>
                <li><strong>ハンカチ：</strong>地域によっては手切れの連想</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                結論としては「相手が希望しているか確認できないなら回避」が安全です。
              </p>
            </section>

            {/* セクション4 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 mt-12 border-b-2 border-pink-400 pb-2">
                迷ったときの決め方｜5つの質問で一気に絞る
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                相手の情報が少なくても、次の順で考えると決めやすいです。
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>新居は広い？コンパクト？</li>
                <li>自炊派？外食派？</li>
                <li>テイストはシンプル？ナチュラル？ホテルライク？</li>
                <li>既に持っていそう？（家電・食器は被りやすい）</li>
                <li>消耗品が嬉しいタイプ？</li>
              </ol>

              <p className="text-gray-700 leading-relaxed">
                これが分からないときは「消耗品 × ちょっと上質」に寄せると失敗しにくいです。
              </p>
            </section>

            {/* セクション5 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 mt-12 border-b-2 border-pink-400 pb-2">
                目的別｜外しにくい結婚祝いギフトのおすすめジャンル
              </h2>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                とにかく失敗したくない人向け（被りに強い）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>上質タオルセット（毎日使う／被っても困りにくい）</li>
                <li>コーヒー・紅茶・スープなどの詰め合わせ（消耗品）</li>
                <li>こだわり調味料（だし、オリーブオイル、ジャムなど）</li>
                <li>カタログギフト（相手が選べる）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>ポイント：</strong>色は無難に、賞味期限やアレルギー表記が分かりやすいものを選ぶと安心です。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                「自分では買わない」を狙う（満足度が上がりやすい）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>ブランド肉・ご当地グルメの食べ比べ</li>
                <li>焼き菓子やスイーツの上質セット</li>
                <li>ペアグラス・ペアマグ（シンプル寄せ）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>ポイント：</strong>ペアものはデザインが強すぎないことが重要です。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                連名で贈るなら映える（ただし事前確認が強い）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>ホットプレート、電気ケトル、コーヒーメーカーなど</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                家電は好み・機能・置き場所で割れやすいので、できるなら希望を聞くのが最強です。
              </p>
            </section>

            {/* セクション6 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 mt-12 border-b-2 border-pink-400 pb-2">
                相手別｜選び方のコツ（友達・同僚・親族）
              </h2>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                友達へ
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                友達向けは「気軽に使えてテンションが上がるもの」が強いです。価格は5,000〜10,000円が選びやすい帯。被りが怖いなら消耗品か選べる系が安心です。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                同僚へ
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                同僚向けは「実用性」を優先すると外しにくいです。職場の連名なら、合算して1ランク上のものにすると見栄えが良くなります。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                親族へ
              </h3>
              <p className="text-gray-700 leading-relaxed">
                親族向けは現金やカタログを選ぶ人も多いゾーンです。地域や慣習がある場合もあるので、家族内のルールが分かればそれに合わせるのが安全です。
              </p>
            </section>

            {/* セクション7 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 mt-12 border-b-2 border-pink-400 pb-2">
                もらって嬉しい結婚祝いの共通点は「二人の時間が増える」こと
              </h2>
              <p className="text-gray-700 leading-relaxed">
                結婚祝いの理想は、モノそのものより「二人の体験が増える」ことです。上質タオルなら毎日の満足度が上がり、グルメなら休日の楽しみが増え、体験ギフトなら思い出が増えます。二人で一緒に使える・味わえるものは、結果的に満足度が高くなりやすいです。
              </p>
            </section>

            {/* セクション8 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 mt-12 border-b-2 border-pink-400 pb-2">
                すぐ使えるメッセージ例文（短くて好印象）
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>ご結婚おめでとうございます。お二人の新しい毎日が、笑顔であふれますように。</li>
                <li>ご入籍おめでとう！落ち着いたらぜひ新居にも遊びに行かせてね。</li>
                <li>ご結婚おめでとうございます。ささやかですがお祝いの気持ちです。末永くお幸せに。</li>
              </ul>
            </section>

            {/* FAQセクション */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 mt-12 border-b-2 border-pink-400 pb-2">
                FAQ（よくある質問）
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Q. 結婚祝いは現金とプレゼント、どちらがいい？
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    相手の希望が分かるならそれが最優先。分からない場合は、友人ならプレゼント、親族なら現金が無難になりやすいです。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Q. 結婚祝いを渡すのが遅れたら失礼？
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    気にしすぎなくて大丈夫です。遅れた理由より「お祝いしたい気持ち」を一言添えると印象が良くなります。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Q. 結婚祝いの"被り"を避けるコツは？
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    消耗品・体験・カタログは被りに強いです。家電や食器は事前確認できるならベストです。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Q. 夫婦で好みが違いそうなときは？
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    色・デザインはシンプルに寄せて、機能で選ぶ（実用性重視）と外しにくいです。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Q. お返し（内祝い）を気にさせない金額って？
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    関係性が軽いほど高額は避けるのが無難。相場の範囲内に収めると、相手の負担も減ります。
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA2 */}
          <div className="my-12 text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4 text-lg">
              予算や人気順で結婚祝いを探してみませんか？
            </p>
            <Link
              href="/wedding_celebration"
              className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              予算別・人気順で結婚祝いを探す →
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

      <Footer />
    </>
  );
}
