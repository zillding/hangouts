import { createSelector } from 'reselect';

function selectHome() {
  return state => state.get('home');
}

export function selectCurrentApp() {
  return createSelector(
    selectHome(),
    homeState => homeState.get('currentApp')
  );
}
