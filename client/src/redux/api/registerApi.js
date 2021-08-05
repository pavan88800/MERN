import api from '../../utlis/axios'
export const RegisterAPI = async data => {
  let response = await api.post('/api/users', data)
  return response
}

export const UpdateAPI = async data => {
  let response = await api.put('/api/users/update', data)
  return response
}
