import Breadcrumbs from 'components/Breadcrumbs';

export const metadata = { title: '供應鏈顧問｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">供應鏈顧問</h1>
    <div className="prose max-w-none mt-4"><p>從 CBP 到 3PL，建立可擴充的跨境供應鏈。</p></div>
  </section>;
}
