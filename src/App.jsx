import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Industries from './pages/Industries.jsx'
import Process from './pages/Process.jsx'
import Why from './pages/Why.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const detect = () => (typeof navigator !== 'undefined' && (navigator.language || 'en')).toLowerCase().startsWith('zh') ? 'zh' : 'en'
  const [lang, setLang] = useState(localStorage.getItem('nexa_lang') || detect())
  useEffect(()=>{ localStorage.setItem('nexa_lang', lang) }, [lang])
  const t = (zh, en) => (lang==='zh'? zh : en)

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header (preserved) */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200" style={{paddingTop:'env(safe-area-inset-top)'}}>
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
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/services" element={<Services lang={lang} />} />
        <Route path="/industries" element={<Industries lang={lang} />} />
        <Route path="/process" element={<Process lang={lang} />} />
        <Route path="/why" element={<Why lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
        <Route path="*" element={<Home lang={lang} />} />
      </Routes>
      {/* Footer (preserved) */}
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">
        <p>© 2025 NexaPath LLC. {t('版權所有。','All rights reserved.')}</p>
        <p className="mt-1">{t('營運據點：洛杉磯｜遠端團隊','HQ: Los Angeles • Remote team')}</p>
      </footer>
    </main>
  )
}