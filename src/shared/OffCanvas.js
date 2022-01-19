import React, { useState ,Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import { Offcanvas, Button } from 'react-bootstrap'

import "../all-styles/OffCanvas.css"

const OffCanvas = ({user}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Hello there
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='start' className="OffCanvas-wrapper">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome ,  {user.userName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Fragment>
            <NavLink to='/change-password' className='nav-link' onClick={handleClose}>
              Change Password
            </NavLink>
            <NavLink to='/sign-out' className='nav-link'>
              Sign Out
            </NavLink>
          </Fragment>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffCanvas
