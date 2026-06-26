import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ThreeHero from '../components/ThreeHero'
import StatsCounter from '../components/StatsCounter'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
    title: 'التسويق العقاري',
    description: 'نسوق عقاراتك بأحدث الأساليب والمنصات المتخصصة للوصول للعملاء المستهدفين.'
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: 'التأجير',
    description: 'ندير تأجير العقارات السكنية والتجارية بأفضل العوائد وبعقود قانونية موثوقة.'
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: 'إدارة الأملاك',
    description: 'خدمات إدارة شاملة للممتلكات تشمل الصيانة والمتابعة مع المستأجرين.'
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    title: 'الشراء والبيع',
    description: 'نساعدك في إيجاد أفضل الفرص العقارية للشراء والبيع بأفضل الأسعار المنافسة.'
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    title: 'التطوير والاستثمار',
    description: 'استشارات متخصصة في التطوير العقاري ودراسات الجدوى للمشاريع الاستثمارية.'
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    title: 'الاستشارات العقارية',
    description: 'استشارات قانونية وتثمينية لتساعدك على اتخاذ أفضل القرارات العقارية.'
  },
]

const partners = [
  { name: 'وزارة الطاقة', file: 'وزارة الطاقة.png' },
  { name: 'مصرف الراجحي', file: 'مصرف الراجحي.png' },
  { name: 'غرفة جازان', file: 'غرفة جازان.png' },
  { name: 'الهيئة العامة للعقار', file: 'الهيئة العامة للعقار.png' },
  { name: 'بنك الرياض', file: 'بنك الرياض.png' },
]

export default function HomePage() {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-up').forEach(el => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
        <ThreeHero />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1628]/80 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
          <span className="eyebrow text-white/40 tracking-[0.25em] mb-6 font-normal">جازان · المملكة العربية السعودية</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "'Cairo', sans-serif" }}>
            السكن <span className="text-teal">العقاري</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-3 font-medium">خيارك الأول في التسويق العقاري</p>
          <p className="text-base text-white/30 max-w-xl mx-auto mb-10">نقدم خدمات عقارية متكاملة في منطقة جازان بخبرة تتجاوز 15 عاماً</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/properties" className="btn btn-primary text-base px-10 py-4">عقارات للبيع</Link>
            <Link to="/contact" className="btn btn-outline text-base px-10 py-4">تواصل معنا</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <svg className="w-5 h-5 text-white/20 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <StatsCounter />

      <section className="py-24 section-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16 fade-up">
            <span className="eyebrow">خدماتنا</span>
            <h2 className="section-title text-gray-900">خدمات عقارية <span className="hl">متكاملة</span></h2>
            <div className="w-12 h-1 bg-teal rounded-full mb-4" />
            <p className="text-gray-500 text-base leading-relaxed">نقدم مجموعة متكاملة من الخدمات العقارية باحترافية عالية لجميع عملائنا في منطقة جازان.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 fade-up">
            <span className="eyebrow">شركاؤنا</span>
            <h2 className="section-title text-gray-900">شركاؤنا <span className="hl">الاستراتيجيون</span></h2>
            <div className="w-12 h-1 bg-teal rounded-full mx-auto mb-4" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((p, i) => (
              <div key={i} className={`float float-delay-${i + 1} fade-up`} style={{ transitionDelay: `${i * 100}ms` }}>
                <img
                  src={`/${encodeURI(p.file)}`}
                  alt={p.name}
                  className="h-20 md:h-24 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
                />
                <span className="hidden text-teal/70 text-sm font-bold">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
