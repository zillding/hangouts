import { SET_NOTIFICATION_SYSTEM } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  notificationSystem: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION_SYSTEM:
      return state
        .set('notificationSystem', action.ns);
    default:
      return state;
  }
}

export default appReducer;
