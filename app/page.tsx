// Auto-generated redesigned homepage using B's layout patterns.

'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Lang = 'zh' | 'en'

const useLang = (): [Lang, (l:Lang)=>void] => {
  const detect = () => {
    if (typeof navigator === 'undefined') return 'en'
    const zh = (navigator.language || 'en').toLowerCase().startsWith('zh')
    return zh ? 'zh' : 'en'
  }
  const [lang, setLang] = useState<Lang>((typeof window !== 'undefined' && (localStorage.getItem('nexa_lang') as Lang)) || detect())
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('nexa_lang', lang)
  }, [lang])
  return [lang, setLang]
}

const T = (lang:Lang, zh:string, en:string) => lang === 'zh' ? zh : en
const brand = 'NexaPath'
const brandPrimary = '#0A2A5E'

const images = [
  { src: '/favicon.ico', alt: 'favicon.ico' },
  { src: '/favicon.png', alt: 'favicon.png' },
  { src: '/hero.jpg', alt: 'hero' },
  { src: '/logo-nexapath.png', alt: 'logo' },
  { src: '/og-image.png', alt: 'og-image' },
]

export default function Page() {
  const [lang, setLang] = useLang()

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/logo-nexapath.png" alt="logo" width={32} height={32} />
            <span className="tracking-tight">{brand}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-slate-700">{T(lang,'功能','Features')}</a>
            <a href="#gallery" className="hover:text-slate-700">{T(lang,'圖庫','Gallery')}</a>
            <a href="#contact" className="hover:text-slate-700">{T(lang,'聯絡','Contact')}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang('zh')} className={`px-2 py-1 rounded-md text-xs border ${lang==='zh' ? 'bg-slate-900 text-white' : 'bg-white'}`}>中</button>
            <button onClick={() => setLang('en')} className={`px-2 py-1 rounded-md text-xs border ${lang==='en' ? 'bg-slate-900 text-white' : 'bg-white'}`}>EN</button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl/tight sm:text-5xl/tight font-extrabold tracking-tight" style={{color:brandPrimary}}>{T(lang,'更快把想法帶到市場','Ship ideas to market, faster')}</h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600">
              {T(lang,'以精簡的設計與工程實踐，打造專注、性能優異的網站體驗。','Focused design & engineering for a fast, modern web experience.')}
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:opacity-90">{T(lang,'開始合作','Get Started')}</a>
              <a href="#features" className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50">{T(lang,'瞭解功能','See Features')}</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden ring-1 ring-slate-200">
            <Image src="/hero.jpg" alt="hero" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section id="features" className="py-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">{T(lang,'設計重點','Highlights')}</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {titleZh:'一致的版型', titleEn:'Consistent Layout', descZh:'沿用A網站架構，導入B網站排版，保持導覽一致。', descEn:'Keep A’s structure, bring in B’s layout patterns and navigation.'},
              {titleZh:'Tailwind + Next.js', titleEn:'Tailwind + Next.js', descZh:'採用Tailwind與App Router最佳實踐，維持效能與維護性。', descEn:'App Router + Tailwind best practices for performance and maintainability.'},
              {titleZh:'完整圖像使用', titleEn:'Full Image Usage', descZh:'A /public 資料夾內所有圖片皆納入設計模組中。', descEn:'All images from A/public are showcased and referenced.'},
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl ring-1 ring-slate-200 bg-white">
                <h3 className="font-semibold">{T(lang, f.titleZh, f.titleEn)}</h3>
                <p className="mt-2 text-sm text-slate-600">{T(lang, f.descZh, f.descEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">{T(lang,'圖庫','Gallery')}</h2>
          <p className="mt-2 text-sm text-slate-600">{T(lang,'以下素材均來自 A 專案 /public。','Assets below come from A/public.')}</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {images.map((img, i) => (
              <div key={i} className="aspect-square rounded-xl ring-1 ring-slate-200 overflow-hidden relative bg-white">
                <Image src={img.src} alt={img.alt} fill className="object-contain p-4" />
                <div className="absolute bottom-1 left-1 right-1 text-[10px] text-center text-slate-500 bg-white/70 rounded px-1 py-0.5">{img.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">{T(lang,'準備好開始了嗎？','Ready to launch?')}</h2>
          <p className="mt-2 text-slate-600">{T(lang,'留下您的Email，我們將於1個工作日內回覆。','Drop your email; we will reply within 1 business day.')}</p>
          <form className="mt-6 flex gap-2 justify-center">
            <input type="email" required placeholder={T(lang,'您的Email','Your email')} className="w-64 sm:w-80 px-3 py-2 rounded-xl ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <button type="submit" className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90">{T(lang,'送出','Send')}</button>
          </form>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {brand}. {T(lang,'保留所有權利。','All rights reserved.')}
      </footer>
    </main>
  )
}
