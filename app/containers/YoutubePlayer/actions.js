import { setMute } from 'containers/Webrtc/actions';
import { setPlayer, setIsPlaying } from 'containers/Youtube/actions';

export default dispatch => ({
  onReady: player => dispatch(setPlayer(player)),
  onPlay() {
    dispatch(setIsPlaying(true));
    dispatch(setMute(true));
  },

  onPause() {
    dispatch(setIsPlaying(false));
    dispatch(setMute(false));
  },

  onEnd() {
    dispatch(setIsPlaying(false));
    dispatch(setMute(false));
  },

  onError() {
    dispatch(setIsPlaying(false));
    dispatch(setMute(false));
  },
});
