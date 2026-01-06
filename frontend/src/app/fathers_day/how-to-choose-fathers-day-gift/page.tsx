/**
 * 父の日プレゼントの選び方記事ページ
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
      "name": "父の日プレゼントの相場はいくら？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3,000〜5,000円が一般的で、少し特別にするなら5,000〜10,000円が目安です。"
      }
    },
    {
      "@type": "Question",
      "name": "父が「何もいらない」と言う場合は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "消耗品（グルメ）か体験（食事）がおすすめです。負担が残りにくく、気持ちが伝わります。"
      }
    },
    {
      "@type": "Question",
      "name": "お酒を贈るときに注意することは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "飲めるかどうか、好み（ビール/日本酒など）と量（多すぎない）に注意すると失敗しにくいです。"
      }
    },
    {
      "@type": "Question",
      "name": "健康グッズは失礼にならない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "選び方次第です。「改善」ではなく「労い」のニュアンスに寄せると角が立ちにくいです。"
      }
    },
    {
      "@type": "Question",
      "name": "迷ったときの最終解は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "グルメ（個包装・日持ち）か、家族で行ける食事の体験が失敗しにくいです。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '父の日プレゼントの選び方｜相場・人気ランキング・外さないギフト大全【保存版】',
  description: '父の日のプレゼントは相場・関係性・ライフスタイルで決まる。この記事では予算別の目安、人気ジャンル（お酒/グルメ/ファッション/健康/趣味/体験）の選び方、失敗例と回避策、メッセージ例までまとめて解説します。',
  keywords: ['父の日', 'プレゼント', '選び方', '相場', '人気ランキング', 'ギフト'],
  openGraph: {
    title: '父の日プレゼントの選び方｜相場・人気ランキング・外さないギフト大全【保存版】',
    description: '父の日のプレゼントは相場・関係性・ライフスタイルで決まる。この記事では予算別の目安、人気ジャンル（お酒/グルメ/ファッション/健康/趣味/体験）の選び方、失敗例と回避策、メッセージ例までまとめて解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/fathers_day/how-to-choose-fathers-day-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/fathers_day/how-to-choose-fathers-day-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function FathersDayHowToChooseArticle() {
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
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ホーム
            </Link>
            <span className="mx-2">›</span>
            <Link href="/fathers_day" className="hover:text-blue-600 transition-colors">
              父の日
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">選び方完全ガイド</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-lg shadow-md p-8">
            {/* タイトル（h1） */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              父の日プレゼントの選び方｜相場・人気ランキング・外さないギフト大全【保存版】
            </h1>

            {/* 最終更新日 */}
            <p className="text-sm text-gray-500 mb-6">
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="mb-3">
                父の日のプレゼントは、母の日よりも<strong>「何を贈ればいいか分からない」と悩みがち</strong>です。
              </p>
              <p className="mb-3">
                理由は簡単で、父親は欲しいものを言わないことが多く、趣味も実用性も<strong>「好みの幅」が広い</strong>から。
              </p>
              <p className="mb-3">
                でも、父の日ギフトはセンスよりも<strong>「相手の生活に合うか」「負担にならないか」「感謝が伝わるか」</strong>を押さえれば失敗しにくいです。
              </p>
              <p className="mb-3">
                この記事では、父の日の相場、人気ジャンル、選び方のコツ、避けた方がいいギフト、予算別・関係性別のおすすめまで、<strong>1本で迷いを解決できるようにまとめました</strong>。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4">📋 この記事でわかること</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                <li>父の日プレゼントの相場（いくらが一般的？）</li>
                <li>失敗しない選び方（3つの基準）</li>
                <li>人気ジャンル別の選び方（お酒/グルメ/実用品/趣味/健康/体験）</li>
                <li>避けた方がいいプレゼント（地雷回避）</li>
                <li>すぐ使えるメッセージ例</li>
                <li>HAREGiftで時短で探すコツ</li>
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

            {/* セクション1: 相場 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                父の日プレゼントの相場はいくら？（予算の目安）
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                父の日の相場は家庭・地域差もありますが、目安としては次の帯が選ばれやすいです。
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">💰 一般的な相場</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold mr-3 whitespace-nowrap">
                      3,000〜5,000円
                    </span>
                    <p className="text-gray-700 text-sm">定番。気を遣わせず、選択肢も多い</p>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold mr-3 whitespace-nowrap">
                      5,000〜10,000円
                    </span>
                    <p className="text-gray-700 text-sm">少し特別感を出したいとき</p>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold mr-3 whitespace-nowrap">
                      10,000円以上
                    </span>
                    <p className="text-gray-700 text-sm">節目、家族で連名、体験ギフト・上質実用品向け</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded">
                <p className="text-gray-700 text-sm leading-relaxed">
                  💡 <strong>大事なのは「続けられる価格帯」にすること</strong>。<br />
                  張り切りすぎると翌年以降のハードルが上がるので、無理のない予算に寄せるのが失敗しにくいです。
                </p>
              </div>
            </section>

            {/* セクション2: 3つの基準 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                失敗しない父の日ギフトは「3つの基準」で決める
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                迷ったら、次の3つで絞ると外しにくくなります。
              </p>

              <div className="space-y-6">
                {/* 基準1 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">✓ 1) 父の生活に合う（使うシーンが想像できる）</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    仕事、休日、家での時間…どこで使うかが見えるほど当たりやすいです。
                  </p>
                </div>

                {/* 基準2 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">✓ 2) 好みの地雷を踏みにくい（デザイン・味・香り）</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    個性が強いものほど外れやすいので、分からないときは<strong>「無難寄せ」が正解</strong>です。
                  </p>
                </div>

                {/* 基準3 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">✓ 3) 負担にならない（置き場所・手入れ・健康配慮）</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    大きいもの、手入れが必要なもの、好みが割れる健康系は注意。<br />
                    父が気を遣うタイプなら、<strong>消耗品や体験のほうが渡しやすい</strong>です。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション3: 人気ランキング */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                🏆 父の日の人気ギフトランキング（ジャンル別）
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                「何が人気か」を先に把握すると選びやすくなります。父の日は主にこの6ジャンルが強いです。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
                  <li><strong>お酒・おつまみ</strong></li>
                  <li><strong>グルメ</strong>（うなぎ、肉、海鮮、スイーツも含む）</li>
                  <li><strong>ファッション小物</strong>（靴下、ハンカチ、ベルト等）</li>
                  <li><strong>ビジネス・日用品</strong>（タンブラー、マグ、ケア用品等）</li>
                  <li><strong>健康・リラックス</strong>（入浴、睡眠、軽いケア）</li>
                  <li><strong>体験</strong>（食事、旅行、趣味の時間）</li>
                </ol>
              </div>

              <p className="text-gray-700 mt-6 leading-relaxed">
                ここからは、ジャンルごとに<strong>「当たりやすい選び方」を深掘り</strong>します。
              </p>
            </section>

            {/* セクション4: ジャンル別選び方 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                ジャンル別｜父の日プレゼントの選び方（深掘り）
              </h2>

              {/* お酒・おつまみ */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🍺 1) お酒・おつまみ（鉄板。ただし「飲めるか」は確認）</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  お酒は父の日の王道ですが、前提が1つあります。<br />
                  <strong>「飲める（飲む）お父さんかどうか」</strong>です。
                </p>

                <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3">失敗しにくい選び方</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>好みが分かる：ビール/日本酒/焼酎/ウイスキー等に寄せる</li>
                    <li>分からない：飲み比べセットにする（量は多すぎない）</li>
                    <li>体調配慮：ノンアルやソフトドリンク＋おつまみでも父の日らしくなる</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">おつまみのコツ</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>個包装/小分けは使いやすい</li>
                    <li>味が濃すぎないものも混ぜると外しにくい</li>
                  </ul>
                </div>
              </div>

              {/* グルメ */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🍖 2) グルメ（食べてなくなる＝被っても困りにくい）</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  父の日グルメは<strong>「消えるギフト」なので失敗しにくい</strong>です。<br />
                  ポイントは「父の生活に合わせる」こと。
                </p>

                <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3">当たりやすい選び方</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>家族で楽しむ：シェアしやすいもの（肉・海鮮・餃子等）</li>
                    <li>一人時間が多い：小分け/個包装/温めるだけのもの</li>
                    <li>忙しい：レトルト上位版、スープ、常温保存系</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">注意点</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>冷凍・冷蔵は受け取りと冷凍庫容量に注意</li>
                    <li>好み（脂が苦手、甘いの苦手など）は分かる範囲で配慮</li>
                  </ul>
                </div>
              </div>

              {/* ファッション小物 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">👔 3) ファッション小物（サイズ事故を避ければ強い）</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  服はサイズと好みで難易度が上がります。<br />
                  その代わり、<strong>小物は「安全」に寄せられます</strong>。
                </p>

                <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3">当たりやすいアイテム</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>靴下、ハンカチ、タオル</li>
                    <li>名刺入れ、キーケース（派手すぎない）</li>
                    <li>ベルトはサイズ調整がしやすいタイプならOK</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">失敗しにくいコツ</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>色は黒/紺/グレーなど無難寄せ</li>
                    <li>ブランドより「使いやすさ」で選ぶ</li>
                  </ul>
                </div>
              </div>

              {/* ビジネス・日用品 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">💼 4) ビジネス・日用品（「毎日使う」ほど満足度が上がる）</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  父の日で意外と喜ばれるのが、<strong>毎日触れるもののアップグレード</strong>です。
                </p>

                <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3">当たりやすい方向性</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>タンブラー/マグ（会社でも家でも使える）</li>
                    <li>シェーバー用品、身だしなみケア（押し付けにならない範囲）</li>
                    <li>上質タオル、ルームウェア（好みが分かれるなら無難色）</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">外れにくくするコツ</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>「すでに持ってる」前提で、上質に寄せる</li>
                    <li>置き場所が増えないものが安全</li>
                  </ul>
                </div>
              </div>

              {/* 健康・リラックス */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">💆 5) 健康・リラックス（「健康の押し付け」に見せない）</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  健康系は刺さると強いですが、選び方を間違えると地雷になります。<br />
                  コツは<strong>「改善」ではなく「労い」に寄せること</strong>。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-green-200 rounded-lg p-5">
                    <h4 className="font-semibold text-green-800 mb-3">✓ 当たりやすい例</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                      <li>入浴・リラックス（香り控えめ）</li>
                      <li>睡眠の質を上げる（好みが分かれない範囲）</li>
                      <li>軽いケア用品（痛みの治療を連想させない）</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-red-200 rounded-lg p-5">
                    <h4 className="font-semibold text-red-800 mb-3">✗ 避けたい例</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                      <li>ダイエット、体型に踏み込むニュアンス</li>
                      <li>病気を連想させる表現が強いもの</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 体験 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎁 6) 体験（モノが増えない。父の日の「最強ルート」）</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  体験は<strong>「モノを増やしたくない」父に刺さりやすい</strong>です。<br />
                  ただし、体験は「使いづらさ」が最大の失敗原因なので、柔軟性が重要です。
                </p>

                <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3">失敗しない条件</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>期限が長い</li>
                    <li>場所が選べる or 近い</li>
                    <li>予約が取りやすい</li>
                    <li>父が気を遣わない（家族で行ける等）</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">代表例</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>食事（ランチ/焼肉/寿司など）</li>
                    <li>日帰り小旅行</li>
                    <li>趣味の時間（ゴルフ/釣り/映画など）</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション5: 地雷回避 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                ⚠️ 避けた方がいい父の日プレゼント（地雷回避）
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                父の日で外れやすいのは次です（関係性によってはOKだが要注意）。
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li>サイズが必要な服（確認なし）</li>
                  <li>好みが強い香りもの</li>
                  <li>置き場所が必要な大型アイテム</li>
                  <li>健康の押し付けに見えるもの</li>
                  <li>高額すぎるもの（気を遣わせる）</li>
                </ul>
              </div>
            </section>

            {/* セクション6: 予算別 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                💰 予算別｜父の日ギフトの選び方（迷ったらここ）
              </h2>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">3,000〜5,000円</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>小分けグルメ、おつまみ、飲み比べ小サイズ</li>
                    <li>靴下・ハンカチなど無難小物</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">5,000〜10,000円</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>ちょっと贅沢グルメ</li>
                    <li>タンブラーなど日用品アップグレード</li>
                    <li>飲み比べセット（好み寄せ）</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">10,000円以上</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>体験（食事・旅行・趣味）</li>
                    <li>上質実用品（長く使えるもの）</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション7: メッセージ例 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                💌 すぐ使える父の日メッセージ例（短くてOK）
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">シンプル（実父向け）</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <p className="text-gray-700 text-sm">
                        いつもありがとう。体に気をつけて、これからも元気でいてね。
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <p className="text-gray-700 text-sm">
                        いつも支えてくれてありがとう。感謝しています。
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <p className="text-gray-700 text-sm">
                        たまにはゆっくり休んでね。いつもありがとう。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">少し丁寧（義父にも使いやすい）</h3>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <p className="text-gray-700 text-sm">
                      いつもお世話になっております。日頃の感謝の気持ちです。どうぞお体にお気をつけてお過ごしください。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション8: HAREGiftで探すコツ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                🔍 HAREGiftで父の日ギフトを時短で探すコツ
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                最短で決めるなら、この順が早いです。
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-2">
                  <li><strong>予算を決める</strong>（3,000/5,000/10,000）</li>
                  <li><strong>父の生活を1つ選ぶ</strong>（仕事/家/休日）</li>
                  <li><strong>ジャンルを決める</strong>（消耗品/小物/体験）</li>
                </ol>
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 父の日プレゼントの相場はいくら？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    3,000〜5,000円が一般的で、少し特別にするなら5,000〜10,000円が目安です。
                  </p>
                </div>

                {/* Q2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 父が「何もいらない」と言う場合は？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    消耗品（グルメ）か体験（食事）がおすすめです。負担が残りにくく、気持ちが伝わります。
                  </p>
                </div>

                {/* Q3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. お酒を贈るときに注意することは？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    飲めるかどうか、好み（ビール/日本酒など）と量（多すぎない）に注意すると失敗しにくいです。
                  </p>
                </div>

                {/* Q4 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 健康グッズは失礼にならない？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    選び方次第です。「改善」ではなく「労い」のニュアンスに寄せると角が立ちにくいです。
                  </p>
                </div>

                {/* Q5 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 迷ったときの最終解は？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    グルメ（個包装・日持ち）か、家族で行ける食事の体験が失敗しにくいです。
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
