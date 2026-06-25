import  { useRef, useState } from 'react'
import '../styles/uploader.css'

export default function ImageUploader({ onUpload }) {
  const ref = useRef()
  const [preview, setPreview] = useState(null)

  const handle = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result)
    reader.readAsDataURL(file)
    onUpload && onUpload(file)
  }

  return (
    <div className="uploader">
      <div className="preview">{preview ? <img src={preview} alt="preview" /> : <div className="placeholder">No image</div>}</div>
      <input ref={ref} type="file" accept="image/*" onChange={handle} />
    </div>
  )
}
