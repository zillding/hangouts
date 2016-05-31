import { fromJS } from 'immutable';

import {
  SET_APP,
} from './constants';

const initialState = fromJS({
  currentApp: 'video',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_APP:
      return state
        .set('currentApp', action.app);
    default:
      return state;
  }
}

export default homeReducer;
