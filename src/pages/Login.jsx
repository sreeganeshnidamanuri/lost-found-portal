import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { isEmail, minLength } from '../utils/validators'
import '../styles/page.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { login } = useAuth()
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()

    if (!isEmail(email)) return setError('Enter a valid email')
    if (!minLength(password, 6)) return setError('Password too short')

    try {
      await login({ email, password })
      nav('/dashboard')
    } catch (err) {
      setError(err?.response?.data || err.message)
    }
  }

 return (
  <div className="login-page">
    
    <div className="auth-card">
      <h2>Welcome Back</h2>

      <p className="auth-subtitle">
        Login to access your Lost & Found account
      </p>

      <form onSubmit={submit} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>

    <div className="login-side">
      <h1>Lost & Found Portal</h1>

      <p>
        Reconnect people with their valuable belongings quickly and securely.
      </p>

      <div className="feature-box">
        🔍 Search Lost Items
      </div>

      <div className="feature-box">
        📦 Report Lost & Found Items
      </div>

      <div className="feature-box">
        🔔 Instant Notifications
      </div>

      <div className="feature-box">
        🤝 Easy Claim Management
      </div>
    </div>

  </div>
)
}