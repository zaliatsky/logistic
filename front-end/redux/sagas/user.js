import { call, put } from 'redux-saga/effects'
import { loginActions } from '../../variables/actions'
import { loginService, registerService } from '../../services/userService'

const {
  CHECK_USER_SUCCEED,
  CHECK_USER_FAILED,
  REGISTER_USER_SUCCEED,
  REGISTER_USER_FAILED,
} = loginActions

function* fetchUser(action) {
  try {
    const user = yield call(loginService, action)
    console.log('SAGA USER REQUESTED', user, action)
    yield put({ type: CHECK_USER_SUCCEED, user })
  } catch (e) {
    yield put({ type: CHECK_USER_FAILED, message: e.message })
  }
}

function* registerUser(action) {
  try {
    const user = yield call(registerService, action)

    yield put({ type: REGISTER_USER_SUCCEED, user })
  } catch (e) {
    yield put({ type: REGISTER_USER_FAILED, message: e.message })
  }
}

export { fetchUser, registerUser }
