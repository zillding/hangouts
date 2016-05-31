import { put } from 'redux-saga/effects';
import io from 'socket.io-client';

import {
  setSocket,
} from './actions';

export default [
  setUpSocket,
];

export function* setUpSocket() {
  const socket = io();
  yield put(setSocket(socket));
}
