import React, { useState, useEffect } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateUser } from '../redux/actions/authaction'
import Header from './Header'

const UserProfile = ({ history }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('')

  let userInfo = useSelector(state => state.user.users)

  let user = useSelector(state => state.loginUser)
  let { token } = user

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      setName(userInfo.name)
      setEmail(userInfo.email)
      setUserName(userInfo.username)
    }
  }, [userInfo, history])

  const handleSubmit = e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
      setColor('danger')
    } else {
      dispatch(UpdateUser({ name, email, username, password }))
      setMessage('User updated successfully')
      setColor('success')
      setTimeout(() => {
        history.push('/home')
      }, 1000)
    }
  }
  return (
    <div>
      <Header />
      <div className='container'>
        {message && (
          <Alert className={`alert alert-${color} `}>{message}</Alert>
        )}
        <h2>USER PROFILE</h2>
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Enter name'
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='userName'>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type='username'
              value={username}
              onChange={e => setUserName(e.target.value)}
              placeholder='Enter User Name'
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter email'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Update Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Enter Password'
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default UserProfile
