import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = { title: 'Case Studies | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Case Studies</h1>
    <div className="prose max-w-none mt-4"><ul className="list-disc pl-6 mt-4"><li><a href="/case-studies/sample-success/">Sample Brand: 50 retailers in 90 days</a></li></ul></div>
  </section>;
}
