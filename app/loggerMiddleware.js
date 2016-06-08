import createLogger from 'redux-logger';
import { fromJS } from 'immutable';

import { SET_VOLUME } from 'containers/Webrtc/constants';
import { SET_SEARCH_TERM } from 'containers/YoutubeSearch/constants';

const ignoredActions = fromJS([
  SET_VOLUME,
  SET_SEARCH_TERM,
]);

const loggerMiddleware = createLogger({
  predicate: (getState, { type }) => !ignoredActions.includes(type),
  stateTransformer: state => state.toJS(),
});

export default loggerMiddleware;
