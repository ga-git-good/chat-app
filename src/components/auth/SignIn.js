import React, { useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import AppContext from '../../context/context'

import { toast } from 'react-toastify'

import { SET_TOKEN, SET_USER_ID, SET_SIGNEDIN, SET_USERNAME } from '../../context/action-types'

import { signIn } from '../../api/auth'

import { Form, Button } from 'react-bootstrap'

const SignIn = () => {
    const { state, dispatch } = useContext(AppContext)
    const { loggedIn } = state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSignIn = (event) => {
      event.preventDefault()

      const signInObj = {
          userName: username,
          password: password
      }

      signIn(signInObj)
        .then((res) => {
            // console.log('login response: ')
            // console.log(res.data, 'state: ', state)
            dispatch({
                type: SET_USER_ID,
                payload: res.data.user._id
            })
            dispatch({
                type: SET_TOKEN,
                payload: res.data.user.token
            })
            dispatch({
                type: SET_SIGNEDIN,
                payload: true
            })
            dispatch({
                type: SET_USERNAME,
                payload: res.data.user.userName
            })
        })
        .then(() =>{
          // toast alert here
        })
        .then(() => history.push('/'))
        .catch((error) => {
          setUsername('')
          setPassword('')
          //error toast here
        })
    }


  return (
      loggedIn ? <Redirect to='/' /> :
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign In</h3>
        <Form onSubmit={onSignIn}>
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
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default SignIn
