import axios from 'axios'

export const RegisterAPI = data => {
  return axios('http://localhost:5000/api/users', {
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then(res => res.data)

    .catch(err => console.error(err.response.errors))
}

// export const RegisterAPI = request => {
//   console.log(request)
//   const REGISTER_API_ENDPOINT = 'http://localhost:5000/api/users'

//   const parameters = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(request)
//   }

//   return fetch(REGISTER_API_ENDPOINT, parameters)
//     .then(response => {
//       console.log(response)
//       return response.json()
//     })
//     .then(json => {
//       console.log(json)
//       return json
//     })
// }
