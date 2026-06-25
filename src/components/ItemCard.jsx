import { Link } from 'react-router-dom'
import '../styles/itemcard.css'

export default function ItemCard({ item, type = 'lost' }) {
  return (
    <article className="item-card">

      <div className="item-card-image">
        <img
          src={item.imageUrl || '/assets/images/placeholder.png'}
          alt={item.title}
        />
      </div>

      <div className="item-card-header">
        <div>
          <h3 className="item-card-title">
            {item.title}
          </h3>

          <div className="item-card-date">
            {item.createdAt
              ? new Date(item.createdAt).toLocaleDateString()
              : ''}
          </div>
        </div>
      </div>

      <div className="item-card-body">

        <div className="item-card-location">
          {item.location}
        </div>

        <p className="item-card-description">
          {item.description?.slice(0, 120)}
        </p>

      </div>

      <div className="item-card-footer">

        <span
          className={`item-status ${
            type === 'lost'
              ? 'status-lost'
              : 'status-found'
          }`}
        >
          {type === 'lost'
            ? 'Lost Item'
            : 'Found Item'}
        </span>

        <Link
          to={`/${type}/${item.id}`}
          className="item-contact-btn"
        >
          View Details
        </Link>

      </div>

    </article>
  )
}