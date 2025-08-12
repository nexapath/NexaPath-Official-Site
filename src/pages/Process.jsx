import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Process({ lang }){
  const t=(zh,en)=>(lang==='zh'?zh:en)
  return (
    <section className="py-16">
      <Helmet><title>{t('合作流程｜NexaPath','Process | NexaPath')}</title></Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold">{t('合作流程','Process')}</h1>
        <ol className="mt-6 space-y-3 list-decimal list-inside text-slate-700">
          <li>{t('需求訪談','Discovery call')}</li>
          <li>{t('方案提案','Proposal')}</li>
          <li>{t('啟動與執行','Kickoff & execution')}</li>
          <li>{t('驗收與迭代','Review & iterate')}</li>
        </ol>
      </div>
    </section>
  )
}
