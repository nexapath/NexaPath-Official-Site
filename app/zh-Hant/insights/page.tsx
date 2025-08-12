import Breadcrumbs from 'components/Breadcrumbs';

export const metadata = { title: '洞察｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">跨境洞察</h1>
    <div className="prose max-w-none mt-4"><ul className="list-disc pl-6 mt-4"><li><a href="/zh-Hant/insights/how-to-enter-us-market/">如何進入美國市場</a></li></ul></div>
  </section>;
}
