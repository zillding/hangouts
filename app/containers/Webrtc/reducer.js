import { fromJS } from 'immutable';

import {
  ADD_PEER_VIDEO,
  REMOVE_PEER_VIDEO,
  SELECT_PEER_VIDEO,
  SET_VOLUME,
  SET_WEBRTC,
  TOGGLE_MUTE,
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
    case TOGGLE_MUTE: {
      const audioIsMuted = state.get('audioIsMuted');
      const webrtc = state.get('webrtc');
      if (audioIsMuted) {
        webrtc.unmute();
      } else {
        webrtc.mute();
      }
      return state
        .set('audioIsMuted', !audioIsMuted);
    }
    case TOGGLE_VIDEO: {
      const videoIsPaused = state.get('videoIsPaused');
      const webrtc = state.get('webrtc');
      if (videoIsPaused) {
        webrtc.resumeVideo();
      } else {
        webrtc.pauseVideo();
      }
      return state
        .set('videoIsPaused', !videoIsPaused);
    }
    default:
      return state;
  }
}

export default webrtcReducer;
