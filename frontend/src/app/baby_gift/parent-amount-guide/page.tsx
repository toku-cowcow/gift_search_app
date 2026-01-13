/**
 * 出産祝い金額（親から）記事ページ
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
      'name': '親（祖父母）からの出産祝いは、いくらが一番多い？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '家庭差はありますが、第一子は30000円〜100000円、第二子以降は10000円〜50000円あたりが目安になりやすいです。迷ったら真ん中寄りが無難です。'
      }
    },
    {
      '@type': 'Question',
      'name': '両家で金額が違うと失礼になる？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '失礼ではありません。ただ子ども夫婦が気を遣うことがあるので、同額に寄せるか、形をそろえるか、事前に一言相談すると気まずさを避けやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '現金と品物、どちらが喜ばれる？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '現金は自由度が高く、品物は助かった実感が出ます。迷うなら現金を基本にして、必要品の補助を足す形が外しにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '親からの出産祝いはいつ渡すのがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '退院後〜生後1か月頃が無難です。必要品の購入が先なら、出産前に一部補助するのも実用的です。'
      }
    },
    {
      '@type': 'Question',
      'name': '親から贈る場合も、のしは必要？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '迷ったら付けるのが無難です。形式が整うほど安心感があります。'
      }
    },
    {
      '@type': 'Question',
      'name': '内祝い（お返し）はしてもらうべき？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '家庭方針によります。相手の負担を減らしたいなら、渡すときに「お返しはお気遣いなく」と一言添えるとスムーズです。'
      }
    },
    {
      '@type': 'Question',
      'name': '第二子・第三子でも同じ金額にするべき？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '必ずしも同額にする必要はありません。物は揃っていることが多いので、金額より「助かる支援」に寄せるほうが喜ばれやすいです。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '出産祝いの金額 親からはいくら？相場・決め方・渡し方まで（祖父母向け保存版）',
  description: '親（祖父母）からの出産祝いは、いくらが相場？第一子・第二子以降、同居や里帰り支援、両家バランス、現金か品物か、渡す時期・のし・内祝いへの配慮まで。失礼にならない決め方が分かる保存版ガイドです。',
  keywords: ['出産祝い', '金額', '親', '祖父母', '相場', '両家', 'バランス', '現金', '品物'],
  openGraph: {
    title: '出産祝いの金額 親からはいくら？相場・決め方・渡し方まで（祖父母向け保存版）',
    description: '親（祖父母）からの出産祝いは、いくらが相場？第一子・第二子以降、同居や里帰り支援、両家バランス、現金か品物か、渡す時期・のし・内祝いへの配慮まで。失礼にならない決め方が分かる保存版ガイドです。',
    type: 'article',
    url: 'https://www.hare-gift.com/baby_gift/parent-amount-guide',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/baby_gift/parent-amount-guide',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function ParentAmountGuideArticle() {
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
            <span className='text-gray-800'>親からの金額ガイド</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              出産祝いの金額 親からはいくら？相場・決め方・渡し方まで（祖父母向け保存版）
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                出産祝いを贈る側が「親（祖父母）」の場合、一番悩むのは金額です。
              </p>
              <p className='mb-3'>
                友人や職場の相場は調べやすい一方で、親から子ども夫婦への出産祝いは家庭差が大きく、正解が見えません。
              </p>
              <p className='mb-3'>
                少なすぎると冷たく見える？<br />
                多すぎると相手が気を遣う？<br />
                両家の金額が違ったら気まずい？<br />
                現金か品物かも迷う。
              </p>
              <p className='mb-3'>
                この記事では「出産祝い 金額 親」で検索する人のために、親からの相場目安と、失礼にならない決め方を分かりやすく整理します。
              </p>
              <p className='mb-3'>
                両家バランスの調整、渡すタイミング、のし、内祝い（お返し）への配慮までまとめた保存版です。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg'>
              <h2 className='text-xl font-bold text-gray-800 mb-3'>この記事でわかること</h2>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>親（祖父母）からの出産祝いの相場目安</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>第一子・第二子以降で変わる考え方</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>同居・近居・遠方、里帰り支援の有無による調整</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>両家バランスを崩さない相談のコツ</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>現金と品物の選び方、予算配分の目安</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>渡す時期、のし、内祝いへの配慮</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>そのまま使える例文テンプレ</span>
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
                まず結論：親からの出産祝い金額は「相場」より「支援の形」と「両家バランス」で決める
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  親からの出産祝いは、単なるプレゼントではなく「子育てのスタート支援」になりやすいです。
                </p>
                <p>
                  そのため、友人の相場と同じ考え方で決めるとズレることがあります。
                </p>
              </div>

              <div className='mt-6 bg-pink-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>失敗しにくい決め方はこの3つです</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>家計に無理がない範囲で、気持ちが伝わる額にする</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>現金か品物かではなく、支援の形を決めてから金額を置く</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>両家バランスを意識し、気まずさを回避する</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                この順番で考えると、金額の迷いが減ります。
              </p>
            </section>

            {/* セクション2: 相場早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                親（祖父母）からの出産祝い 相場早見表（第一子・第二子以降）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  まずは土台となる目安です。
                </p>
                <p>
                  家庭差は大きいので「この範囲なら失礼になりにくい」という帯で覚えるのが安全です。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>贈る側</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>第一子の目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>第二子以降の目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>ひとこと</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>実親（母側・父側それぞれ）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>30000円〜100000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜50000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>第一子は気持ちが上乗せされやすい</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>両家でまとめて（相談して一括）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>50000円〜150000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>30000円〜80000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>バランス調整がしやすい</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親が品物中心で支援</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>20000円〜100000円相当</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜50000円相当</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>必要品に寄せるほど実用的</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-yellow-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>ポイント</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>第一子は「初孫」で金額が上がりやすい</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>第二子以降は「現金より助かる支援」に寄せると満足度が上がる</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>迷ったら真ん中寄りにして、追加支援を別の形に分けるのが無難</span>
                  </li>
                </ul>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  出産祝い全体の相場は別記事への導線も用意してください。
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

            {/* セクション3: 状況別の目安 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                状況別の目安：同居・近居・遠方、里帰り支援で金額の考え方が変わる
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  親からの出産祝いは、生活支援の度合いで「すでに支援している額」が変わります。
                </p>
                <p>
                  金額だけで揃えようとすると不公平感が出るので、状況別に整理します。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '750px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>状況</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>金額の考え方</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>無難な落としどころ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>同居で日常的に支援している</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金は控えめでも気持ちは伝わる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜30000円＋必要品の補助</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>近居で手伝いに行ける</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>物より時短支援が刺さる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>20000円〜50000円＋買い足し支援</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>遠方で手伝いに行けない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金や配送支援が実用的</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>30000円〜100000円＋消耗品支援</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>里帰りで食事や家事を支援する</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すでに大きな支援になっている</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金は控えめ＋退院後の支援に回す</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>支援が難しい（仕事や介護など）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>金額より受け取りやすさ重視</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無理のない範囲で現金かギフト一本化</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                コツは「今渡す金額」だけでなく「今後の支援」も含めて考えることです。
              </p>
            </section>

            {/* セクション4: 両家バランス調整 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                両家バランスはどうする？気まずさを回避する調整パターン
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  両家で金額が大きく違うと、子ども夫婦が気を遣います。
                </p>
                <p>
                  ただし、無理に同額にする必要はありません。
                </p>
                <p>
                  大事なのは「気まずさが出ない伝え方」と「形の揃え方」です。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '750px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>パターン</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>メリット</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>デメリット</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>向いている家庭</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>両家で同額にそろえる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>分かりやすく角が立ちにくい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>どちらかが無理しがち</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>両家の家計感が近い</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>両家で合意して差をつける</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無理がない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>説明なしだと気まずい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>支援の量が明らかに違う</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>片方は現金、片方は品物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>実用性が高い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>価値が伝わりにくいことがある</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>必要品を買う担当を分けたい</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>出産時は控えめにして、後日支援</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>柔軟に対応できる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>後日が流れやすい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>必要が見えてから支援したい</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>相談せず各自で贈る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>手間が少ない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>金額差が出やすい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>両家の関係が薄い</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                迷ったら「同額に寄せる」か「形を揃える」だけでも、気まずさはかなり減ります。
              </p>
            </section>

            {/* セクション5: 例文テンプレ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                例文テンプレ：両家で金額や形をすり合わせるとき（コピペOK）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  ここはそのまま使えるように、短文と丁寧文を用意します。
                </p>
              </div>

              <div className='bg-blue-50 p-6 rounded-lg mb-4'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>短文（LINE向け）</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>「出産祝い、うちはこのくらいを考えてるけど、そちらはどうする予定？」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>「両家でだいたい同じくらいにしとく？気まずさ避けたいなと思って」</span>
                  </li>
                </ul>
              </div>

              <div className='bg-purple-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>丁寧文（メールや改まった連絡向け）</h3>
                <p className='text-gray-700 leading-relaxed'>
                  「出産祝いにつきまして、子ども夫婦が気を遣わないよう、可能な範囲で両家の金額や形をそろえられればと考えております。ご予定の目安がございましたら教えていただけますでしょうか」
                </p>
              </div>
            </section>

            {/* セクション6: 現金と品物 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                現金と品物、どっちが正解？親からは「分ける」と失敗しにくい
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  親からの出産祝いは、現金が一番融通が利きます。
                </p>
                <p>
                  一方で、品物は「これが助かった」と実感が残りやすいです。
                </p>
                <p>
                  結論は、どちらか一方に決め切るより「分ける」と外しにくいです。
                </p>
                <ul className='list-disc list-inside space-y-1 ml-4'>
                  <li>現金：自由度が高い</li>
                  <li>品物：実用と気持ちが伝わる</li>
                </ul>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>予算帯</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>おすすめ配分</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>失礼になりにくい理由</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜30000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金中心＋消耗品少し</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>受け取り負担が少ない</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>30000円〜50000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金＋必要品の補助</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>実用と自由のバランス</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>50000円〜100000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金＋大物の補助</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>生活支援として納得感が出る</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>品物中心にする</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>必要品を本人に確認して決める</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>被りと好み割れを避けられる</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  品物を選ぶ場合は、避けたいNGも合わせて導線を作ってください。
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

            {/* セクション7: 判断フロー */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                迷ったときの判断フロー：親からの出産祝い金額を最短で決める
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  あれこれ悩むと決まりません。
                </p>
                <p>
                  判断フローで機械的に決めるとスムーズです。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>質問</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>はい</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>いいえ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>両家で金額をそろえたい？</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>まず両家に目安を確認する</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>次へ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>日常的な支援（同居、里帰り、手伝い）が多い？</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金は控えめ＋実用品支援</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>次へ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>子ども夫婦が欲しい物が明確？</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>品物補助＋不足分を現金</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>次へ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>遠方で支援が難しい？</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金寄りで受け取り負担を減らす</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>次へ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>どうしても迷う？</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>真ん中寄りの金額＋内祝い辞退の一言</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>決定</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                フローの最後に「内祝い辞退の一言」を入れると、相手の負担が減ります。
              </p>
            </section>

            {/* セクション8: 渡すタイミング */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                渡すタイミングはいつ？親からの出産祝いで失礼になりにくい時期
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  出産直後は連絡も返しづらいことがあります。
                </p>
                <p>
                  相手の負担が少ないタイミングが最優先です。
                </p>
              </div>

              <div className='mt-6 bg-green-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>無難な目安</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-600'>•</span>
                    <span>退院後〜生後1か月頃</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-600'>•</span>
                    <span>ただし、必要品の購入が先なら出産前に一部補助でもOK</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-600'>•</span>
                    <span>手渡しが難しいなら配送でも失礼ではない</span>
                  </li>
                </ul>
              </div>

              <div className='mt-6 bg-blue-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>配送の場合のひと言テンプレ</h3>
                <p className='text-gray-700'>
                  「受け取りやすい曜日ある？負担にならない形で送りたい」
                </p>
              </div>
            </section>

            {/* セクション9: のし */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                のしは必要？親からの出産祝いは「丁寧にして損はない」
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  親からの贈り物は、きちんと整えるほど安心感があります。
                </p>
                <p>
                  迷ったら、のしを付けておくのが無難です。
                </p>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  のしの基本は別記事に導線を作ってください。
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

            {/* セクション10: 内祝いへの配慮 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                内祝い（お返し）はどうする？親から贈るなら「辞退の伝え方」が重要
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  親からの出産祝いは金額が大きくなりやすく、内祝いの負担が増えがちです。
                </p>
                <p>
                  相手に気を遣わせたくないなら、渡すときに一言添えるのが効果的です。
                </p>
              </div>

              <div className='bg-yellow-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>内祝い辞退の一言テンプレ</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>「内祝いは気にしないでね。落ち着いたら近況だけ聞かせて」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>「忙しい時期に負担を増やしたくないから、お返しはどうかお気遣いなく」</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                目上っぽくなりすぎないように、温度感は家庭に合わせて調整してください。
              </p>
            </section>

            {/* セクション11: 最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                それでも不安なら：親からの出産祝いで外しにくい最終解
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  最後まで迷ったら、次の形が一番無難です。
                </p>
              </div>

              <div className='bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-2 border-pink-200'>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>✓</span>
                    <span>金額は相場の真ん中寄り</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>✓</span>
                    <span>現金を基本にして、必要品の補助を少し足す</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>✓</span>
                    <span>両家バランスは「同額」か「形をそろえる」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>✓</span>
                    <span>渡すときに内祝い辞退の一言を添える</span>
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
                    Q. 親（祖父母）からの出産祝いは、いくらが一番多い？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 家庭差はありますが、第一子は30000円〜100000円、第二子以降は10000円〜50000円あたりが目安になりやすいです。迷ったら真ん中寄りが無難です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 両家で金額が違うと失礼になる？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 失礼ではありません。ただ子ども夫婦が気を遣うことがあるので、同額に寄せるか、形をそろえるか、事前に一言相談すると気まずさを避けやすいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 現金と品物、どちらが喜ばれる？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 現金は自由度が高く、品物は助かった実感が出ます。迷うなら現金を基本にして、必要品の補助を足す形が外しにくいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 親からの出産祝いはいつ渡すのがいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 退院後〜生後1か月頃が無難です。必要品の購入が先なら、出産前に一部補助するのも実用的です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 親から贈る場合も、のしは必要？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 迷ったら付けるのが無難です。形式が整うほど安心感があります。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 内祝い（お返し）はしてもらうべき？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 家庭方針によります。相手の負担を減らしたいなら、渡すときに「お返しはお気遣いなく」と一言添えるとスムーズです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 第二子・第三子でも同じ金額にするべき？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 必ずしも同額にする必要はありません。物は揃っていることが多いので、金額より「助かる支援」に寄せるほうが喜ばれやすいです。
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
