import { setMute } from 'containers/Webrtc/actions';
import { setPlayer } from 'containers/Youtube/actions';

export default dispatch => ({
  onReady: player => dispatch(setPlayer(player)),
  onPlay: () => dispatch(setMute(true)),
  onPause: () => dispatch(setMute(false)),
  onEnd: () => dispatch(setMute(false)),
});
