/**
 * 出産祝い「お返しいらない」記事ページ
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
      'name': '出産祝いで「お返しはいらない」と言うのは失礼？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '失礼ではありません。相手の負担を減らしたい意図が伝わる言い方にすると、角が立ちにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '目上の人に内祝い辞退を伝えても大丈夫？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '可能ですが、断定を避けて「どうかご無理なさらず」など柔らかい表現が無難です。返される可能性も想定しておくと安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'お返し不要と言われた側は、本当に返さなくていい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '親しい関係で辞退が明確なら返さなくても問題になりにくいです。不安なら、お礼を丁寧にするか、小さく返すと安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': '辞退されたのに返すと失礼になる？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '基本は失礼ではありません。ただし高額や大きい返しは相手が気を遣うので、小さく、負担にならない形が無難です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'お返しをしない代わりに、何をすればいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '丁寧なお礼メッセージ、近況の報告、写真の共有など「感謝が伝わる行動」を増やすと失礼回避になります。'
      }
    },
    {
      '@type': 'Question',
      'name': '内祝いののしはどうすればいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '迷ったら付けるのが無難です。水引や表書きの基本は別記事のガイドにまとめると便利です。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '出産祝い お返し いらない｜失礼にならない伝え方と内祝い辞退のマナー（例文テンプレ付き）',
  description: '出産祝いで『お返しはいらない』は失礼？贈る側の辞退の伝え方、もらう側の対応、関係性別の言い回し、LINE・メール・カードの例文、内祝いの基本と判断フローまで。気を遣わせない最適解が分かる保存版。',
  keywords: ['出産祝い', 'お返し', 'いらない', '内祝い', '辞退', 'マナー', '例文', '伝え方'],
  openGraph: {
    title: '出産祝い お返し いらない｜失礼にならない伝え方と内祝い辞退のマナー（例文テンプレ付き）',
    description: '出産祝いで『お返しはいらない』は失礼？贈る側の辞退の伝え方、もらう側の対応、関係性別の言い回し、LINE・メール・カードの例文、内祝いの基本と判断フローまで。気を遣わせない最適解が分かる保存版。',
    type: 'article',
    url: 'https://www.hare-gift.com/baby_gift/no-return-needed',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/baby_gift/no-return-needed',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function NoReturnNeededArticle() {
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
            <span className='text-gray-800'>お返し不要の伝え方</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              出産祝い お返し いらない｜失礼にならない伝え方と内祝い辞退のマナー（例文テンプレ付き）
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                出産祝いを贈るとき、よくある悩みが「お返し（内祝い）はいらないって言っていいの？」です。
              </p>
              <p className='mb-3'>
                気を遣わせたくない一方で、失礼にならないか心配になります。
              </p>
              <p className='mb-3'>
                <strong>結論から言うと「お返しは不要です」と伝えること自体は失礼ではありません。</strong><br />
                ただし、伝え方と関係性を間違えると、相手に迷わせたり、かえって負担を増やすことがあります。
              </p>
              <p className='mb-3'>
                この記事は、検索でここに来た人のための保存版です。
              </p>
              <p className='mb-3'>
                贈る側が「辞退したい」ときの正解、もらう側が「辞退された」ときの正解を、例文テンプレつきでまとめます。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg'>
              <h2 className='text-xl font-bold text-gray-800 mb-3'>この記事でわかること</h2>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>「お返し いらない」は失礼かどうかの結論</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>関係性別：角が立たない伝え方</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>コピペOKの例文（LINE・メール・カード）</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>もらう側：辞退された時の判断フロー</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>それでも返す場合の無難な落としどころ</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 text-blue-500'>✓</span>
                  <span>内祝いの基本（時期、金額目安、のし）</span>
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
                まず結論：「お返しはいらない」はOK。ただし目的は一つにする
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  「お返しは不要です」を伝える目的は、相手の負担を減らすことです。
                </p>
                <p>
                  だから、言い方も一貫して「負担を増やしたくない」に寄せるほど、角が立ちません。
                </p>
              </div>

              <div className='mt-6 bg-pink-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>失敗しにくい基本形</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>お祝いの気持ちだけ受け取ってほしい</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>出産直後は忙しいから手配の負担を減らしたい</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span>内祝いは気にしないでほしい</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                この3つが伝われば、ほとんどの場面で失礼になりにくいです。
              </p>
            </section>

            {/* セクション2: そもそも内祝いとは */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                そもそも内祝いとは？「お返し」ではなく「お披露目」の文化
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  内祝いは本来「幸せのおすそ分け」の文化で、必ずしも等価交換の返礼ではありません。
                </p>
                <p>
                  ただ現代では、いただいたお祝いへのお礼として贈る意味合いが強くなっています。
                </p>
                <p>
                  だからこそ、辞退するなら「お礼はメッセージで十分」と伝えるのが自然です。
                </p>
              </div>
            </section>

            {/* セクション3: 関係性別温度感早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                関係性別：お返し不要を伝える温度感早見表
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  相手の立場や距離感で、言い方の温度を変えると失礼回避ができます。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '750px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>関係性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>おすすめの伝え方</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>角が立ちにくい一言</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>注意点</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親しい友人</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>率直に辞退でOK</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「内祝いは気にしないで」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>強い断定より柔らかく</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>そこまで親しくない友人</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>柔らかく辞退</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「お気遣いなく」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>返信を急かさない</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>職場の同僚</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>簡潔に辞退</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「お返しは不要です」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>連名なら代表に一本化</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>上司、目上</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>辞退は控えめ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「どうかご無理なさらず」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>辞退しても返されやすい</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親族</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家の慣習優先</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「内祝いはお気持ちだけで」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>祖父母世代は返す前提が多い</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                迷ったら「内祝いは気にしないで」より「お気遣いなく」を選ぶと無難です。
              </p>
            </section>

            {/* セクション4: すぐ使える一言フレーズ集 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                すぐ使える一言フレーズ集（場面別）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  短文は迷いが減り、相手も受け取りやすいです。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>場面</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>一言フレーズ</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>ニュアンス</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親しい相手に</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「内祝いは本当に気にしないでね」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>率直で温かい</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>丁寧に伝える</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「内祝いはどうかお気遣いなく」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>礼儀正しく柔らかい</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>忙しさに配慮</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「出産直後で大変だと思うので、お返しは不要です」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>負担軽減が伝わる</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>目上に</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「どうかご無理なさらないでください」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>断定を避ける</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>連名で贈る時</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「お返しは一切不要です。お礼の一言だけで十分です」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>手配の負担を止める</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                ポイントは、相手をコントロールせず「配慮の提案」にすることです。
              </p>
            </section>

            {/* セクション5: コピペOK例文テンプレ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                コピペOK：例文テンプレ（LINE・メール・カード）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  ここからはそのまま使える文章です。
                </p>
                <p>
                  短文と長文の両方を用意します。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '800px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>用途</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>短文テンプレ</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>長文テンプレ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>LINE（友人）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「おめでとう。内祝いは気にしないでね」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「改めておめでとう。いまはバタバタだと思うので、内祝いは本当に気にしないでね。落ち着いたら近況だけ聞かせてもらえたら嬉しい」</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>LINE（丁寧）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「内祝いはどうかお気遣いなく」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「この度はおめでとうございます。ご負担になるといけないので、内祝いはどうかお気遣いなく。お礼の一言だけで十分です」</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>メール（職場）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「お返しは不要です」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「この度はご出産おめでとうございます。お忙しい時期ですので、内祝いなどはどうかお気遣いなく。ご挨拶だけ頂けましたら十分です」</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>カード同封</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「内祝いは不要です」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「お忙しい時期にご負担を増やしたくないので、内祝いは不要です。お礼のお言葉だけで十分嬉しいです」</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>目上向け</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「どうかご無理なさらず」</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>「ご負担になるといけませんので、内祝いはどうかご無理なさらないでください。お礼のお気持ちだけ頂戴できれば十分でございます」</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                強めに断るより「負担を増やしたくない」を前に出すと印象が良くなります。
              </p>
            </section>

            {/* セクション6: もらう側の対応 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                もらう側：お返し不要と言われたら、どうするのが正解？
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  ここからは受け取った側の悩みです。
                </p>
                <p>
                  結論は「相手の意図を尊重しつつ、最低限の礼を別の形で返す」が最も角が立ちません。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>状況</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>おすすめ対応</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>具体例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親しい友人で辞退が明確</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>辞退を受け入れてOK</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>お礼メッセージ＋写真や近況</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>目上、職場関係</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>小さく返すか、お礼を丁寧に</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>お礼状＋少額の消えもの</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>高額なお祝いをもらった</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>何らかの形で返すと安心</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>後日落ち着いてから簡易内祝い</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>相手が強く辞退</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>形より言葉を厚く</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>お礼メッセージを丁寧に</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                「返さない」より「感謝を濃くする」と失礼回避になります。
              </p>
            </section>

            {/* セクション7: 判断フロー */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                判断フロー：辞退された時に迷わないためのチェック
              </h2>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>チェック</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>はい</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>いいえ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>相手は目上、職場、親族の年長者か</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>小さく返す方向も検討</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>次へ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>いただいた金額や品が高額か</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>簡易内祝いか別形のお礼を検討</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>次へ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>相手が辞退を明確に強く言っているか</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>言葉のお礼を厚くして尊重</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>次へ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>自分が気持ち的に落ち着かないか</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>小さめで返して安心を取る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>辞退を受け入れてOK</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                自分の安心のために小さく返すのも、現実的にはよくある選択です。
              </p>
            </section>

            {/* セクション8: それでも返す場合 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                それでも返す場合：内祝いの目安と無難な代替案
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  辞退されても返したい時は「相手の負担にならない小ささ」が鍵です。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>返す理由</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>目安の考え方</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>無難な代替案</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>目上なので礼を整えたい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>少額で十分</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消えもの、軽いお菓子など</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>高額で気持ちが落ち着かない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無理のない範囲で控えめに</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>後日まとめて簡易内祝い</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>職場の慣習がある</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>慣習に合わせる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>代表者へ一括、配りやすい形</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親族の慣習が強い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家の方針を優先</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>両親に確認して最小の形に</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  内祝いの一般的な考え方や相場は別記事で詳しく整理してください。
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

            {/* セクション9: 内祝いの基本 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                内祝いの基本：時期・のし・渡し方（これだけ押さえれば安心）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  辞退する場合でも、基本を知っていると迷いが減ります。
                </p>
              </div>

              <div className='mt-6 bg-blue-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>基本の目安</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span><strong>時期：</strong>落ち着いたタイミングで無理なく</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span><strong>渡し方：</strong>手渡しでも配送でもOK。配送なら事前に一言が丁寧</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span><strong>のし：</strong>迷ったら付けると無難</span>
                  </li>
                </ul>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  のしの基本は別記事でまとめると導線が作れます。
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

            {/* セクション10: 逆効果になりやすいNG */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                逆効果になりやすい言い方とNG（やりがち注意）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  善意でも、言い方で相手が困ることがあります。
                </p>
              </div>

              <div className='mt-6 bg-red-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>避けたいパターン</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>「絶対に返さないで」と命令形に近い</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>返信を急かす雰囲気を出す</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>断りだけで終わり、感謝が薄く見える</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-red-500'>×</span>
                    <span>相手の家の慣習を否定するような言い方</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                おすすめは、感謝を先に置き、辞退は後ろに添える形です。
              </p>

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

            {/* セクション11: 最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                贈る側の最終解：迷ったらこの一文で失礼回避できる
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  迷ったら、次の形が最も無難です。
                </p>
              </div>

              <div className='bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-2 border-pink-200'>
                <p className='text-lg text-gray-800 leading-relaxed'>
                  「お忙しいと思うので、内祝いはどうかお気遣いなく。お礼の一言だけで十分嬉しいです」
                </p>
              </div>

              <p className='mt-4 text-gray-700'>
                この一文は、相手の選択も残しつつ、負担軽減が伝わります。
              </p>
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
                    Q. 出産祝いで「お返しはいらない」と言うのは失礼？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 失礼ではありません。相手の負担を減らしたい意図が伝わる言い方にすると、角が立ちにくいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 目上の人に内祝い辞退を伝えても大丈夫？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 可能ですが、断定を避けて「どうかご無理なさらず」など柔らかい表現が無難です。返される可能性も想定しておくと安心です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. お返し不要と言われた側は、本当に返さなくていい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 親しい関係で辞退が明確なら返さなくても問題になりにくいです。不安なら、お礼を丁寧にするか、小さく返すと安心です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 辞退されたのに返すと失礼になる？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 基本は失礼ではありません。ただし高額や大きい返しは相手が気を遣うので、小さく、負担にならない形が無難です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. お返しをしない代わりに、何をすればいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 丁寧なお礼メッセージ、近況の報告、写真の共有など「感謝が伝わる行動」を増やすと失礼回避になります。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 内祝いののしはどうすればいい？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 迷ったら付けるのが無難です。水引や表書きの基本は別記事のガイドにまとめると便利です。
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
