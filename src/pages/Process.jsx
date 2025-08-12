import React, { useEffect } from 'react'
export default function Process({ lang }){
  const t=(zh,en)=>(lang==='zh'?zh:en)
  useEffect(()=>{ document.title=t('合作流程｜NexaPath','Process | NexaPath') },[lang])
  return (<><section id="process" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold">{t('合作流程','How We Work')}</h2>
          <ol className="mt-8 grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {title: t('需求諮詢','Consultation'), desc: t('瞭解您的業務需求與目標市場。','Understand your goals and target markets.')},
              {title: t('方案規劃','Proposal'), desc: t('提交量身訂做的合作方案與時程。','Present a tailored proposal and timeline.')},
              {title: t('簽約合作','Agreement'), desc: t('確立合作條件、交付範圍與里程碑。','Confirm scope, terms, and milestones.')},
              {title: t('執行與追蹤','Execution & Tracking'), desc: t('推進專案並定期同步進度。','Execute and sync progress regularly.')},
              {title: t('成果交付','Delivery'), desc: t('按時交付成果並完成驗收。','Deliver outcomes on schedule and sign‑off.')},
              {title: t('後續支持','Ongoing Support'), desc: t('提供長期支持與優化建議。','Provide ongoing support and optimization.')},
            ].map((s,i)=> (
              <li key={i} className="rounded-3xl bg-white border border-slate-200 p-6">
                <div className="w-9 h-9 rounded-full grid place-items-center text-white" style={{backgroundColor: brandPrimary}}>{i+1}</div>
                <div className="font-semibold mt-3">{s.title}</div>
                <div className="text-sm text-slate-600 mt-1">{s.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </section></>)
}
