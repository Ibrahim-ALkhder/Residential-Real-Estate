import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      bar.style.width = `${Math.min(pct * 100, 100)}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50" style={{ background: 'rgba(77,189,184,0.1)' }}>
      <div ref={barRef} className="h-full" style={{ background: '#4DBDB8', width: '0%', transition: 'width 0.1s linear' }} />
    </div>
  )
}
