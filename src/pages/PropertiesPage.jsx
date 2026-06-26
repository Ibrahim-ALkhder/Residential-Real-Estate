import { useState, useMemo } from 'react'
import { useApp } from '../context/AppContext'
import PropertyCard from '../components/PropertyCard'

export default function PropertiesPage() {
  const { state } = useApp()
  const [filter, setFilter] = useState({ type: '', city: '', search: '' })

  const filtered = useMemo(() => {
    return state.properties.filter(p => {
      if (filter.type && p.type !== filter.type) return false
      if (filter.city && !p.city.includes(filter.city)) return false
      if (filter.search && !p.title.includes(filter.search)) return false
      return true
    })
  }, [state.properties, filter])

  return (
    <div className="pt-20 section-light">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-xl mb-12">
          <span className="eyebrow">العقارات</span>
          <h1 className="section-title text-gray-900">العقارات <span className="hl">المتاحة</span></h1>
          <div className="w-12 h-1 bg-teal rounded-full mb-4" />
          <p className="text-gray-500">تصفح أحدث العقارات المتاحة للبيع والإيجار والتقييم</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-10 pb-10 border-b border-teal/10">
          <select value={filter.type} onChange={e => setFilter({ ...filter, type: e.target.value })} className="input-field w-auto min-w-[140px]">
            <option value="">جميع الأنواع</option>
            <option value="بيع">بيع</option>
            <option value="إيجار">إيجار</option>
            <option value="تقييم">تقييم</option>
          </select>
          <select value={filter.city} onChange={e => setFilter({ ...filter, city: e.target.value })} className="input-field w-auto min-w-[140px]">
            <option value="">جميع المدن</option>
            <option value="جازان">جازان</option>
            <option value="صبياء">صبياء</option>
            <option value="أبو عريش">أبو عريش</option>
          </select>
          <input value={filter.search} onChange={e => setFilter({ ...filter, search: e.target.value })} className="input-field flex-1 min-w-[200px]" placeholder="ابحث عن عقار..." />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20"><p className="text-gray-400 text-lg">لا توجد عقارات مطابقة</p></div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        )}
      </div>
    </div>
  )
}
