import {takeEvery} from 'redux-saga/effects';
import loginSaga  from '../sagas/user'
import { loginActions } from '../../variables/actions'

const {
  CHECK_USER_REQUESTED
} = loginActions

export default function* sagas() {
  yield takeEvery(CHECK_USER_REQUESTED, loginSaga);
}
