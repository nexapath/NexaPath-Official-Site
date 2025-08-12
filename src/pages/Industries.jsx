import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Industries({ lang }){
  const t=(zh,en)=>(lang==='zh'?zh:en)
  return (
    <section className="py-16">
      <Helmet><title>{t('聚焦產業｜NexaPath','Industries | NexaPath')}</title></Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold">{t('聚焦產業','Industries We Serve')}</h1>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-700">
          <li className="rounded-3xl p-6 border border-slate-200 bg-indigo-50/40">{t('電商與 D2C','E‑commerce & D2C')}</li>
          <li className="rounded-3xl p-6 border border-slate-200 bg-indigo-50/40">{t('製造與供應鏈','Manufacturing & Supply')}</li>
          <li className="rounded-3xl p-6 border border-slate-200 bg-indigo-50/40">{t('食品類','Food Industry')}</li>
        </ul>
      </div>
    </section>
  )
}
