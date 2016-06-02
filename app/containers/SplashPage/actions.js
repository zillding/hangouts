import { push } from 'react-router-redux';
import { setRoomName } from 'containers/App/actions';

export default dispatch => ({
  goToHome: () => dispatch(push('/')),
  onSubmit: name => dispatch(setRoomName(name)),
});
