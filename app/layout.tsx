import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'NexaPath | Cross-border business matching & brand growth',
  description: 'NexaPath provides business matching, supply chain consulting, and brand growth services for Asia brands entering North America.',
  metadataBase: new URL('https://www.nexapath.com'),
  openGraph: { images: ['/og-image.png'] }
};

export default function RootLayout({children}:{children: React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
