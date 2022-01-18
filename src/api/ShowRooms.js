import apiUrl from '../apiConfig'
import axios from 'axios'

const showRooms = (token) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/show-rooms',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export default showRooms
