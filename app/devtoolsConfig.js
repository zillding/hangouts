import {
  SET_NOTIFICATION_SYSTEM,
} from './containers/App/constants';
import {
  SET_WEBRTC,
} from './containers/Webrtc/constants';

const LARGE_OBJ = '<<LARGE_OBJ>>';

export function actionsFilter(action) {
  switch (action.type) {
    case SET_NOTIFICATION_SYSTEM:
      return action.ns ? { ...action, ns: LARGE_OBJ } : action;
    case SET_WEBRTC:
      return action.webrtc ? { ...action, webrtc: LARGE_OBJ } : action;
    default:
      return action;
  }
}

export function statesFilter(state) {
  let result = state;

  if (result.getIn(['global', 'notificationSystem'])) {
    result = result.setIn(['global', 'notificationSystem'], LARGE_OBJ);
  }

  if (result.getIn(['webrtc', 'webrtc'])) {
    result = result.setIn(['webrtc', 'webrtc'], LARGE_OBJ);
  }

  return result;
}
