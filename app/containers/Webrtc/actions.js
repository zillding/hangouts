import {
  SET_WEBRTC,
} from './constants';

export function setWebrtc(webrtc) {
  return {
    type: SET_WEBRTC,
    webrtc,
  };
}
