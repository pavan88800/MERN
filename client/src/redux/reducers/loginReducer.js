import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL
} from '../types'
const initialState = {
  token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  loading: false,
  error: []
}
console.log(initialState.token)
export function LoginUser (state = initialState, action) {
  const { type, payload } = action
  console.log(payload)
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
    case USER_LOGOUT_REQUEST:
      return {
        loading: true
      }

    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }

    default:
      return state
  }
}

export function userDetailsReducer (state = { users: {} }, action) {
  const { type, payload } = action
  console.log(payload, 'token Here is Here....')
  switch (type) {
    case USER_DETAILS_REQUEST:
      return {
        loading: true
      }
    case USER_DETAILS_SUCCESS:
      console.log('successfully')
      return {
        ...state,
        loading: false,
        users: payload
      }

    case USER_DETAILS_FAIL:
      console.log('Failed Here')
      return {
        ...state,
        loading: false,
        error: payload.errors
      }

    default:
      return state
  }
}
