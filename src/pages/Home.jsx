import React, { useEffect } from 'react'
export default function Home({ lang }){
  const t=(zh,en)=>(lang==='zh'?zh:en)
  useEffect(()=>{ document.title=t('NexaPath — 商務資源媒合與整合','NexaPath — Business Resource Matching') },[lang])
  return (<><section id="home" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          <img src="/hero.jpg" alt="Los Angeles skyline with San Gabriel Mountains" className="w-full rounded-3xl shadow-sm ring-1 ring-slate-200" loading="eager" fetchpriority="high" />
        </div>
      </section></>)
}
