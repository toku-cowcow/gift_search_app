/**
 * 同棲カップルに贈る結婚祝い記事ページ
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
      "name": "同棲カップルへの結婚祝い、現金はアリ？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "相手との関係性によりますが、親族なら現金も一般的です。友人ならプレゼントや選べるギフトの方が気持ちが伝わりやすいこともあります。"
      }
    },
    {
      "@type": "Question",
      "name": "被りを避けるには、何を確認すればいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "「置き場所」「すでに持っている家電・食器」「苦手な食べ物（アレルギー）」の3点だけでも確認できると失敗が減ります。"
      }
    },
    {
      "@type": "Question",
      "name": "体験ギフトは忙しい二人でも使える？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "期限が長い・場所を選べるタイプを選ぶと使いやすいです。予定が読めない夫婦ほど「柔軟性」が価値になります。"
      }
    },
    {
      "@type": "Question",
      "name": "タオルは被りやすい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "被りますが、上質タオルは「被っても困りにくい」側です。色を無難に寄せるとさらに安心です。"
      }
    },
    {
      "@type": "Question",
      "name": "連名で贈るときのコツは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "大きいものに寄せるより、「上質な消耗品」や「体験」に寄せると、被り・置き場所・好みの問題をまとめて回避できます。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '同棲カップルに贈る結婚祝い｜もう揃ってる二人に「被らない」選び方',
  description: '同棲中のカップルは家電や食器が一通り揃っていて結婚祝いが被りがち。この記事では、被りを避けるコツ、アップグレード系ギフト、消耗品、体験ギフトなど「外さない」選び方を紹介します。',
  keywords: ['同棲カップル', '結婚祝い', '被らない', 'ギフト', 'プレゼント', 'アップグレード', '体験ギフト', '消耗品'],
  openGraph: {
    title: '同棲カップルに贈る結婚祝い｜もう揃ってる二人に「被らない」選び方',
    description: '同棲中のカップルは家電や食器が一通り揃っていて結婚祝いが被りがち。この記事では、被りを避けるコツ、アップグレード系ギフト、消耗品、体験ギフトなど「外さない」選び方を紹介します。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/wedding_celebration/cohabiting-couple-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/wedding_celebration/cohabiting-couple-wedding-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function CohabitingCoupleWeddingGiftArticle() {
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
            <span className="text-gray-900">同棲カップルに贈る結婚祝い</span>
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
              最終更新日: 2025-12-15
            </div>

            {/* h1タイトル */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              同棲カップルに贈る結婚祝い｜もう揃ってる二人に「被らない」選び方
            </h1>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed space-y-4">
              <p>
                同棲しているカップルへの結婚祝い、いちばん難しいのは「だいたいもう持ってる問題」です。
                電気ケトルも食器もタオルも、同棲を始めた時点で一通り揃っていることが多く、定番を選ぶほど被るリスクが上がります。
              </p>
              <p>
                この記事では、同棲カップル向けに「被らない」「置き場所に困らない」「二人で使って嬉しい」を軸に、選び方とおすすめジャンルをまとめました。
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

            {/* セクション1: 被りやすい理由 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                同棲カップルの結婚祝いが被りやすい理由
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  同棲カップルは、新生活の準備を「入籍前に済ませている」ケースが多いです。
                  特に被りやすいのは次のジャンルです。
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>小型家電（電気ケトル、トースター、ホットプレートなど）</li>
                  <li>食器（ペアマグ、プレート、カトラリー）</li>
                  <li>生活雑貨（タオル、洗剤、インテリア小物）</li>
                </ul>
                <p>
                  つまり「定番＝安全」ではなく、同棲カップルでは「定番＝被りやすい」になりがちです。
                </p>
              </div>
            </section>

            {/* セクション2: 結論 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                結論：同棲カップルに強いのは「アップグレード」「消耗品」「体験」「選べる」
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  同棲カップル向けの最適解は、「新しいモノを増やす」より「今ある暮らしを上げる」方向です。
                  選び方はこの4つに寄せると失敗率が下がります。
                </p>

                <div className="space-y-6 mt-6">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">1) アップグレード（同じカテゴリでも満足度が上がる）</h3>
                    <p className="text-sm">
                      すでに持っていても「良いものに替える」なら喜ばれやすいです。
                      例：上質タオル、寝具、ちょっと良い調味料、グレードの高いコーヒー・紅茶など。
                    </p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">2) 消耗品（被っても困りにくい）</h3>
                    <p className="text-sm">
                      食べ物・飲み物・日用品は使えばなくなるので、被りに強いです。
                      特に「普段は買わない価格帯」が結婚祝い向きです。
                    </p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">3) 体験（モノが増えない）</h3>
                    <p className="text-sm">
                      外食、リラクゼーション、体験ギフトは置き場所ゼロで満足度が高いです。
                      同棲カップルは日常が整っている分、体験に価値が出やすい傾向があります。
                    </p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">4) 選べる（ギフトカード・カタログ）</h3>
                    <p className="text-sm">
                      好みが分からないときの最終手段が「相手が選べる」設計です。
                      被りも好み外れも起きにくいので、迷ったらここに寄せるのが現実的です。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション3: 予算の目安 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                予算の目安（同棲カップルでも基本は同じ）
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>予算相場は通常の結婚祝いと同じでOKです。</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>友人：3,000〜10,000円</li>
                  <li>同僚：3,000〜10,000円（連名なら合算しやすい）</li>
                  <li>上司・先輩：5,000〜20,000円</li>
                  <li>親族：10,000〜50,000円（慣習で変動）</li>
                </ul>
                <p>
                  ポイントは「高すぎて内祝いで悩ませない」こと。
                  迷ったら5,000〜10,000円の「ちょっと良い消耗品」が強い選択肢になります。
                </p>
              </div>
            </section>

            {/* セクション4: 確認の仕方 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                被らないための最短ルート｜確認の仕方（角が立たない）
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>「何が欲しい？」と直球で聞きにくいときは、聞き方を変えるとスムーズです。</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>「今、家で困ってることある？家事ラク系とか欲しい？」</li>
                  <li>「新居（同棲の部屋）って収納余裕ある？大きいもの避けるね」</li>
                  <li>「飲み物ってコーヒー派？紅茶派？どっちも飲む？」</li>
                  <li>「食べ物のNG（アレルギー・苦手）ある？」</li>
                </ul>
                <p>
                  この程度の確認だけで、被りと地雷（好み・香り・サイズ）をかなり回避できます。
                </p>
              </div>
            </section>

            {/* セクション5: 目的別おすすめ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                目的別おすすめ｜同棲カップルに刺さる結婚祝いジャンル
              </h2>

              <div className="space-y-8">
                {/* 体験ギフト */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1) 「モノは増やしたくない」二人に：体験ギフト
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>記念日ディナー（食事券・コース）</li>
                      <li>ペア体験（陶芸、香り作り、写真撮影など）</li>
                      <li>リラクゼーション（スパ、マッサージ）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>予約しやすい、期限が長い、場所が選べるものが安心です。
                    </p>
                  </div>
                </div>

                {/* アップグレード系 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2) 「すでに揃ってるけど満足度を上げたい」二人に：アップグレード系
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>上質タオル（ホテル系の厚み・吸水）</li>
                      <li>ちょっと良い寝具（枕・ブランケットなど省スペースのもの）</li>
                      <li>コーヒー・紅茶の定期便（まずは1〜2回分のギフトが無難）</li>
                      <li>調味料（だし、オリーブオイル、ジャム、はちみつなど）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>色や香りの主張が強いものは避け、シンプル寄せが鉄板です。
                    </p>
                  </div>
                </div>

                {/* 消耗品 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3) 「被っても困らない」を最優先：消耗品（上質）
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>スープ・レトルトの上位版（忙しい共働きに強い）</li>
                      <li>お菓子・焼き菓子（個包装・日持ち）</li>
                      <li>産地の食べ比べセット（肉・魚・ご当地グルメ）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>賞味期限、アレルギー表示、冷凍庫容量への配慮があると親切です。
                    </p>
                  </div>
                </div>

                {/* 選べるギフト */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4) 「好みが読めない」ときの正解：選べるギフト
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>カタログギフト（ジャンルが広いタイプ）</li>
                      <li>日常で使えるギフトカード（相手の負担が少ない）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      選べる系は味気ないと思われがちですが、同棲カップルには合理的で喜ばれやすい選択肢です。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション6: 避けたほうがいいギフト */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                逆に避けたほうがいい（同棲カップルで被りやすい）ギフト
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>家電（すでに持っている可能性が高い、置き場所も必要）</li>
                  <li>大型のインテリア（好みが割れる、部屋のテイストを崩す）</li>
                  <li>食器のセット（好みと収納、すでに揃っている問題）</li>
                  <li>香りが強いもの（好みが割れやすい）</li>
                </ul>
                <p>
                  どうしても家電を贈りたいなら「型番指定で希望を聞く」くらいまで確認できると安心です。
                </p>
              </div>
            </section>

            {/* セクション7: メッセージ例 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                すぐ使えるメッセージ例（同棲カップル向け）
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    ご結婚おめでとう！二人の毎日がもっと心地よくなるようなものを選びました。落ち着いたらまたお祝いさせてね。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    ご入籍おめでとうございます。ささやかですが、お二人で楽しめるものを贈ります。末永くお幸せに。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    おめでとう！同棲で色々揃ってそうだったので、「被りにくい系」にしました。二人で使ってね。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション8: FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                FAQ（よくある質問）
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 同棲カップルへの結婚祝い、現金はアリ？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    相手との関係性によりますが、親族なら現金も一般的です。友人ならプレゼントや選べるギフトの方が気持ちが伝わりやすいこともあります。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 被りを避けるには、何を確認すればいい？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    「置き場所」「すでに持っている家電・食器」「苦手な食べ物（アレルギー）」の3点だけでも確認できると失敗が減ります。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 体験ギフトは忙しい二人でも使える？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    期限が長い・場所を選べるタイプを選ぶと使いやすいです。予定が読めない夫婦ほど「柔軟性」が価値になります。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. タオルは被りやすい？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    被りますが、上質タオルは「被っても困りにくい」側です。色を無難に寄せるとさらに安心です。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 連名で贈るときのコツは？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    大きいものに寄せるより、「上質な消耗品」や「体験」に寄せると、被り・置き場所・好みの問題をまとめて回避できます。
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
