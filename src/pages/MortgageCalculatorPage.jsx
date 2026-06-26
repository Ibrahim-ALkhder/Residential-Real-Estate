import { useState } from 'react'

export default function MortgageCalculatorPage() {
  const [price, setPrice] = useState('500000')
  const [downPct, setDownPct] = useState('20')
  const [years, setYears] = useState('25')
  const [rate, setRate] = useState('4.5')

  const p = parseFloat(price) || 0
  const downPayment = p * ((parseFloat(downPct) || 0) / 100)
  const loanAmount = p - downPayment
  const mr = ((parseFloat(rate) || 0) / 100) / 12
  const n = (parseFloat(years) || 1) * 12

  let monthly = 0, totalPay = 0, totalInt = 0
  if (mr > 0 && loanAmount > 0) {
    monthly = loanAmount * (mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1)
    totalPay = monthly * n
    totalInt = totalPay - loanAmount
  }

  const fmt = (n) => Math.round(n).toLocaleString('ar-SA')

  return (
    <div className="pt-20 section-light">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-xl mb-12">
          <span className="eyebrow">حاسبة التمويل</span>
          <h1 className="section-title text-gray-900">حاسبة <span className="hl">التمويل العقاري</span></h1>
          <div className="w-12 h-1 bg-teal rounded-full mb-4" />
          <p className="text-gray-500">احسب القسط الشهري المناسب لتمويلك العقاري</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white border border-teal/10 p-8">
            <h2 className="text-lg font-bold text-gray-800 mb-6" style={{ fontFamily: "'Cairo', sans-serif" }}>بيانات التمويل</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">سعر العقار</label>
                <div className="relative">
                  <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="input-field" />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">ريال</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">الدفعة الأولى ({downPct}%)</label>
                <input type="range" min="0" max="70" value={downPct} onChange={e => setDownPct(e.target.value)} className="w-full accent-teal" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">مدة التمويل</label>
                <div className="relative">
                  <input type="number" value={years} onChange={e => setYears(e.target.value)} className="input-field" />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">سنة</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">نسبة الفائدة ({rate}%)</label>
                <input type="range" min="1" max="15" step="0.1" value={rate} onChange={e => setRate(e.target.value)} className="w-full accent-teal" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-teal/20 p-8 section-dark">
            <h2 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "'Cairo', sans-serif" }}>نتائج التمويل</h2>
            <div className="text-center py-6 border-b border-white/10 mb-6">
              <p className="text-gray-400 text-sm mb-1">القسط الشهري</p>
              <p className="text-4xl font-black text-teal" style={{ fontFamily: "'Cairo', sans-serif" }}>{fmt(monthly)}</p>
              <p className="text-gray-500 text-sm mt-1">ريال</p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">إجمالي التمويل</span><span className="text-white font-bold">{fmt(loanAmount)} ريال</span></div>
              <div className="flex justify-between"><span className="text-gray-400">الدفعة الأولى</span><span className="text-white font-bold">{fmt(downPayment)} ريال</span></div>
              <div className="flex justify-between"><span className="text-gray-400">إجمالي الفوائد</span><span className="text-teal font-bold">{fmt(totalInt)} ريال</span></div>
              <div className="flex justify-between pt-3 border-t border-white/10"><span className="text-gray-400">إجمالي المدفوعات</span><span className="text-white font-bold">{fmt(totalPay)} ريال</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
