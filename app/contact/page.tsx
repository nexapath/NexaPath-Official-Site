    import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/ContactForm';

    export const metadata = { title: 'Contact | NexaPath' };
    export default function Page(){
      return <section className="py-12">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mt-4">Contact us</h1>
        <div className="prose max-w-none mt-4"><p>Leave your info and we will reply within 1 business day.</p></div>
        <ContactForm locale="en" />
      </section>;
    }
