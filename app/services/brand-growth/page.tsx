import Breadcrumbs from 'components/Breadcrumbs';

export const metadata = { title: 'Brand Growth | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Brand Growth</h1>
    <div className="prose max-w-none mt-4"><p>Experiment-led growth with content, KOLs, paid and CRO.</p></div>
  </section>;
}
