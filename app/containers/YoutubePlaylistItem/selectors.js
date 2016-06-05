import { createSelector, createStructuredSelector } from 'reselect';

import { getVideoIndex } from 'containers/Youtube/utils';

import {
  disableControlSelector,
  playlistSelector,
  videoIdSelector,
} from 'containers/Youtube/selectors';

const getVideoId = (_, { data }) => data.id.videoId;

const getIndex = createSelector(
  playlistSelector,
  getVideoId,
  (playlist, videoId) => getVideoIndex(playlist, videoId)
);

const getIsCurrentPlayingItem = createSelector(
  videoIdSelector,
  getVideoId,
  (currentPlayingVideoId, videoId) => currentPlayingVideoId === videoId
);

export default createStructuredSelector({
  disableControl: disableControlSelector,
  index: getIndex,
  isCurrentPlayingItem: getIsCurrentPlayingItem,
});
