import api from '../utils/api'

export default {
  upload: async (file) => {
    const formData = new FormData()
    formData.append('file', file)

    const { data } = await api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return data
  }
}