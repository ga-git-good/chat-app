import React, { useState , useContext} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Dropdown, Modal } from 'react-bootstrap'
import AppContext from '../context/context'
import { deleteUser } from '../api/auth'
import { ALL_TYPES } from '../context/action-types'


import Modale from './Modal'
import UploadImageModal from './UploadImageModal'
import ChangePassword from '../components/auth/ChangePassword'
import { toast } from 'react-toastify'


const DropDown = ({user}) => {
  const [show, setShow] = useState(false)
  const { state, dispatch } = useContext(AppContext)
  const { token } = state
  const history = useHistory()

  const handleDelete = async () => {
    const result = await deleteUser(token)
    if (result.status === 200) {
      toast('Successfully deleted account!')
      ALL_TYPES.forEach(action => {
        dispatch({
          type: action,
          payload: null
        })
      })
      history.push('/')
    } else {
      toast('Failed to delete account', {type: 'error'})
    }
  }

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
          

					<Dropdown.Divider className='divider' />
					<NavLink to='/sign-out' className='nav-link'>
						Sign Out
					</NavLink>
					<Dropdown.Divider className='divider' />
					<span
						onClick={() => handleDelete()}
						style={{ color: 'red', fontWeight: '800' }}
						className='nav-link'>
						Delete Account
					</span>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}

export default DropDown
