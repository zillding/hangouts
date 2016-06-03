import { createSelector } from 'reselect';

import { getVideoIndex } from 'containers/Youtube/utils';

import {
  disableControlSelector,
  playlistSelector,
  videoIdSelector,
} from 'containers/Youtube/selectors';

export default createSelector(
  disableControlSelector,
  playlistSelector,
  videoIdSelector,
  (disableControl, playlist, currentPlayingVideoId) => ({
    disableControl,
    getIndex: videoId => getVideoIndex(playlist, videoId),
    getIsCurrentPlayingItem: videoId => videoId === currentPlayingVideoId,
  })
);
