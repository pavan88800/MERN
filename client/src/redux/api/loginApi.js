import axios from 'axios'

export const LoginAPI = async data => {
  console.log(JSON.stringify(data, 'login'))
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

// http://localhost:5000/api/users/auth/

export const UserAPI = async token => {
  console.log('User Token Found Here', token.token)

  console.log('Failed Here')
  let response = await axios('http://localhost:5000/api/users/auth', {
    headers: {
      method: 'GET',
      'x-auth-token': token.token || token,
      'Content-Type': 'application/json'
    }
  })
  return response
}
