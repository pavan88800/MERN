import { REGISTER_SUCCESS, REGISTER_FAIL } from '../types'
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  error: []
}
export function authUser (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', JSON.stringify(payload))
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }

    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: payload
      }

    default:
      return state
  }
}
