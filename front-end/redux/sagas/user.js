import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import env from '../../variables/env'
import { loginActions } from '../../variables/actions'
import loginService from '../../services/loginService'

const {
  CHECK_USER_SUCCEED,
  CHECK_USER_FAILED,
  REGISTER_USER_SUCCEED,
} = loginActions

function* loginSaga(payload) {
  try {
    const user = yield call(loginService, payload)

    yield put({type: CHECK_USER_SUCCEED, user })
  } catch (e) {
    console.log('check user error', e)
    yield put({type: CHECK_USER_FAILED, message: e.message})
  }
}

export default loginSaga
