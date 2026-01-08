/**
 * 邨仙ｩ夂･昴＞縺ｮ縺怜ｮ悟・繧ｬ繧､繝芽ｨ倅ｺ九・繝ｼ繧ｸ
 * 
 * SEO蟇ｾ蠢懊：AQ JSON-LD蝓九ａ霎ｼ縺ｿ縲，TA驟咲ｽｮ縲∝・驛ｨ繝ｪ繝ｳ繧ｯ縲∬｡ｨ邨・∩ﾃ・
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
      'name': '邨仙ｩ夂･昴＞縺ｮ陦ｨ譖ｸ縺阪・縲悟ｾ｡逾昴阪→縲悟ｯｿ縲阪←縺｣縺｡縺檎┌髮｣・・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '霑ｷ縺｣縺溘ｉ縲悟ｾ｡逾昴阪′荳・・縺ｧ縺吶ゅｈ繧顔ｵ仙ｩ夂･昴＞繧峨＠縺輔ｒ蜃ｺ縺励◆縺・ｴ蜷医・縲悟ｯｿ縲阪ｂ菴ｿ縺・ｄ縺吶＞縺ｧ縺吶・
      }
    },
    {
      '@type': 'Question',
      'name': '邨仙ｩ夂･昴＞縺ｮ豌ｴ蠑輔・陜ｶ邨舌・縺ｧ繧ゅ＞縺・ｼ・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '荳闊ｬ逧・↓縺ｯ邨仙ｩ夂･昴＞縺ｯ縲檎ｵ舌・蛻・ｊ縲咲ｳｻ縺檎┌髮｣縺ｧ縺吶りｿｷ縺｣縺溘ｉ邨仙ｩ夂･昴＞逕ｨ繧帝∈縺ｶ縺ｨ螳牙ｿ・〒縺吶・
      }
    },
    {
      '@type': 'Question',
      'name': '蜀・・縺励→螟悶・縺励・・騾√↑繧峨←縺｣縺｡・・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '驟埼√↑繧牙・縺ｮ縺励′辟｡髮｣縺ｧ縺吶よｱ壹ｌ縺ｫ縺上￥縲∽ｸ∝ｯｧ縺ｫ隕九○繧・☆縺・〒縺吶・
      }
    },
    {
      '@type': 'Question',
      'name': '螟ｫ蟀ｦ騾｣蜷阪〒蜷榊燕繧呈嶌縺上→縺阪・譖ｸ縺肴婿縺ｯ・・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '蜿励￠蜿悶ｋ蛛ｴ縺悟・縺九ｊ繧・☆縺・ｽ｢縺梧ｭ｣隗｣縺ｧ縺吶りｿｷ縺｣縺溘ｉ螟ｫ縺ｮ繝輔Ν繝阪・繝・句ｦｻ縺ｮ蜷榊燕縺ｫ蟇・○繧九→謨ｴ縺・ｄ縺吶＞縺ｧ縺吶・
      }
    },
    {
      '@type': 'Question',
      'name': '蜿倶ｺｺ4莠ｺ莉･荳翫〒雍医ｋ蝣ｴ蜷医・縺ｮ縺励・縺ｩ縺・☆繧具ｼ・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '莉｣陦ｨ閠・錐・九悟､紋ｸ蜷後阪↓縺励※縲∝挨邏吶↓蜈ｨ蜩｡縺ｮ蜷榊燕繧呈嶌縺上→蛻・°繧翫ｄ縺吶＞縺ｧ縺吶・
      }
    },
    {
      '@type': 'Question',
      'name': '驛ｵ騾√〒邨仙ｩ夂･昴＞繧定ｴ医ｋ縺ｮ縺ｯ螟ｱ遉ｼ・・,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '螟ｱ遉ｼ縺ｧ縺ｯ縺ゅｊ縺ｾ縺帙ｓ縲ゆｺ句燕縺ｫ荳險騾｣邨｡縺励∝・縺ｮ縺励→遏ｭ縺・Γ繝・そ繝ｼ繧ｸ繧呈ｷｻ縺医ｋ縺ｨ荳∝ｯｧ縺ｧ縺吶・
      }
    }
  ]
};

/**
 * 繝｡繧ｿ繝・・繧ｿ險ｭ螳夲ｼ・EO蟇ｾ蠢懶ｼ・
 */
