import api from '../utils/api'

export default {
  users: () => api.get('/admin/users').then(r => r.data),
  claims: () => api.get('/admin/claims').then(r => r.data),
  analytics: () => api.get('/admin/analytics').then(r => r.data)
}
