import React, {useState, useEffect} from "react";
import { Offcanvas, Button } from "react-bootstrap";

const  OffCanvas =  () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Hello there
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" data-bs-backdrop="true"> 
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas


/* 


 <Fragment>
    <NavLink to='/change-password' className='nav-link'>
      Change Password
    </NavLink>
    <NavLink to='/sign-out' className='nav-link'>
      Sign Out
    </NavLink>
  </Fragment>


*/