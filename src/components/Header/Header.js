import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

import '../../all-styles/Header.scss'
import AppContext from '../../context/context'
import DropDown from '../../shared/DropDown'

const authenticatedOptions = (user) => {
  return (
    <>
      <DropDown user={user}/>
    </>
  )
}

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-in' className='link login'>
      Login
    </NavLink>
    <NavLink to='/sign-up' className='link register'>
      Register
    </NavLink>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <NavLink exact to='/' className='nav-link'>Home</NavLink>
//   </Fragment>
// )

const Header = () => {
  const { state, dispatch } = useContext(AppContext)
  const user = state

  return (
    <div className='header-wrapper'>
      <div className='logo-wrapper'>
        <NavLink to='/' className='link'>
          <span className='logo-text'>Chat APP</span>
        </NavLink>
      </div>

      <div className='links-group-1'>
        {user.loggedIn ? authenticatedOptions(user) : unauthenticatedOptions}
      </div>
    </div>
  )
}

export default Header
