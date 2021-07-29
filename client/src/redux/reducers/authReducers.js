import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_REGISTER_REQUEST
} from '../types'
const initialState = {
  token: null,
  isAuthenticated: null,
  loading: false,
  user: null,
  error: []
}
export function authUser (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        token: payload.token
      }
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: payload.errors
      }

    default:
      return state
  }
}
