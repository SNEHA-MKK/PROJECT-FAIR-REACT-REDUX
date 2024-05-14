import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import user from '../assets/userIcon.jpeg'
import { useState } from 'react';
//collapse of react bootstrap
import Collapse from 'react-bootstrap/Collapse';

function Profile() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='my-5 mx-4 shadow p-4 rounded' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <div className='d-flex justify-content-between'>
                    <h3 className='mt-3'>Profile</h3>
                    <div className='mt-3'>
                        <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><FontAwesomeIcon icon={faAngleDown} /></button>
                    </div>
                </div>

                <Collapse in={open}>

                    <div>
                        <div className=' d-flex justify-content-center align-items-center flex-column'>
        
                            <img src={user} alt="" width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} />
        
                            <div className='mb-3 w-100'>
                                <input type="text" placeholder='Github' className='form-control w-100' />
                            </div>
        
                            <div className='mb-3 w-100'>
                                <input type="text" placeholder='website' className='form-control w-100' />
                            </div>
        
                            <div className='mb-3 w-100'>
                                <button className='btn w-100' style={{ backgroundColor: 'green', color: 'white' }}>Update</button>
                            </div>
        
                        </div>
                    </div>

                </Collapse>

            </div>
        </>
    )
}

export default Profile


