import { combineReducers } from 'redux-immutable';

import webrtcReducer from 'containers/Webrtc/reducer';

import { SET_ROOM_NAME } from './constants';

function roomName(state = '', { type, payload }) {
  switch (type) {
    case SET_ROOM_NAME:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  roomName,
  webrtc: webrtcReducer,
});
