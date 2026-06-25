import { Link } from 'react-router-dom'
import '../styles/page.css'

export default function AdminDashboard() {
  return (
    <div className="page">
      <div className="section-header">
        <h2>Admin Dashboard</h2>
        <p>Manage users, claims, notifications and analytics.</p>
      </div>

      <div className="content-grid">

        <div className="info-card">
          <h3>👥 User Management</h3>
          <p>View and manage registered users.</p>
          <Link to="/admin/users" className="btn-primary">
            Open
          </Link>
        </div>

        <div className="info-card">
          <h3>📋 Claim Management</h3>
          <p>Approve or reject item claims.</p>
          <Link to="/admin/claims" className="btn-primary">
            Open
          </Link>
        </div>

        <div className="info-card">
          <h3>📊 Analytics</h3>
          <p>View portal statistics and reports.</p>
          <Link to="/admin/analytics" className="btn-primary">
            Open
          </Link>
        </div>

        <div className="info-card">
          <h3>🔔 Notifications</h3>
          <p>Monitor system notifications.</p>
          <Link to="/notifications" className="btn-primary">
            Open
          </Link>
        </div>

      </div>
    </div>
  )
}