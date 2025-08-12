import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = { title: 'Locations | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Locations</h1>
    <div className="prose max-w-none mt-4"><ul className="list-disc pl-6 mt-4"><li><a href="/locations/los-angeles/">Los Angeles</a></li><li><a href="/locations/taipei/">Taipei</a></li></ul></div>
  </section>;
}
