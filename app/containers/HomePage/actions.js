import {
  SET_APP,
} from './constants';

export function setApp(app) {
  return {
    type: SET_APP,
    app,
  };
}
