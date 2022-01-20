import apiUrl from '../apiConfig'
import axios from 'axios'

const messageHistory = async (token, roomId) => {
	const response = await axios({
		method: 'GET',
		url: apiUrl + '/room/' + roomId,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
  if (response.data.length === 0) {
    return null
  }
  return response.data
}

export default messageHistory
