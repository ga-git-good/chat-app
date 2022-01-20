import React, { useEffect, userState } from 'react'
import { SET_SERVER_USERS } from '../context/action-types';
import showServerUsers from '../api/showServerUsers';

const serverUserSideBar = () => {
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
    setServerUsersJSX(usersArray.map(user => (
      <li>
        { user.status === 'online' ? <i>Online</i> : <i>Offline</i> }
        <span>{`${ user.name }`}</span>
      </li>
    )))
  }, [serverUsers]);

  return (
      <ul>
        {serverUsersJSX}
      </ul>
  )
}

export default serverUserSideBar