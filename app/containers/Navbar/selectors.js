import { createStructuredSelector } from 'reselect';

import { roomNameSelector } from 'containers/App/selectors';
import { selectCurrentApp } from 'containers/HomePage/selectors';
import {
  selectAudioIsMuted,
  selectVideoIsPaused,
  selectVolume,
} from 'containers/Webrtc/selectors';
import { selectIsConnected, selectShowSidebar } from 'containers/Youtube/selectors';

export default createStructuredSelector({
  roomName: roomNameSelector,
  currentApp: selectCurrentApp(),
  isConnected: selectIsConnected(),
  volume: selectVolume(),
  audioIsMuted: selectAudioIsMuted(),
  videoIsPaused: selectVideoIsPaused(),
  showSidebar: selectShowSidebar(),
});
