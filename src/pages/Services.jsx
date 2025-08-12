import React, { useEffect } from 'react'
export default function Services({ lang }){
  const t=(zh,en)=>(lang==='zh'?zh:en)
  useEffect(()=>{ document.title=t('服務內容｜NexaPath','Services | NexaPath') },[lang])
  return (<><section id="services" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title:t('供應鏈尋源','Sourcing'),desc:t('製造商／OEM／ODM 尋找，品質稽核與打樣協調','Find manufacturers/OEM/ODM; QA audits & sample coordination'),icon:'🔎'},
              {title:t('渠道與商務開發','Channels & BizDev'),desc:t('分銷代理、合作洽談、上架與在地營運夥伴','Distribution partners, partnerships, listings, local operators'),icon:'🤝'},
              {title:t('品牌與成長','Brand & Growth'),desc:t('官網與內容在地化、SEO、成長行銷','Website & localization, SEO, growth marketing'),icon:'📈'},
            ].map((s,i)=> (
              <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
                <div className="text-3xl" aria-hidden>{s.icon}</div>
                <h3 className="mt-2 font-bold">{s.title}</h3>
                <p className="text-slate-700 mt-1 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section></>)
}
