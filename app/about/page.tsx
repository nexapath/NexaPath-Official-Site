import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = { title: 'About | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">About us</h1>
    <div className="prose max-w-none mt-4"><p>NexaPath focuses on business matching, supply chain, and brand growth from Los Angeles.</p></div>
  </section>;
}
