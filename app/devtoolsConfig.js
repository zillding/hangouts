import {
  SET_NOTIFICATION_SYSTEM,
} from './containers/App/constants';

export function actionsFilter(action) {
  return action.type === SET_NOTIFICATION_SYSTEM && action.ns ?
    { ...action, ns: '<<LONG_OBJ>>' } :
    action;
}

export function statesFilter(state) {
  return state.getIn(['global', 'notificationSystem']) ?
    state.setIn(['global', 'notificationSystem'], '<<LONG_OBJ>>') :
    state;
}
