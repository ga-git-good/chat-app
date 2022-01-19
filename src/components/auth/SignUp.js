import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import AppContext from '../../context/context'
import { SET_TOKEN, SET_USER_ID } from '../../context/action-types'
import { useHistory } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import "../../all-styles/SignUp.css"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = () => {
    const { state, dispatch } = useContext(AppContext)
    const { loggedIn } = state
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passConfirm, setPassConfirm] = useState('')


    const onSignUp = () => {
        const apiObj = {
            email: email,
            userName: username,
            password: password,
            passwordConfirmation: passConfirm
        }
        signUp(apiObj)
            .then(() => signIn(apiObj))
            .then((res) => {
                dispatch({
                    type: SET_USER_ID,
                    payload: res.data.user.id
                })
                dispatch({
                    type: SET_TOKEN,
                    payload: res.data.user.token
                })
            })
            .then(() =>{
                // success toast here
            })
            .then(() => history.push('/'))
            .catch((error) => {
                setEmail('')
                setUsername('')
                setPassword('')
                setPassConfirm('')
                // toast error here
            })
        }

    return (
        loggedIn ? <Redirect to='/' /> :
        <div className='row signup-parent-wrapper'>
        <div className='signup-form-wrapper'>
            <h3 className="signup-header3 ">Sign Up <p className="all-fields-required">All Fileds are *required</p></h3>
            
            <Form className="signup-form">
            <Form.Group controlId='email'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                required
                type='email'
                name='email'
                value={email}
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                required
                type='username'
                name='username'
                value={username}
                placeholder='Enter username'
                onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                required
                name='password'
                value={password}
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='passwordConfirmation'>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                required
                name='passwordConfirmation'
                value={passConfirm}
                type='password'
                placeholder='Confirm Password'
                onChange={(e) => setPassConfirm(e.target.value)}
                />
            </Form.Group>
            <Button onClick={onSignUp} variant='primary' type='button'>Submit</Button>
            </Form>
        </div>
        </div>
    )
}

export default SignUp
