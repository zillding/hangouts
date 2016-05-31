import {
  ADD_PEER_VIDEO,
  REMOVE_PEER_VIDEO,
  SELECT_PEER_VIDEO,
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
