import { createSelector } from 'reselect';

import { selectCurrentApp } from 'containers/HomePage/selectors';

function selectRtc() {
  return state => state.get('webrtc');
}

export function selectAudioIsMuted() {
  return createSelector(
    selectRtc(),
    globalState => globalState.get('audioIsMuted')
  );
}

function selectPeerVideos() {
  return createSelector(
    selectRtc(),
    globalState => globalState.get('peerVideos')
  );
}

function selectSelectedPeerVideoId() {
  return createSelector(
    selectRtc(),
    globalState => globalState.get('selectedPeerVideoId')
  );
}

export function selectDisplayPeerVideos() {
  return createSelector(
    selectCurrentApp(),
    selectPeerVideos(),
    selectSelectedPeerVideoId(),
    (currentApp, peerVideos, selectedId) => (
      currentApp === 'video' ?
        peerVideos.filterNot(
          ({ peer }) => peer.id === selectedId
        ) :
        peerVideos
    )
  );
}

export function selectMainPeerVideo() {
  return createSelector(
    selectPeerVideos(),
    selectSelectedPeerVideoId(),
    (peerVideos, selectedId) => peerVideos.find(({ peer }) => peer.id === selectedId)
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
