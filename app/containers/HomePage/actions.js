import { push } from 'react-router-redux';

import {
  SET_APP,
} from './constants';

export function setApp(app) {
  return {
    type: SET_APP,
    app,
  };
}

export default dispatch => ({
  goToSplash: () => dispatch(push('splash')),
});
