import { push } from 'react-router-redux';

import {
  SET_APP,
} from './constants';

export const setApp = app => ({
  type: SET_APP,
  app,
});

export default dispatch => ({
  goToSplash: () => dispatch(push('splash')),
});
