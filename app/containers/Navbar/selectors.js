import { createStructuredSelector } from 'reselect';

import { roomNameSelector } from 'containers/App/selectors';
import { currentAppSelector } from 'containers/HomePage/selectors';
import {
  audioIsMutedSelector,
  videoIsPausedSelector,
  volumeSelector,
} from 'containers/Webrtc/selectors';
import { isConnectedSelector, showSidebarSelector } from 'containers/Youtube/selectors';

export default createStructuredSelector({
  roomName: roomNameSelector,
  currentApp: currentAppSelector,
  isConnected: isConnectedSelector,
  volume: volumeSelector,
  audioIsMuted: audioIsMutedSelector,
  videoIsPaused: videoIsPausedSelector,
  showSidebar: showSidebarSelector,
});
