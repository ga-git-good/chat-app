import React, { useEffect, useReducer } from 'react'
import { Route } from 'react-router-dom'
import AppContext from './context/context'
import reducer from './context/reducer'
import { ToastContainer } from 'react-toastify'

import Header from './components/Header/Header'
import MainContent from './components/Main/MainContent'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import 'react-toastify/dist/ReactToastify.css'


const initialState = {
    loggedIn: false,
    userId: null,
		userName: null,
    token: null,
    shouldSaveState: false,
		userName: null,
		rooms: [],
		serverUsers: [],
		cachedPfps: []
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
		
    return (
				<AppContext.Provider value={{ state, dispatch }}>
					<ToastContainer />
					<Header />
					<main className='container'>
						<Route path='/sign-up' component={SignUp} />
						<Route path='/sign-in' component={SignIn} />
						<Route path='/sign-out' component={SignOut} />
            {/* Change Password is running in shared/Modal component */}
					</main>
					
					{state.loggedIn ? <MainContent /> : ''}
				</AppContext.Provider>
		)
  }


export default App

// add bill and hanif