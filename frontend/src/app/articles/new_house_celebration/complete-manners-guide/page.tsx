import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '新築祝いの相場はいくら？贈る時期・のしの書き方・NGギフトまで失敗しない基本マナー完全ガイド',
  description: '新築祝いの相場は友達・職場・親族で変わります。贈る時期は入居後1〜2か月が目安。のし（表書き・名入れ）、避けたいタブー、喜ばれるギフト例まで具体的に解説。',
  keywords: '新築祝い,相場,のし,マナー,贈る時期,タブー,NGギフト,メッセージ,熨斗,表書き',
  openGraph: {
    title: '新築祝いの相場はいくら？贈る時期・のしの書き方・NGギフトまで失敗しない基本マナー完全ガイド',
    description: '新築祝いの相場は友達・職場・親族で変わります。贈る時期は入居後1〜2か月が目安。のし（表書き・名入れ）、避けたいタブー、喜ばれるギフト例まで具体的に解説。',
    type: 'article',
  },
};

export default function CompleteNewHouseGiftMannersGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "引っ越し祝いと新築祝い、表書きで迷う",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "新築か確実なら「御新築御祝」など、確実でないなら「御祝」に寄せるのが無難です。"
        }
      },
      {
        "@type": "Question",
        "name": "新築祝いのお返し（内祝い）は必要？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "本来は「お披露目会でもてなす」のが内祝いに相当し、招けない方には品物でお返しする、という考え方があります。"
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* パンくずリスト */}
          <nav className="text-sm text-gray-600 mb-4" aria-label="パンくずリスト">
            <Link href="/" className="hover:text-gray-900 hover:underline">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <Link href="/new_house_celebration" className="hover:text-gray-900 hover:underline">
              新築祝い
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">完全マナーガイド</span>
          </nav>

          {/* 記事一覧に戻るボタン */}
          <div className="mb-8">
            <Link
              href="/new_house_celebration"
              className="inline-flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors"
            >
              <span>←</span>
              <span>記事一覧に戻る</span>
            </Link>
          </div>

          {/* タイトル */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            新築祝いの相場はいくら？贈る時期・のしの書き方・NGギフトまで失敗しない基本マナー完全ガイド
          </h1>

          {/* 最終更新日 */}
          <p className="text-sm text-gray-500 mb-8">
            最終更新日: 2025-12-17
          </p>

          {/* 導入文 */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              新築祝いの相場は友達・職場・親族で変わります。贈る時期は入居後1〜2か月が目安。のし（表書き・名入れ）、避けたいタブー、喜ばれるギフト例まで具体的に解説します。
            </p>
          </div>

          {/* セクション1: 贈る時期 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              1. 新築祝いはいつ贈る？ベストなタイミングと例
            </h2>
            
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-6">
              <p className="font-bold text-lg mb-2">結論</p>
              <p className="text-gray-800">
                <strong>入居後、生活が落ち着く「1〜2か月以内」</strong>が目安としてよく案内されます。引っ越し直後は片付け・手続き・家具家電の受け取りで本当に余裕がないことが多いからです。
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">ケース別の「正解」</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">新居のお披露目会（新築披露）に招かれた</h4>
                <p className="text-gray-700">
                  → その日に手渡しでOK。大きい物を贈るなら、前日までに届くよう手配が一般的です。
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">会う予定がない／遠方</h4>
                <p className="text-gray-700">
                  → 入居後に「受け取りやすい日時」を聞いて配送（いきなり送らないのが無難）。
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">完成はしたけどまだ入居してない</h4>
                <p className="text-gray-700">
                  → &quot;完成祝い&quot;として早めに贈る人もいますが、基本は入居後が安全（置き場所問題が起きにくい）。
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">連絡メッセージ例（角が立たない）</h3>
            
            <div className="bg-gray-50 p-5 rounded-lg space-y-3">
              <div className="border-l-4 border-pink-400 pl-4">
                <p className="text-gray-800">「新居おめでとう！落ち着いた頃にお祝い贈りたいんだけど、受け取りやすいタイミングある？」</p>
              </div>
              <div className="border-l-4 border-pink-400 pl-4">
                <p className="text-gray-800">「入居後バタバタだと思うから、◯月の後半くらいに届くようにしてもいい？」</p>
              </div>
            </div>
          </section>

          {/* セクション2: 相場 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              2. 【相場】新築祝いはいくら？関係性別の目安（例つき）
            </h2>
            
            <p className="text-gray-700 mb-6">
              相場は「関係性」と「社内慣例」で決まります。メジャーに使われる目安は下記です。
            </p>

            <div className="space-y-6">
              {/* 友達 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">友達</h3>
                <p className="text-2xl font-bold text-pink-600 mb-3">3,000〜10,000円</p>
                <p className="text-gray-700 mb-3">（親しさで調整）</p>
                <div className="bg-pink-50 p-4 rounded">
                  <p className="font-bold mb-2">例）</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 友達（そこそこ仲良い）：5,000円</li>
                    <li>• 親友クラス：10,000円前後</li>
                  </ul>
                </div>
              </div>

              {/* 職場 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">職場（上司・同僚）</h3>
                <p className="text-2xl font-bold text-pink-600 mb-3">5,000〜10,000円</p>
                <p className="text-gray-700 mb-3">目安が紹介されることが多い</p>
                <div className="bg-yellow-50 p-4 rounded mb-3">
                  <p className="text-sm font-bold text-gray-900 mb-2">⚠️ 実務では「浮かない額」が最優先</p>
                </div>
                <div className="bg-pink-50 p-4 rounded">
                  <p className="font-bold mb-2">例）</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 個人で渡す文化 → 3,000〜5,000円で揃える</li>
                    <li>• 連名文化 → 1人あたり1,000〜3,000円で集金し総額を作る</li>
                  </ul>
                </div>
              </div>

              {/* 親戚 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">親戚</h3>
                <p className="text-2xl font-bold text-pink-600 mb-3">10,000〜30,000円</p>
                <p className="text-gray-700 mb-3">が目安として案内されがち</p>
                <div className="bg-pink-50 p-4 rounded">
                  <p className="font-bold mb-2">例）</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• いとこ：10,000円</li>
                    <li>• 叔父叔母：20,000円</li>
                    <li>• かなり世話になった親戚：30,000円</li>
                  </ul>
                </div>
              </div>

              {/* 親・兄弟姉妹 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">親・兄弟姉妹</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-gray-800">兄弟姉妹：</p>
                    <p className="text-xl font-bold text-pink-600">30,000円以上</p>
                    <p className="text-gray-600 text-sm">になることも</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">親子：</p>
                    <p className="text-xl font-bold text-pink-600">30,000〜100,000円</p>
                    <p className="text-gray-600 text-sm">の幅で案内されることも</p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>💡 ポイント：</strong>ここは&quot;家族内ルール&quot;が強いので、過去に贈り合った額に寄せるのが一番揉めません。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* セクション3: ギフト選びのルール */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              3. 失敗しないギフト選びのルール（新築祝いは&quot;置かれる&quot;前提）
            </h2>
            
            <p className="text-gray-700 mb-6">
              新築祝いで事故るのは「好み」「サイズ」「置き場所」です。<br />
              結論、迷ったらこの順に寄せると外しにくいです。
            </p>

            <div className="bg-pink-50 p-6 rounded-lg">
              <ol className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                  <span className="font-bold text-gray-900 pt-1">消えもの（消耗品）</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                  <span className="font-bold text-gray-900 pt-1">自分で選べる（カタログ・ギフトカード系）</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                  <span className="font-bold text-gray-900 pt-1">小さくて上質な実用品</span>
                </li>
              </ol>
            </div>
          </section>

          {/* セクション4: 予算別ギフト例 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              4. 予算別「鉄板ギフト例」（例多め）
            </h2>

            <div className="space-y-8">
              {/* 3,000〜5,000円 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3,000〜5,000円：職場・ライトな友人に強い</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>ちょっと良い <strong>ハンドソープ／食器用洗剤セット</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>キッチンクロス</strong>（上質・無地）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>ドリップコーヒー／紅茶の詰め合わせ</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>調味料セット</strong>（オリーブオイル、だし、塩など）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>個包装のお菓子</strong>（引っ越し後は人に配る場面もある）</span>
                  </li>
                </ul>
                <div className="bg-pink-50 p-3 rounded mt-4">
                  <p className="text-sm font-bold text-gray-800">💡 「置き場所を取らない」が正義です。</p>
                </div>
              </div>

              {/* 5,000〜10,000円 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5,000〜10,000円：友達〜同僚のメインゾーン</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>タオルギフト（上質）</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>入浴剤セット（高級ライン）</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>スープ・レトルト・冷凍の常備食</strong>（相手が忙しい前提で刺さる）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>ワイン以外の飲料ギフト</strong>（コーヒー・ジュース等）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>カタログギフト（ライト）</strong>（好みが読めないときの逃げ道）</span>
                  </li>
                </ul>
              </div>

              {/* 10,000〜30,000円 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">10,000〜30,000円：親しい友人・親戚向け（外さない寄せ方）</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>カタログギフト（中価格帯以上）</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>家事がラクになる系</strong>（ただし大型家電は要確認）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>寝具・ブランケット</strong>（サイズ・好み確認できるなら強い）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span><strong>良い食材（肉・蟹など）</strong>（冷凍庫事情は一言聞くと丁寧）</span>
                  </li>
                </ul>
              </div>

              {/* 現金 */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">現金もアリ？（特に親族で多い）</h3>
                <p className="text-gray-700">
                  親族、とくに親・祖父母・兄弟姉妹は「現金＋ちょいギフト」も一般的に扱われます（相手が必要な物に回せるため）。
                </p>
              </div>
            </div>
          </section>

          {/* セクション5: タブー・NG */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              5. 新築祝いのタブー・NG（迷うなら避ける）
            </h2>
            
            <p className="text-gray-700 mb-6">
              新築祝いには「避けた方がよい」とされる定番があります。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">代表的な&quot;避けた方がいい&quot;例</h3>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <h4 className="font-bold text-red-800 mb-2">🔥 火を連想させるもの</h4>
                <p className="text-gray-700">キャンドル、ライター、赤が強いインテリア等</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <h4 className="font-bold text-red-800 mb-2">🔨 壁に穴を開ける・傷を付ける可能性が高いもの</h4>
                <p className="text-gray-700">壁掛け前提の大型時計、取り付け棚など</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <h4 className="font-bold text-red-800 mb-2">👟 足元に置くもの</h4>
                <p className="text-gray-700">マット・スリッパ等を&quot;目上&quot;に贈るのは避ける考え方</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <h4 className="font-bold text-red-800 mb-2">🔪 刃物</h4>
                <p className="text-gray-700">縁を切る連想</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
                <h4 className="font-bold text-red-800 mb-2">🪮 櫛（くし）</h4>
                <p className="text-gray-700">語呂が不吉（&quot;苦&quot;&quot;死&quot;）</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 p-5 rounded-lg mt-6">
              <p className="text-sm text-gray-700">
                <strong>💡 補足：</strong>最近は&quot;刃物＝切り拓く&quot;などの解釈で贈るケースもありますが、相手の価値観が読めないなら避けるのが無難です。
              </p>
            </div>
          </section>

          {/* セクション6: のし */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              6. のし（熨斗）の基本：これだけでOK（例つき）
            </h2>
            
            <p className="text-gray-700 mb-6">
              新築祝いの&quot;型&quot;はほぼ固定です。
            </p>

            <div className="space-y-6">
              {/* 水引 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">水引</h3>
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded">
                  <p className="text-lg font-bold text-red-700">紅白の蝶結び（花結び）</p>
                  <p className="text-sm text-gray-600 mt-2">何度あってよいお祝い</p>
                </div>
              </div>

              {/* 表書き */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">表書き（上段）</h3>
                <p className="text-gray-700 mb-4">一般的にはこのあたりが使われます。</p>
                <div className="bg-pink-50 p-4 rounded space-y-2">
                  <p className="font-bold text-gray-800">• 「御祝」</p>
                  <p className="font-bold text-gray-800">• 「御新築御祝」</p>
                  <p className="font-bold text-gray-800">• 「新築御祝」など</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mt-4">
                  <h4 className="font-bold text-gray-900 mb-2">⚠️ 4文字を気にする考え方もある</h4>
                  <p className="text-sm text-gray-700">
                    「新築御祝」のように4文字になる表書きを避けたほうがよい、という考え方も紹介されています（年配の方が気にする可能性）。<br />
                    <strong>迷うなら「御祝」か「御新築御祝」に寄せると安全です。</strong>
                  </p>
                </div>
              </div>

              {/* 名入れ */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">名入れ（下段）：連名の例が一番大事</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-bold text-gray-800">1人：</p>
                    <p className="text-gray-700">山田太郎</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-bold text-gray-800">夫婦：</p>
                    <p className="text-gray-700">山田太郎（＋左に花子）</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-bold text-gray-800">2〜3人：</p>
                    <p className="text-gray-700">右から目上→左へ並べる</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-bold text-gray-800">4人以上：</p>
                    <p className="text-gray-700">代表者名＋「外一同」、別紙に全員の氏名を添える</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* セクション7: 渡し方マナー */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              7. 渡し方マナー（手渡し／配送）と、ありがちな失敗例
            </h2>

            <div className="space-y-6">
              {/* 手渡し */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">手渡しの基本</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>いきなり訪問しない（片付け中のことが多い）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>「短時間で失礼するね」を添えると印象が良い</span>
                  </li>
                </ul>
              </div>

              {/* 配送 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">配送の基本</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>受け取り可能か一言確認（在宅が読めない）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    <span>冷凍・冷蔵は特に要確認（冷凍庫パンパン問題）</span>
                  </li>
                </ul>
              </div>

              {/* 失敗例 */}
              <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">⚠️ ありがちな失敗</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span><strong>大きい物をサプライズ配送</strong> → 置き場がなく詰む</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span><strong>取付が必要なインテリア</strong> → 新築に穴を開けたくない</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span><strong>香りが強い物</strong> → 好みで割れる</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* セクション8: メッセージ例文 */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              8. メッセージ例文（すぐコピペできる）
            </h2>

            <div className="space-y-6">
              {/* 友達へ */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">友達へ</h3>
                <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-400">
                  <p className="text-gray-800">
                    「新築おめでとう！新生活がもっと楽しくなるように、ささやかだけどお祝いです。落ち着いたら遊びに行かせてね。」
                  </p>
                </div>
              </div>

              {/* 同僚へ */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">同僚へ</h3>
                <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-400">
                  <p className="text-gray-800">
                    「ご新居の完成（ご入居）おめでとうございます。ささやかですがお祝いの気持ちです。新生活が素敵なものになりますように。」
                  </p>
                </div>
              </div>

              {/* 上司・目上へ */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">上司・目上へ</h3>
                <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-400">
                  <p className="text-gray-800">
                    「ご新居の完成、誠におめでとうございます。ささやかではございますが、お祝いの品をお贈りいたします。今後ますますのご多幸をお祈り申し上げます。」
                  </p>
                </div>
              </div>

              {/* 連名 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">連名（部署一同）</h3>
                <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-400">
                  <p className="text-gray-800">
                    「ご新居おめでとうございます。部署一同より、ささやかですがお祝いの気持ちです。新生活が素敵な日々になりますように。」
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
              よくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Q. 引っ越し祝いと新築祝い、表書きで迷う</h3>
                <div className="bg-pink-50 p-4 rounded">
                  <p className="text-gray-800">
                    <strong>A.</strong> 新築か確実なら「御新築御祝」など、確実でないなら「御祝」に寄せるのが無難です。
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Q. 新築祝いのお返し（内祝い）は必要？</h3>
                <div className="bg-pink-50 p-4 rounded">
                  <p className="text-gray-800">
                    <strong>A.</strong> 本来は&quot;お披露目会でもてなす&quot;のが内祝いに相当し、招けない方には品物でお返しする、という考え方があります。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA: 記事下部のみ */}
          <div className="mt-12 bg-pink-50 border-2 border-pink-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              新築祝いにぴったりのギフトを探す
            </h2>
            <p className="text-gray-700 mb-6">
              相場・関係性・好みに合わせた新築祝いを簡単に検索できます
            </p>
            <Link
              href="/new_house_celebration"
              className="inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-pink-700 transition-colors"
            >
              新築祝いギフトを検索する
            </Link>
          </div>

          {/* 記事リストへの戻りリンク */}
          <div className="mt-8 text-center">
            <Link
              href="/new_house_celebration"
              className="inline-flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors"
            >
              <span>←</span>
              <span>記事一覧に戻る</span>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
