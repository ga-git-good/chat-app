import apiUrl from '../apiConfig'
import axios from 'axios'

const showRoomUsers = (token, roomID) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/show-room-users',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
        roomID
    }
  })
}

export default showRoomUsers