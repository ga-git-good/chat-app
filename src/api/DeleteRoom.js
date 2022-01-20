import apiUrl from '../apiConfig'
import axios from 'axios'
// import React, { useContext } from 'react'
// import AppContext from '../context/context'

const deleteRoom = (roomID, token) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/delete-room',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      roomID
    }
  })
}

export default deleteRoom
