import { SET_NOTIFICATION_SYSTEM } from './constants';

export function setNotificationSystem(ns) {
  return {
    type: SET_NOTIFICATION_SYSTEM,
    ns,
  };
}
