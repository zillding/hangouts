import {
  ADD_PEER_VIDEO,
  REMOVE_PEER_VIDEO,
  SELECT_PEER_VIDEO,
  SET_VOLUME,
  SET_WEBRTC,
  TOGGLE_MUTE,
  TOGGLE_VIDEO,
} from './constants';

export const addPeerVideo = data => ({
  type: ADD_PEER_VIDEO,
  data,
});

export const removePeerVideo = data => ({
  type: REMOVE_PEER_VIDEO,
  data,
});

export const selectPeerVideo = id => ({
  type: SELECT_PEER_VIDEO,
  id,
});

export const setVolume = volume => ({
  type: SET_VOLUME,
  volume,
});

export const setWebrtc = webrtc => ({
  type: SET_WEBRTC,
  webrtc,
});

export const toggleMute = () => ({ type: TOGGLE_MUTE });

export const toggleVideo = () => ({ type: TOGGLE_VIDEO });

export default dispatch => ({
  onReady: webrtc => dispatch(setWebrtc(webrtc)),
  addPeer: data => dispatch(addPeerVideo(data)),
  removePeer: data => dispatch(removePeerVideo(data)),
  setVolumeNumber: volume => dispatch(setVolume(volume)),
  onPeerSelect: id => dispatch(selectPeerVideo(id)),
});

