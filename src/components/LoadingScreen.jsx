import { useState, useEffect, useRef } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center" style={{ backgroundColor: '#0A1628' }}>
      <div className="w-10 h-10 mb-6 relative">
        <div className="absolute inset-0 border-2 border-teal/20 rounded-full" />
        <div className="absolute inset-0 border-2 border-transparent border-t-teal rounded-full animate-spin" />
      </div>
      <p className="text-sm text-white/30" style={{ fontFamily: "'Cairo', sans-serif" }}>السكن العقاري</p>
    </div>
  )
}
