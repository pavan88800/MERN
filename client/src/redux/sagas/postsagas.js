import { put, call, takeLatest, delay } from 'redux-saga/effects'
import { POSTS_SUCCESS, POST_FAIL, ADD_POST, POST_DELETE } from '../types'
import { AddPostAPI, DeletePostAPI, GetPostsAPI } from '../api/postApi'
export function * getPost (action) {
  try {
    let res = yield call(GetPostsAPI, action.payload)
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
  try {
    let res = yield call(AddPostAPI, action.payload)
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

export function * deletePost (action) {
  console.log(action.payload)
  try {
    let res = yield call(DeletePostAPI, action.payload)
    yield put({
      type: POST_DELETE,
      payload: res.data
    })
  } catch (err) {
    yield put({
      type: POST_FAIL,
      payload: err
    })
  }
}
