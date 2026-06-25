import { useEffect, useState } from 'react'
import lostService from '../services/lostItemService'
import ItemCard from '../components/ItemCard'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import '../styles/page.css'

export default function LostItems() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await lostService.list({
          q: query,
          page
        })

        setItems(data || [])
      } catch (err) {
        console.error(err)
        setItems([])
      }
    }

    load()
  }, [query, page])

  return (
    <div className="page">
      <div className="section-header">
        <h2>Lost Items</h2>
        <p>Browse recently reported lost items.</p>
      </div>

      <SearchBar value={query} onChange={setQuery} />

      <div className="content-grid">
        {items.length > 0 ? (
          items.map(it => (
            <ItemCard
              key={it.id}
              item={it}
              type="lost"
            />
          ))
        ) : (
          <div className="muted">No items found</div>
        )}
      </div>

      <Pagination
        page={page}
        totalPages={3}
        onChange={setPage}
      />
    </div>
  )
}