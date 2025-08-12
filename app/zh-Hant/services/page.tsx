import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = { title: '服務項目｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">服務項目</h1>
    <div className="prose max-w-none mt-4"><ul className="grid md:grid-cols-3 gap-6 mt-6"><li className="card"><a href="/zh-Hant/services/business-matching/" className="font-semibold">商務媒合</a><p className="text-gray-600 mt-2">配對通路與夥伴，加速成交。</p></li><li className="card"><a href="/zh-Hant/services/supply-chain-consulting/" className="font-semibold">供應鏈顧問</a><p className="text-gray-600 mt-2">合規、報關、3PL 與履約。</p></li><li className="card"><a href="/zh-Hant/services/brand-growth/" className="font-semibold">品牌成長</a><p className="text-gray-600 mt-2">成長實驗與轉化率優化。</p></li></ul></div>
  </section>;
}
