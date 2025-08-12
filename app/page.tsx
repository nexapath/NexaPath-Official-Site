import Breadcrumbs from 'components/Breadcrumbs';

export const metadata = { title: 'Home | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Cross-border Business Matching & Brand Growth</h1>
    <div className="prose max-w-none mt-4"><p>We connect APAC brands to North America with partners, channels and growth strategies.</p></div>
  </section>;
}
