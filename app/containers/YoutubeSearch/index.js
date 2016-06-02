/*
 *
 * YoutubeSearch
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Flex, Item } from 'react-flex';

import mapStateToProps from './selectors';
import mapDispatchToProps from './actions';

import YoutubeSearchInput from 'components/YoutubeSearchInput';
import HideSearchButton from 'components/HideSearchButton';

const YoutubeSearch = props => {
  const {
    isSearching,
    searchTerm,
    toggleSearch,
    setSearchTerm,
    fetchResult,
  } = props;

  return (
    <Flex
      column
      alignItems="stretch"
    >
      <Flex style={{ marginBottom: 10 }}>
        <Item
          flex={1}
          style={{ marginRight: 10 }}
        >
          <YoutubeSearchInput
            isSearching={isSearching}
            value={searchTerm}
            onChange={setSearchTerm}
            onSearch={fetchResult}
          />
        </Item>
        <HideSearchButton onClick={toggleSearch} />
      </Flex>
      <Item flex={1}>
        search result
      </Item>
    </Flex>
  );
};

YoutubeSearch.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  fetchResult: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeSearch);
