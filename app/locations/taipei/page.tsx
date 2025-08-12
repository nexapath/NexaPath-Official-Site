import Breadcrumbs from 'components/Breadcrumbs';

export const metadata = { title: 'Taipei | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Taipei office</h1>
    <div className="prose max-w-none mt-4"><p>APAC supply chain linkage to North America.</p></div>
  </section>;
}
