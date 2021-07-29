import axios from 'axios'

export const LoginAPI = async data => {
  let response = await axios('http://localhost:5000/api/users/login', {
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  return response
}
