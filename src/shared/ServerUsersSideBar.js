import React, { useEffect, useState, useContext } from 'react'
import AppContext from '../context/context'
import { SET_SERVER_USERS } from '../context/action-types'
import ShowServerUsers from '../api/ShowServerUsers'
import ServerUser from './ServerUser'
import addUserToRoom from '../api/addUser'

const ServerUserSideBar = ({currentRoom}) => {
  const { state, dispatch } = useContext(AppContext)
  const { serverUsers, token } = state
  const [serverUsersJSX, setServerUsersJSX] = useState(null)

  // useEffect(async () => {
  //   let usersArray
  //   const response = await ShowServerUsers(token)
  //   console.log('users array : ', response.data.user)
  //   usersArray = response.data.user
  //   await dispatch({
  //     type: SET_SERVER_USERS,
  //     payload: usersArray
  //   })
    
    
  // }, []);

  const addUser = (userId) => {
    console.log(`adding user ${userId} to room ${currentRoom}`)
    addUserToRoom(currentRoom, userId, token)
  }

  const updateUsers = async () => {
    // console.log('updating users...')
    let usersArray
    const response = await ShowServerUsers(token)
    // console.log('users array : ', response.data.user)
    usersArray = response.data.user
    await dispatch({
      type: SET_SERVER_USERS,
      payload: usersArray
    })
  }

  useEffect(() => {
    setInterval(updateUsers, 5000)
  }, [])

  useEffect(async () => {
    console.log('server users: ', serverUsers)
    setServerUsersJSX(serverUsers.map(user => (
      <li key={user._id} className='user-list-item'>
        <ServerUser name={user.userName} userId={user._id} add={addUser} status={user.status} />
      </li>
    )))
  }, [serverUsers])

  return (
      <ul className='user-list'>
        {serverUsersJSX}
      </ul>
  )
}

export default ServerUserSideBar