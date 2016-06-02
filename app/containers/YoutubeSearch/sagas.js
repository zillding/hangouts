import { take, call, put, select, race } from 'redux-saga/effects';
import { stringify } from 'qs';
import { LOCATION_CHANGE } from 'react-router-redux';

import { FETCH_SEARCH_RESULT } from './constants';
import { setSearchResult, setSearchError } from './actions';

import request from 'utils/request';
import { searchTermSelector } from './selectors';

// Bootstrap sagas
export default [
  getYoutubeSearchData,
];

// Individual exports for testing
export function* getYoutubeSearchData() {
  while (true) { // eslint-disable-line no-constant-condition
    const watcher = yield race({
      fetchResult: take(FETCH_SEARCH_RESULT),
      stop: take(LOCATION_CHANGE), // stop watching if user change search term
    });

    if (watcher.stop) break;

    const searchTerm = yield select(searchTermSelector);
    const searchParams = {
      part: 'snippet',
      key: 'AIzaSyAFAW8si9cN1Rx5No-AEGmZY-ZFPK5me-I',
      q: searchTerm,
      type: 'video',
      maxResults: 30,
    };
    const requestURL = `https://www.googleapis.com/youtube/v3/search?${stringify(searchParams)}`;

    // call from redux-saga for easier testing
    const result = yield call(request, requestURL);

    // return an object in a specific format, see utils/request.js for more information
    if (result.err === undefined || result.err === null) {
      yield put(setSearchResult(result.data));
    } else {
      console.log(result.err.response); // eslint-disable-line no-console
      yield put(setSearchError(result.err));
    }
  }
}
