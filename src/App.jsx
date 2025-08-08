import React, { useState, useEffect } from 'react'

export default function App() {
  const detect = () => (typeof navigator !== 'undefined' && navigator.language || 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en'
  const [lang, setLang] = useState(localStorage.getItem('nexa_lang') || detect())
  useEffect(()=>{ localStorage.setItem('nexa_lang', lang) }, [lang])
  const t = (zh, en) => (lang==='zh'? zh : en)
  const brand = 'NexaPath'
  const brandPrimary = '#0A2A5E'

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="inline-flex items-center gap-2">
              <img src="/logo-nexapath.png" alt="NexaPath Logo" className="h-9 w-auto" />
              <span className="font-black text-xl tracking-tight" style={{color: brandPrimary}}>{brand}</span>
            </span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-indigo-700">{t('服務','Services')}</a>
            <a href="#industries" className="hover:text-indigo-700">{t('產業','Industries')}</a>
            <a href="#process" className="hover:text-indigo-700">{t('合作流程','Process')}</a>
            <a href="#why" className="hover:text-indigo-700">{t('為什麼選擇我們','Why Us')}</a>
            <a href="#contact" className="hover:text-indigo-700">{t('聯絡','Contact')}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={()=>setLang(lang==='zh'?'en':'zh')} className="rounded-xl px-3 py-2 border border-slate-300 text-sm hover:bg-slate-50" aria-label="language">
              {lang==='zh'? 'EN':'中'}
            </button>
            <a href="#contact" className="rounded-2xl px-4 py-2 text-white text-sm font-semibold hover:opacity-95" style={{backgroundColor: brandPrimary}}>{t('取得顧問諮詢','Get a Consult')}</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-amber-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              {t('跨境、在地資源整合專家，助你找到最佳夥伴。','We match you with perfect partners — like a business Cupid!')}
            </h1>
            <p className="mt-6 text-slate-700 text-lg">
              {t('專注商務資源尋找與媒合，供應鏈尋源｜渠道拓展｜品牌成長。立足洛杉磯與加州，服務美國與全球。','Based in Los Angeles, California. Sourcing, channel development, and brand growth across North America & APAC.')}
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#services" className="rounded-2xl px-5 py-3 text-white font-semibold hover:opacity-95" style={{backgroundColor: brandPrimary}}>{t('了解服務','Explore Services')}</a>
              <a href="#contact" className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold hover:bg-white/60">{t('取得提案','Request Proposal')}</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
              <img src="https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500" alt="Business collaboration (faceless, cold tone)" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold">{t('我們的服務','Our Services')}</h2>
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
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 bg-white">
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
      </section>

      {/* Why NexaPath */}
      <section id="why" className="py-16 bg-white">
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
      </section>

      {/* Process */}
      <section id="process" className="py-16">
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
      </section>

      {/* CTA band */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between" style={{backgroundColor: '#EEF2FF'}}>
          <div className="text-lg font-semibold text-slate-800">{t('需要快速媒合可靠資源？','Need a trusted match, fast?')}</div>
          <a href="#contact" className="mt-4 md:mt-0 rounded-2xl px-5 py-3 text-white font-semibold" style={{backgroundColor: brandPrimary}}>{t('告訴我們你的需求','Tell Us Your Needs')}</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-8">
            <h2 className="text-2xl font-extrabold">{t('聯絡我們','Contact Us')}</h2>
            <form className="mt-6 grid gap-4" action="mailto:alex.t@nexapath.us" method="POST" encType="text/plain">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder={t('您的名字','Your Name')} required />
                <input name="email" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Email" type="email" required />
              </div>
              <input name="company" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder={t('公司 / 職稱（選填）','Company / Title (optional)')} />
              <textarea name="message" className="w-full rounded-2xl border border-slate-300 px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder={t('簡述你的需求與時程','Brief your needs & timeline')} required />
              <div className="flex items-center gap-3">
                <button type="submit" className="rounded-2xl px-5 py-3 text-white font-semibold w-fit hover:opacity-95" style={{backgroundColor: brandPrimary}}>{t('送出表單','Send')}</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">
        <p>© 2025 NexaPath LLC. {t('版權所有。','All rights reserved.')}</p>
        <p className="mt-1">{t('營運據點：洛杉磯｜遠端團隊','HQ: Los Angeles • Remote team')}</p>
      </footer>
    </main>
  )
}
