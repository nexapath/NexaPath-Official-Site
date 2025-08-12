import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = { title: 'Insights | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Insights</h1>
    <div className="prose max-w-none mt-4"><ul className="list-disc pl-6 mt-4"><li><a href="/insights/how-to-enter-us-market/">How to enter the US market</a></li></ul></div>
  </section>;
}
