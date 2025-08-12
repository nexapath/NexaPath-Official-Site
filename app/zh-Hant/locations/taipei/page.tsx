import Breadcrumbs from '../../../../components/Breadcrumbs';

export const metadata = { title: '台北據點｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">台北據點</h1>
    <div className="prose max-w-none mt-4"><p>連結亞太供應鏈與北美市場。</p></div>
  </section>;
}
