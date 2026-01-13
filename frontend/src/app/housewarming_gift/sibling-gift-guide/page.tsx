/**
 * 新築祝い（兄弟向け）記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、早見表×5、CTA配置、内部リンク×3
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
      'name': '兄弟への新築祝いの相場はいくら？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '10000円〜50000円が目安になりやすいです。迷ったら30000円前後を土台にし、距離感や支援の形で調整すると失礼になりにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '新築祝いは現金と品物、どちらがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '迷ったら現金か商品券が無難です。品物は好みと置き場所の影響が大きいので、必要品が明確なときに向いています。'
      }
    },
    {
      '@type': 'Question',
      'name': '兄弟で金額が違っても問題ない？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '失礼ではありません。ただ相手が気を遣うことがあるので、無理のない範囲で近づけるか、形をそろえると気まずさを避けやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '渡すタイミングはいつがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '引っ越し後、生活が落ち着いた頃が無難です。新居に招かれたタイミングで手渡しするのも自然です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'のしは必要？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '迷ったら付けるのが無難です。形式が整っているほど安心感があります。'
      }
    },
    {
      '@type': 'Question',
      'name': 'お返し（内祝い）は必要？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '相手の方針によります。負担を増やしたくないなら「お返しはお気遣いなく」と一言添えるとスムーズです。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '新築祝いを兄弟に贈るなら？相場・マナー・被らないギフトの最適解（兄・弟・姉・妹別）',
  description: '兄弟への新築祝いは相場だけでなく距離感と家の方針が重要。兄・弟・姉・妹別の金額目安、現金・商品券・品物の選び分け、渡す時期、のし、連名、被らないギフト設計、避けたいNGと例文テンプレまで1記事で分かる保存版。',
  keywords: ['新築祝い', '兄弟', '相場', 'マナー', '兄', '弟', '姉', '妹', '現金', '品物'],
  openGraph: {
    title: '新築祝いを兄弟に贈るなら？相場・マナー・被らないギフトの最適解（兄・弟・姉・妹別）',
    description: '兄弟への新築祝いは相場だけでなく距離感と家の方針が重要。兄・弟・姉・妹別の金額目安、現金・商品券・品物の選び分け、渡す時期、のし、連名、被らないギフト設計、避けたいNGと例文テンプレまで1記事で分かる保存版。',
    type: 'article',
    url: 'https://www.hare-gift.com/housewarming_gift/sibling-gift-guide',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/housewarming_gift/sibling-gift-guide',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function SiblingGiftGuideArticle() {
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
            <Link href='/housewarming_gift' className='hover:text-pink-600 transition-colors'>
              新築祝い
            </Link>
            <span className='mx-2'>›</span>
            <span className='text-gray-800'>兄弟への贈り方</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              新築祝いを兄弟に贈るなら？相場・マナー・被らないギフトの最適解（兄・弟・姉・妹別）
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                「新築祝い、兄弟にはいくら包むべき？」<br />
                「現金？品物？そもそも何を贈るのが正解？」
              </p>
              <p className='mb-3'>
                兄弟の新築祝いは、友人より高めにしたい気持ちと、相手の家の方針や好みに合わせたい現実の間で迷いやすいです。
              </p>
              <p className='mb-3'>
                さらに新居はすでに家電や日用品が揃っていたり、インテリアの好みが明確だったりして、定番ほど被りやすい。
              </p>
              <p className='mb-3'>
                <strong>結論、兄弟の新築祝いで失敗しないのは</strong><br />
                「相場で土台を作る」→「距離感で調整する」→「現金か品物かを決める」→「被らない設計で選ぶ」<br />
                この順番で考えることです。
              </p>
              <p className='mb-3'>
                この記事では、兄弟に贈る新築祝いの相場とマナーを押さえたうえで、被らずに本当に喜ばれる最適解を具体的にまとめます。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg'>
              <h2 className='text-xl font-bold text-gray-800 mb-3'>この記事でわかること</h2>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>兄弟（兄・弟・姉・妹）への新築祝いの相場目安</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>仲の良さや距離感での金額調整</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>現金・商品券・品物の選び分け</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>被らないギフトの設計（消耗・時短・メンテ・ご近所対応・来客）</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>渡す時期、のし、内祝い（お返し）への配慮</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>避けたいNGと、確認テンプレ</span>
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
                href='/housewarming_gift'
                className='inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105'
              >
                新築祝いギフトをカテゴリから探す
              </Link>
            </div>

            {/* セクション1: まず結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                まず結論：兄弟の新築祝いは「相手の家の方針」に寄せるほど成功する
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  兄弟への新築祝いは、気持ちを大きくしたくなります。
                </p>
                <p>
                  でも新築は好みがはっきり出るので、良かれと思った品物が負担になることもあります。
                </p>
              </div>

              <div className='mt-6 bg-pink-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>外しにくい判断軸</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>相手が「現金派」か「品物派」か</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>収納や置き場所に余裕があるか</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>インテリアのテイストが強いか</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>引っ越し直後で余力が少ないか</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                迷ったら、現金か商品券寄りにすると失敗が減ります。
              </p>
            </section>

            {/* セクション2: 相場早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                兄弟への新築祝い 相場早見表（兄・弟・姉・妹）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  まずは土台です。
                </p>
                <p>
                  相場は地域や家の慣習で変わりますが、極端に外さない帯はあります。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>贈る相手</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>こう調整すると失礼になりにくい</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>兄へ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜50000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>年上なら丁寧に、無理のない範囲で上限寄りも</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>弟へ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜50000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>生活支援の意味で現金寄りが強い</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>姉へ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜50000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みが強い場合は品物より現金寄り</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>妹へ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜50000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>引っ越し直後は時短寄せも刺さる</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-yellow-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>ポイント</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>迷ったら30000円前後が無難ゾーンになりやすい</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>高額にするなら「お返し不要」の一言で負担を減らす</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>両親からも出る場合は、合計が重くなりすぎないよう注意</span>
                  </li>
                </ul>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  相場全体は別記事への導線も作ってください。
                </p>
                <p className='mt-2'>
                  <Link 
                    href='/housewarming_gift/housewarming-price-guide' 
                    className='text-pink-600 hover:text-pink-700 underline font-medium'
                  >
                    → 新築祝いの相場ガイドを見る
                  </Link>
                </p>
              </div>
            </section>

            {/* セクション3: 距離感調整 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                仲の良さ・距離感でどう調整する？金額調整の早見表
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  兄弟でも距離感は家庭で違います。
                </p>
                <p>
                  相場の真ん中から調整すると決めやすいです。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>距離感</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>無難な考え方</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>おすすめの落としどころ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>仲が良い、頻繁に会う</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>相場の上限寄りでもOK</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>高額なら内祝い辞退を添える</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>普通</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>相場の真ん中が無難</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>20000円〜30000円前後</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>疎遠、久しぶり</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>形式を丁寧に、控えめでもOK</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜20000円＋丁寧な挨拶</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                金額より「気持ちが伝わる丁寧さ」で失礼回避できます。
              </p>
            </section>

            {/* セクション4: 現金・商品券・品物 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                現金・商品券・品物、どれが正解？兄弟は「迷ったら現金」が強い
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  新築祝いは、現金や商品券のほうが現実的に助かるケースが多いです。
                </p>
                <p>
                  とくに兄弟は、遠慮が少ない分「本音で助かる」が最優先になります。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>選択肢</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>向いているケース</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>強み</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>注意点</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>迷ったとき全般</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使い道自由で被らない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>のし袋やマナーを整える</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>商品券、ギフトカード</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金ほど生々しくしたくない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>実用性とスマートさ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>相手が使う店舗に合うか</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>品物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みや必要品が明確</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>記憶に残る、形が残る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>テイストと置き場所が難しい</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                兄弟の新築祝いは「相手が選べる」ほど成功率が上がります。
              </p>
            </section>

            {/* セクション5: 被らない設計 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                被らないギフトは「設計」で選ぶ（兄弟向け早見表）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  品物を贈るなら、カテゴリではなく設計で選ぶと被りにくいです。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>設計</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>なぜ喜ばれやすいか</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>具体的な方向性（例）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消耗品</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使えば減るので在庫になりにくい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>日用品、衛生、掃除系など</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>時短</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>引っ越し直後は余力がない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>料理、片付け、家事がラクになる寄せ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>メンテ、掃除</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>新居はきれいを保ちたい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使いやすい掃除・メンテ用品</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ご近所対応</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>新居は挨拶や来客が増える</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>もらって困らない定番寄せ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>来客</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>新居に人を呼ぶ家庭</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>サーブ系、取り分け系の実用品</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                「インテリアに置く物」より「家が回る物」に寄せると失敗が減ります。
              </p>
            </section>

            {/* セクション6: NG早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                新築祝いで避けたいNG（兄弟でも油断すると外す）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  新築祝いには、縁起や好み、家の方針で避けたほうがいい物があります。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>NGになりやすいもの</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>理由</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>代替の考え方</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みが強いインテリア</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>テイストが合わない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金・商品券寄りに</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大型アイテム</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置き場所が必要</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>省スペース、消耗品</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>サイズが必要な物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>合わないと使えない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>サイズ不要の実用品</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>縁起を気にする家庭のタブー</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>相手の価値観が優先</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>事前確認が安全</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>受け取りが大変な物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>引っ越し直後は負担</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>受け取りやすい形にする</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  NGの詳細は別記事導線が便利です。
                </p>
                <p className='mt-2'>
                  <Link 
                    href='/housewarming_gift/housewarming-ng' 
                    className='text-pink-600 hover:text-pink-700 underline font-medium'
                  >
                    → 避けたいNGギフトを確認する
                  </Link>
                </p>
              </div>
            </section>

            {/* セクション7: 渡すタイミング */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                渡すタイミングはいつ？兄弟なら「落ち着いてから」でも大丈夫
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  新築直後はバタバタしていて、受け取りや連絡が負担になることがあります。
                </p>
                <p>
                  相手の都合を優先すると気遣いが伝わります。
                </p>
              </div>

              <div className='mt-6 bg-green-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>無難な目安</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-600'>•</span>
                    <span>引っ越し後、生活が落ち着く頃</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-600'>•</span>
                    <span>新居に招かれたタイミングで手渡しも自然</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-600'>•</span>
                    <span>配送の場合は受け取りやすい日を確認する</span>
                  </li>
                </ul>
              </div>

              <div className='mt-6 bg-blue-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>確認テンプレ</h3>
                <p className='text-gray-700'>
                  「受け取りやすい日ある？負担にならない形で送りたい」
                </p>
              </div>
            </section>

            {/* セクション8: のし */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                のしはどうする？最低限これだけ押さえればOK
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  兄弟でも、形式を整えるほど安心感があります。
                </p>
                <p>
                  迷ったらのしを付けるのが無難です。
                </p>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  のしの基本は別記事に導線を作ってください。
                </p>
                <p className='mt-2'>
                  <Link 
                    href='/housewarming_gift/housewarming-noshi' 
                    className='text-pink-600 hover:text-pink-700 underline font-medium'
                  >
                    → のしガイドを確認する
                  </Link>
                </p>
              </div>

              <div className='mt-6 bg-purple-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>のし表書きの一言テンプレ</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-purple-500'>•</span>
                    <span>「新築御祝」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-purple-500'>•</span>
                    <span>「御新築祝」</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* セクション9: 内祝いへの配慮 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                内祝い（お返し）は必要？兄弟なら「辞退の一言」が優しい
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  相手に負担を増やしたくないなら、渡すときに一言添えると親切です。
                </p>
              </div>

              <div className='bg-yellow-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>内祝い辞退の一言テンプレ</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>「お返しは気にしないで。落ち着いたら新居見せて」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>「引っ越しで大変だと思うから、お返しはどうかお気遣いなく」</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* セクション10: 最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                迷ったときの最終解｜兄弟の新築祝いはこの形が外しにくい
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  最後まで迷ったら、次の順で決めると外しにくいです。
                </p>
              </div>

              <div className='bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-2 border-pink-200'>
                <ol className='space-y-2 text-gray-700 list-decimal list-inside'>
                  <li>相場表で土台を決める</li>
                  <li>距離感表で調整する</li>
                  <li>迷うなら現金か商品券にする</li>
                  <li>品物なら「消耗・時短・メンテ」設計で選ぶ</li>
                  <li>内祝い辞退の一言で相手の負担を減らす</li>
                </ol>
              </div>
            </section>

            {/* CTA2 */}
            <div className='mb-12 text-center'>
              <Link 
                href='/housewarming_gift'
                className='inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105'
              >
                新築祝いギフトをカテゴリから探す
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
                    Q. 兄弟への新築祝いの相場はいくら？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 10000円〜50000円が目安になりやすいです。迷ったら30000円前後を土台にし、距離感や支援の形で調整すると失礼になりにくいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 新築祝いは現金と品物、どちらがいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 迷ったら現金か商品券が無難です。品物は好みと置き場所の影響が大きいので、必要品が明確なときに向いています。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 兄弟で金額が違っても問題ない？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 失礼ではありません。ただ相手が気を遣うことがあるので、無理のない範囲で近づけるか、形をそろえると気まずさを避けやすいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 渡すタイミングはいつがいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 引っ越し後、生活が落ち着いた頃が無難です。新居に招かれたタイミングで手渡しするのも自然です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. のしは必要？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 迷ったら付けるのが無難です。形式が整っているほど安心感があります。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. お返し（内祝い）は必要？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 相手の方針によります。負担を増やしたくないなら「お返しはお気遣いなく」と一言添えるとスムーズです。
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
