import Breadcrumbs from '../../../components/Breadcrumbs';

export const metadata = { title: '成功案例｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">成功案例</h1>
    <div className="prose max-w-none mt-4"><ul className="list-disc pl-6 mt-4"><li><a href="/zh-Hant/case-studies/sample-success/">Sample Brand：90 天進 50 家通路</a></li></ul></div>
  </section>;
}
