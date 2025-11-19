import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="bg-rose-50/60 min-h-screen pt-2 pb-4">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">個人情報の収集について</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイト（HAREGift）は、利用者の個人情報を収集する場合、利用目的を明示し、適法かつ公正な手段により行います。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">収集する情報</h2>
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6">
              <li>アクセスログ情報（IPアドレス、ブラウザ情報、アクセス日時等）</li>
              <li>検索キーワードや閲覧履歴等の利用状況</li>
              <li>お問い合わせ時に提供いただく情報</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">個人情報の利用目的</h2>
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6">
              <li>サービスの提供・運営・改善</li>
              <li>お問い合わせへの対応</li>
              <li>利用状況の分析およびサービスの最適化</li>
              <li>法令に基づく対応</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">第三者への提供</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイトは、以下の場合を除き、個人情報を第三者に提供することはありません。
            </p>
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6">
              <li>本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookie（クッキー）について</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイトでは、サービスの利便性向上のためにCookieを使用する場合があります。Cookieの使用を望まない場合は、ブラウザの設定により無効化することができます。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">アクセス解析ツール</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイトでは、サービス改善のためにアクセス解析ツールを使用する場合があります。これらのツールはCookieを使用して情報を収集しますが、個人を特定する情報は含まれません。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">個人情報の安全管理</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイトは、個人情報の紛失、破壊、改ざん及び漏洩等を防止するため、適切な安全管理措置を講じます。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">プライバシーポリシーの変更</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは当サイト上での掲載をもって効力を生じるものとします。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">お問い合わせ</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              個人情報の取り扱いに関するお問い合わせは、お問い合わせページからご連絡ください。
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