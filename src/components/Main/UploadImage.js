import React, { useState, useContext, createRef } from 'react'
import AppContext from '../../context/context'
import { Redirect, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { uploadPfp } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



const UploadImage = ({ closeModal }) => {
  const { state, dispatch } = useContext(AppContext)
  const { loggedIn } = state
  const imageRef = createRef()
  const onChangePfp = async (e) => {
    e.preventDefault()
    console.log(imageRef.current.files[0])
    const uploadStatus = await uploadPfp(imageRef.current.files[0], state.userName)
    console.log('upload status: ', uploadStatus)
    if (uploadStatus.status === 200) {
      toast.success('Profile image changed successfully!')
      closeModal()
      return true 
    } else {
      toast.error('Failed to change profile image')
      closeModal()
      return false
    }
  }

  return !loggedIn ? (
    <Redirect to='/' />
  ) : (
    <div className='row signup-parent-wrapper'>
      <div className='signup-form-wrapper'>
        <h3 className='signup-header3'>Change Profile Image</h3>
          <Form className='signup-form' onSubmit={onChangePfp}>
          <Form.Group>
							<Form.Label>Profile Picture</Form.Label>
							<Form.Control
								type='file'
								name='image'
								id='imagePicker'
								accept='image/*'
								multiple={false}
								//onChange={(e) => imagePicker(e)}
								ref={imageRef}
							/>
						</Form.Group>
						<Button variant='primary' type='submit'>
							Submit
						</Button>
          </Form>
      </div>
    </div>
  )
}

export default UploadImage