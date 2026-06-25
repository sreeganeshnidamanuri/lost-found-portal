import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/page.css'

export default function Dashboard() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    setStats({
      users: 120,
      lost: 45,
      found: 38,
      claims: 12
    })
  }, [])

  return (
    <div className="page">

      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Reuniting You With
            <br />
            <span className="highlight">What Matters</span>
          </h1>

          <p>
            Lost something precious? Found something valuable?
            We help connect people with their belongings quickly.
          </p>

          <div className="hero-buttons">
            <Link to="/report/lost" className="btn-lost">
              Report Lost
            </Link>

            <Link to="/report/found" className="btn-found">
              Report Found
            </Link>

            <Link to="/lost" className="btn-primary">
              Browse Items
            </Link>
          </div>
        </div>
      </section>

      <div className="section-header">
        <h2>Dashboard Overview</h2>
      </div>

      <div className="grid">
        <div className="stat">
          👥
          <div className="big">{stats?.users}</div>
          <p>Total Users</p>
        </div>

        <div className="stat">
          📦
          <div className="big">{stats?.lost}</div>
          <p>Lost Items</p>
        </div>

        <div className="stat">
          ✅
          <div className="big">{stats?.found}</div>
          <p>Found Items</p>
        </div>

        <div className="stat">
          📋
          <div className="big">{stats?.claims}</div>
          <p>Claims</p>
        </div>
      </div>

      <div className="section-header">
        <h2>Why Choose LostFound?</h2>
      </div>

      <div className="content-grid">

        <div className="info-card">
          <div className="info-card-icon">🛡️</div>
          <h3>Safe & Secure</h3>
          <p>All reports are verified and protected.</p>
        </div>

        <div className="info-card">
          <div className="info-card-icon">👥</div>
          <h3>Community Driven</h3>
          <p>Helping people reconnect with belongings.</p>
        </div>

        <div className="info-card">
          <div className="info-card-icon">⚡</div>
          <h3>Quick Response</h3>
          <p>Get notified when matching items appear.</p>
        </div>

        <div className="info-card">
          <div className="info-card-icon">🏆</div>
          <h3>Verified Reports</h3>
          <p>Trusted and authenticated item listings.</p>
        </div>

      </div>

      <div className="cta-section">
        <h2>Stay Updated</h2>

        <p>
          Subscribe and never miss important updates.
        </p>

        <button className="cta-btn">
          Subscribe Now
        </button>
      </div>

    </div>
  )
}