import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import lostService from '../services/lostItemService'
import ClaimModal from '../components/ClaimModal'
import claimService from '../services/claimService'

export default function LostItemDetails() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => { lostService.get(id).then(setItem).catch(()=>null) }, [id])

  const submitClaim = async (claimData) => {
  try {
    await claimService.create(claimData)
    alert('Claim submitted successfully')
    setOpen(false)
  } catch (err) {
    console.error(err)
    alert('Failed to submit claim')
  }
}

  if (!item) return <div>Loading...</div>

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.imageUrl || '/assets/images/placeholder.png'} alt={item.title} style={{maxWidth:420, borderRadius:8}} />
      <p className="muted">{item.location} • {item.createdAt ? new Date(item.createdAt).toLocaleString() : ''}</p>
      <p>{item.description}</p>
      <button className="btn" onClick={() => setOpen(true)}>Claim</button>
      <ClaimModal open={open} onClose={() => setOpen(false)} onSubmit={submitClaim} item={item} />
    </div>
  )
}
