import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const FORMSPREE_ID = process.env.FORMSPREE_ID;
  if (!FORMSPREE_ID) {
    return NextResponse.json({ ok: false, error: 'FORMSPREE_ID is not configured' }, { status: 500 });
  }
  const formData = await req.formData();
  const gotcha = formData.get('_gotcha');
  if (typeof gotcha === 'string' && gotcha.trim() !== '') {
    return NextResponse.json({ ok: true, spam: true });
  }
  const target = `https://formspree.io/f/${FORMSPREE_ID}`;
  const res = await fetch(target, { method: 'POST', body: formData as any, headers: { 'Accept': 'application/json' } });
  const data = await res.json().catch(()=>({}));
  if (!res.ok) {
    return NextResponse.json({ ok: false, error: data?.error || 'Formspree error' }, { status: 502 });
  }
  return NextResponse.json({ ok: true, data });
}
