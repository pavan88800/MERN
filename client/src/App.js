import './App.css'
import Register from './containers/Register'
import { Provider, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store/store'
import Login from './containers/Login'
import Home from './Componets/Home'
import PrivateRoute from './utlis/PrivateRoute'
import Demo from './Componets/Demo'
import CreatePost from './containers/CreatePost'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/home' component={Home} />
            <Route exact path='/' component={Register} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/createPost' component={CreatePost} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
