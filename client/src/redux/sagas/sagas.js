import {
  put,
  call,
  takeEvery,
  takeLatest,
  takeLeading
} from 'redux-saga/effects'
import { RegisterAPI } from '../api/registerApi'
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_REGISTER_REQUEST
} from '../types'

export function * register (action) {
  try {
    let res = yield call(RegisterAPI, action.payload)
    console.log(res)
    yield put({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
    yield put({
      type: REGISTER_FAIL
    })
  }
}

export function * watchAgeUp () {
  yield takeLeading(USER_REGISTER_REQUEST, register)
}
