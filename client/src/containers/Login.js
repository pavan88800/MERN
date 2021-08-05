import React, { useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { userLogin } from '../redux/actions/authaction'
import api from '../utlis/axios'

const Login = ({ history }) => {
  const dispatch = useDispatch()
  let user = useSelector(state => state.loginUser)
  let { isAuthenticated, error, loading } = user

  console.log('user Form Login', user)

  console.log(isAuthenticated, 'User is authenticated')
  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  const { email, password } = input

  const change = e => {
    e.preventDefault()
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (email === '' || password === '') {
      alert('Please enter all values')
    } else {
      if (localStorage.getItem('token')) {
        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token.token, 'globally')
        api.defaults.headers.common['x-auth-token'] = token.token || token
      }
      dispatch(userLogin({ email, password }))
    }
  }

  if (isAuthenticated) {
    return <Redirect to='/home' />
  }

  return (
    <div className='center-width'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={6}>
            {error &&
              error?.map((error, i) => (
                <p className='alert alert-danger text-center' key={i}>
                  {error.msg}
                </p>
              ))}
            <Form>
              <h1>Login </h1>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  onChange={change}
                  name='email'
                  value={email}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  name='password'
                  onChange={change}
                  value={password}
                ></Form.Control>
              </Form.Group>

              {/* <Button type='submit' onClick={handleSubmit} variant='primary'>
                Login
              </Button> */}

              <Button
                onClick={e => handleSubmit(e)}
                className='btn btn-primary'
                type='button'
              >
                {loading && (
                  <span
                    className='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>
                )}{' '}
                Login
              </Button>
              <Row className='py-3'>
                <Col>
                  Have an Account? <Link to='/register'>Register</Link>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
