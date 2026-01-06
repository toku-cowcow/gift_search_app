/**
 * 父の日ギリギリでも間に合う記事ページ
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
      "name": "父の日に当日間に合わなかったら失礼？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "失礼ではありません。短く感謝を伝えて、後日フォローすれば十分です。"
      }
    },
    {
      "@type": "Question",
      "name": "ギリギリのとき、一番安全なのは何？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "消耗品（食べてなくなるもの）か、食事の予定が外しにくいです。"
      }
    },
    {
      "@type": "Question",
      "name": "デジタルギフトだけだと味気ない？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "当日はデジタル、後日小さなギフトや食事で二段構えにすると丁寧です。"
      }
    },
    {
      "@type": "Question",
      "name": "遠距離で当日対応したいときは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "デジタルで即日＋後日配送の二段構えが現実的です。"
      }
    },
    {
      "@type": "Question",
      "name": "言い訳は必要？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "不要です。理由より「ありがとう」を短く伝えるほうが気持ちが伝わります。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '父の日ギリギリでも間に合う｜当日・前日に用意できるプレゼントと失敗しない渡し方',
  description: '父の日を忘れていた、準備が間に合わない人向け。今日でも用意できる父の日プレゼント（近所で買える・予約できる・デジタルで即日）と、気まずくならない渡し方、後日フォローまでを攻略形式でまとめます。',
  keywords: ['父の日', 'ギリギリ', '当日', '前日', '間に合う', 'プレゼント'],
  openGraph: {
    title: '父の日ギリギリでも間に合う｜当日・前日に用意できるプレゼントと失敗しない渡し方',
    description: '父の日を忘れていた、準備が間に合わない人向け。今日でも用意できる父の日プレゼント（近所で買える・予約できる・デジタルで即日）と、気まずくならない渡し方、後日フォローまでを攻略形式でまとめます。',
    type: 'article',
    url: 'https://www.hare-gift.com/fathers_day/last-minute',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/fathers_day/last-minute',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function FathersDayLastMinuteArticle() {
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
            <span className="text-gray-800">ギリギリでも間に合う</span>
          </nav>

          {/* 記事本文 */}
          <article className="bg-white rounded-lg shadow-md p-8">
            {/* タイトル（h1） */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              父の日ギリギリでも間に合う｜当日・前日に用意できるプレゼントと失敗しない渡し方
            </h1>

            {/* 最終更新日 */}
            <p className="text-sm text-gray-500 mb-6">
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <p className="mb-3">
                父の日が近いのに準備ができていない。気づいたら前日、当日…。
              </p>
              <p className="mb-3">
                焦るほど<strong>「変なものを買う」「配送が間に合わない」「言い訳っぽくなる」</strong>で失敗しやすくなります。
              </p>
              <p className="mb-3">
                でも安心してください。父の日は豪華さより<strong>「感謝が伝わるか」と「負担にならないか」</strong>が大事です。
              </p>
              <p className="mb-3">
                この記事では、当日・前日でも間に合うプレゼントの選択肢を、<strong>行動しやすい順に整理</strong>しました。
              </p>
              <p className="mb-3">
                今日渡す分と、後日フォロー分の「二段構え」まで含めて、気まずくならない立て直し方を攻略します。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4">📋 この記事でわかること</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                <li>当日・前日でも間に合う父の日プレゼントの選択肢</li>
                <li>近所で買えるもの、予約できるもの、即日で贈れるものの使い分け</li>
                <li>気まずくならない渡し方（言い訳しないコツ）</li>
                <li>遅れたときのフォロー（後日アップデートの作り方）</li>
                <li>時短で選ぶときの判断基準</li>
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

            {/* セクション1: まず結論 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                ⚡ まず結論：ギリギリの正解は「小さくても丁寧に」「言い訳しない」
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ギリギリのときほど、豪華さより<strong>「丁寧さ」が効きます</strong>。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside text-gray-700 space-y-3 ml-2">
                  <li><strong>今日：</strong>小さくても何か渡す（空手は避ける）</li>
                  <li><strong>口数：</strong>短く「ありがとう」に寄せる（理由説明は最小限）</li>
                  <li><strong>後日：</strong>落ち着いてアップデートする（食事や追加ギフト）</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-3 leading-relaxed">
                父の日は「当日だけが勝負」ではありません。
              </p>
              <p className="text-gray-700 leading-relaxed">
                今日をうまく乗り切り、後日で満足度を上げれば成功です。
              </p>
            </section>

            {/* セクション2: 当日でも間に合うプレゼント7選 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-pink-500">
                🎁 当日でも間に合うプレゼント7選（行動しやすい順）
              </h2>

              {/* 1）コンビニ・スーパー */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                  <span>コンビニ・スーパーで買える「消えるギフト」</span>
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  最短で用意できて、負担も残りにくいのが消耗品です。
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3">選び方のコツ</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>父が好きそうな味に寄せる（分からなければ定番寄せ）</li>
                    <li>家族で食べられるものにすると「父の日感」が出やすい</li>
                    <li>量は多すぎないほうが扱いやすい</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">例（イメージ）</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                    <li>ちょっと良いおつまみ</li>
                    <li>甘いものが好きなら焼き菓子系</li>
                    <li>コーヒーやお茶</li>
                  </ul>
                </div>
              </div>

              {/* 2）花 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                  <span>花は父の日でも成立する（小さめが正解）</span>
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  父の日に花は意外と良い選択肢です。特に<strong>「何を買うか迷う時間」がないときに強い</strong>です。
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded">
                  <h4 className="font-semibold text-gray-800 mb-3">失敗しにくいコツ</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>大きすぎない（置き場所に困らない）</li>
                    <li>手入れが面倒にならない形に寄せる</li>
                  </ul>
                </div>
              </div>

              {/* 3）ドラッグストア */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                  <span>ドラッグストアで買える「身だしなみ・ケア」</span>
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  父は自分で買うものを固定化しがちなので、上質な消耗品寄せが外れにくいです。
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                  <h4 className="font-semibold text-gray-800 mb-3">失敗回避</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>香りが強いものは避ける</li>
                    <li>好みが分からないときは「シンプル・無難」に寄せる</li>
                  </ul>
                </div>
              </div>

              {/* 4）食事 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                  <span>その場で予約できる「食事」（最強の立て直し手段）</span>
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  モノが間に合わないなら、<strong>体験に寄せると父の日の満足度は上がります</strong>。
                </p>

                <div className="bg-gray-50 p-5 rounded mb-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>当日夜に行けるなら予約して即決</li>
                    <li>無理なら「来週ごはん行こう」でOK（予定がプレゼントになる）</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded">
                  <h4 className="font-semibold text-gray-800 mb-3">ポイント</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>父の負担にならない場所（近い、行き慣れている）</li>
                    <li>家族で行ける形が無難</li>
                  </ul>
                </div>
              </div>

              {/* 5）デジタル */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                  <span>デジタルで即日贈れる（遠距離・忙しい人の救世主）</span>
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  当日でも<strong>「今すぐ気持ちを届ける」用途で強いのがデジタル</strong>です。
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3">使い方の正解</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li><strong>今日：</strong>デジタルで即日</li>
                    <li><strong>後日：</strong>小さなギフトや食事でアップデート</li>
                  </ul>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  💡 デジタル単体だと味気なく感じる場合があるので、二段構えにすると丁寧になります。
                </p>
              </div>

              {/* 6）手紙・メモ */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                  <span>「手紙・メモ＋小さなギフト」は短時間で好印象</span>
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  ギリギリほど、<strong>手書きメモが効きます</strong>。文章は短くて十分です。
                </p>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">一言テンプレ</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded border-l-4 border-pink-400">
                      <p className="text-gray-700 text-sm">「いつもありがとう。体に気をつけてね。」</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border-l-4 border-pink-400">
                      <p className="text-gray-700 text-sm">「いつもお疲れさま。ありがとう。」</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7）二段構え */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
                  <span>最も失敗しにくいのは「二段構え」（今日＋後日）</span>
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  迷ったら、これが最も安全です。
                </p>

                <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded">
                  <h4 className="font-semibold text-gray-800 mb-3">二段構えの例</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li><strong>今日：</strong>おつまみ＋一言メモ</li>
                    <li><strong>後日：</strong>食事に連れていく、人気ギフトを改めて選ぶ</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション3: 気まずくならない渡し方 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                💬 気まずくならない渡し方（やってしまいがちな失敗も回避）
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                ギリギリでやりがちなのが<strong>「言い訳長文」</strong>です。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                父の日は、理由より感謝を置くほうが印象が良いです。
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">渡し方テンプレ（万能）</h3>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「いつもありがとう。今日はこれだけだけど、また改めてね。」</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">照れくさい人向け（短く）</h3>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「ありがとう。体に気をつけてね。」</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">父が気を遣うタイプなら</h3>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-pink-400">
                    <p className="text-gray-700 text-sm">「気持ちだから受け取ってね。いつもありがとう。」</p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション4: 当日の行動タイムライン */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                ⏰ 当日の行動タイムライン（迷ったらこの通り）
              </h2>

              <div className="space-y-6">
                {/* 前日夜〜当日午前 */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">前日夜〜当日午前</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>予算を決める</li>
                    <li>近所で買える消耗品か、食事予約かを決める</li>
                    <li>迷ったら「二段構え」に決定</li>
                  </ul>
                </div>

                {/* 当日 */}
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">当日</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>小さくても渡す</li>
                    <li>一言だけ感謝を言う（長い説明はしない）</li>
                  </ul>
                </div>

                {/* 翌日以降 */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">翌日以降</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                    <li>予約を入れる、改めてギフトを選ぶなど「後日アップデート」を実行</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション5: 時短で選ぶならHAREGift */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                🔍 時短で選ぶならHAREGift（人気順で迷いを減らす）
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                時間がないときほど、<strong>人気順・予算別で絞るほうが早い</strong>です。
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside text-gray-700 space-y-3 ml-2">
                  <li>予算を決める</li>
                  <li>父の生活（家・仕事・休日）を1つだけ選ぶ</li>
                  <li>迷ったら人気順で決める</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                父の日の相場や選び方をしっかり押さえて選びたい場合は、別記事も参考にしてください。
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 父の日に当日間に合わなかったら失礼？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    失礼ではありません。短く感謝を伝えて、後日フォローすれば十分です。
                  </p>
                </div>

                {/* Q2 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. ギリギリのとき、一番安全なのは何？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    消耗品（食べてなくなるもの）か、食事の予定が外しにくいです。
                  </p>
                </div>

                {/* Q3 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. デジタルギフトだけだと味気ない？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    当日はデジタル、後日小さなギフトや食事で二段構えにすると丁寧です。
                  </p>
                </div>

                {/* Q4 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 遠距離で当日対応したいときは？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    デジタルで即日＋後日配送の二段構えが現実的です。
                  </p>
                </div>

                {/* Q5 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Q. 言い訳は必要？</h3>
                  <p className="text-gray-700 leading-relaxed">
                    不要です。理由より「ありがとう」を短く伝えるほうが気持ちが伝わります。
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
