import Breadcrumbs from 'components/Breadcrumbs';

export const metadata = { title: 'Industries | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Industries we serve</h1>
    <div className="prose max-w-none mt-4"><ul className="list-disc pl-6 mt-4"><li><a href="/industries/beauty/">Beauty</a></li><li><a href="/industries/food/">Food</a></li></ul></div>
  </section>;
}
