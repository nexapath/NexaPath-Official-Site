import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Why({ lang }){
  const t=(zh,en)=>(lang==='zh'?zh:en)
  return (
    <section className="py-16">
      <Helmet><title>{t('為何選擇我們｜NexaPath','Why NexaPath | NexaPath')}</title></Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold">{t('為何選擇我們','Why choose us')}</h1>
        <ul className="mt-4 text-slate-700 list-disc list-inside space-y-2">
          <li>{t('洛杉磯在地網絡，連結北美與亞太','LA‑based network bridging NA & APAC')}</li>
          <li>{t('合規與實務導向','Compliance & execution first')}</li>
          <li>{t('快速媒合、務實交付','Fast matching, pragmatic delivery')}</li>
        </ul>
      </div>
    </section>
  )
}
