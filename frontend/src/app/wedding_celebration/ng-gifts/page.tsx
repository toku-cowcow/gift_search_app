/**
 * 結婚祝いNGギフト完全ガイド記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、CTA配置、内部リンク×2
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
      'name': '結婚祝いで本当に避けたほうがいいものは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'タブーを気にする人もいるため、刃物や割れ物、櫛などは避けるのが無難です。実用面では香りが強いものや大型インテリアも失敗しやすいです。'
      }
    },
    {
      '@type': 'Question',
      'name': 'タブーを気にしない夫婦なら刃物を贈ってもいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '本人が気にしなくても親族が気にする場合があります。どうしても贈りたいなら事前確認をして、別案も用意すると安心です。'
      }
    },
    {
      '@type': 'Question',
      'name': '結婚祝いで一番多い失敗は？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '被りと置き場所問題です。定番ほど被るので、量より質、小型、消耗品寄せが失敗を減らします。'
      }
    },
    {
      '@type': 'Question',
      'name': 'サプライズで贈りたいけど、確認したほうがいい？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '確認したほうが成功率は上がります。聞き方を工夫すればサプライズ感は残せます。'
      }
    },
    {
      '@type': 'Question',
      'name': '同棲しているカップルの結婚祝いで気をつけることは？',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'すでに家電や食器が揃っていることが多く、定番ほど被りやすいです。小型、消耗品、体験寄せが外しにくいです。'
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '結婚祝いで贈ってはいけないNGギフト13選｜タブー理由と外さない代替案',
  description: '結婚祝いで避けたいプレゼントを、タブーの意味と実用面の失敗例から整理。刃物や割れ物だけでなく、被りやすい家電、好みが割れる香りものまで、NG理由と代替案をセットで解説します。',
  keywords: ['結婚祝い', 'NGギフト', 'タブー', '刃物', '割れ物', '縁起'],
  openGraph: {
    title: '結婚祝いで贈ってはいけないNGギフト13選｜タブー理由と外さない代替案',
    description: '結婚祝いで避けたいプレゼントを、タブーの意味と実用面の失敗例から整理。刃物や割れ物だけでなく、被りやすい家電、好みが割れる香りものまで、NG理由と代替案をセットで解説します。',
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/ng-gifts',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/ng-gifts',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function WeddingCelebrationNGGiftsArticle() {
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
            <span className='text-gray-800'>NGギフト完全ガイド</span>
          </nav>

          {/* 記事本文 */}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* タイトル（h1） */}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              結婚祝いで贈ってはいけないNGギフト13選｜タブー理由と外さない代替案
            </h1>

            {/* 最終更新日 */}
            <p className='text-sm text-gray-500 mb-6'>
              最終更新日: 2026-01-06
            </p>

            {/* 導入文 */}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                結婚祝いの難しさは<strong>「気持ちは嬉しいのに、使いづらいと困る」</strong>ことが起きやすい点です。
              </p>
              <p className='mb-3'>
                特に新生活は、収納・好み・生活導線が変わるタイミングなので、良かれと思った贈り物が負担になることもあります。
              </p>
              <p className='mb-3'>
                この記事では、結婚祝いで<strong>「NGになりやすいギフト」をタブーの意味と実用面の両方から整理</strong>し、代替案までセットで紹介します。
              </p>
              <p className='mb-3'>
                最後に<strong>「迷ったらこれ」という安全策</strong>もまとめるので、ギフト選びで外したくない人はそのまま使ってください。
              </p>
            </div>

            {/* この記事でわかること */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>📋 この記事でわかること</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>結婚祝いでNGが起きる3つの原因</li>
                <li>結婚祝いで避けたいNGギフト13選（理由つき）</li>
                <li>失礼になりにくい代替案（外さない方向性）</li>
                <li>事前確認のコツ（サプライズ感を残す聞き方）</li>
                <li>うっかりNGを買ってしまったときのリカバリー</li>
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

            {/* セクション1: NGが起きる3つの原因 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ⚠️ 結婚祝いのNGが起きる3つの原因（ここを押さえると外れにくい）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                結婚祝いで「困る」が起きる原因は、だいたいこの3つに集約されます。
              </p>

              {/* 原因1 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>原因1：意味が気になる（縁起・タブー）</h3>
                <p className='text-gray-700 leading-relaxed'>
                  本人は気にしなくても、<strong>家族や親戚が気にするケース</strong>があります。<br />
                  結婚は周囲も巻き込むイベントなので、タブー要素は避けたほうが安全です。
                </p>
              </div>

              {/* 原因2 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>原因2：好みが割れる（香り・デザイン・サイズ）</h3>
                <p className='text-gray-700 leading-relaxed'>
                  新居の雰囲気や夫婦の好みが分からないと、<strong>置けない・使えない</strong>が起きやすいです。
                </p>
              </div>

              {/* 原因3 */}
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>原因3：被る（同じものを複数もらう）</h3>
                <p className='text-gray-700 mb-3 leading-relaxed'>
                  結婚祝いは<strong>「定番ほど被る」イベント</strong>です。
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  しかも被った品ほど置き場に困ります。
                </p>
              </div>

              <p className='text-gray-700 leading-relaxed bg-pink-50 p-4 rounded'>
                💡 この記事では、この3原因を踏まえてNGを整理し、代替案まで用意します。
              </p>
            </section>

            {/* セクション2: NGギフト13選 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-pink-500'>
                🚫 結婚祝いで贈ってはいけないNGギフト13選（理由と代替案）
              </h2>
              <p className='text-gray-700 mb-8 leading-relaxed'>
                ここからは、結婚祝いで避けたほうが無難なものを<strong>「なぜNGになりやすいか」「どう代替するか」</strong>でまとめます。<br />
                タブーが気にならない相手でも、被り・好み・負担の観点で失敗を減らせます。
              </p>

              {/* NGギフト各項目 */}
              {[
                {
                  num: 1,
                  title: '刃物（包丁・ナイフ・ハサミ）',
                  reason: '「縁を切る」を連想するため、気にする人は気にする',
                  alternative: '料理好きなら「切れ味」ではなく「食卓周り」を攻める（上質タオル、保存容器、キッチン消耗品など）'
                },
                {
                  num: 2,
                  title: '割れ物（ガラス食器・陶器のセット）',
                  reason: '「割れる」が縁起面で気になる人がいる / 重くて収納を圧迫しやすい',
                  alternative: '割れにくい素材の食器、軽量でスタッキングしやすいもの、個数を絞った実用寄せ'
                },
                {
                  num: 3,
                  title: '櫛（くし）',
                  reason: '語呂で「苦」「死」を連想するとされ、避ける人がいる',
                  alternative: '身だしなみ系は、相手の好みが明確なときだけにする（迷うなら避ける）'
                },
                {
                  num: 4,
                  title: 'スリッパ・マット（踏む系）',
                  reason: '「踏みつける」イメージを嫌う人がいる / 新居のテイストに合わないと使いづらい',
                  alternative: '同じ生活系なら「消耗品」寄せ（上質ハンドソープ、キッチンペーパーの高級版など）で負担を減らす'
                },
                {
                  num: 5,
                  title: '強い香りもの（香水・ディフューザー・入浴剤の香り強め）',
                  reason: '夫婦で好みが一致しないと使えない / 体質や体調で合わないこともある',
                  alternative: '香りが分からないなら「無香料」または「香り控えめ」に寄せる / もしくは食べてなくなるギフトに切り替える'
                },
                {
                  num: 6,
                  title: 'サイズが必要な衣類（ペアパジャマ、部屋着など）',
                  reason: 'サイズが合わない / 好みが合わない / ペア物が照れくさい人もいる',
                  alternative: 'ペアにしない。ユニセックスで無難な「タオル」や「ブランケット」などサイズ事故が少ない方向へ'
                },
                {
                  num: 7,
                  title: '高すぎる家電（大物家電、メーカー指定の強いもの）',
                  reason: 'すでに買っている可能性が高い / 置き場所と配線の都合がある / 相手が気を遣う',
                  alternative: '家電を贈りたいなら「小型で場所を取らない」「消耗系」寄せにする / ただし家電は被りやすいので、事前確認が安全'
                },
                {
                  num: 8,
                  title: '置き場所に困る大型インテリア（大きい置き時計、大きい花瓶など）',
                  reason: '新居のレイアウトに合わない / 収納がまだ決まっていない時期ほど負担になる',
                  alternative: '小さくて置き場所の自由度が高いものにする / 迷ったら「消耗品」「体験」「小型」で負担を下げる'
                },
                {
                  num: 9,
                  title: '趣味が尖った装飾品（置物、個性が強いアート）',
                  reason: '好みが一致しないと飾れない / しまい込まれて気まずい',
                  alternative: 'どうしてもインテリアなら、色数を抑えた小物にする / ただし基本は避けるのが安全'
                },
                {
                  num: 10,
                  title: '同じものを複数もらいやすい定番（ペアグラス、食器セット、タオル大量など）',
                  reason: '定番ほど被る / 物量が増えるほど収納が詰む',
                  alternative: '定番を贈るなら「量より質」/ 数は少なめで、上質に寄せる'
                },
                {
                  num: 11,
                  title: '期限が短い生もの（受け取りが難しい冷蔵冷凍の詰め合わせ）',
                  reason: '受け取りのタイミングが合わないと負担 / 冷凍庫の容量問題が起きやすい',
                  alternative: '常温で日持ちする個包装を選ぶ / 配送日を事前に聞く（サプライズ感は残せる）'
                },
                {
                  num: 12,
                  title: '縁起を気にする相手への数字・組み合わせ（四つ入り、九つ入りなど）',
                  reason: '気にしない人も多いが、親族が気にすることがある',
                  alternative: '個数が選べるものなら避ける。迷ったら無難な個数にする'
                },
                {
                  num: 13,
                  title: '夫婦の事情に踏み込むメッセージ（子ども・家事分担を連想させる言葉）',
                  reason: '善意でも地雷になりやすい / 相手の状況が分からないほど危険',
                  alternative: 'メッセージは「おめでとう」「お二人の幸せ」を軸に短くまとめる'
                }
              ].map((item) => (
                <div key={item.num} className='mb-8 bg-gray-50 p-6 rounded-lg border-l-4 border-red-400'>
                  <h3 className='text-lg font-bold text-gray-800 mb-4 flex items-center gap-2'>
                    <span className='bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold'>
                      {item.num}
                    </span>
                    <span>{item.title}</span>
                  </h3>
                  
                  <div className='space-y-4'>
                    <div>
                      <p className='text-sm font-semibold text-red-600 mb-2'>❌ NG理由</p>
                      <p className='text-gray-700 text-sm leading-relaxed'>{item.reason}</p>
                    </div>
                    
                    <div>
                      <p className='text-sm font-semibold text-green-600 mb-2'>✅ 代替案</p>
                      <p className='text-gray-700 text-sm leading-relaxed'>{item.alternative}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* セクション3: 事前確認のコツ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                💡 サプライズ感を残して事前確認するコツ（聞き方テンプレ）
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                結婚祝いは<strong>「確認したほうが成功率が上がる」カテゴリ</strong>です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                でも露骨に聞くとサプライズが消えます。
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-4'>サプライズ感を残す聞き方（テンプレ）</h3>
                <div className='space-y-3'>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「新生活で必要なもの、すでに揃ってるものある？被りたくなくて」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「置き場所に困らないものにしたいんだけど、家の雰囲気はシンプル系？」</p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>「配送にしたいんだけど、受け取りやすい曜日ある？」</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed'>
                💡 この3つが聞ければ、<strong>被りと負担をかなり減らせます</strong>。
              </p>
            </section>

            {/* セクション4: 迷ったらこれ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ✨ 迷ったらこれ：外さない結婚祝いの安全策（方向性）
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                ここまで読んでも迷う場合は、次の条件を満たすほど失敗が減ります。
              </p>

              <div className='bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg border-2 border-pink-300 mb-6'>
                <h3 className='font-semibold text-gray-800 mb-4'>外さない条件</h3>
                <ul className='text-gray-700 space-y-3 text-sm'>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>✓</span>
                    <span>置き場所を取らない</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>✓</span>
                    <span>好みが割れにくい</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>✓</span>
                    <span>被りにくい、または消耗する</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>✓</span>
                    <span>相手の負担が増えない（受け取りや手入れが簡単）</span>
                  </li>
                </ul>
              </div>

              <p className='text-gray-700 mb-4 leading-relaxed'>
                特に同棲カップルは<strong>「すでに揃っている」前提</strong>で考えると外しにくいです。
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <Link
                  href='/articles/wedding_celebration/cohabiting-couple-wedding-gift'
                  className='text-pink-600 font-semibold hover:underline'
                >
                  → 同棲カップルに贈る結婚祝い｜もう揃ってる二人に「被らない」選び方
                </Link>
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

            {/* セクション5: のしへの内部リンク */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                📝 のしや包装で失敗したくない人へ
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                結婚祝いは中身が良くても、<strong>のしで迷う人が多い</strong>です。
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                のしは別記事で「早見表」と「手順」でまとめています。
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

            {/* FAQ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-pink-500'>
                ❓ よくある質問（FAQ）
              </h2>

              <div className='space-y-6'>
                {/* Q1 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 結婚祝いで本当に避けたほうがいいものは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    タブーを気にする人もいるため、刃物や割れ物、櫛などは避けるのが無難です。実用面では香りが強いものや大型インテリアも失敗しやすいです。
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. タブーを気にしない夫婦なら刃物を贈ってもいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    本人が気にしなくても親族が気にする場合があります。どうしても贈りたいなら事前確認をして、別案も用意すると安心です。
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 結婚祝いで一番多い失敗は？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    被りと置き場所問題です。定番ほど被るので、量より質、小型、消耗品寄せが失敗を減らします。
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. サプライズで贈りたいけど、確認したほうがいい？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    確認したほうが成功率は上がります。聞き方を工夫すればサプライズ感は残せます。
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 同棲しているカップルの結婚祝いで気をつけることは？</h3>
                  <p className='text-gray-700 leading-relaxed'>
                    すでに家電や食器が揃っていることが多く、定番ほど被りやすいです。小型、消耗品、体験寄せが外しにくいです。
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
