import {
  SET_NOTIFICATION_SYSTEM,
  SET_SOCKET,
} from './containers/App/constants';
import {
  SET_MUTE_STATE,
  SET_VIDEO_STATE,
  SET_WEBRTC,
} from './containers/Webrtc/constants';

const LARGE_OBJ = '<<LARGE_OBJ>>';

export function actionsFilter(action) {
  switch (action.type) {
    case SET_NOTIFICATION_SYSTEM:
      return action.ns ? { ...action, ns: LARGE_OBJ } : action;
    case SET_SOCKET:
      return action.socket ? { ...action, socket: LARGE_OBJ } : action;
    case SET_MUTE_STATE:
      return action.webrtc ? { ...action, webrtc: LARGE_OBJ } : action;
    case SET_VIDEO_STATE:
      return action.webrtc ? { ...action, webrtc: LARGE_OBJ } : action;
    case SET_WEBRTC:
      return action.webrtc ? { ...action, webrtc: LARGE_OBJ } : action;
    default:
      return action;
  }
}

export function statesFilter(state) {
  let result = state;

  [
    ['global', 'notificationSystem'],
    ['global', 'socket'],
    ['webrtc', 'webrtc'],
  ].forEach(array => {
    if (result.getIn(array)) {
      result = result.setIn(array, LARGE_OBJ);
    }
  });

  return result;
}
