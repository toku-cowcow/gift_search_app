import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '新築祝いで喜ばれる定番ギフト決定版｜予算別（3,000円・5,000円・1万円・2万円・3万円）おすすめと失敗しない選び方',
  description: '新築祝いは「相手の家に置かれる」前提なので、好み・サイズ・タブー回避が重要。予算別に定番ギフトを具体例つきで紹介し、失敗しない選び方も解説。',
  keywords: [
    '新築祝い',
    '定番',
    'おすすめ',
    'ギフト',
    '予算別',
    '3000円',
    '5000円',
    '1万円',
    '2万円',
    '3万円',
    '選び方',
    '失敗しない',
    '人気',
    'ランキング',
    'プレゼント'
  ],
  openGraph: {
    title: '新築祝いで喜ばれる定番ギフト決定版｜予算別（3,000円・5,000円・1万円・2万円・3万円）おすすめと失敗しない選び方',
    description: '新築祝いは「相手の家に置かれる」前提なので、好み・サイズ・タブー回避が重要。予算別に定番ギフトを具体例つきで紹介し、失敗しない選び方も解説。',
    type: 'article',
    url: 'https://yourdomain.com/articles/new_house_celebration/popular-gifts-by-budget',
  }
};

export default function PopularGiftsByBudgetPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* パンくずリスト */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-pink-600 transition-colors">
                ホーム
              </Link>
              <span className="mx-2">/</span>
              <Link href="/new_house_celebration" className="hover:text-pink-600 transition-colors">
                新築祝い
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">定番ギフト決定版</span>
            </nav>
          </div>
        </div>

        {/* ヒーローセクション */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-6">
              <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1 rounded-full">
                予算別おすすめギフト
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              新築祝いで喜ばれる定番ギフト決定版<br />
              <span className="text-pink-600">予算別おすすめと失敗しない選び方</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              新築祝いは「相手の家に置かれる」前提なので、好み・サイズ・タブー回避が重要です。<br />
              この記事では、<strong>予算別（3,000円・5,000円・1万円・2万円・3万円）</strong>に定番ギフトを具体例つきで紹介し、失敗しない選び方も解説します。
            </p>
          </div>
        </div>

        {/* メインコンテンツ */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          
          {/* セクション1: まず結論 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              まず結論：新築祝いで&quot;外しにくい&quot;定番はこの5系統
            </h2>
            
            <p className="text-gray-700 mb-6">
              新築祝いの人気・定番は、だいたい次の系統に収束します。
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                  <div className="pt-1">
                    <strong className="text-gray-900">カタログギフト（相手が選べる）</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                  <div className="pt-1">
                    <strong className="text-gray-900">タオル・寝具（上質・無難）</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                  <div className="pt-1">
                    <strong className="text-gray-900">食器・キッチン用品（実用＋気分が上がる）</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                  <div className="pt-1">
                    <strong className="text-gray-900">お菓子・食べ物（消えもの）</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
                  <div className="pt-1">
                    <strong className="text-gray-900">洗剤・バス・スキンケア（上質日用品）</strong>
                  </div>
                </li>
              </ol>
              <p className="mt-4 text-sm text-gray-600">
                この並び自体が「定番ランキング」としてよく紹介されています。
              </p>
            </div>
          </section>

          {/* セクション2: 失敗率を下げる選び方の型 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              失敗率を一気に下げる「選び方の型」
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  型1：相手の好みが読めないなら「消えもの」か「選べる」
                </h3>
                <p className="text-gray-700 mb-4">
                  新居のインテリアは好みが強いので、迷ったら次のいずれかに寄せると失敗が減ります。
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>食べてなくなる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>使ってなくなる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>相手が自分で選べる</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  型2：新築は&quot;壁を傷つけたくない&quot;が多い
                </h3>
                <p className="text-gray-700">
                  壁掛け系や取り付け前提のものは、避けた方がよい例として挙げられます（壁掛け時計・アート等）。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  型3：タブーが気になる相手には「火・刃物・踏むもの」を避ける
                </h3>
                <p className="text-gray-700">
                  新築祝いでは、火を連想するもの（キャンドル等）や赤いインテリア、踏むもの（マット・スリッパ）などを避ける説明がよくあります。
                </p>
              </div>
            </div>
          </section>

          {/* セクション3: 予算別おすすめ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              予算別：新築祝いの定番ギフト（具体例多め）
            </h2>

            {/* 3,000円前後 */}
            <div className="mb-10">
              <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  3,000円前後：職場・ライトなお祝いで&quot;ちゃんとして見える&quot;ゾーン
                </h3>
                <p className="text-gray-700">
                  この価格帯は「実用的でセンスよく見える小物」が強いです。
                </p>
              </div>

              <h4 className="font-bold text-gray-900 mb-4">おすすめ例（外しにくい順）</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">上質ハンドソープ（ポンプ式）</h5>
                  <p className="text-sm text-gray-700">無香料〜微香だと好み割れが少ない</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">食器用洗剤・ハンドソープのセット</h5>
                  <p className="text-sm text-gray-700">見栄えが出る</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">個包装の焼き菓子・スイーツ</h5>
                  <p className="text-sm text-gray-700">来客や挨拶で出しやすい</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">ドリップコーヒー／紅茶の詰め合わせ</h5>
                  <p className="text-sm text-gray-700">カフェインNGがありそうならデカフェ混在タイプへ</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">キッチンクロス（無地・吸水性重視）</h5>
                  <p className="text-sm text-gray-700">実用性が高く喜ばれやすい</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">&quot;小さめ&quot;のタオル（手拭き用）</h5>
                  <p className="text-sm text-gray-700">派手柄より無地寄りが安全</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h5 className="font-bold text-red-800 mb-2">避けたい例</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 強い香りのディフューザー（好みが割れやすい）</li>
                  <li>• 大きい置物（置き場問題）</li>
                </ul>
              </div>
            </div>

            {/* 5,000円前後 */}
            <div className="mb-10">
              <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  5,000円前後：友達・同僚で一番使いやすい&quot;王道&quot;ゾーン
                </h3>
                <p className="text-gray-700">
                  「実用＋ちょっと上質」に振ると、満足度が上がります。
                </p>
              </div>

              <h4 className="font-bold text-gray-900 mb-4">おすすめ例</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">上質タオル（フェイスタオル2枚など）</h5>
                  <p className="text-sm text-gray-700">色は白・生成り・グレーなど合わせやすい方向</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">入浴剤（ギフトボックス系）</h5>
                  <p className="text-sm text-gray-700">香りは強すぎないものが安全</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">調味料ギフト</h5>
                  <p className="text-sm text-gray-700">オリーブオイル、だし、塩、ドレッシングなど</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">ジャム・はちみつ・スプレッド</h5>
                  <p className="text-sm text-gray-700">朝食系は家族にも刺さりやすい</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">小さめ食器（ペアのマグ、ボウル、箸置きなど）</h5>
                  <p className="text-sm text-gray-700">&quot;割れ物&quot;が心配なら避ける or 事前確認</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">生活消耗品の上位版（掃除系・除菌系のセット）</h5>
                  <p className="text-sm text-gray-700">実用性が高く喜ばれやすい</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-300 p-4 rounded">
                <h5 className="font-bold text-gray-900 mb-2">選び方のコツ（5,000円帯）</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 「家の雰囲気を決める物」より「生活がラクになる物」</li>
                  <li>• 1点豪華より、使いやすいセット構成が強い</li>
                </ul>
              </div>
            </div>

            {/* 10,000円前後 */}
            <div className="mb-10">
              <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  10,000円前後：ちゃんと感が出る&quot;定番の勝ち筋&quot;ゾーン
                </h3>
                <p className="text-gray-700">
                  1万円は「負担にならず、でもしっかり嬉しい」予算としてよく語られ、器・グルメ・上質日用品など&quot;使えるギフト&quot;が定番として挙げられます。
                </p>
              </div>

              <h4 className="font-bold text-gray-900 mb-4">おすすめ例（迷ったらここ）</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">カタログギフト（1万円帯）</h5>
                  <p className="text-sm text-gray-700">好みが読めない相手に最強</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">食卓系のアップグレード</h5>
                  <p className="text-sm text-gray-700">ペアグラス、プレート、カトラリー（好み確認できると強い）</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">&quot;良い&quot;消えもの（グルメ）</h5>
                  <p className="text-sm text-gray-700">スープ・レトルト・冷凍の詰め合わせ（冷凍庫事情は一言聞けると安心）</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">上質タオル＋消えもののセット</h5>
                  <p className="text-sm text-gray-700">例：タオル＋コーヒー、タオル＋お菓子</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">お掃除・家事ラク系</h5>
                  <p className="text-sm text-gray-700">ただし「香り強め」「場所を取る」は避ける</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h5 className="font-bold text-red-800 mb-2">避けたい例</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 壁掛け前提のインテリア（壁を傷つける懸念）</li>
                  <li>• 大型の家電（相手の導線・好みに依存）</li>
                </ul>
              </div>
            </div>

            {/* 20,000円前後 */}
            <div className="mb-10">
              <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  20,000円前後：親しい友人・親戚向け（&quot;相手が選べる&quot;が強い）
                </h3>
                <p className="text-gray-700">
                  2万円帯は、外すと痛いので&quot;相手が選べる&quot;か&quot;相手の好みが確実&quot;な方向がおすすめです。
                </p>
              </div>

              <h4 className="font-bold text-gray-900 mb-4">おすすめ例</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">カタログギフト（2万円帯）</h5>
                  <p className="text-sm text-gray-700">インテリア・食・体験まで選択肢が広い</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">ちょい贅沢グルメ</h5>
                  <p className="text-sm text-gray-700">ブランド肉、海鮮、フルーツ、名店スープなど</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">寝具・リラックス系（相手の好みが分かるなら）</h5>
                  <p className="text-sm text-gray-700">ブランケット、ルームウェア、上質パジャマなど</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">キッチンの&quot;本命&quot;消耗品</h5>
                  <p className="text-sm text-gray-700">例：上質なまな板・ボウル等（ただし好みとサイズ確認推奨）</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-300 p-4 rounded">
                <h5 className="font-bold text-gray-900 mb-2">この価格帯での鉄則</h5>
                <p className="text-sm text-gray-700 mb-2">事前に1つだけ聞くと成功率が跳ねます</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 「食べ物系と日用品系、どっちが嬉しい？」</li>
                  <li>• 「香りもの苦手？」</li>
                  <li>• 「冷凍便でも大丈夫？」</li>
                </ul>
              </div>
            </div>

            {/* 30,000円以上 */}
            <div className="mb-10">
              <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  30,000円以上：家族・兄弟姉妹・超親しい間柄（&quot;希望確認&quot;推奨）
                </h3>
                <p className="text-gray-700">
                  この帯は「相手の希望に合わせる」が一番スマートです。希望が取れないならカタログが安全。
                </p>
              </div>

              <h4 className="font-bold text-gray-900 mb-4">おすすめ例</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">高価格帯カタログギフト</h5>
                  <p className="text-sm text-gray-700">希望が取れない場合の最適解</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">家事負担が減る系（ただし相手の希望前提）</h5>
                  <p className="text-sm text-gray-700">例：キッチン家電、ロボット掃除機など（好み・置き場・既に持ってる問題が大きい）</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-2">記念性のあるもの（相手が望む場合のみ）</h5>
                  <p className="text-sm text-gray-700">例：表札周り、アート、観葉植物など（好み割れが大きい）</p>
                </div>
              </div>
            </div>
          </section>

          {/* セクション4: 避けるべきギフト */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              受け取り側が地味に困るギフト（避けると評価が上がる）
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <h3 className="font-bold text-red-800 mb-2">壁に穴が必要なもの</h3>
                <p className="text-gray-700">壁掛け時計・大きいアート等</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <h3 className="font-bold text-red-800 mb-2">火を連想するもの</h3>
                <p className="text-gray-700">キャンドル等、赤が強いインテリア</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <h3 className="font-bold text-red-800 mb-2">マット・スリッパ</h3>
                <p className="text-gray-700">特に目上には避ける考え方</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <h3 className="font-bold text-red-800 mb-2">大きすぎる置物・家具</h3>
                <p className="text-gray-700">置き場問題</p>
              </div>
            </div>
          </section>

          {/* セクション5: メッセージ例 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              そのまま使えるメッセージ例（短くて万能）
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">友達へ</h3>
                <p className="text-gray-700 border-l-4 border-pink-400 pl-3">
                  新築おめでとう！落ち着いた頃に使ってもらえたら嬉しいです。新生活楽しんでね。
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">同僚へ</h3>
                <p className="text-gray-700 border-l-4 border-pink-400 pl-3">
                  ご新居おめでとうございます。ささやかですがお祝いの気持ちです。素敵な新生活になりますように。
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">親戚へ</h3>
                <p className="text-gray-700 border-l-4 border-pink-400 pl-3">
                  ご新居の完成（ご入居）おめでとうございます。ささやかですがお祝いの品です。今後のご多幸をお祈りしています。
                </p>
              </div>
            </div>
          </section>

          {/* セクション6: FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              よくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. 友達の新築祝い、いちばん無難なのは？</h3>
                <p className="text-gray-700">
                  相場として5,000〜10,000円が目安とされ、定番はタオルやスイーツなどが挙げられます。相手の好みが読めない場合は、カタログギフトや消えもの（お菓子・コーヒー等）が安全です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. 迷ったら何を選べばいい？</h3>
                <p className="text-gray-700">
                  相手の好みが読めない場合は、消えもの（食品など）やカタログギフトが&quot;気を遣わせにくい&quot;としてよく推奨されます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. 3,000円で喜ばれるギフトは？</h3>
                <p className="text-gray-700">
                  上質なハンドソープ、個包装の焼き菓子、ドリップコーヒー・紅茶の詰め合わせなど、&quot;実用的でセンスよく見える小物&quot;が喜ばれやすいです。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. 1万円でおすすめのギフトは？</h3>
                <p className="text-gray-700">
                  カタログギフト（好みが読めない相手に最強）、食卓系のアップグレード（ペアグラス、プレート等）、上質グルメの詰め合わせなどが定番です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. 新築祝いで避けた方がいいものは？</h3>
                <p className="text-gray-700">
                  壁に穴が必要なもの（壁掛け時計・アート）、火を連想するもの（キャンドル等）、マット・スリッパ（特に目上）、大きすぎる置物・家具などは避けた方が無難です。
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 text-center shadow-sm border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              新築祝いギフトを探す
            </h3>
            <p className="text-gray-700 mb-6">
              予算と相手に合わせた、喜ばれるギフトを見つけましょう。
            </p>
            <Link
              href="/new_house_celebration"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-md"
            >
              新築祝いギフトを探す
            </Link>
          </div>
        </article>
      </main>
      <Footer />

      {/* JSON-LD構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "友達の新築祝い、いちばん無難なのは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "相場として5,000〜10,000円が目安とされ、定番はタオルやスイーツなどが挙げられます。相手の好みが読めない場合は、カタログギフトや消えもの（お菓子・コーヒー等）が安全です。"
                }
              },
              {
                "@type": "Question",
                "name": "迷ったら何を選べばいい？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "相手の好みが読めない場合は、消えもの（食品など）やカタログギフトが\"気を遣わせにくい\"としてよく推奨されます。"
                }
              },
              {
                "@type": "Question",
                "name": "3,000円で喜ばれるギフトは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "上質なハンドソープ、個包装の焼き菓子、ドリップコーヒー・紅茶の詰め合わせなど、「実用的でセンスよく見える小物」が喜ばれやすいです。"
                }
              },
              {
                "@type": "Question",
                "name": "1万円でおすすめのギフトは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "カタログギフト（好みが読めない相手に最強）、食卓系のアップグレード（ペアグラス、プレート等）、上質グルメの詰め合わせなどが定番です。"
                }
              },
              {
                "@type": "Question",
                "name": "新築祝いで避けた方がいいものは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "壁に穴が必要なもの（壁掛け時計・アート）、火を連想するもの（キャンドル等）、マット・スリッパ（特に目上）、大きすぎる置物・家具などは避けた方が無難です。"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
