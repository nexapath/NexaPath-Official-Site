import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Home({ lang }){
  const t = (zh, en) => (lang==='zh'? zh : en)
  return (
    <section id="home" className="bg-white">
      <Helmet>
        <title>{t('NexaPath — 商務資源媒合與整合','NexaPath — Business Resource Matching')}</title>
        <meta name="description" content={t('聚焦電商、製造供應鏈、食品等產業，跨境落地與品牌成長。','Matching brands and suppliers across NA & APAC.')} />
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <img src="/hero.jpg" alt="Los Angeles skyline with San Gabriel Mountains" className="w-full rounded-3xl shadow-sm ring-1 ring-slate-200" loading="eager" fetchpriority="high" />
      </div>
    </section>
  )
}
