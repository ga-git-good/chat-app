import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (credentials) => {
  console.log(credentials)
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up/',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation,
        userName: credentials.userName
      }
    }
  })
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
  return axios({
    url: apiUrl + '/change-password/',
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}
