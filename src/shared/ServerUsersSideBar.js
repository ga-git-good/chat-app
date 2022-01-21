import React, { useEffect, useState, useContext } from 'react'
import AppContext from '../context/context'
import { SET_SERVER_USERS } from '../context/action-types'
import ShowServerUsers from '../api/ShowServerUsers'
import ServerUser from './ServerUser'
import addUserToRoom from '../api/addUser'
import { toast } from 'react-toastify'

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

  const addUser = async (userId) => {
    if (!currentRoom || currentRoom === '') {
      toast('Please select a room in order to add users.')
      return
    }
    const res = await addUserToRoom(currentRoom, userId, token)
    if (res.status === 201) {
      toast('User successfully added to room!', {type: 'success'})
      return
    } else {
      toast('You may not add a user to that room.', {type: 'error'})
      return
    }
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
    updateUsers()
    // const intervalId = setInterval(updateUsers, 5000)
    // window.intervalId = intervalId
  }, [])

  useEffect(async () => {
    //console.log('server users: ', serverUsers)
    if (serverUsers) {
      setServerUsersJSX(serverUsers.map(user => (
        <li key={user._id} className='user-list-item'>
          <ServerUser name={user.userName} userId={user._id} add={addUser} status={user.status} />
        </li>
      )))
    }
  }, [serverUsers])

  return (
      <ul className='user-list'>
        {serverUsersJSX}
      </ul>
  )
}

export default ServerUserSideBar