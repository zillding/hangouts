import { fromJS } from 'immutable';

import {
  ADD_PEER_VIDEO,
  REMOVE_PEER_VIDEO,
  SELECT_PEER_VIDEO,
  SET_MUTE,
  SET_VOLUME,
  SET_WEBRTC,
  TOGGLE_VIDEO,
} from './constants';

const initialState = fromJS({
  audioIsMuted: false,
  peerVideos: [],
  selectedPeerVideoId: '',
  videoIsPaused: false,
  volume: 0,
  webrtc: null,
});

function webrtcReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_PEER_VIDEO:
      return state.set('peerVideos', state.get('peerVideos').push(payload));
    case REMOVE_PEER_VIDEO: {
      const index = state.get('peerVideos').findIndex(({ peer: { id } }) =>
        id === payload.peer.id
      );
      return state.set('peerVideos', state.get('peerVideos').delete(index));
    }
    case SELECT_PEER_VIDEO:
      return state.set('selectedPeerVideoId', payload);
    case SET_MUTE: {
      const webrtc = state.get('webrtc');
      payload ? webrtc.mute() : webrtc.unmute(); // eslint-disable-line
      return state.set('audioIsMuted', !!payload);
    }
    case SET_VOLUME:
      return state.set('volume', payload);
    case SET_WEBRTC:
      return state.set('webrtc', payload);
    case TOGGLE_VIDEO: {
      const videoIsPaused = state.get('videoIsPaused');
      const webrtc = state.get('webrtc');
      videoIsPaused ? webrtc.resumeVideo() : webrtc.pauseVideo(); // eslint-disable-line
      return state.set('videoIsPaused', !videoIsPaused);
    }
    default:
      return state;
  }
}

export default webrtcReducer;
