/**
 * 譁咏炊縺励↑縺・､ｫ蟀ｦ蜷代￠邨仙ｩ夂･昴＞險倅ｺ九・繝ｼ繧ｸ・域眠繝舌・繧ｸ繝ｧ繝ｳ・・
 * 
 * SEO蟇ｾ蠢懊：AQ JSON-LD蝓九ａ霎ｼ縺ｿ縲∵掠隕玖｡ｨﾃ・縲，TA驟咲ｽｮ縲∝・驛ｨ繝ｪ繝ｳ繧ｯﾃ・
 */

import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// FAQ JSON-LD 繝・・繧ｿ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': '譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｫ繧ｭ繝・メ繝ｳ螳ｶ髮ｻ繧定ｴ医ｋ縺ｮ縺ｯ繧・ａ縺溘⊇縺・′縺・＞・・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '菴ｿ繧上ｌ縺ｪ縺・庄閭ｽ諤ｧ縺碁ｫ倥￥縲∫ｽｮ縺榊ｴ謇縺ｮ雋諡・′蠅励∴繧九◆繧・∩縺代ｋ縺ｮ縺檎┌髮｣縺ｧ縺吶ょ､夜｣溘ｄ荳ｭ鬟溘・逕滓ｴｻ縺ｫ蛻ｺ縺輔ｋ譁ｹ蜷代′蝟懊・繧後ｄ縺吶＞縺ｧ縺吶・
      }
    },
    {
      '@type': 'Question',
      'name': '螟夜｣溘ぐ繝輔ヨ縺ｧ螟ｱ謨励＠縺ｪ縺・さ繝・・・・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '菴ｿ縺医ｋ蠎励′螟壹＞縺薙→縲∵怏蜉ｹ譛滄剞縺檎洒縺吶℃縺ｪ縺・％縺ｨ縲∽ｺ育ｴ・屮譏灘ｺｦ縺碁ｫ倥☆縺弱↑縺・％縺ｨ縺碁㍾隕√〒縺吶・
      }
    },
    {
      '@type': 'Question',
      'name': '螳ｶ縺ｧ鬟溘∋繧区凾髢薙ｒ荳翫￡繧九↑繧我ｽ輔′縺・＞・・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '繧ｭ繝・メ繝ｳ縺ｧ縺ｯ縺ｪ縺上ユ繝ｼ繝悶Ν蟇・ｊ縺悟､悶＠縺ｫ縺上＞縺ｧ縺吶ょｰ第焚邊ｾ驪ｭ縺ｧ鄂ｮ縺榊ｴ謇繧貞叙繧峨↑縺・ｂ縺ｮ縺悟ｮ牙ｿ・〒縺吶・
      }
    },
    {
      '@type': 'Question',
      'name': '鬟溘∋迚ｩ繧定ｴ医ｋ縺ｨ縺阪・豕ｨ諢冗せ縺ｯ・・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '蜿励￠蜿悶ｊ雋諡・→菫晏ｭ倥・雋諡・′蠅励∴縺ｪ縺・％縺ｨ縺悟､ｧ蛻・〒縺吶りｿｷ縺｣縺溘ｉ蟶ｸ貂ｩ縺ｧ譌･謖√■縺励∝ｰ丞・縺代〒縺阪ｋ蠖｢縺檎┌髮｣縺ｧ縺吶・
      }
    },
    {
      '@type': 'Question',
      'name': '繧ｵ繝励Λ繧､繧ｺ縺ｧ雍医ｊ縺溘＞縺代←遒ｺ隱阪＠縺溘⊇縺・′縺・＞・・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '遒ｺ隱阪＠縺溘⊇縺・′謌仙粥邇・・荳翫′繧翫∪縺吶り◇縺肴婿繧貞ｷ･螟ｫ縺吶ｌ縺ｰ繧ｵ繝励Λ繧､繧ｺ諢溘ｒ谿九＠縺､縺､螟悶○縺ｾ縺吶・
      }
    }
  ]
};

/**
 * 繝｡繧ｿ繝・・繧ｿ險ｭ螳夲ｼ・EO蟇ｾ蠢懶ｼ・
 */
