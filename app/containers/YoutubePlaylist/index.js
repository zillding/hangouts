/*
 *
 * YoutubePlaylist
 *
 */

import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Flex } from 'react-flex';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import PlaylistEmptyMessage from 'components/PlaylistEmptyMessage';
import PlaylistHeader from 'components/PlaylistHeader';
import PlaylistShowSearchButton from 'components/PlaylistShowSearchButton';
import SidebarContainer from 'components/SidebarContainer';
import SidebarScrollItem from 'components/SidebarScrollItem';
import YoutubePlaylistItem from 'containers/YoutubePlaylistItem';

const YoutubePlaylist = ({ playlist, showSearch }) => (
  <SidebarContainer>
    <Flex
      justifyContent="space-between"
      style={{ marginBottom: 10 }}
    >
      <PlaylistHeader />
      <PlaylistShowSearchButton onClick={showSearch} />
    </Flex>
    <SidebarScrollItem>
      {
        playlist.size === 0 ?
          <PlaylistEmptyMessage /> :
          playlist.map((data, key) =>
            <YoutubePlaylistItem
              key={key}
              data={data}
            />
          )
      }
    </SidebarScrollItem>
  </SidebarContainer>
);

YoutubePlaylist.propTypes = {
  playlist: PropTypes.instanceOf(List).isRequired,
  showSearch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlaylist);
