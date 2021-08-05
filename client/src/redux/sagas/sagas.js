import { put, call, takeLatest, delay } from 'redux-saga/effects'
import { LoginAPI, UserAPI } from '../api/loginApi'
import { getPost, addPost, deletePost } from './postsagas'
import { RegisterAPI, UpdateAPI } from '../api/registerApi'

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGOUT_REQUEST,
  USER_REGISTER_REQUEST,
  GET_POST_REQUEST,
  POSTS_SUCCESS,
  POST_FAIL,
  ADD_POST,
  ADD_POST_REQUEST,
  DELETE_POST_REQUEST,
  USER_UPDATE_REQUEST_SUCCESS,
  USER_UPDATE_REQUEST
} from '../types'

// Register
export function * register (action) {
  try {
    let res = yield call(RegisterAPI, action.payload)
    console.log(res)
    delay(200)
    yield put({
      type: REGISTER_SUCCESS,
      payload: res.data.token
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

export function * logout () {
  yield put({
    type: USER_LOGOUT
  })
  localStorage.removeItem('token')
  window.location.href = '/login'
}

export function * userDetails (action) {
  try {
    let res = yield call(UserAPI, action.payload)
    yield put({
      type: USER_DETAILS_SUCCESS,
      payload: res.data.user
    })
  } catch (err) {
    const errors = err.response.data
    yield put({
      type: USER_DETAILS_FAIL,
      payload: errors
    })
  }
}

export function * updateUser (action) {
  try {
    let res = yield call(UpdateAPI, action.payload)
    console.log(res, 'from update user')
    delay(200)
    yield put({
      type: USER_UPDATE_REQUEST_SUCCESS,
      payload: res.data.token
    })
    localStorage.setItem('token', JSON.stringify(res.data))
  } catch (err) {
    console.log(err)
    delay(1000)
    const errors = err.response.data
    yield put({
      type: USER_DETAILS_FAIL,
      payload: errors
    })
  }
}

export function * watchAgeUp () {
  yield takeLatest(USER_REGISTER_REQUEST, register)
  yield takeLatest(USER_LOGIN_REQUEST, login)
  yield takeLatest(USER_LOGOUT_REQUEST, logout)
  yield takeLatest(USER_DETAILS_REQUEST, userDetails)
  yield takeLatest(GET_POST_REQUEST, getPost)
  yield takeLatest(ADD_POST_REQUEST, addPost)
  yield takeLatest(DELETE_POST_REQUEST, deletePost)
  yield takeLatest(USER_UPDATE_REQUEST, updateUser)
}
