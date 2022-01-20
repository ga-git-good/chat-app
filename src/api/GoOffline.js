import apiUrl from '../apiConfig'
import axios from 'axios'

const goOffline = (token) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/go-offline',
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
}

export default goOffline
