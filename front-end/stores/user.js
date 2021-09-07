import { makeObservable, action, flow, observable } from 'mobx'
import env from "../variables/env";
import { NotificationManager } from "react-notifications";

class userStore {
  user

  constructor(user) {
    makeObservable(this, {
      user: observable,
      login: action,
      logout: action,
      registerUser: flow
    })
    this.user = user
  }

  login(userId, token) {
    this.user = { userId, token }
  }

  logout() {
    this.user = {}
  }

  async registerUser(username, password) {
    const data = JSON.stringify({username, password})
    const response = await fetch(`${env.apiUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })

    return response.json()
  }

  async checkUser(username, password) {
    const data = JSON.stringify({username, password})
    const response = await fetch(`${env.apiUrl}/auth/login`, {
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
