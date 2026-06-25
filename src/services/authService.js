import api from '../utils/api'

export default {
  login: async ({ email, password }) => {
    const { data } = await api.post('/auth/login', { email, password })
    return data
  },
  register: async ({ email, password, name }) => {
    const { data } = await api.post('/auth/register', { email, password, name })
    return data
  },
  me: async () => {
    const { data } = await api.get('/users/me').catch(()=> ({ data: null }))
    return data
  }
}
