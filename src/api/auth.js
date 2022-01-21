import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (credentials) => {
  //console.log(credentials)
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up/',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation,
        userName: credentials.userName,
        pfpType: credentials.pfpType
      }
    },
  })
}

export const deleteUser = (token) => {
  return axios({
		method: 'DELETE',
		url: apiUrl + '/delete-account',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}

export const uploadPfp = async (file, userName) => {
  const buffer = file
  //console.log('buffer:')
  //console.log(buffer)
  //console.log(buffer)
  const formData = new FormData()
	formData.append('pfp', buffer)
  const options = {
		method: 'POST',
		body: formData,
	}
  //console.log(options)
	return fetch(apiUrl + '/upload/' + userName, options)
}

export const signIn = (credentials) => {
  return axios({
    url: apiUrl + '/sign-in/',
    method: 'POST',
    data: {
      credentials: {
        userName: credentials.userName,
        password: credentials.password
      }
    }
  })
}

export const signOut = (token) => {
  return axios({
    url: apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const changePassword = (passwords, token) => {
  //console.log(passwords, token,"Hello thereerer");
  return axios({
    url: apiUrl + '/change-password/',
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      passwords: {
        old: passwords.old,
        new: passwords.new,
      }
    }
  })
}
