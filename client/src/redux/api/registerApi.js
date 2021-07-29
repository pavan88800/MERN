import axios from 'axios'

export const RegisterAPI = async data => {
  let response = await axios('http://localhost:5000/api/users', {
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  return response
}
