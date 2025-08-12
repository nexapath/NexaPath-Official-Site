import Breadcrumbs from '../../../components/Breadcrumbs';

export const metadata = { title: 'Food Industry | NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">Food industry solutions</h1>
    <div className="prose max-w-none mt-4"><p>USDA/FDA, customs and retail expansion for food brands.</p></div>
  </section>;
}
