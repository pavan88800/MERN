import React, { useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { userDetails, userLogout } from '../redux/actions/authaction'

const Header = ({ username }) => {
  const dispatch = useDispatch()
  let user = useSelector(state => state.loginUser)
  let { token, isAuthenticated } = user

  console.log('user from Header', token)
  let userInfo = useSelector(state => state.user.users)

  console.log(userInfo?.name)

  useEffect(() => {
    dispatch(userDetails(token))
  }, [token, dispatch])

  const handleClick = e => {
    e.preventDefault()
    dispatch(userLogout())
    console.log('logout request')
  }

  return (
    <>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/login'>
              <Navbar.Brand>Post</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='#'>
                  <Nav.Link>
                    <h6 className='text-white ml-5'>Hi {userInfo?.name} </h6>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='createpost'>
                  <Nav.Link>
                    <h6 className='text-white ml-5'>Create Post</h6>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login' onClick={e => handleClick(e)}>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Logout
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <br />
    </>
  )
}

export default Header
