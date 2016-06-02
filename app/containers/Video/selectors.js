import { createStructuredSelector } from 'reselect';

import { selectCurrentApp } from 'containers/HomePage/selectors';
import { selectMainPeerVideo } from 'containers/Webrtc/selectors';

export default createStructuredSelector({
  currentApp: selectCurrentApp(),
  data: selectMainPeerVideo(),
});
