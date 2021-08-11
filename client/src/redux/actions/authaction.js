import {
  ADD_POST_REQUEST,
  DELETE_POST_REQUEST,
  GET_POST_REQUEST,
  GET_SINGLE_POST,
  POST_UPDATE_REQUEST,
  USER_DETAILS_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_REGISTER_REQUEST,
  USER_UPDATE_REQUEST
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

export function userDetails () {
  return {
    type: USER_DETAILS_REQUEST
  }
}

export function getAllPosts () {
  return {
    type: GET_POST_REQUEST
  }
}

export function AddPost (data) {
  console.log(data, 'from Data')

  return {
    type: ADD_POST_REQUEST,
    payload: { data }
  }
}

export function PostDelete (id) {
  console.log(id, 'from Data')
  return {
    type: DELETE_POST_REQUEST,
    payload: id
  }
}

export function UpdateUser (data) {
  return {
    type: USER_UPDATE_REQUEST,
    payload: data
  }
}
export function GetSingleUserID (id) {
  return {
    type: GET_SINGLE_POST,
    payload: id
  }
}

export function PostUpdate (id, data) {
  console.log(id, data, 'post update')
  return {
    type: POST_UPDATE_REQUEST,
    payload: { id, data }
  }
}
