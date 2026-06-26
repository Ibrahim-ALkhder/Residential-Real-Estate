export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="card card-accent p-8 group">
      <div className="w-14 h-14 bg-teal/5 flex items-center justify-center mb-5 group-hover:bg-teal/10 transition-colors text-teal">
        {icon}
      </div>
      <h3 className="font-bold text-gray-800 text-lg mb-2" style={{ fontFamily: "'Cairo', sans-serif" }}>{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
