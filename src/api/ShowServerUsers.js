import apiUrl from '../apiConfig'
import axios from 'axios'

const showServerUsers = (token) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/show-server-users',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export default showServerUsers
