import { loginActions } from '../../variables/actions'

const {
  CHECK_USER_SUCCEED,
  CHECK_USER_FAILED,
  REGISTER_USER_SUCCEED,
  REGISTER_USER_FAILED,
} = loginActions

const initialState = {
  user: null,
}

const loginReducer = (state = initialState, action) => {
  const { type } = action
  console.group()
  console.log('HERE IS REDUCER ACTION', action)
  console.log('HERE IS STATE', state)
  console.groupEnd()

  switch (type) {
    case REGISTER_USER_SUCCEED:
      return state
    case REGISTER_USER_FAILED:
      return {
        ...state,
        user: null,
      }
    case CHECK_USER_SUCCEED:
      return {
        ...state,
        user: action.user.token,
      }
    case CHECK_USER_FAILED:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export default loginReducer
