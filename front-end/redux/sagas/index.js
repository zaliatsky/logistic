import { takeLatest } from 'redux-saga/effects'
import { fetchUser, registerUser } from '../sagas/user'
import { loginActions } from '../../variables/actions'

const { CHECK_USER_REQUESTED, REGISTER_USER_REQUESTED } = loginActions

export default function* sagas() {
  yield takeLatest(CHECK_USER_REQUESTED, fetchUser)
  yield takeLatest(REGISTER_USER_REQUESTED, registerUser)
}
