import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="bg-rose-50/60 min-h-screen pt-2 pb-4">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">お問い合わせ</h1>
          
          <div className="prose max-w-none">
            <p className="mb-8 text-gray-700 leading-relaxed text-lg">
              UchiGiftをご利用いただき、ありがとうございます。
              ご質問・ご意見・不具合報告等がございましたら、以下の内容をご確認ください。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">よくあるご質問</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Q. 商品の価格や在庫情報が古い場合があります</h3>
              <p className="text-gray-700 mb-4">
                A. 当サイトの商品情報は定期的に更新していますが、リアルタイムではありません。最新の価格・在庫状況は各販売店でご確認ください。
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Q. 商品を購入したい場合はどうすればよいですか？</h3>
              <p className="text-gray-700 mb-4">
                A. 各商品の「購入する」ボタンをクリックすると、販売店のページに移動します。そちらで購入手続きを行ってください。
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Q. 検索結果に不適切な商品が表示される</h3>
              <p className="text-gray-700 mb-4">
                A. 検索アルゴリズムの改善に努めていますが、完璧ではありません。お気づきの点があれば下記までお知らせください。
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">お問い合わせ方法</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              現在、お問い合わせは以下の方法で受け付けています：
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">GitHubイシュー（推奨）</h3>
              <p className="text-blue-800 mb-4">
                技術的な不具合や機能要望については、GitHubリポジトリのIssueページでお知らせください。
              </p>
              <p className="text-sm text-blue-700">
                ※ GitHubアカウントが必要です
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">注意事項</h2>
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6">
              <li>商品の購入・配送・返品等については各販売店へお問い合わせください</li>
              <li>当サイトでは商品の販売は行っていません</li>
              <li>個人情報を含む内容は送信しないでください</li>
              <li>営業に関するお問い合わせはご遠慮ください</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">回答について</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              お問い合わせの内容によって回答までにお時間をいただく場合があります。また、内容によってはお答えできない場合もございますので、予めご了承ください。
            </p>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                今後、より便利なお問い合わせフォームの実装を予定しています。
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}