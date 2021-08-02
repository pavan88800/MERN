import Switch from 'react-bootstrap/esm/Switch'
import { useSelector } from 'react-redux'
import { Redirect, Route, Router } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.authOne)
  let { isAuthenticated } = user
  return (
    <Switch>
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login'
              }}
            />
          )
        }
      />
    </Switch>
  )
}
export default PrivateRoute
