import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '出産祝いの相場はいくら？関係性別の金額目安と失礼にならない決め方',
  description: '出産祝いの相場を関係性別に早見表で整理。連名、第二子以降、現金ではなくプレゼントの場合の予算配分、渡す時期、のし、内祝い負担への配慮、避けたいNGまで。失礼にならない決め方を1記事にまとめました。',
  // TODO: canonical設定
  // alternates: {
  //   canonical: 'https://www.hare-gift.com/baby_gift/baby-gift-price-guide',
  // },
  openGraph: {
    title: '出産祝いの相場はいくら？関係性別の金額目安と失礼にならない決め方',
    description: '出産祝いの相場を関係性別に早見表で整理。連名、第二子以降、現金ではなくプレゼントの場合の予算配分、渡す時期、のし、内祝い負担への配慮、避けたいNGまで。失礼にならない決め方を1記事にまとめました。',
    url: 'https://www.hare-gift.com/baby_gift/baby-gift-price-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '出産祝いの相場はいくら？関係性別の金額目安と失礼にならない決め方',
    description: '出産祝いの相場を関係性別に早見表で整理。連名、第二子以降、現金ではなくプレゼントの場合の予算配分、渡す時期、のし、内祝い負担への配慮、避けたいNGまで。失礼にならない決め方を1記事にまとめました。',
  },
};

