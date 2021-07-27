import { REGISTER_SUCCESS, REGISTER_FAIL } from '../types'
export function postData (data) {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  }
}

export const fetchDataFailure = error => {
  return {
    type: REGISTER_FAIL,
    payload: error
  }
}
