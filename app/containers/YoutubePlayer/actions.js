import { setMute } from 'containers/Webrtc/actions';
import { setPlayer } from 'containers/Youtube/actions';

export default dispatch => ({
  onReady: player => dispatch(setPlayer(player)),
  setRTCMute: mute => () => dispatch(setMute(mute)),
});
