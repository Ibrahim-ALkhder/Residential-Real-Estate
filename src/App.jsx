import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import ProjectsPage from './pages/ProjectsPage'
import RequestFormsPage from './pages/RequestFormsPage'
import MortgageCalculatorPage from './pages/MortgageCalculatorPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/AdminPage'

export default function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const isAdmin = location.pathname === '/admin'

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (
    <AppProvider>
      {loading && <LoadingScreen />}
      {!isAdmin && <ScrollProgress />}
      <div className="min-h-screen flex flex-col" style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        {!isAdmin && <Navbar />}
        <main className="flex-1">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/forms" element={<RequestFormsPage />} />
            <Route path="/calculator" element={<MortgageCalculatorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        {!isAdmin && <Footer />}
        {!isAdmin && <WhatsAppButton />}
      </div>
    </AppProvider>
  )
}
