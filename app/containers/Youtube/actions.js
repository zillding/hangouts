import {
  SET_CONNECTED,
  TOGGLE_SIDEBAR,
} from './constants';

export function setConnected(connected) {
  return {
    type: SET_CONNECTED,
    connected,
  };
}

export function toggleSidebar() {
  return { type: TOGGLE_SIDEBAR };
}
