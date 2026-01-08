/**
 * 結婚祝いの選び方（保存版）記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、早見表×3、CTA配置、内部リンク×5
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
      'name': '結婚式に招待されている場合、プレゼントも必要？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '基本はご祝儀が優先です。プレゼントは必須ではありません。贈るなら小さめで負担が少ないものや連名で一つが無難です。'
      }
    },
    {
      '@type': 'Question',
      'name': '結婚祝いの相場はいくら？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '友人は5000円〜10000円が目安です。親友や兄弟姉妹など近い関係は上がりますが、高額すぎると相手の内祝い負担も増えるので配慮すると丁寧です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'のしは付けたほうがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '迷ったら付けるのが無難です。表書きや水引などの基本は別記事の早見表が便利です。'
      }
    },
    {
      '@type': 'Question',
      'name': '連名で贈るときのコツは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '一人あたりの負担を目安に合算し、ギフトは一つにまとめるとスマートです。のしの連名表記も早見表で確認できます。'
      }
    },
    {
      '@type': 'Question',
      'name': '宅配で結婚祝いを贈るのは失礼？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '失礼ではありません。事前に一言連絡し、受け取り負担が少ない形にすると丁寧です。'
      }
    },
    {
      '@type': 'Question',
      'name': '被らない結婚祝いの結論は？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'カテゴリではなく設計で選ぶことです。体験、消耗品、アップグレード、省スペース、メンテ負担削減のどれかに寄せるほど外しにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '食器やタオルはダメ？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'ダメではありませんが被りやすいです。贈るなら量より質、少数精鋭、収納を増やさない形に寄せると安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': '何を贈るか決めきれないときは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '相手の暮らしに合わせて設計を選び、確認テンプレで被りと好み割れを避けると決めやすくなります。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '結婚祝いの選び方｜相場・マナー・外さない人気ギフトまで（保存版）',
  description: '結婚祝いの相場、のしや渡す時期などのマナー、ご祝儀との違い、外さない人気ギフトの選び方、NG例、確認テンプレ、状況別の最適解までを1記事に凝縮。初めてでも失敗しない保存版ガイドです。',
  keywords: ['結婚祝い', '相場', 'マナー', 'のし', 'ご祝儀', 'ギフト', '選び方'],
  openGraph: {
    title: '結婚祝いの選び方｜相場・マナー・外さない人気ギフトまで（保存版）',
    description: '結婚祝いの相場、のしや渡す時期などのマナー、ご祝儀との違い、外さない人気ギフトの選び方、NG例、確認テンプレ、状況別の最適解までを1記事に凝縮。初めてでも失敗しない保存版ガイドです。',
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/wedding-gift-guide',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/wedding-gift-guide',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function WeddingGiftGuideArticle() {
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
            <span className='text-gray-800'>選び方ガイド（保存版）</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              結婚祝いの選び方｜相場・マナー・外さない人気ギフトまで（保存版）
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                結婚祝いを選ぶとき、いちばん困るのは<strong>「正解が分からない」</strong>ことです。
              </p>
              <p className='mb-3'>
                相場は？ のしは必要？ いつ渡す？ ご祝儀とは別？ 何を贈れば外さない？
              </p>
              <p className='mb-3'>
                この記事は、<strong>結婚祝いの悩みを丸ごと解決する保存版</strong>です。
              </p>
              <p className='mb-3'>
                相場とマナーを押さえたうえで、被りやすい落とし穴を避けながら、相手に刺さるギフトへ最短でたどり着けるようにまとめます。
              </p>
              <p className='mb-3 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400'>
                <strong>先に結論を言うと</strong>、外さない結婚祝いは<strong>「相場を外さない」「マナーで失点しない」「被らない設計で選ぶ」</strong>の3つで決まります。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>📋 この記事でわかること</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>結婚祝いの相場（関係性別の早見表）</li>
                <li>ご祝儀との違いと、プレゼントが必要かどうかの判断</li>
                <li>渡す時期、のし、表書き、郵送などのマナー</li>
                <li>外さない人気ギフトの選び方（カテゴリではなく設計）</li>
                <li>被りやすいギフトと、避けたいNG</li>
                <li>サプライズ感を残す確認テンプレ</li>
                <li>迷ったときの最終解</li>
              </ul>
            </div>

            {/* CTA1 */}
            <div className='bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-8'>
              <p className='text-lg font-bold mb-3'>結婚祝いギフトをカテゴリから探す</p>
              <Link
                href='/wedding_celebration'
                className='inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors'
              >
                結婚祝いギフトを探す
              </Link>
            </div>

            {/* セクション1: まず結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✅ まず結論：外さない結婚祝いは3ステップで決まる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                結婚祝いはセンス勝負に見えて、<strong>実はロジックで外れを減らせます</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                次の3ステップで考えると、失敗が一気に減ります。
              </p>

              <div className='space-y-4 mb-6'>
                <div className='bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400'>
                  <h3 className='font-bold text-gray-800 mb-2'>ステップ1：状況を確認する</h3>
                  <p className='text-gray-700 text-sm'>式に招待されているか、連名か、相手の暮らし</p>
                </div>
                <div className='bg-green-50 p-5 rounded-lg border-l-4 border-green-400'>
                  <h3 className='font-bold text-gray-800 mb-2'>ステップ2：相場を外さない</h3>
                  <p className='text-gray-700 text-sm'>関係性と距離感で予算を決める</p>
                </div>
                <div className='bg-purple-50 p-5 rounded-lg border-l-4 border-purple-400'>
                  <h3 className='font-bold text-gray-800 mb-2'>ステップ3：被らない設計で選ぶ</h3>
                  <p className='text-gray-700 text-sm'>物を増やさない、負担を増やさない</p>
                </div>
              </div>

              <p className='text-gray-700 leading-relaxed bg-yellow-50 p-4 rounded'>
                💡 この順番で進めると<strong>「迷い」が減り、決めやすくなります</strong>。
              </p>
            </section>

            {/* セクション2: ご祝儀との違い */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🎊 ステップ1：結婚式に招待されている？ ご祝儀と結婚祝いの基本
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                まず最初に確認したいのが<strong>「式に招待されているか」</strong>です。
                ここを曖昧にすると、相手に気を遣わせる原因になります。
              </p>

              {/* ご祝儀との違い */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>結婚祝い（プレゼント）とご祝儀の違い</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2'>
                  <li>ご祝儀は、式に参加する場合の基本（参加費的な意味合いもある）</li>
                  <li>結婚祝い（プレゼント）は、お祝いの気持ちを形にするもの</li>
                </ul>
              </div>

              {/* 招待されている場合 */}
              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>式に招待されている場合はどうする？</h3>
                <p className='text-gray-700 text-sm mb-2'>
                  多くの場合、<strong>まずご祝儀が優先</strong>です。
                </p>
                <p className='text-gray-700 text-sm'>
                  プレゼントは必須ではなく、贈るなら「小さめで負担が少ないもの」や「連名で一つ」などが無難です。
                </p>
              </div>

              {/* 招待されていない場合 */}
              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>式に招待されていない場合はどうする？</h3>
                <p className='text-gray-700 text-sm mb-2'>
                  <strong>お祝いのプレゼントが主役</strong>になります。
                </p>
                <p className='text-gray-700 text-sm'>
                  この場合は、相手の暮らしに刺さる設計で選ぶほど喜ばれやすいです。
                </p>
              </div>
            </section>

            {/* セクション3: 相場早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💰 ステップ2：結婚祝いの相場早見表（関係性別）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                相場は地域や関係性、年齢でブレますが、<strong>外しにくい目安</strong>はあります。
                迷ったら、<strong>相手に気を遣わせにくい価格帯</strong>に寄せるのが安全です。
              </p>
              
              <div className='overflow-x-auto mb-6' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 text-sm' style={{ minWidth: '600px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>関係性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>一般的な目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>ポイント</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>友人</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円〜10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親しいほど上限寄りでもOK</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>親友、特に近い友人</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜30000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>高額は相手の内祝い負担も考慮</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>職場の同僚</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>3000円〜10000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>連名なら一人あたりの負担を調整しやすい</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>上司、目上</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円〜20000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>失礼回避でのしと包装を丁寧に</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>兄弟姉妹</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>10000円〜50000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>両家バランスや親の意向も確認できると安全</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>いとこ、親戚</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>5000円〜30000円</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>距離感と家の慣習で調整</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>⚠️ 注意点</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>高額すぎると相手が気を遣うことがある</li>
                  <li>連名は「一人あたり」を目安に合算し、ギフトは一つにまとめるとスマート</li>
                  <li>迷ったら「使って消える」「物が増えない」方向に寄せると相場以上に喜ばれやすい</li>
                </ul>
              </div>
            </section>

            {/* セクション4: 設計で選ぶ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🎁 ステップ3：外さない人気ギフトは「カテゴリ」より「設計」で選ぶ
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                結婚祝いが失敗しやすい理由は、<strong>定番ほど被る</strong>からです。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                同棲カップルや新婚は、すでに生活用品が揃っていることも多いです。
                だからこそ、外さないギフトは<strong>「何を贈るか」より「どういう設計か」</strong>が重要です。
              </p>
              
              <div className='overflow-x-auto mb-6' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 text-sm' style={{ minWidth: '650px' }}>
                  <thead>
                    <tr className='bg-green-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>設計</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>外しにくい理由</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>具体イメージ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消耗品</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使えば減るので在庫になりにくい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>上質日用品、個包装の食品など</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>体験</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>物が増えない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>食事、リラックス、二人の時間</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>アップグレード</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すでにある物でも満足度が上がる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>毎日使うものを上質に</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>省スペース</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置き場所問題を回避できる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>小型、多用途、折りたたみ</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>メンテ負担削減</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>平日の負担が減る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>片付けや掃除がラクになる</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-gray-700 leading-relaxed bg-purple-50 p-4 rounded'>
                💡 この設計を先に決めると、<strong>被りや好み割れのリスクが落ちます</strong>。
              </p>
            </section>

            {/* セクション5: カテゴリ別詳細 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📦 結婚祝いの人気ギフトカテゴリ（外さない方向だけ厳選）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ここからは<strong>「外しにくい」だけを厳選</strong>して紹介します。
                どれも、被りにくく、負担が残りにくい方向性です。
              </p>

              {/* 消耗品 */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>🧴 消耗品は「生活のストレスを減らす」ほど喜ばれる</h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  消耗品は地味に見えて、<strong>実は満足度が高い</strong>です。
                  理由は、置き場所が増え続けないからです。
                </p>
                <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded'>
                  <h4 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h4>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                    <li>香りは控えめ、迷うなら無香料寄せ</li>
                    <li>大容量すぎない（ストックが収納を圧迫しない）</li>
                    <li>使う場面が想像できる（手間が減るものが強い）</li>
                  </ul>
                </div>
              </div>

              {/* 体験 */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>🎫 体験ギフトは「予約しやすい」ほど勝つ</h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  <strong>体験は被りません</strong>。
                  ただし使いづらい体験は、行けずに終わります。
                </p>
                <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded'>
                  <h4 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h4>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                    <li>予約が難しすぎない</li>
                    <li>有効期限が短すぎない</li>
                    <li>移動負担が重すぎない</li>
                  </ul>
                </div>
              </div>

              {/* アップグレード */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>⬆️ アップグレードは「毎日使うもの」を狙う</h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  同棲や新生活では、生活の土台はすでにあります。
                  だからこそ、<strong>毎日使うものの質が上がると満足度が出ます</strong>。
                </p>
                <div className='bg-purple-50 border-l-4 border-purple-400 p-5 rounded'>
                  <h4 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h4>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                    <li>二人が必ず使うものに寄せる</li>
                    <li>量より質（大量セットは避ける）</li>
                    <li>無難なデザインに寄せる</li>
                  </ul>
                </div>
              </div>

              {/* 省スペース */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>📏 省スペースは「床に置かない」ほど外しにくい</h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  狭い部屋や収納が少ない家では、<strong>置き場所が最大の敵</strong>です。
                  省スペースは「小さい」だけでなく<strong>「しまわなくていい」設計</strong>が強いです。
                </p>
                <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                  <p className='text-gray-700 text-sm mb-2'>
                    詳しくは別記事で、間取り別にまとめています。
                  </p>
                  <Link
                    href='/wedding_celebration/space-saving-gifts'
                    className='text-pink-600 font-semibold hover:underline text-sm'
                  >
                    → 狭い部屋の新婚に贈る結婚祝い｜置き場所で困らない『省スペース』ギフト大全
                  </Link>
                </div>
              </div>

              {/* 外食派 */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>🍽️ 外食派ならキッチン家電より「段取りがラク」が刺さる</h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  料理をしない夫婦に調理家電を贈ると、使われず場所を取ることがあります。
                  <strong>外食や中食の生活導線に寄せた</strong>ほうが喜ばれます。
                </p>
                <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                  <p className='text-gray-700 text-sm mb-2'>
                    詳しくは別記事でまとめています。
                  </p>
                  <Link
                    href='/wedding_celebration/eating-out-couple-wedding-gift'
                    className='text-pink-600 font-semibold hover:underline text-sm'
                  >
                    → 料理しない夫婦に贈る結婚祝い｜キッチン家電より喜ばれる『外食派』ギフト
                  </Link>
                </div>
              </div>
            </section>

            {/* セクション6: 状況別早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🎯 状況別おすすめ早見表（相手の暮らしで最適解が変わる）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                同じ予算でも、<strong>暮らしに合うほど「気が利く」</strong>になります。
              </p>
              
              <div className='overflow-x-auto mb-6' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 text-sm' style={{ minWidth: '600px' }}>
                  <thead>
                    <tr className='bg-blue-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>相手の状況</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>失敗しやすいポイント</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>外しにくい設計</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>同棲カップル</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すでに揃っていて被る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>体験、アップグレード、消耗品</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>狭い部屋、収納少なめ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置けない、しまえない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>省スペース、消耗品、体験</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ペットがいる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>衛生、毛、誤飲のリスク</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無香料寄せ、消耗品、安全設計</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>妊娠中</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>体調、時間不足</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>時短、衛生、負担が減る設計</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>仕事が忙しい共働き</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家事が回らない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>メンテ負担削減、体験</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <p className='text-gray-700 text-sm mb-2'>
                  同棲カップルの被り対策は別記事が便利です。
                </p>
                <Link
                  href='/wedding_celebration/cohabiting-couple-wedding-gift'
                  className='text-pink-600 font-semibold hover:underline text-sm'
                >
                  → 同棲カップルに贈る結婚祝い｜もう揃ってる二人に「被らない」選び方
                </Link>
              </div>
            </section>

            {/* セクション7: マナー */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📝 結婚祝いのマナー（これだけ押さえれば失点しない）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                マナーは「完璧」より<strong>「失礼になりにくい最低ライン」を押さえる</strong>のが大事です。
              </p>

              {/* 渡す時期 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>📅 渡す時期の目安</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2'>
                  <li>直接渡すなら、式の1か月前〜1週間前が目安</li>
                  <li>式に招待されていない場合は、入籍報告を聞いてから早めが丁寧</li>
                  <li>直前は相手が忙しくなるので避けたほうが無難</li>
                </ul>
              </div>

              {/* 渡し方 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>🎁 渡し方の基本</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2'>
                  <li>手渡しが理想だが、配送でも失礼ではない</li>
                  <li>配送するなら、事前に一言連絡すると丁寧</li>
                  <li>大型や冷蔵冷凍は受け取り負担が増えるので注意</li>
                </ul>
              </div>

              {/* のし */}
              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>📌 のしは付けたほうがいい？</h3>
                <p className='text-gray-700 text-sm mb-3'>
                  <strong>迷ったら付けるのが無難</strong>です。
                  結婚祝いののしは、基本のルールを押さえれば難しくありません。
                </p>
                <p className='text-gray-700 text-sm mb-2'>
                  のしの早見表と手順は別記事にまとめています。
                </p>
                <Link
                  href='/wedding_celebration/noshi-guide'
                  className='text-pink-600 font-semibold hover:underline text-sm'
                >
                  → 結婚祝いの「のし」完全ガイド｜表書き・水引・内のし外のし・連名・郵送まで
                </Link>
              </div>
            </section>

            {/* セクション8: 被りとNG */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ⚠️ 被りやすい定番ギフトと、避けたいNG（最短で地雷回避）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                結婚祝いは<strong>「定番ほど被る」イベント</strong>です。
                被りと好み割れを避けるだけで、成功率が上がります。
              </p>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>被りやすい定番</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>調理家電、食器セット、タオル大量セット</li>
                  <li>鍋やフライパンのセット</li>
                  <li>香りが強いフレグランス系</li>
                  <li>大型インテリア</li>
                </ul>
              </div>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <p className='text-gray-700 text-sm mb-2'>
                  NGの考え方は、別記事で理由と代替案つきで整理しています。
                </p>
                <Link
                  href='/wedding_celebration/ng-gifts'
                  className='text-pink-600 font-semibold hover:underline text-sm'
                >
                  → 結婚祝いで贈ってはいけないNGギフト13選｜タブー理由と外さない代替案
                </Link>
              </div>
            </section>

            {/* セクション9: 確認テンプレ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💬 サプライズ感を残す確認テンプレ（これが一番効く）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                確認するときは、<strong>相手の負担を減らしたい姿勢</strong>で聞くとスムーズです。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-4'>テンプレ</h3>
                <div className='space-y-3'>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「被りたくないから、家電や食器はもう揃ってる？」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「物が増えすぎない方向にしたいんだけど、体験と消耗品だとどっちが嬉しい？」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「香りものは好みある？ 無難寄せにしようと思って」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「受け取りやすい曜日ある？ 冷蔵系は避けたい」</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed bg-yellow-50 p-4 rounded'>
                💡 この一言で、<strong>失敗の8割が消えます</strong>。
              </p>
            </section>

            {/* セクション10: 最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✨ 迷ったときの最終解：外さない組み合わせはこれ
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                最後まで迷ったら、次のどれかに寄せると外しにくいです。
              </p>

              <div className='space-y-4'>
                <div className='bg-green-50 p-5 rounded-lg border-l-4 border-green-400'>
                  <p className='text-gray-700 text-sm'>
                    <strong>消耗品（上質で無難寄せ）</strong> ＋ 短いメッセージ
                  </p>
                </div>
                <div className='bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400'>
                  <p className='text-gray-700 text-sm'>
                    <strong>体験（予約しやすい）</strong> ＋ のしで丁寧に
                  </p>
                </div>
                <div className='bg-purple-50 p-5 rounded-lg border-l-4 border-purple-400'>
                  <p className='text-gray-700 text-sm'>
                    <strong>アップグレード（毎日使うものを少数精鋭）</strong> ＋ 被り確認
                  </p>
                </div>
              </div>
            </section>

            {/* CTA2 */}
            <div className='bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-12'>
              <p className='text-lg font-bold mb-3'>結婚祝いギフトをカテゴリから探す</p>
              <Link
                href='/wedding_celebration'
                className='inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors'
              >
                結婚祝いギフトを探す
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
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 結婚式に招待されている場合、プレゼントも必要？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    基本はご祝儀が優先です。プレゼントは必須ではありません。贈るなら小さめで負担が少ないものや連名で一つが無難です。
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 結婚祝いの相場はいくら？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    友人は5000円〜10000円が目安です。親友や兄弟姉妹など近い関係は上がりますが、高額すぎると相手の内祝い負担も増えるので配慮すると丁寧です。
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. のしは付けたほうがいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    迷ったら付けるのが無難です。表書きや水引などの基本は別記事の早見表が便利です。
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 連名で贈るときのコツは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    一人あたりの負担を目安に合算し、ギフトは一つにまとめるとスマートです。のしの連名表記も早見表で確認できます。
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 宅配で結婚祝いを贈るのは失礼？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    失礼ではありません。事前に一言連絡し、受け取り負担が少ない形にすると丁寧です。
                  </p>
                </div>

                {/* Q6 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 被らない結婚祝いの結論は？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    カテゴリではなく設計で選ぶことです。体験、消耗品、アップグレード、省スペース、メンテ負担削減のどれかに寄せるほど外しにくいです。
                  </p>
                </div>

                {/* Q7 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 食器やタオルはダメ？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    ダメではありませんが被りやすいです。贈るなら量より質、少数精鋭、収納を増やさない形に寄せると安心です。
                  </p>
                </div>

                {/* Q8 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 何を贈るか決めきれないときは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    相手の暮らしに合わせて設計を選び、確認テンプレで被りと好み割れを避けると決めやすくなります。
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
