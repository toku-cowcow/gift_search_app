/**
 * 出産祝い（0歳おもちゃ）記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、早見表×5、CTA配置、内部リンク×4
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
      'name': '0歳のおもちゃ出産祝いで一番大事なのは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '月齢と安全です。誤飲しない形、洗いやすさ、音量などの負担が少ないほど外しにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '月齢が分からないときはどう選べばいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '3〜8か月で長く使える方向に寄せると外しにくいです。サイズや月齢に依存しにくいジャンルが安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': '音が出るおもちゃは避けたほうがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '一概にダメではありませんが、音量が大きいと親の負担になります。静かめ、調整できる、電源不要の方向が無難です。'
      }
    },
    {
      '@type': 'Question',
      'name': '大きいおもちゃは喜ばれる？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '置き場所の負担があるので慎重です。贈るなら事前確認が安全です。迷ったら小型で長く使える方向が安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'おもちゃは被りやすい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '被りやすいです。使う場所をずらして「家用」「おでかけ用」「おふろ用」に分けると被っても困りにくいです。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '出産祝い 0歳 おもちゃ｜月齢別に外さない選び方と人気ジャンル（安全チェック付き）',
  description: '0歳向けおもちゃの出産祝いは月齢と安全が最重要。0〜12か月の発達に合う人気ジャンル、被らない選び方、予算別の目安、誤飲や音量などの安全チェック、避けたいNG、のしと渡す時期までまとめた保存版です。',
  keywords: ['出産祝い', '0歳', 'おもちゃ', '月齢別', '安全', '選び方', '赤ちゃん', 'プレゼント'],
  openGraph: {
    title: '出産祝い 0歳 おもちゃ｜月齢別に外さない選び方と人気ジャンル（安全チェック付き）',
    description: '0歳向けおもちゃの出産祝いは月齢と安全が最重要。0〜12か月の発達に合う人気ジャンル、被らない選び方、予算別の目安、誤飲や音量などの安全チェック、避けたいNG、のしと渡す時期までまとめた保存版です。',
    type: 'article',
    url: 'https://www.hare-gift.com/baby_gift/baby-toy-0-year',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/baby_gift/baby-toy-0-year',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function BabyToy0YearArticle() {
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
            <span className='text-gray-800'>0歳おもちゃの選び方</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              出産祝い 0歳 おもちゃ｜月齢別に外さない選び方と人気ジャンル（安全チェック付き）
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                「出産祝いで0歳のおもちゃを贈りたいけど、何が正解か分からない」
              </p>
              <p className='mb-3'>
                この悩みはとても自然です。
              </p>
              <p className='mb-3'>
                0歳は成長が早く、月齢で遊べるものが一気に変わります。
                さらに、おもちゃは「かわいい」より「安全」と「今使えるか」が大事です。
              </p>
              <p className='mb-3'>
                <strong>結論、0歳のおもちゃギフトで外さないコツは3つです。</strong>
              </p>
              <ul className='mb-3 ml-6 space-y-1'>
                <li className='text-gray-700'>• 月齢で選ぶ（今の発達に合う）</li>
                <li className='text-gray-700'>• 安全チェックで選ぶ（誤飲、素材、音量）</li>
                <li className='text-gray-700'>• 被らない設計で選ぶ（消耗、使う場所が違う、持ち運び用など）</li>
              </ul>
              <p className='mb-3'>
                この記事では、0〜12か月を月齢別に整理し、人気ジャンルと選び方を分かりやすくまとめます。
              </p>
              <p className='mb-3'>
                相場やマナー、避けたいNGも含めて、最短で正解にたどり着ける保存版です。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg'>
              <h2 className='text-xl font-bold text-gray-800 mb-3'>この記事でわかること</h2>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>0歳おもちゃの出産祝いで失敗しがちなポイント</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>月齢別おすすめ（0〜2、3〜5、6〜8、9〜12か月）</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>目的別の人気ジャンル（ねんね、ねがえり、おすわり、はいはい）</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>予算別の選び方と、関係性の目安</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>被らないための確認テンプレ</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>誤飲や音量など安全チェック</span>
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
                まず結論：0歳のおもちゃ出産祝いは「月齢」と「安全」でほぼ決まる
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  0歳向けおもちゃは、他のギフトより「合う合わない」が出ます。
                </p>
                <p>
                  理由は単純で、できることが月齢で違うからです。
                </p>
              </div>

              <div className='mt-6 bg-pink-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>0歳の出産祝いおもちゃで外さない条件</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>今の月齢で使える、または少し先に確実に使う</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>誤飲しないサイズと形</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>お手入れしやすい（洗える、拭ける）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>音量が大きすぎない</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>置き場所を取りすぎない</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                ここを押さえると、センスより「気が利く」になります。
              </p>
            </section>

            {/* セクション2: 安全チェック表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                0歳おもちゃの安全チェック表（買う前にここだけ見る）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  0歳は何でも口に入れます。
                </p>
                <p>
                  だから安全チェックは、かわいさより優先です。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>チェック項目</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>見るポイント</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>避けたい例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>誤飲</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>小さなパーツが外れない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>取れやすいボタン、ビーズ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>素材</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>口に入れても安心</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>塗装が剥がれやすい</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>角と形</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>角が丸い、尖っていない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>とがったパーツ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ひも</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>長すぎない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>首に絡む長いひも</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>音量</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>うるさすぎない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>音が大きく調整できない</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>洗いやすさ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>拭ける、洗える</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>汚れが溜まりやすい布だけ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>電池</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>フタが簡単に開かない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>電池が簡単に触れる</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                迷ったら「洗える」「拭ける」「パーツが外れない」を優先すると安心です。
              </p>
            </section>

            {/* セクション3: 月齢別おすすめ早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                月齢別おすすめ早見表｜0歳はここが一番重要
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  0歳のおもちゃ選びで最強の考え方は「月齢から逆算」です。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>月齢の目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>発達のポイント</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>外さないおもちゃの方向性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>0〜2か月</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>見る、聞くが中心</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>コントラスト、やさしい音、見守り系</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3〜5か月</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>握る、なめる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>持ちやすい、口に入れて安全、軽い</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>6〜8か月</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>おすわり、叩く</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>叩く、振る、転がす、音が心地よい</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>9〜12か月</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>つかまり立ち、指先</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>型はめ、積む、引っ張る、しかけ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                月齢が分からないときは「3〜8か月で長く使える方向」に寄せると外しにくいです。
              </p>
            </section>

            {/* セクション4: 目的別人気ジャンル */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                目的別｜0歳で人気が高いおもちゃジャンル（被らない設計で選ぶ）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  人気ジャンルはたくさんありますが、出産祝いでは「被らない設計」で勝てます。
                </p>
                <p>
                  同じジャンルでも、使う場所が違えば被っても困りにくいです。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>目的</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>人気ジャンル</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被らない選び方のコツ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ねんね期の刺激</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>見る、聞く系</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ベッド周り用など用途を限定する</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>口に入れて安心</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>歯固め、にぎにぎ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>洗える、軽い、握りやすい形</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>おすわり期</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>叩く、振る系</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>音量控えめ、親の負担が少ない</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>指先の発達</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>しかけ、型はめ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>パーツが大きい、安全設計</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>おでかけ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>持ち運び用</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>小さめ、落下防止、洗える</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                「家用」「おでかけ用」「おふろ用」など、使う場所をずらすと被りにくいです。
              </p>
            </section>

            {/* セクション5: 予算別選び方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                予算別｜0歳おもちゃ出産祝いの選び方（相手に気を遣わせない）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  おもちゃは高額ほど良いわけではありません。
                </p>
                <p>
                  むしろ、親の負担が増えると逆効果になることがあります。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '600px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>予算</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>外さない方向性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>失敗しにくいコツ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>口に入れてOK、洗える系</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>まず安全と洗いやすさ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>月齢に合う定番ジャンル</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>音量とサイズに注意</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>長く使える仕掛け系</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>パーツの大きさと丈夫さ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>15000円〜</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大型は慎重に</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置き場所と方針を確認</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  相場が気になる場合は別記事も便利です。
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

            {/* セクション6: 失敗しがちなパターン */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                0歳おもちゃギフトで失敗しがちなパターン（ここを避けるだけで勝てる）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  0歳のおもちゃは、良かれと思ったものが負担になりがちです。
                </p>
              </div>

              <div className='mt-6 bg-yellow-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>よくある失敗</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>×</span>
                    <span>月齢が合わず、しばらく使えない</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>×</span>
                    <span>音が大きくて親がしんどい</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>×</span>
                    <span>パーツが多くて片付けが大変</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>×</span>
                    <span>大きくて置き場所に困る</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>×</span>
                    <span>洗えず衛生管理がつらい</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                出産直後は、親の余力が少ない時期です。
                「管理がラク」が最大の価値になります。
              </p>
            </section>

            {/* セクション7: NG早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                避けたいNG早見表｜0歳のおもちゃ出産祝いで地雷になりやすい
              </h2>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>避けたいNG</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>なぜNGになりやすいか</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>代替の方向性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>小さなパーツが多い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>誤飲リスク、紛失</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>パーツ大きめ、安全設計</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>音が大きい電子玩具</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親のストレスが増える</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>音量控えめ、電源不要</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大型の遊具系</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置き場所が必要</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>おでかけ用、小型で長く使える</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>洗えない布だけ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>よだれで汚れやすい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>拭ける、洗える素材</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>月齢対象が不明確</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使えない可能性</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>月齢表記が分かりやすいもの</td>
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

            {/* セクション8: 確認テンプレ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                サプライズ感を残して被りを避ける確認テンプレ（これが一番効く）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  0歳おもちゃは、確認したほうが成功率が上がります。
                </p>
                <p>
                  ただし聞き方を工夫すると、相手の負担を増やしません。
                </p>
              </div>

              <div className='bg-blue-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>テンプレ</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>「おもちゃ被りたくないから、今よく使ってるジャンルある？」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>「音が出る系って大丈夫？ できれば静かめにしたい」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>「洗えるやつがいいと思ってるけど、気にしてるポイントある？」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>「置き場所取るのは避けたいんだけど、家用とおでかけ用どっちが嬉しい？」</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                この一言で、月齢ミスと被りがほぼ消えます。
              </p>
            </section>

            {/* セクション9: のしと渡す時期 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                のしと渡す時期｜おもちゃでも最低限のマナーは押さえる
              </h2>

              <div className='mt-6 bg-purple-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>渡す時期の目安</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-purple-500'>•</span>
                    <span>退院後〜生後1か月頃が無難</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-purple-500'>•</span>
                    <span>宅配は受け取りやすい日を確認すると親切</span>
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

            {/* セクション10: 迷ったときの最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                迷ったときの最終解｜0歳おもちゃ出産祝いはこの選び方が最強
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  最後まで迷ったら、次の順で決めると外しにくいです。
                </p>
              </div>

              <div className='bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-2 border-pink-200'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>最終解の選び方</h3>
                <ol className='space-y-2 text-gray-700 list-decimal list-inside'>
                  <li>月齢別早見表で、今か少し先に使える方向に寄せる</li>
                  <li>安全チェック表で誤飲と音量を潰す</li>
                  <li>被らない設計で「家用」「おでかけ用」「おふろ用」をずらす</li>
                  <li>洗える、拭けるを優先する</li>
                </ol>
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
                    Q. 0歳のおもちゃ出産祝いで一番大事なのは？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 月齢と安全です。誤飲しない形、洗いやすさ、音量などの負担が少ないほど外しにくいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 月齢が分からないときはどう選べばいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 3〜8か月で長く使える方向に寄せると外しにくいです。サイズや月齢に依存しにくいジャンルが安心です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 音が出るおもちゃは避けたほうがいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 一概にダメではありませんが、音量が大きいと親の負担になります。静かめ、調整できる、電源不要の方向が無難です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 大きいおもちゃは喜ばれる？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 置き場所の負担があるので慎重です。贈るなら事前確認が安全です。迷ったら小型で長く使える方向が安心です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. おもちゃは被りやすい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 被りやすいです。使う場所をずらして「家用」「おでかけ用」「おふろ用」に分けると被っても困りにくいです。
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
