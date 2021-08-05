import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom'
import { PostDelete } from '../redux/actions/authaction'
const Posts = ({ post }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  let userInfo = useSelector(state => state.user.users)
  console.log(userInfo?._id)

  const deleteposthere = id => {
    dispatch(PostDelete(id))
    window.location.reload()
  }
  return (
    <div>
      <Card
        style={{ width: '19rem', height: '300px' }}
        className=' shadow mt-5'
      >
        <Card.Body className='text-dark'>
          <Card.Text className='text-secondary '>
            Author {post.author}{' '}
            {userInfo?._id === post.user && (
              <i
                onClick={() => deleteposthere(post._id)}
                className='fas fa-trash-alt'
                style={{
                  cursor: 'pointer',
                  marginLeft: '115px',
                  color: 'red'
                }}
              ></i>
            )}
          </Card.Text>
          <hr />
          <p className='card-title'>{post.text} </p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Posts
