'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs(){
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0] === 'zh-Hant' ? 'zh-Hant' : 'en';
  const parts = locale==='zh-Hant' ? segments.slice(1) : segments;
  let path = locale==='zh-Hant' ? '/zh-Hant' : '';

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href={path + '/'}>Home</Link></li>
        {parts.map((s, i)=>{
          path += '/' + s;
          return <li key={i} className="flex items-center gap-2">
            <span>/</span>
            {i === parts.length-1 ? <span>{decodeURIComponent(s)}</span> : <Link href={path + '/'}>{decodeURIComponent(s)}</Link>}
          </li>
        })}
      </ol>
    </nav>
  );
}
