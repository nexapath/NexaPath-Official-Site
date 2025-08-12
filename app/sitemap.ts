import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.nexapath.com';
  const paths = [
    '/', '/about/', '/contact/', '/services/','/services/business-matching/','/services/supply-chain-consulting/','/services/brand-growth/',
    '/industries/','/industries/beauty/','/industries/food/','/case-studies/','/case-studies/sample-success/',
    '/insights/','/insights/how-to-enter-us-market/','/locations/','/locations/los-angeles/','/locations/taipei/',
    '/zh-Hant/','/zh-Hant/about/','/zh-Hant/contact/','/zh-Hant/services/','/zh-Hant/services/business-matching/','/zh-Hant/services/supply-chain-consulting/','/zh-Hant/services/brand-growth/',
    '/zh-Hant/industries/','/zh-Hant/industries/beauty/','/zh-Hant/industries/food/','/zh-Hant/case-studies/','/zh-Hant/case-studies/sample-success/',
    '/zh-Hant/insights/','/zh-Hant/insights/how-to-enter-us-market/','/zh-Hant/locations/','/zh-Hant/locations/los-angeles/','/zh-Hant/locations/taipei/'
  ];
  return paths.map(p => ({ url: base + p, lastModified: new Date() }));
}
