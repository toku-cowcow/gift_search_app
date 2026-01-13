/**
 * 新築祝い（友人向け）記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、早見表×6、CTA配置、内部リンク×3
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
      'name': '友人の新築祝い、相場はいくら？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '3000円〜10000円が目安になりやすいです。親しい友人なら5000円〜30000円の範囲で、相手の負担にならない形にすると失敗しにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '現金は失礼？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '失礼ではありません。迷ったら現金やギフトカードは被らず助かる選択です。丁寧な渡し方にするとスマートです。'
      }
    },
    {
      '@type': 'Question',
      'name': '新築祝いで被りやすいものは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'タオル、食器、香り物、観葉植物、大型アイテムは被りやすいです。代替案は消耗品、掃除、時短寄せが無難です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'のしは付けたほうがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '友人でも付けると丁寧ですが、重くなりすぎないよう状況に合わせるのがコツです。'
      }
    },
    {
      '@type': 'Question',
      'name': '手土産と新築祝いは別？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '別で考えるのが無難です。新居に招かれた時は手土産、別日に新築祝いを送る形もよくあります。'
      }
    },
    {
      '@type': 'Question',
      'name': '渡すタイミングはいつがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '引っ越し後、落ち着いた頃が無難です。配送なら受け取りやすい日を聞くと負担が減ります。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '新築祝い 友人 何あげる？外さない定番と被らないギフトの選び方（相場・NG・例文付き）',
  description: '友人の新築祝いは『何をあげるか』が一番難しい。相場の目安、外さない定番、被らないギフト設計、戸建て・マンション別の選び方、避けたいNG、のし、渡すタイミング、事前確認の例文まで1記事で解決する保存版。',
  keywords: ['新築祝い', '友人', '何あげる', '相場', 'NG', 'プレゼント', 'ギフト'],
  openGraph: {
    title: '新築祝い 友人 何あげる？外さない定番と被らないギフトの選び方（相場・NG・例文付き）',
    description: '友人の新築祝いは『何をあげるか』が一番難しい。相場の目安、外さない定番、被らないギフト設計、戸建て・マンション別の選び方、避けたいNG、のし、渡すタイミング、事前確認の例文まで1記事で解決する保存版。',
    type: 'article',
    url: 'https://www.hare-gift.com/housewarming_gift/friend-gift-guide',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/housewarming_gift/friend-gift-guide',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function FriendGiftGuideArticle() {
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
            <span className='text-gray-800'>友人への贈り方</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              新築祝い 友人 何あげる？外さない定番と被らないギフトの選び方（相場・NG・例文付き）
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                「友人の新築祝い、何あげるのが正解？」<br />
                この検索をする人が悩むのは、だいたい同じ理由です。
              </p>
              <ul className='list-disc list-inside space-y-2 mb-3'>
                <li>何が必要か分からない</li>
                <li>すでに揃っていて被りそう</li>
                <li>インテリアの好みが分からない</li>
                <li>現金は生々しい気がする</li>
                <li>そもそも相場も不安</li>
              </ul>
              <p className='mb-3'>
                <strong>結論、友人の新築祝いは「相場で土台を作る」→「負担が増えない形にする」→「被らない設計で選ぶ」で外しにくくなります。</strong>
              </p>
              <p className='mb-3'>
                この記事では、定番をただ並べるのではなく、被りと好み割れを避けて成功率を上げる選び方を整理します。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg'>
              <h2 className='text-xl font-bold text-gray-800 mb-3'>この記事でわかること</h2>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>友人への新築祝いの相場目安</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>外さない定番の考え方</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>被りやすいギフトと代替案</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>戸建て・マンション・賃貸で変わる最適解</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>渡すタイミング、のし、内祝い（お返し）への配慮</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>避けたいNG</span>
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
                href='/housewarming_gift'
                className='inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105'
              >
                新築祝いギフトをカテゴリから探す
              </Link>
            </div>

            {/* セクション1: まず結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                まず結論：友人の新築祝いは「インテリア」より「家が回る」を選ぶと強い
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  新築祝いで失敗しやすいのは、見た目の良さを優先しすぎるときです。
                </p>
                <p>
                  友人関係だと、相手の好みを外しても言いづらく、使われないまま眠りがちになります。
                </p>
              </div>

              <div className='mt-6 bg-pink-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>外さない方向性はこれです</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>使えば減る消耗品</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>家事がラクになる時短</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>新居をきれいに保つ掃除、メンテ</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>来客で使える実用品</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>香りなし、テイスト弱めの無難デザイン</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                「置くインテリア」より「使う実用品」に寄せるほど成功率が上がります。
              </p>
            </section>

            {/* セクション2: 相場早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                友人への新築祝い 相場早見表（関係性別）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  まずは土台を作ります。
                </p>
                <p>
                  相場は地域や関係性で差があるので、帯で覚えるのが安全です。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>関係性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>無難な決め方</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>友人（普通）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3000円〜10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>迷ったら5000円前後</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親しい友人</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円〜30000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>高額は内祝い負担に配慮</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>グループで連名</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>1人1000円〜5000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>まとめて良い物にできる</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>夫婦ぐるみ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円〜20000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家族単位で負担にならない範囲</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  相場全体は別記事への導線も用意してください。
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

            {/* セクション3: 目的別おすすめ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                迷ったらこれ：目的別おすすめ（友人の新築祝いで失敗しにくい）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  友人は相手の事情が見えにくいので、目的で選ぶと外しにくいです。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>目的</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>外さない方向性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被らないコツ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>時短</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家事がラクになる寄せ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すぐ使える、説明不要を選ぶ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>掃除、メンテ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>新居をきれいに保つ寄せ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>収納を取らない形にする</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>来客</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>もらって困りにくい寄せ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ペアでなく単品で使える</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消耗</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使えばなくなる寄せ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大容量すぎない</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>香りなし</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好み割れを避ける</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無香料、無難デザイン</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                ここから先は「被りやすい定番」を避けると成功率が上がります。
              </p>
            </section>

            {/* セクション4: 被りやすいギフトと代替案 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                被りやすいギフトと代替案（友人あるある）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  新築祝いは「みんなが思いつく定番」ほど被ります。
                </p>
                <p>
                  定番を選ぶなら、代替の設計にずらすのがコツです。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被りやすいギフト</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被る理由</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>代替案の考え方</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>タオルセット</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>定番で選ばれやすい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>量より質、単品で上質に</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>おしゃれ食器</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みが割れる、枚数が被る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無地で汎用、単品使いできるもの</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ルームフレグランス</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>香りの好みが強い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無香料、掃除系、消耗品に寄せる</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>観葉植物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置き場所、手入れの負担</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>メンテ負担ゼロの実用品</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大型家電</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すでに揃っている</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>生活支援寄せで小さく</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                「負担が増える要素」を消すと、友人関係でも安心して贈れます。
              </p>
            </section>

            {/* セクション5: 住宅タイプ別 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                住宅タイプ別：戸建て・マンション・賃貸で最適解が変わる
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  同じ新築でも、住まいの条件で喜ばれる物が変わります。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>住まい</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>ありがちな事情</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>外さない方向性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>戸建て</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>掃除範囲が広い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>掃除、メンテ、時短寄せ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>マンション</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>収納と騒音配慮</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>省スペース、静か、消耗品</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>賃貸（引っ越し）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ルールがある</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>香りなし、原状回復に寄せる</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                住まいが分からない場合は「省スペース」「香りなし」「消耗品」が安全です。
              </p>
            </section>

            {/* セクション6: 渡すタイミングと渡し方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                渡すタイミングと渡し方：手渡しと配送どっちがいい？
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  新居直後はバタつくので、負担が少ない方法が正解です。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>渡し方</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>向いているタイミング</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>失敗しないコツ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>手渡し</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>新居に招かれた時</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>手土産と役割を分ける</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>配送</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>忙しそう、遠方</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>受け取りやすい日を聞く</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>連名でまとめて</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>グループで贈る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>代表者一本化で連絡を減らす</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-blue-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>配送時の一言テンプレ</h3>
                <p className='text-gray-700'>
                  「受け取りやすい曜日ある？負担にならない形で送るね」
                </p>
              </div>
            </section>

            {/* セクション7: のし */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                のしは必要？友人でも「付けると安心」な場面がある
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  友人でも、新築祝いは形式を整えると丁寧さが伝わります。
                </p>
                <p>
                  ただし重くなりすぎないように、状況に合わせるのがコツです。
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
            </section>

            {/* セクション8: NG早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                避けたいNG（友人の新築祝いで地雷になりやすい）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  新築祝いには縁起や負担、好み割れの地雷があります。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>NGになりやすい</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>理由</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>代替の方向性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>香りが強い物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みと体調で合わない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無香料寄せ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大型、重い物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置き場所と受け取り負担</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>省スペース寄せ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みが強いインテリア</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>テイストが合わない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>実用品、消耗品</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>サイズが必要な物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>合わないと使えない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>サイズ不要を選ぶ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ルールが絡む物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>賃貸や管理規約に合わない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無難寄せ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  NGの詳細は別記事が便利です。
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

            {/* セクション9: 例文テンプレ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                例文テンプレ：事前確認、手土産併用、内祝い辞退（コピペOK）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  友人関係では、ひと言聞けるだけで被りが消えます。
                </p>
              </div>

              <div className='space-y-6'>
                <div className='bg-green-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>事前確認テンプレ</h3>
                  <ul className='space-y-2 text-gray-700'>
                    <li className='flex items-start'>
                      <span className='mr-2 text-green-600'>•</span>
                      <span>「新築祝い、被りたくないから、今ほしい系統ある？」</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-2 text-green-600'>•</span>
                      <span>「香り系は好みあると思うけど大丈夫？」</span>
                    </li>
                  </ul>
                </div>

                <div className='bg-purple-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>手土産併用テンプレ</h3>
                  <p className='text-gray-700'>
                    「当日は手土産だけ持って行くね。新築祝いは別で負担ない形で送るよ」
                  </p>
                </div>

                <div className='bg-yellow-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>内祝い辞退テンプレ</h3>
                  <p className='text-gray-700'>
                    「お返しは気にしないで。落ち着いたら新居見せて」
                  </p>
                </div>
              </div>
            </section>

            {/* セクション10: 最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                迷ったときの最終解｜友人の新築祝いはこの選び方が最強
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  最後まで迷ったら、次の順で決めると外しにくいです。
                </p>
              </div>

              <div className='bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-2 border-pink-200'>
                <ol className='space-y-2 text-gray-700 list-decimal list-inside'>
                  <li>相場表で予算を決める</li>
                  <li>目的別表から「時短・掃除・消耗」に寄せる</li>
                  <li>香りなし、省スペースで負担を減らす</li>
                  <li>可能なら一言だけ確認して被りを潰す</li>
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
                    Q. 友人の新築祝い、相場はいくら？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 3000円〜10000円が目安になりやすいです。親しい友人なら5000円〜30000円の範囲で、相手の負担にならない形にすると失敗しにくいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 現金は失礼？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 失礼ではありません。迷ったら現金やギフトカードは被らず助かる選択です。丁寧な渡し方にするとスマートです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 新築祝いで被りやすいものは？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. タオル、食器、香り物、観葉植物、大型アイテムは被りやすいです。代替案は消耗品、掃除、時短寄せが無難です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. のしは付けたほうがいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 友人でも付けると丁寧ですが、重くなりすぎないよう状況に合わせるのがコツです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 手土産と新築祝いは別？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 別で考えるのが無難です。新居に招かれた時は手土産、別日に新築祝いを送る形もよくあります。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 渡すタイミングはいつがいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 引っ越し後、落ち着いた頃が無難です。配送なら受け取りやすい日を聞くと負担が減ります。
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
