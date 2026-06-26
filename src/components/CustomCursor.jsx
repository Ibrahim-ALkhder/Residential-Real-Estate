import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < 1024) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const onHover = () => cursor.classList.add('scale-150', 'bg-teal/20')
    const onLeave = () => cursor.classList.remove('scale-150', 'bg-teal/20')

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.transform = `translate(${followerX - 16}px, ${followerY - 16}px)`
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, input, select, textarea, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onHover)
      el.addEventListener('mouseleave', onLeave)
    })

    const obs = new MutationObserver(() => {
      document.querySelectorAll('a, button, input, select, textarea, [role="button"]').forEach(el => {
        el.removeEventListener('mouseenter', onHover)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onHover)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    obs.observe(document.body, { childList: true, subtree: true })

    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      obs.disconnect()
    }
  }, [])

  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-teal rounded-full pointer-events-none z-[9998] hidden lg:block"
        style={{ transition: 'width 0.2s, height 0.2s, background 0.2s' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9997] hidden lg:block"
        style={{
          border: '1px solid rgba(77,189,184,0.3)',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s',
        }}
      />
    </>
  )
}
