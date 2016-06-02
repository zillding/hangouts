import {
  SET_SEARCH_TERM,
  FETCH_SEARCH_RESULT,
  SET_SEARCH_RESULT,
  SET_SEARCH_ERROR,
} from './constants';

export function setSearchTerm(text) {
  return {
    type: SET_SEARCH_TERM,
    text,
  };
}

export function fetchSearchResult() {
  return { type: FETCH_SEARCH_RESULT };
}

export function setSearchResult(data) {
  return {
    type: SET_SEARCH_RESULT,
    data,
  };
}

export function setSearchError(error) {
  return {
    type: SET_SEARCH_ERROR,
    error,
  };
}
