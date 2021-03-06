import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink, Route } from 'react-router-dom'
import ChangePassword from '../components/auth/ChangePassword'

const Modale = ({title}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <NavLink to='/change-password' className='nav-link' onClick={handleShow}>
        Change Password
      </NavLink>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className='changePass-modal-title'>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Route path='/change-password' render={() => <ChangePassword closeModal={handleClose} />} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Modale
