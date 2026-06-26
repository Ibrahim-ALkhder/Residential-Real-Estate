import { useState } from 'react'

const cityOptions = ['جازان', 'صبياء', 'أبو عريش', 'العارضة', 'الحرث', 'الريث', 'فرسان', 'الدائر']
const propertyTypes = ['فيلا', 'شقة', 'أرض', 'مكتب', 'قصر', 'مستودع']

export default function RequestForm({ type, onSubmit }) {
  const [form, setForm] = useState({ name: '', phone: '', city: '', propertyType: '', budget: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit({ ...form, type })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-teal/5 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-1" style={{ fontFamily: "'Cairo', sans-serif" }}>تم إرسال الطلب</h3>
        <p className="text-gray-400 text-sm mb-6">سيتم التواصل معك في أقرب وقت</p>
        <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', city: '', propertyType: '', budget: '', notes: '' }) }} className="btn-primary">
          طلب جديد
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">الاسم</label>
          <input name="name" value={form.name} onChange={handleChange} required className="input-field" placeholder="الاسم الكامل" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">رقم الجوال</label>
          <input name="phone" value={form.phone} onChange={handleChange} required className="input-field" placeholder="05xxxxxxxx" dir="ltr" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">المدينة</label>
          <select name="city" value={form.city} onChange={handleChange} required className="input-field">
            <option value="">اختر المدينة</option>
            {cityOptions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">نوع العقار</label>
          <select name="propertyType" value={form.propertyType} onChange={handleChange} required className="input-field">
            <option value="">اختر النوع</option>
            {propertyTypes.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {type === 'تأجير' ? 'الميزانية (سنوياً)' : 'الميزانية'}
          </label>
          <input name="budget" value={form.budget} onChange={handleChange} className="input-field" placeholder="ريال" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">ملاحظات</label>
        <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="input-field resize-none" placeholder="تفاصيل إضافية..." />
      </div>
      <button type="submit" className="btn-primary">إرسال الطلب</button>
    </form>
  )
}