export default function BabyGiftPriceGuidePage() {
  // FAQ JSON-LD
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '出産祝いの相場は友人だといくらが無難？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '3000円〜10000円が目安です。関係が近いほど上限寄りでも大丈夫ですが、内祝い負担が増えないよう配慮すると丁寧です。',
        },
      },
      {
        '@type': 'Question',
        'name': '連名で贈る場合は一人いくらが目安？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '職場なら1000円〜2000円、友人グループなら2000円〜5000円が目安です。先に一人あたりを決めて合算すると揉めにくいです。',
        },
      },
      {
        '@type': 'Question',
        'name': '第二子以降は相場を下げるべき？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '下げても失礼ではありませんが、金額より「内容」を変えるほうが喜ばれやすいです。消耗品やママ向けに寄せると外しにくいです。',
        },
      },
      {
        '@type': 'Question',
        'name': '出産祝いを渡すタイミングはいつがいい？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '退院後〜生後1か月頃が無難です。相手の負担を増やさないよう、宅配は受け取りやすい日を確認すると親切です。',
        },
      },
      {
        '@type': 'Question',
        'name': 'のしは付けたほうがいい？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '迷ったら付けるのが無難です。水引や表書きなどの基本は別記事のガイドにまとめると便利です。',
        },
      },
      {
        '@type': 'Question',
        'name': '出産祝いで避けたいNGは？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'サイズが必要な衣類、香りが強いもの、受け取り負担が重い冷蔵冷凍の大量セット、置き場所を取る大型アイテムは失敗しやすいです。',
        },
      },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className='mx-auto max-w-4xl px-4 py-8 md:px-6 lg:px-8'>
        {/* タイトル */}
        <header className='mb-8'>
          <h1 className='mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl'>
            出産祝いの相場はいくら？関係性別の金額目安と失礼にならない決め方
          </h1>
          <p className='text-sm text-gray-600'>
            最終更新日：2026-01-06
          </p>
        </header>

        {/* 導入文 */}
        <section className='mb-10 space-y-4 text-gray-800 leading-relaxed'>
          <p>
            出産祝いで一番迷うのは、品物そのものより「金額」です。
          </p>
          <p>
            少なすぎると失礼？ 多すぎると相手が気を遣う？ そもそも現金？ プレゼント？
          </p>
          <p>
            この記事では、出産祝いの相場を関係性別に整理しつつ、失礼にならない決め方を「内祝いの負担」「連名」「第二子以降」「相手の方針」まで含めて解説します。
          </p>
          <p>
            相場表だけ見たい人も、最後まで読む人も、どちらにも役立つ保存版です。
          </p>
        </section>

        {/* この記事でわかること */}
        <section className='mb-10 rounded-lg bg-blue-50 p-6'>
          <h2 className='mb-3 text-lg font-semibold text-gray-900'>
            この記事でわかること
          </h2>
          <ul className='space-y-2 text-gray-800'>
            <li className='flex items-start'>
              <span className='mr-2 text-blue-600'>✓</span>
              <span>出産祝いの相場（関係性別の早見表）</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-blue-600'>✓</span>
              <span>連名で贈る場合の相場と割り勘の考え方</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-blue-600'>✓</span>
              <span>第二子以降の相場と配慮のポイント</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-blue-600'>✓</span>
              <span>現金ではなくプレゼントの場合の予算配分</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-blue-600'>✓</span>
              <span>渡す時期、のし、内祝い負担の考え方</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-blue-600'>✓</span>
              <span>避けたいNGと、確認テンプレ</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-blue-600'>✓</span>
              <span>迷ったときの最終解</span>
            </li>
          </ul>
        </section>

        {/* CTA1 */}
        <section className='mb-10'>
          <Link
            href='/baby_gift'
            className='block rounded-lg bg-pink-500 px-6 py-4 text-center text-white font-semibold shadow-md transition-colors hover:bg-pink-600'
          >
            出産祝いギフトをカテゴリから探す
          </Link>
        </section>

        {/* まず結論 */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            まず結論：出産祝いの金額は「関係性」「距離感」「内祝い負担」で決めれば失敗しにくい
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              出産祝いは、相場に近いほど安心ですが、相場はあくまで目安です。
            </p>
            <p>
              失礼にならない最短ルートは、次の3点で決めることです。
            </p>
            <ul className='ml-6 list-disc space-y-2'>
              <li>関係性（友人、職場、親族など）</li>
              <li>距離感（最近会うか、付き合いの濃さ）</li>
              <li>内祝い負担（高額すぎると相手の手間が増える）</li>
            </ul>
            <p>
              この3つが合っていれば、相場の真ん中から多少ズレても失敗しにくいです。
            </p>
          </div>
        </section>

        {/* 表1：関係性別の相場早見表 */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            出産祝いの相場早見表（関係性別）
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              まずは「ざっくりの土台」です。
            </p>
            <p>
              ここを押さえれば、極端に外すことはありません。
            </p>
          </div>

          <div className='my-6 overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
            <table className='min-w-max border-collapse border border-gray-300' style={{ minWidth: '600px' }}>
              <thead className='bg-pink-100'>
                <tr>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    関係性
                  </th>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    一般的な目安
                  </th>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    補足
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr>
                  <td className='border border-gray-300 px-4 py-3'>友人</td>
                  <td className='border border-gray-300 px-4 py-3'>3000円〜10000円</td>
                  <td className='border border-gray-300 px-4 py-3'>親しいほど上限寄りでもOK</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-3'>親友</td>
                  <td className='border border-gray-300 px-4 py-3'>10000円〜30000円</td>
                  <td className='border border-gray-300 px-4 py-3'>高額は内祝い負担も考える</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 px-4 py-3'>職場の同僚</td>
                  <td className='border border-gray-300 px-4 py-3'>1000円〜5000円</td>
                  <td className='border border-gray-300 px-4 py-3'>連名にすると贈りやすい</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-3'>上司、目上</td>
                  <td className='border border-gray-300 px-4 py-3'>5000円〜10000円</td>
                  <td className='border border-gray-300 px-4 py-3'>形式を丁寧に、無難寄せ</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 px-4 py-3'>兄弟姉妹</td>
                  <td className='border border-gray-300 px-4 py-3'>10000円〜50000円</td>
                  <td className='border border-gray-300 px-4 py-3'>家の慣習があれば合わせる</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-3'>いとこ、親戚</td>
                  <td className='border border-gray-300 px-4 py-3'>5000円〜30000円</td>
                  <td className='border border-gray-300 px-4 py-3'>距離感で調整</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 px-4 py-3'>祖父母から孫</td>
                  <td className='border border-gray-300 px-4 py-3'>10000円〜100000円</td>
                  <td className='border border-gray-300 px-4 py-3'>家庭差が大きい、無理のない範囲で</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <p className='font-semibold text-gray-900 mb-2'>ポイント</p>
            <ul className='ml-6 list-disc space-y-2 text-gray-800'>
              <li>迷ったら「真ん中」か「少し控えめ」が無難</li>
              <li>高額にするなら、内祝いを辞退する一言があると親切</li>
            </ul>
          </div>
        </section>

        {/* 表2：連名で贈る場合の相場早見表 */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            連名で贈る場合の相場早見表（職場、友人グループ）
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              連名は、相手の負担を増やさず、贈る側も無理なくできる良い方法です。
            </p>
            <p>
              ただし、連名は「一人あたり」を決めてから合算すると揉めません。
            </p>
          </div>

          <div className='my-6 overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
            <table className='min-w-max border-collapse border border-gray-300' style={{ minWidth: '650px' }}>
              <thead className='bg-pink-100'>
                <tr>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    シーン
                  </th>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    一人あたり目安
                  </th>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    合計の目安
                  </th>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    コツ
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr>
                  <td className='border border-gray-300 px-4 py-3'>職場の同僚（3〜5人）</td>
                  <td className='border border-gray-300 px-4 py-3'>1000円〜2000円</td>
                  <td className='border border-gray-300 px-4 py-3'>3000円〜10000円</td>
                  <td className='border border-gray-300 px-4 py-3'>集金とメッセージカードをセットに</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-3'>部署やチーム（6〜10人）</td>
                  <td className='border border-gray-300 px-4 py-3'>500円〜1500円</td>
                  <td className='border border-gray-300 px-4 py-3'>5000円〜15000円</td>
                  <td className='border border-gray-300 px-4 py-3'>高額になりすぎないよう注意</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 px-4 py-3'>友人グループ（2〜4人）</td>
                  <td className='border border-gray-300 px-4 py-3'>2000円〜5000円</td>
                  <td className='border border-gray-300 px-4 py-3'>5000円〜20000円</td>
                  <td className='border border-gray-300 px-4 py-3'>代表者が受け取り連絡を一本化</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 表3：第二子以降の相場早見表 */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            第二子以降の相場早見表（「おめでとう」の形を変える）
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              第二子以降は、すでにベビー用品が揃っていることが多いです。
            </p>
            <p>
              だから「金額を下げる」だけが正解ではなく「内容を変える」のがコツです。
            </p>
          </div>

          <div className='my-6 overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
            <table className='min-w-max border-collapse border border-gray-300' style={{ minWidth: '650px' }}>
              <thead className='bg-pink-100'>
                <tr>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    相手との関係
                  </th>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    第一子の目安
                  </th>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    第二子以降の目安
                  </th>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    選び方の方向性
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr>
                  <td className='border border-gray-300 px-4 py-3'>友人</td>
                  <td className='border border-gray-300 px-4 py-3'>3000円〜10000円</td>
                  <td className='border border-gray-300 px-4 py-3'>3000円〜7000円</td>
                  <td className='border border-gray-300 px-4 py-3'>消耗品、ママ向け、上の子にも配慮</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-3'>親友</td>
                  <td className='border border-gray-300 px-4 py-3'>10000円〜30000円</td>
                  <td className='border border-gray-300 px-4 py-3'>5000円〜20000円</td>
                  <td className='border border-gray-300 px-4 py-3'>相手の方針確認、被り回避</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 px-4 py-3'>親族</td>
                  <td className='border border-gray-300 px-4 py-3'>10000円〜50000円</td>
                  <td className='border border-gray-300 px-4 py-3'>同程度〜控えめ</td>
                  <td className='border border-gray-300 px-4 py-3'>家の慣習があれば合わせる</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <p className='font-semibold text-gray-900 mb-2'>第二子以降で喜ばれやすい考え方</p>
            <ul className='ml-6 list-disc space-y-2 text-gray-800'>
              <li>ベビー用品より、消耗品や衛生寄せ</li>
              <li>上の子が寂しくならない配慮（小さなお菓子や絵本など）を添えるのも有効</li>
              <li>ママの回復と休息に寄せると刺さりやすい</li>
            </ul>
          </div>
        </section>

        {/* 表4：現金ではなくプレゼントの場合 */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            現金ではなくプレゼントの場合｜予算配分の目安（失礼回避）
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              現金が難しい、またはプレゼントで贈りたい場合も多いです。
            </p>
            <p>
              その場合は「相手が使える」「被らない」「受け取り負担が少ない」を重視すると失敗が減ります。
            </p>
          </div>

          <div className='my-6 overflow-x-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
            <table className='min-w-max border-collapse border border-gray-300' style={{ minWidth: '550px' }}>
              <thead className='bg-pink-100'>
                <tr>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    予算帯
                  </th>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    おすすめ配分
                  </th>
                  <th className='border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900'>
                    失敗しにくい考え方
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr>
                  <td className='border border-gray-300 px-4 py-3'>3000円</td>
                  <td className='border border-gray-300 px-4 py-3'>消耗品メイン</td>
                  <td className='border border-gray-300 px-4 py-3'>使えば減るものに寄せる</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-3'>5000円</td>
                  <td className='border border-gray-300 px-4 py-3'>消耗品＋小物</td>
                  <td className='border border-gray-300 px-4 py-3'>収納を増やさない、小さめ</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 px-4 py-3'>10000円</td>
                  <td className='border border-gray-300 px-4 py-3'>上質アイテム1つ</td>
                  <td className='border border-gray-300 px-4 py-3'>量より質、ブランドより実用</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-3'>20000円以上</td>
                  <td className='border border-gray-300 px-4 py-3'>体験やサポート寄り</td>
                  <td className='border border-gray-300 px-4 py-3'>相手の方針確認が安全</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='mt-4 space-y-4 text-gray-800 leading-relaxed'>
            <p>
              プレゼント選びをまとめた記事があるなら、内部リンクで誘導してください。
            </p>
            {/* TODO: 内部リンク - 出産祝い人気ギフトまとめ */}
            {/* <Link href='/baby_gift/baby-gift-items' className='text-pink-600 hover:underline'>
              出産祝いで喜ばれる人気ギフトまとめ
            </Link> */}
          </div>
        </section>

        {/* 渡す時期 */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            渡す時期はいつ？一番失礼になりにくいタイミング
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              出産直後は、連絡が返せないこともあります。
            </p>
            <p>
              相手の負担を増やさないタイミングが大事です。
            </p>
          </div>

          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <p className='font-semibold text-gray-900 mb-2'>目安</p>
            <ul className='ml-6 list-disc space-y-2 text-gray-800'>
              <li>産後すぐは避け、退院後〜生後1か月頃が無難</li>
              <li>ただし相手から希望がある場合はそれに合わせる</li>
              <li>宅配は事前に「受け取りやすい日」を聞くと親切</li>
            </ul>
          </div>
        </section>

        {/* のし */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            のしは必要？最低限これだけ押さえればOK
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              迷ったらのしを付けるのが無難です。
            </p>
            <p>
              出産祝いは形式があるほど、相手側の親族にも安心感があります。
            </p>
            <p>
              のしの詳細は別記事でまとめるのが便利です。
            </p>
            {/* TODO: 内部リンク - のし完全ガイド */}
            {/* <Link href='/baby_gift/baby-gift-noshi' className='text-pink-600 hover:underline'>
              出産祝いののし完全ガイド
            </Link> */}
          </div>
        </section>

        {/* 内祝い負担への配慮 */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            内祝い（お返し）負担への配慮｜高額すぎると相手が大変
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              出産祝いで見落とされがちなのが、内祝いの負担です。
            </p>
            <p>
              高額すぎると、相手は「お返し選び」「手配」「挨拶」が増えてしまいます。
            </p>
          </div>

          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <p className='font-semibold text-gray-900 mb-2'>配慮のコツ</p>
            <ul className='ml-6 list-disc space-y-2 text-gray-800'>
              <li>相場の範囲に収める</li>
              <li>高額にしたい場合は連名にして総額を調整</li>
              <li>親しい関係なら「内祝いは気にしないで」と一言添える</li>
            </ul>
          </div>
        </section>

        {/* NG */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            出産祝いで避けたいNG（失敗しやすい理由つき）
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              出産祝いは良かれと思ったものが負担になりやすいです。
            </p>
          </div>

          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <p className='font-semibold text-gray-900 mb-2'>避けたい方向性</p>
            <ul className='ml-6 list-disc space-y-2 text-gray-800'>
              <li>サイズが必要な衣類（サイズ事故が起きやすい）</li>
              <li>香りが強いもの（好みと体調で合わないことがある）</li>
              <li>冷蔵冷凍の大量セット（受け取りと保管が負担）</li>
              <li>置き場所を取る大型アイテム（部屋が散らかりやすい時期）</li>
            </ul>
          </div>

          <div className='mt-4 space-y-4 text-gray-800 leading-relaxed'>
            <p>
              NGを詳しくまとめる記事があるなら誘導してください。
            </p>
            {/* TODO: 内部リンク - 出産祝いNG */}
            {/* <Link href='/baby_gift/baby-gift-ng' className='text-pink-600 hover:underline'>
              出産祝いで避けたいNG完全版
            </Link> */}
          </div>
        </section>

        {/* 確認テンプレ */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            サプライズ感を残して確認する聞き方（テンプレ）
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              出産祝いは「確認したほうが成功率が上がる」ジャンルです。
            </p>
            <p>
              ただし、聞き方を工夫すると相手の負担を増やしません。
            </p>
          </div>

          <div className='mt-4 rounded-lg bg-blue-50 p-4 space-y-3'>
            <p className='font-semibold text-gray-900'>テンプレ</p>
            <div className='space-y-3 text-gray-800'>
              <p className='pl-4 border-l-4 border-blue-400'>
                「被りたくないから、必要なものってある？ 消耗品寄りでもいい？」
              </p>
              <p className='pl-4 border-l-4 border-blue-400'>
                「受け取りやすい曜日ある？ 冷蔵系は避けたい」
              </p>
              <p className='pl-4 border-l-4 border-blue-400'>
                「サイズがあるものは避けたいんだけど、好みのブランドとかある？」
              </p>
            </div>
          </div>

          <p className='mt-4 text-gray-800 leading-relaxed'>
            この3つで、失敗がかなり減ります。
          </p>
        </section>

        {/* 最終解 */}
        <section className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            迷ったときの最終解｜失礼にならない決め方はこれ
          </h2>
          <div className='space-y-4 text-gray-800 leading-relaxed'>
            <p>
              最後まで迷ったら、次の順で決めるとスムーズです。
            </p>
          </div>

          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <ol className='ml-6 list-decimal space-y-2 text-gray-800'>
              <li>関係性別の相場表で予算帯を決める</li>
              <li>高額すぎて内祝い負担が増えないか確認する</li>
              <li>プレゼントなら消耗品寄せにするか、相手に必要品を聞く</li>
              <li>宅配なら受け取りを確認して負担を減らす</li>
            </ol>
          </div>
        </section>

        {/* CTA2 */}
        <section className='mb-12'>
          <Link
            href='/baby_gift'
            className='block rounded-lg bg-pink-500 px-6 py-4 text-center text-white font-semibold shadow-md transition-colors hover:bg-pink-600'
          >
            出産祝いギフトをカテゴリから探す
          </Link>
        </section>

        {/* FAQ */}
        <section className='mb-12'>
          <h2 className='mb-6 text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2'>
            FAQ（よくある質問）
          </h2>

          <div className='space-y-6'>
            {/* FAQ 1 */}
            <div className='rounded-lg border border-gray-200 p-5'>
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>
                Q. 出産祝いの相場は友人だといくらが無難？
              </h3>
              <p className='text-gray-800 leading-relaxed'>
                3000円〜10000円が目安です。関係が近いほど上限寄りでも大丈夫ですが、内祝い負担が増えないよう配慮すると丁寧です。
              </p>
            </div>

            {/* FAQ 2 */}
            <div className='rounded-lg border border-gray-200 p-5'>
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>
                Q. 連名で贈る場合は一人いくらが目安？
              </h3>
              <p className='text-gray-800 leading-relaxed'>
                職場なら1000円〜2000円、友人グループなら2000円〜5000円が目安です。先に一人あたりを決めて合算すると揉めにくいです。
              </p>
            </div>

            {/* FAQ 3 */}
            <div className='rounded-lg border border-gray-200 p-5'>
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>
                Q. 第二子以降は相場を下げるべき？
              </h3>
              <p className='text-gray-800 leading-relaxed'>
                下げても失礼ではありませんが、金額より「内容」を変えるほうが喜ばれやすいです。消耗品やママ向けに寄せると外しにくいです。
              </p>
            </div>

            {/* FAQ 4 */}
            <div className='rounded-lg border border-gray-200 p-5'>
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>
                Q. 出産祝いを渡すタイミングはいつがいい？
              </h3>
              <p className='text-gray-800 leading-relaxed'>
                退院後〜生後1か月頃が無難です。相手の負担を増やさないよう、宅配は受け取りやすい日を確認すると親切です。
              </p>
            </div>

            {/* FAQ 5 */}
            <div className='rounded-lg border border-gray-200 p-5'>
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>
                Q. のしは付けたほうがいい？
              </h3>
              <p className='text-gray-800 leading-relaxed'>
                迷ったら付けるのが無難です。水引や表書きなどの基本は別記事のガイドにまとめると便利です。
              </p>
            </div>

            {/* FAQ 6 */}
            <div className='rounded-lg border border-gray-200 p-5'>
              <h3 className='mb-2 text-lg font-semibold text-gray-900'>
                Q. 出産祝いで避けたいNGは？
              </h3>
              <p className='text-gray-800 leading-relaxed'>
                サイズが必要な衣類、香りが強いもの、受け取り負担が重い冷蔵冷凍の大量セット、置き場所を取る大型アイテムは失敗しやすいです。
              </p>
            </div>
          </div>
        </section>

        {/* 関連記事リンク */}
        <section className='mb-12'>
          <h2 className='mb-4 text-xl font-bold text-gray-900'>
            関連記事
          </h2>
          <div className='space-y-3'>
            {/* TODO: 内部リンク - 以下の記事が存在する場合はコメントを外す */}
            {/* 
            <Link href='/baby_gift/baby-gift-items' className='block rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50'>
              <p className='font-semibold text-pink-600'>出産祝いで喜ばれる人気ギフトまとめ</p>
              <p className='text-sm text-gray-600 mt-1'>カテゴリ別に厳選した出産祝いギフトをご紹介</p>
            </Link>
            
            <Link href='/baby_gift/baby-gift-ng' className='block rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50'>
              <p className='font-semibold text-pink-600'>出産祝いで避けたいNG完全版</p>
              <p className='text-sm text-gray-600 mt-1'>失敗しないために知っておきたいNG集</p>
            </Link>
            
            <Link href='/baby_gift/baby-gift-noshi' className='block rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50'>
              <p className='font-semibold text-pink-600'>出産祝いののし完全ガイド</p>
              <p className='text-sm text-gray-600 mt-1'>水引、表書き、名前の書き方まで徹底解説</p>
            </Link>
            */}
          </div>
        </section>
      </article>
    </>
  );
}
