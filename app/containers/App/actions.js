import {
  ADD_NOTIFICATION,
  SET_NOTIFICATION_SYSTEM,
  SET_ROOM_NAME,
} from './constants';

export function addNotification(data) {
  return {
    type: ADD_NOTIFICATION,
    data,
  };
}

function setNotificationSystem(ns) {
  return {
    type: SET_NOTIFICATION_SYSTEM,
    ns,
  };
}

export function setRoomName(roomName) {
  return {
    type: SET_ROOM_NAME,
    roomName,
  };
}

export default dispatch => ({
  setNotificationSystem: ns => dispatch(setNotificationSystem(ns)),
});
