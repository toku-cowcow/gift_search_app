/**
 * 料理しない夫婦向け結婚祝い記事ページ（新バージョン）
 * 
 * SEO対応、FAQ JSON-LD埋め込み、早見表×2、CTA配置、内部リンク×2
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
      'name': '料理しない夫婦にキッチン家電を贈るのはやめたほうがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '使われない可能性が高く、置き場所の負担が増えるため避けるのが無難です。外食や中食の生活に刺さる方向が喜ばれやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '外食ギフトで失敗しないコツは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '使える店が多いこと、有効期限が短すぎないこと、予約難易度が高すぎないことが重要です。'
      }
    },
    {
      '@type': 'Question',
      'name': '家で食べる時間を上げるなら何がいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'キッチンではなくテーブル寄りが外しにくいです。少数精鋭で置き場所を取らないものが安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': '食べ物を贈るときの注意点は？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '受け取り負担と保存の負担が増えないことが大切です。迷ったら常温で日持ちし、小分けできる形が無難です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'サプライズで贈りたいけど確認したほうがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '確認したほうが成功率は上がります。聞き方を工夫すればサプライズ感を残しつつ外せます。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '料理しない夫婦に贈る結婚祝い｜キッチン家電より喜ばれる『外食派』ギフト',
  description: '料理しない夫婦への結婚祝いはキッチン家電より、外食・中食の生活に刺さる『負担が減る』ギフトが正解。食事券や予約のしやすさ、家で食べる時間の質を上げるアイテム、片付けの手間を減らす工夫まで深掘りで解説します。',
  keywords: ['結婚祝い', '料理しない', '外食派', 'キッチン家電', 'ギフト', '中食'],
  openGraph: {
    title: '料理しない夫婦に贈る結婚祝い｜キッチン家電より喜ばれる『外食派』ギフト',
    description: '料理しない夫婦への結婚祝いはキッチン家電より、外食・中食の生活に刺さる『負担が減る』ギフトが正解。食事券や予約のしやすさ、家で食べる時間の質を上げるアイテム、片付けの手間を減らす工夫まで深掘りで解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/eating-out-couple-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/eating-out-couple-wedding-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function EatingOutCoupleWeddingGiftArticle() {
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
            <span className='text-gray-800'>外食派向けギフト</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              料理しない夫婦に贈る結婚祝い｜キッチン家電より喜ばれる「外食派」ギフト
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                <strong>「結婚祝い＝キッチン家電」</strong>と思いがちですが、料理をしない夫婦には逆効果になることがあります。
              </p>
              <p className='mb-3'>
                使わない家電が増えると、置き場所が埋まり、片付けのストレスが増えるからです。
              </p>
              <p className='mb-3'>
                外食派の夫婦が本当に助かるのは<strong>「食の選択肢が増える」「予定が組みやすい」「家事負担が減る」</strong>ギフト。
              </p>
              <p className='mb-3'>
                この記事では、料理をしない夫婦の生活導線に合わせて、キッチン家電より喜ばれやすい結婚祝いを深掘りします。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>📋 この記事でわかること</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>料理しない夫婦の結婚祝いで起きがちな失敗</li>
                <li>外食派が喜ぶギフトの共通点（予定、疲労、家事負担）</li>
                <li>状況別おすすめギフト早見表</li>
                <li>キッチン家電以外の「本当に助かる」カテゴリ別アイデア</li>
                <li>避けたいギフト早見表（なぜ負担になるか）</li>
                <li>サプライズ感を残して確認する聞き方</li>
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

            {/* セクション1: キッチン家電が刺さりにくい理由 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🍳 料理しない夫婦にキッチン家電が刺さりにくい理由
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                料理しないのは、<strong>怠けているからではありません</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                生活の優先順位が<strong>「仕事」「移動」「外食」「休息」</strong>に寄っているだけです。
              </p>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-4'>外食派の現実</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>平日は帰宅が遅く、調理する余力がない</li>
                  <li>休日は外で食べるのが楽しみ</li>
                  <li>キッチンは最低限で回したい</li>
                  <li>片付けに時間を取られたくない</li>
                </ul>
              </div>

              <p className='text-gray-700 mb-4 leading-relaxed'>
                ここに家電や調理器具が増えると<strong>「使わないのに場所を取る」</strong>が起きます。
              </p>
              <p className='text-gray-700 leading-relaxed bg-pink-50 p-4 rounded'>
                💡 結婚祝いで大事なのは、<strong>相手の生活を良くすること</strong>です。
              </p>
            </section>

            {/* セクション2: まず結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✅ まず結論：外食派に刺さる結婚祝いの共通点は「予定が組める」「負担が減る」「自由度が高い」
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                料理しない夫婦に喜ばれやすいのは、次のどれかに当てはまるギフトです。
              </p>

              <div className='space-y-3 mb-6'>
                {[
                  '予約しやすい、使うタイミングを選べる',
                  '食事の選択肢が増える（外食も中食も）',
                  '食後の片付けや家事の手間が減る',
                  '置き場所を取らない',
                  '好みが割れにくい'
                ].map((item, i) => (
                  <div key={i} className='flex items-start gap-3 bg-blue-50 p-4 rounded-lg'>
                    <span className='text-pink-600 font-bold text-lg'>✓</span>
                    <p className='text-gray-700 text-sm pt-1'>{item}</p>
                  </div>
                ))}
              </div>

              <p className='text-gray-700 leading-relaxed bg-green-50 p-4 rounded'>
                💡 迷ったら<strong>「自由度」と「負担減」</strong>に寄せると外しにくいです。
              </p>
            </section>

            {/* セクション3: 早見表1 - 状況別おすすめ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📊 状況別おすすめギフト早見表（迷ったらここ）
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse border border-gray-300 text-sm'>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>状況</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>一番刺さる方向性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>例（イメージ）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>共働きで平日が忙しい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>食の時短と自由度</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使える店が多い食事チケット、予約しやすい体験</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>休日は外で過ごすタイプ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>お出かけの満足度</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>レストラン体験、カフェ時間を上げる体験</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家で食べる日もある</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家の食事の質を上げる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>テーブル周りの上質小物、片付けがラクなアイテム</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>生活リズムがバラバラ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>いつでも使える</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>有効期限が長い、日時を選べるギフト</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>新居が狭め、収納少なめ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>省スペース</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>小型、消耗する、収納いらず</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* セクション4: 深掘り1 - 食事系ギフト */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🍽️ 深掘り1｜一番失敗しにくいのは「使える店が多い」食事系ギフト
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                外食派にとって、<strong>食事は趣味であり休息</strong>です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                だから食事系は刺さりやすい一方、選び方を間違えると使いにくくなります。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>外しにくい選び方</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>使える店が多い、またはエリアを選ばない</li>
                  <li>予約の難易度が高すぎない</li>
                  <li>有効期限が短すぎない</li>
                  <li>二人で行きやすい価格帯に寄せる</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 避けたい落とし穴</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>予約が取りづらすぎる人気店限定</li>
                  <li>移動が大変な立地</li>
                  <li>期限が短くて予定が合わない</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-yellow-50 p-4 rounded'>
                💡 ポイントは<strong>「特別感」より「実際に使えるか」</strong>です。
              </p>
            </section>

            {/* セクション5: 深掘り2 - 中食 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🏪 深掘り2｜外食だけでなく「中食が強くなる」ギフトは生活がラクになる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                外食派でも、<strong>疲れた日は家で済ませたい</strong>ことがあります。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ここで助かるのが<strong>「買って帰る」「家で温める」「すぐ食べられる」</strong>方向です。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>外しにくい選び方</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>受け取りの負担が少ない</li>
                  <li>常温で管理できる、または日時指定しやすい</li>
                  <li>夫婦で分けやすい（小分け、個包装）</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 避けたい落とし穴</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>冷凍庫の容量を圧迫する量</li>
                  <li>受け取りが難しい時間帯指定</li>
                  <li>匂いが強すぎる好みの分かれる味</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-green-50 p-4 rounded'>
                💡 料理しない夫婦に大事なのは、調理の手間ではなく<strong>「段取りの手間」を減らすこと</strong>です。
              </p>
            </section>

            {/* セクション6: 深掘り3 - テーブル寄り */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🪑 深掘り3｜家で食べる時間の質を上げる「テーブル寄り」ギフトは満足度が高い
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                料理をしない夫婦でも、<strong>食べる時間は必ずあります</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                キッチンではなく<strong>「テーブル」に寄せる</strong>と、生活導線に合いやすいです。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>刺さりやすい方向性</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>置き場所を取らない上質な小物</li>
                  <li>生活感が出にくいデザイン</li>
                  <li>使う頻度が高いもの</li>
                </ul>
              </div>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>例（イメージ）</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>グラス、マグ、カトラリーなどの少数精鋭</li>
                  <li>食卓が整う小型アイテム</li>
                  <li>写真に残しても気分が上がるもの</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 避けたい落とし穴</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>大量セットで収納が埋まる</li>
                  <li>割れやすく管理が面倒なもの</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-purple-50 p-4 rounded'>
                💡 外食派ほど<strong>「家での一食が特別になる」ギフト</strong>が効きます。
              </p>
            </section>

            {/* セクション7: 深掘り4 - 片付け */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🧽 深掘り4｜食後の片付け負担が減ると、外食派の満足度は上がる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                料理をしない夫婦でも、<strong>食後の片付けは発生します</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                だから<strong>「片付けをラクにする」方向</strong>は実はかなり実用的です。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>外しにくい考え方</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>誰が使っても同じ結果になる</li>
                  <li>説明不要で使える</li>
                  <li>収納が増えない</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-yellow-50 p-4 rounded'>
                💡 ここは派手さより、<strong>地味に効くほうが喜ばれやすい</strong>です。
              </p>
            </section>

            {/* セクション8: 早見表2 - 避けたいギフト */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ⚠️ 避けたいギフト早見表（外食派には負担になりやすい）
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse border border-gray-300 text-sm'>
                  <thead>
                    <tr className='bg-red-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>避けたいギフト</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>負担になる理由</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>代替の方向性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>キッチン家電（調理系）</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使わない、場所を取る、出すのが面倒</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>食事体験、テーブル寄り、時短寄り</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>鍋やフライパンのセット</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>そもそも使わない、収納が厳しい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>少数精鋭のテーブル小物</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>調味料やスパイスの詰め合わせ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使い切れない、好みが割れる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>個包装で食べ切れる中食寄り</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大量の食器セット</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>収納が埋まる、被る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>少数精鋭、置き場所がいらない</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>期限が短い生もの</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>受け取りと予定が合わない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>日持ち、日時指定しやすい</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-gray-700 mt-6 mb-4 leading-relaxed'>
                結婚祝い全体のNG観点は別記事でも整理しています。
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <Link
                  href='/wedding_celebration/ng-gifts'
                  className='text-pink-600 font-semibold hover:underline'
                >
                  → 結婚祝いで贈ってはいけないNGギフト13選｜タブー理由と外さない代替案
                </Link>
              </div>
            </section>

            {/* セクション9: 聞き方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💬 サプライズ感を残して外食派か確認する聞き方（テンプレ）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                料理しない夫婦ほど、<strong>確認のひと言で成功率が上がります</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ただし、聞き方を間違えると気を遣わせます。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-4'>テンプレ</h3>
                <div className='space-y-3'>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「結婚祝い、家のもの増やしたくないよね？外食とか体験寄りがいい？」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「二人の休日って、家と外だとどっち多い？」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「使いやすい形にしたいんだけど、受け取りやすい曜日ある？」</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed'>
                💡 この3つで、<strong>外食派向けの最適解</strong>に寄せられます。
              </p>
            </section>

            {/* セクション10: のしへの内部リンク */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📝 のしや包装で迷ったら
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                結婚祝いは中身が決まっても、<strong>のしで迷う人が多い</strong>です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                早見表と手順は別記事にまとめています。
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <Link
                  href='/wedding_celebration/noshi-guide'
                  className='text-pink-600 font-semibold hover:underline'
                >
                  → 結婚祝いの「のし」完全ガイド｜表書き・水引・内のし外のし・連名・郵送まで
                </Link>
              </div>
            </section>

            {/* セクション11: 迷ったときの結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✨ 迷ったときの結論：外食派には「使える」「予定が組める」「負担が減る」
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                料理しない夫婦に刺さる結婚祝いは、<strong>キッチンを充実させることではありません</strong>。
              </p>
              <p className='text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg border-2 border-pink-300'>
                💡 <strong>食の時間をラクにして、楽しくして、生活の負担を減らすこと</strong>です。
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

            {/* FAQ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-pink-500'>
                ❓ よくある質問（FAQ）
              </h2>

              <div className='space-y-6'>
                {/* Q1 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 料理しない夫婦にキッチン家電を贈るのはやめたほうがいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    使われない可能性が高く、置き場所の負担が増えるため避けるのが無難です。外食や中食の生活に刺さる方向が喜ばれやすいです。
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 外食ギフトで失敗しないコツは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    使える店が多いこと、有効期限が短すぎないこと、予約難易度が高すぎないことが重要です。
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 家で食べる時間を上げるなら何がいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    キッチンではなくテーブル寄りが外しにくいです。少数精鋭で置き場所を取らないものが安心です。
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 食べ物を贈るときの注意点は？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    受け取り負担と保存の負担が増えないことが大切です。迷ったら常温で日持ちし、小分けできる形が無難です。
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. サプライズで贈りたいけど確認したほうがいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    確認したほうが成功率は上がります。聞き方を工夫すればサプライズ感を残しつつ外せます。
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
