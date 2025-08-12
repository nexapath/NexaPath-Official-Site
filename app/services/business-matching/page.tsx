import Breadcrumbs from '../../../components/Breadcrumbs';

export const metadata = { title: 'Business Matching | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Business Matching</h1>
    <div className="prose max-w-none mt-4"><p>We connect you with the right buyers, channels and local partners.</p></div>
  </section>;
}
