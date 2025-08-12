import React, { useEffect } from 'react'
export default function Industries({ lang }){
  const t=(zh,en)=>(lang==='zh'?zh:en)
  useEffect(()=>{ document.title=t('聚焦產業｜NexaPath','Industries | NexaPath') },[lang])
  return (<><section id="industries" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold">{t('聚焦產業','Industries We Serve')}</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['電商與 D2C','製造與供應鏈','食品類'].map((z,i)=> (
              <div key={i} className="rounded-3xl p-6 border border-slate-200 bg-indigo-50/40">
                <div className="font-semibold text-slate-800">{t(z,['E‑commerce & D2C','Manufacturing & Supply','Food Industry'][i])}</div>
                <div className="text-slate-500 text-sm mt-1">
                  {t(
                    ['提供跨境與本地市場的整合電商解決方案','串接雙區供應鏈，優化成本與交期','協助食品品牌快速進入海外市場並確保合規'][i],
                    ['Integrated e‑commerce solutions for cross‑border and local markets','Connecting dual‑region supply chains to optimize cost and lead time','Helping food brands expand globally with compliance ensured'][i]
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></>)
}
