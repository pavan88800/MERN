import {
  ADD_POST_REQUEST,
  GET_POST_REQUEST,
  USER_DETAILS_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_REGISTER_REQUEST
} from '../types'

export function userRegister (data) {
  console.log(data)
  return {
    type: USER_REGISTER_REQUEST,
    payload: data
  }
}

export function userLogin (data) {
  return {
    type: USER_LOGIN_REQUEST,
    payload: data
  }
}

export function userLogout () {
  return {
    type: USER_LOGOUT_REQUEST
  }
}

export function userDetails (token) {
  console.log(token, 'from token user ')
  return {
    type: USER_DETAILS_REQUEST,
    payload: token
  }
}

export function getAllPosts (token) {
  return {
    type: GET_POST_REQUEST,
    payload: token
  }
}

export function AddPost (token, data) {
  console.log(data, 'from Data')
  console.log(token, 'from Token')
  return {
    type: ADD_POST_REQUEST,
    payload: { token, data }
  }
}