export const metadata: Metadata = {
  title: '邨仙ｩ夂･昴＞縺ｮ縲後・縺励榊ｮ悟・繧ｬ繧､繝会ｽ懆｡ｨ譖ｸ縺阪・豌ｴ蠑輔・蜀・・縺怜､悶・縺励・騾｣蜷阪・驛ｵ騾√∪縺ｧ',
  description: '邨仙ｩ夂･昴＞縺ｮ縺ｮ縺励〒霑ｷ縺｣縺溘ｉ縺薙・險倅ｺ九り｡ｨ譖ｸ縺搾ｼ亥ｾ｡逾・蟇ｿ/蠕｡邨仙ｩ壼ｾ｡逾晢ｼ峨・菴ｿ縺・・縺代∵ｰｴ蠑輔・遞ｮ鬘橸ｼ育ｵ舌・蛻・ｊ・峨∝・縺ｮ縺怜､悶・縺励∝錐蜑阪・譖ｸ縺肴婿・磯｣蜷阪・螳ｶ譌上・閨ｷ蝣ｴ・峨ｄ驛ｵ騾√・繝槭リ繝ｼ縺ｾ縺ｧ蛻・°繧翫ｄ縺吶￥隗｣隱ｬ縺励∪縺吶・,
  keywords: ['邨仙ｩ夂･昴＞', '縺ｮ縺・, '陦ｨ譖ｸ縺・, '豌ｴ蠑・, '蜀・・縺・, '螟悶・縺・, '騾｣蜷・],
  openGraph: {
    title: '邨仙ｩ夂･昴＞縺ｮ縲後・縺励榊ｮ悟・繧ｬ繧､繝会ｽ懆｡ｨ譖ｸ縺阪・豌ｴ蠑輔・蜀・・縺怜､悶・縺励・騾｣蜷阪・驛ｵ騾√∪縺ｧ',
    description: '邨仙ｩ夂･昴＞縺ｮ縺ｮ縺励〒霑ｷ縺｣縺溘ｉ縺薙・險倅ｺ九り｡ｨ譖ｸ縺搾ｼ亥ｾ｡逾・蟇ｿ/蠕｡邨仙ｩ壼ｾ｡逾晢ｼ峨・菴ｿ縺・・縺代∵ｰｴ蠑輔・遞ｮ鬘橸ｼ育ｵ舌・蛻・ｊ・峨∝・縺ｮ縺怜､悶・縺励∝錐蜑阪・譖ｸ縺肴婿・磯｣蜷阪・螳ｶ譌上・閨ｷ蝣ｴ・峨ｄ驛ｵ騾√・繝槭リ繝ｼ縺ｾ縺ｧ蛻・°繧翫ｄ縺吶￥隗｣隱ｬ縺励∪縺吶・,
    type: 'article',
    url: 'https://www.hare-gift.com/wedding_celebration/noshi-guide',
  },
  alternates: {
    canonical: 'https://www.hare-gift.com/wedding_celebration/noshi-guide',
  },
};

/**
 * 險倅ｺ九・繝ｼ繧ｸ繧ｳ繝ｳ繝昴・繝阪Φ繝・
 */
