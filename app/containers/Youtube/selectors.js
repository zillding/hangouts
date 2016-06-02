import { createSelector, createStructuredSelector } from 'reselect';

import { roomNameSelector } from 'containers/App/selectors';
import { currentAppSelector } from 'containers/HomePage/selectors';

const youtubeSelector = state => state.get('home').get('youtube');

export const isConnectedSelector = createSelector(
  youtubeSelector,
  youtubeState => youtubeState.get('isConnected')
);

export const showSidebarSelector = createSelector(
  youtubeSelector,
  youtubeState => youtubeState.get('showSidebar')
);

export const showSearchSelector = createSelector(
  youtubeSelector,
  youtubeState => youtubeState.get('showSearch')
);

export const playlistSelector = createSelector(
  youtubeSelector,
  youtubeState => youtubeState.get('playlist')
);

export const videoIdSelector = createSelector(
  youtubeSelector,
  youtubeState => youtubeState.get('videoId')
);

export const isPlayingSelector = createSelector(
  youtubeSelector,
  youtubeState => youtubeState.get('isPlaying')
);

export default createStructuredSelector({
  roomName: roomNameSelector,
  currentApp: currentAppSelector,
  showSidebar: showSidebarSelector,
  showSearch: showSearchSelector,
});
