import React from 'react'
import Add from './Add'
import EditProject from './EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'




function MyProject1() {
    return (
        <div className='m-5 shadow p-4 rounded'>
            <div className="d-flex">
                <h3 className='text-success mt-4'>My Project</h3>
                <div className='ms-auto mt-4'>
                    <Add />
                </div>
            </div>


            <div className=' mt-4 d-flex shadow p-3 rounded bg-light'>
                <h5>Portfolio-Ana Steel</h5>
                <div className='ms-auto d-flex'>
                    <EditProject />                 
                    <FontAwesomeIcon icon={faGithub} className='me-3 text-success mx-3' />
                    <FontAwesomeIcon icon={faTrash} className='text-danger mx-3' />
                </div>
            </div>
            

        </div>
    )
}

export default MyProject1
