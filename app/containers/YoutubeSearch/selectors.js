import { createSelector } from 'reselect';

const youtubeSearchSelector = state => state.get('youtubeSearch');

export const searchTermSelector = createSelector(
    youtubeSearchSelector,
    searchState => searchState.get('searchTerm')
);

export const isSearchingSelector = createSelector(
  youtubeSearchSelector,
  searchState => searchState.get('isSearching')
);

export const searchResultSelector = createSelector(
  youtubeSearchSelector,
  searchState => searchState.get('searchResult')
);

export const searchErrorSelector = createSelector(
  youtubeSearchSelector,
  searchState => searchState.get('searchError')
);
