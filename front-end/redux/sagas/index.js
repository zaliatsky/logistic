import {takeEvery} from 'redux-saga/effects';
import fetchUser  from '../sagas/user'
import { loginActions } from '../../variables/actions'

const {
  CHECK_USER_REQUESTED
} = loginActions

export default function* sagas() {
  yield takeEvery(CHECK_USER_REQUESTED, fetchUser);
}
