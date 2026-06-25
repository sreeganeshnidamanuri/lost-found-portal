import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import '../styles/navbar.css'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/dashboard" className="navbar-logo">
          LostFound
        </Link>

        <nav className="navbar-links">
          <Link to="/lost">Lost</Link>
          <Link to="/found">Found</Link>
          <Link to="/report/lost">Report Lost</Link>
          <Link to="/report/found">Report Found</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/my/claims">My Claims</Link>

          {/* Admin Menu */}
          {user?.role === 'ROLE_ADMIN' && (
            <Link to="/admin">Admin</Link>
          )}

          {user ? (
            <>
              <Link to="/profile">{user.email}</Link>

              <button
                className="btn-signout"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}