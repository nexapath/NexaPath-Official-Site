import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = { title: '首頁｜NexaPath' };
export default function Page(){
  return <section className="py-12">
    <Breadcrumbs />
    <h1 className="text-3xl font-bold mt-4">跨境商務媒合與品牌成長</h1>
    <div className="prose max-w-none mt-4"><p>我們連結亞太品牌與北美市場，提供通路、夥伴與成長策略。</p></div>
  </section>;
}
