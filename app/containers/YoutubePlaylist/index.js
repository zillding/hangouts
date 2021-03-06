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
      {
        playlist.size > 0 ?
          <PlaylistShowSearchButton onClick={showSearch} /> :
          null
      }
    </Flex>
    <SidebarScrollItem>
      {
        playlist.size === 0 ?
          <PlaylistEmptyMessage onActionClick={showSearch} /> :
          playlist.map((data) =>
            <YoutubePlaylistItem
              key={data.id.videoId}
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
