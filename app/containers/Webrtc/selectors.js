import { createSelector } from 'reselect';

function selectGlobal() {
  return state => state.get('webrtc');
}

export function selectAudioIsMuted() {
  return createSelector(
    selectGlobal(),
    globalState => globalState.get('audioIsMuted')
  );
}

export function selectPeerVideos() {
  return createSelector(
    selectGlobal(),
    globalState => globalState.get('peerVideos')
  );
}

export function selectSelectedPeerVideoId() {
  return createSelector(
    selectGlobal(),
    globalState => globalState.get('selectedPeerVideoId')
  );
}

export function selectVideoIsPaused() {
  return createSelector(
    selectGlobal(),
    globalState => globalState.get('videoIsPaused')
  );
}

export function selectVolume() {
  return createSelector(
    selectGlobal(),
    globalState => globalState.get('volume')
  );
}

export function selectWebrtc() {
  return createSelector(
    selectGlobal(),
    globalState => globalState.get('webrtc')
  );
}
