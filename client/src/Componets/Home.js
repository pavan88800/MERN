import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import Header from '../containers/Header'
import Posts from '../containers/Posts'
import { getAllPosts } from '../redux/actions/authaction'
const Home = () => {
  const dispatch = useDispatch()
  // user token checks here
  let user = useSelector(state => state.loginUser)
  let { token } = user

  // Posts Data
  const post = useSelector(state => state.post)
  const { loading, posts } = post
  // componentdidupdate
  useEffect(() => {
    dispatch(getAllPosts(token))
  }, [token, dispatch])

  return (
    <div>
      <Header />
      <div className='container'>
        <h1 className='text-muted'>All Posts</h1>
        {loading ? (
          <h2>Loading Data....</h2>
        ) : (
          <Container>
            <Row>
              {posts.map(post => (
                <Col md={4} key={post._id}>
                  <Posts post={post} />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </div>
    </div>
  )
}

export default Home
