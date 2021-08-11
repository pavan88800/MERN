import api from '../../utlis/axios'

export const GetPostsAPI = async () => {
  let response = await api.get('/api/posts/allposts')
  return response
}

export const AddPostAPI = async data => {
  let response = await api.post('/api/posts/post', data.data.post)
  return response
}

export const SinglePostAPI = async id => {
  let response = await api.get(`/api/posts/${id}`)
  return response
}

export const UpdatePost = async (id, data) => {
  console.log(data, 'data')
  let response = await api.put(`/api/posts/updatepost/${id}`, data.data.post)
  console.log(response)
  return response
}

export const DeletePostAPI = async id => {
  let response = await api.delete(`/api/posts/${id}`)
  return response
}
