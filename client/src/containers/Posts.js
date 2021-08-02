import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const Posts = ({ post }) => {
  let userInfo = useSelector(state => state.user.users)
  console.log(userInfo?._id)
  console.log(post)
  return (
    <div>
      <Card style={{ width: '19rem' }} className='mt-5'>
        <Card.Body>
          <Card.Title>{post.text}</Card.Title>
          {console.log(userInfo?._id, 'id')}
          {console.log(post.user, 'user ')}
          <Card.Text className='text-muted'>Author {post.author}</Card.Text>
          {userInfo?._id === post.user && (
            <Button variant='danger'>Delete</Button>
          )}
          {/* <Button variant='primary'>Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Posts
