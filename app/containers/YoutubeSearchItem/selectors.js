import { createSelector } from 'reselect';

import { getVideoIndex } from 'containers/Youtube/utils';

import {
  isConnectedSelector,
  playlistSelector,
} from 'containers/Youtube/selectors';

const disableControlSelector = createSelector(
  isConnectedSelector,
  isConnected => !isConnected
);

export default createSelector(
  disableControlSelector,
  playlistSelector,
  (disableControl, playlist) => ({
    disableControl,
    getIsInPlaylist: ({ id: { videoId } }) =>
      getVideoIndex(playlist, videoId) !== -1,
  })
);
