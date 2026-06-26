import { useState } from 'react'
import { useApp } from '../context/AppContext'
import RequestForm from '../components/RequestForm'

const tabs = [
  { id: 'شراء', label: 'طلب شراء' },
  { id: 'بيع', label: 'طلب بيع' },
  { id: 'تأجير', label: 'طلب تأجير' },
  { id: 'تقييم', label: 'تقييم عقاري' },
]

export default function RequestFormsPage() {
  const [activeTab, setActiveTab] = useState('شراء')
  const { dispatch } = useApp()
  const handleSubmit = (data) => dispatch({ type: 'ADD_REQUEST', payload: data })

  return (
    <div className="pt-20 section-light">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="max-w-xl mb-12">
          <span className="eyebrow">النماذج</span>
          <h1 className="section-title text-gray-900">النماذج <span className="hl">العقارية</span></h1>
          <div className="w-12 h-1 bg-teal rounded-full mb-4" />
          <p className="text-gray-500">قدم طلبك الآن وسنقوم بالتواصل معك في أقرب وقت</p>
        </div>

        <div className="flex border-b border-teal/10 mb-8">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${
                activeTab === t.id ? 'border-teal text-teal' : 'border-transparent text-gray-400 hover:text-gray-600'
              }`} style={{ fontFamily: "'Cairo', sans-serif" }}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="bg-white border border-teal/10 p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Cairo', sans-serif" }}>
            {tabs.find(t => t.id === activeTab)?.label}
          </h2>
          <RequestForm key={activeTab} type={activeTab} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}
