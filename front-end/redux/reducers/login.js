import { loginActions } from '../../variables/actions'

const {
  CHECK_USER_SUCCEED,
  CHECK_USER_FAILED,
  REGISTER_USER_SUCCEED,
  REGISTER_USER_FAILED
} = loginActions


const initialState = {
  user: null
}

const loginReducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case REGISTER_USER_SUCCEED:
      return {
        ...state,
        user: action.response
      }
    case REGISTER_USER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
      };
    case CHECK_USER_SUCCEED:
      return {
        ...state,
        isLoggedIn: true,
        user: action.response
      }
    case CHECK_USER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
