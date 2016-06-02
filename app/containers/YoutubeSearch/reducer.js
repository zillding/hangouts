import { fromJS } from 'immutable';

import {
  SET_SEARCH_TERM,
  FETCH_SEARCH_RESULT,
  SET_SEARCH_RESULT,
  SET_SEARCH_ERROR,
} from './constants';

const initialState = fromJS({
  searchTerm: '',
  isSearching: false,
  searchResult: [],
  searchError: null,
});

function youtubeSearchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return state.set('searchTerm', action.text);
    case FETCH_SEARCH_RESULT:
      return state.set('isSearching', true);
    case SET_SEARCH_RESULT:
      return state
        .set('isSearching', false)
        .set('searchResult', action.data);
    case SET_SEARCH_ERROR:
      return state
        .set('isSearching', false)
        .set('searchError', action.error);
    default:
      return state;
  }
}

export default youtubeSearchReducer;
