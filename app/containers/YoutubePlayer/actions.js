import { setPlayer } from 'containers/Youtube/actions';

export default dispatch => ({
  onReady: player => dispatch(setPlayer(player)),
});
