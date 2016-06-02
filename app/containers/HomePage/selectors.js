import { createSelector, createStructuredSelector } from 'reselect';

import { roomNameSelector } from 'containers/App/selectors';

const homeSelector = state => state.get('home');

export function selectCurrentApp() {
  return createSelector(
    homeSelector,
    homeState => homeState.get('currentApp')
  );
}

export default createStructuredSelector({
  roomName: roomNameSelector,
});
