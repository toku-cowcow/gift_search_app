/**
 * 結婚祝いのし完全ガイド記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、CTA配置、内部リンク、表組み×2
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
      'name': '結婚祝いの表書きは「御祝」と「寿」どっちが無難？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '迷ったら「御祝」が万能です。より結婚祝いらしさを出したい場合は「寿」も使いやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '結婚祝いの水引は蝶結びでもいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '一般的には結婚祝いは「結び切り」系が無難です。迷ったら結婚祝い用を選ぶと安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': '内のしと外のし、配送ならどっち？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '配送なら内のしが無難です。汚れにくく、丁寧に見せやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '夫婦連名で名前を書くときの書き方は？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '受け取る側が分かりやすい形が正解です。迷ったら夫のフルネーム＋妻の名前に寄せると整いやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '友人4人以上で贈る場合ののしはどうする？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '代表者名＋「外一同」にして、別紙に全員の名前を書くと分かりやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '郵送で結婚祝いを贈るのは失礼？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '失礼ではありません。事前に一言連絡し、内のしと短いメッセージを添えると丁寧です。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '結婚祝いの「のし」完全ガイド｜表書き・水引・内のし外のし・連名・郵送まで',
  description: '結婚祝いののしで迷ったらこの記事。表書き（御祝/寿/御結婚御祝）の使い分け、水引の種類（結び切り）、内のし外のし、名前の書き方（連名・家族・職場）や郵送のマナーまで分かりやすく解説します。',
  keywords: ['結婚祝い', 'のし', '表書き', '水引', '内のし', '外のし', '連名'],
  openGraph: {
    title: '結婚祝いの「のし」完全ガイド｜表書き・水引・内のし外のし・連名・郵送まで',
    description: '結婚祝いののしで迷ったらこの記事。表書き（御祝/寿/御結婚御祝）の使い分け、水引の種類（結び切り）、内のし外のし、名前の書き方（連名・家族・職場）や郵送のマナーまで分かりやすく解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/noshi-guide',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/noshi-guide',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function WeddingCelebrationNoshiGuideArticle() {
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
            <span className='text-gray-800'>のし完全ガイド</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              結婚祝いの「のし」完全ガイド｜表書き・水引・内のし外のし・連名・郵送まで
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                結婚祝いを選べても、最後に手が止まりやすいのが<strong>「のし」</strong>です。
              </p>
              <p className='mb-3'>
                「表書きって何が正解？」「水引は蝶結びでいい？」「内のし外のしはどっち？」「連名はどう書く？」など、細かい不安が一気に出てきます。
              </p>
              <p className='mb-3'>
                でも、のしはルールを丸暗記しなくても大丈夫です。
              </p>
              <p className='mb-3'>
                結婚祝いで外さないポイントは、<strong>たったの3つ</strong>。<br />
                「表書き」「水引」「名前（連名）」を押さえれば、失礼になりにくく、丁寧さも伝わります。
              </p>
              <p className='mb-3'>
                この記事では、結婚祝いののしを最短で正しく整えるために、<strong>早見表と手順で分かりやすくまとめます</strong>。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>📋 この記事でわかること</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>結婚祝いののしで必ず押さえる3ポイント</li>
                <li>表書きの正解（御祝、寿、御結婚御祝の使い分け）</li>
                <li>水引は何を選ぶべきか（蝶結びがNGな理由）</li>
                <li>内のし外のしの選び方（手渡し、配送）</li>
                <li>連名の書き方（夫婦、家族、職場）</li>
                <li>郵送するときのマナーと添え状の考え方</li>
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
                ⚡ まず結論：結婚祝いののしは「表書き・水引・名前」で9割決まる
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                結婚祝いののしは、難しそうに見えても、実は<strong>判断ポイントが少ない</strong>です。
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>押さえるべき3つ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li><strong>表書き：</strong>何の目的で贈るかを伝える</li>
                  <li><strong>水引：</strong>結婚祝いは「結び切り」系を選ぶ</li>
                  <li><strong>名前：</strong>誰からの贈り物かを分かるようにする</li>
                </ul>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed'>
                この3つが整うと、のしの印象は一気に丁寧になります。
              </p>
            </section>

            {/* セクション2: 表書き */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✍️ 結婚祝いの「表書き」何が正解？（迷ったらこの順）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                結婚祝いの表書きは、基本的に次のどれかを選べば失礼になりにくいです。
              </p>

              <div className='bg-blue-50 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>よく使われる表書き</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>「御祝」</li>
                  <li>「寿」</li>
                  <li>「御結婚御祝」</li>
                </ul>
              </div>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>迷ったときの考え方</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>迷ったら<strong>「御祝」が万能</strong></li>
                  <li>きちんと感を出したいなら<strong>「寿」</strong></li>
                  <li>結婚に特化して明確にしたいなら<strong>「御結婚御祝」</strong></li>
                </ul>
              </div>

              {/* 表書き早見表 */}
              <h3 className='text-xl font-bold text-gray-800 mb-4'>表書きの使い分け早見表</h3>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full border-collapse bg-white'>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>表書き</th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>使う場面</th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>迷ったらこれ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>御祝</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>結婚祝い全般で使える万能</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>これが一番安全</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>寿</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>結婚祝いらしさ、かしこまった印象</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>目上にも使いやすい</td>
                    </tr>
                    <tr>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>御結婚御祝</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>結婚祝いだと明確にしたい</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>他の祝いと混ざりそうな時</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='bg-red-50 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3 text-sm'>注意点</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>文章を長くしすぎない</li>
                  <li>迷ったら「御祝」に戻す</li>
                </ul>
              </div>
            </section>

            {/* セクション3: 水引 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🎀 水引は「結び切り」が基本（蝶結びは避ける）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                水引は見た目だけでなく、<strong>意味がセット</strong>になっています。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                結婚は「一度きりが望ましいお祝い」なので、ほどけて結び直せる「蝶結び」は一般的に避けるのが無難です。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>結婚祝いで選びやすい水引</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li><strong>「結び切り」</strong></li>
                  <li><strong>「あわじ結び」</strong></li>
                </ul>
              </div>

              <p className='text-gray-700 mb-4 leading-relaxed'>
                色は一般的に<strong>紅白が基本</strong>です。
              </p>
              <p className='text-gray-700 leading-relaxed'>
                迷ったら、店舗や通販で<strong>「結婚祝い用」と書かれているものを選ぶと安心</strong>です。
              </p>
            </section>

            {/* セクション4: 内のし外のし */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📦 内のし外のしはどっち？（結婚祝いの失敗しない決め方）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                内のし外のしは、どちらが絶対正解というより<strong>「渡し方」で決める</strong>とスムーズです。
              </p>

              <div className='space-y-6'>
                {/* 外のし */}
                <div className='bg-blue-50 p-6 rounded'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>外のしが向く</h3>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                    <li>手渡しで贈る</li>
                    <li>贈り物であることを分かりやすくしたい</li>
                  </ul>
                </div>

                {/* 内のし */}
                <div className='bg-green-50 p-6 rounded'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>内のしが向く</h3>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                    <li>配送で贈る（のしが汚れにくい）</li>
                    <li>控えめに丁寧に見せたい</li>
                  </ul>
                </div>
              </div>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded mt-6'>
                <h3 className='font-semibold text-gray-800 mb-2 text-sm'>迷ったら</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm'>
                  <li><strong>配送なら内のし</strong></li>
                  <li><strong>手渡しなら外のし</strong></li>
                </ul>
              </div>
            </section>

            {/* セクション5: 名前の書き方（連名早見表） */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                👥 名前の書き方（個人・夫婦・家族・職場）を最短で理解する
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                次に迷うのが<strong>「誰の名前を書くか」</strong>です。<br />
                ここも迷ったら<strong>「受け取った側が分かりやすい」</strong>ルールでOKです。
              </p>

              <div className='bg-gray-50 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>基本</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>個人ならフルネーム</li>
                  <li>夫婦なら連名でもOK</li>
                  <li>家族は名字のみでも成立しやすい</li>
                  <li>職場は人数で書き方を変える</li>
                </ul>
              </div>

              {/* 連名早見表 */}
              <h3 className='text-xl font-bold text-gray-800 mb-4'>連名の書き方早見表</h3>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full border-collapse bg-white'>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>贈る人</th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>書き方の目安</th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>失敗しにくいコツ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>夫婦</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>夫のフルネーム＋妻の名前（または夫婦連名）</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>受け取る側が誰か分かる形に</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>家族</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>「名字のみ」または代表者名</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>迷ったら名字のみが無難</td>
                    </tr>
                    <tr>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>友人2〜3人</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>右から順に連名</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>右側が目上になりやすい意識</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>4人以上</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>代表者名＋「外一同」</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>別紙に全員の名前を書く</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3 text-sm'>補足</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>名前が長くて入りきらない場合は、無理に詰めず別紙を活用する</li>
                  <li>目上の人が混ざる場合は並び順に配慮する</li>
                </ul>
              </div>
            </section>

            {/* セクション6: のしの下は誰の名前 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📝 のしの下に書くのは誰の名前？「贈り主」を正しく伝える
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                のしの下段は<strong>「贈り主」</strong>です。<br />
                ここが曖昧だと、受け取った側が内祝いの手配で困ることがあります。
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>失敗しにくい考え方</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>内祝いの宛名になると考える</li>
                  <li>相手が間違えずに分かる表記にする</li>
                  <li>迷ったらフルネームに寄せる</li>
                </ul>
              </div>
            </section>

            {/* セクション7: 郵送する場合 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📮 結婚祝いを郵送する場合のマナー（忙しい人向け手順）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                郵送は失礼ではありません。<br />
                大事なのは<strong>「唐突に届く」にならないよう、ひとこと気持ちを添えること</strong>です。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>手順（迷ったらこの順）</h3>
                <ol className='list-decimal list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>事前に一言連絡（受け取れるタイミングを確認できると理想）</li>
                  <li>配送は内のしが無難（汚れ防止）</li>
                  <li>メッセージカードを短く添える</li>
                  <li>相手の受け取り負担が増えるものは避ける（大きすぎる、要冷蔵など）</li>
                </ol>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-5'>
                <h3 className='font-semibold text-gray-800 mb-3'>短い添え文の例</h3>
                <div className='space-y-3'>
                  <div className='bg-gray-50 p-3 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「ご結婚おめでとうございます。ささやかですがお祝いの気持ちです。」</p>
                  </div>
                  <div className='bg-gray-50 p-3 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「お二人の新生活が素敵な毎日になりますように。」</p>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション8: 迷ったときの最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✨ 迷ったときの最終解
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ここまで迷っても、結論はシンプルです。
              </p>

              <div className='bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg border-2 border-pink-300'>
                <ul className='text-gray-700 space-y-3 text-sm'>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>✓</span>
                    <span>のし袋やのし紙は<strong>「結婚祝い用」を選ぶ</strong></span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>✓</span>
                    <span>表書きは<strong>「御祝」</strong></span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>✓</span>
                    <span>水引は<strong>「結び切り」</strong></span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>✓</span>
                    <span>名前は<strong>「相手が分かる形」</strong>で</span>
                  </li>
                </ul>
              </div>

              <p className='text-gray-700 mt-6 leading-relaxed'>
                ギフト選びに戻りたい人は、カテゴリから探すのが最短です。
              </p>
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

            {/* 関連記事 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🔗 関連記事
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                同棲カップル向けなど、別切り口の結婚祝い記事がある場合は導線を入れてください。
              </p>
              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <p className='text-gray-700 text-sm'>
                  {/* TODO: 既存の結婚祝い記事へのリンクを追加 */}
                  {/* 例: <Link href='/wedding_celebration/cohabiting-couple-wedding-gift'>同棲カップルへの結婚祝い</Link> */}
                  関連記事は準備中です
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-pink-500'>
                ❓ よくある質問（FAQ）
              </h2>

              <div className='space-y-6'>
                {/* Q1 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 結婚祝いの表書きは「御祝」と「寿」どっちが無難？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    迷ったら「御祝」が万能です。より結婚祝いらしさを出したい場合は「寿」も使いやすいです。
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 結婚祝いの水引は蝶結びでもいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    一般的には結婚祝いは「結び切り」系が無難です。迷ったら結婚祝い用を選ぶと安心です。
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 内のしと外のし、配送ならどっち？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    配送なら内のしが無難です。汚れにくく、丁寧に見せやすいです。
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 夫婦連名で名前を書くときの書き方は？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    受け取る側が分かりやすい形が正解です。迷ったら夫のフルネーム＋妻の名前に寄せると整いやすいです。
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 友人4人以上で贈る場合ののしはどうする？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    代表者名＋「外一同」にして、別紙に全員の名前を書くと分かりやすいです。
                  </p>
                </div>

                {/* Q6 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 郵送で結婚祝いを贈るのは失礼？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    失礼ではありません。事前に一言連絡し、内のしと短いメッセージを添えると丁寧です。
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
