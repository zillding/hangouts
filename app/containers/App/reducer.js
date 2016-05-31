import {
  SET_NOTIFICATION_SYSTEM,
  SET_ROOM_NAME,
  SET_SOCKET,
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  notificationSystem: null,
  roomName: '',
  socket: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION_SYSTEM:
      return state
        .set('notificationSystem', action.ns);
    case SET_ROOM_NAME:
      return state
        .set('roomName', action.roomName);
    case SET_SOCKET:
      return state
        .set('socket', action.socket);
    default:
      return state;
  }
}

export default appReducer;
