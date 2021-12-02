import { NotificationManager } from 'react-notifications'
import Router from 'next/router'
import env from '../variables/env'
import request  from '../helpers/request'

const loginService = requestData => {
  const requestUrl = `${env.apiUrl}/auth/login`
  const data = JSON.stringify(requestData.user)

  return request(requestUrl, 'POST', data )
    .then(response => {
      return response.json();
    })
    .then(({ token, message }) => {
      if (token && !message) {
        NotificationManager.success('Login success', '', 1000)

        return { token, message }
      } else {
        NotificationManager.error(message, 'Sign in error', 8000)
        throw new Error(message)
      }
    })
}

const registerService = requestData => {
  const requestUrl = `${env.apiUrl}/auth/register`
  const data = JSON.stringify(requestData.user)

  return request(requestUrl, 'POST', data )
    .then(response => {

      return response.json();
    })
    .then(({ message, status }) => {
      if (status >= 300) {
        NotificationManager.error(message, 'Registration error', 5000)
      } else {
        NotificationManager.success(message, 'Registration success', 5000)
        Router.push('/login')
      }
    })
}

export {
  loginService,
  registerService
}
