import {
  ADD_PEER_VIDEO,
  REMOVE_PEER_VIDEO,
  SELECT_PEER_VIDEO,
  SET_MUTE_STATE,
  SET_VIDEO_STATE,
  SET_VOLUME,
  SET_WEBRTC,
} from './constants';
import { fromJS } from 'immutable';

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
    case SET_MUTE_STATE: {
      const { mute, webrtc } = action;
      if (mute) {
        webrtc.mute();
      } else {
        webrtc.unmute();
      }
      return state
        .set('audioIsMuted', mute);
    }
    case SET_VIDEO_STATE: {
      const { pause, webrtc } = action;
      if (pause) {
        webrtc.pauseVideo();
      } else {
        webrtc.resumeVideo();
      }
      return state
        .set('videoIsPaused', pause);
    }
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
