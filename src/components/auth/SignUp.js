import React, { useState, useContext, createRef } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import AppContext from '../../context/context'
import { SET_TOKEN, SET_USER_ID } from '../../context/action-types'
import { useHistory } from 'react-router-dom'

import { signUp, signIn, uploadPfp } from '../../api/auth'
import "../../all-styles/SignUp.scss"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const imgConfig = {
	quality: 0.2,
	maxWidth: 800,
	maxHeight: 600,
	autoRotate: true,
}

const SignUp = () => {
    const { state, dispatch } = useContext(AppContext)
    const { loggedIn } = state
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const imageRef = createRef()

    const onSignUp = async (e) => {
        e.preventDefault()
        console.log(imageRef.current)
        console.log(imageRef.current.files)
        //let resizedImage = await readAndCompressImage(imageRef.current.files[0], imgConfig)
        // const data = new FormData(e.target)
        const file = imageRef.current.files[0]
        const type = file.name.split('.').pop()
        console.log(type)
        const apiObj = {
            email: email,
            userName: username,
            password: password,
            passwordConfirmation: passConfirm,
        }
        signUp(apiObj)
            .then(() => signIn(apiObj))
            .then((res) => {
                uploadPfp(imageRef.current.files[0], res.data.user.userName)
                dispatch({
                    type: SET_USER_ID,
                    payload: res.data.user._id
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

    return loggedIn ? (
			<Redirect to='/' />
		) : (
			<div className='row'>
				<div className='col-sm-10 col-md-8 mx-auto mt-5'>
					<h3>Sign Up</h3>
					<Form onSubmit={onSignUp}>
						<Form.Group>
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
						<Form.Group>
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
						<Form.Group>
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
						<Form.Group>
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

export default SignUp
