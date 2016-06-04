import { createAction } from 'redux-actions';

import {
  ADD_PEER_VIDEO,
  REMOVE_PEER_VIDEO,
  SELECT_PEER_VIDEO,
  SET_MUTE,
  SET_VOLUME,
  SET_WEBRTC,
  TOGGLE_VIDEO,
} from './constants';

export const addPeerVideo = createAction(ADD_PEER_VIDEO);

export const removePeerVideo = createAction(REMOVE_PEER_VIDEO);

export const selectPeerVideo = createAction(SELECT_PEER_VIDEO);

export const setMute = createAction(SET_MUTE);

export const setVolume = createAction(SET_VOLUME);

export const setWebrtc = createAction(SET_WEBRTC);

export const toggleVideo = createAction(TOGGLE_VIDEO);

export default dispatch => ({
  onReady: webrtc => dispatch(setWebrtc(webrtc)),
  addPeer: data => dispatch(addPeerVideo(data)),
  removePeer: data => dispatch(removePeerVideo(data)),
  setVolumeNumber: volume => dispatch(setVolume(volume)),
  onPeerSelect: id => dispatch(selectPeerVideo(id)),
});