export const metadata: Metadata = {
  title: '譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｫ雍医ｋ邨仙ｩ夂･昴＞・懊く繝・メ繝ｳ螳ｶ髮ｻ繧医ｊ蝟懊・繧後ｋ縲主､夜｣滓ｴｾ縲上ぐ繝輔ヨ',
  description: '譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｸ縺ｮ邨仙ｩ夂･昴＞縺ｯ繧ｭ繝・メ繝ｳ螳ｶ髮ｻ繧医ｊ縲∝､夜｣溘・荳ｭ鬟溘・逕滓ｴｻ縺ｫ蛻ｺ縺輔ｋ縲手ｲ諡・′貂帙ｋ縲上ぐ繝輔ヨ縺梧ｭ｣隗｣縲る｣滉ｺ句虻繧・ｺ育ｴ・・縺励ｄ縺吶＆縲∝ｮｶ縺ｧ鬟溘∋繧区凾髢薙・雉ｪ繧剃ｸ翫￡繧九い繧､繝・Β縲∫援莉倥￠縺ｮ謇矩俣繧呈ｸ帙ｉ縺吝ｷ･螟ｫ縺ｾ縺ｧ豺ｱ謗倥ｊ縺ｧ隗｣隱ｬ縺励∪縺吶・,
  keywords: ['邨仙ｩ夂･昴＞', '譁咏炊縺励↑縺・, '螟夜｣滓ｴｾ', '繧ｭ繝・メ繝ｳ螳ｶ髮ｻ', '繧ｮ繝輔ヨ', '荳ｭ鬟・],
  openGraph: {
    title: '譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｫ雍医ｋ邨仙ｩ夂･昴＞・懊く繝・メ繝ｳ螳ｶ髮ｻ繧医ｊ蝟懊・繧後ｋ縲主､夜｣滓ｴｾ縲上ぐ繝輔ヨ',
    description: '譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｸ縺ｮ邨仙ｩ夂･昴＞縺ｯ繧ｭ繝・メ繝ｳ螳ｶ髮ｻ繧医ｊ縲∝､夜｣溘・荳ｭ鬟溘・逕滓ｴｻ縺ｫ蛻ｺ縺輔ｋ縲手ｲ諡・′貂帙ｋ縲上ぐ繝輔ヨ縺梧ｭ｣隗｣縲る｣滉ｺ句虻繧・ｺ育ｴ・・縺励ｄ縺吶＆縲∝ｮｶ縺ｧ鬟溘∋繧区凾髢薙・雉ｪ繧剃ｸ翫￡繧九い繧､繝・Β縲∫援莉倥￠縺ｮ謇矩俣繧呈ｸ帙ｉ縺吝ｷ･螟ｫ縺ｾ縺ｧ豺ｱ謗倥ｊ縺ｧ隗｣隱ｬ縺励∪縺吶・,
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/eating-out-couple-wedding-gift',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/eating-out-couple-wedding-gift',
  },
};

/**
 * 險倅ｺ九・繝ｼ繧ｸ繧ｳ繝ｳ繝昴・繝阪Φ繝・
 */
