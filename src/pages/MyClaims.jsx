import { useEffect, useState } from 'react'
import claimService from '../services/claimService'
import '../styles/page.css'

export default function MyClaims() {
  const [claims, setClaims] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadClaims()
  }, [])

  const loadClaims = async () => {
    try {
      const data = await claimService.list()
      setClaims(data || [])
    } catch (error) {
      console.error('Error loading claims:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <h2>Loading claims...</h2>
  }

 return (
  <div className="page">
    <div className="section-header">
      <h2>My Claims</h2>
      <p>Track the status of all your submitted claims.</p>
    </div>

    {claims.length === 0 ? (
      <div className="empty-state">
        <div className="empty-state-icon">📄</div>
        <h2>No Claims Yet</h2>
        <p>You haven't submitted any claims.</p>
      </div>
    ) : (
      <div className="claims-grid">
        {claims.map((claim) => (
          <div key={claim.id} className="claim-card">

            <div className="claim-header">
              <h3>
                {claim.lostItem?.title ||
                  claim.foundItem?.title ||
                  'Unknown Item'}
              </h3>

              <span
                className={`claim-status ${
                  claim.status?.toLowerCase()
                }`}
              >
                {claim.status}
              </span>
            </div>

            <div className="claim-body">
              <p>
                <strong>Claim ID:</strong> #{claim.id}
              </p>

              <p>
                <strong>Date:</strong>{' '}
                {claim.createdAt
                  ? new Date(claim.createdAt).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>

          </div>
        ))}
      </div>
    )}
  </div>
)
}