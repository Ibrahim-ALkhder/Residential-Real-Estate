import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoPlaceholder from './LogoPlaceholder'

const links = [
  { to: '/', label: 'الرئيسية' },
  { to: '/properties', label: 'العقارات' },
  { to: '/projects', label: 'المشاريع' },
  { to: '/forms', label: 'النماذج' },
  { to: '/calculator', label: 'حاسبة التمويل' },
  { to: '/about', label: 'من نحن' },
  { to: '/contact', label: 'تواصل معنا' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[4.5rem]">
          <Link to="/" className="flex items-center gap-2">
            <LogoPlaceholder size="sm" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-teal'
                      : 'text-gray-700 hover:text-teal'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold bg-teal text-white hover:bg-teal-dark transition-colors"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            تواصل معنا
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-600"
            aria-label="القائمة"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-1">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-medium rounded ${
                    isActive ? 'text-teal bg-teal/5' : 'text-gray-600 hover:text-teal hover:bg-gray-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
