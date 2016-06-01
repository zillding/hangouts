import { createSelector } from 'reselect';

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
