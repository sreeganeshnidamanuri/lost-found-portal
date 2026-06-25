import { useState } from 'react'
import ImageUploader from '../components/ImageUploader'
import foundService from '../services/foundItemService'
import uploadService from '../services/uploadService'
import '../styles/page.css'

export default function ReportFoundItem() {
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

      await foundService.create({
        title,
        description: desc,
        location,
        imageUrl
      })

      alert('Found item reported successfully')

      setTitle('')
      setDesc('')
      setLocation('')
      setFile(null)

    } catch (err) {
      console.error(err)
      alert('Failed to report found item')
    }
  }

  return (
  <div className="page-content">
    <div className="section-header">
      <h2>Report Found Item</h2>
      <p>
        Submit details of an item you found so the rightful owner can
        locate it.
      </p>
    </div>

    <div className="info-card">
      <form onSubmit={submit} className="report-form">

        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter item title"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Describe the item"
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where did you find it?"
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <ImageUploader onUpload={(f) => setFile(f)} />
        </div>

        <button className="btn-primary" type="submit">
          Submit Report
        </button>

      </form>
    </div>
  </div>
  )
}