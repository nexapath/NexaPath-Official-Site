import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = { title: '美妝產業方案｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">美妝產業方案</h1>
    <div className="prose max-w-none mt-4"><p>美妝法規、渠道與聯名合作策略。</p></div>
  </section>;
}
