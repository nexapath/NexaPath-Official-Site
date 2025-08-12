import Breadcrumbs from 'components/Breadcrumbs';

export const metadata = { title: 'Beauty Industry | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Beauty industry solutions</h1>
    <div className="prose max-w-none mt-4"><p>Compliance, channels and co-branding strategies for beauty.</p></div>
  </section>;
}
