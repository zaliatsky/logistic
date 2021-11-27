import { NotificationManager } from 'react-notifications'
import env from '../variables/env'
import request  from '../helpers/request'
import {useRouter} from "next/router";

const loginService = requestData => {
  const requestUrl = `${env.apiUrl}/auth/login`
  const data = JSON.stringify(requestData.user)

  return request(requestUrl, 'POST', data )
    .then(response => {

      return response.json();
    })
    .then(({ token, message }) => {
      if (message) NotificationManager.error(message, 'Sign in error', 8000)
      if (token && !message) NotificationManager.success('Login success', '', 1000)
    })
}

export default loginService
