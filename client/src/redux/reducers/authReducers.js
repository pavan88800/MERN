import { REGISTER_SUCCESS, REGISTER_FAIL } from '../types'
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  error: []
}
export function authUser (state = initialState, action) {
  const { type, payload } = action
  console.log(payload)
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', JSON.stringify(payload.token))
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.token
      }

    case REGISTER_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: payload
      }

    default:
      return state
  }
}
