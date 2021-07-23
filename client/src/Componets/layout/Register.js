import React, { useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
const Register = () => {
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
  const getData = e => {
    e.preventDefault()
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      dateofbirth === '' ||
      username === '' ||
      dateofbirth === ''
    ) {
      alert('Enter the All fildes')
    } else {
      console.log(input)
    }
  }
  return (
    <div className='center-width'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={6}>
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

              <Button type='submit' onClick={getData} variant='primary'>
                Register
              </Button>

              <Row className='py-3'>
                <Col>
                  Have an Account? <a href='/login'>Login</a>
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