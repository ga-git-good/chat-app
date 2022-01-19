import apiUrl from '../apiConfig'
import axios from 'axios'
// import React, { useContext } from 'react'
// import AppContext from '../context/context'

const createRoom = (roomName, id, token) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/create-room',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      room: {
        name: roomName
      },
      userId: id
    }
  })
}

export default createRoom
