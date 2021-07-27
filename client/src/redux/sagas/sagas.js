import { put, call, takeLatest, takeLeading } from 'redux-saga/effects'
import { fetchDataFailure } from '../actions/authaction'
import { RegisterAPI } from '../api/registerApi'
import { REGISTER_FAIL, REGISTER_SUCCESS } from '../types'

export function * register (action) {
  try {
    let { data, errors } = yield call(RegisterAPI, action.payload)
    console.log(errors)
    if (data) {
      yield put({
        type: REGISTER_SUCCESS,
        payload: data
      })
    } else {
      yield put({ type: REGISTER_FAIL, payload: errors })
    }
  } catch (errors) {
    yield put({ type: REGISTER_FAIL, payload: errors })
  }
}

// export function * register (action) {
//   try {
//     const response = yield call(RegisterAPI, action.payload)
//     yield put({ type: 'REGISTER_SUCCESS', response })

//   } catch (error) {
//     yield put({ type: 'REGISTER_FAIL', error })
//   }
// }

export function * watchAgeUp () {
  yield takeLeading(REGISTER_SUCCESS, register)
}
