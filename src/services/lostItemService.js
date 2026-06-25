import api from '../utils/api'

export default {
  list: (params) => api.get('/lost', { params }).then(r => r.data),
  get: (id) => api.get(`/lost/${id}`).then(r => r.data),
  create: (payload) => api.post('/lost', payload).then(r => r.data),
  my: () => api.get('/lost/my').then(r => r.data)
}
