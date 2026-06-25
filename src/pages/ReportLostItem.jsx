import { useState } from 'react'
import ImageUploader from '../components/ImageUploader'
import lostService from '../services/lostItemService'
import uploadService from '../services/uploadService'
import '../styles/page.css'

export default function ReportLostItem() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [location, setLocation] = useState('')
  const [file, setFile] = useState(null)

  const submit = async (e) => {
    e.preventDefault()

    try {
      let imageUrl = ''

      if (file) {
        imageUrl = await uploadService.upload(file)
      }

      await lostService.create({
        title,
        description: desc,
        location,
        imageUrl
      })

      alert('Lost item reported successfully')

      setTitle('')
      setDesc('')
      setLocation('')
      setFile(null)

    } catch (err) {
      console.error(err)
      alert('Failed to report lost item')
    }
  }

  return (
    <div className="page">
      <div className="section-header">
        <h2>Report Lost Item</h2>
        <p>
          Share details about your lost item and help others identify it.
        </p>
      </div>

      <div className="info-card">
        <form onSubmit={submit} className="form">

          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter item title"
          />

          <label>Description</label>
          <textarea
            rows="5"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Describe the lost item"
          />

          <label>Last Seen Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where did you lose it?"
          />

          <label>Image</label>
          <ImageUploader onUpload={(f) => setFile(f)} />

          <button type="submit" className="btn-lost">
            Submit Lost Item
          </button>

        </form>
      </div>
    </div>
  )
}