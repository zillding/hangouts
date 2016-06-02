import { createSelector, createStructuredSelector } from 'reselect';

import { getVideoIndex } from 'containers/Youtube/utils';

import {
  isConnectedSelector,
  playlistSelector,
} from 'containers/Youtube/selectors';

const disableControlSelector = createSelector(
  isConnectedSelector,
  isConnected => !isConnected
);

function getIsInPlaylist({ id: { videoId } }) {
  return createSelector(
    playlistSelector,
    playlist => getVideoIndex(playlist, videoId) !== -1
  );
}

export default createStructuredSelector({
  disableControl: disableControlSelector,
  getIsInPlaylist,
});

// createSelector(
//   disableControlSelector,
//   playlistSelector,
//   (disableControl, playlist) => ({
//     disableControl,
//     getIsInPlaylist: ({ id: { videoId } }) =>
//       getVideoIndex(playlist, videoId) !== -1,
//   })
// );
