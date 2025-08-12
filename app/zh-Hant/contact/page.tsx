    import Breadcrumbs from 'components/Breadcrumbs';
import ContactForm from 'components/ContactForm';

    export const metadata = { title: '聯絡我們｜NexaPath' };
    export default function Page(){
      return <section className="py-12">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mt-4">聯絡我們</h1>
        <div className="prose max-w-none mt-4"><p>留下資訊，我們將於一個工作日內回覆。</p></div>
        <ContactForm locale="zh-Hant" />
      </section>;
    }
