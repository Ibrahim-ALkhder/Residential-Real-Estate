import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  const contactInfo = [
    { label: 'الهاتف', value: '050 455 5109 / 050 449 8295' },
    { label: 'البريد الإلكتروني', value: 'SAKEN-2030@HOTMAIL.COM', href: 'mailto:SAKEN-2030@HOTMAIL.COM' },
    { label: 'الموقع', value: 'جازان - حي المحمدية - مقابل كتابة العدل' },
    { label: 'الموقع الإلكتروني', value: 'www.sakenreal.com', href: 'https://www.sakenreal.com' },
  ]

  return (
    <div className="pt-20 section-light">
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="eyebrow text-white/40">تواصل معنا</span>
          <h1 className="section-title text-white">نحن هنا <span className="hl">لخدمتك</span></h1>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((c, i) => (
                <div key={i} className="bg-white border border-teal/10 p-5 hover:border-teal/30 transition-colors">
                  <h3 className="font-bold text-gray-800 text-sm mb-1" style={{ fontFamily: "'Cairo', sans-serif" }}>{c.label}</h3>
                  {c.href ? <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-teal transition-colors">{c.value}</a>
                    : <p className="text-gray-500 text-sm">{c.value}</p>}
                </div>
              ))}
            </div>
            <div className="border border-teal/10 h-64 bg-teal/[0.02]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778773.848648877!2d38.667569850000004!3d17.36548985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15f1b3b8b8b8b8b8%3A0x0!2z2YXYsdmD2YUg2KfZhNmF2LnYqQ!5e0!3m2!1sar!2ssa!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="موقع السكن العقاري" />
            </div>
          </div>

          <div className="bg-white border border-teal/10 p-8">
            <h2 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: "'Cairo', sans-serif" }}>أرسل لنا رسالة</h2>
            <p className="text-gray-400 text-sm mb-6">سنكون سعداء بالتواصل معك والرد على استفساراتك</p>
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-teal/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">تم الإرسال</h3>
                <p className="text-gray-400 text-sm mb-6">سنرد عليك قريباً</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }) }} className="btn btn-primary">رسالة جديدة</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1.5">الاسم</label><input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-field" placeholder="اسمك" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1.5">البريد الإلكتروني</label><input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="input-field" placeholder="بريدك" /></div>
                </div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1.5">رقم الجوال</label><input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="input-field" placeholder="رقم جوالك" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1.5">الرسالة</label><textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} className="input-field resize-none" placeholder="اكتب رسالتك هنا..." /></div>
                <button type="submit" className="btn btn-primary">إرسال</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
