import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = { title: '關於我們｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">關於我們</h1>
    <div className="prose max-w-none mt-4"><p>NexaPath 立足洛杉磯，專注商務媒合、供應鏈與品牌成長。</p></div>
  </section>;
}
