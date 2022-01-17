import React, { Fragment, useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import AppContext from '../../context/context'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>Home</NavLink>
  </Fragment>
)

const Header = () => {
  const { state, dispatch } = useContext(AppContext)
  console.log(state)
  const user = state
  // return (

  // <Navbar bg='primary' variant='dark' expand='md'>
  //   <Navbar.Brand>
  //     <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>ChatGA</Link>
  //   </Navbar.Brand>
  //   <Navbar.Toggle aria-controls='basic-navbar-nav' />
  //   <Navbar.Collapse id='basic-navbar-nav'>
  //     <Nav className='ml-auto'>
  //       {user.loggedIn && (
  //         <span className='navbar-text mr-2'>Welcome, {user.email}</span>
  //       )}
  //       {alwaysOptions}
  //       {user.loggedIn ? authenticatedOptions : unauthenticatedOptions}
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>
  // )
  return (
  <Container className='main-content-window'>
    <Row>
      <Col className='brand'>
        <Link to='/' style={{ color: '#000', textDecoration: 'none' }}>ChatGA</Link>
      </Col>
      <Col>
        {user.loggedIn && (
          <span className='navbar-text mr-2'>Welcome, {user.userName}</span>
        )}
        {alwaysOptions}
        {user.loggedIn ? authenticatedOptions : unauthenticatedOptions}
      </Col>
    </Row>
  </Container>
  )
}

export default Header
