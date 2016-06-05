import { createSelector } from 'reselect';

import { getVideoIndex } from 'containers/Youtube/utils';

import {
  disableControlSelector,
  playlistSelector,
} from 'containers/Youtube/selectors';

const getVideoId = (_, { data }) => data.id.videoId;

export default createSelector(
  disableControlSelector,
  playlistSelector,
  getVideoId,
  (disableControl, playlist, videoId) => ({
    disableControl,
    isInPlaylist: getVideoIndex(playlist, videoId) !== -1,
  })
);
