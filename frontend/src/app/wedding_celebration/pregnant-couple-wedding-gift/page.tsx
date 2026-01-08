/**
 * 妊娠中カップル向け結婚祝い記事ページ（新バージョン）
 * 
 * SEO対応、FAQ JSON-LD埋め込み、早見表、CTA配置、内部リンク×2
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
      'name': '妊娠中カップルへの結婚祝いで一番外さないのは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '時短・消耗品・衛生寄せが外しにくいです。置き場所を取らず、負担が残りにくいものが安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'つわりがある相手に食べ物を贈ってもいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '好みが日によって変わるため、常温保存で小分けできるものや、匂いが強すぎないものが無難です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'ベビー用品を結婚祝いで贈るのは早い？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '相手の方針や好みがあるので、事前確認なしのベビー用品はリスクがあります。迷うなら新生活にも使える衛生・時短寄せが安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': '遠距離で配送する場合は何に注意する？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '受け取り負担が増えないことが最優先です。大きすぎない、冷蔵冷凍は避ける、内のしにするなどが無難です。'
      }
    },
    {
      '@type': 'Question',
      'name': '妊娠中カップルに避けたほうがいいギフトは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '香りが強いもの、大型インテリア、手入れが必要なもの、受け取りが難しい生ものは負担になりやすいです。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '妊娠中カップルの結婚祝い｜新生活と出産準備を両方助ける『気が利く』ギフト',
  description: '妊娠中の結婚は新生活と出産準備が同時進行。体調・時間・家事負担・衛生・収納の悩みに効く結婚祝いを、実用品・消耗品・時短・体験の切り口で深掘り。避けたい落とし穴や聞き方のコツまでまとめます。',
  keywords: ['結婚祝い', '妊娠中', '授かり婚', 'ギフト', '出産準備', 'マタニティ', '時短'],
  openGraph: {
    title: '妊娠中カップルの結婚祝い｜新生活と出産準備を両方助ける『気が利く』ギフト',
    description: '妊娠中の結婚は新生活と出産準備が同時進行。体調・時間・家事負担・衛生・収納の悩みに効く結婚祝いを、実用品・消耗品・時短・体験の切り口で深掘り。避けたい落とし穴や聞き方のコツまでまとめます。',
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/pregnant-couple-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/pregnant-couple-wedding-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function PregnantCoupleWeddingGiftArticle() {
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
            <span className='text-gray-800'>妊娠中カップル向けギフト</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              妊娠中カップルの結婚祝い｜新生活と出産準備を両方助ける「気が利く」ギフト
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                妊娠中のカップルへの結婚祝いは、普通の結婚祝いよりも少しだけ<strong>「設計」が大事</strong>です。
              </p>
              <p className='mb-3'>
                なぜなら、<strong>新生活の立ち上げと出産準備が同時進行</strong>になりやすく、時間も体力も足りなくなりがちだから。
              </p>
              <p className='mb-3'>
                「おしゃれで映えるもの」よりも、<strong>「今日から助かる」「負担が減る」「衛生的で安心」</strong>が喜ばれやすい傾向があります。
              </p>
              <p className='mb-3'>
                この記事では、妊娠中カップルの生活を具体的に想像しながら、気が利くギフトの選び方を深掘りします。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>📋 この記事でわかること</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>妊娠中カップルの結婚祝いが難しい理由</li>
                <li>助かるギフトの共通点（体調、時間、家事、衛生、収納）</li>
                <li>具体カテゴリ別おすすめ（時短、消耗品、睡眠、食、掃除、移動）</li>
                <li>逆に避けたい落とし穴（負担が増える贈り物）</li>
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
                💡 妊娠中カップルの結婚祝いは何が違う？「時間と体力が足りない」が前提
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                妊娠中は、<strong>体調が日によって変わります</strong>。
              </p>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                さらに、出産準備や手続きで<strong>「気づけばやることだらけ」</strong>になりやすい時期です。
              </p>

              <p className='text-gray-700 mb-4 leading-relaxed'>
                結婚祝いで喜ばれやすいのは、次のどれかに刺さるものです。
              </p>

              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6'>
                <li>家事の手間が減る</li>
                <li>衛生面の不安が減る</li>
                <li>体を休める時間が増える</li>
                <li>買い足しのストレスが減る</li>
              </ul>

              <p className='text-gray-700 leading-relaxed bg-pink-50 p-4 rounded'>
                💡 逆に、置き場所を取るもの、手入れが必要なもの、好みが割れるものは負担になりやすいです。
              </p>
            </section>

            {/* セクション2: まず結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✅ まず結論：妊娠中カップルに「気が利く」ギフトの共通点
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                迷ったら、次の5つのどれかに寄せると外しにくいです。
              </p>

              <div className='space-y-4'>
                {[
                  { num: '1', title: '時短（家事・食事）', color: 'bg-blue-500' },
                  { num: '2', title: '衛生（清潔を保つ、手間を減らす）', color: 'bg-green-500' },
                  { num: '3', title: '収納（散らかりを防ぐ）', color: 'bg-purple-500' },
                  { num: '4', title: '睡眠・休息（体を休める）', color: 'bg-indigo-500' },
                  { num: '5', title: '消耗品（なくなる、被っても困りにくい）', color: 'bg-pink-500' }
                ].map((item) => (
                  <div key={item.num} className='flex items-start gap-3 bg-gray-50 p-4 rounded-lg'>
                    <span className={`${item.color} text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                      {item.num}
                    </span>
                    <p className='text-gray-700 text-sm pt-1'>{item.title}</p>
                  </div>
                ))}
              </div>

              <p className='text-gray-700 mt-6 leading-relaxed bg-blue-50 p-4 rounded'>
                💡 この5つは、<strong>新生活と出産準備の両方で効きます</strong>。
              </p>
            </section>

            {/* セクション3: 早見表 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📊 状況別｜おすすめギフト早見表（迷ったらここ）
              </h2>
              
              <div className='overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className='min-w-max border-collapse border border-gray-300 text-sm' style={{ minWidth: '600px' }}>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>状況</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>一番助かる方向性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>例（イメージ）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>つわり・体調が不安定</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>食の負担を減らす</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>温めるだけ、常温で日持ち、小分け</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>仕事が忙しい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家事時短</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>掃除・洗濯の手間を減らす消耗品</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>引っ越し直後</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>収納・整理</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置き場所が決まるまで使える小型収納</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>出産準備が進んでいない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>買い足しストレス削減</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>生活消耗品、衛生用品寄せ</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>義実家・親族が関わる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>失礼回避</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>無難色、負担が残らないもの</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* セクション4: 深掘り1 - 時短 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🚀 深掘り1｜家事の負担を減らす「時短」ギフト（実は結婚祝いで一番強い）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                妊娠中は、<strong>家事がいつも通りできない日が必ず出ます</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                そのとき頼れるのは、気合ではなく<strong>「仕組み」</strong>です。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>誰が使っても同じ結果になるものが強い</li>
                  <li>設置や設定が難しいものは避ける</li>
                  <li>すぐ使える形が正義</li>
                </ul>
              </div>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>おすすめの方向性</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>洗剤・掃除系の上質消耗品（在庫が増えても困りにくい）</li>
                  <li>使い捨てで清潔を保てるもの（衛生面にも刺さる）</li>
                  <li>まとめ買いすると地味に助かる日用品</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 避けたい落とし穴</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>使い方が複雑で説明が必要なもの</li>
                  <li>置き場所が必要な大型アイテム</li>
                </ul>
              </div>
            </section>

            {/* セクション5: 深掘り2 - 食事 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🍽️ 深掘り2｜食事がラクになるギフト（つわり期にも産後にも効く）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                妊娠中の食の悩みは、味の好みというより<strong>「食べられる日と食べられない日がある」</strong>ことです。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                だから、豪華さよりも<strong>柔軟性</strong>が助かります。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>外しにくい選び方</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>常温保存できる</li>
                  <li>小分けで調整できる</li>
                  <li>温めるだけで成立する</li>
                  <li>匂いが強すぎない</li>
                </ul>
              </div>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>💡 相手の負担を増やさないコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>冷凍・冷蔵は受け取りと容量の確認が必要</li>
                  <li>迷うなら常温の個包装に寄せる</li>
                </ul>
              </div>
            </section>

            {/* セクション6: 深掘り3 - 衛生 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🧼 深掘り3｜衛生の不安を減らすギフト（赤ちゃんが来る家はここが刺さる）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                出産が近づくほど、<strong>家の中の衛生への意識が上がります</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ただし、強すぎる除菌や香りは好みが割れます。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>おすすめの方向性</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>無香料、低刺激、シンプル</li>
                  <li>使い捨てで清潔を保てる</li>
                  <li>家中で使える汎用性</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 避けたい落とし穴</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>香りが強いもの</li>
                  <li>強い主張のある健康系（押し付けに見えやすい）</li>
                </ul>
              </div>
            </section>

            {/* セクション7: 深掘り4 - 収納 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📦 深掘り4｜収納・片付けがラクになるギフト（新生活のストレスを減らす）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                新生活と出産準備が重なると、<strong>物が一気に増えます</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                収納は「おしゃれ」よりも<strong>「暫定でも片付く」</strong>が助かります。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>小型で、用途が変えられる</li>
                  <li>組み立てが不要、または簡単</li>
                  <li>ラベリングしやすい</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 避けたい落とし穴</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>大型収納（部屋に合わないと詰む）</li>
                  <li>重くて移動できないもの</li>
                </ul>
              </div>
            </section>

            {/* セクション8: 深掘り5 - 睡眠 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-pink-500'>
                😴 深掘り5｜睡眠と休息を守るギフト（高価でなくても効く）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                妊娠中は<strong>寝つきが変わることもあります</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ここは「改善」ではなく<strong>「労い」寄せ</strong>が正解です。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>おすすめの方向性</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>肌触りが良い、無難色の寝具小物</li>
                  <li>リラックスを邪魔しないもの</li>
                  <li>手入れが簡単</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 避けたい落とし穴</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>香りが強いリラックス系</li>
                  <li>体型や体重に触れるニュアンス</li>
                </ul>
              </div>
            </section>

            {/* セクション9: 避けたいギフト */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ⚠️ 逆に避けたい「気が利かない」結婚祝い（妊娠中カップル向け）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                妊娠中カップルは、<strong>良いものでも負担になると辛い</strong>です。
              </p>

              <div className='bg-red-50 border-2 border-red-300 p-6 rounded-lg mb-6'>
                <h3 className='font-semibold text-gray-800 mb-4'>避けたいもの</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-3 ml-2'>
                  <li>置き場所を取る大型アイテム</li>
                  <li>好みが強いインテリア、香りもの</li>
                  <li>手入れが必要なもの（管理が発生する）</li>
                  <li>受け取りが難しい生もの（受け取り時間が読めない）</li>
                </ul>
              </div>

              <p className='text-gray-700 mb-4 leading-relaxed'>
                NG全体をチェックしたい場合は、別記事でまとめています。
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

            {/* セクション10: 聞き方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💬 サプライズ感を残して確認する聞き方（テンプレ）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                妊娠中は<strong>「気を遣わせない聞き方」が特に大事</strong>です。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-4'>テンプレ</h3>
                <div className='space-y-3'>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「今、家の中で足りないものってある？被りたくなくて」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「受け取りやすい曜日ある？冷蔵系は避けたくて」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「香りものは好みあるかな？無難寄せにしようと思って」</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed'>
                💡 この3つを聞ければ、<strong>失敗がかなり減ります</strong>。
              </p>
            </section>

            {/* セクション11: のしへの内部リンク */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📝 のしや包装で迷ったら
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                結婚祝いは中身より<strong>「のし」で迷うことが多い</strong>です。
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

            {/* セクション12: 迷ったときの結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✨ 迷ったときの結論：妊娠中カップルには「時短・衛生・消耗品・小型」が強い
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                妊娠中は、<strong>気合で乗り切るより仕組みで助けるほう</strong>が喜ばれます。
              </p>
              <p className='text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg border-2 border-pink-300'>
                💡 見栄えより、<strong>今日から助かるもの</strong>を選ぶほど「気が利く」になりやすいです。
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
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 妊娠中カップルへの結婚祝いで一番外さないのは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    時短・消耗品・衛生寄せが外しにくいです。置き場所を取らず、負担が残りにくいものが安心です。
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. つわりがある相手に食べ物を贈ってもいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    好みが日によって変わるため、常温保存で小分けできるものや、匂いが強すぎないものが無難です。
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. ベビー用品を結婚祝いで贈るのは早い？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    相手の方針や好みがあるので、事前確認なしのベビー用品はリスクがあります。迷うなら新生活にも使える衛生・時短寄せが安心です。
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 遠距離で配送する場合は何に注意する？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    受け取り負担が増えないことが最優先です。大きすぎない、冷蔵冷凍は避ける、内のしにするなどが無難です。
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 妊娠中カップルに避けたほうがいいギフトは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    香りが強いもの、大型インテリア、手入れが必要なもの、受け取りが難しい生ものは負担になりやすいです。
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
