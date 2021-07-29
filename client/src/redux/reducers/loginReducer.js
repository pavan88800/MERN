import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGIN_REQUEST
} from '../types'
const initialState = {
  token: null,
  isAuthenticated: null,
  loading: false,
  user: null,
  error: []
}
export function LoginUser (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        token: payload.token
      }
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: payload.errors
      }

    case USER_LOGOUT:
      return {
        token: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state
  }
}
