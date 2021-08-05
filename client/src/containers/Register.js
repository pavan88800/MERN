import React, { useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../redux/actions/authaction'

const Register = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.authOne)
  let { isAuthenticated, loading, error } = user

  const [input, setInput] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    dateofbirth: ''
  })
  const { name, email, password, dateofbirth, username } = input

  const change = e => {
    e.preventDefault()
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    if (name === '' || email === '' || password === '' || username === '') {
      alert('Please enter all values')
    } else {
      dispatch(userRegister({ username, name, email, password, dateofbirth }))
    }
  }

  if (isAuthenticated) {
    return <Redirect to='/login' />
  }
  return (
    <div className='center-width'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={6}>
            {error?.map((error, i) => (
              <p className='alert alert-danger text-center' key={i}>
                {error.msg}
              </p>
            ))}
            <Form>
              <h1>Sign Up</h1>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter name'
                  onChange={change}
                  name='name'
                  value={name}
                ></Form.Control>
              </Form.Group>

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
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='User Name'
                  name='username'
                  onChange={change}
                  value={username}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Date of Brith </Form.Label>
                <Form.Control
                  type='Date'
                  placeholder='Date of Brith'
                  onChange={change}
                  name='dateofbirth'
                  value={dateofbirth}
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
                Register
              </Button>
              <Row className='py-3'>
                <Col>
                  Have an Account? <Link to='/login'>Login</Link>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Register
