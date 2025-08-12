import React, { useEffect } from 'react'
export default function Why({ lang }){
  const t=(zh,en)=>(lang==='zh'?zh:en)
  useEffect(()=>{ document.title=t('為何選擇我們｜NexaPath','Why NexaPath | NexaPath') },[lang])
  return (<><section id="why" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold">{t('為什麼選擇 NexaPath','Why NexaPath')}</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t('北美＋亞太雙區供應鏈與合作網絡','Network in North America & APAC'), desc: t('橫跨北美與亞太的供應商與合作夥伴網絡，快速媒合合適資源。','Coverage across North America & APAC to match the right partners fast.') },
              { title: t('中英雙語專案管理與溝通','Bilingual project management'), desc: t('全程中英雙語與你及夥伴無縫協作，降低溝通成本。','Seamless collaboration in English and Chinese to reduce friction.') },
              { title: t('跨產業經驗','Cross‑industry experience'), desc: t('涵蓋電商、製造、金融科技與數位內容，理解不同場景需求。','Experience across e‑commerce, manufacturing, fintech, and gaming.') },
              { title: t('市場在地化能力','Localized market entry'), desc: t('提供在地化策略與夥伴，讓落地更順暢。','Localization strategy and partners to land smoothly.') },
              { title: t('靈活的合作模式','Flexible engagement'), desc: t('按需求選擇顧問、專案或長期合作，彈性組合。','Consulting, project‑based, or retainer—choose what fits.') },
              { title: t('品牌在地化策略','Brand localization strategies'), desc: t('依不同市場文化與語言調整品牌定位與溝通訊息。','Adapt brand positioning and messaging to local culture and language.') },
            ].map((u, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold">{u.title}</h3>
                <p className="text-slate-700 text-sm mt-1">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section></>)
}
