import 'react'
import useNotification from '../hooks/useNotification'

export default function Notifications() {
  const { notifications, markRead } = useNotification()
  return (
    <div>
      <h1>Notifications</h1>
      <div style={{display:'grid', gap:12}}>
        {notifications.length ? notifications.map(n => (
          <div key={n.id} className="card" style={{padding:12}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div><strong>{n.title}</strong></div>
              <div className="muted">{new Date(n.createdAt).toLocaleString()}</div>
            </div>
            <p>{n.message}</p>
            {!n.read && <button className="btn btn-sm" onClick={()=>markRead(n.id)}>Mark read</button>}
          </div>
        )) : <div className="muted">No notifications</div>}
      </div>
    </div>
  )
}
