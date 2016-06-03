import { createSelector, createStructuredSelector } from 'reselect';

import { getNextVideoId, getPreviousVideoId } from 'containers/Youtube/utils';

import {
  disableControlSelector,
  playlistSelector,
  videoIdSelector,
  isPlayingSelector,
  isSendingSelector,
} from 'containers/Youtube/selectors';

const loadingPauseSelector = createSelector(
  isSendingSelector,
  map => map.get('pause')
);

const loadingResumeSelector = createSelector(
  isSendingSelector,
  map => map.get('resume')
);

const loadingPreviousSelector = createSelector(
  isSendingSelector,
  map => map.get('playPrevious')
);

const loadingNextSelector = createSelector(
  isSendingSelector,
  map => map.get('playNext')
);

const loadingSyncSelector = createSelector(
  isSendingSelector,
  map => map.get('syncTime')
);

const disablePlaySelector = createSelector(
  disableControlSelector,
  videoIdSelector,
  (disable, currentPlayingVideoId) => disable || currentPlayingVideoId === ''
);

const disablePreviousSelector = createSelector(
  disableControlSelector,
  playlistSelector,
  videoIdSelector,
  (disable, playlist, currentPlayingVideoId) =>
    disable || getPreviousVideoId(playlist, currentPlayingVideoId) === ''
);

const disableNextSelector = createSelector(
  disableControlSelector,
  playlistSelector,
  videoIdSelector,
  (disable, playlist, currentPlayingVideoId) =>
    disable || getNextVideoId(playlist, currentPlayingVideoId) === ''
);

export default createStructuredSelector({
  isPlaying: isPlayingSelector,

  loadingPause: loadingPauseSelector,
  loadingResume: loadingResumeSelector,
  loadingPrevious: loadingPreviousSelector,
  loadingNext: loadingNextSelector,
  loadingSync: loadingSyncSelector,

  disablePause: disablePlaySelector,
  disableResume: disablePlaySelector,
  disablePrevious: disablePreviousSelector,
  disableNext: disableNextSelector,
  disableSync: disablePlaySelector,
});
