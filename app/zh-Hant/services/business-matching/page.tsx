import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = { title: '商務媒合｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">商務媒合</h1>
    <div className="prose max-w-none mt-4"><p>透過資料與網絡，為品牌配對買家、通路與在地夥伴。</p></div>
  </section>;
}
