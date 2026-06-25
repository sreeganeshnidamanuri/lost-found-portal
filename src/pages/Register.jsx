import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { isEmail, minLength } from '../utils/validators'
import '../styles/page.css'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { register } = useAuth()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!name.trim()) {
      return setError('Please enter your name')
    }

    if (!isEmail(email)) {
      return setError('Please enter a valid email')
    }

    if (!minLength(password, 6)) {
      return setError('Password must be at least 6 characters')
    }

    try {
      await register({
        name,
        email,
        password,
      })

      navigate('/dashboard')
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        err?.response?.data ||
        err.message ||
        'Registration failed'
      )
    }
  }

  return (
    <div className="auth-card">
      <h2>Create Account</h2>

      <form onSubmit={submit} className="auth-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  )
}