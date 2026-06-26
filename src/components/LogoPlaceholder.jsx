import { useState, useEffect } from 'react'

const sizes = { sm: 'h-14', md: 'h-14', lg: 'h-20' }

export default function LogoPlaceholder({ size = 'sm' }) {
  const [logoSrc, setLogoSrc] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.onload = () => setLogoSrc('/logo.png')
    img.onerror = () => setLogoSrc(null)
    img.src = '/logo.png'
  }, [])

  if (logoSrc) {
    return <img src={logoSrc} alt="السكن العقاري" className={sizes[size]} />
  }

  return (
    <div className={`${sizes[size]} aspect-square bg-teal text-white flex items-center justify-center font-black`} style={{ fontFamily: "'Cairo', sans-serif", fontSize: size === 'lg' ? '2rem' : '1.5rem' }}>
      س
    </div>
  )
}
