import { createSelector } from 'reselect';

function selectRtc() {
  return state => state.get('webrtc');
}

export function selectAudioIsMuted() {
  return createSelector(
    selectRtc(),
    globalState => globalState.get('audioIsMuted')
  );
}

export function selectPeerVideos() {
  return createSelector(
    selectRtc(),
    globalState => globalState.get('peerVideos')
  );
}

export function selectSelectedPeerVideoId() {
  return createSelector(
    selectRtc(),
    globalState => globalState.get('selectedPeerVideoId')
  );
}

export function selectVideoIsPaused() {
  return createSelector(
    selectRtc(),
    globalState => globalState.get('videoIsPaused')
  );
}

export function selectVolume() {
  return createSelector(
    selectRtc(),
    globalState => globalState.get('volume')
  );
}

export function selectWebrtc() {
  return createSelector(
    selectRtc(),
    globalState => globalState.get('webrtc')
  );
}
