import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '新築祝いの「のし」完全ガイド｜表書き・連名・外のし内のしを例つきで徹底解説',
  description: '新築祝いののしは「紅白の蝶結び」「表書き」「名入れ」「外のし内のし」で迷いがち。本記事では手渡し・配送、連名の書き方まで例を多めにわかりやすく解説します。',
  keywords: [
    '新築祝い',
    'のし',
    '熨斗',
    '表書き',
    '連名',
    '外のし',
    '内のし',
    '水引',
    '名入れ',
    'マナー',
    '書き方',
    '例',
    '一同',
    '夫婦'
  ],
  openGraph: {
    title: '新築祝いの「のし」完全ガイド｜表書き・連名・外のし内のしを例つきで徹底解説',
    description: '新築祝いののしは「紅白の蝶結び」「表書き」「名入れ」「外のし内のし」で迷いがち。本記事では手渡し・配送、連名の書き方まで例を多めにわかりやすく解説します。',
    type: 'article',
    url: 'https://yourdomain.com/articles/new_house_celebration/noshi-complete-guide',
  }
};

export default function NoshiCompleteGuidePage() {
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
              <span className="text-gray-900">のし完全ガイド</span>
            </nav>
          </div>
        </div>

        {/* ヒーローセクション */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-6">
              <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1 rounded-full">
                のし・マナー完全ガイド
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              新築祝いの&quot;のし&quot;完全ガイド<br />
              <span className="text-pink-600">表書き・連名・外のし内のしを例つきで徹底解説</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              新築祝いののしは&quot;紅白の蝶結び&quot;&quot;表書き&quot;&quot;名入れ&quot;&quot;外のし内のし&quot;で迷いがち。<br />
              本記事では手渡し・配送、連名の書き方まで例を多めにわかりやすく解説します。
            </p>
          </div>
        </div>

        {/* メインコンテンツ */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          
          {/* はじめに */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              はじめに：新築祝いののしは&quot;型&quot;を覚えると一気にラク
            </h2>
            
            <p className="text-gray-700 mb-6">
              新築祝いののしは、難しく見えても判断ポイントは少ないです。<br />
              ざっくり言うと、次の4つを押さえれば失礼になりにくく、見た目も整います。
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">水引は何を選ぶか</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">表書きを何にするか</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">名入れをどう書くか（特に連名）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">外のしと内のしをどう使い分けるか</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              この記事では、ここを&quot;具体例多め&quot;で迷いなく選べるようにまとめます。
            </p>
          </section>

          {/* セクション1: 水引 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              のしの基本：新築祝いで最初に決めるのは水引
            </h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">新築祝いの水引は&quot;紅白の蝶結び&quot;が基本</h3>
            
            <p className="text-gray-700 mb-6">
              新築祝いは、何度あってもよいお祝いごと。<br />
              そのため、水引は&quot;紅白の蝶結び（花結び）&quot;を選ぶのが基本です。
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded mb-6">
              <h4 className="font-bold text-red-800 mb-3">よくある間違い</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-gray-900 mb-2">• 結び切りを選んでしまう</p>
                  <p className="text-gray-700 text-sm">
                    結び切りは、主に婚礼など&quot;繰り返さない方がよい&quot;お祝いで使われます。新築祝いでは基本的に蝶結びが安心です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* セクション2: 表書き */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              表書き：迷ったら&quot;御祝&quot;が一番安全
            </h2>
            
            <p className="text-gray-700 mb-6">
              表書きは、相手との関係性や状況で微調整できますが、迷うほど候補が増えます。<br />
              結論として、迷ったらこれでOKです。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">まずは鉄板：表書きは&quot;御祝&quot;</h3>
            
            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded mb-6">
              <p className="text-gray-700">
                新築か引っ越し祝いかが曖昧なとき、相手が中古購入の可能性があるときでも、&quot;御祝&quot;は使いやすく、外しにくい表書きです。
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">新築が確実なときの候補</h3>
            
            <p className="text-gray-700 mb-4">新築が確実なら、以下の表書きもよく使われます。</p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>御新築御祝</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>新築御祝</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>祝御新築</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
              <h4 className="font-bold text-gray-900 mb-2">ここで迷いがちなポイント</h4>
              <div>
                <p className="font-bold text-gray-900 mb-1">• 文字数や表現を気にする方がいる</p>
                <p className="text-gray-700 text-sm">
                  堅めの場（目上・親戚・年配の方が絡む）ほど、迷ったら&quot;御祝&quot;または&quot;御新築御祝&quot;寄りにすると安心です。
                </p>
              </div>
            </div>
          </section>

          {/* セクション3: 名入れ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              名入れ：一番つまずくのは&quot;連名&quot;と&quot;人数が多い時&quot;
            </h2>
            
            <p className="text-gray-700 mb-6">
              名入れは&quot;のし下&quot;に書く名前です。ここはルールさえ知っていれば綺麗に決まります。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">個人で贈る場合</h3>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <p className="text-gray-700 mb-2"><strong>例：</strong>山田太郎</p>
              <p className="text-sm text-gray-600">
                職場文化によっては名字のみもありますが、迷ったらフルネームが無難です。
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">夫婦で贈る場合</h3>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <p className="text-gray-700 mb-2"><strong>例：</strong>山田太郎・花子</p>
              <p className="text-sm text-gray-600">
                一般的には、右側に夫、左側に妻の名前を書く形が多いです。
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">連名2〜3人の場合</h3>
            
            <p className="text-gray-700 mb-4">ポイントは&quot;右から目上の順&quot;。</p>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <p className="text-gray-700 mb-2"><strong>例（3名）：</strong>佐藤部長　鈴木課長　田中</p>
              <p className="text-sm text-gray-600">
                同格なら、五十音順などで揃えても大きな問題になりにくいですが、職場は過去の慣例が最優先です。
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">連名4人以上の場合</h3>
            
            <p className="text-gray-700 mb-4">
              名前を詰め込みすぎると読みにくく、見た目も崩れます。4人以上は&quot;代表者＋外一同&quot;が綺麗です。
            </p>

            <div className="bg-pink-50 p-5 rounded-lg mb-6">
              <ul className="space-y-2 text-gray-700">
                <li><strong>のし下：</strong>山田太郎　外一同</li>
                <li><strong>別紙：</strong>参加者全員の氏名一覧（同封）</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">部署やチームで贈る場合の例</h3>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <ul className="space-y-2 text-gray-700">
                <li><strong>のし下：</strong>営業部一同</li>
                <li><strong>のし下：</strong>〇〇チーム一同</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                この書き方は職場でよく使われます。会社の雰囲気に合わせると自然です。
              </p>
            </div>
          </section>

          {/* セクション4: 外のし・内のし */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              外のし・内のし：手渡しか配送かで決める
            </h2>
            
            <p className="text-gray-700 mb-6">
              ここは&quot;正解が1つ&quot;ではなく、目的で使い分けるのがコツです。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">外のしとは</h3>
            
            <p className="text-gray-700 mb-4">
              包装紙の外側に、のし紙が見えるように掛ける方法。<br />
              相手に渡したときに&quot;何のお祝いか&quot;がすぐ伝わります。
            </p>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">外のしが向いている場面</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>手渡しする</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>お披露目会などで、その場で渡す</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>受付で渡すなど、見た目をきちんと見せたい</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">内のしとは</h3>
            
            <p className="text-gray-700 mb-4">
              包装紙の内側にのし紙を掛ける方法。<br />
              配送や持ち運びで、のしが汚れたり破れたりするのを防げます。
            </p>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">内のしが向いている場面</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>配送する（宅配便）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>複数の荷物と一緒に送る</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>相手が受け取り後にゆっくり開封するケース</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded">
              <h4 className="font-bold text-gray-900 mb-2">迷ったらの指針</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 手渡し中心なら外のし</li>
                <li>• 配送中心なら内のし</li>
              </ul>
            </div>
          </section>

          {/* セクション5: 品物と現金の違い */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              品物と現金で違う：のし紙か、のし袋か
            </h2>
            
            <p className="text-gray-700 mb-6">
              新築祝いは、品物で贈ることもあれば、現金で贈ることもあります。ここで使うものが変わります。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">品物の場合</h3>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>• のし紙（のしを掛けた包装）を使うのが一般的</li>
                <li>• 外のし／内のしを選ぶ</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">現金の場合</h3>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>• 祝儀袋（のし袋）を使うのが一般的</li>
                <li>• 表書き：御祝、御新築御祝など</li>
                <li>• 名入れ：贈り主の名前（連名ルールは同様）</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
              <h4 className="font-bold text-red-800 mb-3">よくある間違い</h4>
              <div>
                <p className="font-bold text-gray-900 mb-2">• 香典袋に見えるデザインを選んでしまう</p>
                <p className="text-gray-700 text-sm">
                  祝い用の紅白蝶結びを選び、薄墨は避けるのが無難です。
                </p>
              </div>
            </div>
          </section>

          {/* セクション6: テンプレ集 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              すぐ使えるテンプレ集（コピペ用）
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">表書きテンプレ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 迷ったら：<strong>御祝</strong></li>
                  <li>• 新築確実：<strong>御新築御祝</strong></li>
                  <li>• かために：<strong>祝御新築</strong></li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">名入れテンプレ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 個人：<strong>山田太郎</strong></li>
                  <li>• 夫婦：<strong>山田太郎・花子</strong></li>
                  <li>• 2名：<strong>山田太郎・佐藤花子</strong></li>
                  <li>• 3名：<strong>山田太郎・佐藤花子・鈴木一郎</strong></li>
                  <li>• 4名以上：<strong>山田太郎　外一同</strong>（別紙で全員名）</li>
                  <li>• 部署：<strong>営業部一同</strong></li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">外のし内のしテンプレ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 手渡し：<strong>外のし</strong></li>
                  <li>• 配送：<strong>内のし</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* セクション7: よくある間違い */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              よくある間違いと対処法
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="font-bold text-gray-900 mb-2">• 水引を結び切りにしてしまう</p>
                <p className="text-gray-700 text-sm">→ 新築祝いは紅白蝶結びにする</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="font-bold text-gray-900 mb-2">• 連名を詰め込みすぎて読めない</p>
                <p className="text-gray-700 text-sm">→ 4名以上は代表者＋外一同、別紙で全員名</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="font-bold text-gray-900 mb-2">• 配送なのに外のしで汚れがち</p>
                <p className="text-gray-700 text-sm">→ 配送は内のしにする</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="font-bold text-gray-900 mb-2">• 表書きで迷いすぎる</p>
                <p className="text-gray-700 text-sm">→ 迷ったら御祝に寄せる</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              よくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q1. 新築か中古か分からない時の表書きは？</h3>
                <p className="text-gray-700">
                  迷ったら&quot;御祝&quot;が安全です。相手の状況に左右されにくく、汎用的に使えます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q2. 新築祝いを職場の連名で贈る時、のし下はどうする？</h3>
                <p className="text-gray-700">
                  2〜3名なら連名で並べ、4名以上なら&quot;代表者名＋外一同&quot;にして別紙で全員名を添えると整います。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q3. 夫婦連名はどう書く？</h3>
                <p className="text-gray-700">
                  一般的には右に夫、左に妻の名前で並べます。迷ったらこの形に寄せると無難です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q4. 外のしと内のし、どちらがマナー的に正しい？</h3>
                <p className="text-gray-700">
                  どちらもマナーとして成立します。手渡しなら外のし、配送なら内のしが使いやすい、という使い分けが現実的です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Q5. のしは必要？カジュアルに渡すのは失礼？</h3>
                <p className="text-gray-700">
                  相手や関係性によります。職場や目上、親戚など形式を重んじる相手には付けた方が無難です。友人同士でカジュアルに渡す場合は、メッセージカードなどで丁寧さを補うと印象が良くなります。
                </p>
              </div>
            </div>
          </section>

          {/* 結論 */}
          <section className="mb-12">
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">結論</h2>
              <p className="text-gray-700 leading-relaxed">
                新築祝いののしは、水引・表書き・名入れ・外のし内のしの4つのポイントを押さえれば迷わなくなります。迷ったら&quot;紅白蝶結び&quot;&quot;御祝&quot;&quot;連名は4名以上で外一同&quot;&quot;手渡しは外のし・配送は内のし&quot;が基本。相手との関係性や地域の慣習で微調整しながら、失礼のない贈り物を心がけましょう。
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 text-center shadow-sm border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              新築祝いギフトを探す
            </h3>
            <p className="text-gray-700 mb-6">
              のしのマナーを押さえたら、喜ばれるギフトを見つけましょう。
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
                "name": "新築か中古か分からない時の表書きは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "迷ったら「御祝」が安全です。相手の状況に左右されにくく、汎用的に使えます。"
                }
              },
              {
                "@type": "Question",
                "name": "新築祝いを職場の連名で贈る時、のし下はどうする？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "2〜3名なら連名で並べ、4名以上なら「代表者名＋外一同」にして別紙で全員名を添えると整います。"
                }
              },
              {
                "@type": "Question",
                "name": "夫婦連名はどう書く？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "一般的には右に夫、左に妻の名前で並べます。迷ったらこの形に寄せると無難です。"
                }
              },
              {
                "@type": "Question",
                "name": "外のしと内のし、どちらがマナー的に正しい？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "どちらもマナーとして成立します。手渡しなら外のし、配送なら内のしが使いやすい、という使い分けが現実的です。"
                }
              },
              {
                "@type": "Question",
                "name": "のしは必要？カジュアルに渡すのは失礼？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "相手や関係性によります。職場や目上、親戚など形式を重んじる相手には付けた方が無難です。友人同士でカジュアルに渡す場合は、メッセージカードなどで丁寧さを補うと印象が良くなります。"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