export default function EatingOutCoupleWeddingGiftArticle() {
  return (
    <>
      <Header />
      
      {/* FAQ JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className='min-h-screen bg-gray-50'>
        <main className='max-w-4xl mx-auto px-4 py-8'>
          {/* 繝代Φ縺上★繝ｪ繧ｹ繝・*/}
          <nav className='mb-4 text-sm text-gray-600'>
            <Link href='/' className='hover:text-pink-600 transition-colors'>
              繝帙・繝
            </Link>
            <span className='mx-2'>窶ｺ</span>
            <Link href='/wedding_celebration' className='hover:text-pink-600 transition-colors'>
              邨仙ｩ夂･昴＞
            </Link>
            <span className='mx-2'>窶ｺ</span>
            <span className='text-gray-800'>螟夜｣滓ｴｾ蜷代￠繧ｮ繝輔ヨ</span>
          </nav>

          {/* 險倅ｺ区悽譁・*/}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* 繧ｿ繧､繝医Ν・・1・・*/}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｫ雍医ｋ邨仙ｩ夂･昴＞・懊く繝・メ繝ｳ螳ｶ髮ｻ繧医ｊ蝟懊・繧後ｋ縲悟､夜｣滓ｴｾ縲阪ぐ繝輔ヨ
            </h1>

            {/* 譛邨よ峩譁ｰ譌･ */}
            <p className='text-sm text-gray-500 mb-6'>
              譛邨よ峩譁ｰ譌･: 2026-01-06
            </p>

            {/* 蟆主・譁・*/}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                <strong>縲檎ｵ仙ｩ夂･昴＞・昴く繝・メ繝ｳ螳ｶ髮ｻ縲・/strong>縺ｨ諤昴＞縺後■縺ｧ縺吶′縲∵侭逅・ｒ縺励↑縺・､ｫ蟀ｦ縺ｫ縺ｯ騾・柑譫懊↓縺ｪ繧九％縺ｨ縺後≠繧翫∪縺吶・
              </p>
              <p className='mb-3'>
                菴ｿ繧上↑縺・ｮｶ髮ｻ縺悟｢励∴繧九→縲∫ｽｮ縺榊ｴ謇縺悟沂縺ｾ繧翫∫援莉倥￠縺ｮ繧ｹ繝医Ξ繧ｹ縺悟｢励∴繧九°繧峨〒縺吶・
              </p>
              <p className='mb-3'>
                螟夜｣滓ｴｾ縺ｮ螟ｫ蟀ｦ縺梧悽蠖薙↓蜉ｩ縺九ｋ縺ｮ縺ｯ<strong>縲碁｣溘・驕ｸ謚櫁い縺悟｢励∴繧九阪御ｺ亥ｮ壹′邨・∩繧・☆縺・阪悟ｮｶ莠玖ｲ諡・′貂帙ｋ縲・/strong>繧ｮ繝輔ヨ縲・
              </p>
              <p className='mb-3'>
                縺薙・險倅ｺ九〒縺ｯ縲∵侭逅・ｒ縺励↑縺・､ｫ蟀ｦ縺ｮ逕滓ｴｻ蟆守ｷ壹↓蜷医ｏ縺帙※縲√く繝・メ繝ｳ螳ｶ髮ｻ繧医ｊ蝟懊・繧後ｄ縺吶＞邨仙ｩ夂･昴＞繧呈ｷｱ謗倥ｊ縺励∪縺吶・
              </p>
            </div>

            {/* 縺薙・險倅ｺ九〒繧上°繧九％縺ｨ */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>搭 縺薙・險倅ｺ九〒繧上°繧九％縺ｨ</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｮ邨仙ｩ夂･昴＞縺ｧ襍ｷ縺阪′縺｡縺ｪ螟ｱ謨・/li>
                <li>螟夜｣滓ｴｾ縺悟万縺ｶ繧ｮ繝輔ヨ縺ｮ蜈ｱ騾夂せ・井ｺ亥ｮ壹∫夢蜉ｴ縲∝ｮｶ莠玖ｲ諡・ｼ・/li>
                <li>迥ｶ豕∝挨縺翫☆縺吶ａ繧ｮ繝輔ヨ譌ｩ隕玖｡ｨ</li>
                <li>繧ｭ繝・メ繝ｳ螳ｶ髮ｻ莉･螟悶・縲梧悽蠖薙↓蜉ｩ縺九ｋ縲阪き繝・ざ繝ｪ蛻･繧｢繧､繝・い</li>
                <li>驕ｿ縺代◆縺・ぐ繝輔ヨ譌ｩ隕玖｡ｨ・医↑縺懆ｲ諡・↓縺ｪ繧九°・・/li>
                <li>繧ｵ繝励Λ繧､繧ｺ諢溘ｒ谿九＠縺ｦ遒ｺ隱阪☆繧玖◇縺肴婿</li>
              </ul>
            </div>

            {/* CTA1 */}
            <div className='bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-8'>
              <p className='text-lg font-bold mb-3'>邨仙ｩ夂･昴＞繧ｮ繝輔ヨ繧偵き繝・ざ繝ｪ縺九ｉ謗｢縺・/p>
              <Link
                href='/wedding_celebration'
                className='inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors'
              >
                邨仙ｩ夂･昴＞繧ｮ繝輔ヨ繧呈爾縺・
              </Link>
            </div>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ1: 繧ｭ繝・メ繝ｳ螳ｶ髮ｻ縺悟絢縺輔ｊ縺ｫ縺上＞逅・罰 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                叉 譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｫ繧ｭ繝・メ繝ｳ螳ｶ髮ｻ縺悟絢縺輔ｊ縺ｫ縺上＞逅・罰
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                譁咏炊縺励↑縺・・縺ｯ縲・strong>諤縺代※縺・ｋ縺九ｉ縺ｧ縺ｯ縺ゅｊ縺ｾ縺帙ｓ</strong>縲・
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                逕滓ｴｻ縺ｮ蜆ｪ蜈磯・ｽ阪′<strong>縲御ｻ穂ｺ九阪檎ｧｻ蜍輔阪悟､夜｣溘阪御ｼ第・縲・/strong>縺ｫ蟇・▲縺ｦ縺・ｋ縺縺代〒縺吶・
              </p>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-4'>螟夜｣滓ｴｾ縺ｮ迴ｾ螳・/h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>蟷ｳ譌･縺ｯ蟶ｰ螳・′驕・￥縲∬ｪｿ逅・☆繧倶ｽ吝鴨縺後↑縺・/li>
                  <li>莨第律縺ｯ螟悶〒鬟溘∋繧九・縺梧･ｽ縺励∩</li>
                  <li>繧ｭ繝・メ繝ｳ縺ｯ譛菴朱剞縺ｧ蝗槭＠縺溘＞</li>
                  <li>迚・ｻ倥￠縺ｫ譎る俣繧貞叙繧峨ｌ縺溘￥縺ｪ縺・/li>
                </ul>
              </div>

              <p className='text-gray-700 mb-4 leading-relaxed'>
                縺薙％縺ｫ螳ｶ髮ｻ繧・ｪｿ逅・勣蜈ｷ縺悟｢励∴繧九→<strong>縲御ｽｿ繧上↑縺・・縺ｫ蝣ｴ謇繧貞叙繧九・/strong>縺瑚ｵｷ縺阪∪縺吶・
              </p>
              <p className='text-gray-700 leading-relaxed bg-pink-50 p-4 rounded'>
                庁 邨仙ｩ夂･昴＞縺ｧ螟ｧ莠九↑縺ｮ縺ｯ縲・strong>逶ｸ謇九・逕滓ｴｻ繧定憶縺上☆繧九％縺ｨ</strong>縺ｧ縺吶・
              </p>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ2: 縺ｾ縺夂ｵ占ｫ・*/}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                笨・縺ｾ縺夂ｵ占ｫ厄ｼ壼､夜｣滓ｴｾ縺ｫ蛻ｺ縺輔ｋ邨仙ｩ夂･昴＞縺ｮ蜈ｱ騾夂せ縺ｯ縲御ｺ亥ｮ壹′邨・ａ繧九阪瑚ｲ諡・′貂帙ｋ縲阪瑚・逕ｱ蠎ｦ縺碁ｫ倥＞縲・
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｫ蝟懊・繧後ｄ縺吶＞縺ｮ縺ｯ縲∵ｬ｡縺ｮ縺ｩ繧後°縺ｫ蠖薙※縺ｯ縺ｾ繧九ぐ繝輔ヨ縺ｧ縺吶・
              </p>

              <div className='space-y-3 mb-6'>
                {[
                  '莠育ｴ・＠繧・☆縺・∽ｽｿ縺・ち繧､繝溘Φ繧ｰ繧帝∈縺ｹ繧・,
                  '鬟滉ｺ九・驕ｸ謚櫁い縺悟｢励∴繧具ｼ亥､夜｣溘ｂ荳ｭ鬟溘ｂ・・,
                  '鬟溷ｾ後・迚・ｻ倥￠繧・ｮｶ莠九・謇矩俣縺梧ｸ帙ｋ',
                  '鄂ｮ縺榊ｴ謇繧貞叙繧峨↑縺・,
                  '螂ｽ縺ｿ縺悟牡繧後↓縺上＞'
                ].map((item, i) => (
                  <div key={i} className='flex items-start gap-3 bg-blue-50 p-4 rounded-lg'>
                    <span className='text-pink-600 font-bold text-lg'>笨・/span>
                    <p className='text-gray-700 text-sm pt-1'>{item}</p>
                  </div>
                ))}
              </div>

              <p className='text-gray-700 leading-relaxed bg-green-50 p-4 rounded'>
                庁 霑ｷ縺｣縺溘ｉ<strong>縲瑚・逕ｱ蠎ｦ縲阪→縲瑚ｲ諡・ｸ帙・/strong>縺ｫ蟇・○繧九→螟悶＠縺ｫ縺上＞縺ｧ縺吶・
              </p>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ3: 譌ｩ隕玖｡ｨ1 - 迥ｶ豕∝挨縺翫☆縺吶ａ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                投 迥ｶ豕∝挨縺翫☆縺吶ａ繧ｮ繝輔ヨ譌ｩ隕玖｡ｨ・郁ｿｷ縺｣縺溘ｉ縺薙％・・
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='min-w-max border-collapse border border-gray-300 text-sm'>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>迥ｶ豕・/th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>荳逡ｪ蛻ｺ縺輔ｋ譁ｹ蜷第ｧ</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>萓具ｼ医う繝｡繝ｼ繧ｸ・・/th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>蜈ｱ蜒阪″縺ｧ蟷ｳ譌･縺悟ｿ吶＠縺・/td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>鬟溘・譎ら洒縺ｨ閾ｪ逕ｱ蠎ｦ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>菴ｿ縺医ｋ蠎励′螟壹＞鬟滉ｺ九メ繧ｱ繝・ヨ縲∽ｺ育ｴ・＠繧・☆縺・ｽ馴ｨ・/td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>莨第律縺ｯ螟悶〒驕弱＃縺吶ち繧､繝・/td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>縺雁・縺九￠縺ｮ貅雜ｳ蠎ｦ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>繝ｬ繧ｹ繝医Λ繝ｳ菴馴ｨ薙√き繝輔ぉ譎る俣繧剃ｸ翫￡繧倶ｽ馴ｨ・/td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>螳ｶ縺ｧ鬟溘∋繧区律繧ゅ≠繧・/td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>螳ｶ縺ｮ鬟滉ｺ九・雉ｪ繧剃ｸ翫￡繧・/td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>繝・・繝悶Ν蜻ｨ繧翫・荳願ｳｪ蟆冗黄縲∫援莉倥￠縺後Λ繧ｯ縺ｪ繧｢繧､繝・Β</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>逕滓ｴｻ繝ｪ繧ｺ繝縺後ヰ繝ｩ繝舌Λ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>縺・▽縺ｧ繧ゆｽｿ縺医ｋ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>譛牙柑譛滄剞縺碁聞縺・∵律譎ゅｒ驕ｸ縺ｹ繧九ぐ繝輔ヨ</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>譁ｰ螻・′迢ｭ繧√∝庶邏榊ｰ代↑繧・/td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>逵√せ繝壹・繧ｹ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>蟆丞梛縲∵ｶ郁励☆繧九∝庶邏阪＞繧峨★</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ4: 豺ｱ謗倥ｊ1 - 鬟滉ｺ狗ｳｻ繧ｮ繝輔ヨ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                鎖・・豺ｱ謗倥ｊ1・應ｸ逡ｪ螟ｱ謨励＠縺ｫ縺上＞縺ｮ縺ｯ縲御ｽｿ縺医ｋ蠎励′螟壹＞縲埼｣滉ｺ狗ｳｻ繧ｮ繝輔ヨ
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                螟夜｣滓ｴｾ縺ｫ縺ｨ縺｣縺ｦ縲・strong>鬟滉ｺ九・雜｣蜻ｳ縺ｧ縺ゅｊ莨第・</strong>縺ｧ縺吶・
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                縺縺九ｉ鬟滉ｺ狗ｳｻ縺ｯ蛻ｺ縺輔ｊ繧・☆縺・ｸ譁ｹ縲・∈縺ｳ譁ｹ繧帝俣驕輔∴繧九→菴ｿ縺・↓縺上￥縺ｪ繧翫∪縺吶・
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>螟悶＠縺ｫ縺上＞驕ｸ縺ｳ譁ｹ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>菴ｿ縺医ｋ蠎励′螟壹＞縲√∪縺溘・繧ｨ繝ｪ繧｢繧帝∈縺ｰ縺ｪ縺・/li>
                  <li>莠育ｴ・・髮｣譏灘ｺｦ縺碁ｫ倥☆縺弱↑縺・/li>
                  <li>譛牙柑譛滄剞縺檎洒縺吶℃縺ｪ縺・/li>
                  <li>莠御ｺｺ縺ｧ陦後″繧・☆縺・ｾ｡譬ｼ蟶ｯ縺ｫ蟇・○繧・/li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>笶・驕ｿ縺代◆縺・誠縺ｨ縺礼ｩｴ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>莠育ｴ・′蜿悶ｊ縺･繧峨☆縺弱ｋ莠ｺ豌怜ｺ鈴剞螳・/li>
                  <li>遘ｻ蜍輔′螟ｧ螟峨↑遶句慍</li>
                  <li>譛滄剞縺檎洒縺上※莠亥ｮ壹′蜷医ｏ縺ｪ縺・/li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-yellow-50 p-4 rounded'>
                庁 繝昴う繝ｳ繝医・<strong>縲檎音蛻･諢溘阪ｈ繧翫悟ｮ滄圀縺ｫ菴ｿ縺医ｋ縺九・/strong>縺ｧ縺吶・
              </p>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ5: 豺ｱ謗倥ｊ2 - 荳ｭ鬟・*/}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                宵 豺ｱ謗倥ｊ2・懷､夜｣溘□縺代〒縺ｪ縺上御ｸｭ鬟溘′蠑ｷ縺上↑繧九阪ぐ繝輔ヨ縺ｯ逕滓ｴｻ縺後Λ繧ｯ縺ｫ縺ｪ繧・
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                螟夜｣滓ｴｾ縺ｧ繧ゅ・strong>逍ｲ繧後◆譌･縺ｯ螳ｶ縺ｧ貂医∪縺帙◆縺・/strong>縺薙→縺後≠繧翫∪縺吶・
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                縺薙％縺ｧ蜉ｩ縺九ｋ縺ｮ縺・strong>縲瑚ｲｷ縺｣縺ｦ蟶ｰ繧九阪悟ｮｶ縺ｧ貂ｩ繧√ｋ縲阪後☆縺宣｣溘∋繧峨ｌ繧九・/strong>譁ｹ蜷代〒縺吶・
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>螟悶＠縺ｫ縺上＞驕ｸ縺ｳ譁ｹ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>蜿励￠蜿悶ｊ縺ｮ雋諡・′蟆代↑縺・/li>
                  <li>蟶ｸ貂ｩ縺ｧ邂｡逅・〒縺阪ｋ縲√∪縺溘・譌･譎よ欠螳壹＠繧・☆縺・/li>
                  <li>螟ｫ蟀ｦ縺ｧ蛻・￠繧・☆縺・ｼ亥ｰ丞・縺代∝句桁陬・ｼ・/li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>笶・驕ｿ縺代◆縺・誠縺ｨ縺礼ｩｴ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>蜀ｷ蜃榊ｺｫ縺ｮ螳ｹ驥上ｒ蝨ｧ霑ｫ縺吶ｋ驥・/li>
                  <li>蜿励￠蜿悶ｊ縺碁屮縺励＞譎る俣蟶ｯ謖・ｮ・/li>
                  <li>蛹ゅ＞縺悟ｼｷ縺吶℃繧句･ｽ縺ｿ縺ｮ蛻・°繧後ｋ蜻ｳ</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-green-50 p-4 rounded'>
                庁 譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｫ螟ｧ莠九↑縺ｮ縺ｯ縲∬ｪｿ逅・・謇矩俣縺ｧ縺ｯ縺ｪ縺・strong>縲梧ｮｵ蜿悶ｊ縺ｮ謇矩俣縲阪ｒ貂帙ｉ縺吶％縺ｨ</strong>縺ｧ縺吶・
              </p>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ6: 豺ｱ謗倥ｊ3 - 繝・・繝悶Ν蟇・ｊ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ｪ・豺ｱ謗倥ｊ3・懷ｮｶ縺ｧ鬟溘∋繧区凾髢薙・雉ｪ繧剃ｸ翫￡繧九後ユ繝ｼ繝悶Ν蟇・ｊ縲阪ぐ繝輔ヨ縺ｯ貅雜ｳ蠎ｦ縺碁ｫ倥＞
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                譁咏炊繧偵＠縺ｪ縺・､ｫ蟀ｦ縺ｧ繧ゅ・strong>鬟溘∋繧区凾髢薙・蠢・★縺ゅｊ縺ｾ縺・/strong>縲・
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                繧ｭ繝・メ繝ｳ縺ｧ縺ｯ縺ｪ縺・strong>縲後ユ繝ｼ繝悶Ν縲阪↓蟇・○繧・/strong>縺ｨ縲∫函豢ｻ蟆守ｷ壹↓蜷医＞繧・☆縺・〒縺吶・
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>蛻ｺ縺輔ｊ繧・☆縺・婿蜷第ｧ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>鄂ｮ縺榊ｴ謇繧貞叙繧峨↑縺・ｸ願ｳｪ縺ｪ蟆冗黄</li>
                  <li>逕滓ｴｻ諢溘′蜃ｺ縺ｫ縺上＞繝・じ繧､繝ｳ</li>
                  <li>菴ｿ縺・ｻ蠎ｦ縺碁ｫ倥＞繧ゅ・</li>
                </ul>
              </div>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>萓具ｼ医う繝｡繝ｼ繧ｸ・・/h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>繧ｰ繝ｩ繧ｹ縲√・繧ｰ縲√き繝医Λ繝ｪ繝ｼ縺ｪ縺ｩ縺ｮ蟆第焚邊ｾ驪ｭ</li>
                  <li>鬟溷酷縺梧紛縺・ｰ丞梛繧｢繧､繝・Β</li>
                  <li>蜀咏悄縺ｫ谿九＠縺ｦ繧よｰ怜・縺御ｸ翫′繧九ｂ縺ｮ</li>
                </ul>
              </div>

              <div className='bg-red-50 border-l-4 border-red-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>笶・驕ｿ縺代◆縺・誠縺ｨ縺礼ｩｴ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>螟ｧ驥上そ繝・ヨ縺ｧ蜿守ｴ阪′蝓九∪繧・/li>
                  <li>蜑ｲ繧後ｄ縺吶￥邂｡逅・′髱｢蛟偵↑繧ゅ・</li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-purple-50 p-4 rounded'>
                庁 螟夜｣滓ｴｾ縺ｻ縺ｩ<strong>縲悟ｮｶ縺ｧ縺ｮ荳鬟溘′迚ｹ蛻･縺ｫ縺ｪ繧九阪ぐ繝輔ヨ</strong>縺悟柑縺阪∪縺吶・
              </p>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ7: 豺ｱ謗倥ｊ4 - 迚・ｻ倥￠ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                ｧｽ 豺ｱ謗倥ｊ4・憺｣溷ｾ後・迚・ｻ倥￠雋諡・′貂帙ｋ縺ｨ縲∝､夜｣滓ｴｾ縺ｮ貅雜ｳ蠎ｦ縺ｯ荳翫′繧・
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                譁咏炊繧偵＠縺ｪ縺・､ｫ蟀ｦ縺ｧ繧ゅ・strong>鬟溷ｾ後・迚・ｻ倥￠縺ｯ逋ｺ逕溘＠縺ｾ縺・/strong>縲・
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                縺縺九ｉ<strong>縲檎援莉倥￠繧偵Λ繧ｯ縺ｫ縺吶ｋ縲肴婿蜷・/strong>縺ｯ螳溘・縺九↑繧雁ｮ溽畑逧・〒縺吶・
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-5 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>螟悶＠縺ｫ縺上＞閠・∴譁ｹ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 text-sm ml-2'>
                  <li>隱ｰ縺御ｽｿ縺｣縺ｦ繧ょ酔縺倡ｵ先棡縺ｫ縺ｪ繧・/li>
                  <li>隱ｬ譏惹ｸ崎ｦ√〒菴ｿ縺医ｋ</li>
                  <li>蜿守ｴ阪′蠅励∴縺ｪ縺・/li>
                </ul>
              </div>

              <p className='text-gray-700 leading-relaxed bg-yellow-50 p-4 rounded'>
                庁 縺薙％縺ｯ豢ｾ謇九＆繧医ｊ縲・strong>蝨ｰ蜻ｳ縺ｫ蜉ｹ縺上⊇縺・′蝟懊・繧後ｄ縺吶＞</strong>縺ｧ縺吶・
              </p>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ8: 譌ｩ隕玖｡ｨ2 - 驕ｿ縺代◆縺・ぐ繝輔ヨ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                笞・・驕ｿ縺代◆縺・ぐ繝輔ヨ譌ｩ隕玖｡ｨ・亥､夜｣滓ｴｾ縺ｫ縺ｯ雋諡・↓縺ｪ繧翫ｄ縺吶＞・・
              </h2>
              
              <div className='overflow-x-auto'>
                <table className='min-w-max border-collapse border border-gray-300 text-sm'>
                  <thead>
                    <tr className='bg-red-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>驕ｿ縺代◆縺・ぐ繝輔ヨ</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>雋諡・↓縺ｪ繧狗炊逕ｱ</th>
                      <th className='border border-gray-300 px-4 py-3 text-left font-bold text-gray-800'>莉｣譖ｿ縺ｮ譁ｹ蜷第ｧ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>繧ｭ繝・メ繝ｳ螳ｶ髮ｻ・郁ｪｿ逅・ｳｻ・・/td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>菴ｿ繧上↑縺・∝ｴ謇繧貞叙繧九∝・縺吶・縺碁擇蛟・/td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>鬟滉ｺ倶ｽ馴ｨ薙√ユ繝ｼ繝悶Ν蟇・ｊ縲∵凾遏ｭ蟇・ｊ</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>骰九ｄ繝輔Λ繧､繝代Φ縺ｮ繧ｻ繝・ヨ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>縺昴ｂ縺昴ｂ菴ｿ繧上↑縺・∝庶邏阪′蜴ｳ縺励＞</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>蟆第焚邊ｾ驪ｭ縺ｮ繝・・繝悶Ν蟆冗黄</td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>隱ｿ蜻ｳ譁吶ｄ繧ｹ繝代う繧ｹ縺ｮ隧ｰ繧∝粋繧上○</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>菴ｿ縺・・繧後↑縺・∝･ｽ縺ｿ縺悟牡繧後ｋ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>蛟句桁陬・〒鬟溘∋蛻・ｌ繧倶ｸｭ鬟溷ｯ・ｊ</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>螟ｧ驥上・鬟溷勣繧ｻ繝・ヨ</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>蜿守ｴ阪′蝓九∪繧九∬｢ｫ繧・/td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>蟆第焚邊ｾ驪ｭ縲∫ｽｮ縺榊ｴ謇縺後＞繧峨↑縺・/td>
                    </tr>
                    <tr className='bg-white'>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>譛滄剞縺檎洒縺・函繧ゅ・</td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>蜿励￠蜿悶ｊ縺ｨ莠亥ｮ壹′蜷医ｏ縺ｪ縺・/td>
                      <td className='border border-gray-300 px-4 py-3 text-gray-700'>譌･謖√■縲∵律譎よ欠螳壹＠繧・☆縺・/td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-gray-700 mt-6 mb-4 leading-relaxed'>
                邨仙ｩ夂･昴＞蜈ｨ菴薙・NG隕ｳ轤ｹ縺ｯ蛻･險倅ｺ九〒繧よ紛逅・＠縺ｦ縺・∪縺吶・
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <Link
                  href='/wedding_celebration/ng-gifts'
                  className='text-pink-600 font-semibold hover:underline'
                >
                  竊・邨仙ｩ夂･昴＞縺ｧ雍医▲縺ｦ縺ｯ縺・￠縺ｪ縺НG繧ｮ繝輔ヨ13驕ｸ・懊ち繝悶・逅・罰縺ｨ螟悶＆縺ｪ縺・ｻ｣譖ｿ譯・
                </Link>
              </div>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ9: 閨槭″譁ｹ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                町 繧ｵ繝励Λ繧､繧ｺ諢溘ｒ谿九＠縺ｦ螟夜｣滓ｴｾ縺狗｢ｺ隱阪☆繧玖◇縺肴婿・医ユ繝ｳ繝励Ξ・・
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｻ縺ｩ縲・strong>遒ｺ隱阪・縺ｲ縺ｨ險縺ｧ謌仙粥邇・′荳翫′繧翫∪縺・/strong>縲・
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                縺溘□縺励∬◇縺肴婿繧帝俣驕輔∴繧九→豌励ｒ驕｣繧上○縺ｾ縺吶・
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-4'>繝・Φ繝励Ξ</h3>
                <div className='space-y-3'>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>縲檎ｵ仙ｩ夂･昴＞縲∝ｮｶ縺ｮ繧ゅ・蠅励ｄ縺励◆縺上↑縺・ｈ縺ｭ・溷､夜｣溘→縺倶ｽ馴ｨ灘ｯ・ｊ縺後＞縺・ｼ溘・/p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>縲御ｺ御ｺｺ縺ｮ莨第律縺｣縺ｦ縲∝ｮｶ縺ｨ螟悶□縺ｨ縺ｩ縺｣縺｡螟壹＞・溘・/p>
                  </div>
                  <div className='bg-white p-4 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>縲御ｽｿ縺・ｄ縺吶＞蠖｢縺ｫ縺励◆縺・ｓ縺縺代←縲∝女縺大叙繧翫ｄ縺吶＞譖懈律縺ゅｋ・溘・/p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed'>
                庁 縺薙・3縺､縺ｧ縲・strong>螟夜｣滓ｴｾ蜷代￠縺ｮ譛驕ｩ隗｣</strong>縺ｫ蟇・○繧峨ｌ縺ｾ縺吶・
              </p>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ10: 縺ｮ縺励∈縺ｮ蜀・Κ繝ｪ繝ｳ繧ｯ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                統 縺ｮ縺励ｄ蛹・｣・〒霑ｷ縺｣縺溘ｉ
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                邨仙ｩ夂･昴＞縺ｯ荳ｭ霄ｫ縺梧ｱｺ縺ｾ縺｣縺ｦ繧ゅ・strong>縺ｮ縺励〒霑ｷ縺・ｺｺ縺悟､壹＞</strong>縺ｧ縺吶・
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                譌ｩ隕玖｡ｨ縺ｨ謇矩・・蛻･險倅ｺ九↓縺ｾ縺ｨ繧√※縺・∪縺吶・
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <Link
                  href='/wedding_celebration/noshi-guide'
                  className='text-pink-600 font-semibold hover:underline'
                >
                  竊・邨仙ｩ夂･昴＞縺ｮ縲後・縺励榊ｮ悟・繧ｬ繧､繝会ｽ懆｡ｨ譖ｸ縺阪・豌ｴ蠑輔・蜀・・縺怜､悶・縺励・騾｣蜷阪・驛ｵ騾√∪縺ｧ
                </Link>
              </div>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ11: 霑ｷ縺｣縺溘→縺阪・邨占ｫ・*/}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                笨ｨ 霑ｷ縺｣縺溘→縺阪・邨占ｫ厄ｼ壼､夜｣滓ｴｾ縺ｫ縺ｯ縲御ｽｿ縺医ｋ縲阪御ｺ亥ｮ壹′邨・ａ繧九阪瑚ｲ諡・′貂帙ｋ縲・
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｫ蛻ｺ縺輔ｋ邨仙ｩ夂･昴＞縺ｯ縲・strong>繧ｭ繝・メ繝ｳ繧貞・螳溘＆縺帙ｋ縺薙→縺ｧ縺ｯ縺ゅｊ縺ｾ縺帙ｓ</strong>縲・
              </p>
              <p className='text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg border-2 border-pink-300'>
                庁 <strong>鬟溘・譎る俣繧偵Λ繧ｯ縺ｫ縺励※縲∵･ｽ縺励￥縺励※縲∫函豢ｻ縺ｮ雋諡・ｒ貂帙ｉ縺吶％縺ｨ</strong>縺ｧ縺吶・
              </p>
            </section>

            {/* CTA2 */}
            <div className='bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg text-center mb-12'>
              <p className='text-lg font-bold mb-3'>邨仙ｩ夂･昴＞繧ｮ繝輔ヨ繧偵き繝・ざ繝ｪ縺九ｉ謗｢縺・/p>
              <Link
                href='/wedding_celebration'
                className='inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors'
              >
                邨仙ｩ夂･昴＞繧ｮ繝輔ヨ繧呈爾縺・
              </Link>
            </div>

            {/* FAQ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-pink-500'>
                笶・繧医￥縺ゅｋ雉ｪ蝠擾ｼ・AQ・・
              </h2>

              <div className='space-y-6'>
                {/* Q1 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 譁咏炊縺励↑縺・､ｫ蟀ｦ縺ｫ繧ｭ繝・メ繝ｳ螳ｶ髮ｻ繧定ｴ医ｋ縺ｮ縺ｯ繧・ａ縺溘⊇縺・′縺・＞・・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    菴ｿ繧上ｌ縺ｪ縺・庄閭ｽ諤ｧ縺碁ｫ倥￥縲∫ｽｮ縺榊ｴ謇縺ｮ雋諡・′蠅励∴繧九◆繧・∩縺代ｋ縺ｮ縺檎┌髮｣縺ｧ縺吶ょ､夜｣溘ｄ荳ｭ鬟溘・逕滓ｴｻ縺ｫ蛻ｺ縺輔ｋ譁ｹ蜷代′蝟懊・繧後ｄ縺吶＞縺ｧ縺吶・
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 螟夜｣溘ぐ繝輔ヨ縺ｧ螟ｱ謨励＠縺ｪ縺・さ繝・・・・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    菴ｿ縺医ｋ蠎励′螟壹＞縺薙→縲∵怏蜉ｹ譛滄剞縺檎洒縺吶℃縺ｪ縺・％縺ｨ縲∽ｺ育ｴ・屮譏灘ｺｦ縺碁ｫ倥☆縺弱↑縺・％縺ｨ縺碁㍾隕√〒縺吶・
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 螳ｶ縺ｧ鬟溘∋繧区凾髢薙ｒ荳翫￡繧九↑繧我ｽ輔′縺・＞・・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    繧ｭ繝・メ繝ｳ縺ｧ縺ｯ縺ｪ縺上ユ繝ｼ繝悶Ν蟇・ｊ縺悟､悶＠縺ｫ縺上＞縺ｧ縺吶ょｰ第焚邊ｾ驪ｭ縺ｧ鄂ｮ縺榊ｴ謇繧貞叙繧峨↑縺・ｂ縺ｮ縺悟ｮ牙ｿ・〒縺吶・
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 鬟溘∋迚ｩ繧定ｴ医ｋ縺ｨ縺阪・豕ｨ諢冗せ縺ｯ・・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    蜿励￠蜿悶ｊ雋諡・→菫晏ｭ倥・雋諡・′蠅励∴縺ｪ縺・％縺ｨ縺悟､ｧ蛻・〒縺吶りｿｷ縺｣縺溘ｉ蟶ｸ貂ｩ縺ｧ譌･謖√■縺励∝ｰ丞・縺代〒縺阪ｋ蠖｢縺檎┌髮｣縺ｧ縺吶・
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 繧ｵ繝励Λ繧､繧ｺ縺ｧ雍医ｊ縺溘＞縺代←遒ｺ隱阪＠縺溘⊇縺・′縺・＞・・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    遒ｺ隱阪＠縺溘⊇縺・′謌仙粥邇・・荳翫′繧翫∪縺吶り◇縺肴婿繧貞ｷ･螟ｫ縺吶ｌ縺ｰ繧ｵ繝励Λ繧､繧ｺ諢溘ｒ谿九＠縺､縺､螟悶○縺ｾ縺吶・
                  </p>
                </div>
              </div>
            </section>

          </article>
        </main>
      </div>

      <Footer />
    </>
  );
}
