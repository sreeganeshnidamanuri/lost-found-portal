import  { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const NotificationContext = createContext()

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([])

  const push = (n) => setNotifications(prev => [n, ...prev])
  const markRead = (id) => setNotifications(prev => prev.map(n => n.id === id ? {...n, read:true} : n))

  return (
    <NotificationContext.Provider value={{ notifications, push, markRead }}>
      {children}
    </NotificationContext.Provider>
  )
}
