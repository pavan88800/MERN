import { USER_REGISTER_REQUEST } from '../types'

export function userRegister (data) {
  console.log(data)
  return {
    type: USER_REGISTER_REQUEST,
    payload: data
  }
}
