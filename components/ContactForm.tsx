'use client';
import { useState, useRef } from 'react';

export default function ContactForm({ locale = 'en' }: { locale?: 'en'|'zh-Hant' }){
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'err'>('idle');
  const [message, setMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const t = (en: string, zh: string) => (locale==='zh-Hant' ? zh : en);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    const fd = new FormData(e.currentTarget);
    try{
      const res = await fetch('/api/contact', { method: 'POST', body: fd });
      const data = await res.json();
      if (res.ok && data?.ok){
        setStatus('ok');
        setMessage(t('Thank you! We will get back within 1 business day.','已收到！我們將於一個工作日內回覆。'));
        formRef.current?.reset();
      } else {
        throw new Error(data?.error || 'Submit error');
      }
    }catch(err:any){
      setStatus('err');
      setMessage(t('Submission failed, please email us.','送出失敗，請改以 Email 與我們聯繫。'));
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 mt-6">
      <input className="border rounded-xl p-3" name="name" placeholder={t('Your name','您的姓名')} required />
      <input className="border rounded-xl p-3" name="email" type="email" placeholder="Email" required />
      <input className="border rounded-xl p-3 md:col-span-2" name="company" placeholder={t('Company / Brand','公司/品牌名稱')} />
      <textarea className="border rounded-xl p-3 md:col-span-2" name="message" rows={5} placeholder={t('Your needs and goals','您的需求與目標')}></textarea>
      {/* Honeypot */}
      <input type="text" name="_gotcha" style={{ display:'none' }} tabIndex={-1} autoComplete="off" />
      <button className="px-5 py-3 bg-blue-600 text-white rounded-xl md:col-span-2" type="submit" disabled={status==='sending'}>
        {status==='sending' ? t('Sending…','送出中…') : t('Send','送出')}
      </button>
      {message && <p className={`md:col-span-2 text-sm ${status==='ok' ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
    </form>
  );
}
