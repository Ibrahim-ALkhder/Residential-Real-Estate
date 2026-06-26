import ProjectCard from '../components/ProjectCard'

const projects = [
  { id: 1, name: 'مخطط المحمدية السكني', city: 'جازان', status: 'قيد الإنشاء', description: 'مخطط سكني متكامل يضم 250 فيلا سكنية بمواصفات عالية مع حدائق ومرافق ترفيهية.' },
  { id: 2, name: 'برج الأندلس التجاري', city: 'جازان', status: 'مكتمل', description: 'برج تجاري مكون من 12 طابقاً يضم مكاتب إدارية ومحال تجارية في موقع استراتيجي.' },
  { id: 3, name: 'مخطط ولي العهد', city: 'صبياء', status: 'قيد الإنشاء', description: 'مخطط سكني ضخم يضم أكثر من 500 قطعة أرض سكنية وتجارية بأسعار منافسة.' },
  { id: 4, name: 'قرية فرسان السياحية', city: 'فرسان', status: 'مكتمل', description: 'منتجع سياحي متكامل على شاطئ البحر الأحمر يضم فللاً وشققاً فاخرة.' },
]

export default function ProjectsPage() {
  return (
    <div className="pt-20 section-light">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-xl mb-12">
          <span className="eyebrow">مشاريعنا</span>
          <h1 className="section-title text-gray-900">المشاريع <span className="hl">والمخططات</span></h1>
          <div className="w-12 h-1 bg-teal rounded-full mb-4" />
          <p className="text-gray-500">تعرف على أحدث مشاريعنا التطويرية والمخططات السكنية</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </div>
  )
}
