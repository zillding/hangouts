import {
  SET_NOTIFICATION_SYSTEM,
} from './containers/App/constants';
import {
  SET_VOLUME,
  SET_WEBRTC,
} from './containers/Webrtc/constants';
import {
  SET_SOCKET,
  SET_PLAYER,
} from './containers/Youtube/constants';

const LARGE_OBJ = '<<LARGE_OBJ>>';

export const actionsBlacklist = [
  SET_VOLUME,
];

export function actionsFilter(action) {
  switch (action.type) {
    case SET_NOTIFICATION_SYSTEM:
      return action.ns ? { ...action, ns: LARGE_OBJ } : action;
    case SET_WEBRTC:
      return action.webrtc ? { ...action, webrtc: LARGE_OBJ } : action;
    case SET_SOCKET:
      return action.socket ? { ...action, socket: LARGE_OBJ } : action;
    case SET_PLAYER:
      return action.player ? { ...action, player: LARGE_OBJ } : action;
    default:
      return action;
  }
}

export function statesFilter(state) {
  let result = state;

  [
    ['global', 'notificationSystem'],
    ['webrtc', 'webrtc'],
    ['youtube', 'player'],
    ['youtube', 'socket'],
  ].forEach(array => {
    if (result.getIn(array)) {
      result = result.setIn(array, LARGE_OBJ);
    }
  });

  return result;
}
