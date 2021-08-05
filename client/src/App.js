import './App.css'
import Register from './containers/Register'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store/store'
import Login from './containers/Login'
import Home from './Componets/Home'
import CreatePost from './containers/CreatePost'
import UserProfile from './containers/UserProfile'
import PrivateRoute from './utlis/PrivateRoute'
function App () {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <PrivateRoute path='/home' component={Home} />
            <Route exact path='/' component={Register} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/createPost' component={CreatePost} />
            <Route exact path='/userprofile' component={UserProfile} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
