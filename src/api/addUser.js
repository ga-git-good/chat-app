import apiUrl from '../apiConfig'
import axios from 'axios'
// import React, { useContext } from 'react'
// import AppContext from '../context/context'

const addUserToRoom = (roomId, userId, token) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/add-user-to-room',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		data: {
			roomId: roomId,
			userId: userId,
		},
	})
}

export default addUserToRoom
