import {
  POST_FAIL,
  GET_POST_REQUEST,
  POSTS_SUCCESS,
  ADD_POST,
  ADD_POST_REQUEST,
  DELETE_POST_REQUEST,
  POST_DELETE
} from '../types'
const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: []
}
export function postReducer (state = initialState, action) {
  const { type, payload } = action
  console.log(payload, 'payload is already There ')
  switch (type) {
    case GET_POST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload
      }

    case ADD_POST_REQUEST:
      return {
        ...state,
        loading: true
      }

    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      }

    case DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case POST_DELETE:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      }
    case POST_FAIL:
      return {
        ...state,
        post: null,
        posts: [],
        loading: false,
        error: payload.errors
      }
    default:
      return state
  }
}
