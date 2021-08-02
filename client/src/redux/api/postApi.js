import axios from 'axios'

export const GetPostsAPI = async token => {
  console.log('User Token Found Here', token.token)
  let response = await axios('http://localhost:5000/api/posts/allposts', {
    headers: {
      method: 'GET',
      'x-auth-token': token.token || token,
      'Content-Type': 'application/json'
    }
  })
  return response
}

export const AddPostAPI = async (token, data) => {
  console.log(data.data, 'from auth')
  console.log(token, 'from auth token')
  console.log(JSON.stringify(data.data.post))
  let datas = data.data.post
  let response = await axios('http://localhost:5000/api/posts/post', {
    method: 'POST',
    data: data.data.post,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'x-auth-token': token.token || token
    }
  })
  return response
}
