import React, { useReducer } from 'react'
import { Route } from 'react-router-dom'
import AppContext from './context/context'
import reducer from './context/reducer'

import "./all-styles/App.css"

import Header from './components/Header/Header'
import MainContent from './components/Main/MainContent'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

const initialState = {
    loggedIn: false,
    userId: null,
		userName: null,
    token: null,
    shouldSaveState: false,
		userName: null,
		rooms: []
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
				<AppContext.Provider value={{ state, dispatch }}>
					<Header />
					<main className='container'>
						<Route path='/sign-up' component={SignUp} />
						<Route path='/sign-in' component={SignIn} />
						<Route path='/sign-out' component={SignOut} />
						<Route path='/change-password' component={ChangePassword} />
					</main>
					{state.loggedIn ? <MainContent /> : ''}
					
				</AppContext.Provider>
		)
  }


export default App

// add bill and hanif