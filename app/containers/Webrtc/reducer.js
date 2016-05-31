import {
  SET_WEBRTC,
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  webrtc: null,
});

function webrtcReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEBRTC:
      return state
        .set('webrtc', action.webrtc);
    default:
      return state;
  }
}

export default webrtcReducer;
