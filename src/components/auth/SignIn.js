import React, { useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import AppContext from '../../context/context'
import { SET_TOKEN, SET_USERNAME, SET_USER_ID } from '../../context/action-types'

import { toast } from 'react-toastify'

import { signIn } from '../../api/auth'

import { Form, Button } from 'react-bootstrap'

const SignIn = () => {
    const { state, dispatch } = useContext(AppContext)
    const { loggedIn } = state
    const history = useHistory()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const onSignIn = () => {
      const signInObj = {
          email: email,
          password: password
      }
      try {
        const response = await signIn(signInObj)
        if (response.status === 201) {
          dispatch({
            type: SET_USER_ID,
            payload: response.data.user._id,
          })
          dispatch({
            type: SET_TOKEN,
            payload: response.data.user.token,
          })
          dispatch({
            type: SET_USERNAME,
            payload: response.data.user.userName
          })
          toast(`User ${response.data.user.userName} signed in successfully`, { type: 'success' })
          history.push('/')
        } else {
          throw 'Sign-in failed'
        }
      } catch (err) {
        toast(err, { type: 'error' })
        setEmail('')
        setPassword('')
      }
    }


  return loggedIn ? (
		<Redirect to='/' />
	) : (
		<div className='row'>
			<div className='col-sm-10 col-md-8 mx-auto mt-5'>
				<h3>Sign In</h3>
				<Form>
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
					<Button onClick={onSignIn} variant='primary' type='button'>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default SignIn
