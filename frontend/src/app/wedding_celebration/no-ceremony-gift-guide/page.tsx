/**
 * 結婚祝い（式なし・友達向け）記事ページ
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
      'name': '友達が式なしでも結婚祝いは必要？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '必須ではありませんが、贈るのは自然です。式なしは相手の負担を減らす選択のことが多いので、負担を増やさない形で贈ると喜ばれます。'
      }
    },
    {
      '@type': 'Question',
      'name': '相場はいくらが無難？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '入籍報告のみなら3000円〜10000円が目安です。迷ったら5000円前後が最も無難です。仲が良いなら10000円前後が選びやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '現金は失礼？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '失礼ではありません。丁寧に渡せばスマートです。現金が気になるならギフトカードが外しにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '郵送は失礼？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '失礼ではありません。受け取りやすい日を聞いて、メッセージを添えると丁寧です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'お返し（内祝い）はどうなる？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '相手の方針次第です。負担を増やしたくないなら「お返しは気にしないで」と一言添えるとスムーズです。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '結婚祝い 友達 式なし｜相場はいくら？入籍のみでも失礼にならない渡し方とプレゼント選び（保存版）',
  description: '友達が式なし（入籍のみ・挙式なし）でも結婚祝いは必要？相場はいくら？現金・ギフトカード・プレゼントの最適解、被らない選び方、いつ渡すか、のし、郵送マナー、連名、例文テンプレまで。迷いを1記事で解決します。',
  keywords: ['結婚祝い', '友達', '式なし', '入籍のみ', '相場', '現金', 'ギフトカード'],
  openGraph: {
    title: '結婚祝い 友達 式なし｜相場はいくら？入籍のみでも失礼にならない渡し方とプレゼント選び（保存版）',
    description: '友達が式なし（入籍のみ・挙式なし）でも結婚祝いは必要？相場はいくら？現金・ギフトカード・プレゼントの最適解、被らない選び方、いつ渡すか、のし、郵送マナー、連名、例文テンプレまで。迷いを1記事で解決します。',
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/no-ceremony-gift-guide',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/no-ceremony-gift-guide',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function NoCeremonyGiftGuideArticle() {
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
            <Link href='/wedding_celebration' className='hover:text-pink-600 transition-colors'>
              結婚祝い
            </Link>
            <span className='mx-2'>›</span>
            <span className='text-gray-800'>式なし・友達への贈り方</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              結婚祝い 友達 式なし｜相場はいくら？入籍のみでも失礼にならない渡し方とプレゼント選び（保存版）
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                「友達が結婚したけど、式なし（入籍のみ）らしい。結婚祝いって渡すべき？」<br />
                「相場が分からない。現金？プレゼント？何が正解？」<br />
                「式がないからこそ、気まずくならない渡し方が知りたい」
              </p>
              <p className='mb-3'>
                式なしの結婚は増えています。<br />
                でも式がないと「ご祝儀ルール」が使えず、迷う人が多いのも事実です。
              </p>
              <p className='mb-3'>
                <strong>結論から言うと、式なしでも結婚祝いは贈ってOKです。</strong><br />
                ただし外さないコツは、次の3つだけ。
              </p>
              <ul className='list-disc list-inside space-y-2 mb-3'>
                <li>相場を外さない（高すぎても低すぎても気まずい）</li>
                <li>相手の負担を増やさない（お返し・受け取りの手間）</li>
                <li>被らない形で贈る（生活用品は揃っている前提）</li>
              </ul>
              <p className='mb-3'>
                この記事は、迷いがちなポイントを「これを選べばOK」という形で具体的に整理します。
              </p>
              <p className='mb-3'>
                読み終わったら、あなたは「いくらで」「何を」「いつ渡すか」がすぐ決まります。
              </p>
            </div>

            {/* CTA1 */}
            <div className='mb-12 text-center'>
              <Link 
                href='/wedding_celebration'
                className='inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105'
              >
                結婚祝いギフトをカテゴリから探す
              </Link>
            </div>

            {/* セクション1: まず結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                まず結論：式なしの友達には「5000円前後」か「選べる形」が一番外しにくい
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  最初に迷いを止めます。
                </p>
              </div>

              <div className='mt-6 bg-pink-50 p-6 rounded-lg'>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span><strong>普通の友達：5000円前後</strong></span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span><strong>仲が良い友達：10000円前後</strong></span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span><strong>親友：10000円〜20000円</strong></span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                そして「何を贈るか」で迷ったら、相手が選べる形（現金やギフトカード）が最も失敗しません。
              </p>
              <p className='text-gray-700'>
                理由はシンプルで、式なしカップルはすでに生活が整っていることが多いからです。
              </p>
              <p className='mt-4 text-gray-700'>
                ここから先は、あなたの状況に合わせて最適解を選べるように整理します。
              </p>
            </section>

            {/* セクション2: パターン別相場早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                式なしにも種類がある｜パターン別の相場早見表
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  「式なし」と言っても状況が違います。
                </p>
                <p>
                  ここを押さえると、相場が一気に決まります。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '700px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>パターン</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>友達への相場目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>迷ったときの最適解</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>入籍報告のみ（会食なし）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3000円〜10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円前後でOK</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家族だけの小さな会食あり</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円〜20000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円前後が無難</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>後日お披露目、二次会がありそう</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円〜30000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>今は軽め、後日調整</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すでに同棲、生活が整っている</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3000円〜10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>物より選べる形に寄せる</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-yellow-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>ポイント</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>迷ったら「入籍報告のみ」扱いでOK</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-yellow-600'>•</span>
                    <span>後日イベントがあるなら「今は軽め」が気まずくなりにくい</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* セクション3: 距離感別の最適解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                距離感で決める｜金額と形の最適解（ここだけ見れば決まる）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  友達でも距離感で正解が変わります。
                </p>
                <p>
                  次の表で、あなたの立ち位置を選んでください。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '750px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>距離感</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>金額の目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>形の最適解</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>これなら失敗しない</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親友</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜20000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金＋小さな品</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>メッセージを厚くする</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>仲が良い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円〜15000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ギフトカード or 現金</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>受け取り負担を減らす</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>普通</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3000円〜10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ギフトカード</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>迷ったら5000円</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>疎遠</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3000円〜5000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ちょい足しの品＋メッセージ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>丁寧さでカバー</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                高額にすると、お返し（内祝い）の負担が増えます。
              </p>
              <p className='text-gray-700'>
                気持ちが強いほど「お返しは気にしないで」を添えるのが親切です。
              </p>
            </section>

            {/* セクション4: 現金・ギフトカード・プレゼントの選び分け */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                現金・ギフトカード・プレゼントの選び分け（具体例つき）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  式なしの友達には「相手が選べる」ほど当たりやすいです。
                </p>
                <p>
                  でも現金に抵抗がある人もいます。
                </p>
                <p>
                  そこで、選び分けを具体化します。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '750px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>何を贈る？</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>こういう人に向く</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>メリット</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>具体例（方向性）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>一番助かる形にしたい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>被らない、自由度最大</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ご祝儀袋＋メッセージ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ギフトカード</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金が生々しいと感じる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>スマート、選べる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使い道が広いもの寄せ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>プレゼント</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みや必要な物が分かる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>記憶に残る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消耗・時短・小さめ実用品</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>現金＋小さな品</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>気持ちも形も残したい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>バランスが良い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>お菓子や消耗品など軽め</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='mt-4 text-gray-700'>
                プレゼントを選ぶなら「置き場所を取らない」「香りが強くない」「同じ物があっても困らない」が鉄板です。
              </p>
            </section>

            {/* セクション5: 被りやすいギフトと代替案 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                被りやすいギフトと代替案（具体例つき）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  式なしカップルは、生活用品が揃っている前提で考えると失敗が減ります。
                </p>
              </div>

              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 w-full' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被りやすい</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>なぜ失敗しやすい？</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>代替案（方向性）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ペア食器</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好み割れ、すでに持っている</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>単品で使える実用品</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>キッチン家電</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すでに揃っている、置き場所</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>選べる形、消耗品寄せ</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>インテリア雑貨</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>テイストが強い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無難デザインか実用品</td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>香り物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みと体調で合わない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無香料、掃除寄せ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  避けたいNGは別記事があるなら誘導してください。
                </p>
                <p className='mt-2'>
                  <Link 
                    href='/wedding_celebration/ng-gifts' 
                    className='text-pink-600 hover:text-pink-700 underline font-medium'
                  >
                    → 避けたいNGギフトを確認する
                  </Link>
                </p>
              </div>
            </section>

            {/* セクション6: いつ渡す？ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                いつ渡す？会えるかどうかで決めれば迷わない
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  式がないとタイミングが不安になりますが、答えは簡単です。
                </p>
              </div>

              <div className='mt-6 bg-green-50 p-6 rounded-lg'>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-600'>•</span>
                    <span><strong>近くて会える：</strong>入籍報告を聞いてから早め</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-600'>•</span>
                    <span><strong>会えない、遠方：</strong>配送でもOK</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-green-600'>•</span>
                    <span><strong>後日お披露目がある：</strong>そこでまとめて渡してもOK</span>
                  </li>
                </ul>
              </div>

              <p className='mt-4 text-gray-700'>
                大事なのは「相手が受け取りやすい」ことです。
              </p>
            </section>

            {/* セクション7: 郵送は失礼？ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                郵送は失礼？いいえ。むしろ負担が減ることもある
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  式なしカップルは忙しいことが多いです。
                </p>
                <p>
                  会うために予定を合わせるほうが負担になる場合もあります。
                </p>
              </div>

              <div className='mt-6 bg-blue-50 p-6 rounded-lg'>
                <h3 className='text-lg font-bold text-gray-800 mb-3'>郵送で失礼になりにくいコツ</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>受け取りやすい日を聞く</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>メッセージを添える</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-blue-500'>•</span>
                    <span>大きすぎる物は避ける</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* セクション8: のし */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                のしは必要？迷ったら「付ける」でOK
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3'>
                <p>
                  友達でも、のしがあると丁寧さが伝わります。
                </p>
                <p>
                  現金はご祝儀袋、品物は簡易ののし紙で十分です。
                </p>
              </div>

              <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
                <p className='text-gray-700'>
                  のしの詳細は別記事に導線を作ってください。
                </p>
                <p className='mt-2'>
                  <Link 
                    href='/wedding_celebration/noshi-guide' 
                    className='text-pink-600 hover:text-pink-700 underline font-medium'
                  >
                    → のしガイドを確認する
                  </Link>
                </p>
              </div>
            </section>

            {/* セクション9: 例文テンプレ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                例文テンプレ（聞き方・渡し方・郵送・お返し辞退）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  ここはコピペで使える形にします。
                </p>
              </div>

              <div className='space-y-6'>
                <div className='bg-purple-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>事前確認（被り回避）</h3>
                  <ul className='space-y-2 text-gray-700'>
                    <li className='flex items-start'>
                      <span className='mr-2 text-purple-500'>•</span>
                      <span>「結婚祝い、被りたくないから欲しい物ある？」</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-2 text-purple-500'>•</span>
                      <span>「現金か、選べる形にしようと思うけどどっちが嬉しい？」</span>
                    </li>
                  </ul>
                </div>

                <div className='bg-green-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>渡すとき（重くしない）</h3>
                  <p className='text-gray-700'>
                    「式なしって聞いたから、負担にならない形でお祝いだけ渡すね。改めておめでとう」
                  </p>
                </div>

                <div className='bg-blue-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>郵送（受け取り配慮）</h3>
                  <ul className='space-y-2 text-gray-700'>
                    <li className='flex items-start'>
                      <span className='mr-2 text-blue-500'>•</span>
                      <span>「お祝い送ってもいい？受け取りやすい日ある？」</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-2 text-blue-500'>•</span>
                      <span>「直接渡せなくてごめんね。お祝いの気持ちだけ受け取って」</span>
                    </li>
                  </ul>
                </div>

                <div className='bg-yellow-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>お返し辞退（内祝い負担を減らす）</h3>
                  <ul className='space-y-2 text-gray-700'>
                    <li className='flex items-start'>
                      <span className='mr-2 text-yellow-600'>•</span>
                      <span>「お返しは気にしないで。落ち着いたら近況だけ聞かせて」</span>
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-2 text-yellow-600'>•</span>
                      <span>「内祝いはどうかお気遣いなく。お礼の一言だけで十分だよ」</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション10: 最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-300'>
                迷ったときの最終解（これを選べばOK）
              </h2>
              <div className='text-gray-700 leading-relaxed space-y-3 mb-6'>
                <p>
                  最後に、最短ルートを置きます。
                </p>
              </div>

              <div className='bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-2 border-pink-200'>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span><strong>普通の友達：</strong>5000円前後のギフトカード</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span><strong>仲が良い友達：</strong>10000円前後（現金 or ギフトカード）</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span><strong>親友：</strong>10000円〜20000円＋小さな品</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span><strong>何を贈るか迷う：</strong>相手が選べる形にする</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='mr-2 text-pink-500'>•</span>
                    <span><strong>気まずさが心配：</strong>メッセージ＋お返し辞退の一言を添える</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA2 */}
            <div className='mb-12 text-center'>
              <Link 
                href='/wedding_celebration'
                className='inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105'
              >
                結婚祝いギフトをカテゴリから探す
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
                    Q. 友達が式なしでも結婚祝いは必要？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 必須ではありませんが、贈るのは自然です。式なしは相手の負担を減らす選択のことが多いので、負担を増やさない形で贈ると喜ばれます。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 相場はいくらが無難？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 入籍報告のみなら3000円〜10000円が目安です。迷ったら5000円前後が最も無難です。仲が良いなら10000円前後が選びやすいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 現金は失礼？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 失礼ではありません。丁寧に渡せばスマートです。現金が気になるならギフトカードが外しにくいです。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. 郵送は失礼？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 失礼ではありません。受け取りやすい日を聞いて、メッセージを添えると丁寧です。
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    Q. お返し（内祝い）はどうなる？
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    A. 相手の方針次第です。負担を増やしたくないなら「お返しは気にしないで」と一言添えるとスムーズです。
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
