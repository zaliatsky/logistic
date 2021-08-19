import { makeAutoObservable } from 'mobx'

class userStore {
  constructor() {
    this.user = {}
    makeAutoObservable(this)
  }

  login(userId, token) {
    this.user = { userId, token }
  }

  logout() {
    console.log('here we use logout', this)
    this.user = {}
  }

  getUserData() {
    return this.user
  }
}

export default new userStore()
