import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '新築祝いのタブー完全ガイド｜避けるべきギフト・縁起・マナーを徹底解説',
  description: '新築祝いで贈ってはいけないタブーギフトを3つのカテゴリに分類。火・刃物・マット・時計など、縁起の悪いものや失礼になるものを具体例と代替案で徹底解説します。',
  keywords: [
    '新築祝い',
    'タブー',
    'NG',
    '火',
    '刃物',
    'マット',
    '時計',
    '縁起',
    'マナー',
    '避けるべき',
    '失礼',
    '代替案',
    '新居祝い',
    '引越し祝い'
  ],
  openGraph: {
    title: '新築祝いのタブー完全ガイド｜避けるべきギフト・縁起・マナーを徹底解説',
    description: '新築祝いで贈ってはいけないタブーギフトを3つのカテゴリに分類。火・刃物・マット・時計など、縁起の悪いものや失礼になるものを具体例と代替案で徹底解説します。',
    type: 'article',
    url: 'https://yourdomain.com/articles/new_house_celebration/taboo-guide',
  }
};

export default function NewHouseTabooGuidePage() {
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
              <span className="text-gray-900">タブー完全ガイド</span>
            </nav>
          </div>
        </div>

        {/* ヒーローセクション */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-6">
              <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-1 rounded-full">
                タブー・NG完全ガイド
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              新築祝いのタブー完全ガイド<br />
              <span className="text-pink-600">避けるべきギフト・縁起・マナーを徹底解説</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              新築祝いには「贈ってはいけない」とされるものがいくつかあります。<br />
              この記事では、タブーを<strong>3つのカテゴリ</strong>に分類し、なぜNGとされるのか、代替案は何かを具体例とともに徹底解説します。
            </p>
          </div>
        </div>

        {/* メインコンテンツ */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          
          {/* セクション1: タブー3種類の分類 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              新築祝いのタブーは大きく3種類ある
            </h2>

            <div className="bg-pink-50 p-6 rounded-lg mb-8">
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-pink-600 mr-3">1.</span>
                  <div>
                    <strong className="text-gray-900">縁起（連想）系：</strong>
                    <span className="text-gray-700">火事／縁切り／別れ／弔事を連想させるもの</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-pink-600 mr-3">2.</span>
                  <div>
                    <strong className="text-gray-900">目上へのマナー系：</strong>
                    <span className="text-gray-700">「踏みつける」「勤勉に」など失礼な意味に取られやすいもの</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-pink-600 mr-3">3.</span>
                  <div>
                    <strong className="text-gray-900">実用トラブル系：</strong>
                    <span className="text-gray-700">壁に穴を開ける・場所を取る・好みが強すぎるもの</span>
                  </div>
                </li>
              </ol>
              <p className="mt-4 text-sm text-gray-600">
                この3種類のどれかに当たると「気まずい」になりやすいです。
              </p>
            </div>
          </section>

          {/* セクション2: タブー① 火・火事 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              タブー① 火・火事を連想させるもの（新築祝いで最も避けられがち）
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded mb-4">
              <p className="font-bold text-red-800 mb-2">理由</p>
              <p className="text-gray-700">
                新居に「火事」を連想させるのは縁起が悪い、とされるため。赤い色も&quot;炎&quot;を連想させるとして避ける考え方があります。
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">具体例（うっかり選びやすい）</h3>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>キャンドル（アロマキャンドル含む）</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>ライター、灰皿、喫煙具</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>ストーブ・コンロなど火器連想の強いもの</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>真っ赤なインテリア小物、赤基調の家電・雑貨</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>花を贈る場合の「赤い花」は避ける、という注意もあります</span>
              </li>
            </ul>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">どうしても&quot;雰囲気系&quot;を贈りたい代替案</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>香りを贈りたい → <strong>無香料〜微香の入浴剤／バスソルト</strong>（香り強すぎ問題を避ける）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>インテリアを贈りたい → <strong>小さめのフラワーベース／置き物</strong>（大きすぎない）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>色を入れたい → 赤を避けて <strong>白・ベージュ・グレー・木目</strong>など&quot;合わせやすい色&quot;に寄せる</span>
                </li>
              </ul>
            </div>
          </section>

          {/* セクション3: タブー② 刃物 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              タブー② 刃物（包丁・ハサミ）は「縁を切る」連想がある一方、例外も多い
            </h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded mb-4">
              <p className="text-gray-700 mb-2">
                <strong className="text-gray-900">理由（タブー側）：</strong>「縁を切る」に通じるため避ける、という説明がよくあります。
              </p>
              <p className="text-gray-700">
                <strong className="text-gray-900">一方で：</strong>近年は「未来を切り拓く」など良い意味に転じて贈る考え方も紹介されています。
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">タブー扱いされやすい刃物の例</h3>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">△</span>
                <span>包丁（高級包丁も含む）</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">△</span>
                <span>キッチンバサミ、ハサミ、カッター類</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">△</span>
                <span>ペーパーナイフ等の&quot;刃&quot;が連想されるもの</span>
              </li>
            </ul>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">贈っても成立しやすい条件（例外の作り方）</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>相手が料理好きで、<strong>&quot;良い包丁が欲しい&quot;と希望がある</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>親しい関係で、価値観が読める</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>贈るときに意味づけを添える</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded mb-6">
              <h4 className="font-bold text-gray-900 mb-2">例文（刃物を&quot;OK化&quot;する言い方）</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="border-l-4 border-pink-400 pl-3">
                  「新生活を&quot;切り拓く&quot;縁起物として、使いやすい一本を選んだよ。」
                </p>
                <p className="border-l-4 border-pink-400 pl-3">
                  「もし縁起が気になるようなら遠慮なく言ってね。別のものに変えるよ。」
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              💡 迷ったら、刃物は避けて<strong>&quot;自分で選べるギフト&quot;</strong>に逃がすのが安全です。
            </p>
          </section>

          {/* セクション4: タブー③ マット・スリッパ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              タブー③ マット・スリッパ・履物（「踏みつける」連想）※特に目上に注意
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded mb-4">
              <p className="font-bold text-red-800 mb-2">理由</p>
              <p className="text-gray-700">
                マットやスリッパ等は&quot;踏みつける&quot;&quot;踏み台にする&quot;を連想させ、目上に失礼とされやすい。
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">タブーになりやすい例</h3>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>玄関マット、キッチンマット、ラグ</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>スリッパ</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>靴・靴下など履物（特に目上へ）</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mb-6">
              <p className="text-sm text-gray-700">
                <strong>ただし：</strong>友達（対等）で、インテリアの好みも分かっていて、相手が欲しがっている場合は成立することも。
                その場合でも&quot;デザインの好み&quot;&quot;サイズ&quot;&quot;洗濯の手間&quot;で事故が起きるので、事前確認が最強です。
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">代替案（似た&quot;生活が助かる系&quot;で安全）</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>タオル（上質・無地寄り）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>ハンドソープ／食器用洗剤の上質ライン</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>高級調味料セット（置き場所を取らない）</span>
                </li>
              </ul>
            </div>
          </section>

          {/* セクション5: タブー④ 時計 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              タブー④ 時計（壁掛け時計は特に注意。「勤勉に」のニュアンスも）
            </h2>
            
            <p className="text-gray-700 mb-6">
              時計は&quot;2種類の理由&quot;で地雷になりやすいです。
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <p className="font-bold text-red-800 mb-2">理由A：壁掛けは&quot;壁に穴を開ける／傷を付ける&quot;問題</p>
                <p className="text-gray-700">
                  新築は壁を傷つけたくない人が多く、掛け時計は避けた方がよい、という説明がよくあります。
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <p className="font-bold text-red-800 mb-2">理由B：目上には&quot;もっと勤勉に&quot;という意味に取られる場合がある</p>
                <p className="text-gray-700">
                  上司など目上への贈り物として、時計（特に腕時計）がタブーとされることがある、という説明もあります。
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">&quot;時計を贈るなら&quot;の安全策</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>置き時計</strong>に寄せる（穴問題を回避）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>それでもインテリアの好みが強いので、色は無難に、サイズは小さめに</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 p-4 rounded">
              <p className="font-bold text-gray-900 mb-2">例：こういうときは避けるのが無難</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 上司・取引先・年配の親戚など、しきたり重視の可能性がある相手</li>
                <li>• インテリアに強いこだわりがありそうな相手（時計はセンスが出る）</li>
              </ul>
            </div>
          </section>

          {/* セクション6: その他のタブー */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              ついでに押さえたい「見落としがちなタブー／事故りポイント」
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">壁に穴が必要なもの（時計以外も）</h3>
                <p className="text-gray-700">
                  額縁、壁掛けアート、ウォールラック等は&quot;壁を傷つける&quot;懸念で避ける考え方があります。
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">大きすぎる家具・置物</h3>
                <p className="text-gray-700">
                  置き場所問題で&quot;ありがた迷惑&quot;になりやすいので、相手の希望がない限り避けるのが無難です。
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">日本茶（弔事イメージがある一方、地域差あり）</h3>
                <p className="text-gray-700">
                  「弔事の返礼に使われがちで慶事に不向き」とされる一方、地域によっては慶事でも用いられ、タブーと言い切れない、という整理もあります。<br />
                  迷ったら、<strong>日本茶単品は避けて</strong>、コーヒー・紅茶・焼き菓子などに寄せると安全です。
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">観葉植物（縁起は良いが、好みと手間で割れる）</h3>
                <p className="text-gray-700">
                  &quot;根付く&quot;縁起で新築祝いに向くという説明がある一方、手入れが負担になる場合もあるため、相手が植物好きか確認するのが推奨されています。
                </p>
              </div>
            </div>
          </section>

          {/* セクション7: 安全な選択肢 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              迷ったらこれに逃げる：新築祝い&quot;安全度が高い&quot;3方向
            </h2>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                  <span className="font-bold text-gray-900 pt-1">消えもの（お菓子・コーヒー・スープなど）</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                  <span className="font-bold text-gray-900 pt-1">カタログギフト（相手が選べる）</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                  <span className="font-bold text-gray-900 pt-1">上質な日用品（タオル・ソープ等、色は無難に）</span>
                </li>
              </ol>
            </div>
          </section>

          {/* 結論 */}
          <section className="mb-12">
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">結論</h2>
              <p className="text-gray-700 leading-relaxed">
                新築祝いのタブーは「絶対NG」ではなく、相手の価値観次第。ただ、火・刃物・踏むもの（マットやスリッパ）・壁に穴が必要な掛け時計などは、昔からの連想や実用上の負担で&quot;外す確率&quot;が上がる。迷ったときは、相手が選べるギフトや消えものに寄せるのが一番スマート。
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              よくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q1. 赤い花や赤いインテリアは絶対NGですか？</h3>
                <p className="text-gray-700">
                  絶対NGではありませんが、&quot;火&quot;を連想させるため避ける人が多いです。特に目上や年配の方には避けた方が無難。どうしても贈りたい場合は、白・ベージュ・グレーなど合わせやすい色に寄せるのが安全です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q2. 包丁は&quot;未来を切り拓く&quot;で贈ってもいい？</h3>
                <p className="text-gray-700">
                  相手が料理好きで希望がある場合や、親しい関係であれば成立することもあります。ただし、&quot;縁を切る&quot;連想があるため、迷ったら避けるかカタログギフトに逃がすのが安全です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q3. マットやスリッパは友達同士ならOK？</h3>
                <p className="text-gray-700">
                  友達（対等な関係）で、インテリアの好みも分かっていて、相手が欲しがっている場合は成立することもあります。ただし&quot;デザインの好み&quot;&quot;サイズ&quot;&quot;洗濯の手間&quot;で事故が起きやすいので、事前確認が推奨されます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q4. 観葉植物は&quot;根付く&quot;で縁起がいいのでは？</h3>
                <p className="text-gray-700">
                  &quot;根付く&quot;縁起で新築祝いに向くという説明がある一方、手入れが負担になる場合もあります。相手が植物好きか確認してから贈るのが推奨されています。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q5. 迷ったときに一番安全なギフトは？</h3>
                <p className="text-gray-700">
                  カタログギフト（相手が選べる）、消えもの（お菓子・コーヒーなど）、上質な日用品（タオル・ソープ等、色は無難に）が安全度が高いです。
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
              タブーを避けて、喜ばれるギフトを見つけましょう。
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
                "name": "赤い花や赤いインテリアは絶対NGですか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "絶対NGではありませんが、「火」を連想させるため避ける人が多いです。特に目上や年配の方には避けた方が無難。どうしても贈りたい場合は、白・ベージュ・グレーなど合わせやすい色に寄せるのが安全です。"
                }
              },
              {
                "@type": "Question",
                "name": "包丁は「未来を切り拓く」で贈ってもいい？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "相手が料理好きで希望がある場合や、親しい関係であれば成立することもあります。ただし、「縁を切る」連想があるため、迷ったら避けるかカタログギフトに逃がすのが安全です。"
                }
              },
              {
                "@type": "Question",
                "name": "マットやスリッパは友達同士ならOK？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "友達（対等な関係）で、インテリアの好みも分かっていて、相手が欲しがっている場合は成立することもあります。ただし「デザインの好み」「サイズ」「洗濯の手間」で事故が起きやすいので、事前確認が推奨されます。"
                }
              },
              {
                "@type": "Question",
                "name": "観葉植物は「根付く」で縁起がいいのでは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "「根付く」縁起で新築祝いに向くという説明がある一方、手入れが負担になる場合もあります。相手が植物好きか確認してから贈るのが推奨されています。"
                }
              },
              {
                "@type": "Question",
                "name": "迷ったときに一番安全なギフトは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "カタログギフト（相手が選べる）、消えもの（お菓子・コーヒーなど）、上質な日用品（タオル・ソープ等、色は無難に）が安全度が高いです。"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
