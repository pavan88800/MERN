import { USER_LOGIN_REQUEST, USER_REGISTER_REQUEST } from '../types'

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
