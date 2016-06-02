import { combineReducers } from 'redux-immutable';

import webrtcReducer from 'containers/Webrtc/reducer';

import {
  ADD_NOTIFICATION,
  SET_NOTIFICATION_SYSTEM,
  SET_ROOM_NAME,
} from './constants';

function notificationSystem(state = null, action) {
  switch (action.type) {
    case SET_NOTIFICATION_SYSTEM:
      return action.ns;
    case ADD_NOTIFICATION: {
      const notification = Object.assign({
        position: 'br',
      }, action.data);
      state.addNotification(notification);
      return state;
    }
    default:
      return state;
  }
}

function roomName(state = '', action) {
  switch (action.type) {
    case SET_ROOM_NAME:
      return action.roomName;
    default:
      return state;
  }
}

export default combineReducers({
  notificationSystem,
  roomName,
  webrtc: webrtcReducer,
});
