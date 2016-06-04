import { setApp } from 'containers/HomePage/actions';
import { setMute, toggleVideo } from 'containers/Webrtc/actions';
import { toggleSidebar } from 'containers/Youtube/actions';

export default dispatch => ({
  setCurrentApp: app => dispatch(setApp(app)),
  setMute: mute => dispatch(setMute(mute)),
  toggleVideoState: () => dispatch(toggleVideo()),
  toggleSidebarState: () => dispatch(toggleSidebar()),
});
