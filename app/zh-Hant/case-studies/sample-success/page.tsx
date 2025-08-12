import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = { title: '案例：Sample Brand｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">案例：Sample Brand</h1>
    <div className="prose max-w-none mt-4"><p>商務媒合 + 供應鏈整合，3 個月導入 50 家零售通路。</p></div>
  </section>;
}
