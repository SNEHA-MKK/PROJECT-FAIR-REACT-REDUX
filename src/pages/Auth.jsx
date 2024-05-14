import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/loginImg1.png'

import Form from 'react-bootstrap/Form';



function Auth({ register }) {
  const registerForm = register ? true : false

  return (
    <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '100vh' }}>

      <div className='w-75 container'>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}><h5><FontAwesomeIcon icon={faArrowLeft} />Back to home</h5></Link>
        <div style={{ backgroundColor: 'rgb(115, 151, 180)' }} className='rounded  mt-3'>
          <Row>
            <Col sm={12} md={6} className='p-5'>
              <img src={logo} alt="no image" className='w-100' />
            </Col>

            <Col sm={12} md={6} className='d-flex justify-content-center align-items-center flex-column'>
              <h2 className='text-light'><FontAwesomeIcon className='fa-2x' icon={faStackOverflow} />Project Fair</h2>

              {registerForm ?
                <h5 className='text-light'>Sign Up to Your Account</h5>
                :
                <h5 className='text-light'>Sign In to Your Account</h5>}


              <Form className='mt-5 w-75'>

                {registerForm &&
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Control type="text" placeholder="Username" className='form-control' />
                  </Form.Group>}

                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Control type="Email" placeholder="Email id " />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Control type='password' placeholder="Password" />
                </Form.Group>

                {registerForm ?
                  <div>
                    <Button variant='warning' type='submit' className='w-100'>Register</Button>
                    <p className='text-light mt-3'>Already a user? click here to  <Link style={{ textDecoration: 'none', color: 'black' }} to={'/login'} className='text-denger'>Login</Link></p>
                  </div>
                  :
                  <div>
                    <Button variant='warning' type='submit' className='w-100'>login</Button>
                    <p className='text-light mt-3'>New user? click here to <Link style={{ textDecoration: 'none', color: 'black' }} to={'/register'} className='text-denger'>Register</Link></p>
                  </div>}

              </Form>

            </Col>
          </Row>
        </div>
      </div>

    </div>
  )
}

export default Auth
