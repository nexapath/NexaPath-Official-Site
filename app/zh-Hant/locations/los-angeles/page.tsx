import Breadcrumbs from 'components/Breadcrumbs';

export const metadata = { title: '洛杉磯據點｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">洛杉磯據點</h1>
    <div className="prose max-w-none mt-4"><p>北美總部，串接通路與供應鏈資源。</p></div>
  </section>;
}
