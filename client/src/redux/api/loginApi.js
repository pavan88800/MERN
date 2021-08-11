import api from '../../utlis/axios'

export const LoginAPI = async data => {
  let response = await api.post('/api/users/login', data)
  return response
}

export const UserAPI = async () => {
  let response = await api.get('/api/users/auth')
  return response
}
