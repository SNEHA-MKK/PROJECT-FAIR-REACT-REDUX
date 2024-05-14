import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import image1 from '../assets/addPro.jpeg'



function EditProject() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
       <FontAwesomeIcon onClick={handleShow} icon={faPenToSquare} className='me-3  text-info mx-3'/>


       <Modal show={show} onHide={handleClose} size='lg' >
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Edit Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6} sm={12} className='p-5'>
                            <label htmlFor="image">
                                <input id='image' type="file" style={{ display: 'none' }} />
                                <img src={image1} alt="no image" className='w-100' />
                            </label>
                        </Col>
                        <Col md={6} sm={12}>
                            <form>
                                <div className='mb-3 mt-5'><input type="text" className='form-control  w-100' placeholder=' Title' /></div>
                                <div className='mb-3'><input type="text" className='form-control  w-100 ' placeholder=' Language' /></div>
                                <div className='mb-3'><input type="text" className='form-control  w-100 ' placeholder=' Github' /></div>
                                <div className='mb-3'><input type="text" className='form-control  w-100 ' placeholder=' Website' /></div>
                                <div className='mb-3'><textarea rows={'20px'} className='form-control  w-100' placeholder=' Overview' /></div>
                            </form>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer >
                    <Button variant="warning">Cancel</Button>
                    <Button variant="success">Update</Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default EditProject
