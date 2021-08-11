import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostDelete } from '../redux/actions/authaction'
const Posts = ({ post }) => {
  const dispatch = useDispatch()
  let userInfo = useSelector(state => state.user.users)

  const deleteposthere = id => {
    dispatch(PostDelete(id))
    window.location.reload()
  }
  return (
    <div>
      <Card
        style={{ width: '19rem', height: '300px', borderRadius: '20px' }}
        className=' shadow mt-5'
      >
        <Card.Body className='text-dark'>
          <Card.Text className='text-secondary '>
            Author {post.author}
            {userInfo?._id === post.user && (
              <>
                <i
                  onClick={() => deleteposthere(post._id)}
                  className='fas fa-trash-alt'
                  style={{
                    cursor: 'pointer',
                    marginLeft: '60px',
                    color: 'red'
                  }}
                ></i>
                <Link to={`/updatepost/${post._id}`}>
                  <i
                    className='fas fa-pen'
                    style={{
                      cursor: 'pointer',
                      marginLeft: '25px',
                      color: 'blue'
                    }}
                  ></i>
                </Link>
              </>
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
