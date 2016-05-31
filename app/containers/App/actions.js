import {
  SET_NOTIFICATION_SYSTEM,
  SET_ROOM_NAME,
  SET_SOCKET,
} from './constants';

export function setNotificationSystem(ns) {
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

export function setSocket(socket) {
  return {
    type: SET_SOCKET,
    socket,
  };
}
