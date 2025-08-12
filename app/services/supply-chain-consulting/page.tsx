import Breadcrumbs from 'components/Breadcrumbs';

export const metadata = { title: 'Supply Chain Consulting | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Supply Chain Consulting</h1>
    <div className="prose max-w-none mt-4"><p>From CBP to 3PL, we design scalable cross-border supply chains.</p></div>
  </section>;
}
