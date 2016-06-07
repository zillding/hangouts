import { setApp } from 'containers/HomePage/actions';
import { setMute, toggleVideo } from 'containers/Webrtc/actions';
import { toggleSidebar } from 'containers/Youtube/actions';

export default {
  setCurrentApp: setApp,
  setMute,
  toggleVideoState: toggleVideo,
  toggleSidebarState: toggleSidebar,
};
