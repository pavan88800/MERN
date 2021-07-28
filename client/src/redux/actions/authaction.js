import { REGISTER_FAIL, REGISTER_SUCCESS, USER_REQUEST } from '../types'

export function RegisterSuccess (data) {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  }
}

export function authError () {
  return {
    type: REGISTER_FAIL
  }
}
