import { Link } from 'react-router-dom'
import LogoPlaceholder from './LogoPlaceholder'

export default function Footer() {
  return (
    <footer className="text-gray-400 border-t border-teal/10" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="mb-5"><LogoPlaceholder size="md" /></div>
            <p className="text-sm text-gray-500 leading-relaxed">
              خيارك الأول في التسويق العقاري في منطقة جازان. نقدم خدمات متكاملة في بيع وشراء وتأجير وإدارة العقارات.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-5 text-sm tracking-wider uppercase" style={{ fontFamily: "'Cairo', sans-serif" }}>روابط</h3>
            <ul className="space-y-3 text-sm">
              {[{to:'/',label:'الرئيسية'},{to:'/properties',label:'العقارات'},{to:'/projects',label:'المشاريع'},{to:'/about',label:'من نحن'},{to:'/contact',label:'تواصل معنا'}].map(l => (
                <li key={l.to}><Link to={l.to} className="text-gray-500 hover:text-teal transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-5 text-sm tracking-wider uppercase" style={{ fontFamily: "'Cairo', sans-serif" }}>خدمات</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {[{to:'/about',label:'التسويق العقاري'},{to:'/properties',label:'التأجير وإدارة الأملاك'},{to:'/properties',label:'الشراء والبيع'},{to:'/projects',label:'التطوير والاستثمار'},{to:'/contact',label:'الاستشارات العقارية'}].map((l,i) => (
                <li key={i}><Link to={l.to} className="text-gray-500 hover:text-teal transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-5 text-sm tracking-wider uppercase" style={{ fontFamily: "'Cairo', sans-serif" }}>الاتصال</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="https://maps.google.com/?q=جازان+حي+المحمدية+مقابل+كتابة+العدل" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">جازان - حي المحمدية - مقابل كتابة العدل</a></li>
              <li><a href="tel:+966504555109" className="hover:text-teal transition-colors" dir="ltr">050 455 5109</a> / <a href="tel:+966504498295" className="hover:text-teal transition-colors" dir="ltr">050 449 8295</a></li>
              <li><a href="mailto:SAKEN-2030@HOTMAIL.COM" className="hover:text-teal transition-colors">SAKEN-2030@HOTMAIL.COM</a></li>
              <li><a href="https://www.sakenreal.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">www.sakenreal.com</a></li>
            </ul>
          </div>
        </div>
        <div className="divider mt-12 mb-8" />
        <div className="text-center text-sm text-gray-600">© {new Date().getFullYear()} السكن العقاري</div>
      </div>
    </footer>
  )
}
