import { fromJS } from 'immutable';

import {
  SET_CONNECTED,
  TOGGLE_SIDEBAR,
} from './constants';

const initialState = fromJS({
  isConnected: false,
  socket: null,
  showSidebar: true,
});

function youtubeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONNECTED:
      return state
        .set('isConnected', action.connected);
    case TOGGLE_SIDEBAR:
      return state
        .set('showSidebar', !state.get('showSidebar'));
    default:
      return state;
  }
}

export default youtubeReducer;
