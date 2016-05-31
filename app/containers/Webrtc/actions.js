import {
  ADD_PEER_VIDEO,
  REMOVE_PEER_VIDEO,
  SELECT_PEER_VIDEO,
  SET_MUTE_STATE,
  SET_VIDEO_STATE,
  SET_VOLUME,
  SET_WEBRTC,
} from './constants';

export function addPeerVideo(data) {
  return {
    type: ADD_PEER_VIDEO,
    data,
  };
}

export function removePeerVideo(data) {
  return {
    type: REMOVE_PEER_VIDEO,
    data,
  };
}

export function selectPeerVideo(id) {
  return {
    type: SELECT_PEER_VIDEO,
    id,
  };
}

export function setMuteState(mute, webrtc) {
  return {
    type: SET_MUTE_STATE,
    mute,
    webrtc,
  };
}

export function setVideoState(pause, webrtc) {
  return {
    type: SET_VIDEO_STATE,
    pause,
    webrtc,
  };
}

export function setVolume(volume) {
  return {
    type: SET_VOLUME,
    volume,
  };
}

export function setWebrtc(webrtc) {
  return {
    type: SET_WEBRTC,
    webrtc,
  };
}
