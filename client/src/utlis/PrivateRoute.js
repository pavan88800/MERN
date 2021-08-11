import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.loginUser)
  let { isAuthenticated, loading } = user

  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <h1>Loading.....</h1>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  )
}
export default PrivateRoute
