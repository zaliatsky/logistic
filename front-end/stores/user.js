import { makeObservable, action, flow, observable } from 'mobx'
import env from "../variables/env"
import request from "../helpers/request"

class userStore {
  user = {}
  nickname = ''

  constructor() {
    makeObservable(this, {
      user: observable,
      nickname: observable,
      login: action,
      logout: action,
      registerUser: flow,
      checkUser: flow
    })
  }

  login(userId, token) {
    this.user = { userId, token }
  }

  logout() {
    this.user = {}
  }

  *registerUser(username, password) {
    const data = JSON.stringify({username, password})
    const response = yield request(`${env.apiUrl}/auth/register`, 'POST', data)

    return response.json()
  }

  *checkUser(username, password) {
    const data = JSON.stringify({username, password})
    const response = yield request(`${env.apiUrl}/auth/login`, 'POST', data)

    return response.json()
  }
}

export default new userStore()
