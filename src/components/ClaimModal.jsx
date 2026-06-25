import  { useState } from 'react'
import '../styles/modal.css'

export default function ClaimModal({ open, onClose, onSubmit, item }) {
  const [message, setMessage] = useState('')

  if (!open) return null

  const submit = () => {
  onSubmit({
    lostItem: {
      id: item.id
    }
  })

  setMessage('')

  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Claim item</h3>
        <p className="muted">Claiming: {item.title}</p>
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Add a message" />
        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn" onClick={submit}>Submit claim</button>
        </div>
      </div>
    </div>
  )
}
