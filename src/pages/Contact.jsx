import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Contact({ lang }){
  const t=(zh,en)=>(lang==='zh'?zh:en)
  return (
    <section className="py-16">
      <Helmet><title>{t('聯絡我們｜NexaPath','Contact | NexaPath')}</title></Helmet>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-8">
          <h1 className="text-3xl font-extrabold">{t('聯絡我們','Contact Us')}</h1>
          <form className="mt-6 grid gap-4" action="mailto:alex.t@nexapath.us" method="POST" encType="text/plain">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder={t('您的名字','Your Name')} required />
              <input name="email" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Email" type="email" required />
            </div>
            <input name="company" className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder={t('公司 / 職稱（選填）','Company / Title (optional)')} />
            <textarea name="message" className="w-full rounded-2xl border border-slate-300 px-4 py-3 h-28 resize-y" placeholder={t('請描述你的需求…','Describe your needs…')} required />
            <button type="submit" className="rounded-2xl px-5 py-3 font-semibold text-white" style={{backgroundColor:'#0A2A5E'}}>{t('送出','Send')}</button>
          </form>
          <div className="mt-6 text-sm text-slate-500 text-center bg-indigo-50 py-4 rounded-xl">
            {t('您也可以直接透過電子郵件與我們聯繫：','You can also reach us directly via email:')}
            <a href="mailto:alex.t@nexapath.us" className="underline ml-1">Alex Tseng &lt;alex.t@nexapath.us&gt;</a>
          </div>
        </div>
      </div>
    </section>
  )
}