export default function WeddingCelebrationNoshiGuideArticle() {
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
            <span className='text-gray-800'>縺ｮ縺怜ｮ悟・繧ｬ繧､繝・/span>
          </nav>

          {/* 險倅ｺ区悽譁・*/}
          <article className='bg-white rounded-lg shadow-md p-8'>
            {/* 繧ｿ繧､繝医Ν・・1・・*/}
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              邨仙ｩ夂･昴＞縺ｮ縲後・縺励榊ｮ悟・繧ｬ繧､繝会ｽ懆｡ｨ譖ｸ縺阪・豌ｴ蠑輔・蜀・・縺怜､悶・縺励・騾｣蜷阪・驛ｵ騾√∪縺ｧ
            </h1>

            {/* 譛邨よ峩譁ｰ譌･ */}
            <p className='text-sm text-gray-500 mb-6'>
              譛邨よ峩譁ｰ譌･: 2026-01-06
            </p>

            {/* 蟆主・譁・*/}
            <div className='mb-8 text-gray-700 leading-relaxed'>
              <p className='mb-3'>
                邨仙ｩ夂･昴＞繧帝∈縺ｹ縺ｦ繧ゅ∵怙蠕後↓謇九′豁｢縺ｾ繧翫ｄ縺吶＞縺ｮ縺・strong>縲後・縺励・/strong>縺ｧ縺吶・
              </p>
              <p className='mb-3'>
                縲瑚｡ｨ譖ｸ縺阪▲縺ｦ菴輔′豁｣隗｣・溘阪梧ｰｴ蠑輔・陜ｶ邨舌・縺ｧ縺・＞・溘阪悟・縺ｮ縺怜､悶・縺励・縺ｩ縺｣縺｡・溘阪碁｣蜷阪・縺ｩ縺・嶌縺擾ｼ溘阪↑縺ｩ縲∫ｴｰ縺九＞荳榊ｮ峨′荳豌励↓蜃ｺ縺ｦ縺阪∪縺吶・
              </p>
              <p className='mb-3'>
                縺ｧ繧ゅ√・縺励・繝ｫ繝ｼ繝ｫ繧剃ｸｸ證苓ｨ倥＠縺ｪ縺上※繧ょ､ｧ荳亥､ｫ縺ｧ縺吶・
              </p>
              <p className='mb-3'>
                邨仙ｩ夂･昴＞縺ｧ螟悶＆縺ｪ縺・・繧､繝ｳ繝医・縲・strong>縺溘▲縺溘・3縺､</strong>縲・br />
                縲瑚｡ｨ譖ｸ縺阪阪梧ｰｴ蠑輔阪悟錐蜑搾ｼ磯｣蜷搾ｼ峨阪ｒ謚ｼ縺輔∴繧後・縲∝､ｱ遉ｼ縺ｫ縺ｪ繧翫↓縺上￥縲∽ｸ∝ｯｧ縺輔ｂ莨昴ｏ繧翫∪縺吶・
              </p>
              <p className='mb-3'>
                縺薙・險倅ｺ九〒縺ｯ縲∫ｵ仙ｩ夂･昴＞縺ｮ縺ｮ縺励ｒ譛遏ｭ縺ｧ豁｣縺励￥謨ｴ縺医ｋ縺溘ａ縺ｫ縲・strong>譌ｩ隕玖｡ｨ縺ｨ謇矩・〒蛻・°繧翫ｄ縺吶￥縺ｾ縺ｨ繧√∪縺・/strong>縲・
              </p>
            </div>

            {/* 縺薙・險倅ｺ九〒繧上°繧九％縺ｨ */}
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-8'>
              <h2 className='text-lg font-bold text-gray-800 mb-4'>搭 縺薙・險倅ｺ九〒繧上°繧九％縺ｨ</h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                <li>邨仙ｩ夂･昴＞縺ｮ縺ｮ縺励〒蠢・★謚ｼ縺輔∴繧・繝昴う繝ｳ繝・/li>
                <li>陦ｨ譖ｸ縺阪・豁｣隗｣・亥ｾ｡逾昴∝ｯｿ縲∝ｾ｡邨仙ｩ壼ｾ｡逾昴・菴ｿ縺・・縺托ｼ・/li>
                <li>豌ｴ蠑輔・菴輔ｒ驕ｸ縺ｶ縺ｹ縺阪°・郁攜邨舌・縺君G縺ｪ逅・罰・・/li>
                <li>蜀・・縺怜､悶・縺励・驕ｸ縺ｳ譁ｹ・域焔貂｡縺励・・騾・ｼ・/li>
                <li>騾｣蜷阪・譖ｸ縺肴婿・亥､ｫ蟀ｦ縲∝ｮｶ譌上∬・蝣ｴ・・/li>
                <li>驛ｵ騾√☆繧九→縺阪・繝槭リ繝ｼ縺ｨ豺ｻ縺育憾縺ｮ閠・∴譁ｹ</li>
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

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ1: 縺ｾ縺夂ｵ占ｫ・*/}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                笞｡ 縺ｾ縺夂ｵ占ｫ厄ｼ夂ｵ仙ｩ夂･昴＞縺ｮ縺ｮ縺励・縲瑚｡ｨ譖ｸ縺阪・豌ｴ蠑輔・蜷榊燕縲阪〒9蜑ｲ豎ｺ縺ｾ繧・
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                邨仙ｩ夂･昴＞縺ｮ縺ｮ縺励・縲・屮縺励◎縺・↓隕九∴縺ｦ繧ゅ∝ｮ溘・<strong>蛻､譁ｭ繝昴う繝ｳ繝医′蟆代↑縺・/strong>縺ｧ縺吶・
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>謚ｼ縺輔∴繧九∋縺・縺､</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li><strong>陦ｨ譖ｸ縺搾ｼ・/strong>菴輔・逶ｮ逧・〒雍医ｋ縺九ｒ莨昴∴繧・/li>
                  <li><strong>豌ｴ蠑包ｼ・/strong>邨仙ｩ夂･昴＞縺ｯ縲檎ｵ舌・蛻・ｊ縲咲ｳｻ繧帝∈縺ｶ</li>
                  <li><strong>蜷榊燕・・/strong>隱ｰ縺九ｉ縺ｮ雍医ｊ迚ｩ縺九ｒ蛻・°繧九ｈ縺・↓縺吶ｋ</li>
                </ul>
              </div>

              <p className='text-gray-700 mt-4 leading-relaxed'>
                縺薙・3縺､縺梧紛縺・→縲√・縺励・蜊ｰ雎｡縺ｯ荳豌励↓荳∝ｯｧ縺ｫ縺ｪ繧翫∪縺吶・
              </p>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ2: 陦ｨ譖ｸ縺・*/}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                笨搾ｸ・邨仙ｩ夂･昴＞縺ｮ縲瑚｡ｨ譖ｸ縺阪堺ｽ輔′豁｣隗｣・滂ｼ郁ｿｷ縺｣縺溘ｉ縺薙・鬆・ｼ・
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                邨仙ｩ夂･昴＞縺ｮ陦ｨ譖ｸ縺阪・縲∝渕譛ｬ逧・↓谺｡縺ｮ縺ｩ繧後°繧帝∈縺ｹ縺ｰ螟ｱ遉ｼ縺ｫ縺ｪ繧翫↓縺上＞縺ｧ縺吶・
              </p>

              <div className='bg-blue-50 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>繧医￥菴ｿ繧上ｌ繧玖｡ｨ譖ｸ縺・/h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>縲悟ｾ｡逾昴・/li>
                  <li>縲悟ｯｿ縲・/li>
                  <li>縲悟ｾ｡邨仙ｩ壼ｾ｡逾昴・/li>
                </ul>
              </div>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>霑ｷ縺｣縺溘→縺阪・閠・∴譁ｹ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>霑ｷ縺｣縺溘ｉ<strong>縲悟ｾ｡逾昴阪′荳・・</strong></li>
                  <li>縺阪■繧薙→諢溘ｒ蜃ｺ縺励◆縺・↑繧・strong>縲悟ｯｿ縲・/strong></li>
                  <li>邨仙ｩ壹↓迚ｹ蛹悶＠縺ｦ譏守｢ｺ縺ｫ縺励◆縺・↑繧・strong>縲悟ｾ｡邨仙ｩ壼ｾ｡逾昴・/strong></li>
                </ul>
              </div>

              {/* 陦ｨ譖ｸ縺肴掠隕玖｡ｨ */}
              <h3 className='text-xl font-bold text-gray-800 mb-4'>陦ｨ譖ｸ縺阪・菴ｿ縺・・縺第掠隕玖｡ｨ</h3>
              <div className='overflow-x-auto mb-6'>
                <table className='min-w-max border-collapse bg-white'>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>陦ｨ譖ｸ縺・/th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>菴ｿ縺・ｴ髱｢</th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>霑ｷ縺｣縺溘ｉ縺薙ｌ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>蠕｡逾・/td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>邨仙ｩ夂･昴＞蜈ｨ闊ｬ縺ｧ菴ｿ縺医ｋ荳・・</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>縺薙ｌ縺御ｸ逡ｪ螳牙・</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>蟇ｿ</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>邨仙ｩ夂･昴＞繧峨＠縺輔√°縺励％縺ｾ縺｣縺溷魂雎｡</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>逶ｮ荳翫↓繧ゆｽｿ縺・ｄ縺吶＞</td>
                    </tr>
                    <tr>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>蠕｡邨仙ｩ壼ｾ｡逾・/td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>邨仙ｩ夂･昴＞縺縺ｨ譏守｢ｺ縺ｫ縺励◆縺・/td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>莉悶・逾昴＞縺ｨ豺ｷ縺悶ｊ縺昴≧縺ｪ譎・/td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='bg-red-50 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3 text-sm'>豕ｨ諢冗せ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>譁・ｫ繧帝聞縺上＠縺吶℃縺ｪ縺・/li>
                  <li>霑ｷ縺｣縺溘ｉ縲悟ｾ｡逾昴阪↓謌ｻ縺・/li>
                </ul>
              </div>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ3: 豌ｴ蠑・*/}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                死 豌ｴ蠑輔・縲檎ｵ舌・蛻・ｊ縲阪′蝓ｺ譛ｬ・郁攜邨舌・縺ｯ驕ｿ縺代ｋ・・
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                豌ｴ蠑輔・隕九◆逶ｮ縺縺代〒縺ｪ縺上・strong>諢丞袖縺後そ繝・ヨ</strong>縺ｫ縺ｪ縺｣縺ｦ縺・∪縺吶・
              </p>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                邨仙ｩ壹・縲御ｸ蠎ｦ縺阪ｊ縺梧悍縺ｾ縺励＞縺顔･昴＞縲阪↑縺ｮ縺ｧ縲√⊇縺ｩ縺代※邨舌・逶ｴ縺帙ｋ縲瑚攜邨舌・縲阪・荳闊ｬ逧・↓驕ｿ縺代ｋ縺ｮ縺檎┌髮｣縺ｧ縺吶・
              </p>

              <div className='bg-green-50 border-l-4 border-green-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>邨仙ｩ夂･昴＞縺ｧ驕ｸ縺ｳ繧・☆縺・ｰｴ蠑・/h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li><strong>縲檎ｵ舌・蛻・ｊ縲・/strong></li>
                  <li><strong>縲後≠繧上§邨舌・縲・/strong></li>
                </ul>
              </div>

              <p className='text-gray-700 mb-4 leading-relaxed'>
                濶ｲ縺ｯ荳闊ｬ逧・↓<strong>邏・區縺悟渕譛ｬ</strong>縺ｧ縺吶・
              </p>
              <p className='text-gray-700 leading-relaxed'>
                霑ｷ縺｣縺溘ｉ縲∝ｺ苓・繧・夊ｲｩ縺ｧ<strong>縲檎ｵ仙ｩ夂･昴＞逕ｨ縲阪→譖ｸ縺九ｌ縺ｦ縺・ｋ繧ゅ・繧帝∈縺ｶ縺ｨ螳牙ｿ・/strong>縺ｧ縺吶・
              </p>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ4: 蜀・・縺怜､悶・縺・*/}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                逃 蜀・・縺怜､悶・縺励・縺ｩ縺｣縺｡・滂ｼ育ｵ仙ｩ夂･昴＞縺ｮ螟ｱ謨励＠縺ｪ縺・ｱｺ繧∵婿・・
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                蜀・・縺怜､悶・縺励・縲√←縺｡繧峨′邨ｶ蟇ｾ豁｣隗｣縺ｨ縺・≧繧医ｊ<strong>縲梧ｸ｡縺玲婿縲阪〒豎ｺ繧√ｋ</strong>縺ｨ繧ｹ繝繝ｼ繧ｺ縺ｧ縺吶・
              </p>

              <div className='space-y-6'>
                {/* 螟悶・縺・*/}
                <div className='bg-blue-50 p-6 rounded'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>螟悶・縺励′蜷代￥</h3>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                    <li>謇区ｸ｡縺励〒雍医ｋ</li>
                    <li>雍医ｊ迚ｩ縺ｧ縺ゅｋ縺薙→繧貞・縺九ｊ繧・☆縺上＠縺溘＞</li>
                  </ul>
                </div>

                {/* 蜀・・縺・*/}
                <div className='bg-green-50 p-6 rounded'>
                  <h3 className='text-lg font-bold text-gray-800 mb-3'>蜀・・縺励′蜷代￥</h3>
                  <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                    <li>驟埼√〒雍医ｋ・医・縺励′豎壹ｌ縺ｫ縺上＞・・/li>
                    <li>謗ｧ縺医ａ縺ｫ荳∝ｯｧ縺ｫ隕九○縺溘＞</li>
                  </ul>
                </div>
              </div>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded mt-6'>
                <h3 className='font-semibold text-gray-800 mb-2 text-sm'>霑ｷ縺｣縺溘ｉ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm'>
                  <li><strong>驟埼√↑繧牙・縺ｮ縺・/strong></li>
                  <li><strong>謇区ｸ｡縺励↑繧牙､悶・縺・/strong></li>
                </ul>
              </div>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ5: 蜷榊燕縺ｮ譖ｸ縺肴婿・磯｣蜷肴掠隕玖｡ｨ・・*/}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                則 蜷榊燕縺ｮ譖ｸ縺肴婿・亥倶ｺｺ繝ｻ螟ｫ蟀ｦ繝ｻ螳ｶ譌上・閨ｷ蝣ｴ・峨ｒ譛遏ｭ縺ｧ逅・ｧ｣縺吶ｋ
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                谺｡縺ｫ霑ｷ縺・・縺・strong>縲瑚ｪｰ縺ｮ蜷榊燕繧呈嶌縺上°縲・/strong>縺ｧ縺吶・br />
                縺薙％繧りｿｷ縺｣縺溘ｉ<strong>縲悟女縺大叙縺｣縺溷・縺悟・縺九ｊ繧・☆縺・・/strong>繝ｫ繝ｼ繝ｫ縺ｧOK縺ｧ縺吶・
              </p>

              <div className='bg-gray-50 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>蝓ｺ譛ｬ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>蛟倶ｺｺ縺ｪ繧峨ヵ繝ｫ繝阪・繝</li>
                  <li>螟ｫ蟀ｦ縺ｪ繧蛾｣蜷阪〒繧０K</li>
                  <li>螳ｶ譌上・蜷榊ｭ励・縺ｿ縺ｧ繧よ・遶九＠繧・☆縺・/li>
                  <li>閨ｷ蝣ｴ縺ｯ莠ｺ謨ｰ縺ｧ譖ｸ縺肴婿繧貞､峨∴繧・/li>
                </ul>
              </div>

              {/* 騾｣蜷肴掠隕玖｡ｨ */}
              <h3 className='text-xl font-bold text-gray-800 mb-4'>騾｣蜷阪・譖ｸ縺肴婿譌ｩ隕玖｡ｨ</h3>
              <div className='overflow-x-auto mb-6'>
                <table className='min-w-max border-collapse bg-white'>
                  <thead>
                    <tr className='bg-pink-100'>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>雍医ｋ莠ｺ</th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>譖ｸ縺肴婿縺ｮ逶ｮ螳・/th>
                      <th className='border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800'>螟ｱ謨励＠縺ｫ縺上＞繧ｳ繝・/th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>螟ｫ蟀ｦ</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>螟ｫ縺ｮ繝輔Ν繝阪・繝・句ｦｻ縺ｮ蜷榊燕・医∪縺溘・螟ｫ蟀ｦ騾｣蜷搾ｼ・/td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>蜿励￠蜿悶ｋ蛛ｴ縺瑚ｪｰ縺句・縺九ｋ蠖｢縺ｫ</td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>螳ｶ譌・/td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>縲悟錐蟄励・縺ｿ縲阪∪縺溘・莉｣陦ｨ閠・錐</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>霑ｷ縺｣縺溘ｉ蜷榊ｭ励・縺ｿ縺檎┌髮｣</td>
                    </tr>
                    <tr>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>蜿倶ｺｺ2縲・莠ｺ</td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>蜿ｳ縺九ｉ鬆・↓騾｣蜷・/td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>蜿ｳ蛛ｴ縺檎岼荳翫↓縺ｪ繧翫ｄ縺吶＞諢剰ｭ・/td>
                    </tr>
                    <tr className='bg-gray-50'>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700 font-semibold'>4莠ｺ莉･荳・/td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>莉｣陦ｨ閠・錐・九悟､紋ｸ蜷後・/td>
                      <td className='border border-gray-300 px-4 py-3 text-sm text-gray-700'>蛻･邏吶↓蜈ｨ蜩｡縺ｮ蜷榊燕繧呈嶌縺・/td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3 text-sm'>陬懆ｶｳ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>蜷榊燕縺碁聞縺上※蜈･繧翫″繧峨↑縺・ｴ蜷医・縲∫┌逅・↓隧ｰ繧√★蛻･邏吶ｒ豢ｻ逕ｨ縺吶ｋ</li>
                  <li>逶ｮ荳翫・莠ｺ縺梧ｷｷ縺悶ｋ蝣ｴ蜷医・荳ｦ縺ｳ鬆・↓驟肴・縺吶ｋ</li>
                </ul>
              </div>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ6: 縺ｮ縺励・荳九・隱ｰ縺ｮ蜷榊燕 */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                統 縺ｮ縺励・荳九↓譖ｸ縺上・縺ｯ隱ｰ縺ｮ蜷榊燕・溘瑚ｴ医ｊ荳ｻ縲阪ｒ豁｣縺励￥莨昴∴繧・
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                縺ｮ縺励・荳区ｮｵ縺ｯ<strong>縲瑚ｴ医ｊ荳ｻ縲・/strong>縺ｧ縺吶・br />
                縺薙％縺梧尠譏ｧ縺縺ｨ縲∝女縺大叙縺｣縺溷・縺悟・逾昴＞縺ｮ謇矩・縺ｧ蝗ｰ繧九％縺ｨ縺後≠繧翫∪縺吶・
              </p>

              <div className='bg-pink-50 border-l-4 border-pink-400 p-6 rounded'>
                <h3 className='font-semibold text-gray-800 mb-3'>螟ｱ謨励＠縺ｫ縺上＞閠・∴譁ｹ</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>蜀・･昴＞縺ｮ螳帛錐縺ｫ縺ｪ繧九→閠・∴繧・/li>
                  <li>逶ｸ謇九′髢馴＆縺医★縺ｫ蛻・°繧玖｡ｨ險倥↓縺吶ｋ</li>
                  <li>霑ｷ縺｣縺溘ｉ繝輔Ν繝阪・繝縺ｫ蟇・○繧・/li>
                </ul>
              </div>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ7: 驛ｵ騾√☆繧句ｴ蜷・*/}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                動 邨仙ｩ夂･昴＞繧帝Ψ騾√☆繧句ｴ蜷医・繝槭リ繝ｼ・亥ｿ吶＠縺・ｺｺ蜷代￠謇矩・ｼ・
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                驛ｵ騾√・螟ｱ遉ｼ縺ｧ縺ｯ縺ゅｊ縺ｾ縺帙ｓ縲・br />
                螟ｧ莠九↑縺ｮ縺ｯ<strong>縲悟柏遯√↓螻翫￥縲阪↓縺ｪ繧峨↑縺・ｈ縺・√・縺ｨ縺薙→豌玲戟縺｡繧呈ｷｻ縺医ｋ縺薙→</strong>縺ｧ縺吶・
              </p>

              <div className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-6'>
                <h3 className='font-semibold text-gray-800 mb-3'>謇矩・ｼ郁ｿｷ縺｣縺溘ｉ縺薙・鬆・ｼ・/h3>
                <ol className='list-decimal list-inside text-gray-700 space-y-2 ml-2 text-sm'>
                  <li>莠句燕縺ｫ荳險騾｣邨｡・亥女縺大叙繧後ｋ繧ｿ繧､繝溘Φ繧ｰ繧堤｢ｺ隱阪〒縺阪ｋ縺ｨ逅・Φ・・/li>
                  <li>驟埼√・蜀・・縺励′辟｡髮｣・域ｱ壹ｌ髦ｲ豁｢・・/li>
                  <li>繝｡繝・そ繝ｼ繧ｸ繧ｫ繝ｼ繝峨ｒ遏ｭ縺乗ｷｻ縺医ｋ</li>
                  <li>逶ｸ謇九・蜿励￠蜿悶ｊ雋諡・′蠅励∴繧九ｂ縺ｮ縺ｯ驕ｿ縺代ｋ・亥､ｧ縺阪☆縺弱ｋ縲∬ｦ∝・阡ｵ縺ｪ縺ｩ・・/li>
                </ol>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-5'>
                <h3 className='font-semibold text-gray-800 mb-3'>遏ｭ縺・ｷｻ縺域枚縺ｮ萓・/h3>
                <div className='space-y-3'>
                  <div className='bg-gray-50 p-3 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>縲後＃邨仙ｩ壹♀繧√〒縺ｨ縺・＃縺悶＞縺ｾ縺吶ゅ＆縺輔ｄ縺九〒縺吶′縺顔･昴＞縺ｮ豌玲戟縺｡縺ｧ縺吶ゅ・/p>
                  </div>
                  <div className='bg-gray-50 p-3 rounded border-l-4 border-pink-400'>
                    <p className='text-gray-700 text-sm'>縲後♀莠御ｺｺ縺ｮ譁ｰ逕滓ｴｻ縺檎ｴ謨ｵ縺ｪ豈取律縺ｫ縺ｪ繧翫∪縺吶ｈ縺・↓縲ゅ・/p>
                  </div>
                </div>
              </div>
            </section>

            {/* 繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ8: 霑ｷ縺｣縺溘→縺阪・譛邨りｧ｣ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                笨ｨ 霑ｷ縺｣縺溘→縺阪・譛邨りｧ｣
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                縺薙％縺ｾ縺ｧ霑ｷ縺｣縺ｦ繧ゅ∫ｵ占ｫ悶・繧ｷ繝ｳ繝励Ν縺ｧ縺吶・
              </p>

              <div className='bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg border-2 border-pink-300'>
                <ul className='text-gray-700 space-y-3 text-sm'>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>笨・/span>
                    <span>縺ｮ縺苓｢九ｄ縺ｮ縺礼ｴ吶・<strong>縲檎ｵ仙ｩ夂･昴＞逕ｨ縲阪ｒ驕ｸ縺ｶ</strong></span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>笨・/span>
                    <span>陦ｨ譖ｸ縺阪・<strong>縲悟ｾ｡逾昴・/strong></span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>笨・/span>
                    <span>豌ｴ蠑輔・<strong>縲檎ｵ舌・蛻・ｊ縲・/strong></span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-pink-600 font-bold mr-2 text-lg'>笨・/span>
                    <span>蜷榊燕縺ｯ<strong>縲檎嶌謇九′蛻・°繧句ｽ｢縲・/strong>縺ｧ</span>
                  </li>
                </ul>
              </div>

              <p className='text-gray-700 mt-6 leading-relaxed'>
                繧ｮ繝輔ヨ驕ｸ縺ｳ縺ｫ謌ｻ繧翫◆縺・ｺｺ縺ｯ縲√き繝・ざ繝ｪ縺九ｉ謗｢縺吶・縺梧怙遏ｭ縺ｧ縺吶・
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

            {/* 髢｢騾｣險倅ｺ・*/}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500'>
                迫 髢｢騾｣險倅ｺ・
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                蜷梧｣ｲ繧ｫ繝・・繝ｫ蜷代￠縺ｪ縺ｩ縲∝挨蛻・ｊ蜿｣縺ｮ邨仙ｩ夂･昴＞險倅ｺ九′縺ゅｋ蝣ｴ蜷医・蟆守ｷ壹ｒ蜈･繧後※縺上□縺輔＞縲・
              </p>
              <div className='bg-pink-50 border-l-4 border-pink-400 p-5 rounded'>
                <p className='text-gray-700 text-sm'>
                  {/* TODO: 譌｢蟄倥・邨仙ｩ夂･昴＞險倅ｺ九∈縺ｮ繝ｪ繝ｳ繧ｯ繧定ｿｽ蜉 */}
                  {/* 萓・ <Link href='/wedding_celebration/cohabiting-couple-wedding-gift'>蜷梧｣ｲ繧ｫ繝・・繝ｫ縺ｸ縺ｮ邨仙ｩ夂･昴＞</Link> */}
                  髢｢騾｣險倅ｺ九・貅門ｙ荳ｭ縺ｧ縺・
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-pink-500'>
                笶・繧医￥縺ゅｋ雉ｪ蝠擾ｼ・AQ・・
              </h2>

              <div className='space-y-6'>
                {/* Q1 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 邨仙ｩ夂･昴＞縺ｮ陦ｨ譖ｸ縺阪・縲悟ｾ｡逾昴阪→縲悟ｯｿ縲阪←縺｣縺｡縺檎┌髮｣・・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    霑ｷ縺｣縺溘ｉ縲悟ｾ｡逾昴阪′荳・・縺ｧ縺吶ゅｈ繧顔ｵ仙ｩ夂･昴＞繧峨＠縺輔ｒ蜃ｺ縺励◆縺・ｴ蜷医・縲悟ｯｿ縲阪ｂ菴ｿ縺・ｄ縺吶＞縺ｧ縺吶・
                  </p>
                </div>

                {/* Q2 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 邨仙ｩ夂･昴＞縺ｮ豌ｴ蠑輔・陜ｶ邨舌・縺ｧ繧ゅ＞縺・ｼ・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    荳闊ｬ逧・↓縺ｯ邨仙ｩ夂･昴＞縺ｯ縲檎ｵ舌・蛻・ｊ縲咲ｳｻ縺檎┌髮｣縺ｧ縺吶りｿｷ縺｣縺溘ｉ邨仙ｩ夂･昴＞逕ｨ繧帝∈縺ｶ縺ｨ螳牙ｿ・〒縺吶・
                  </p>
                </div>

                {/* Q3 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 蜀・・縺励→螟悶・縺励・・騾√↑繧峨←縺｣縺｡・・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    驟埼√↑繧牙・縺ｮ縺励′辟｡髮｣縺ｧ縺吶よｱ壹ｌ縺ｫ縺上￥縲∽ｸ∝ｯｧ縺ｫ隕九○繧・☆縺・〒縺吶・
                  </p>
                </div>

                {/* Q4 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 螟ｫ蟀ｦ騾｣蜷阪〒蜷榊燕繧呈嶌縺上→縺阪・譖ｸ縺肴婿縺ｯ・・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    蜿励￠蜿悶ｋ蛛ｴ縺悟・縺九ｊ繧・☆縺・ｽ｢縺梧ｭ｣隗｣縺ｧ縺吶りｿｷ縺｣縺溘ｉ螟ｫ縺ｮ繝輔Ν繝阪・繝・句ｦｻ縺ｮ蜷榊燕縺ｫ蟇・○繧九→謨ｴ縺・ｄ縺吶＞縺ｧ縺吶・
                  </p>
                </div>

                {/* Q5 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 蜿倶ｺｺ4莠ｺ莉･荳翫〒雍医ｋ蝣ｴ蜷医・縺ｮ縺励・縺ｩ縺・☆繧具ｼ・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    莉｣陦ｨ閠・錐・九悟､紋ｸ蜷後阪↓縺励※縲∝挨邏吶↓蜈ｨ蜩｡縺ｮ蜷榊燕繧呈嶌縺上→蛻・°繧翫ｄ縺吶＞縺ｧ縺吶・
                  </p>
                </div>

                {/* Q6 */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>Q. 驛ｵ騾√〒邨仙ｩ夂･昴＞繧定ｴ医ｋ縺ｮ縺ｯ螟ｱ遉ｼ・・/h3>
                  <p className='text-gray-700 leading-relaxed'>
                    螟ｱ遉ｼ縺ｧ縺ｯ縺ゅｊ縺ｾ縺帙ｓ縲ゆｺ句燕縺ｫ荳險騾｣邨｡縺励∝・縺ｮ縺励→遏ｭ縺・Γ繝・そ繝ｼ繧ｸ繧呈ｷｻ縺医ｋ縺ｨ荳∝ｯｧ縺ｧ縺吶・
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
