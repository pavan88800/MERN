// import React, { useState } from 'react'
// import { Form, Button, Row, Col, Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// const Login = ({ history }) => {
//   const [input, setInput] = useState({
//     email: '',
//     password: ''
//   })
//   const { email, password } = input

//   const change = e => {
//     e.preventDefault()
//     setInput({ ...input, [e.target.name]: e.target.value })
//   }
//   const getData = async e => {
//     try {
//       e.preventDefault()
//       if (email === '' || password === '') {
//         alert('Enter the All fildes')
//       } else {
//         const config = {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }

//         // sned Data Here
//         let { data } = await axios.post(
//           'http://localhost:5000/api/users/login',
//           {
//             email,
//             password
//           },
//           config
//         )
//         console.log(data)
//         localStorage.setItem('userInfo', JSON.stringify(data))
//         history.push('/home')
//       }
//     } catch (error) {
//       console.error(error.message)
//     }
//   }
//   return (
//     <div className='center-width'>
//       <Container>
//         <Row className='justify-content-md-center'>
//           <Col xs={12} md={6}>
//             <Form>
//               <h1>Login </h1>
//               <Form.Group>
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control
//                   type='email'
//                   placeholder='Enter email'
//                   onChange={change}
//                   name='email'
//                   value={email}
//                 ></Form.Control>
//               </Form.Group>

//               <Form.Group>
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type='password'
//                   placeholder='Enter password'
//                   name='password'
//                   onChange={change}
//                   value={password}
//                 ></Form.Control>
//               </Form.Group>

//               <Button type='submit' onClick={getData} variant='primary'>
//                 Login
//               </Button>

//               <Row className='py-3'>
//                 <Col>
//                   Have an Account? <Link to='/register'>Register</Link>
//                 </Col>
//               </Row>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default Login
