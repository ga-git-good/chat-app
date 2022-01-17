import React, { useState, useContext } from 'react'
import AppContext from '../../context/context'
import { Redirect, useHistory } from 'react-router-dom'

import { changePassword } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ChangePassword = () => {
    const {state, dispatch} = useContext(AppContext)
    const history = useHistory()
    const { loggedIn, token } = state
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const onChangePassword = () => {

        const passwords = {
            old: oldPassword,
            new: newPassword
        }
    changePassword(passwords, token)
        .then((response) =>{
        // put toast here

        })
        .then(() => history.push('/'))
        .catch((error) => {
        setNewPassword('')
        setOldPassword('')
        //Failure toast here
        })
    }

    return (
        !loggedIn ? <Redirect to='/' /> :
        <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
            <h3>Change Password</h3>
            <Form >
            <Form.Group controlId='oldPassword'>
                <Form.Label>Old password</Form.Label>
                <Form.Control
                required
                name='oldPassword'
                value={oldPassword}
                type='password'
                placeholder='Old Password'
                onChange={(e) => setOldPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='newPassword'>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                required
                name='newPassword'
                value={newPassword}
                type='password'
                placeholder='New Password'
                onChange={(e) => setNewPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant='primary' type='button' onClick={onChangePassword}>Submit</Button>
            </Form>
        </div>
        </div>
    )
}

export default ChangePassword
