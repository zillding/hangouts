import { createSelector, createStructuredSelector } from 'reselect';

import { roomNameSelector } from 'containers/App/selectors';
import { currentAppSelector } from 'containers/HomePage/selectors';

const rtcSelector = state => state.get('global').get('webrtc');

const webrtcSelector = createSelector(
  rtcSelector,
  rtcState => rtcState.get('webrtc')
);

export const audioIsMutedSelector = createSelector(
  rtcSelector,
  rtcState => rtcState.get('audioIsMuted')
);

const peerVideosSelector = createSelector(
  rtcSelector,
  rtcState => rtcState.get('peerVideos')
);

const selectedPeerVideoIdSelector = createSelector(
  rtcSelector,
  rtcState => rtcState.get('selectedPeerVideoId')
);

export const displayPeerVideosSelector = createSelector(
  currentAppSelector,
  peerVideosSelector,
  selectedPeerVideoIdSelector,
  (currentApp, peerVideos, selectedId) => (
    currentApp === 'video' ?
      peerVideos.filterNot(
        ({ peer }) => peer.id === selectedId
      ) :
      peerVideos
  )
);

export const mainPeerVideoSelector = createSelector(
  peerVideosSelector,
  selectedPeerVideoIdSelector,
  (peerVideos, selectedId) => peerVideos.find(({ peer }) => peer.id === selectedId)
);

export const videoIsPausedSelector = createSelector(
  rtcSelector,
  rtcState => rtcState.get('videoIsPaused')
);

export const volumeSelector = createSelector(
  rtcSelector,
  rtcState => rtcState.get('volume')
);

export default createStructuredSelector({
  webrtc: webrtcSelector,
  roomName: roomNameSelector,
  peerVideos: peerVideosSelector,
  currentApp: currentAppSelector,
});
