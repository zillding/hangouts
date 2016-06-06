import { createSelector, createStructuredSelector } from 'reselect';

import { roomNameSelector } from 'containers/App/selectors';
import { currentAppSelector } from 'containers/HomePage/selectors';
import { isSearchingSelector } from 'containers/YoutubeSearch/selectors';

const youtubeSelector = state => state.get('home').get('youtube');

export const isConnectedSelector = createSelector(
  youtubeSelector,
  youtubeState => youtubeState.get('isConnected')
);

export const disableControlSelector = createSelector(
  isConnectedSelector,
  isConnected => !isConnected
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

export const isSendingSelector = createSelector(
  youtubeSelector,
  youtubeState => youtubeState.get('isSending')
);

const showProgressBarSelector = createSelector(
  isSendingSelector,
  isSearchingSelector,
  (map, isSearching) => !map.every(value => !value) || isSearching
);

const getShowControl = createSelector(
  videoIdSelector,
  videoId => !!videoId
);

const getNotification = createSelector(
  youtubeSelector,
  youtubeState => youtubeState.get('notification')
);

const getShowSnackbar = createSelector(
  getNotification,
  notification => notification.get('open')
);

const getSnackbarMessage = createSelector(
  getNotification,
  notification => notification.get('message')
);

export default createStructuredSelector({
  roomName: roomNameSelector,
  currentApp: currentAppSelector,
  showSidebar: showSidebarSelector,
  showSearch: showSearchSelector,
  showProgress: showProgressBarSelector,
  showControl: getShowControl,
  showSnackbar: getShowSnackbar,
  snackbarMessage: getSnackbarMessage,
});
