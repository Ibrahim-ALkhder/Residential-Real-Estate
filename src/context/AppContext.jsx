import { createContext, useContext, useReducer, useEffect } from 'react'

const AppContext = createContext()

const initialState = {
  properties: [
    { id: 1, title: 'فيلا فاخرة في حي المحمدية', type: 'بيع', city: 'جازان', price: '1,200,000', area: '450م²', image: '', description: 'فيلا فاخرة مكونة من 5 غرف نوم، 4 حمامات، مجلس، صالة، مطبخ، حديقة خاصة، وموقف سيارات.' },
    { id: 2, title: 'شقة سكنية في حي الشاطئ', type: 'إيجار', city: 'جازان', price: '25,000', area: '150م²', image: '', description: 'شقة فاخرة مكونة من 3 غرف نوم، صالة، مطبخ، 2 حمام، مطلة على البحر.' },
    { id: 3, title: 'أرض تجارية في مخطط ولي العهد', type: 'بيع', city: 'صبياء', price: '800,000', area: '600م²', image: '', description: 'أرض تجارية مميزة على شارع رئيسي، مناسبة للمشاريع التجارية والاستثمارية.' },
    { id: 4, title: 'قصر فاخر في حي الملك عبدالله', type: 'تقييم', city: 'جازان', price: '3,500,000', area: '800م²', image: '', description: 'قصر فاخر بتصميم عصري، 7 غرف نوم، 6 حمامات، مسبح، حديقة مساحتها 300م².' },
    { id: 5, title: 'مكتب إداري في برج الأندلس', type: 'إيجار', city: 'جازان', price: '45,000', area: '100م²', image: '', description: 'مكتب إداري مجهز بالكامل في برج الأندلس، مناسب للشركات والمؤسسات.' },
    { id: 6, title: 'فيلا دوبلكس في حي الفهد', type: 'بيع', city: 'أبو عريش', price: '950,000', area: '300م²', image: '', description: 'فيلا دوبلكس حديثة البناء، 4 غرف نوم، 3 حمامات، مجلس، صالة واسعة.' },
  ],
  requests: [
    { id: 1, name: 'محمد أحمد', phone: '0501234567', city: 'جازان', type: 'شراء', propertyType: 'فيلا', budget: '1,500,000', notes: 'أبحث عن فيلا في حي المحمدية', status: 'جديد', date: '2026-06-20' },
    { id: 2, name: 'سعود عبدالله', phone: '0507654321', city: 'صبياء', type: 'تأجير', propertyType: 'شقة', budget: '30,000', notes: 'شقة 3 غرف', status: 'قيد المراجعة', date: '2026-06-22' },
    { id: 3, name: 'خالد علي', phone: '0559876543', city: 'جازان', type: 'تقييم', propertyType: 'قصر', budget: '', notes: 'تقييم قصر في حي الملك عبدالله', status: 'جديد', date: '2026-06-24' },
  ],
  adminAuth: JSON.parse(localStorage.getItem('saken_admin') || 'false'),
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PROPERTY':
      return { ...state, properties: [...state.properties, { ...action.payload, id: Date.now() }] }
    case 'UPDATE_PROPERTY':
      return { ...state, properties: state.properties.map(p => p.id === action.payload.id ? action.payload : p) }
    case 'DELETE_PROPERTY':
      return { ...state, properties: state.properties.filter(p => p.id !== action.payload) }
    case 'ADD_REQUEST':
      return { ...state, requests: [...state.requests, { ...action.payload, id: Date.now(), status: 'جديد', date: new Date().toISOString().split('T')[0] }] }
    case 'UPDATE_REQUEST_STATUS':
      return { ...state, requests: state.requests.map(r => r.id === action.payload.id ? { ...r, status: action.payload.status } : r) }
    case 'DELETE_REQUEST':
      return { ...state, requests: state.requests.filter(r => r.id !== action.payload) }
    case 'LOGIN':
      localStorage.setItem('saken_admin', 'true')
      return { ...state, adminAuth: true }
    case 'LOGOUT':
      localStorage.setItem('saken_admin', 'false')
      return { ...state, adminAuth: false }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const stored = localStorage.getItem('saken_admin')
    if (stored !== JSON.stringify(state.adminAuth)) {
      localStorage.setItem('saken_admin', JSON.stringify(state.adminAuth))
    }
  }, [state.adminAuth])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
