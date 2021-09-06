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
    await fetch(`${env.apiUrl}/auth/register`, {
      method: 'POST',
      body: { username, password }
    }).then(res => {
      console.log("Request complete! response:", res);
    });
  }

  async checkUser(username, password) {
    await fetch(`${env.apiUrl}/auth/login`, {
      method: 'POST',
      username,
      password,
    }).then(({ token = null, userId = null }) => {
      console.log(token, userId)
      return {token, userId}
    })
  }
}

export default new userStore()
