import { useState, useEffect, useRef } from 'react'

export default function StatsCounter() {
  const [visible, setVisible] = useState(false)
  const [counts, setCounts] = useState({ p: 0, c: 0, y: 0 })
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const targets = { p: 150, c: 200, y: 15 }
    const duration = 2000
    const start = Date.now()
    const tick = () => {
      const t = Math.min((Date.now() - start) / duration, 1)
      const e = 1 - Math.pow(1 - t, 3)
      setCounts({ p: Math.floor(e * targets.p), c: Math.floor(e * targets.c), y: Math.floor(e * targets.y) })
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [visible])

  return (
    <section ref={ref} className="py-20 section-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-12 text-center">
          {[
            { value: counts.p, suffix: '+', label: 'عقار' },
            { value: counts.c, suffix: '+', label: 'عميل' },
            { value: counts.y, suffix: '+', label: 'سنة خبرة' },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-5xl font-black text-teal mb-2" style={{ fontFamily: "'Cairo', sans-serif", fontVariantNumeric: 'tabular-nums' }}>
                {s.value.toLocaleString('ar-SA')}{s.suffix}
              </p>
              <p className="text-gray-500 text-sm tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
