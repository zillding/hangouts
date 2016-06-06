/*
 *
 * YoutubeSearch
 *
 */

import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Flex, Item } from 'react-flex';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import HideSearchButton from 'components/HideSearchButton';
import SearchErrorMessage from 'components/SearchErrorMessage';
import SidebarContainer from 'components/SidebarContainer';
import SidebarScrollItem from 'components/SidebarScrollItem';
import YoutubeSearchInput from 'components/YoutubeSearchInput';
import YoutubeSearchItem from 'containers/YoutubeSearchItem';

const YoutubeSearch = props => {
  const {
    isSearching,
    searchTerm,
    searchResult,
    searchError,
    toggleSearch,
    setSearchTerm,
    fetchResult,
  } = props;

  return (
    <SidebarContainer>
      <Flex style={{ marginBottom: 10 }}>
        <Item
          flex={1}
          style={{ marginRight: 10 }}
        >
          <YoutubeSearchInput
            loading={isSearching}
            value={searchTerm}
            onChange={setSearchTerm}
            onSubmit={fetchResult}
          />
        </Item>
        <HideSearchButton onClick={toggleSearch} />
      </Flex>
      <SidebarScrollItem>
        {
          searchError ?
            <SearchErrorMessage error={searchError} /> :
            searchResult.map((data, key) =>
              <YoutubeSearchItem
                key={key}
                data={data}
              />
            )
        }
      </SidebarScrollItem>
    </SidebarContainer>
  );
};

YoutubeSearch.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchResult: PropTypes.instanceOf(List).isRequired,
  searchError: PropTypes.object,
  toggleSearch: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  fetchResult: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeSearch);
