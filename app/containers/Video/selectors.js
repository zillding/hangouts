import { createStructuredSelector } from 'reselect';

import { currentAppSelector } from 'containers/HomePage/selectors';
import { mainPeerVideoSelector } from 'containers/Webrtc/selectors';

export default createStructuredSelector({
  currentApp: currentAppSelector,
  data: mainPeerVideoSelector,
});
