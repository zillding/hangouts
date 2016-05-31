export function statesFilter(state) {
  return state.getIn(['global', 'notificationSystem']) ?
    state.setIn(['global', 'notificationSystem'], '<<LONG_OBJ>>') :
    state;
}
