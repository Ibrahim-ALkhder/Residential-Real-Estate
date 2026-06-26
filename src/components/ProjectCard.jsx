export default function ProjectCard({ project }) {
  const statusStyles = {
    'قيد الإنشاء': 'text-amber-700 bg-amber-50 border-amber-200',
    'مكتمل': 'text-green-700 bg-green-50 border-green-200',
  }

  return (
    <div className="card card-accent">
      <div className="h-48 bg-teal/5 flex items-center justify-center relative">
        <svg className="w-16 h-16 text-teal/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded border ${statusStyles[project.status] || 'text-gray-700 bg-gray-50 border-gray-200'}`}>
          {project.status}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-gray-800 text-lg mb-2" style={{ fontFamily: "'Cairo', sans-serif" }}>{project.name}</h3>
        <p className="text-gray-400 text-sm mb-1">{project.city}</p>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>
        <button className="w-full py-3 text-sm font-bold text-teal border border-teal/30 hover:bg-teal hover:text-white transition-colors">
          عرض المشروع
        </button>
      </div>
    </div>
  )
}
