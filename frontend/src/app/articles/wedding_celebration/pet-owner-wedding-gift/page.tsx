/**
 * ペットがいる夫婦向け結婚祝い記事ページ
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
      "name": "ペットがいる家に香りものはNG？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "好みが分かれるので、相手から希望がない限りは控えめが無難です。"
      }
    },
    {
      "@type": "Question",
      "name": "食べ物ギフトなら安全？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "比較的安全で選びやすいです。個包装・日持ち・アレルギー表示があると安心です。"
      }
    },
    {
      "@type": "Question",
      "name": "観葉植物は喜ばれそうだけど避けるべき？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "種類によって注意が必要なので、相手の希望が明確でないなら避けたほうが安全です。"
      }
    },
    {
      "@type": "Question",
      "name": "体験ギフトはペットがいると使いにくい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "場所や日時を選べる、期限が長いタイプなら使いやすいです。"
      }
    },
    {
      "@type": "Question",
      "name": "被りを避けたいときの最短ルートは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "「香りOK？」「割れ物避けたい？」「食の苦手ある？」の3点確認で失敗が減ります。"
      }
    }
  ]
};

/**
 * メタデータ設定（SEO対応）
 */
export const metadata: Metadata = {
  title: 'ペットがいる夫婦に贈る結婚祝い｜犬猫のいる家で「本当に助かる」ギフト',
  description: '犬猫がいる家庭は、香り・素材・誤飲リスクなど配慮ポイントが多め。ペットのいる新婚に喜ばれる結婚祝いの選び方とおすすめジャンル、避けたいギフトをまとめました。',
  keywords: ['結婚祝い', 'ペット', '犬', '猫', 'ギフト', 'プレゼント', 'ペットがいる', '動物'],
  openGraph: {
    title: 'ペットがいる夫婦に贈る結婚祝い｜犬猫のいる家で「本当に助かる」ギフト',
    description: '犬猫がいる家庭は、香り・素材・誤飲リスクなど配慮ポイントが多め。ペットのいる新婚に喜ばれる結婚祝いの選び方とおすすめジャンル、避けたいギフトをまとめました。',
    type: 'article',
    url: 'https://www.hare-gift.com/articles/wedding_celebration/pet-owner-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/articles/wedding_celebration/pet-owner-wedding-gift',
  },
};

/**
 * 記事ページコンポーネント
 */
