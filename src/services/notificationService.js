import api from '../utils/api'

export default {
  listForUser: (userId) => api.get(`/notifications/user/${userId}`).then(r => r.data),
  send: (payload) => api.post('/notifications', payload).then(r => r.data)
}
