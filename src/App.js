import React, { Component, Fragment, useReducer } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import AppContext from './context/context'
import reducer from './context/reducer'

import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

const initialState = {
    loggedIn: false,
    userId: null,
    token: null,
    shouldSaveState: false
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

    return (
			<>
				<Header />
				<main className='container'>
					<Route path='/sign-up' component={SignUp} />
					<Route path='/sign-in' component={SignIn} />
					<Route path='/sign-out' component={SignOut} />
					<Route path='/change-password' component={ChangePassword} />
				</main>
			</>
		)
  }


export default App
