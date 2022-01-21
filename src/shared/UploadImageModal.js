import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink, Route } from 'react-router-dom'
import UploadImage from '../components/Main/UploadImage'

const UploadImageModal = ({title}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <NavLink to='/upload-image' className='nav-link' onClick={handleShow}>
        Upload Image
      </NavLink>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header >
          <Modal.Title className='changePass-modal-title'>Change Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Route path='/upload-image' render={(event) => <UploadImage closeModal={handleClose} />} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UploadImageModal
