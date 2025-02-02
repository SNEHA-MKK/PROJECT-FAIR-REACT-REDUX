import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Profile from '../components/Profile'
import MyProject1 from '../components/MyProject1'


function Dashboard({dashboard}) {
  const dash =  dashboard
  return (
    <div>
      <Header dash={dash}/>

      <div className='mt-5'>
          <h3 className='ms-4'>Welcome <span className='text-warning'>User</span></h3>
          <Row className='mt-4'>
             <Col sm={12} md={8}>
                 <MyProject1/>  
             </Col>
             <Col sm={12} md={4}>
                 <Profile/>
             </Col>
          </Row>
      </div>

    </div>
  )
}

export default Dashboard
