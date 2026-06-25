import 'react'
import '../styles/searchbar.css'

export default function SearchBar({ value, onChange, placeholder = 'Search items...' }) {
  return (
    <div className="searchbar">
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  )
}
