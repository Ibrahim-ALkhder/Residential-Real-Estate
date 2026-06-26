export default function PropertyCard({ property }) {
  const typeColors = {
    بيع: 'text-green-700 bg-green-50 border-green-200',
    إيجار: 'text-blue-700 bg-blue-50 border-blue-200',
    تقييم: 'text-orange-700 bg-orange-50 border-orange-200',
  }

  return (
    <div className="card card-accent">
      <div className="h-48 bg-teal/5 flex items-center justify-center relative overflow-hidden">
        <svg className="w-16 h-16 text-teal/20 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded border ${typeColors[property.type] || 'text-gray-700 bg-gray-50 border-gray-200'}`}>
          {property.type}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-gray-800 text-base mb-2 leading-snug" style={{ fontFamily: "'Cairo', sans-serif" }}>{property.title}</h3>
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
          <svg className="w-3.5 h-3.5 text-teal/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{property.city} · {property.area}</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-teal/5">
          <span className="font-extrabold text-lg text-teal">{property.price} <span className="text-sm font-normal text-gray-400">ريال</span></span>
          <button className="text-sm font-bold text-teal hover:text-teal-dark transition-colors">التفاصيل ←</button>
        </div>
      </div>
    </div>
  )
}
