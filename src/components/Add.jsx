import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function Add() {
    const [videoDetails, setVideoDetails] = useState({
        title: "",
        language: "",
        github: "",
        website: "",
        overview: "",
        projectImage: ""
    })

    const [show, setShow] = useState(false);
    const [preview,setPreview] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //to clear  all data entered in the mpdal(cancel button0)
    const handleClose1 = ()=>{
        setVideoDetails(
            {
                title: "",
                language: "",
                github: "",
                website: "",
                overview: "",
                projectImage: ""
            }  
        )
        setPreview("")
    }

    //function to add project details
    const handleAdd = (e) =>{
        //avoid data loss
        e.preventDefault()

        const {title,language,github,website,overview,projectImage} = videoDetails
        if(!title || !language || !github || !website || !overview || !projectImage){
            toast.info('please fill the form completely')
        }else{
            toast.success('proceed')
        }
    }

    console.log(videoDetails);

    useEffect(()=>{
        //file converted url
        if(videoDetails.projectImage){
            setPreview(URL.createObjectURL(videoDetails.projectImage))
        }
    },[videoDetails.projectImage])

    console.log(preview);

    return (
        <>
            <Button onClick={handleShow} variant="primary">Add Project</Button>


            <Modal show={show} onHide={handleClose} size='lg' >
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Add Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6} sm={12} className='p-5'>
                            <label htmlFor="image">
                                <input id='image' type="file" style={{ display: 'none' }} onChange={(e) => setVideoDetails({ ...videoDetails, projectImage: e.target.files[0] })} />
                                <img src={preview?preview:
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzv7wiH8iCx0hammS-Cb65wYtcEUGPfUZZbg&usqp=CAU'} alt="no image" className='w-100' />
                            </label>
                        </Col>
                        <Col md={6} sm={12}>
                            <form>
                                <div className='mb-3 mt-5'><input onChange={(e) => setVideoDetails({ ...videoDetails, title: e.target.value })} value={videoDetails.title} type="text" className='form-control  w-100' placeholder=' Title' /></div>
                                <div className='mb-3'><input value={videoDetails.language} onChange={(e) => setVideoDetails({ ...videoDetails, language: e.target.value })} type="text" className='form-control  w-100 ' placeholder=' Language' /></div>
                                <div className='mb-3'><input value={videoDetails.github} onChange={(e) => setVideoDetails({ ...videoDetails, github: e.target.value })} type="text" className='form-control  w-100 ' placeholder=' Github' /></div>
                                <div className='mb-3'><input value={videoDetails.website} onChange={(e) => setVideoDetails({ ...videoDetails, website: e.target.value })} type="text" className='form-control  w-100 ' placeholder=' Website' /></div>
                                <div className='mb-3'><textarea value={videoDetails.overview} onChange={(e) => setVideoDetails({ ...videoDetails, overview: e.target.value })} rows={'20px'} className='form-control  w-100' placeholder=' Overview' /></div>
                            </form>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer >
                    <Button onClick={handleClose1} variant="warning">Cancel</Button>
                    <Button onClick={handleAdd} variant="success">Add</Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </>

    )
}

export default Add
