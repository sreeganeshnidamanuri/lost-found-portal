import 'react'
import '../styles/pagination.css'

export default function Pagination({ page, totalPages, onChange }) {
  const prev = () => onChange(Math.max(1, page - 1))
  const next = () => onChange(Math.min(totalPages, page + 1))
  return (
    <div className="pagination">
      <button onClick={prev} disabled={page === 1}>Prev</button>
      <span>{page} / {totalPages}</span>
      <button onClick={next} disabled={page === totalPages}>Next</button>
    </div>
  )
}
