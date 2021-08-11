import React, { useEffect } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../containers/Header'
import Posts from '../containers/Posts'
import { getAllPosts } from '../redux/actions/authaction'
import api from '../utlis/axios'

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
    if (localStorage.getItem('token')) {
      const token = JSON.parse(localStorage.getItem('token'))

      api.defaults.headers.common['x-auth-token'] = token.token || token
    }
    dispatch(getAllPosts(token))
  }, [token, dispatch])

  return (
    <div>
      <Header />
      <div className='container'>
        <h1 className='text-muted'>All Posts</h1>

        {loading ? (
          <Spinner
            animation='border'
            variant='dark'
            style={{
              width: '100px',
              height: '100px',
              margin: 'auto',
              display: 'block',
              marginTop: '250px'
            }}
          />
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
