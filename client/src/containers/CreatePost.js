import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AddPost } from '../redux/actions/authaction'
import Header from './Header'

const CreatePost = () => {
  const dispatch = useDispatch()
  let user = useSelector(state => state.loginUser)
  let { token } = user
  const [post, setPost] = useState({
    text: ''
  })
  let { text } = post
  const handleSubmit = e => {
    e.preventDefault()
    if (text === '') {
      alert('Enter your post ')
    } else {
      dispatch(AddPost(token, { post }))

      console.log(post)
    }
  }
  return (
    <div>
      <Header />
      <div className='container'>
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