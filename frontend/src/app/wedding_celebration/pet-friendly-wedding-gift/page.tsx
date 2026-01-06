/**
 * ペットがいる夫婦向け結婚祝い記事ページ（新バージョン）
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
      'name': 'ペットがいる夫婦の結婚祝いで一番外さないのは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '毛対策と衛生寄せの消耗品が外しにくいです。誰でも使えて、在庫になっても困りにくいからです。'
      }
    },
    {
      '@type': 'Question',
      'name': 'ペット用品を贈ってもいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '確認できるなら喜ばれやすいです。分からない場合は、毛・衛生・収納など生活寄せのほうが安全です。'
      }
    },
    {
      '@type': 'Question',
      'name': '香りのあるギフトは避けたほうがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '避けたほうが無難です。好みが割れるうえ、ペットが嫌がる場合もあるため、無香料寄せが安全です。'
      }
    },
    {
      '@type': 'Question',
      'name': '猫がいる家で特に気をつけることは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '落とされやすい割れ物や、誤飲につながる細いパーツが多い雑貨は避けるのが無難です。'
      }
    },
    {
      '@type': 'Question',
      'name': '犬がいる家で特に助かる方向性は？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '散歩後の汚れ対策や、玄関周りの清掃、抜け毛の時短に効くギフトが助かりやすいです。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: 'ペットがいる夫婦に贈る結婚祝い｜犬猫のいる家で本当に助かるギフト',
  description: '犬猫のいる家の結婚祝いは、毛・におい・衛生・誤飲リスク・掃除頻度を前提に選ぶと外さない。ペットと暮らす新生活で本当に助かる時短・消耗品・安全設計のギフトを深掘りで解説します。',
  keywords: ['結婚祝い', 'ペット', '犬', '猫', 'ギフト', '毛対策', '衛生'],
  openGraph: {
    title: 'ペットがいる夫婦に贈る結婚祝い｜犬猫のいる家で本当に助かるギフト',
    description: '犬猫のいる家の結婚祝いは、毛・におい・衛生・誤飲リスク・掃除頻度を前提に選ぶと外さない。ペットと暮らす新生活で本当に助かる時短・消耗品・安全設計のギフトを深掘りで解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/pet-friendly-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/pet-friendly-wedding-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function PetFriendlyWeddingGiftArticle() {
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
            <span className='text-gray-800'>ペット向けギフト</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              ペットがいる夫婦に贈る結婚祝い｜犬猫のいる家で本当に助かるギフト
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                ペットがいる夫婦への結婚祝いは、普通の結婚祝いよりも<strong>「生活の現実」に寄せるほど</strong>喜ばれます。
              </p>
              <p className='mb-3'>
                理由はシンプルで、犬猫がいる家は<strong>「毛」「におい」「衛生」「誤飲リスク」「掃除頻度」</strong>が日常の前提だから。
              </p>
              <p className='mb-3'>
                新居が整う前に物が増えると、片付けが一気に難しくなります。
              </p>
              <p className='mb-3'>
                だからこそ、映えよりも<strong>「今日から助かる」「安全」「消耗する」「負担が増えない」</strong>が強いです。
              </p>
              <p className='mb-3'>
                この記事では、犬猫のいる家で本当に使われるギフトを、生活シーンから逆算して深掘りします。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>📋 この記事でわかること</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>ペットがいる家の結婚祝いが難しい理由</li>
                <li>犬の家と猫の家で違う「困りごと」</li>
                <li>本当に助かるギフトの共通点（時短・消耗品・安全・収納）</li>
                <li>避けたいギフト（NG理由と代替案）</li>
                <li>サプライズ感を残しつつ確認する聞き方</li>
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

            {/* セクション1: 何が違う？ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🐾 ペットがいる家の結婚祝いは何が違う？「家が散らかる理由」が増える
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                犬猫がいる家は、<strong>暮らしの難易度が少し上がります</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                結婚して新生活が始まると、そこに「来客対応」「家事分担」「収納の再設計」も乗ってきます。
              </p>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-4'>ペットがいる家の現実</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>毛が毎日出るので、掃除の頻度が上がる</li>
                  <li>トイレ周りは衛生とにおいの対策が必要</li>
                  <li>誤飲やいたずらがある前提で、置けないものが増える</li>
                  <li>引っ越し直後は片付けが追いつかず、床に物が出やすい</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-pink-50 p-4 rounded'>
                💡 つまり、結婚祝いで喜ばれるのは<strong>「生活の障害を減らすもの」</strong>です。
              </p>
            </section>

            {/* セクション2: 犬と猫の違い */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🐕🐈 犬の家と猫の家で違う「助かるポイント」
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                同じペットでも、<strong>困りごとの比重が少し違います</strong>。<br />
                ギフト選びは、ここを押さえると外しにくいです。
              </p>

              {/* 犬の家 */}
              <div className='mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400'>
                <h3 className='text-xl font-bold text-gray-800 mb-4'>🐕 犬の家で起きやすいこと</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2'>
                  <li>散歩後の足拭き、玄関周りの汚れ</li>
                  <li>抜け毛の量と範囲が広い</li>
                  <li>体臭や外のにおいがつきやすい</li>
                  <li>来客時の動線（玄関、リビング）がバタつきやすい</li>
                </ul>
              </div>

              {/* 猫の家 */}
              <div className='mb-6 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400'>
                <h3 className='text-xl font-bold text-gray-800 mb-4'>🐈 猫の家で起きやすいこと</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2'>
                  <li>トイレ周りのにおいと砂の飛び散り</li>
                  <li>毛が細かく舞いやすい</li>
                  <li>高い場所に登るので、置き物が危ない</li>
                  <li>いたずらや誤飲（ひも、袋、細いパーツ）が起きやすい</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-green-50 p-4 rounded'>
                💡 迷ったら<strong>「毛と衛生」に効くギフト</strong>に寄せると、犬猫どちらにも刺さりやすいです。
              </p>
            </section>

            {/* セクション3: まず結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✅ まず結論：ペットがいる夫婦に気が利くギフトの共通点
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                外さない共通点はこの4つです。
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                {[
                  { icon: '⚡', title: 'すぐ使える', desc: '（設置や設定が難しくない）' },
                  { icon: '🔄', title: '消耗する', desc: '（在庫になっても困りにくい）' },
                  { icon: '🛡️', title: '安全', desc: '（誤飲やいたずらのリスクが低い）' },
                  { icon: '📦', title: '置き場所を取らない', desc: '（収納の負担が増えない）' }
                ].map((item, i) => (
                  <div key={i} className='bg-gradient-to-r from-blue-50 to-pink-50 p-5 rounded-lg border-2 border-pink-200'>
                    <div className='flex items-start gap-3'>
                      <span className='text-2xl'>{item.icon}</span>
                      <div>
                        <p className='font-bold text-gray-800 mb-1'>{item.title}</p>
                        <p className='text-sm text-gray-600'>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className='text-gray-700 leading-relaxed bg-blue-50 p-4 rounded'>
                💡 この条件を満たすほど<strong>「本当に助かる」</strong>になりやすいです。
              </p>
            </section>

            {/* セクション4: 早見表1 - 状況別おすすめ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📊 状況別おすすめギフト早見表（迷ったらここ）
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse border border-gray-300 text-sm'>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>状況</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>一番助かる方向性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>例（イメージ）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>抜け毛が多い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>毛対策の時短</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>粘着クリーナー、洗濯用の毛対策、掃除用消耗品</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>トイレ周りのにおいが気になる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>におい対策</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無香料寄せの消臭、トイレ周りの衛生消耗品</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>引っ越し直後で床に物が出やすい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>収納と動線</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>小型でフタ付きの収納、ラベルで整理できる箱</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>共働きで掃除が追いつかない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家事の負担軽減</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使い捨て清掃系、さっと使える拭き取り系</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>来客が多い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>見た目と実用の両立</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>玄関周りの清掃アイテム、シンプルな収納</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* セクション5: 深掘り1 - 毛対策 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🧹 深掘り1｜毛対策は「掃除機より先に消耗品」が助かる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                毛対策でいきなり大型家電に行くと、<strong>被りや置き場所問題</strong>が起きやすいです。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                結婚祝いで外しにくいのは<strong>「家のどこにでも置けて、誰でも使える消耗品」</strong>です。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>使う場所が想像できる（ソファ、カーペット、服）</li>
                  <li>置き場所を取らない</li>
                  <li>使い方が説明不要</li>
                </ul>
              </div>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>当たりやすい方向性</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>粘着系の消耗品（補充ができるもの）</li>
                  <li>洗濯で毛を減らす方向の消耗品</li>
                  <li>玄関や車内など、毛がたまりやすい場所向けの小物</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 避けたい落とし穴</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>メンテが重いもの</li>
                  <li>大きくて収納が必要なもの</li>
                </ul>
              </div>
            </section>

            {/* セクション6: 深掘り2 - におい対策 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                👃 深掘り2｜におい対策は「無香料寄せ」が最も安全
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                ペットのにおい対策は、<strong>香りで上書きすると好みが割れます</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                さらに妊娠の可能性がある家庭や、来客の多い家庭では、香りが強いと逆効果になりがちです。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>外しにくい選び方</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>無香料、香り控えめ</li>
                  <li>置き型よりも、使う時だけ使えるタイプを混ぜる</li>
                  <li>トイレ周りに使える設計</li>
                </ul>
              </div>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>犬猫どちらにも刺さる理由</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>香りの好み問題を回避できる</li>
                  <li>来客時に気まずくなりにくい</li>
                  <li>ペット自身がにおいに敏感でも安心</li>
                </ul>
              </div>
            </section>

            {/* セクション7: 深掘り3 - 衛生 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🧼 深掘り3｜衛生は「手間が増えない」ほど喜ばれる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                ペットがいる家は<strong>掃除の回数が増えます</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                だから衛生系は、性能より<strong>「手間が増えない」ことが価値</strong>になります。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>当たりやすい方向性</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>使い捨てで清潔を保てるもの</li>
                  <li>さっと拭ける、すぐ捨てられる</li>
                  <li>ストックしても困りにくい消耗品</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 避けたい落とし穴</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>使い方が複雑で続かない</li>
                  <li>収納場所を圧迫する大容量すぎるセット</li>
                </ul>
              </div>
            </section>

            {/* セクション8: 深掘り4 - 収納 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📦 深掘り4｜収納は「フタ付き」「倒れにくい」「誤飲しにくい」が正義
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                猫は高い場所に登ります。<br />
                犬は床のものをくわえます。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                つまり、ペットがいる家の収納は<strong>「ペット対策込み」で選ぶほど助かります</strong>。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>外しにくい収納の条件</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>フタ付きで中身が見えすぎない</li>
                  <li>倒れにくい、軽すぎない</li>
                  <li>小さいパーツが飛び散らない設計</li>
                </ul>
              </div>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>おすすめの使い道（イメージ）</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>玄関の散歩グッズ</li>
                  <li>お手入れグッズ</li>
                  <li>来客時に一時退避する小物</li>
                </ul>
              </div>
            </section>

            {/* セクション9: 深掘り5 - 来客対応 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🚪 深掘り5｜来客対応に効くのは「玄関とリビングの時短」
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                ペットがいる家は、<strong>来客前にやることが増えます</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                だから「来客のために整える」方向性のギフトは、実用性が高くインプレッションも取りやすいテーマです。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>当たりやすい考え方</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>玄関の泥、毛、においに対応できる</li>
                  <li>リビングの毛を短時間で整えられる</li>
                  <li>片付けが早い（しまう場所が決まる）</li>
                </ul>
              </div>
            </section>

            {/* セクション10: 早見表2 - 避けたいギフト */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ⚠️ 避けたいギフト早見表（NG理由と代替案）
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse border border-gray-300 text-sm'>
                  <thead>
                    <tr className='bg-red-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>避けたいギフト</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>NGになりやすい理由</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>代替案（安全策）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>香りが強いルームフレグランス</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みが割れる、ペットが嫌がる場合がある</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無香料寄せの消臭、衛生消耗品</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ガラスの置き物、割れ物インテリア</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>猫が落とす、犬がぶつかる、片付けが増える</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>フタ付き収納、小型で丈夫な素材</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>細いひもや小物が多い雑貨</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>誤飲リスク、散らかりやすい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>シンプルでパーツが少ない実用品</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大型家電</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>被りやすい、置き場所が必要</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消耗品、掃除や衛生の時短アイテム</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ペット用品を突然選ぶ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みやサイズ、流儀が強い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>事前確認してから、または生活寄せにする</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-gray-700 mt-6 mb-4 leading-relaxed'>
                結婚祝い全体のNGを整理したい場合は、別記事も参考にしてください。
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

            {/* セクション11: ペット用品 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🎁 ペット用品を結婚祝いで贈っていい？結論は「確認できるなら強い」
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                ペット用品は<strong>刺さると最高</strong>ですが、地雷もあります。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                理由は<strong>「流儀が家庭ごとに違う」</strong>からです。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-4'>贈っても喜ばれやすいケース</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2'>
                  <li>すでに使っているタイプが分かる</li>
                  <li>消耗品で、在庫になっても困りにくい</li>
                  <li>ペットのサイズや好みが確実に分かる</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-yellow-50 p-4 rounded'>
                💡 確認が難しいなら、新生活にも効く<strong>「毛・衛生・収納」のほうが安全</strong>です。
              </p>
            </section>

            {/* セクション12: 聞き方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💬 サプライズ感を残して確認する聞き方（テンプレ）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                ペットがいる家は、<strong>確認したほうが成功率が上がります</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ただし、聞き方を間違えると気を遣わせます。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-4'>テンプレ</h3>
                <div className='space-y-3'>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「ペットがいると助かる系にしたいんだけど、香りものは苦手ある？」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「毛対策か衛生系に寄せたいんだけど、普段困ってることある？」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「置き場所取らないものにしたいんだけど、新居は収納どう？」</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed'>
                💡 この3つで、<strong>方向性がほぼ決まります</strong>。
              </p>
            </section>

            {/* セクション13: のしへの内部リンク */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📝 のしや包装で迷ったら
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                結婚祝いは、<strong>のしで迷う人が多い</strong>です。
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

            {/* セクション14: 迷ったときの結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✨ 迷ったときの結論：ペットがいる夫婦には「毛・衛生・無香料・フタ付き収納」が強い
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                犬猫のいる家は、<strong>片付けと清潔のハードルが上がります</strong>。
              </p>
              <p className='text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg border-2 border-pink-300'>
                💡 だからこそ<strong>「生活の障害を減らすギフト」が最も気が利きます</strong>。
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
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. ペットがいる夫婦の結婚祝いで一番外さないのは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    毛対策と衛生寄せの消耗品が外しにくいです。誰でも使えて、在庫になっても困りにくいからです。
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. ペット用品を贈ってもいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    確認できるなら喜ばれやすいです。分からない場合は、毛・衛生・収納など生活寄せのほうが安全です。
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 香りのあるギフトは避けたほうがいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    避けたほうが無難です。好みが割れるうえ、ペットが嫌がる場合もあるため、無香料寄せが安全です。
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 猫がいる家で特に気をつけることは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    落とされやすい割れ物や、誤飲につながる細いパーツが多い雑貨は避けるのが無難です。
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 犬がいる家で特に助かる方向性は？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    散歩後の汚れ対策や、玄関周りの清掃、抜け毛の時短に効くギフトが助かりやすいです。
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
