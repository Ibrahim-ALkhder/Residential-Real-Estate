import { useState } from 'react'
import { useApp } from '../context/AppContext'
import LogoPlaceholder from '../components/LogoPlaceholder'

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin123') onLogin()
    else setError('اسم المستخدم أو كلمة المرور غير صحيحة')
  }
  return (
    <div className="min-h-screen flex items-center justify-center section-light">
      <div className="bg-white border border-teal/10 p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4"><LogoPlaceholder size="lg" /></div>
          <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Cairo', sans-serif" }}>لوحة الإدارة</h1>
          <p className="text-gray-400 text-sm mt-1">تسجيل الدخول</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">اسم المستخدم</label><input value={username} onChange={e => setUsername(e.target.value)} className="input-field" placeholder="admin" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">كلمة المرور</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} className="input-field" placeholder="••••••" /></div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button type="submit" className="btn btn-primary w-full justify-center">دخول</button>
        </form>
      </div>
    </div>
  )
}

const sidebarItems = [
  { id: 'dashboard', label: 'الإحصائيات' },
  { id: 'properties', label: 'العقارات' },
  { id: 'requests', label: 'الطلبات' },
  { id: 'settings', label: 'الإعدادات' },
]

function DashboardTab({ state }) {
  const stats = [
    { label: 'إجمالي العقارات', value: state.properties.length },
    { label: 'الطلبات الجديدة', value: state.requests.filter(r => r.status === 'جديد').length },
    { label: 'طلبات مكتملة', value: state.requests.filter(r => r.status === 'مكتمل').length },
    { label: 'عقارات مباعة', value: state.properties.filter(p => p.type === 'بيع').length },
  ]
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Cairo', sans-serif" }}>نظرة عامة</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border border-teal/10 p-5 border-t-2 border-t-teal">
            <p className="text-gray-400 text-sm mb-1">{s.label}</p>
            <p className="text-3xl font-black text-gray-900" style={{ fontFamily: "'Cairo', sans-serif" }}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PropertiesTab({ state, dispatch }) {
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ title: '', type: 'بيع', city: 'جازان', price: '', area: '', description: '' })
  const handleEdit = (p) => { setEditing(p.id); setForm({ title: p.title, type: p.type, city: p.city, price: p.price, area: p.area, description: p.description }) }
  const handleSave = () => {
    if (editing === 'new') dispatch({ type: 'ADD_PROPERTY', payload: { ...form, image: '' } })
    else dispatch({ type: 'UPDATE_PROPERTY', payload: { ...form, id: editing, image: '' } })
    setEditing(null); setForm({ title: '', type: 'بيع', city: 'جازان', price: '', area: '', description: '' })
  }
  const handleDelete = (id) => { if (window.confirm('هل أنت متأكد؟')) dispatch({ type: 'DELETE_PROPERTY', payload: id }) }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Cairo', sans-serif" }}>العقارات</h2>
        <button onClick={() => { setEditing('new'); setForm({ title: '', type: 'بيع', city: 'جازان', price: '', area: '', description: '' }) }} className="btn btn-primary text-sm px-4 py-2.5">إضافة</button>
      </div>
      {editing && (
        <div className="bg-teal/[0.02] border border-teal/20 p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-4">{editing === 'new' ? 'إضافة عقار' : 'تعديل'}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">العنوان</label><input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="input-field" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">النوع</label><select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="input-field"><option value="بيع">بيع</option><option value="إيجار">إيجار</option><option value="تقييم">تقييم</option></select></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">المدينة</label><select value={form.city} onChange={e => setForm({...form, city: e.target.value})} className="input-field">{['جازان','صبياء','أبو عريش','العارضة','الحرث','الريث','فرسان','الدائر'].map(c => <option key={c} value={c}>{c}</option>)}</select></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">السعر</label><input value={form.price} onChange={e => setForm({...form, price: e.target.value})} className="input-field" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">المساحة</label><input value={form.area} onChange={e => setForm({...form, area: e.target.value})} className="input-field" /></div>
            <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1.5">الوصف</label><textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={2} className="input-field resize-none" /></div>
          </div>
          <div className="flex gap-3 mt-4"><button onClick={handleSave} className="btn btn-primary text-sm px-4 py-2.5">حفظ</button><button onClick={() => setEditing(null)} className="px-4 py-2.5 text-sm border border-gray-200 text-gray-600 hover:bg-gray-50">إلغاء</button></div>
        </div>
      )}
      <div className="overflow-x-auto bg-white border border-teal/10">
        <table className="w-full text-sm">
          <thead><tr className="bg-teal/[0.02]"><th className="text-right p-3 font-bold text-gray-600 border-b border-teal/10">العنوان</th><th className="text-right p-3 font-bold text-gray-600 border-b border-teal/10">النوع</th><th className="text-right p-3 font-bold text-gray-600 border-b border-teal/10">المدينة</th><th className="text-right p-3 font-bold text-gray-600 border-b border-teal/10">السعر</th><th className="text-center p-3 font-bold text-gray-600 border-b border-teal/10">إجراءات</th></tr></thead>
          <tbody>
            {state.properties.map(p => (
              <tr key={p.id} className="border-b border-teal/[0.05] hover:bg-teal/[0.02]">
                <td className="p-3 font-medium text-gray-800">{p.title}</td>
                <td className="p-3 text-gray-600">{p.type}</td>
                <td className="p-3 text-gray-600">{p.city}</td>
                <td className="p-3 font-bold text-teal">{p.price}</td>
                <td className="p-3 text-center"><div className="flex items-center justify-center gap-2"><button onClick={() => handleEdit(p)} className="px-3 py-1 text-xs font-bold text-teal bg-teal/5 hover:bg-teal/10">تعديل</button><button onClick={() => handleDelete(p.id)} className="px-3 py-1 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100">حذف</button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function RequestsTab({ state, dispatch }) {
  const handleStatusChange = (id, status) => dispatch({ type: 'UPDATE_REQUEST_STATUS', payload: { id, status } })
  const handleDelete = (id) => { if (window.confirm('هل أنت متأكد؟')) dispatch({ type: 'DELETE_REQUEST', payload: id }) }
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Cairo', sans-serif" }}>الطلبات</h2>
      <div className="overflow-x-auto bg-white border border-teal/10">
        <table className="w-full text-sm">
          <thead><tr className="bg-teal/[0.02]"><th className="text-right p-3 font-bold text-gray-600 border-b border-teal/10">الاسم</th><th className="text-right p-3 font-bold text-gray-600 border-b border-teal/10">الجوال</th><th className="text-right p-3 font-bold text-gray-600 border-b border-teal/10">النوع</th><th className="text-right p-3 font-bold text-gray-600 border-b border-teal/10">التاريخ</th><th className="text-center p-3 font-bold text-gray-600 border-b border-teal/10">الحالة</th><th className="text-center p-3 font-bold text-gray-600 border-b border-teal/10">إجراءات</th></tr></thead>
          <tbody>
            {state.requests.map(r => (
              <tr key={r.id} className="border-b border-teal/[0.05] hover:bg-teal/[0.02]">
                <td className="p-3 font-medium text-gray-800">{r.name}</td><td className="p-3 text-gray-600" dir="ltr">{r.phone}</td>
                <td className="p-3 text-gray-600">{r.type}</td><td className="p-3 text-gray-600">{r.date}</td>
                <td className="p-3 text-center">
                  <select value={r.status} onChange={e => handleStatusChange(r.id, e.target.value)}
                    className={`px-3 py-1 rounded text-xs font-bold border-0 cursor-pointer ${r.status === 'جديد' ? 'text-amber-600 bg-amber-50' : r.status === 'قيد المراجعة' ? 'text-blue-600 bg-blue-50' : 'text-green-600 bg-green-50'}`}>
                    <option value="جديد">جديد</option><option value="قيد المراجعة">قيد المراجعة</option><option value="مكتمل">مكتمل</option>
                  </select>
                </td>
                <td className="p-3 text-center"><button onClick={() => handleDelete(r.id)} className="px-3 py-1 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100">حذف</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SettingsTab({ dispatch }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Cairo', sans-serif" }}>الإعدادات</h2>
      <div className="bg-white border border-teal/10 p-6 max-w-md">
        <h3 className="font-bold text-gray-800 mb-4">الجلسة</h3>
        <button onClick={() => dispatch({ type: 'LOGOUT' })} className="px-6 py-3 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200">تسجيل الخروج</button>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const { state, dispatch } = useApp()
  const [active, setActive] = useState('dashboard')
  if (!state.adminAuth) return <LoginPage onLogin={() => dispatch({ type: 'LOGIN' })} />
  return (
    <div className="min-h-screen flex section-light">
      <aside className="w-56 shrink-0 hidden lg:block border-l border-teal/10 section-dark">
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3"><LogoPlaceholder size="sm" /><div><p className="font-bold text-white text-sm" style={{ fontFamily: "'Cairo', sans-serif" }}>الإدارة</p><p className="text-xs text-gray-500">السكن العقاري</p></div></div>
        </div>
        <nav className="p-4 space-y-1">
          {sidebarItems.map(item => (
            <button key={item.id} onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors ${active === item.id ? 'bg-teal/10 text-teal border-r-2 border-teal' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <div className="flex-1 min-w-0">
        <div className="lg:hidden flex gap-2 p-4 overflow-x-auto border-b border-teal/10 section-dark">
          {sidebarItems.map(item => (
            <button key={item.id} onClick={() => setActive(item.id)} className={`shrink-0 px-4 py-2 rounded text-xs font-bold ${active === item.id ? 'bg-teal text-white' : 'bg-white/5 text-gray-400'}`}>{item.label}</button>
          ))}
        </div>
        <div className="p-6 md:p-8">
          {active === 'properties' ? <PropertiesTab state={state} dispatch={dispatch} /> :
           active === 'requests' ? <RequestsTab state={state} dispatch={dispatch} /> :
           active === 'settings' ? <SettingsTab dispatch={dispatch} /> :
           <DashboardTab state={state} />}
        </div>
      </div>
    </div>
  )
}
