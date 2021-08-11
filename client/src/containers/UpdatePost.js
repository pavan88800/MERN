import React, { useState, useEffect } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  AddPost,
  GetSingleUserID,
  PostUpdate
} from '../redux/actions/authaction'
import Header from './Header'
const UpdatePost = ({ history }) => {
  const dispatch = useDispatch()
  const [post, setPost] = useState({
    text: ''
  })
  const { text } = post
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('')
  const Userpost = useSelector(state => state.post)
  let { id } = useParams()
  console.log(Userpost)
  useEffect(() => {
    setPost({
      text: Userpost.post?.text
    })
    dispatch(GetSingleUserID(id))
  }, [Userpost.post?.text, dispatch, id])

  const handleSubmit = e => {
    e.preventDefault()
    if (text === '') {
      setMessage('Enter your post to update...')
      setColor('danger')
    } else {
      dispatch(PostUpdate(id, { post }))
      console.log(text)
      setMessage('Post updated successfully...')
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
        <h2>Update Post</h2>
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
          <Button
            className='btn btn-warning text-white'
            onClick={e => handleSubmit(e)}
          >
            Update Post
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default UpdatePost
