'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);
  const locale = parts[0] === 'zh-Hant' ? 'zh-Hant' : 'en';
  const base = locale === 'zh-Hant' ? '/zh-Hant' : '';

  return (
    <header className="bg-white/90 backdrop-blur border-b">
      <div className="container py-4 flex items-center justify-between">
        <Link href={`${base}/`} className="flex items-center gap-2 font-semibold text-xl">
          <img src={`${base}/logo-nexapath.png`} alt="NexaPath logo" className="h-8 w-auto" />
          NexaPath
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href={`${base}/services/`}>Services</Link>
          <Link href={`${base}/industries/`}>Industries</Link>
          <Link href={`${base}/case-studies/`}>Case Studies</Link>
          <Link href={`${base}/insights/`}>Insights</Link>
          <Link href={`${base}/about/`}>About</Link>
          <Link href={`${base}/contact/`}>Contact</Link>
        </nav>
        <div className="flex items-center gap-2 text-sm">
          <Link href={locale==='en' ? '/zh-Hant/' : '/'} className="px-3 py-1.5 rounded-xl border">
            {locale==='en' ? '繁中' : 'EN'}
          </Link>
        </div>
      </div>
    </header>
  );
}
