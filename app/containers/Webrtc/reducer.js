import {
  ADD_PEER_VIDEO,
  REMOVE_PEER_VIDEO,
  SELECT_PEER_VIDEO,
  SET_VOLUME,
  SET_WEBRTC,
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  peerVideos: [],
  selectedPeerVideoId: '',
  volume: 0,
  webrtc: null,
});

function webrtcReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PEER_VIDEO:
      return state
        .set('peerVideos', state.get('peerVideos').push(action.data));
    case REMOVE_PEER_VIDEO: {
      const index = state.get('peerVideos').findIndex(({ peer: { id } }) =>
        id === action.data.peer.id
      );
      return state
        .set('peerVideos', state.get('peerVideos').delete(index));
    }
    case SELECT_PEER_VIDEO:
      return state
        .set('selectedPeerVideoId', action.id);
    case SET_VOLUME:
      return state
        .set('volume', action.volume);
    case SET_WEBRTC:
      return state
        .set('webrtc', action.webrtc);
    default:
      return state;
  }
}

export default webrtcReducer;
