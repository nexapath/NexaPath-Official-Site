import Breadcrumbs from '../../../../components/Breadcrumbs';

export const metadata = { title: '品牌成長｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">品牌成長</h1>
    <div className="prose max-w-none mt-4"><p>以數據驅動的行銷與轉化優化，打造長期成長。</p></div>
  </section>;
}
