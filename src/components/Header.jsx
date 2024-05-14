import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header({ dash }) {

  return (
    <>
      {/* <div className='d-flex mb-5' style={{ backgroundColor: 'rgb(115, 151, 180)' }}>
        <h3 className='mb-3 ms-5 text-light '><FontAwesomeIcon className='ms-4' icon={faStackOverflow} /> Project Fair</h3>
        </div> */}
      <Navbar style={{ backgroundColor: 'rgb(115, 151, 180)' }} className='mb-5 '>
        <Container>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Navbar.Brand href="#home" className='text-light'>
              <FontAwesomeIcon className='ms-4 fa-2x' icon={faStackOverflow} />
              <span className='fs-3'>Project Fair</span>
            </Navbar.Brand>
          </Link>
          {dash &&
            <button className='btn btn-warning'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>}
        </Container>
      </Navbar>

    </>
  )
}

export default Header
