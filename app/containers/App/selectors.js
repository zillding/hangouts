import { createSelector } from 'reselect';

function selectGlobal() {
  return state => state.get('global');
}

export function selectRoomName() {
  return createSelector(
    selectGlobal(),
    globalState => globalState.get('roomName')
  );
}

// selectLocationState expects a plain JS object for the routing state
export function selectLocationState() {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
}
