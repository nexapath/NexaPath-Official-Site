import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = { title: 'Case: Sample Brand | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Sample Brand case</h1>
    <div className="prose max-w-none mt-4"><p>Combined matching + supply chain achieved 50 retailers in 3 months.</p></div>
  </section>;
}
