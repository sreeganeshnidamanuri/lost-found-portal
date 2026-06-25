import api from '../utils/api'

export default {
  list: (params) => api.get('/found', { params }).then(r => r.data),
  get: (id) => api.get(`/found/${id}`).then(r => r.data),
  create: (payload) => api.post('/found', payload).then(r => r.data)
}
