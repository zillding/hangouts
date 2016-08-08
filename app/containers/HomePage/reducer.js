import { combineReducers } from 'redux-immutable';

import youtubeReducer from 'containers/Youtube/reducer';
import youtubeSearchReducer from 'containers/YoutubeSearch/reducer';

import {
  SET_APP,
} from './constants';

function currentApp(state = 'youtube', action) {
  switch (action.type) {
    case SET_APP:
      return action.app;
    default:
      return state;
  }
}

export default combineReducers({
  currentApp,
  youtube: youtubeReducer,
  youtubeSearch: youtubeSearchReducer,
});
