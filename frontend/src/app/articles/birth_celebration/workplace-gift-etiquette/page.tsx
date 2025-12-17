/**
 * 職場の出産祝いマナー 記事ページ
 * 
 * SEO対応、FAQ JSON-LD埋め込み、CTA配置
 */

import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// FAQ JSON-LD データ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "職場の出産祝いは現金とギフト、どっちが無難？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "慣例があるならそれに合わせるのが最優先です。不明なら、連名はギフト（またはギフトカード）、個人は3,000〜5,000円のギフトが無難です。"
      }
    },
    {
      "@type": "Question",
      "name": "連名ののしに全員の名前を書く必要はある？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "4人以上なら代表者名＋「外一同」にして、別紙に全員名を添える形がきれいです。"
      }
    },
    {
      "@type": "Question",
      "name": "産休中に送るのは失礼？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "失礼ではありませんが、受け取り負担にならないよう、事前に受け取り可能かだけ確認するとスマートです。"
      }
    },
    {
      "@type": "Question",
      "name": "メッセージはどれくらいの長さがいい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "職場は短文が好印象です。「おめでとう＋体調を気遣う＋復帰後を楽しみに」の3点で十分伝わります。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: '職場の出産祝いマナー完全ガイド｜連名の相場・のしの書き方・メッセージ例文（同僚/上司/部下）',
  description: '職場の出産祝いで迷う「連名の相場」「のし（表書き・名入れ）」「渡すタイミング」「メッセージ例文」をまとめて解説。失礼を避け、気持ちが伝わる実務ガイド。',
  keywords: ['職場', '出産祝い', 'マナー', '連名', 'のし', 'メッセージ', '同僚', '上司', '部下'],
  openGraph: {
    title: '職場の出産祝いマナー完全ガイド｜連名の相場・のしの書き方・メッセージ例文（同僚/上司/部下）',
    description: '職場の出産祝いで迷う「連名の相場」「のし（表書き・名入れ）」「渡すタイミング」「メッセージ例文」をまとめて解説。失礼を避け、気持ちが伝わる実務ガイド。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/birth_celebration/workplace-gift-etiquette',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/birth_celebration/workplace-gift-etiquette',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function WorkplaceGiftEtiquetteArticle() {
  return (
    <>
      <Header />
      
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* パンくずリスト */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-pink-600 transition-colors">
                ホーム
              </Link>
              <span className="mx-2">/</span>
              <Link href="/birth_celebration" className="hover:text-pink-600 transition-colors">
                出産祝い
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">職場の出産祝いマナー</span>
            </nav>
          </div>
        </div>

        {/* ヒーローセクション */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-6">
              <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1 rounded-full">
                職場の出産祝いガイド
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              職場の出産祝いマナー完全ガイド<br />
              <span className="text-pink-600">連名の相場・のしの書き方・メッセージ例文</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              職場の出産祝いは、友達へのプレゼントと違って「気持ち」よりも先に、社内の慣例・礼儀・足並みが優先されます。この記事では、連名の相場、のしの書き方、渡すタイミング、メッセージ例文まで、実務で使える情報をまとめました。
            </p>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* 本文コンテンツ */}
          <div className="prose prose-lg max-w-none">
            
            {/* セクション1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                職場の出産祝いで失敗しがちなポイント
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                職場の出産祝いは、友達へのプレゼントと違って「気持ち」よりも先に、<strong className="text-pink-600">社内の慣例・礼儀・足並み</strong>が優先されがちです。よくある失敗はこの3つ。
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>金額が浮く（高すぎる/低すぎる）</li>
                <li>のしの書き方が違う（連名の名入れで迷子）</li>
                <li>タイミングが悪い（産後すぐに負担をかける）</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                この記事は、職場で&ldquo;無難にきちんと&rdquo;を最短で実現するための手順書です。
              </p>
            </section>

            {/* セクション2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                まずは確認：会社に&ldquo;慣例&rdquo;があるか
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                できれば最初に、これだけ確認すると事故が減ります。
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>過去に出産祝いを渡した実績があるか</li>
                <li>連名で集金する文化か／個人で渡す文化か</li>
                <li>現金（ご祝儀）か、ギフトか</li>
                <li>のし袋（または熨斗付き包装）を使うか</li>
                <li>取りまとめ役（幹事）がいるか</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                慣例があるなら、それに合わせるのが最優先です。慣例がない・不明なら、次章以降の&ldquo;一般的に角が立たない型&rdquo;に寄せればOKです。
              </p>
            </section>

            {/* セクション3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                【相場】職場の出産祝いはいくらが無難？
              </h2>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                個人で渡す場合
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>3,000〜5,000円</strong>が無難</li>
                <li>上司→部下でも、個人でいきなり高額は相手が受け取りづらいことがあります</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                迷ったらまず<strong>3,000円</strong>。仲が良くてもう少し気持ちを乗せたいなら<strong>5,000円</strong>が収まりがいいです。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                連名で渡す場合（いちばん多いパターン）
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>1人あたり1,000〜3,000円</strong>が目安</li>
                <li>人数が多いほど、1人あたりは低めでもOK（総額で見栄えが出る）</li>
              </ul>

              <div className="bg-gray-50 border-l-4 border-pink-400 p-6 mb-4">
                <p className="text-sm text-gray-600 mb-2 font-bold">例）</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>5人 × 1,000円 = 5,000円</li>
                  <li>10人 × 1,000円 = 10,000円</li>
                  <li>8人 × 2,000円 = 16,000円（少し厚め）</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                &ldquo;同じ部署内で揃える&rdquo;が最重要なので、幹事は&ldquo;ちょうどいい額&rdquo;に着地させれば十分です。
              </p>
            </section>

            {/* セクション4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                【渡すタイミング】いつが正解？
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                職場の場合、相手の負担が少ないタイミングが正解になりやすいです。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                ベストになりやすい
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li><strong>産休に入る前</strong>（最終出社日の少し前）</li>
                <li><strong>復帰後の落ち着いたタイミング</strong></li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                避けたい
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>出産直後に&ldquo;今受け取って&rdquo;&ldquo;今お礼して&rdquo;となる渡し方</li>
                <li>いきなり自宅に送って、受け取り負担を増やす（事前確認なし）</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                配送したい場合は、幹事が一言だけ確認するとスマートです。&ldquo;ご自宅に送っても大丈夫ですか？受け取りやすい曜日ありますか？&rdquo;くらいで十分。
              </p>
            </section>

            {/* セクション5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                【のし】職場の出産祝いの基本（表書き・水引・名入れ）
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                職場で迷うのはほぼここです。最低限これだけ押さえると安心です。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                表書き（のし上）
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                一般的には以下が無難です。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>御祝</strong></li>
                <li><strong>御出産祝</strong></li>
                <li><strong>出産御祝</strong></li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                会社のフォーマル度が高いほど&ldquo;御祝&rdquo;や&ldquo;御出産祝&rdquo;が無難寄り。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                水引
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>紅白の蝶結び（花結び）</strong>が基本（何度あっても良いお祝い＝出産・入学など）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                ※結び切り（固結び）は婚礼など&ldquo;一度きりが良い&rdquo;場面で使われることが多いので、出産祝いでは避けます。
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                名入れ（のし下）— 連名の書き方が本丸
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">1人で贈る</h4>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>フルネーム</strong>（または職場文化に合わせて名字のみ）
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">2〜3人で連名</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>右から順に、役職が上の人→下の人</li>
                    <li>同格なら五十音順でもOK（社内の雰囲気優先）</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">4人以上で連名</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    代表者名を中央に書き、左下または別紙に&ldquo;外一同&rdquo;を使うのが一般的
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-2 ml-4">
                    <li>例：<strong>山田太郎　外一同</strong></li>
                    <li>もしくは&ldquo;〇〇課一同&rdquo;&ldquo;〇〇チーム一同&rdquo;のような形（社内の雰囲気による）</li>
                  </ul>
                  <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded">
                    <strong>重要：</strong>4人以上で全員の名前をのし下に詰め込むと読みにくく、見た目も崩れがちです。代表＋別紙がきれいです。
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">
                のし袋か、熨斗付き包装か
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>現金：</strong>のし袋（祝儀袋）が無難</li>
                <li><strong>ギフト：</strong>熨斗付き包装（外のし/内のし）にすることが多い</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                配送するなら&ldquo;内のし&rdquo;、手渡しなら&ldquo;外のし&rdquo;が使いやすいことが多いです（社内の慣例があればそちら優先）。
              </p>
            </section>

            {/* セクション6 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                【連名のやり方】集金〜渡すまでの実務テンプレ
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                幹事（取りまとめ）がやることは、実はこの流れだけです。
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>対象者の産休予定（最終出社日）を確認</li>
                <li>連名でやるか決める（基本は部署/チーム単位）</li>
                <li>1人あたり金額を提案（例：1,000円）</li>
                <li>期限を切って集金</li>
                <li>現金 or ギフトを選ぶ（迷ったらギフトカード or 消耗品寄り）</li>
                <li>のしの名入れ（代表者＋外一同、別紙に全員名）</li>
                <li>渡すタイミング調整（最終出社日前が無難）</li>
              </ol>

              <p className="text-gray-700 leading-relaxed">
                ここまでやれば、職場として十分きちんとしています。
              </p>
            </section>

            {/* セクション7 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                【メッセージ例文】職場の出産祝いは&ldquo;短く丁寧&rdquo;が最強
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                長文は相手が読む負担になることがあるので、職場は短文が好印象です。すぐ使える例文を関係性別に用意します。
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                同僚へ（同じ目線）
              </h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;ご出産おめでとうございます。落ち着いたらまた近況聞かせてください。どうかご無理なさらず、ゆっくり休んでくださいね。&rdquo;
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;ご出産おめでとうございます。新しい生活、応援しています。体調第一でお過ごしください。&rdquo;
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                先輩へ（少し丁寧）
              </h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;このたびはご出産おめでとうございます。ご家族皆さまのご健康と、赤ちゃんの健やかなご成長をお祈りしております。どうぞお身体を大切にお過ごしください。&rdquo;
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;ご出産おめでとうございます。落ち着かれた頃に、またお話できるのを楽しみにしております。&rdquo;
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                上司へ（かしこまりすぎず、礼は外さない）
              </h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;ご出産おめでとうございます。しばらくお忙しい時期かと存じますが、どうぞご無理なさらずお身体を大切になさってください。復帰後にお会いできるのを楽しみにしております。&rdquo;
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;このたびは誠におめでとうございます。ご家族の皆さまにとって素敵な日々となりますよう、お祈り申し上げます。&rdquo;
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                部下へ（労い＋安心感）
              </h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;ご出産おめでとう！まずは体を最優先に、無理せずゆっくり休んでね。落ち着いたらまた連絡待ってます。&rdquo;
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    &ldquo;おめでとうございます。しばらく大変な時期ですが、困ったことがあれば遠慮なく連絡してください。体調第一で。&rdquo;
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                連名メッセージ（&ldquo;一同&rdquo;向け）
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  &ldquo;ご出産おめでとうございます。ささやかですがお祝いの気持ちです。どうぞご無理なさらず、お身体を大切にお過ごしください。〇〇一同&rdquo;
                </p>
              </div>
            </section>

            {/* セクション8 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                これは避けたい：職場の出産祝いNG集
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>赤ちゃんの性別・育児方針に踏み込む（相手が疲れている時期）</li>
                <li>&ldquo;早く見せて&rdquo;&ldquo;いつ会える？&rdquo;など急かす文言</li>
                <li>高額すぎて相手がお返しに困る</li>
                <li>大型ベビー用品（置き場所・好み問題が出やすい）</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                職場は特に&ldquo;無難さ＝やさしさ&rdquo;になりやすいです。
              </p>
            </section>

            {/* FAQセクション */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-pink-500">
                よくある質問（FAQ）
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 職場の出産祝いは現金とギフト、どっちが無難？
                  </h3>
                  <p className="text-gray-700">
                    慣例があるならそれに合わせるのが最優先です。不明なら、連名はギフト（またはギフトカード）、個人は3,000〜5,000円のギフトが無難です。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 連名ののしに全員の名前を書く必要はある？
                  </h3>
                  <p className="text-gray-700">
                    4人以上なら代表者名＋「外一同」にして、別紙に全員名を添える形がきれいです。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. 産休中に送るのは失礼？
                  </h3>
                  <p className="text-gray-700">
                    失礼ではありませんが、受け取り負担にならないよう、事前に受け取り可能かだけ確認するとスマートです。
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. メッセージはどれくらいの長さがいい？
                  </h3>
                  <p className="text-gray-700">
                    職場は短文が好印象です。「おめでとう＋体調を気遣う＋復帰後を楽しみに」の3点で十分伝わります。
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 text-center shadow-sm border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              出産祝いギフトを探す
            </h3>
            <p className="text-gray-700 mb-6">
              職場の出産祝いは、慣例を押さえて無難に進めることが大切です。
            </p>
            <Link
              href="/birth_celebration"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-md"
            >
              職場向け出産祝いを探す
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
