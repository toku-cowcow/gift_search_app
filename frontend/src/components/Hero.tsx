/**
 * メインページのヒーローセクションコンポーネント（Server Component）
 * 
 * サイトタイトルと説明文を3行固定で表示
 */

export default function Hero() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl font-bold text-center mt-6 mb-8">
            UchiGift
          </h1>
          
          {/* 説明文3行固定 */}
          <div className="max-w-3xl mx-auto leading-relaxed space-y-2 text-gray-700">
            <p>UchiGift（ウチギフト）は、内祝いギフト専門の検索サイトです。</p>
            <p>出産・結婚・新築・快気祝いなど、シーン別・予算別でぴったりの内祝いを見つけられます。</p>
            <p>通販サイトの人気商品をまとめて比較し、心のこもった「ありがとう」を贈るお手伝いをします。</p>
          </div>
        </div>
      </div>
    </section>
  );
}