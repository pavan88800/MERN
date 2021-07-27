import { put, call, takeLatest, takeLeading } from 'redux-saga/effects'
import { fetchDataFailure } from '../actions/authaction'
import { RegisterAPI } from '../api/registerApi'
import { REGISTER_SUCCESS } from '../types'

export function * register (action) {
  try {
    let data = yield call(RegisterAPI, action.payload)

    yield put({
      type: REGISTER_SUCCESS,
      payload: data
    })
  } catch (err) {
    const errors = err.response.errors.data.errors.errors
    if (errors) {
      console.log(errors)
      errors.forEach(error => fetchDataFailure(error.msg))
    }
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
  yield takeLeading('REGISTER_SUCCESS', register)
}
