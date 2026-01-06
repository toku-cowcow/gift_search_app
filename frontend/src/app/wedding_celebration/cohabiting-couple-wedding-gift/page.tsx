/**
 * 同棲カップル向け結婚祝い記事ページ（新バージョン）
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
      'name': '同棲カップルの結婚祝いで一番多い失敗は？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '定番の家電や食器が被って、置き場所に困ることです。カテゴリではなく「被らない設計」で選ぶと外しにくいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '被らない結婚祝いの結論は？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'アップグレード、消耗品、体験、メンテ負担削減、二人時間の質を上げる、のどれかに寄せるのが安全です。'
      }
    },
    {
      '@type': 'Question',
      'name': 'サプライズで贈りたいけど確認したほうがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '確認したほうが成功率は上がります。「被りたくないから」と前置きすると聞きやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': '食器やタオルは絶対にダメ？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'ダメではありません。ただし被りやすいので、量より質、少数精鋭、収納を増やさない形に寄せると安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': '体験ギフトで失敗しないコツは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '予約しやすい、有効期限が短すぎない、移動負担が重すぎない体験を選ぶと使われやすいです。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '同棲カップルに贈る結婚祝い｜もう揃ってる二人に「被らない」選び方',
  description: '同棲カップルの結婚祝いは家電や食器が一通り揃っていて被りがち。被りを避けるコツを「設計」で整理し、アップグレード・消耗品・体験・メンテ負担削減・二人時間の質を上げる方向で外さない選び方を解説します。',
  keywords: ['結婚祝い', '同棲カップル', '被らない', 'ギフト', '選び方'],
  openGraph: {
    title: '同棲カップルに贈る結婚祝い｜もう揃ってる二人に「被らない」選び方',
    description: '同棲カップルの結婚祝いは家電や食器が一通り揃っていて被りがち。被りを避けるコツを「設計」で整理し、アップグレード・消耗品・体験・メンテ負担削減・二人時間の質を上げる方向で外さない選び方を解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/cohabiting-couple-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/cohabiting-couple-wedding-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function CohabitingCoupleWeddingGiftArticle() {
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
            <span className='text-gray-800'>同棲カップル向けギフト</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              同棲カップルに贈る結婚祝い｜もう揃ってる二人に「被らない」選び方
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                同棲カップルへの結婚祝いが難しいのは<strong>「必要なものがもう揃っている」</strong>ことが多いからです。
              </p>
              <p className='mb-3'>
                家電も食器も生活用品も、すでに一通りある。だから定番ギフトほど被ってしまい、<strong>「ありがたいけど使わない」</strong>が起きやすくなります。
              </p>
              <p className='mb-3'>
                でも結婚祝いは、物の豪華さより<strong>「二人の生活が良くなること」</strong>が大事です。
              </p>
              <p className='mb-3'>
                同棲カップルの場合は、カテゴリで選ぶのではなく<strong>「被らない設計」で選ぶ</strong>ほうが失敗しにくいです。
              </p>
              <p className='mb-3'>
                この記事では、被りやすい理由を整理しながら、同棲カップルに刺さる<strong>「被らない」選び方</strong>を具体的に解説します。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>📋 この記事でわかること</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>同棲カップルの結婚祝いが被りやすい理由</li>
                <li>被らないギフトの正体（カテゴリではなく設計）</li>
                <li>被りやすいギフト早見表</li>
                <li>被らないギフト早見表（設計別）</li>
                <li>サプライズ感を残した確認のコツ</li>
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
                ✅ まず結論：同棲カップルの結婚祝いは「被らない設計」を選べば外しにくい
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                同棲カップルは、<strong>すでに暮らしが回っています</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                だから「暮らしを作るアイテム」より<strong>「暮らしを良くする設計」</strong>のほうが刺さります。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-4'>被らない設計の方向性</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>いまの生活をアップグレードする</li>
                  <li>消耗してなくなる（在庫になりにくい）</li>
                  <li>体験で思い出を増やす（物が増えない）</li>
                  <li>メンテ負担を減らす（家事の手間を削る）</li>
                  <li>二人時間の質を上げる（家の中で幸福度が上がる）</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-yellow-50 p-4 rounded'>
                💡 このどれかに寄せると、<strong>被りやすい定番から自然に外れます</strong>。
              </p>
            </section>

            {/* セクション2: 被る理由 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🔍 同棲カップルの結婚祝いが被る理由は4つ
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                同棲カップルが困るのは、贈る側の気持ちが悪いのではなく、<strong>構造の問題</strong>です。
              </p>

              {/* 理由1 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>理由1：同等品をすでに持っている</h3>
                <p className='text-gray-700 mb-2 leading-relaxed'>
                  家電や食器は、すでに買って暮らしていることが多いです。
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  <strong>新生活が始まる前に、生活の土台が完成しています</strong>。
                </p>
              </div>

              {/* 理由2 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>理由2：定番ほど被る</h3>
                <p className='text-gray-700 mb-2 leading-relaxed'>
                  結婚祝いの定番は、みんなが思いつく分だけ被ります。
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  被りやすいものほど<strong>「置き場所」も問題</strong>になります。
                </p>
              </div>

              {/* 理由3 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>理由3：好みが分かれやすい</h3>
                <p className='text-gray-700 mb-2 leading-relaxed'>
                  インテリア、香り、デザインは、<strong>同棲期間が長いほどこだわりが固まっています</strong>。
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  外したときの気まずさも増えます。
                </p>
              </div>

              {/* 理由4 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>理由4：収納が詰みやすい</h3>
                <p className='text-gray-700 mb-2 leading-relaxed'>
                  同棲カップルはすでに物があるため、<strong>追加の収納余地が小さい</strong>です。
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  使わない物が増えると、部屋が狭く感じます。
                </p>
              </div>
            </section>

            {/* セクション3: 早見表1 - 被りやすい */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ⚠️ 被りやすいギフト早見表（理由つき）
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse border border-gray-300 text-sm'>
                  <thead>
                    <tr className='bg-red-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被りやすいギフト</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被る理由</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>さらに困るポイント</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>調理家電</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すでに持っていることが多い</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置き場所が必要</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>食器セット</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>定番すぎて被る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>収納が埋まる</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>タオル大量セット</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>定番で被る</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>物量が多いと収納が詰む</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>鍋、フライパンのセット</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すでに揃っている</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みやサイズが合わない</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>香りもの</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>好みが割れる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使えないと処理に困る</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>大型インテリア</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>テイストに合わない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>置けない、動かせない</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed bg-blue-50 p-4 rounded'>
                💡 ここに当てはまる場合でも、<strong>設計を変えれば「被らない」にできます</strong>。
              </p>
            </section>

            {/* セクション4: 早見表2 - 被らない */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✨ 被らないギフト早見表（設計別）
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse border border-gray-300 text-sm'>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>設計</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>被りにくい理由</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>方向性（イメージ）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>アップグレード</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>すでにある物でも上位互換は喜ばれる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>毎日使うものを上質にする</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>消耗品</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>使えば減るので在庫になりにくい</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>上質日用品、個包装で使いやすい</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>体験</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>物が増えない</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>食事、リラックス、二人の時間</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>メンテ負担削減</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>生活がラクになる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>掃除や洗濯の手間を減らす</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>二人時間の質</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>同棲の幸福度が上がる</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>家の時間が楽しくなる小物</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed bg-purple-50 p-4 rounded'>
                💡 <strong>「カテゴリ」より「設計」を先に決める</strong>のが、同棲カップル攻略のコツです。
              </p>
            </section>

            {/* セクション5: 被らない選び方1 - アップグレード */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🎁 被らない選び方1：アップグレードは「毎日使うもの」を狙う
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                同棲カップルは、物が揃っているからこそ<strong>「質の差」が効きます</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                毎日使うものを少し上げると、生活の満足度が上がります。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>二人が必ず使うものにする</li>
                  <li>収納が増えない形にする（量より質）</li>
                  <li>好みが割れにくい無難デザインに寄せる</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>❌ 落とし穴</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>好みが強いデザインは外すと置けない</li>
                  <li>大量セットは収納が詰む</li>
                </ul>
              </div>
            </section>

            {/* セクション6: 被らない選び方2 - 消耗品 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🧴 被らない選び方2：消耗品は「家の中のストレスを減らす」方向に寄せる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                消耗品は<strong>「なくなる」が最大の強み</strong>です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                同棲カップルはすでに物があるので、<strong>在庫が残らない設計</strong>が刺さります。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>香りは控えめ、迷うなら無香料寄せ</li>
                  <li>大容量すぎない（置き場所問題を避ける）</li>
                  <li>使う場面が想像できるものにする</li>
                </ul>
              </div>
            </section>

            {/* セクション7: 被らない選び方3 - 体験 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🎫 被らない選び方3：体験は「予定が組める」ほど勝つ
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                <strong>体験は被りません</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ただし使いにくい体験を選ぶと、行けずに終わることがあります。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>外しにくい選び方</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>予約が難しすぎない</li>
                  <li>有効期限が短すぎない</li>
                  <li>二人で行ける導線がシンプル</li>
                </ul>
              </div>
            </section>

            {/* セクション8: 被らない選び方4 - メンテ負担 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                🧹 被らない選び方4：メンテ負担を減らすと「結婚後の平日」がラクになる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                結婚して一緒に暮らすと、<strong>平日の家事が現実としてのしかかります</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                同棲していても、生活が忙しくなると家事は追いつきません。
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>刺さりやすい方向性</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>さっと使える</li>
                  <li>収納が増えない</li>
                  <li>説明不要で使える</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-yellow-50 p-4 rounded'>
                💡 派手ではないですが、<strong>実は満足度が高い選択</strong>です。
              </p>
            </section>

            {/* セクション9: 被らない選び方5 - 二人時間 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💑 被らない選び方5：二人時間の質を上げると「家の幸福度」が上がる
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                同棲カップルは<strong>家の時間が長い傾向</strong>があります。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                だから家の中での幸福度を上げるギフトは、<strong>意外と刺さります</strong>。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>選び方のコツ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>出しっぱなしでも成立する</li>
                  <li>小さくて邪魔にならない</li>
                  <li>二人で使える</li>
                </ul>
              </div>
            </section>

            {/* セクション10: 聞き方 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💬 サプライズ感を残して「被り」を確認する聞き方（テンプレ）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                同棲カップルは<strong>確認があるほど成功率が上がります</strong>。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ただし聞き方は<strong>「何が欲しい？」より「被りたくない」</strong>が自然です。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-4'>テンプレ</h3>
                <div className='space-y-3'>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「被りたくないから、家電とか食器ってもう揃ってる？」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「物が増えない方向にしたいんだけど、体験と消耗品どっちが嬉しい？」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「香りものは好みある？無難寄せにしたい」</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed'>
                💡 これだけで、<strong>被りの地雷をかなり避けられます</strong>。
              </p>
            </section>

            {/* セクション11: のしへの内部リンク */}
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

            {/* セクション12: NGへの内部リンク */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ⚠️ 結婚祝いのNG観点も押さえておくと外しにくい
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                タブーや好み割れの観点は、NG記事にまとめています。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                同棲カップルは<strong>収納も詰みやすい</strong>ので、避けたいポイントが分かると安心です。
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

            {/* セクション13: 迷ったときの最終解 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✨ 迷ったときの最終解：同棲カップルには「アップグレード」か「体験」が最強
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                被りを避けたいなら、<strong>まず設計を決めます</strong>。
              </p>
              <p className='text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg border-2 border-pink-300'>
                💡 <strong>アップグレードか体験に寄せる</strong>ほど、被りにくく、満足度も上がりやすいです。
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
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 同棲カップルの結婚祝いで一番多い失敗は？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    定番の家電や食器が被って、置き場所に困ることです。カテゴリではなく「被らない設計」で選ぶと外しにくいです。
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 被らない結婚祝いの結論は？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    アップグレード、消耗品、体験、メンテ負担削減、二人時間の質を上げる、のどれかに寄せるのが安全です。
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. サプライズで贈りたいけど確認したほうがいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    確認したほうが成功率は上がります。「被りたくないから」と前置きすると聞きやすいです。
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 食器やタオルは絶対にダメ？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    ダメではありません。ただし被りやすいので、量より質、少数精鋭、収納を増やさない形に寄せると安心です。
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 体験ギフトで失敗しないコツは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    予約しやすい、有効期限が短すぎない、移動負担が重すぎない体験を選ぶと使われやすいです。
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
