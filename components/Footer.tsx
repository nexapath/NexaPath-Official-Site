import Link from 'next/link';
export default function Footer(){
  return (
    <footer className="mt-20 border-t">
      <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold text-lg">NexaPath</div>
          <p className="text-gray-600 mt-2">Cross-border business matching & brand growth advisory.</p>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-2">
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/case-studies/">Case Studies</Link></li>
            <li><Link href="/insights/">Insights</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-2 space-y-2">
            <li><Link href="/services/business-matching/">Business Matching</Link></li>
            <li><Link href="/services/supply-chain-consulting/">Supply Chain</Link></li>
            <li><Link href="/services/brand-growth/">Brand Growth</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Locations</div>
          <ul className="mt-2 space-y-2">
            <li><Link href="/locations/los-angeles/">Los Angeles</Link></li>
            <li><Link href="/locations/taipei/">Taipei</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} NexaPath. All rights reserved.</div>
    </footer>
  )
}
