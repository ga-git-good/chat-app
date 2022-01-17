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

  return (
  <Container className='main-content-window'>

    {/* First row - should only contain nav bar and header */}
    <Row>
      <Col className='brand col-4'>
        <Link to='/' style={{ color: '#000', textDecoration: 'none' }}>ChatGA</Link>
      </Col>
      <Col className='top-nav col-7'>
        {user.loggedIn && (
          <span className='navbar-text mr-2'>Welcome, {user.userName}</span>
        )}
        {alwaysOptions}
        {user.loggedIn ? authenticatedOptions : unauthenticatedOptions}
      </Col>
    </Row>

    {/* Second row - will contain rooms/DMs as well as main content */}
    <Row className='top-row'>
      <Col className='left-side-nav col-2'>
          <h4>Rooms</h4>
          <section className='open-rooms'>
            <a href='#'>Room 1</a>
          </section>
      </Col>
      <Col className='main-content col-9'>
          <section className='messages-window'>
            <ul className='messages'>
              <li>First Message</li>
              <li>Second Message</li>
            </ul>
          </section>
          <form className='message-input-window'>
            <input className='message-input' />
            <button className='send-message'>Send</button>
          </form>
      </Col>
    </Row>
  </Container>
  )
}

export default Header
