import React, { useState } from 'react'

export default function App() {
  const [lang, setLang] = useState('zh')
  const t = (zh, en) => (lang === 'zh' ? zh : en)
  const brand = 'NexaPath'
  const brandPrimary = '#0A2A5E' // NexaPath navy

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
            <a href="#cases" className="hover:text-indigo-700">{t('案例','Cases')}</a>
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
              {t('商務資源，一條路走到位','Business Matches, The Right Path')}<br/>
              <span className="text-slate-600">{t('NexaPath 專注於跨境與本地的商務資源尋找與媒合','NexaPath specializes in sourcing and matching business resources across borders and locally')}</span>
            </h1>
            <p className="mt-6 text-slate-700 text-lg">
              {t(
                '從供應鏈、渠道、支付到法規顧問，提供端到端的資源整合。此段為替代文字，待提供正式文案後替換。',
                'End-to-end resource orchestration: supply chain, channels, payments, and regulatory advisory. Placeholder copy to be replaced with your final messaging.'
              )}
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#services" className="rounded-2xl px-5 py-3 text-white font-semibold hover:opacity-95" style={{backgroundColor: brandPrimary}}>{t('了解服務','Explore Services')}</a>
              <a href="#contact" className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold hover:bg-white/60">{t('取得提案','Request Proposal')}</a>
            </div>
            <div className="mt-6 text-sm text-slate-600">
              {t('服務地區：北美｜台港澳｜東南亞（可擴充）','Service regions: North America · Hong Kong/Taiwan · SE Asia (extendable)')}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-6 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto w-24 h-24 rounded-2xl grid place-items-center mb-4 ring-1 ring-slate-200" style={{backgroundColor:'#EEF2FF'}}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12h16M4 6h10M4 18h10" stroke={brandPrimary} strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-xl">{t('資源地圖（示意）','Resource Map (Placeholder)')}</h3>
                <p className="mt-2 text-slate-600">{t('供應商／渠道／顧問一站式整合','One-stop integration of suppliers, channels, advisors')}</p>
              </div>
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
              {title:t('供應鏈尋源','Sourcing'),desc:t('製造商、OEM/ODM、品質稽核（替代）','Manufacturers, OEM/ODM, QA audits (placeholder)'),icon:'🔎'},
              {title:t('渠道與商務開發','Channels & BizDev'),desc:t('分銷代理、跨境上架、合作談判（替代）','Distribution, cross-border listing, partnerships (placeholder)'),icon:'🤝'},
              {title:t('支付與結算方案','Payments & Settlement'),desc:t('線上收單、跨幣結算、風控（替代）','Acquiring, multi-currency settlement, risk controls (placeholder)'),icon:'💳'},
              {title:t('合規與法規顧問','Regulatory & Compliance'),desc:t('公司設立、稅務、行業牌照（替代）','Entity setup, tax, sector licenses (placeholder)'),icon:'⚖️'},
              {title:t('品牌與成長','Brand & Growth'),desc:t('站點搭建、SEO/投放、內容在地化（替代）','Websites, SEO/ads, localization (placeholder)'),icon:'📈'},
              {title:t('專案管理與交付','Project Delivery'),desc:t('進度里程碑、SLA、週報（月報）（替代）','Milestones, SLAs, weekly/monthly reports (placeholder)'),icon:'🧭'},
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
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['電商與D2C','支付金融','遊戲與數位內容','製造與供應鏈'].map((z,i)=> (
              <div key={i} className="rounded-3xl p-6 border border-slate-200 bg-indigo-50/40">
                <div className="font-semibold text-slate-800">{t(z,['E-commerce & D2C','Payments/Fintech','Gaming & Digital','Manufacturing & Supply'][i])}</div>
                <div className="text-slate-500 text-sm mt-1">{t('替代描述文字','Placeholder description')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold">{t('合作流程','How We Work')}</h2>
          <ol className="mt-8 grid md:grid-cols-4 gap-6">
            {[t('需求釐清','Discovery'),t('資源盤點','Scoping'),t('媒合與談判','Matching & Negotiation'),t('落地與優化','Delivery & Optimize')].map((step,i)=> (
              <li key={i} className="rounded-3xl bg-white border border-slate-200 p-6">
                <div className="w-9 h-9 rounded-full grid place-items-center text-white" style={{backgroundColor: brandPrimary}}>{i+1}</div>
                <div className="font-semibold mt-3">{step}</div>
                <div className="text-sm text-slate-600 mt-1">{t('替代流程說明文字','Placeholder step description')}</div>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white font-semibold" style={{backgroundColor: brandPrimary}}>
              <span>📬</span>{t('取得初步諮詢（免費）','Get a Free Consultation')}
            </a>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold">{t('成功案例（示意）','Selected Cases (Placeholder)')}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i=> (
              <article key={i} className="rounded-3xl ring-1 ring-slate-200 overflow-hidden bg-white">
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-amber-100 grid place-items-center">
                  <span className="text-slate-500">{t('案例圖片','Case Image')}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{t('跨境支付接入與對賬優化','Cross-border acquiring & reconciliation')}</h3>
                  <p className="text-slate-600 text-sm mt-1">{t('三個月內完成 3 個支付通道導入，提升授權率 12%（替代）','Integrated 3 PSPs within 3 months; +12% auth rate (placeholder)')}</p>
                </div>
              </article>
            ))}
          </div>
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
            <p className="mt-2 text-slate-600">{t('聯絡信箱：alex.t@nexapath.us（暫以 Email 直接接收表單）','Email: alex.t@nexapath.us (currently receiving form submissions via email)')}</p>
            <form className="mt-6 grid gap-4" action="mailto:alex.t@nexapath.us" method="POST" encType="text/plain">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder={t('您的名字','Your Name')} required />
                <input name="email" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Email" type="email" required />
              </div>
              <input name="company" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder={t('公司 / 職稱（選填）','Company / Title (optional)')} />
              <textarea name="message" className="w-full rounded-2xl border border-slate-300 px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder={t('簡述你的需求與時程（替代）','Brief your needs & timeline (placeholder)')} required />
              <div className="flex items-center gap-3">
                <button type="submit" className="rounded-2xl px-5 py-3 text-white font-semibold w-fit hover:opacity-95" style={{backgroundColor: brandPrimary}}>{t('送出表單','Send')}</button>
                <a href="mailto:alex.t@nexapath.us" className="text-sm text-indigo-700 underline">{t('或直接發信','Or email directly')}</a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} {brand}. {t('版權所有。','All rights reserved.')}</p>
        <p className="mt-1">{t('營運據點：洛杉磯｜遠端團隊（替代）','HQ: Los Angeles • Remote team (placeholder)')}</p>
      </footer>
    </main>
  )
}
