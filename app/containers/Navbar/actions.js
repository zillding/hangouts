import { setApp } from 'containers/HomePage/actions';
import { toggleMute, toggleVideo } from 'containers/Webrtc/actions';
import { toggleSidebar } from 'containers/Youtube/actions';

export default dispatch => ({
  setCurrentApp: app => dispatch(setApp(app)),
  toggleMuteState: () => dispatch(toggleMute()),
  toggleVideoState: () => dispatch(toggleVideo()),
  toggleSidebarState: () => dispatch(toggleSidebar()),
});
