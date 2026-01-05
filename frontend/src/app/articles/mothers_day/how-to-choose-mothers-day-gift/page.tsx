/**
 * 母の日プレゼントの選び方記事ページ
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
      "name": "母の日プレゼントの相場はいくら？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "一般的には3,000〜5,000円が多く、少し特別にするなら5,000〜10,000円が目安です。"
      }
    },
    {
      "@type": "Question",
      "name": "毎年花だとマンネリになる？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "花＋消耗品（スイーツやお茶など）の組み合わせにすると、母の日らしさと実用性が両立できます。"
      }
    },
    {
      "@type": "Question",
      "name": "義母への母の日は何が無難？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "好みが割れにくい消耗品（スイーツ、お茶、タオル等）と、丁寧なメッセージが安全です。"
      }
    },
    {
      "@type": "Question",
      "name": "遠距離で贈るなら何に注意する？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "受け取りやすさが重要です。冷蔵・冷凍は避け、常温で日持ちするものが扱いやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "メッセージは短くてもいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "短くても十分です。「ありがとう」と体調を気遣う一言があると気持ちが伝わります。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '母の日プレゼントの選び方｜相場・人気ジャンル・失敗しないコツ【保存版】',
  description: '母の日のプレゼントは相場・好み・実用性で決まる。この記事では予算別の目安、定番ギフト（花・スイーツ・実用品）と選び方、渡し方やメッセージ例までまとめて解説します。',
  keywords: ['母の日', 'プレゼント', '選び方', '相場', '予算', 'ギフト', '花', 'スイーツ', '実用品', 'メッセージ'],
  openGraph: {
    title: '母の日プレゼントの選び方｜相場・人気ジャンル・失敗しないコツ【保存版】',
    description: '母の日のプレゼントは相場・好み・実用性で決まる。この記事では予算別の目安、定番ギフト（花・スイーツ・実用品）と選び方、渡し方やメッセージ例までまとめて解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/mothers_day/how-to-choose-mothers-day-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/mothers_day/how-to-choose-mothers-day-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function HowToChooseMothersDayGiftArticle() {
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
            <span className="text-gray-800">母の日プレゼントの選び方</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-lg shadow-md p-8">
            {/* タイトル（h1） */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              母の日プレゼントの選び方｜相場・人気ジャンル・失敗しないコツ【保存版】
            </h1>

            {/* 最終更新日 */}
            <p className="text-sm text-gray-500 mb-6">
              最終更新日: 2026-01-05
            </p>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="mb-3">
                母の日のプレゼントは<strong>「気持ちが伝わって、負担にならないもの」</strong>が喜ばれます。
              </p>
              <p className="mb-3">
                でも実際は、こんな悩みがありませんか？
              </p>
              <ul className="list-disc list-inside mb-4 ml-4 space-y-2">
                <li>相場が分からない、高すぎても安すぎても心配</li>
                <li>毎年花だと飽きられないか不安</li>
                <li>義母への距離感が難しい</li>
                <li>何年も贈っているとネタ切れになる</li>
              </ul>
              <p className="mb-3">
                この記事では、<strong>予算の目安から定番ギフトの選び方、状況別のコツ</strong>まで丁寧に解説します。
              </p>
              <p className="text-sm text-gray-600">
                <strong>対象読者：</strong>実母・義母に母の日ギフトを贈りたい方、予算や選び方で迷っている方
              </p>
            </div>

            {/* この記事でわかること */}
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-3">📌 この記事でわかること</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>母の日プレゼントの相場</strong>（関係性別の目安）</li>
                <li><strong>3つの選び方の基準</strong>（失敗を避けるコツ）</li>
                <li><strong>定番ジャンル別の選び方</strong>（花・スイーツ・実用品）</li>
                <li><strong>状況別のコツ</strong>（実母・義母・遠距離）</li>
                <li><strong>渡し方とメッセージ例</strong>（すぐ使える文例つき）</li>
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

            {/* セクション1: 相場 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                母の日プレゼントの相場はいくら？
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 最多価格帯は3,000〜5,000円。高すぎるとお母さんが気を遣ってしまいます。
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">予算別の目安</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  家庭や地域によって差はありますが、一般的な相場は次の通りです。
                </p>

                {/* 相場の表 */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead className="bg-pink-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">予算</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">シーン・選び方</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">おすすめギフト例</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">3,000〜5,000円</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">最も選ばれやすい定番の帯。<br />負担なく贈れる価格帯。</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">花束、スイーツセット、<br />ハンドクリーム、入浴剤</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">5,000〜10,000円</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">少し特別感を出したいとき。<br />節目の母の日に。</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">高級スイーツ、ブランドタオル、<br />カタログギフト</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">10,000円以上</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">家族で連名で贈る場合。<br />特別な節目や実用品のアップグレード。</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">高級家電、体験ギフト、<br />ブランド食器セット</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-sm text-gray-800 font-semibold mb-2">⚠️ 予算選びの注意点</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  高額すぎるとお返しやお礼の負担を感じさせる場合があります。<br />
                  <strong>「お母さんが気を遣わない金額」</strong>が正解です。
                </p>
              </div>
            </section>

            {/* セクション2: 選び方の基準 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                失敗しない母の日ギフトの選び方【3つの基準】
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 迷ったら「消費できる・好みが割れにくい・実用的」の3軸で絞ると失敗しません。
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    ✅ 基準1：消費できる・使い切れる
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>「使えばなくなる」ギフト</strong>は、置き場所や処分の負担がありません。
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>スイーツ、お茶、コーヒー</li>
                    <li>入浴剤、ハンドクリーム</li>
                    <li>消耗品（キッチン用品、タオル）</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    ✅ 基準2：好みが割れにくい
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>香りやデザインが強すぎない</strong>ものが安全です。
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    ❌ 避けたいもの：
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-3">
                    <li>強い香りの香水やアロマ</li>
                    <li>個性的すぎるデザインの雑貨</li>
                    <li>サイズ・色が限定される衣類</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    💡 <strong>迷ったらシンプル寄せ</strong>が鉄則です。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    ✅ 基準3：生活が少しラクになる（実用性）
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    <strong>日常で使えるもの</strong>は満足度が高くなります。
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>家事がラクになる便利グッズ</li>
                    <li>リラックスできる入浴剤やケア用品</li>
                    <li>毎日触れるタオルやハンカチ</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション3: 定番ジャンル別 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                定番ジャンル別｜母の日プレゼントの選び方
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 定番は「花・スイーツ・実用品」。それぞれお母さんの生活スタイルに合わせて選びましょう。
              </p>

              {/* 花 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span>🌸</span>
                  <span>花（定番だけど外さない）</span>
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-700 mb-2">なぜ花が強いのか？</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 ml-4 text-sm">
                  <li>母の日らしさが一瞬で伝わる</li>
                  <li>見た目が華やかで写真映えする</li>
                  <li>好みが分からなくても成立しやすい</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-700 mb-2">失敗しにくい選び方</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>✅ おすすめ：</strong>花束やアレンジメント（飾るだけでOK）
                  </p>
                  <p className="text-gray-700">
                    <strong>⚠️ 注意：</strong>鉢植えは手入れが必要（忙しいお母さんには負担になることも）
                  </p>
                  <p className="text-gray-700">
                    <strong>🎨 色選び：</strong>好みが分からなければ落ち着いた色味に寄せる
                  </p>
                </div>
              </div>

              {/* スイーツ・グルメ */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span>🍰</span>
                  <span>スイーツ・グルメ（実は最強の母の日ギフト）</span>
                </h3>

                <h4 className="text-lg font-semibold text-gray-700 mb-2">なぜスイーツが強いのか？</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 ml-4 text-sm">
                  <li><strong>使い切れる</strong>から負担が残らない</li>
                  <li>ちょっと<strong>贅沢</strong>にすると特別感が出る</li>
                  <li><strong>家族で一緒に</strong>楽しめる</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-700 mb-2">失敗しにくい選び方</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>✅ 個包装：</strong>食べるタイミングを選べて便利
                  </p>
                  <p className="text-gray-700">
                    <strong>✅ 日持ち：</strong>忙しくても困らない（1週間以上が理想）
                  </p>
                  <p className="text-gray-700">
                    <strong>⚠️ 確認：</strong>苦手な食べ物やアレルギーを事前にチェック
                  </p>
                </div>
              </div>

              {/* 実用品・ケア用品 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span>🧴</span>
                  <span>実用品・ケア用品（毎年の定番にしやすい）</span>
                </h3>

                <h4 className="text-lg font-semibold text-gray-700 mb-2">なぜ実用品が強いのか？</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 ml-4 text-sm">
                  <li><strong>日常で使える</strong>から「もらって終わり」にならない</li>
                  <li>上質に寄せると<strong>「自分では買わない」特別感</strong>が出る</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-700 mb-2">失敗しにくい選び方</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>✅ おすすめ：</strong>タオル、ハンドクリーム、入浴剤など「毎日触れるもの」
                  </p>
                  <p className="text-gray-700">
                    <strong>⚠️ 注意：</strong>香りものは好みが割れやすい（迷ったら無香料に寄せる）
                  </p>
                </div>
              </div>
            </section>

            {/* セクション4: 状況別 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                状況別の選び方｜実母・義母・遠距離
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 相手との関係性や距離に合わせて選び方を変えると成功率が上がります。
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    👩 実母の場合（好みが分かるなら一点突破）
                  </h3>
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    実母なら好みや生活スタイルが分かるはず。<br />
                    <strong>「これが欲しかった！」と思わせる</strong>ギフトを狙いましょう。
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                    <li>好物や趣味に寄せると満足度アップ</li>
                    <li>「最近困っていること」を解決する実用品も刺さりやすい</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    💐 義母の場合（無難さ＋丁寧さが正義）
                  </h3>
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    義母へのギフトは<strong>「好みが割れにくい＋丁寧な印象」</strong>が大切。<br />
                    攻めるより守りの姿勢が安全です。
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                    <li>派手すぎない、香りが強すぎない、好みが割れにくいものを選ぶ</li>
                    <li><strong>メッセージを丁寧に</strong>するだけで印象が大きく良くなる</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    📦 遠距離の場合（配送・受け取り設計が大事）
                  </h3>
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    遠距離で贈るなら<strong>「受け取りやすさ」</strong>が最優先。<br />
                    配送トラブルを避ける工夫が必要です。
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                    <li><strong>✅ おすすめ：</strong>常温で日持ちするギフト（スイーツ、タオルなど）</li>
                    <li><strong>⚠️ 注意：</strong>冷蔵・冷凍は受け取りが難しい場合がある</li>
                    <li><strong>💡 配慮：</strong>受け取りやすい日時を事前に確認</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション5: 渡し方 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                母の日の渡し方とタイミング
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 当日が理想ですが、前後してもOK。大切なのは「感謝の気持ち」です。
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">📅 渡すタイミング</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 text-sm">
                    <li><strong>当日がベスト</strong>ですが、数日前後してもマナー違反ではありません</li>
                    <li>遅れる場合は「遅れた理由」より<strong>「感謝の気持ち」を短く添える</strong>ことが大切</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">🎁 渡し方のコツ</h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800 mb-1">✅ 直接渡す場合</p>
                      <p className="text-gray-700">
                        一言メッセージを添えるだけで気持ちが伝わりやすくなります。<br />
                        例：「いつもありがとう。これからも元気でね。」
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800 mb-1">📮 配送する場合</p>
                      <p className="text-gray-700">
                        メッセージカードを付けると気持ちが伝わります。<br />
                        手書きがベストですが、印字でもOKです。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション6: メッセージ例 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                すぐ使える母の日メッセージ例
              </h2>
              <p className="text-sm text-pink-600 font-semibold mb-6">
                💡 短くてもOK。「ありがとう」と体調を気遣う一言があれば十分です。
              </p>

              <div className="space-y-5">
                <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">💌 実母向け（カジュアル）</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p className="bg-white p-3 rounded">
                      いつもありがとう。体に気をつけて、無理しすぎないでね。
                    </p>
                    <p className="bg-white p-3 rounded">
                      いつも支えてくれてありがとう。感謝の気持ちです。
                    </p>
                    <p className="bg-white p-3 rounded">
                      これからも元気でいてね。いつもありがとう。
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">🌸 義母向け（丁寧）</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p className="bg-white p-3 rounded">
                      いつも温かく見守っていただきありがとうございます。ささやかですが感謝の気持ちです。
                    </p>
                    <p className="bg-white p-3 rounded">
                      日頃の感謝の気持ちを込めて贈らせていただきます。お体を大切にお過ごしください。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* まとめ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                まとめ｜母の日プレゼント選びの要点
              </h2>
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded">
                <ul className="space-y-2 text-gray-800 text-sm leading-relaxed">
                  <li>✅ <strong>相場は3,000〜5,000円が定番。</strong>お母さんが気を遣わない金額を選びましょう。</li>
                  <li>✅ <strong>迷ったら「消費できる・好みが割れにくい・実用的」</strong>の3つで絞ると失敗しません。</li>
                  <li>✅ <strong>義母には無難さ＋丁寧さ、実母には好みに合わせた一点突破</strong>が効果的です。</li>
                </ul>
              </div>
            </section>

            {/* サイト内導線 */}
            <section className="mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  🔍 HAREGiftで母の日ギフトを時短で探すコツ
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  迷ったら、次の順で絞ると早く見つかります。
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4 text-sm">
                  <li><strong>予算</strong>（〜3,000円／〜5,000円／〜10,000円）</li>
                  <li><strong>ジャンル</strong>（花／スイーツ／実用品）</li>
                  <li><strong>贈る相手</strong>（実母／義母）</li>
                </ol>
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 母の日プレゼントの相場はいくら？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    一般的には3,000〜5,000円が多く、少し特別にするなら5,000〜10,000円が目安です。
                  </p>
                </div>

                {/* Q2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 毎年花だとマンネリになる？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    花＋消耗品（スイーツやお茶など）の組み合わせにすると、母の日らしさと実用性が両立できます。
                  </p>
                </div>

                {/* Q3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 義母への母の日は何が無難？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    好みが割れにくい消耗品（スイーツ、お茶、タオル等）と、丁寧なメッセージが安全です。
                  </p>
                </div>

                {/* Q4 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 遠距離で贈るなら何に注意する？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    受け取りやすさが重要です。冷蔵・冷凍は避け、常温で日持ちするものが扱いやすいです。
                  </p>
                </div>

                {/* Q5 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. メッセージは短くてもいい？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    短くても十分です。「ありがとう」と体調を気遣う一言があると気持ちが伝わります。
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
