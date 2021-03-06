import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { authUser } from '../redux/reducers/authReducers'
import { LoginUser, userDetailsReducer } from '../redux/reducers/loginReducer'
import { postReducer } from '../redux/reducers/postReducer'
import { watchAgeUp } from '../redux/sagas/sagas'
const sagaMiddleware = createSagaMiddleware()
const initialState = {}

const reducer = combineReducers({
  authOne: authUser,
  loginUser: LoginUser,
  user: userDetailsReducer,
  post: postReducer
})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(watchAgeUp)

export default store
