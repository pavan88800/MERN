import { Redirect } from 'react-router-dom'
import { put, call, takeLatest, delay } from 'redux-saga/effects'
import { LoginAPI, UserAPI } from '../api/loginApi'
import { AddPostAPI, GetPostsAPI } from '../api/postApi'
import { RegisterAPI } from '../api/registerApi'

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
  ADD_POST_REQUEST
} from '../types'

// Register
export function * register (action) {
  try {
    let res = yield call(RegisterAPI, action.payload)
    // console.log(res)
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
    // console.log(res)
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
    // console.log(res, 'Data successfully called Here....')
    // console.log(action.payload)
    // console.log('user successfully fetched data from action')
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

export function * getPost (action) {
  try {
    let res = yield call(GetPostsAPI, action.payload)
    // console.log(res, 'get post')
    // console.log(action.payload)
    // console.log('user successfully fetched data from action')
    yield put({
      type: POSTS_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data
    yield put({
      type: POST_FAIL,
      payload: errors
    })
  }
}

export function * addPost (action) {
  console.log(action.payload.token)
  try {
    let res = yield call(AddPostAPI, action.payload.token, action.payload)
    console.log(res.data)
    console.log('user successfully fetched data from action')
    yield put({
      type: ADD_POST,
      payload: res.data
    })
  } catch (err) {
    yield put({
      type: POST_FAIL,
      payload: err
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
}
