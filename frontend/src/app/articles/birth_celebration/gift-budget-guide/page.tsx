/**
 * 出産祝いの相場 記事ページ
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
      "name": "出産祝いは友達にいくらが無難？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "一般的には5,000〜10,000円が中心です。相手が気を遣いそうなら5,000円寄りが安全です。"
      }
    },
    {
      "@type": "Question",
      "name": "職場の出産祝い、個人で贈るなら？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3,000〜5,000円が無難です。慣例がある職場はそれに合わせるのがベストです。"
      }
    },
    {
      "@type": "Question",
      "name": "連名の場合、1人あたりいくら？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1,000〜3,000円が多いです。人数が多いほど1人あたりは下げてOKです。"
      }
    },
    {
      "@type": "Question",
      "name": "高額すぎると迷惑になる？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "迷惑になる場合があります。相手の内祝い負担が増えるため、関係性が近いほど「相手がラク」を優先すると失敗しにくいです。"
      }
    },
    {
      "@type": "Question",
      "name": "現金やギフトカードは失礼？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "関係性次第で失礼ではありません。メッセージを添える、カード＋小さなギフトにするなどで印象が良くなります。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '出産祝いの相場はいくら？関係性別の金額目安と失礼にならない決め方（友達・職場・親族）',
  description: '出産祝いの相場は「関係性」と「贈り方（個人/連名）」で決まります。友達・職場・親族別の金額目安、迷ったときの決め方、NG例まで具体的に解説。',
  keywords: ['出産祝い', '相場', '金額', '友達', '職場', '親族', 'ギフト', 'プレゼント'],
  openGraph: {
    title: '出産祝いの相場はいくら？関係性別の金額目安と失礼にならない決め方（友達・職場・親族）',
    description: '出産祝いの相場は「関係性」と「贈り方（個人/連名）」で決まります。友達・職場・親族別の金額目安、迷ったときの決め方、NG例まで具体的に解説。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/birth_celebration/gift-budget-guide',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/birth_celebration/gift-budget-guide',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function GiftBudgetGuideArticle() {
  return (
    <>
      <Header />
      
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* パンくずリスト */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-pink-600 transition-colors">
                ホーム
              </Link>
              <span className="mx-2">/</span>
              <Link href="/birth_celebration" className="hover:text-pink-600 transition-colors">
                出産祝い
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">出産祝いの相場</span>
            </nav>
          </div>
        </div>

        {/* ヒーローセクション */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-6">
              <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1 rounded-full">
                出産祝いの相場ガイド
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              出産祝いの相場はいくら？<br />
              <span className="text-pink-600">関係性別の金額目安と失礼にならない決め方</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              出産祝いでいちばん迷うのは金額です。相場は関係性・贈り方・相手の状況でほぼ決まります。この記事では、友達・職場・親族別の具体的な金額目安と、失敗しない決め方を解説します。
            </p>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">

          {/* 本文コンテンツ */}
          <div className="prose prose-lg max-w-none">
            
            {/* セクション1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                出産祝いの相場は「関係性」でほぼ決まる
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                出産祝いでいちばん迷うのは金額です。ただ、相場はふわっとしているようで、実は判断基準がシンプルで、
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>相手との関係性（距離感）</li>
                <li>個人で贈るか、連名で贈るか</li>
                <li>すでに相手が&ldquo;揃っている&rdquo;か（2人目以降）</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                この3つでほぼ決まります。この順番で考えると、失礼になりにくく、相手も受け取りやすい金額に着地します。
              </p>
            </section>

            {/* セクション2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                【関係性別】出産祝いの相場目安（迷ったらここに合わせる）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                ここでは&ldquo;外さない目安&rdquo;をまとめます。地域や職場文化で差はありますが、まずはこの範囲が基準になります。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                友達（親しい友人）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>3,000〜5,000円：</strong>ライトにお祝いしたい／学生〜20代に多い</li>
                <li><strong>5,000〜10,000円：</strong>いちばん一般的</li>
                <li><strong>10,000円前後：</strong>親友クラス／何度も助けてもらった間柄</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                ポイントは&ldquo;相手が気を遣わない上限&rdquo;。仲が良いほど高くしたくなりますが、相手の&ldquo;お返し負担&rdquo;も増えるので、<strong className="text-pink-600">関係性が近いほど&ldquo;高すぎ注意&rdquo;</strong>になりやすいです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                職場（同僚・後輩・先輩）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>個人：3,000〜5,000円</strong>が無難</li>
                <li><strong>連名：1人あたり1,000〜3,000円</strong>が多い（人数で調整）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                職場は&ldquo;他の人と足並みを揃える&rdquo;文化があるので、まずは過去の例（慣例）に寄せるのが安全です。慣例が不明なら、個人は<strong>3,000円</strong>から始めると角が立ちにくいです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                上司・目上の方
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>個人：5,000円程度まで</strong>が無難（高額は相手が受け取りづらいことも）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;気持ち&rdquo;を示す場面なので、金額よりも<strong>丁寧なメッセージ＋実用性の高いギフト</strong>の方が印象が良くなります。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                親族（いとこ・叔父叔母など）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>5,000〜10,000円</strong>が目安</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                関係が濃いほど10,000円寄りになります。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                兄弟姉妹
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>10,000〜30,000円</strong>と幅が出やすい</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                ここは家族内ルールが強いので、親（祖父母）世代の金額感や、過去に贈り合った金額に合わせると揉めにくいです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                祖父母（お孫さんへのお祝い）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>10,000〜50,000円以上</strong>まで幅が大きい</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                現金＋ベビー用品などの組み合わせも多いゾーンです。
              </p>
            </section>

            {/* セクション3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                相場を「自分の状況」に落とす決め方（ここが本題）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                相場表は便利ですが、最後に迷うのは&ldquo;結局いくらがちょうどいい？&rdquo;です。迷ったら、次の手順で決めると失敗しにくいです。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                1）&ldquo;相手の内祝い負担&rdquo;を先に想像する
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                出産祝いをもらった側は、内祝い（お返し）を用意することがあります。高額になるほど相手の手間・負担が増えるので、
              </p>
              <div className="bg-gray-50 border-l-4 border-pink-400 p-4 mb-4">
                <p className="text-gray-700 leading-relaxed mb-2">
                  ❌ 親友だから高額にする
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ⭕ 親友だから&ldquo;相手がラクな形&rdquo;にする（消耗品・食事サポート等）
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                の方が、結果的に喜ばれます。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                2）&ldquo;個人&rdquo;か&ldquo;連名&rdquo;かで上限を決める
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>個人：無理せず気持ちが伝わる範囲（3,000〜10,000が中心）</li>
                <li>連名：1人あたりを決めて、総額で見栄えを作る</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                連名は&ldquo;見栄え&rdquo;が作りやすいので、<strong>個人より高額に見えてOK</strong>です。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                3）相手が2人目以降なら&ldquo;金額&rdquo;より&ldquo;被らなさ&rdquo;を優先
              </h3>
              <p className="text-gray-700 leading-relaxed">
                2人目以降は「すでに揃っている」率が高いので、相場内でも<strong>&ldquo;被らない使い道がある&rdquo;ギフト</strong>に寄せるのが正解になりやすいです。
              </p>
            </section>

            {/* セクション4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                金額別：失敗しにくいギフトの方向性（相場内で刺さる選び方）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;金額が決まったけど、何を選べばいい？&rdquo;に答えます。出産祝いは、選び方を間違えると&ldquo;金額より残念感&rdquo;が出ます。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                3,000〜5,000円
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>消耗品の上位版（厚手おしりふき、低刺激ケアなど）</li>
                <li>ちょい足しができる実用品（タオル系は薄手・省スペースが無難）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                狙いは&ldquo;絶対に使う&rdquo;。趣味性は控えめで。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                5,000〜10,000円
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>相手の負担を減らす方向（食事サポート、常備食など）</li>
                <li>&ldquo;自分では買わないけど嬉しい&rdquo;上質な実用品</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                このゾーンが最も満足度を作りやすいです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                10,000円前後
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>しっかりしたギフトセット（相手の生活に合うもの）</li>
                <li>記念系は、相手の好みが読める場合に限定</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                高額になるほど&ldquo;外した時のダメージ&rdquo;も増えるので、<strong>確認できるものは確認</strong>が安全です。
              </p>
            </section>

            {/* セクション5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                現金・ギフトカードはアリ？失礼にならないライン
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                結論、関係性によってはアリです。特に
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>相手が欲しい物を選べる</li>
                <li>かさばらない</li>
                <li>好みを外しにくい</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                という意味で合理的です。
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                ただし&ldquo;味気ない&rdquo;と感じる人もいるので、失礼になりにくくするコツはこれです。
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>一言メッセージを丁寧に（お祝い＋労い）</li>
                <li>&ldquo;用途が広い&rdquo;タイプを選ぶ</li>
                <li>現金のみより、<strong>小さなギフト＋カード</strong>の組み合わせにする（可能なら）</li>
              </ul>
            </section>

            {/* セクション6 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                HAREGiftでの探し方（相場×用途で迷子にならない）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                相場が決まっているなら、探し方はシンプルです。
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>予算（3,000/5,000/10,000）で絞る</li>
                <li>&ldquo;消耗品&rdquo;&ldquo;時短&rdquo;&ldquo;ママ向け&rdquo;など目的で絞る</li>
                <li>最後に&ldquo;サイズ・香り・好み&rdquo;の地雷を避ける</li>
              </ul>

              <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 my-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  記事の内容をそのまま条件に落とし込めるので、候補が一気に整理できます。
                </p>
                <div className="text-center">
                  <Link
                    href="/birth_celebration"
                    className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    予算別に出産祝いを探す
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQセクション */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                よくある質問（FAQ）
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 出産祝いは友達にいくらが無難？
                  </h3>
                  <p className="text-gray-700">
                    一般的には5,000〜10,000円が中心です。相手が気を遣いそうなら5,000円寄りが安全です。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 職場の出産祝い、個人で贈るなら？
                  </h3>
                  <p className="text-gray-700">
                    3,000〜5,000円が無難です。慣例がある職場はそれに合わせるのがベストです。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 連名の場合、1人あたりいくら？
                  </h3>
                  <p className="text-gray-700">
                    1,000〜3,000円が多いです。人数が多いほど1人あたりは下げてOKです。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 高額すぎると迷惑になる？
                  </h3>
                  <p className="text-gray-700">
                    なることがあります。相手の内祝い負担が増えるため、関係性が近いほど「相手がラク」を優先すると失敗しにくいです。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 現金やギフトカードは失礼？
                  </h3>
                  <p className="text-gray-700">
                    関係性次第で失礼ではありません。メッセージを添える、カード＋小さなギフトにするなどで印象が良くなります。
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 text-center shadow-sm border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              出産祝いギフトを探す
            </h3>
            <p className="text-gray-700 mb-6">
              予算と関係性が決まったら、あとは相手に合うギフトを選ぶだけです。
            </p>
            <Link
              href="/birth_celebration"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-md"
            >
              出産祝いギフトを探す
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

