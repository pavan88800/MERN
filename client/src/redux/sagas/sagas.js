import { put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { authError, fetchDataFailure } from '../actions/authaction'
import { RegisterAPI } from '../api/registerApi'
import { REGISTER_FAIL, REGISTER_SUCCESS } from '../types'
// function* fetchProducts() {
//   try {
//     const products = yield call(Api.fetch, '/products')
//     yield put({ type: 'PRODUCTS_RECEIVED', products })
//   }
//   catch(error) {
//     yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
//   }
// }
export function * register (action) {
  try {
    let res = yield call(RegisterAPI, action.payload)
    yield put({ type: REGISTER_SUCCESS, payload: res.data })
  } catch (error) {
    yield put({ type: REGISTER_FAIL, payload: error })
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
  yield takeEvery(REGISTER_SUCCESS, register)
}
