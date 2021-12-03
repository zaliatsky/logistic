import { NotificationManager } from 'react-notifications'
import Router from 'next/router'
import env from '../variables/env'
import request from '../helpers/request'
import { useAuth } from '../helpers/auth'

const loginService = (requestData) => {
  const requestUrl = `${env.apiUrl}/auth/login`
  const data = JSON.stringify(requestData.user)
  const { login } = useAuth()
  console.error('here is auth hook', login)

  request(requestUrl, 'POST', data)
    .then((response) => {
      return response.json()
    })
    .then(({ token, message }) => {
      if (token) {
        // login(token)
        NotificationManager.success('Login success', '', 1000)
        setTimeout(() => {
          Router.push('/game')
        }, 2000)

        return { token }
      } else {
        NotificationManager.error(message, 'Login error', 8000)
      }
    })
}

const registerService = (requestData) => {
  const requestUrl = `${env.apiUrl}/auth/register`
  const data = JSON.stringify(requestData.user)

  request(requestUrl, 'POST', data)
    .then((response) => {
      return response.json()
    })
    .then(({ message, status }) => {
      if (status >= 300) {
        NotificationManager.error(message, 'Registration error', 1000)
      } else {
        NotificationManager.success(message, 'Registration success', 1000)
        setTimeout(() => {
          Router.push('/')
        }, 2000)
      }
    })
}

export { loginService, registerService }
