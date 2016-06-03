import {
  sendPauseYoutube,
  sendResumeYoutube,
  sendPlayNextVideo,
  sendPlayPrevVideo,
  sendSyncPlayTime,
} from 'containers/Youtube/actions';

export default dispatch => ({
  onPause: () => dispatch(sendPauseYoutube()),
  onResume: () => dispatch(sendResumeYoutube()),
  onPrevious: () => dispatch(sendPlayPrevVideo()),
  onNext: () => dispatch(sendPlayNextVideo()),
  onSync: () => dispatch(sendSyncPlayTime()),
});
