/**
 * 出産祝い（男の子）記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、早見表×3、CTA配置、内部リンク×3
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
      'name': '出産祝いで男の子と女の子で選び方は変わる？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '大きくは変わりません。性別より「サイズ不要」「負担が減る」「被らない設計」を優先し、色味で男の子らしさを足すのが外しにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '男の子の出産祝いで被りやすいものは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '新生児服、スタイやガーゼの大量セット、おもちゃ、置き場所を取る大型アイテムは被りやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '予算5000円だと何が無難？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '消耗品＋サイズ不要の小物が無難です。相手の負担を増やさず、確実に使われやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '洋服を贈るならいつ着るサイズがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '月齢が分からないなら、少し先に着る大きめサイズに寄せるのが安全です。ただし好みがあるので確認できるとさらに安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': '出産祝いののしは必要？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '迷ったら付けるのが無難です。表書きや水引などの基本は別記事のガイドが便利です。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '出産祝い 男の子｜センスがいいと言われるプレゼント特集（実用・おしゃれ・被らない）',
  description: '男の子の出産祝いで喜ばれるプレゼントを、実用・おしゃれ・被らないの軸で厳選。予算別・関係性別の目安、月齢や季節で外さない選び方、避けたいNG、のしや渡す時期までまとめた保存版です。',
  keywords: ['出産祝い', '男の子', 'プレゼント', '実用', 'おしゃれ', '被らない', '相場', 'マナー', '選び方'],
  openGraph: {
    title: '出産祝い 男の子｜センスがいいと言われるプレゼント特集（実用・おしゃれ・被らない）',
    description: '男の子の出産祝いで喜ばれるプレゼントを、実用・おしゃれ・被らないの軸で厳選。予算別・関係性別の目安、月齢や季節で外さない選び方、避けたいNG、のしや渡す時期までまとめた保存版です。',
    type: 'article',
    url: 'https://www.hare-gift.com/baby_gift/baby-boy-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/baby_gift/baby-boy-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function BabyBoyGiftArticle() {
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
            <Link href='/baby_gift' className='hover:text-pink-600 transition-colors'>
              出産祝い
            </Link>
            <span className='mx-2'>›</span>
            <span className='text-gray-800'>男の子向けプレゼント特集</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              出産祝い 男の子｜センスがいいと言われるプレゼント特集（実用・おしゃれ・被らない）
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                「出産祝い、男の子だと何を贈ればいい？」
              </p>
              <p className='mb-3'>
                この検索をする人が悩むポイントは、だいたい同じです。
              </p>
              <p className='mb-3'>
                実用的がいいけど、被るのは嫌。おしゃれに見せたいけど、好みを外したくない。サイズや季節も分からない。
              </p>
              <p className='mb-3'>
                <strong>結論、男の子の出産祝いで外さないのは「被らない設計」で選ぶことです。</strong>
              </p>
              <p className='mb-3'>
                色やデザインで男の子っぽさを出すより、相手の負担を増やさず確実に使われる方向に寄せたほうが成功率が上がります。
              </p>
              <p className='mb-3'>
                この記事では、男の子向けの人気ギフトをただ並べるのではなく、
                予算・関係性・月齢・季節・被り回避・マナーまで含めて、最短で正解を選べるように整理します。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg'>
              <h2 className='text-xl font-bold text-gray-800 mb-3'>この記事でわかること</h2>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>男の子の出産祝いが難しい理由と、外さない考え方</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>予算別おすすめ早見表</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>関係性別の相場目安（友人、親友、職場、親族）</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>被りやすいギフトと、被らないギフトの選び方</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>男の子らしさはどこで出す？配色とデザインのコツ</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>月齢と季節で外さないギフトの考え方</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>避けたいNG、のし、渡す時期</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>迷ったときの最終解</span>
                </li>
              </ul>
            </div>

            {/* CTA1 */}
            <div className='mb-12 text-center'>
              <Link 
                href='/baby_gift'
                className='inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105'
              >
                出産祝いギフトをカテゴリから探す
              </Link>
            </div>

            {/* セクション1: まず結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                まず結論：男の子の出産祝いは「使われる確率」で選ぶと外さない
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  男の子向けのギフト選びで失敗するのは、男の子らしさを出そうとして「実用性」を落としてしまうときです。
                </p>
                <p>
                  性別より先に、次の条件を満たすほど外しにくいです。
                </p>
              </div>

              <div className='mt-6 bg-pink-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>外さない条件</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>サイズや好みに左右されにくい</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>受け取りや保管の負担が少ない</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>被っても困りにくい、または消耗する</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>赤ちゃんだけでなく親も助かる</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                ここを押さえたうえで、色味や柄で男の子らしさを足すとちょうどいいです。
              </p>
            </section>

            {/* セクション2: 予算別早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                予算別｜男の子出産祝いおすすめ早見表（迷ったらここ）
              </h2>
              
              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '600px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>予算</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>外さない方向性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>例（イメージ）</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被り回避のコツ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消耗品寄せ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>おむつ関連、衛生、日用品</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ブランドより使いやすさ重視</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>実用＋少し特別</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>実用品＋小物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>サイズ不要を選ぶ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>上質な定番1点</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>肌着系、タオル系、寝具小物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>単品で質を上げる</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>15000円〜</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>生活を助ける寄せ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>まとめて助かるセット</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>保管負担が出ない量に</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* セクション3: 関係性別相場 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                関係性別｜出産祝いの相場目安（男の子でも基本は同じ）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  性別で相場が変わることは少ないです。
                </p>
                <p>
                  大事なのは「関係性」と「距離感」と「内祝い負担」です。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '600px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>関係性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>ポイント</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>友人</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3000円〜10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>迷ったら真ん中寄り</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親友</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜30000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>高額は内祝い負担に配慮</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>職場の同僚</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>1000円〜5000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>連名がスマート</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親族</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜50000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家の慣習があれば合わせる</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  相場全体は別記事でより詳しく整理しています。
                </p>
                <p className='mt-2'>
                  <Link 
                    href='/baby_gift/baby-gift-price-guide' 
                    className='text-pink-600 hover:text-pink-700 underline font-medium'
                  >
                    → 出産祝いの相場ガイドを見る
                  </Link>
                </p>
              </div>
            </section>

            {/* セクション4: 被りやすいギフト早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                男の子の出産祝いで「被りやすい」ギフト早見表
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  被りやすいギフトは「定番」であるほど起きます。
                </p>
                <p>
                  外したくないなら、ここを避けるだけでも成功率が上がります。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被りやすいギフト</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被る理由</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>代替の考え方</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>新生児サイズの洋服</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>サイズ事故が起きやすい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>サイズ不要、または大きめに寄せる</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>スタイやガーゼの大量セット</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>みんなが選ぶ定番</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>少数精鋭で質を上げる</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>おもちゃ（低月齢）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みと安全基準が分かれる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>月齢に合うか確認する</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大型アイテム</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置き場所が問題</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>省スペース、消耗品、体験寄せ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>香りが強いもの</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みと体調で合わない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無香料寄せが安全</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  NG全体の観点は別記事が便利です。
                </p>
                <p className='mt-2'>
                  <Link 
                    href='/baby_gift/baby-gift-ng' 
                    className='text-pink-600 hover:text-pink-700 underline font-medium'
                  >
                    → 避けたいNGギフトを確認する
                  </Link>
                </p>
              </div>
            </section>

            {/* セクション5: 男の子らしさの出し方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                男の子らしさは「色」で足すのが安全（柄は控えめが無難）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  男の子向けにしたいなら、最初から強い柄で攻めるより、
                  色味でさりげなく寄せるほうが外しにくいです。
                </p>
              </div>

              <div className='mt-6 bg-blue-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>外しにくい色の方向性</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>ネイビー、グレー、くすみブルー、ベージュ系</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>白ベースにワンポイント</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>家の雰囲気に馴染む無難色</span>
                  </li>
                </ul>
              </div>

              <div className='mt-6 bg-red-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>避けたほうがいいケース</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>キャラ強め、柄強め（好みが割れやすい）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>家のテイストと衝突する色</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* セクション6: 月齢で外さない考え方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                月齢で外さない考え方｜「いつ使うか」が分かるほど助かる
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  出産直後は、親が一番バタつく時期です。
                </p>
                <p>
                  だから「すぐ使える」か「少し先に確実に使う」かを決めると選びやすいです。
                </p>
              </div>

              <div className='mt-6 bg-green-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>すぐ使われやすい（新生児〜）</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-500'>•</span>
                    <span>衛生、消耗品寄せ</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-500'>•</span>
                    <span>サイズ不要の小物</span>
                  </li>
                </ul>
              </div>

              <div className='mt-6 bg-blue-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>少し先に刺さりやすい（3〜6か月〜）</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>長く使える設計</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>成長しても使える日用品</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                月齢が分からないなら、サイズ不要に寄せるのが安全です。
              </p>
            </section>

            {/* セクション7: 季節で外さない考え方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                季節で外さない考え方｜暑さ寒さは「親の負担」に直結する
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  季節で事故が起きやすいのは、衣類と寝具です。
                </p>
                <p>
                  迷ったら、季節に左右されにくい方向に寄せると失敗が減ります。
                </p>
              </div>

              <div className='mt-6 bg-yellow-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>外しにくい方向性</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>通年使える素材</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>室内で使えるもの</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>使い捨てや消耗品寄せ</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* セクション8: のしと渡す時期 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                のしと渡す時期｜最低限これだけ押さえれば失礼になりにくい
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  出産祝いは、形式が整っているほど相手の親族にも安心感があります。
                </p>
              </div>

              <div className='mt-6 bg-purple-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>渡す時期の目安</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-purple-500'>•</span>
                    <span>退院後〜生後1か月頃が無難</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-purple-500'>•</span>
                    <span>宅配は受け取りやすい日を聞くと親切</span>
                  </li>
                </ul>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  のしの基本は別記事にまとめるのが便利です。
                </p>
                <p className='mt-2'>
                  <Link 
                    href='/baby_gift/baby-gift-noshi' 
                    className='text-pink-600 hover:text-pink-700 underline font-medium'
                  >
                    → のしガイドを確認する
                  </Link>
                </p>
              </div>
            </section>

            {/* セクション9: 迷ったときの最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                迷ったときの最終解｜男の子の出産祝いは「消耗品＋上質小物」で勝てる
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  最後まで迷ったら、被りにくく負担が少ない組み合わせに寄せるのが最強です。
                </p>
              </div>

              <div className='mt-6 bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-2 border-pink-200'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>最終解の組み合わせ</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>✓</span>
                    <span>消耗品寄せで確実に助かる</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>✓</span>
                    <span>上質小物で特別感を足す</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>✓</span>
                    <span>色は無難に、男の子らしさは少しだけ</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA2 */}
            <div className='mb-12 text-center'>
              <Link 
                href='/baby_gift'
                className='inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105'
              >
                出産祝いギフトをカテゴリから探す
              </Link>
            </div>

            {/* 最終更新日（記事下部） */}
            <div className='mb-8 pt-6 border-t border-gray-200'>
              <p className='text-sm text-gray-500'>
                最終更新日: 2026-01-06
              </p>
            </div>

            {/* FAQセクション */}
            <section className='mb-12 bg-gray-50 p-6 rounded-lg'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>よくある質問（FAQ）</h2>
              
              <div className='space-y-6'>
                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 出産祝いで男の子と女の子で選び方は変わる？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 大きくは変わりません。性別より「サイズ不要」「負担が減る」「被らない設計」を優先し、色味で男の子らしさを足すのが外しにくいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 男の子の出産祝いで被りやすいものは？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 新生児服、スタイやガーゼの大量セット、おもちゃ、置き場所を取る大型アイテムは被りやすいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 予算5000円だと何が無難？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 消耗品＋サイズ不要の小物が無難です。相手の負担を増やさず、確実に使われやすいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 洋服を贈るならいつ着るサイズがいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 月齢が分からないなら、少し先に着る大きめサイズに寄せるのが安全です。ただし好みがあるので確認できるとさらに安心です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 出産祝いののしは必要？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 迷ったら付けるのが無難です。表書きや水引などの基本は別記事のガイドが便利です。
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
