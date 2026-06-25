import  { createContext, useState, useEffect } from 'react'
import authService from '../services/authService'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authService.me().then(u => setUser(u)).catch(()=> setUser(null)).finally(()=> setLoading(false))
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false)
    }
  }, [])

  const login = async (credentials) => {
  const res = await authService.login(credentials)

  localStorage.setItem('token', res.token)

  setUser({
    email: res.email,
    role: res.role
  })

  return res

  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

 const register = async (payload) => {
  const res = await authService.register(payload)

  localStorage.setItem('token', res.token)

  setUser({
    email: res.email,
    role: res.role
  })

  return res
}

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
