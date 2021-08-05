import api from '../../utlis/axios'

export const GetPostsAPI = async () => {
  let response = await api.get('/api/posts/allposts')
  console.log(response)
  return response
}

export const AddPostAPI = async data => {
  let response = await api.post('/api/posts/post', data.data.post)
  return response
}

export const DeletePostAPI = async id => {
  console.log(id, 'from post ')
  let response = await api.delete(`/api/posts/${id}`)
  return response
}
