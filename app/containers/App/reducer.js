import {
  SET_NOTIFICATION_SYSTEM,
  SET_ROOM_NAME,
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  notificationSystem: null,
  roomName: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION_SYSTEM:
      return state
        .set('notificationSystem', action.ns);
    case SET_ROOM_NAME:
      return state
        .set('roomName', action.roomName);
    default:
      return state;
  }
}

export default appReducer;
