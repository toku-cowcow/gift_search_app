/**
 * 出産祝い（3人目）記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、早見表×4、CTA配置、内部リンク×3
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
      'name': '出産祝いは3人目だと相場を下げるべき？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '下げても失礼ではありません。相場より「内容の刺さり方」が大事で、消耗品や時短など負担が減る設計が喜ばれやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '3人目はもう揃っているから、何を贈ればいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'カテゴリではなく設計で選ぶのが正解です。消耗・衛生・時短・ママケア・上の子配慮に寄せると被りにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '高額にすると相手に気を遣わせる？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '可能性があります。内祝いの手間が増えるため、相場の範囲に収めるか、連名にするか、「内祝いは気にしないで」と一言添えると親切です。'
      }
    },
    {
      '@type': 'Question',
      'name': '3人目でものしは必要？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '迷ったら付けるのが無難です。形式が整っているほど安心感があります。'
      }
    },
    {
      '@type': 'Question',
      'name': '渡すタイミングはいつが無難？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '退院後〜生後1か月頃が無難です。宅配の場合は受け取りやすい日を確認すると負担が減ります。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '出産祝い 3人目｜もう揃っている家庭に本当に喜ばれる選び方（相場・マナー・被らないギフト）',
  description: '3人目の出産祝いは『もう揃っている』『内祝いの負担が増える』が悩み。関係性別の相場、気を遣わせない決め方、年齢差別の最適解、被らないギフト設計、上の子への配慮、渡す時期・のし・NGまで1記事で分かる保存版です。',
  keywords: ['出産祝い', '3人目', '相場', 'マナー', '被らない', 'ギフト', '上の子', '年齢差'],
  openGraph: {
    title: '出産祝い 3人目｜もう揃っている家庭に本当に喜ばれる選び方（相場・マナー・被らないギフト）',
    description: '3人目の出産祝いは『もう揃っている』『内祝いの負担が増える』が悩み。関係性別の相場、気を遣わせない決め方、年齢差別の最適解、被らないギフト設計、上の子への配慮、渡す時期・のし・NGまで1記事で分かる保存版です。',
    type: 'article',
    url: 'https://www.hare-gift.com/baby_gift/third-child-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/baby_gift/third-child-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function ThirdChildGiftArticle() {
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
            <span className='text-gray-800'>3人目の選び方</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              出産祝い 3人目｜もう揃っている家庭に本当に喜ばれる選び方（相場・マナー・被らないギフト）
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                「出産祝い、3人目って何を贈ればいい？」
              </p>
              <p className='mb-3'>
                この検索をする人が悩む理由はシンプルです。
              </p>
              <p className='mb-3'>
                1人目は何でも嬉しい。<br />
                でも3人目は、ベビー用品が一通り揃っていることが多く、定番ほど被りやすい。<br />
                さらに相手は忙しく、内祝いの手配負担も増えがちです。
              </p>
              <p className='mb-3'>
                <strong>結論、3人目の出産祝いは「相場を外さない」「負担を増やさない」「被らない設計で選ぶ」で外しにくくなります。</strong>
              </p>
              <p className='mb-3'>
                この記事では、相場とマナーを押さえたうえで、年齢差や家庭状況に合わせた最適解を具体的にまとめます。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg'>
              <h2 className='text-xl font-bold text-gray-800 mb-3'>この記事でわかること</h2>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>3人目の出産祝いの相場と、気を遣わせない決め方</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>第1子・第2子・第3子で変わる「考え方」</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>年齢差別に喜ばれる方向性</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>被らないギフトの設計（消耗・衛生・時短・ママケア・上の子配慮）</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>渡す時期、のし、内祝い負担への配慮</span>
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
                href='/baby_gift'
                className='inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105'
              >
                出産祝いギフトをカテゴリから探す
              </Link>
            </div>

            {/* セクション1: まず結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                まず結論：3人目の出産祝いは「物」より「助かる設計」が勝つ
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  3人目家庭の現実は、可愛いより「回るかどうか」です。
                </p>
                <p>
                  家事、上の子、睡眠不足で、余力がありません。
                </p>
              </div>

              <div className='mt-6 bg-pink-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>外さない設計の方向性</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>消耗してなくなる（在庫になりにくい）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>衛生と清潔を保てる（洗う手間が減る）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>時短になる（段取りがラク）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>ママの回復に寄せる（自分のケアが後回しになりがち）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>上の子のケアを含める（嫉妬と退屈の対策）</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                3人目は「豪華」より「気が利く」の評価が高くなります。
              </p>
            </section>

            {/* セクション2: 関係性別相場 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                3人目の出産祝い相場｜関係性別の金額目安（早見表）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  相場は家庭や地域で差がありますが、極端に外さない目安はあります。
                </p>
                <p>
                  迷ったら、真ん中か少し控えめが無難です。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>関係性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>失礼になりにくいコツ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>友人</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3000円〜10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>迷ったら5000円前後で消耗品寄せ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親友</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜30000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>高額は内祝い負担を考慮して一言添える</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>職場の同僚</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>1000円〜5000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>連名がスマート、受け取り負担が少ないもの</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>上司、目上</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円〜10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>形式を丁寧に、無難寄せ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>兄弟姉妹</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜50000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家の慣習があれば合わせる</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親戚</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円〜30000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>距離感と家の慣習で調整</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  相場をもっと詳しく見たい場合は別記事も便利です。
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

            {/* セクション3: 第1子・第2子・第3子の考え方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                第1子・第2子・第3子で「相場」より大事なこと（考え方早見表）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  3人目は、金額そのものより「内容の刺さり方」が変わります。
                </p>
                <p>
                  同じ金額でも、設計がズレると使われません。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>何人目</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>親が困りやすいこと</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>贈り物の正解が変わるポイント</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>第1子</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>何が必要か分からない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>定番でも嬉しい、準備の土台づくり</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>第2子</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>物はあるが手が足りない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>被り回避と時短が効く</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>第3子</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>物も経験もあるが余力がない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消耗・衛生・時短・ママケア・上の子配慮が刺さる</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                3人目は「すでに持っている問題」が強いので、カテゴリ選びではなく設計で選ぶのが近道です。
              </p>
            </section>

            {/* セクション4: 年齢差別最適解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                年齢差で最適解が変わる｜3人目家庭の分岐はここ
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  3人目は、上の子との年齢差で生活が激変します。
                </p>
                <p>
                  だから同じ「3人目」でも、最適なギフトが変わります。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>年齢差</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>家庭のリアル</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>喜ばれやすい方向性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>年齢差が小さい（上の子が未就学）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>同時に手がかかる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>衛生、時短、消耗、上の子の退屈対策</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>年齢差が大きい（上の子が小学生以上）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ベビー用品が古い可能性</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>安全と買い替え寄せ、ママケア、家事の負担軽減</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>真ん中（上の子が園児〜低学年）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>バタつきと行事が重なる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>時短、持ち運び、家の回る設計</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                年齢差が分からない場合は「消耗＋衛生＋時短」に寄せると外しにくいです。
              </p>
            </section>

            {/* セクション5: 被らない設計 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                3人目で被らないギフトは「設計」で選ぶ（早見表）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  ベビー服やおもちゃは被りやすいです。
                </p>
                <p>
                  被らないの正体は、カテゴリではなく設計です。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>設計</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>なぜ刺さるか</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>失敗しにくい選び方</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消耗品</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使えば減るので在庫になりにくい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大容量すぎず、保管負担が少ない</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>衛生寄せ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>清潔を保つ手間が減る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>洗える、拭ける、使い捨てで楽</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>時短寄せ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>毎日の段取りがラク</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すぐ使える、説明不要、片付けが少ない</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ママケア</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>自分のケアが後回しになりがち</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>香りは控えめ、休息に寄せる</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>上の子配慮</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>嫉妬と退屈を減らす</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>上の子が自分のものと感じられる一品</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                3人目は「赤ちゃんの物」だけに寄せるより「家族全体が回る」寄せが強いです。
              </p>
            </section>

            {/* セクション6: NG */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                3人目の出産祝いで避けたいNG（忙しい家庭ほど負担になる）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  良かれと思った物が、負担になることがあります。
                </p>
                <p>
                  3人目家庭はとくに顕著です。
                </p>
              </div>

              <div className='mt-6 bg-red-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>避けたい方向性</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>サイズが必要な衣類（サイズ事故と好み割れ）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>パーツが多いおもちゃ（片付けと誤飲リスク）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>大型アイテム（置き場所がない）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>受け取り負担が重い冷蔵冷凍の大量セット</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>香りが強いもの（体調や好みで合わない）</span>
                  </li>
                </ul>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  NG観点をまとめた記事があるなら誘導してください。
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

            {/* セクション7: 内祝い負担への配慮 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                内祝い負担への配慮｜3人目ほど「手間」を減らすと喜ばれる
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  出産祝いで見落とされがちなのが、内祝いの負担です。
                </p>
                <p>
                  3人目はやることが多く、選ぶ時間がありません。
                </p>
              </div>

              <div className='mt-6 bg-yellow-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>気を遣わせないコツ</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>相場の範囲で収める</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>高額にしたいなら連名にして相手の手間を増やさない</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>親しい関係なら「内祝いは気にしないで」と一言添える</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                この一言があるだけで、相手のストレスが減ります。
              </p>
            </section>

            {/* セクション8: 渡す時期と渡し方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                渡す時期と渡し方｜3人目家庭は「受け取り負担ゼロ」が正解
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  出産直後は返信も難しいことがあります。
                </p>
                <p>
                  タイミングと渡し方で、気遣いが伝わります。
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
                    <span>体調や家庭状況によっては、少し遅れても問題ない</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-purple-500'>•</span>
                    <span>宅配は受け取りやすい曜日を確認すると親切</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* セクション9: のし */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                のしは必要？最低限これだけ押さえればOK
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  迷ったらのしを付けるのが無難です。
                </p>
                <p>
                  出産祝いは形式が整っているほど安心感があります。
                </p>
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

            {/* セクション10: 確認テンプレ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                サプライズ感を残して確認するテンプレ（3人目ほど効く）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  3人目は被りやすいので、確認のひと言で成功率が上がります。
                </p>
                <p>
                  聞き方は「負担を増やしたくない」に寄せるのが自然です。
                </p>
              </div>

              <div className='bg-blue-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>テンプレ</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>「被りたくないから、今足りてない消耗品ってある？」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>「受け取りやすい曜日ある？ 冷蔵系は避けたい」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>「上の子がいるから、家事がラクになる方向にしようと思うけどどう？」</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>「服はサイズ難しいから避けるね。実用品寄りで大丈夫？」</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                この4つで、地雷の多くを避けられます。
              </p>
            </section>

            {/* セクション11: 最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                迷ったときの最終解｜3人目の出産祝いはこの組み合わせが強い
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  最後まで迷ったら、相手の負担を減らす方向に寄せるのが最強です。
                </p>
              </div>

              <div className='bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-2 border-pink-200'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>最終解の考え方</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>✓</span>
                    <span>消耗品で確実に助かる</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>✓</span>
                    <span>衛生と時短で毎日がラクになる</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>✓</span>
                    <span>上の子への小さな配慮で家庭が回る</span>
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
                    Q. 出産祝いは3人目だと相場を下げるべき？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 下げても失礼ではありません。相場より「内容の刺さり方」が大事で、消耗品や時短など負担が減る設計が喜ばれやすいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 3人目はもう揃っているから、何を贈ればいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. カテゴリではなく設計で選ぶのが正解です。消耗・衛生・時短・ママケア・上の子配慮に寄せると被りにくいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 高額にすると相手に気を遣わせる？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 可能性があります。内祝いの手間が増えるため、相場の範囲に収めるか、連名にするか、「内祝いは気にしないで」と一言添えると親切です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 3人目でものしは必要？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 迷ったら付けるのが無難です。形式が整っているほど安心感があります。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 渡すタイミングはいつが無難？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 退院後〜生後1か月頃が無難です。宅配の場合は受け取りやすい日を確認すると負担が減ります。
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
