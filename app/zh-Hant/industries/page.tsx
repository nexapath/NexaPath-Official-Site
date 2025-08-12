import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = { title: '服務產業｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">服務產業</h1>
    <div className="prose max-w-none mt-4"><ul className="list-disc pl-6 mt-4"><li><a href="/zh-Hant/industries/beauty/">美妝</a></li><li><a href="/zh-Hant/industries/food/">食品</a></li></ul></div>
  </section>;
}
