import {
  ADD_NOTIFICATION,
  SET_NOTIFICATION_SYSTEM,
  SET_ROOM_NAME,
} from './constants';

export const addNotification = data => ({
  type: ADD_NOTIFICATION,
  data,
});

const setNotificationSystem = ns => ({
  type: SET_NOTIFICATION_SYSTEM,
  ns,
});

export const setRoomName = roomName => ({
  type: SET_ROOM_NAME,
  roomName,
});

export default dispatch => ({
  setNotificationSystem: ns => dispatch(setNotificationSystem(ns)),
});
