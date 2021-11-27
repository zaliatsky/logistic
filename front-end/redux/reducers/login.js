import { loginActions } from '../../variables/actions'

const {
  CHECK_USER,
  REGISTER_USER
} = loginActions

const initialState = {
  token: null,
  accessToken: null
}

const loginReducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case CHECK_USER:
      return {
        ...state,
        user: action.payload
      }
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

export default loginReducer;
