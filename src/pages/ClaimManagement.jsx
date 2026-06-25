import { useEffect, useState } from 'react'
import claimService from '../services/claimService'

export default function ClaimManagement() {
  const [claims, setClaims] = useState([])

  const loadClaims = async () => {
    const data = await claimService.list()
    setClaims(data || [])
  }

  useEffect(() => {
    loadClaims()
  }, [])

  const approve = async (id) => {
    await claimService.approve(id)
    loadClaims()
  }

  const reject = async (id) => {
    await claimService.reject(id)
    loadClaims()
  }

  return (
    <div className="page">
      <h1>Claim Management</h1>

      {claims.map(claim => (
        <div key={claim.id} className="info-card">
          <h3>
            {claim.lostItem?.title ||
             claim.foundItem?.title ||
             'Unknown Item'}
          </h3>

          <p>Status: {claim.status}</p>

          {claim.status === 'PENDING' && (
            <>
              <button
                className="btn-found"
                onClick={() => approve(claim.id)}
              >
                Approve
              </button>

              <button
                className="btn-lost"
                onClick={() => reject(claim.id)}
              >
                Reject
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}