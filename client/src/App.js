import './App.css'
import Register from './containers/Register'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store/store'
import Login from './containers/Login'
import Home from './Componets/Home'
function App () {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={Register} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
