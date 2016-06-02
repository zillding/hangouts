import { toggleSearch } from 'containers/Youtube/actions';

import {
  SET_SEARCH_TERM,
  FETCH_SEARCH_RESULT,
  SET_SEARCH_RESULT,
  SET_SEARCH_ERROR,
} from './constants';

export const setSearchTerm = text => ({
  type: SET_SEARCH_TERM,
  text,
});

export const fetchSearchResult = () => ({ type: FETCH_SEARCH_RESULT });

export const setSearchResult = data => ({
  type: SET_SEARCH_RESULT,
  data,
});

export const setSearchError = error => ({
  type: SET_SEARCH_ERROR,
  error,
});

export default dispatch => ({
  toggleSearch: () => dispatch(toggleSearch()),
  setSearchTerm: text => dispatch(setSearchTerm(text)),
  fetchResult: () => dispatch(fetchSearchResult()),
});
