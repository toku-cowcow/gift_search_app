/**
 * 父の日に黄色い花を贈る理由｜記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、CTA配置、内部リンク、表組み
 */

import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// FAQ JSON-LD データ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': '父の日に花を贈るのは変？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '変ではありません。父の日は「覚えていてくれた」「気にかけてくれた」が伝わるだけで十分喜ばれます。'
      }
    },
    {
      '@type': 'Question',
      'name': '黄色いバラは気まずくならない？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '気まずくなりにくいです。心配なら「元気が出る色にしたよ」など一言カードを添えると誤解の余地が減ります。'
      }
    },
    {
      '@type': 'Question',
      'name': 'ひまわりは父の日に合う？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '合います。明るく季節感が出やすいので、元気な印象にしたいときに向いています。'
      }
    },
    {
      '@type': 'Question',
      'name': '迷ったら花束とアレンジどっち？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '迷ったらアレンジがおすすめです。花瓶が不要で、そのまま飾れるため負担が少ないです。'
      }
    },
    {
      '@type': 'Question',
      'name': '遠距離で贈るときに気をつけることは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '受け取りやすさが重要です。大きすぎないサイズにして、可能なら受け取れる日時に合わせると安心です。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '父の日に黄色い花を贈る理由｜黄色いバラ・ひまわりの意味と失敗しない選び方',
  description: '父の日に黄色い花はアリ？という疑問に、黄色いバラ・ひまわりの印象、誤解されにくい選び方、花束・アレンジ・プリザの違い、メッセージのコツまで深掘りで解説します。',
  keywords: ['父の日', '黄色い花', '黄色いバラ', 'ひまわり', '花', 'プレゼント'],
  openGraph: {
    title: '父の日に黄色い花を贈る理由｜黄色いバラ・ひまわりの意味と失敗しない選び方',
    description: '父の日に黄色い花はアリ？という疑問に、黄色いバラ・ひまわりの印象、誤解されにくい選び方、花束・アレンジ・プリザの違い、メッセージのコツまで深掘りで解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/fathers_day/yellow-flowers',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/fathers_day/yellow-flowers',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function FathersDayYellowFlowersArticle() {
  return (
    <>
      <Header />
      
      {/* FAQ JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className='min-h-screen bg-gray-50'>
        <main className='max-w-4xl mx-auto px-4 py-8'>
          {/* パンくずリスト */}
          <nav className='mb-4 text-sm text-gray-600'>
            <Link href='/' className='hover:text-pink-600 transition-colors'>
              ホーム
            </Link>
            <span className='mx-2'>›</span>
            <Link href='/fathers_day' className='hover:text-pink-600 transition-colors'>
              父の日
            </Link>
            <span className='mx-2'>›</span>
            <span className='text-gray-800'>黄色い花を贈る</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              父の日に黄色い花を贈る理由｜黄色いバラ・ひまわりの意味と失敗しない選び方
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                父の日の贈り物で悩んだとき、意外と強い選択肢が<strong>「黄色い花」</strong>です。
              </p>
              <p className='mb-3'>
                理由はシンプルで、黄色は明るく、前向きで、もらった瞬間に場の空気が軽くなる色だから。
              </p>
              <p className='mb-3'>
                一方で<strong>「黄色いバラって意味が難しい？」「花ってお父さんは嬉しいの？」</strong>と不安になる人も多いです。
              </p>
              <p className='mb-3'>
                この記事では、父の日の「黄色い花」がなぜ外しにくいのか、黄色いバラ・ひまわりの選び方、誤解されにくい工夫、花束とアレンジの使い分けまで、<strong>深掘りでまとめます</strong>。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>📋 この記事でわかること</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>父の日に黄色い花が選ばれやすい理由</li>
                <li>黄色いバラ・ひまわりはどっちが無難か</li>
                <li>花束・アレンジ・プリザーブドの選び分け</li>
                <li>誤解や気まずさを避ける渡し方と一言</li>
                <li>花が苦手なお父さん向け「黄色で寄せる」代替案</li>
              </ul>
            </div>

            {/* CTA1 */}
            <div className='bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-8'>
              <p className='text-lg font-bold mb-3'>父の日ギフトをカテゴリから探す</p>
              <Link
                href='/fathers_day'
                className='inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors'
              >
                父の日ギフトを探す
              </Link>
            </div>

            {/* セクション1: 結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🌼 父の日に黄色い花はアリ？結論は「アリ。むしろ外しにくい」
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                結論から言うと、父の日に黄色い花は十分アリです。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                花は「好みが分かれる」と思われがちですが、父の日の場合は派手さより<strong>「気持ちが伝わること」が勝ちやすい</strong>からです。
              </p>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>黄色い花が強い理由</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>明るい印象で、受け取った瞬間に嬉しくなりやすい</li>
                  <li>部屋に置くだけで雰囲気が変わる</li>
                  <li>花は消耗品なので、置き物より負担が残りにくい</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed'>
                迷ったら<strong>「黄色の小さめアレンジ」から始めると失敗が減ります</strong>。
              </p>
            </section>

            {/* セクション2: 黄色が人気の理由 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💡 父の日の「黄色」はなぜ人気？色選びで勝つ考え方
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                色の印象は、プレゼントの成功率に直結します。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                父の日は母の日ほど「定番カラー」が固定されていない分、色で迷子になりがちです。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>黄色が父の日に向く理由（実用的な視点）</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li><strong>明るい＝お祝い感が出る</strong></li>
                  <li><strong>重くならない＝気まずさが減る</strong></li>
                  <li><strong>写真映えする＝家族の思い出に残しやすい</strong></li>
                </ul>
              </div>

              <p className='text-gray-700 mb-4 leading-relaxed'>
                逆に、色選びで失敗しやすいパターンもあります。
              </p>

              <div className='bg-red-50 p-5 rounded mb-6'>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>濃すぎる色で派手になりすぎる</li>
                  <li>父の部屋や家の雰囲気と合わない</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed'>
                黄色は「派手さ」より「明るさ」に寄せられるので、<strong>初心者ほど扱いやすい色</strong>です。
              </p>
            </section>

            {/* セクション3: バラとひまわりの比較表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🌹 黄色いバラとひまわり、どっちが無難？（結論：目的で分ける）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                「黄色い花」と言っても、印象は花の種類で変わります。<br />
                迷ったら、次の基準で選ぶと簡単です。
              </p>

              {/* 比較表 */}
              <div className='overflow-x-auto mb-6'>
                <table className='w-full border-collapse bg-white'>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>花の種類</th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>向いている人</th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>印象</th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>失敗回避のコツ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>黄色いバラ</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>きちんと感を出したい、上品にまとめたい</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>大人っぽい、丁寧</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>小さめ、香り控えめ、カードを添える</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>ひまわり</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>明るく元気にしたい、季節感を出したい</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>パッと明るい、前向き</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>単体だと子どもっぽくなる場合はグリーンを足す</td>
                    </tr>
                    <tr>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>黄色ミックス</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>迷っている、無難にしたい</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>バランス型</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>淡い黄色寄せで派手になりすぎない</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* セクション4: 黄色いバラの誤解対策 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💬 黄色いバラの意味が心配な人へ：誤解されにくくする方法はこれ
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                黄色いバラは、文脈によって受け取り方が変わることがあるため<strong>「不安」という声が出やすい</strong>です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ここで大事なのは、花言葉の暗記ではありません。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>誤解を避ける最短ルート</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>花単体で勝負しない</li>
                  <li>一言カードで意図を固定する</li>
                  <li>サイズを控えめにして「重くしない」</li>
                </ul>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-5'>
                <h3 className='font-semibold text-gray-800 mb-3'>おすすめの一言（短くてOK）</h3>
                <div className='space-y-3'>
                  <div className='bg-gray-50 p-3 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「いつもありがとう。元気が出る色にしたよ」</p>
                  </div>
                  <div className='bg-gray-50 p-3 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「明るい色が似合うと思って選びました」</p>
                  </div>
                  <div className='bg-gray-50 p-3 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「たまには部屋に花もいいかなと思って」</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed'>
                💡 この一言があるだけで<strong>「意味を深読みする余地」が消えます</strong>。
              </p>
            </section>

            {/* セクション5: 花束・アレンジ・プリザの選び方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🎁 花束・アレンジ・プリザーブド｜父の日で失敗しない形の選び方
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                父の日で花を外さないコツは<strong>「形」</strong>です。<br />
                お父さん本人より、受け取った後の家族の手間が失敗ポイントになることが多いからです。
              </p>

              {/* 花束 */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-800 mb-4'>花束：直接手渡しできるなら強い</h3>
                
                <div className='bg-blue-50 p-5 rounded mb-4'>
                  <h4 className='font-semibold text-gray-800 mb-3 text-sm'>向いているケース</h4>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                    <li>当日会える</li>
                    <li>花瓶がある、または家族が飾る余裕がある</li>
                  </ul>
                </div>

                <div className='bg-red-50 p-5 rounded'>
                  <h4 className='font-semibold text-gray-800 mb-3 text-sm'>注意点</h4>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                    <li>花瓶がないと困ることがある</li>
                    <li>持ち帰りの導線が必要（電車移動など）</li>
                  </ul>
                </div>
              </div>

              {/* アレンジメント */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-800 mb-4'>アレンジメント：迷ったらこれが最強</h3>
                
                <div className='bg-blue-50 p-5 rounded mb-4'>
                  <h4 className='font-semibold text-gray-800 mb-3 text-sm'>向いているケース</h4>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                    <li>忙しい家族</li>
                    <li>花に慣れていない家庭</li>
                    <li>遠距離で配送する</li>
                  </ul>
                </div>

                <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded'>
                  <h4 className='font-semibold text-gray-800 mb-3 text-sm'>強い理由</h4>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                    <li>花瓶不要で、そのまま置ける</li>
                    <li>受け取った側の負担が少ない</li>
                  </ul>
                </div>
              </div>

              {/* プリザーブド */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-800 mb-4'>プリザーブド・ドライ：花の手入れが負担になりそうなら</h3>
                
                <div className='bg-blue-50 p-5 rounded mb-4'>
                  <h4 className='font-semibold text-gray-800 mb-3 text-sm'>向いているケース</h4>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                    <li>生花の管理が難しい</li>
                    <li>長く飾れるほうが嬉しいタイプ</li>
                  </ul>
                </div>

                <div className='bg-yellow-50 p-5 rounded'>
                  <h4 className='font-semibold text-gray-800 mb-3 text-sm'>注意点</h4>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                    <li>インテリアの好みが分かれる</li>
                    <li>サイズは小さめが無難</li>
                  </ul>
                </div>
              </div>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <p className='text-gray-700 font-semibold'>
                  ✨ 結論：迷ったら「小さめの黄色アレンジメント」が一番失敗しにくいです。
                </p>
              </div>
            </section>

            {/* セクション6: サイズ感 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📏 父の日に花を贈るときの「ちょうどいいサイズ感」
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                花の失敗で多いのが<strong>「大きすぎる」問題</strong>です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                置き場所に困ると、気持ちは嬉しくても負担になります。
              </p>

              <div className='bg-gray-50 p-6 rounded-lg mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>外しにくい考え方</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>食卓や棚に置けるサイズが基本</li>
                  <li>玄関に置く想定なら高さを出しすぎない</li>
                  <li>迷ったら小さめ＋カードで丁寧さを足す</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed'>
                小さい花は「気持ちが小さい」ではありません。<br />
                父の日は<strong>「覚えていた」が価値になる</strong>ので、サイズより設計で勝てます。
              </p>
            </section>

            {/* セクション7: 花が苦手な場合の代替案 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💡 花が苦手なお父さん向け：黄色で寄せる代替案
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                検索で多いのが「父の日 花 男性」という不安です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                花が苦手そうなら、無理に花にしなくても<strong>「黄色の要素」で父の日らしさは作れます</strong>。
              </p>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>黄色で寄せる代替案</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>黄色のラッピングで包んだ消耗品（おつまみ、コーヒーなど）</li>
                  <li>黄色系の実用品（ハンカチ、靴下など無難色）</li>
                  <li>黄色のメッセージカードだけを添える</li>
                </ul>
              </div>

              <p className='text-gray-700 mb-6 leading-relaxed'>
                大切なのは<strong>「父の日を意識して選んだ」という文脈を作ること</strong>です。
              </p>

              <p className='text-gray-700 mb-4 leading-relaxed'>
                ギフト全体の選び方に迷うなら、別記事で相場やジャンルの整理もできます。
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <Link
                  href='/fathers_day/how-to-choose-fathers-day-gift'
                  className='text-pink-600 font-semibold hover:underline'
                >
                  → 父の日プレゼントの選び方｜相場・人気ランキング・外さないギフト大全
                </Link>
              </div>
            </section>

            {/* セクション8: 渡し方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💌 渡し方で印象が決まる：父の日は「一言＋花」が最強
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                父の日は照れが出やすいので、長文は不要です。<br />
                <strong>短い一言のほうが自然に伝わります</strong>。
              </p>

              <div className='bg-white border border-gray-200 rounded-lg p-5 mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>一言テンプレ（花に添える）</h3>
                <div className='space-y-3'>
                  <div className='bg-gray-50 p-3 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「いつもありがとう」</p>
                  </div>
                  <div className='bg-gray-50 p-3 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「お疲れさま。たまには休んでね」</p>
                  </div>
                  <div className='bg-gray-50 p-3 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「体に気をつけてね」</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mb-4 leading-relaxed'>
                例文をもっと見たい人は、メッセージ専用の記事にまとめています。
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <Link
                  href='/fathers_day/fathers-day-message-examples'
                  className='text-pink-600 font-semibold hover:underline'
                >
                  → 父の日メッセージ例文集｜実父・義父・LINEでそのまま使える文例と書き方
                </Link>
              </div>
            </section>

            {/* セクション9: チェックリスト */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✓ 父の日の黄色い花を失敗させないチェックリスト
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                最後に、買う前にこれだけ確認すれば失敗が減ります。
              </p>

              <div className='bg-blue-50 p-6 rounded-lg'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2'>□</span>
                    <span>形はアレンジか（迷ったらアレンジ）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2'>□</span>
                    <span>サイズは大きすぎないか</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2'>□</span>
                    <span>香りが強すぎないか（不明なら控えめ）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2'>□</span>
                    <span>受け取りの手間は増えないか（配送なら日時配慮）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2'>□</span>
                    <span>一言カードを添えたか（意図を固定する）</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA2 */}
            <div className='bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-12'>
              <p className='text-lg font-bold mb-3'>父の日ギフトをカテゴリから探す</p>
              <Link
                href='/fathers_day'
                className='inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors'
              >
                父の日ギフトを探す
              </Link>
            </div>

            {/* FAQ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-pink-500'>
                ❓ よくある質問（FAQ）
              </h2>

              <div className='space-y-6'>
                {/* Q1 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 父の日に花を贈るのは変？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    変ではありません。父の日は「覚えていてくれた」「気にかけてくれた」が伝わるだけで十分喜ばれます。
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 黄色いバラは気まずくならない？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    気まずくなりにくいです。心配なら「元気が出る色にしたよ」など一言カードを添えると誤解の余地が減ります。
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. ひまわりは父の日に合う？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    合います。明るく季節感が出やすいので、元気な印象にしたいときに向いています。
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 迷ったら花束とアレンジどっち？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    迷ったらアレンジがおすすめです。花瓶が不要で、そのまま飾れるため負担が少ないです。
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 遠距離で贈るときに気をつけることは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    受け取りやすさが重要です。大きすぎないサイズにして、可能なら受け取れる日時に合わせると安心です。
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
