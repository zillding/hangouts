import { createSelector, createStructuredSelector } from 'reselect';

import { roomNameSelector } from 'containers/App/selectors';
import { selectCurrentApp } from 'containers/HomePage/selectors';

function selectYoutube() {
  return state => state.get('youtube');
}

export function selectIsConnected() {
  return createSelector(
    selectYoutube(),
    youtubeState => youtubeState.get('isConnected')
  );
}

export function selectShowSidebar() {
  return createSelector(
    selectYoutube(),
    youtubeState => youtubeState.get('showSidebar')
  );
}

export function selectShowSearch() {
  return createSelector(
    selectYoutube(),
    youtubeState => youtubeState.get('showSearch')
  );
}

export function selectPlaylist() {
  return createSelector(
    selectYoutube(),
    youtubeState => youtubeState.get('playlist')
  );
}

export function selectVideoId() {
  return createSelector(
    selectYoutube(),
    youtubeState => youtubeState.get('videoId')
  );
}

export function selectIsPlaying() {
  return createSelector(
    selectYoutube(),
    youtubeState => youtubeState.get('isPlaying')
  );
}

export default createStructuredSelector({
  roomName: roomNameSelector,
  currentApp: selectCurrentApp(),
  showSidebar: selectShowSidebar(),
  showSearch: selectShowSearch(),
});
