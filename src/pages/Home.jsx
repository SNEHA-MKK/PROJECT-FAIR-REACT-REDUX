import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../assets/down1.png'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'



function Home() {
  return (
    <>
      
      <div className='container-fluid w-100' style={{backgroundColor:'rgb(115, 151, 180)',minHeight:'100vh'}}>
          <Row className='align-items-center p-5'>
            <Col sm={12} md={6} mt-5>
              <h1 className='text-light' style={{fontSize:'70px'}}>Project Fair</h1>
              <p>One stop destiinations for all software development projects</p>
              <button className='btn btn-warning me-3 mt-2'><Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
              <button className='btn btn-warning ps-3 mt-2'><Link to={'/dashbord'} style={{textDecoration:'none',color:'white'}}>Manage Projects<FontAwesomeIcon icon={faArrowRight} /></Link></button>
            </Col>
            <Col sm={12} md={6}>
              <img className='w-100' src={titleImage} alt="image"   height={'400px'}/>
            </Col>
          </Row>
      </div>

      <div>
        <h1 className='mt-5 text-center'>Explore Our Project</h1>
        <marquee scrollAmount={25}>
          <div className='d-flex'>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>   
          </div>
        </marquee>
        <Link to="/project" style={{textDecoration:'none'}}><p  className='text-center mt-4 text-danger'>See more projects</p></Link>
      </div>
    </>
  )
}

export default Home
