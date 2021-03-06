import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddPost } from '../redux/actions/authaction'
import Header from './Header'

const CreatePost = ({ history }) => {
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('')
  const dispatch = useDispatch()

  const [post, setPost] = useState({
    text: ''
  })
  let { text } = post
  const handleSubmit = e => {
    e.preventDefault()
    if (text === '') {
      setMessage('Enter your post')
      setColor('danger')
    } else {
      dispatch(AddPost({ post }))
      setMessage('Post Added successfully')
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
        <h2>Create Posts</h2>
        <Form className='mt-5'>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Control
              as='textarea'
              placeholder='Create A Posts ....'
              rows={4}
              onChange={e =>
                setPost({
                  text: e.target.value
                })
              }
              value={text}
              name={text}
              required
            />
          </Form.Group>
          <Button className='btn btn-primary' onClick={e => handleSubmit(e)}>
            Add Post
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CreatePost
