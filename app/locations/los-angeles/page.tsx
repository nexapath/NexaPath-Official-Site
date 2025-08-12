import Breadcrumbs from 'components/Breadcrumbs';

export const metadata = { title: 'Los Angeles | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Los Angeles office</h1>
    <div className="prose max-w-none mt-4"><p>Our North America HQ connects channels and supply chains.</p></div>
  </section>;
}
