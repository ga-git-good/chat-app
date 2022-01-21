import { useContext, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import AppContext from '../../context/context'
import { ALL_TYPES } from '../../context/action-types'
import { signOut } from '../../api/auth'


const SignOut = () => {
    const { state, dispatch } = useContext(AppContext)
    const history = useHistory()
    const { loggedIn, token } = state

    useEffect(() => {
        clearInterval(window.intervalId)
        if (!loggedIn) {
            return
        }
        signOut(token)
            .finally(() => {
                // success toast here
            })
            .finally(() => {
                ALL_TYPES.forEach((type) => {
                    console.log(type)
                    dispatch({
                        type: type,
                        payload: null,
                    })
                })
            })
            .finally(() => history.push('/'))
    }, [])

    return !loggedIn ? <Redirect to='/' /> : null
}

export default SignOut
