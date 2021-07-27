import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { authUser } from '../redux/reducers/authReducers'
import { watchAgeUp } from '../redux/sagas/sagas'
const sagaMiddleware = createSagaMiddleware()

const initialState = {}

const reuder = combineReducers({
  auth: authUser
})

const store = createStore(
  reuder,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(watchAgeUp)
export default store
