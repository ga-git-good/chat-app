import React, { Component, useContext, useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import AppContext from '../../context/context'
import { SET_TOKEN, SET_USER_ID } from '../../context/action-types'

import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignIn = () => {
    const { state, dispatch } = useContext(AppContext)
    const { loggedIn } = state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignIn = () => {

    const signInObj = {
        email: email,
        password: password
    }

  signIn(signInObj)
    .then((res) => {
        console.log('login response: ')
        console.log(res.data)
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
      // toast alert here
    })
    .then(() => history.push('/'))
    .catch((error) => {
      setEmail('')
      setPassword('')
      //error toast here
    })
}


  return (
      loggedIn ? <Redirect to='/' /> :
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign In</h3>
        <Form >
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
          <Button onClick={onSignIn} variant='primary' type='button'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default SignIn