export default function PetOwnerWeddingGiftArticle() {
  return (
    <>
      <Header />
      
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* パンくずリスト */}
          <nav className="mb-4 text-sm text-gray-600">
            <Link href="/" className="hover:text-pink-600 transition-colors">
              ホーム
            </Link>
            <span className="mx-2">›</span>
            <Link href="/wedding_celebration" className="hover:text-pink-600 transition-colors">
              結婚祝い
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">ペットがいる夫婦向けギフト</span>
          </nav>

          {/* 記事一覧に戻るボタン */}
          <div className="mb-8">
            <Link
              href="/wedding_celebration"
              className="inline-flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors"
            >
              <span>←</span>
              <span>記事一覧に戻る</span>
            </Link>
          </div>

          {/* 記事コンテンツ */}
          <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            {/* 最終更新日 */}
            <div className="text-sm text-gray-500 mb-4">
              最終更新日: 2025-12-16
            </div>

            {/* h1タイトル */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              ペットがいる夫婦に贈る結婚祝い｜犬猫のいる家で&ldquo;本当に助かる&rdquo;ギフト
            </h1>

            {/* 導入文 */}
            <div className="mb-8 text-gray-700 leading-relaxed space-y-4">
              <p>
                ペットがいる家庭への結婚祝いは、実は「良かれと思って」が外れやすいジャンルです。香りが強い、壊れやすい、誤飲が心配…など、気遣いポイントが増えます。
              </p>
              <p>
                この記事では、犬猫のいる新婚夫婦に向けて、安心で喜ばれやすい結婚祝いの選び方をまとめました。
              </p>
            </div>

            {/* CTA1 */}
            <div className="my-8 text-center">
              <Link
                href="/wedding_celebration"
                className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
              >
                🎁 結婚祝いをカテゴリから探す
              </Link>
            </div>

            {/* セクション1: 配慮ポイント */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                ペット家庭の結婚祝いで配慮したいポイント
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-bold text-gray-900 mb-2">香りが強いものは避ける</h3>
                  <p className="text-sm">好み＋ペットの敏感さの両方に配慮が必要です。</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-bold text-gray-900 mb-2">小物・装飾は誤飲や破損リスク</h3>
                  <p className="text-sm">床置きインテリアなどは倒れる・壊れるリスクがあります。</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-bold text-gray-900 mb-2">素材の安全性</h3>
                  <p className="text-sm">洗いやすさ、毛が付きにくい素材などへの配慮があると親切です。</p>
                </div>
              </div>
            </section>

            {/* セクション2: 結論 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                結論：ペット家庭に強いのは「掃除がラク」「壊れにくい」「消耗品」「選べる」
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">掃除がラク</h3>
                  <p className="text-sm text-gray-700">日々の負担が減る</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">壊れにくい</h3>
                  <p className="text-sm text-gray-700">事故が起きにくい</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">消耗品</h3>
                  <p className="text-sm text-gray-700">被っても困りにくい</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">選べる</h3>
                  <p className="text-sm text-gray-700">ペット事情に合わせられる</p>
                </div>
              </div>
            </section>

            {/* セクション3: おすすめジャンル */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                おすすめジャンル
              </h2>

              <div className="space-y-8">
                {/* 掃除がラク系 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1) &ldquo;掃除がラク&rdquo;になる系（新婚＋ペットで効く）
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>ちょっと良い洗剤・掃除系（日常の満足度が上がる）</li>
                      <li>リネン類（上質タオルなど、洗い替えが増えるのは助かる）</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>選び方のコツ：</strong>香りは控えめが無難。相手の好みが分からない場合は無香料寄せ。
                    </p>
                  </div>
                </div>

                {/* 消耗品 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2) ペットがいても安心な&ldquo;消耗品ギフト&rdquo;
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>コーヒー・紅茶・焼き菓子（個包装・日持ち）</li>
                      <li>スープ・レトルトの上質セット</li>
                      <li>調味料（だし・オイル等）</li>
                    </ul>
                  </div>
                </div>

                {/* 体験 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3) モノを増やさない&ldquo;体験&rdquo;
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>食事券・体験ギフト</li>
                      <li>リラクゼーション</li>
                    </ul>
                  </div>
                </div>

                {/* 選べるギフト */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4) &ldquo;選べる&rdquo;ギフト
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>カタログギフト</li>
                      <li>ギフトカード</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* セクション4: 避けたほうがいいギフト */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                避けたほうがいいギフト（ペット家庭で外れやすい）
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>香りが強いキャンドル・ディフューザー</li>
                  <li>ガラス製の置物や割れ物インテリア</li>
                  <li>小さすぎる雑貨（誤飲の心配）</li>
                  <li>観葉植物（種類によっては注意が必要なので、相手が希望していない限り避ける）</li>
                </ul>
              </div>
            </section>

            {/* セクション5: 確認フレーズ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                角が立たない確認フレーズ
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>「ペットいると香りもの避けた方がいいかな？無香料寄せるね」</li>
                  <li>「割れ物は避けるね。家で困ってることある？」</li>
                </ul>
              </div>
            </section>

            {/* セクション6: メッセージ例 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                メッセージ例
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    ご結婚おめでとうございます。ペットのいるお家でも安心して使えるものを選びました。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    新生活おめでとう！香りや割れ物は避けて、日々ラクになる系にしたよ。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    ご入籍おめでとうございます。ささやかですがお祝いの気持ちです。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション7: FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                FAQ（よくある質問）
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. ペットがいる家に香りものはNG？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    好みが分かれるので、相手から希望がない限りは控えめが無難です。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 食べ物ギフトなら安全？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    比較的安全で選びやすいです。個包装・日持ち・アレルギー表示があると安心です。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 観葉植物は喜ばれそうだけど避けるべき？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    種類によって注意が必要なので、相手の希望が明確でないなら避けたほうが安全です。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 体験ギフトはペットがいると使いにくい？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    場所や日時を選べる、期限が長いタイプなら使いやすいです。
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Q. 被りを避けたいときの最短ルートは？</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    「香りOK？」「割れ物避けたい？」「食の苦手ある？」の3点確認で失敗が減ります。
                  </p>
                </div>
              </div>
            </section>

            {/* CTA2 */}
            <div className="my-8 text-center py-8 bg-pink-50 rounded-lg">
              <Link
                href="/wedding_celebration"
                className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
              >
                人気順・予算別で結婚祝いを探す →
              </Link>
            </div>

            {/* 記事一覧に戻るボタン */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                href="/wedding_celebration"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-pink-600 font-medium transition-colors"
              >
                <span>←</span>
                <span>記事一覧に戻る</span>
              </Link>
            </div>
          </article>
        </main>
      </div>

      <Footer />
    </>
  );
}
