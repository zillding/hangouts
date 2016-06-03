import { toggleSearch } from 'containers/Youtube/actions';

export default dispatch => ({
  showSearch: () => dispatch(toggleSearch()),
});
