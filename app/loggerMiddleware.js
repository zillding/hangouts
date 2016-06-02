import createLogger from 'redux-logger';

import { SET_VOLUME } from 'containers/Webrtc/constants';

const loggerMiddleware = createLogger({
  predicate: (getState, { type }) => type !== SET_VOLUME,
  stateTransformer: state => state.toJS(),
});

export default loggerMiddleware;
