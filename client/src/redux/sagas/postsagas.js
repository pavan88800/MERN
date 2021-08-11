import { put, call } from 'redux-saga/effects'
import {
  POSTS_SUCCESS,
  POST_FAIL,
  ADD_POST,
  POST_DELETE,
  POST_UPDATE_REQUEST_SUCCESS,
  POST_UPDATE_REQUEST_FAIL,
  GET_SINGLE_POST_SUCCESS
} from '../types'
import {
  AddPostAPI,
  DeletePostAPI,
  GetPostsAPI,
  SinglePostAPI,
  UpdatePost
} from '../api/postApi'
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

export function * singlePost (action) {
  try {
    let res = yield call(SinglePostAPI, action.payload)
    yield put({
      type: GET_SINGLE_POST_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    yield put({
      type: POST_FAIL,
      payload: err
    })
  }
}
export function * updatePost (action) {
  try {
    let res = yield call(UpdatePost, action.payload.id, action.payload)
    yield put({
      type: POST_UPDATE_REQUEST_SUCCESS,
      payload: res.data
    })
    console.log(res)
  } catch (err) {
    yield put({
      type: POST_UPDATE_REQUEST_FAIL,
      payload: err
    })
  }
}
export function * deletePost (action) {
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
