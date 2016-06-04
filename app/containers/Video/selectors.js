import { createSelector, createStructuredSelector } from 'reselect';

import { currentAppSelector } from 'containers/HomePage/selectors';
import { mainPeerVideoSelector } from 'containers/Webrtc/selectors';

const showSelector = createSelector(
  currentAppSelector,
  currentApp => currentApp === 'video',
);

export default createStructuredSelector({
  show: showSelector,
  data: mainPeerVideoSelector,
});
