import React, { useEffect, userState } from 'react'
import AppContext from '../context/context'
import { SET_SERVER_USERS } from '../context/action-types'
import showServerUsers from '../api/showServerUsers'

const ServerUserSideBar = () => {
  const { state, dispatch } = useContext(AppContext)
  const { serverUsers, token } = state
  const [serverUsersJSX, setServerUsersJSX] = userState(null)

  useEffect(async () => {
    let usersArray
    const response = await showServerUsers(token)
    usersArray = response
    dispatch({
      type: SET_SERVER_USERS,
      payload: usersArray
    })
    setServerUsersJSX(serverUsers.map(user => (
      <li>
        <ServerUser name={user.name} status={user.status}></ServerUser>
      </li>
    )))
  }, []);

  return (
      <ul>
        {serverUsersJSX}
      </ul>
  )
}

export default ServerUserSideBar