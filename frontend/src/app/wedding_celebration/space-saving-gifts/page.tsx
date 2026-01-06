/**
 * 狭い部屋の新婚向け結婚祝い記事ページ（新バージョン）
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
      'name': '狭い部屋の新婚に結婚祝いを贈るとき、一番大事なことは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '置き場所で困らないことです。小さいだけでなく、収納を増やさない、出しっぱなしで成立、多用途、消耗品などの設計に寄せると外しにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '食器セットは喜ばれない？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '大量セットは収納を圧迫しやすいです。贈るなら少数精鋭で、スタッキングできる形に寄せると安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': '体験ギフトは結婚祝いとしてアリ？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'アリです。物を増やさず満足度を上げられるので、狭い部屋ほど相性が良いです。'
      }
    },
    {
      '@type': 'Question',
      'name': 'どうしても物を贈りたい場合の安全策は？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '消耗品か、テーブル周りの少数精鋭、縦を使える小型整理など、床面積を増やさない方向が安全です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'サプライズで贈りたいけど置き場所が心配なときは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '「物を増やしたくないから」という前置きで、消耗品か体験かを聞くとサプライズ感を残しつつ外しにくくなります。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '狭い部屋の新婚に贈る結婚祝い｜置き場所で困らない『省スペース』ギフト大全',
  description: 'ワンルームや1K、収納少なめの新婚に贈る結婚祝いは『置き場所で詰まない』が最重要。小さいだけでなく、出しっぱなしで成立、多用途、縦収納、折りたたみ、消耗品など省スペースの正解をカテゴリ別に深く解説します。',
  keywords: ['結婚祝い', '狭い部屋', 'ワンルーム', '1K', '1LDK', '省スペース', 'ギフト'],
  openGraph: {
    title: '狭い部屋の新婚に贈る結婚祝い｜置き場所で困らない『省スペース』ギフト大全',
    description: 'ワンルームや1K、収納少なめの新婚に贈る結婚祝いは『置き場所で詰まない』が最重要。小さいだけでなく、出しっぱなしで成立、多用途、縦収納、折りたたみ、消耗品など省スペースの正解をカテゴリ別に深く解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/space-saving-gifts',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/space-saving-gifts',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function SpaceSavingGiftsArticle() {
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
            <span className='text-gray-800'>省スペースギフト</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              狭い部屋の新婚に贈る結婚祝い｜置き場所で困らない「省スペース」ギフト大全
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                新婚の結婚祝いはうれしい反面、<strong>狭い部屋だと「ありがたいけど置けない」</strong>が起きやすいです。
              </p>
              <p className='mb-3'>
                ワンルーム、1K、1LDK、賃貸、収納少なめの部屋では、<strong>物が増えるほど暮らしの快適さが下がる</strong>こともあります。
              </p>
              <p className='mb-3'>
                だから狭い部屋の結婚祝いは、豪華さより<strong>「置き場所で詰まない設計」</strong>が正解です。
              </p>
              <p className='mb-3'>
                この記事では、省スペースを「小さい」だけで終わらせず、<strong>収納を増やさない、出しっぱなしで成立、多用途、縦を使う、折りたためる、消耗品で消える</strong>、といった観点で整理していきます。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>📋 この記事でわかること</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>狭い部屋の新婚が結婚祝いで困りやすい理由</li>
                <li>省スペースギフトの正解（小さい以外の判断軸）</li>
                <li>間取り・状況別おすすめ早見表</li>
                <li>カテゴリ別の省スペースギフト（選び方のコツつき）</li>
                <li>置き場所で詰みやすいギフト早見表（代替案つき）</li>
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

            {/* セクション1: まず結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✅ まず結論：狭い部屋の結婚祝いは「収納を増やさない」ほど喜ばれる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                狭い部屋で本当に困るのは、<strong>物の大きさよりも「管理コスト」</strong>です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                しまう場所がない、出し入れが面倒、掃除がしにくい。この積み重ねがストレスになります。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-4'>狭い部屋の新婚に刺さるギフトの条件</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>収納を増やさない（しまう前提にしない）</li>
                  <li>出しっぱなしで成立（生活動線に馴染む）</li>
                  <li>多用途で使える（使い道が限定されない）</li>
                  <li>縦を使える（床面積を増やさない）</li>
                  <li>折りたためる、分解できる（必要な時だけ出せる）</li>
                  <li>消耗品で消える（在庫になっても減る）</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-yellow-50 p-4 rounded'>
                💡 迷ったら<strong>「床に置かない」「消えてなくなる」「使い道が複数ある」</strong>に寄せると外しにくいです。
              </p>
            </section>

            {/* セクション2: 早見表1 - 間取り・状況別 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📊 間取り・状況別おすすめ早見表（迷ったらここ）
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse border border-gray-300 text-sm'>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>状況</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>最優先の方向性</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>例（イメージ）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ワンルーム、1K</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>床面積を増やさない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>縦に置ける整理、壁や扉を活用できる小物</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>1LDKだが収納少なめ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>しまわない前提</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>出しっぱなしでも馴染むデザイン小物</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>引っ越し直後</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>暫定でも片付く</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>ラベルで整理できる小型ボックス、フタ付き</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>共働きで家事が回らない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>手間の削減</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消耗品、さっと使える掃除系</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>来客が多い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>生活感を抑える</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>見た目が整う省スペースのテーブル小物</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* セクション3: 判断軸 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🔍 省スペースギフトの選び方｜失敗しない判断軸は5つ
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                省スペースの判断は<strong>「小さいかどうか」だけだと外します</strong>。
                次の5軸でチェックすると精度が上がります。
              </p>

              {/* 軸1 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>軸1：床に置く必要があるか</h3>
                <p className='text-gray-700 mb-2 leading-relaxed'>
                  床置きが必要なギフトは、狭い部屋では難易度が上がります。
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  <strong>縦置きや壁寄せ</strong>のほうが安全です。
                </p>
              </div>

              {/* 軸2 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>軸2：しまう場所が必要か</h3>
                <p className='text-gray-700 mb-2 leading-relaxed'>
                  「しまう前提」のギフトは、収納が少ない家だと負担になりやすいです。
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  <strong>出しっぱなしで成立する形</strong>が強いです。
                </p>
              </div>

              {/* 軸3 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>軸3：多用途か</h3>
                <p className='text-gray-700 mb-2 leading-relaxed'>
                  用途が1つだけだと、使わなくなった瞬間に置き物化します。
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  <strong>1つで複数シーンに使える</strong>と失敗が減ります。
                </p>
              </div>

              {/* 軸4 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>軸4：セットの物量が多すぎないか</h3>
                <p className='text-gray-700 mb-2 leading-relaxed'>
                  大量セットは収納を圧迫しがちです。
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  <strong>少数精鋭</strong>のほうが喜ばれやすいです。
                </p>
              </div>

              {/* 軸5 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>軸5：捨てどきが分かりやすいか</h3>
                <p className='text-gray-700 mb-2 leading-relaxed'>
                  消耗品や使い切れるものは、物が増え続けにくいです。
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  <strong>狭い部屋ではこの価値が大きい</strong>です。
                </p>
              </div>
            </section>

            {/* カテゴリ別見出し */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🎁 省スペースギフト大全｜カテゴリ別おすすめと選び方のコツ
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                ここからは<strong>「狭い部屋で実際に助かる」方向性</strong>を、カテゴリ別に整理します。
                各カテゴリは、選び方のコツと落とし穴もセットで押さえます。
              </p>
            </section>

            {/* 王道1: 消耗品 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🧴 省スペースの王道1｜消耗品は「収納を増やさず生活を底上げ」できる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                狭い部屋で一番ありがたいのは、<strong>物が残らないギフト</strong>です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                しかも消耗品は、<strong>夫婦の好みが割れにくい方向に寄せやすい</strong>のが強みです。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>見た目がシンプル（生活感が出にくい）</li>
                  <li>香りは控えめ、迷うなら無香料寄せ</li>
                  <li>大容量すぎない（ストックが場所を取る）</li>
                </ul>
              </div>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>外しにくい方向性（イメージ）</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>家事がラクになる日用品</li>
                  <li>使い捨てで清潔を保てる消耗品</li>
                  <li>ちょっと上質な紙もの、布もの（ただし物量は少なめ）</li>
                </ul>
              </div>
            </section>

            {/* 王道2: テーブル周り */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🍽️ 省スペースの王道2｜テーブル周りの小物は「キッチンより刺さる」
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                狭い家ほど、<strong>料理の頻度より「食べる場」を整える</strong>ほうが効きます。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                キッチンを増やすより、<strong>テーブルの満足度を上げる</strong>ほうが置き場所で詰みにくいです。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>セットより単品の上質</li>
                  <li>スタッキングできる形</li>
                  <li>割れやすさが心配なら丈夫な素材寄せ</li>
                </ul>
              </div>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>例（イメージ）</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>小さくて上質なグラス、マグ</li>
                  <li>使う頻度が高いカトラリー少数</li>
                  <li>出しっぱなしでも馴染むトレイや小皿</li>
                </ul>
              </div>
            </section>

            {/* 王道3: 縦を使う */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📏 省スペースの王道3｜縦を使う整理は「床が広がる」感覚が出る
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                狭い部屋は<strong>床に物が出るほど、掃除も移動もつらく</strong>なります。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                縦を使って散らかりにくくするギフトは、<strong>体感で助かります</strong>。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>組み立てが重いものは避ける</li>
                  <li>壁を傷つけない前提（賃貸なら特に）</li>
                  <li>どこに置くかを想像できる形</li>
                </ul>
              </div>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>例（イメージ）</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>立てて置ける整理小物</li>
                  <li>扉や隙間を活用できる省スペース整理</li>
                  <li>ラベルで分類できる小型収納</li>
                </ul>
              </div>
            </section>

            {/* 王道4: 折りたためる */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📦 省スペースの王道4｜折りたためる、畳めるは「必要な時だけ出す」ができる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                普段は出さない、でもあると便利。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                <strong>狭い部屋では、このタイプが特に喜ばれます</strong>。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>折りたたみが簡単で、戻すのも簡単</li>
                  <li>収納時に薄くなる</li>
                  <li>使う頻度が想像できる用途</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 注意点</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>大きすぎると結局しまえない</li>
                  <li>夫婦の生活導線に合わないと使われない</li>
                </ul>
              </div>
            </section>

            {/* 王道5: 体験 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🎫 省スペースの王道5｜体験は「物を増やさず思い出が残る」
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                狭い部屋の最大の敵は<strong>物量</strong>です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                体験ギフトは、<strong>物を増やさず満足度を上げる最短ルート</strong>になります。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>予約しやすい、使うタイミングを選べる</li>
                  <li>移動負担が重すぎない</li>
                  <li>有効期限が短すぎない</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-purple-50 p-4 rounded'>
                💡 物が増えないので、<strong>狭い家ほど強い選択肢</strong>です。
              </p>
            </section>

            {/* セクション: 早見表2 - 避けたいギフト */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ⚠️ 置き場所で詰みやすいギフト早見表（代替案つき）
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse border border-gray-300 text-sm'>
                  <thead>
                    <tr className='bg-red-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>避けたいギフト</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>なぜ詰みやすいか</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>代替の方向性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大型家電、箱が大きい家電</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置き場所がない、しまえない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>体験、消耗品、テーブル小物</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大量セット食器、鍋のセット</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>収納を圧迫する、被りやすい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>少数精鋭、スタッキングできる形</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大型インテリア、置き物</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>レイアウトに合わない、掃除が増える</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>小型で出しっぱなしOKな小物</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>組み立てが重い家具系</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>手間がかかる、賃貸で使いにくい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>そのまま使える整理小物</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みが尖ったデザイン雑貨</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置けない、飾れない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>シンプルで用途が広いもの</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-gray-700 mt-6 mb-4 leading-relaxed'>
                NG全体の観点は別記事でも整理しています。
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

            {/* セクション: 聞き方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💬 サプライズ感を残して「置き場所」を確認する聞き方（テンプレ）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                狭い部屋ほど、<strong>確認ひと言で成功率が上がります</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                聞き方は「部屋が狭い？」ではなく<strong>「負担を増やしたくない」寄せ</strong>が安全です。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-4'>テンプレ</h3>
                <div className='space-y-3'>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「家に物が増えすぎないものにしたいんだけど、消耗品と体験どっちが嬉しい？」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「新居って収納どう？置き場所取らない方向にしたい」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「割れ物や大きい箱は避けたいんだけど、困る系ある？」</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed'>
                💡 この3つを聞ければ、<strong>狭い部屋でも詰みにくい方向</strong>に寄せられます。
              </p>
            </section>

            {/* セクション: のしへの内部リンク */}
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

            {/* セクション: 迷ったときの結論 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✨ 迷ったときの結論：狭い部屋の新婚には「消耗品＋体験＋少数精鋭」が最強
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                狭い部屋の結婚祝いで一番の正解は、<strong>相手の暮らしを広くすること</strong>です。
              </p>
              <p className='text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg border-2 border-pink-300'>
                💡 <strong>物を増やさず、負担を増やさず、毎日がラクになる設計</strong>に寄せるほど「気が利く」になります。
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
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 狭い部屋の新婚に結婚祝いを贈るとき、一番大事なことは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    置き場所で困らないことです。小さいだけでなく、収納を増やさない、出しっぱなしで成立、多用途、消耗品などの設計に寄せると外しにくいです。
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 食器セットは喜ばれない？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    大量セットは収納を圧迫しやすいです。贈るなら少数精鋭で、スタッキングできる形に寄せると安心です。
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 体験ギフトは結婚祝いとしてアリ？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    アリです。物を増やさず満足度を上げられるので、狭い部屋ほど相性が良いです。
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. どうしても物を贈りたい場合の安全策は？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    消耗品か、テーブル周りの少数精鋭、縦を使える小型整理など、床面積を増やさない方向が安全です。
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. サプライズで贈りたいけど置き場所が心配なときは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    「物を増やしたくないから」という前置きで、消耗品か体験かを聞くとサプライズ感を残しつつ外しにくくなります。
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
