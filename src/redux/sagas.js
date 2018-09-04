import { all, fork } from 'redux-saga/effects';

import { watchLogout } from './auth';

export default function* root() {
  yield all([
    fork(watchLogout),
  ]);
}

