import React, { useState ,Fragment} from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Dropdown, Modal } from 'react-bootstrap'

import Modale from './Modal'
import UploadImageModal from './UploadImageModal'
import ChangePassword from '../components/auth/ChangePassword'


const DropDown = ({user}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
    <Dropdown className='parent-dropdown-wrapper'>
        <Dropdown.Toggle  className='dropdown-username'>
          {user.userName}
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown-menu' >
          {/* <NavLink to='/upload-image' className='nav-link'>
            Upload image
          </NavLink> */}
          <UploadImageModal />
          <Modale />


          <Dropdown.Divider className='divider'/>
          <NavLink to='/sign-out' className='nav-link'>
            Sign Out
          </NavLink>
        </Dropdown.Menu>
      </Dropdown>


    
    </>
  )
}

export default DropDown
