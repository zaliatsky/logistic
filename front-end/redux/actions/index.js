import { loginActions } from '../../variables/actions'

const {
  CHECK_USER_REQUESTED,
  REGISTER_USER_REQUESTED
} = loginActions

export const checkUser = user => {
  console.log('user requested', user)
  return {
    type: CHECK_USER_REQUESTED,
    user
  }
}

export const registerUser = user => {
  return {
    type: REGISTER_USER_REQUESTED,
    user
  }
}
