import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Industries from './pages/Industries.jsx'
import Process from './pages/Process.jsx'
import Why from './pages/Why.jsx'
import Contact from './pages/Contact.jsx'

const brand = 'NexaPath'
const brandPrimary = '#0A2A5E'

function useLang() {
  const detect = () => (typeof navigator !== 'undefined' && (navigator.language || 'en')).toLowerCase().startsWith('zh') ? 'zh' : 'en'
  const [lang, setLang] = useState(localStorage.getItem('nexa_lang') || detect())
  useEffect(()=>{ localStorage.setItem('nexa_lang', lang) }, [lang])
  return [lang, setLang]
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({top:0, behavior:'instant'}) }, [pathname])
  return null
}

function Layout({ lang, setLang, children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <link rel="canonical" href={`https://www.nexapath.us${window.location.pathname}`} />
      </Helmet>
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200" style={{paddingTop:'env(safe-area-inset-top)'}}>
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="inline-flex items-center gap-2">
              <img src="/logo-nexapath.png" alt="NexaPath Logo" className="h-9 w-auto" />
              <span className="font-black text-xl tracking-tight" style={{color: brandPrimary}}>{brand}</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm">
            <NavLink to="/services" className={({isActive})=> isActive? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'}>{lang==='zh'?'服務內容':'Services'}</NavLink>
            <NavLink to="/industries" className={({isActive})=> isActive? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'}>{lang==='zh'?'聚焦產業':'Industries'}</NavLink>
            <NavLink to="/process" className={({isActive})=> isActive? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'}>{lang==='zh'?'合作流程':'Process'}</NavLink>
            <NavLink to="/why" className={({isActive})=> isActive? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'}>{lang==='zh'?'為何選擇我們':'Why NexaPath'}</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'}>{lang==='zh'?'聯絡我們':'Contact'}</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={()=>setLang('en')} className={`px-2 py-1 rounded ${lang==='en'?'bg-slate-900 text-white':'text-slate-600 hover:bg-slate-100'}`}>EN</button>
            <button onClick={()=>setLang('zh')} className={`px-2 py-1 rounded ${lang==='zh'?'bg-slate-900 text-white':'text-slate-600 hover:bg-slate-100'}`}>繁中</button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-16 py-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-500">
          © {new Date().getFullYear()} NexaPath. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useLang()
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout lang={lang} setLang={setLang}><Home lang={lang} /></Layout>} />
        <Route path="/services" element={<Layout lang={lang} setLang={setLang}><Services lang={lang} /></Layout>} />
        <Route path="/industries" element={<Layout lang={lang} setLang={setLang}><Industries lang={lang} /></Layout>} />
        <Route path="/process" element={<Layout lang={lang} setLang={setLang}><Process lang={lang} /></Layout>} />
        <Route path="/why" element={<Layout lang={lang} setLang={setLang}><Why lang={lang} /></Layout>} />
        <Route path="/contact" element={<Layout lang={lang} setLang={setLang}><Contact lang={lang} /></Layout>} />
        <Route path="*" element={<Layout lang={lang} setLang={setLang}><Home lang={lang} /></Layout>} />
      </Routes>
    </>
  )
}
