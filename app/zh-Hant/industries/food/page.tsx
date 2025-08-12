import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = { title: '食品產業方案｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">食品產業方案</h1>
    <div className="prose max-w-none mt-4"><p>USDA/FDA、報關與零售拓展。</p></div>
  </section>;
}
