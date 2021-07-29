import { put, call, takeLatest, delay } from 'redux-saga/effects'
import { LoginAPI } from '../api/loginApi'
import { RegisterAPI } from '../api/registerApi'
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_REGISTER_REQUEST
} from '../types'

// Register
export function * register (action) {
  try {
    let res = yield call(RegisterAPI, action.payload)
    console.log(res)
    delay(200)
    yield put({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
    localStorage.setItem('token', JSON.stringify(res.data))
  } catch (err) {
    console.log(err)
    delay(1000)
    const errors = err.response.data

    yield put({
      type: REGISTER_FAIL,
      payload: errors
    })
  }
}
// Login
export function * login (action) {
  try {
    let res = yield call(LoginAPI, action.payload)
    console.log(res)
    yield put({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
    localStorage.setItem('token', JSON.stringify(res.data))
  } catch (err) {
    const errors = err.response.data
    yield put({
      type: LOGIN_FAIL,
      payload: errors
    })
  }
}

export function * watchAgeUp () {
  yield takeLatest(USER_REGISTER_REQUEST, register)
  yield takeLatest(USER_LOGIN_REQUEST, login)
}
