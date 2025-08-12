import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Services({ lang }){
  const t=(zh,en)=>(lang==='zh'?zh:en)
  return (
    <section className="py-16">
      <Helmet><title>{t('服務內容｜NexaPath','Services | NexaPath')}</title></Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold">{t('服務內容','Services')}</h1>
        <p className="mt-3 text-slate-600">{t('跨境電商、供應鏈整合、品牌在地化與合規。','Cross-border e‑commerce, supply-chain integration, localization & compliance.')}</p>
      </div>
    </section>
  )
}
