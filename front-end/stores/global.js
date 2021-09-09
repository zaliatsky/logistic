import { makeObservable, action, observable } from 'mobx'

class globalStore {
  isLoading = false

  constructor(isLoading) {
    makeObservable(this, {
      isLoading: observable,
      changeLoader: action
    })
    this.isLoading = isLoading
  }

  changeLoader(status) {
    this.isLoading = status
  }
}

export default new globalStore()
