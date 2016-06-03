import { createSelector } from 'reselect';

import { getVideoIndex } from 'containers/Youtube/utils';

import {
  disableControlSelector,
  playlistSelector,
} from 'containers/Youtube/selectors';

export default createSelector(
  disableControlSelector,
  playlistSelector,
  (disableControl, playlist) => ({
    disableControl,
    getIsInPlaylist: videoId => getVideoIndex(playlist, videoId) !== -1,
  })
);