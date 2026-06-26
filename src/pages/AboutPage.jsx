export default function AboutPage() {
  const advantages = [
    { title: 'الجاهزية', desc: 'نمتلك قاعدة بيانات ضخمة من العقارات المتنوعة ونقدم حلولاً فورية.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { title: 'الخبرة', desc: 'أكثر من 15 عاماً في السوق العقاري بمنطقة جازان.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
    { title: 'العلاقات', desc: 'شراكات استراتيجية مع كبرى الجهات في القطاعين الحكومي والخاص.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: 'التطور', desc: 'نواكب أحدث التقنيات في التسويق العقاري لخدمة أفضل.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
  ]

  return (
    <div className="pt-20 section-light">
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="eyebrow text-white/40">من نحن</span>
          <h1 className="section-title text-white">نبني الثقة ونساهم في تحقيق <span className="hl">أحلامك العقارية</span></h1>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow">قصتنا</span>
            <h2 className="section-title text-gray-900 mb-8">خبرة تتجاوز <span className="hl">15 عاماً</span></h2>
            <div className="w-12 h-1 bg-teal rounded-full mb-6" />
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>تأسست السكن العقاري لتكون خيارك الأول في التسويق العقاري بمنطقة جازان، مستندين إلى خبرة تتجاوز 15 عاماً في السوق العقاري المحلي.</p>
              <p>نؤمن بأن العقار ليس مجرد مبنى، بل هو استثمار وحلم وأسلوب حياة. لذلك نحرص على تقديم خدمات عقارية متكاملة تلبي تطلعات عملائنا.</p>
              <p>بفضل شراكاتنا الاستراتيجية مع كبرى الجهات الحكومية والخاصة، نقدم حلولاً عقارية متميزة تشمل البيع والشراء والتأجير وإدارة الأملاك والتطوير العقاري.</p>
            </div>
          </div>
          <div className="bg-white border border-teal/10 p-8">
            <div className="w-full aspect-square max-w-xs mx-auto flex items-center justify-center bg-teal/[0.02] border border-teal/5">
              <p className="text-teal/30 text-sm">صورة</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="eyebrow">مميزاتنا</span>
            <h2 className="section-title text-gray-900">لماذا <span className="hl">السكن العقاري؟</span></h2>
            <div className="w-12 h-1 bg-teal rounded-full mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="bg-white border border-teal/10 p-6 hover:border-teal/30 transition-colors">
                <div className="w-12 h-12 bg-teal/5 flex items-center justify-center mb-4 text-teal">{a.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: "'Cairo', sans-serif" }}>{a.title}</h3>
                <p className="text-gray-500 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <h2 className="section-title text-gray-900 mb-6">التزامنا</h2>
        <div className="w-12 h-1 bg-teal rounded-full mx-auto mb-6" />
        <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
          نتعهد بتقديم أعلى معايير الشفافية والمصداقية في جميع تعاملاتنا العقارية، ونضمن لعملائنا تجربة آمنة وسلسة مدعومة بالخبرة والاحترافية.
        </p>
      </section>
    </div>
  )
}
