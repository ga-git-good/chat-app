import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import '../../all-styles/Header.css'
import AppContext from '../../context/context'
import OffCanvas from '../../shared/OffCanvas'



const authenticatedOptions = (
 <OffCanvas/>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-in' className='nav-link'>
      Login
    </NavLink>
    <NavLink to='/sign-up' className='nav-link'>
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
  console.log(state)
  const user = state

  return (
    <div className='header-wrapper'>
      <div className='brand'>
        <NavLink to='/' className='nav-link'>
          <span className='logo-text'>Chat GA</span>
        </NavLink>
      </div>

      <div className='nav-links-group-1'>
        {user.loggedIn ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div>
  )
}

export default Header
