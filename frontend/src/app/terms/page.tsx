import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="bg-rose-50/60 min-h-screen pt-2 pb-4">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">利用規約</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">第1条（適用）</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              本利用規約（以下「本規約」といいます。）は、HAREGift（以下「当サイト」といいます。）が提供するサービス（以下「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">第2条（利用登録）</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              本サービスは登録不要でご利用いただけます。サイトにアクセスした時点で、本規約に同意したものとみなします。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">第3条（サービス内容）</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイトは、ハレの日（人生の節目や季節イベント）に贈るギフト商品の検索・比較サービスを提供します。掲載されている商品情報は各提携サイトから取得しており、実際の購入は各提携サイトで行われます。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">第4条（アフィリエイトプログラム）</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイトは、Amazon.co.jp、楽天市場等のアフィリエイトプログラムに参加しています。商品購入時に当サイトが紹介料を受け取る場合があります。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">第5条（免責事項）</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイトは商品情報の正確性について最善を尽くしますが、価格や在庫状況等の変動により情報が古くなる場合があります。最新情報は各提携サイトでご確認ください。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">第6条（著作権）</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイトのコンテンツ（文字、写真、画像等）の知的財産権は当サイトまたは権利者に帰属します。無断での複製・転載・配布等は禁止します。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">第7条（規約の変更）</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイトは、必要に応じて本規約を変更することがあります。変更後の規約は当サイト上での掲載をもって効力を生じるものとします。
            </p>

            <div className="mt-8 text-right text-gray-600">
              <p>制定日：2024年11月18日</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}