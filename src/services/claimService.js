import api from '../utils/api'

export default {
  create: (payload) =>
    api.post('/claims', payload).then(res => res.data),

  list: () =>
    api.get('/claims').then(res => res.data),

  approve: (id) =>
    api.put(`/claims/${id}/approve`).then(res => res.data),

  reject: (id) =>
    api.put(`/claims/${id}/reject`).then(res => res.data)
}