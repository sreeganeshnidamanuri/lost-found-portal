import 'react'
import useAuth from '../hooks/useAuth'

export default function Profile() {
  const { user } = useAuth()
  return (
    <div>
      <h1>Profile</h1>
      <div className="card" style={{padding:16}}>
        <p><strong>Email</strong> {user?.email}</p>
        <p><strong>Role</strong> {user?.role || 'ROLE_USER'}</p>
      </div>
    </div>
  )
}
