import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = { title: 'Services | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Our Services</h1>
    <div className="prose max-w-none mt-4"><ul className="grid md:grid-cols-3 gap-6 mt-6"><li className="card"><a href="/services/business-matching/" className="font-semibold">Business Matching</a><p className="text-gray-600 mt-2">Match channels and partners to accelerate deals.</p></li><li className="card"><a href="/services/supply-chain-consulting/" className="font-semibold">Supply Chain Consulting</a><p className="text-gray-600 mt-2">Compliance, customs, 3PL and fulfillment.</p></li><li className="card"><a href="/services/brand-growth/" className="font-semibold">Brand Growth</a><p className="text-gray-600 mt-2">Growth experiments & CRO.</p></li></ul></div>
  </section>;
}
