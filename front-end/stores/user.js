import { makeObservable, action, flow, observable } from 'mobx'
import globalStore from './global'
import env from "../variables/env"

class userStore {
  user = {}
  nickname = ''

  constructor(user, nickname) {
    makeObservable(this, {
      user: observable,
      nickname: observable,
      login: action,
      logout: action,
      registerUser: flow,
      checkUser: flow
    })
    this.user = user
    this.nickname = nickname
  }

  login(userId, token) {
    this.user = { userId, token }
  }

  logout() {
    this.user = {}
  }

  *registerUser(username, password) {
    const data = JSON.stringify({username, password})
    const response = yield fetch(`${env.apiUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })

    return response.json()
  }

  *checkUser(username, password) {
    const data = JSON.stringify({username, password})
    const response = yield fetch(`${env.apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })

    return response.json()
  }
}

export default new userStore()
